
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { getMenuItemById } from '@/data/menu';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
  loading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const GUEST_CART_KEY = 'ctc-guest-cart';

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load cart from Supabase for a logged-in user
  const loadCartFromDB = useCallback(async (uid: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', uid);

      if (error) throw error;

      if (data) {
        const loadedItems: CartItem[] = data.map((row: any) => {
          const menuItem = getMenuItemById(row.menu_item_id);
          return {
            id: row.menu_item_id,
            name: menuItem?.name ?? row.menu_item_id,
            price: menuItem ? parseFloat(menuItem.price.replace('₹', '')) : 0,
            quantity: row.quantity,
            image: menuItem?.image ?? "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
          };
        });
        setItems(loadedItems);
      }
    } catch (err) {
      console.error('Error loading cart from DB:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save a single cart item to Supabase (upsert)
  const saveItemToDB = useCallback(async (uid: string, item: CartItem) => {
    await supabase.from('cart_items').upsert(
      {
        user_id: uid,
        menu_item_id: item.id,
        quantity: item.quantity,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,menu_item_id' }
    );
  }, []);

  // Delete a single cart item from Supabase
  const removeItemFromDB = useCallback(async (uid: string, itemId: string) => {
    await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', uid)
      .eq('menu_item_id', itemId);
  }, []);

  // Clear all cart items from Supabase
  const clearCartFromDB = useCallback(async (uid: string) => {
    await supabase.from('cart_items').delete().eq('user_id', uid);
  }, []);

  // Listen to auth state changes
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      const uid = session?.user?.id ?? null;

      if (uid) {
        // User just logged in — load their saved DB cart
        setUserId(uid);
        await loadCartFromDB(uid);
      } else {
        // User just logged out — clear state and load guest cart from localStorage
        setUserId(null);
        const saved = localStorage.getItem(GUEST_CART_KEY);
        setItems(saved ? JSON.parse(saved) : []);
        setLoading(false);
      }
    });

    // On first mount, check existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const uid = session?.user?.id ?? null;
      if (uid) {
        setUserId(uid);
        await loadCartFromDB(uid);
      } else {
        const saved = localStorage.getItem(GUEST_CART_KEY);
        setItems(saved ? JSON.parse(saved) : []);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [loadCartFromDB]);

  // Persist guest cart to localStorage whenever items change (only when not logged in)
  useEffect(() => {
    if (!userId) {
      localStorage.setItem(GUEST_CART_KEY, JSON.stringify(items));
    }
  }, [items, userId]);

  const addToCart = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id);
      let updated: CartItem[];
      if (existing) {
        updated = prev.map(i =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updated = [...prev, { ...newItem, quantity: 1 }];
      }

      // Sync to DB if logged in
      if (userId) {
        const updatedItem = updated.find(i => i.id === newItem.id)!;
        saveItemToDB(userId, updatedItem);
      }

      return updated;
    });
  }, [userId, saveItemToDB]);

  const removeFromCart = useCallback((id: string) => {
    setItems(prev => {
      const updated = prev.filter(i => i.id !== id);
      if (userId) removeItemFromDB(userId, id);
      return updated;
    });
  }, [userId, removeItemFromDB]);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, quantity } : i);
      if (userId) {
        const updatedItem = updated.find(i => i.id === id);
        if (updatedItem) saveItemToDB(userId, updatedItem);
      }
      return updated;
    });
  }, [userId, removeFromCart, saveItemToDB]);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const clearCart = useCallback(() => {
    setItems([]);
    if (userId) {
      clearCartFromDB(userId);
    } else {
      localStorage.removeItem(GUEST_CART_KEY);
    }
  }, [userId, clearCartFromDB]);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalPrice,
      clearCart,
      loading,
    }}>
      {children}
    </CartContext.Provider>
  );
};
