
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, X, ShoppingCart, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface CartSummaryProps {
  showActions?: boolean;
  onClose?: () => void;
}

const CartSummary = ({ showActions = true, onClose }: CartSummaryProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleClearCart = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 300));
    clearCart();
    setShowClearConfirmation(false);
    setIsLoading(false);
    toast({
      title: "Cart Cleared! 🧹",
      description: "All items have been removed from your cart.",
      duration: 3000,
    });
  };

  const handleRemoveItem = (itemId: string, itemName: string) => {
    removeFromCart(itemId);
    toast({
      title: "Item Removed",
      description: `${itemName} has been removed from your cart.`,
      duration: 2000,
    });
  };

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 200));
    updateQuantity(itemId, newQuantity);
    setIsLoading(false);
  };

  if (items.length === 0) {
    return (
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full flex flex-col">
        <CardHeader className="pb-3 sm:pb-4 flex-shrink-0">
          <CardTitle className="text-gray-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            Your Cart
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 flex-1 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🛒</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
              Your cart is empty. Add some delicious items!
            </p>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Browse our menu to get started
            </div>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 relative overflow-hidden">
      {/* Clear Confirmation Modal */}
      <AnimatePresence>
        {showClearConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 max-w-sm w-full"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Clear Cart?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Are you sure you want to remove all items from your cart? This action cannot be undone.
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowClearConfirmation(false)}
                  variant="outline"
                  className="flex-1 text-sm"
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleClearCart}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm"
                  disabled={isLoading}
                >
                  {isLoading ? "Clearing..." : "Clear All"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header - Fixed */}
      <div className="flex-shrink-0 pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-gray-900 dark:text-white flex items-center gap-2 text-base sm:text-lg font-semibold">
            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            Your Cart
            <span className="text-xs sm:text-sm font-normal text-gray-600 dark:text-gray-300 ml-1">
              ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
            </span>
          </div>
          <Button
            onClick={() => setShowClearConfirmation(true)}
            variant="outline"
            size="sm"
            className="h-8 px-2 sm:px-3 text-xs border-red-300 dark:border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
            aria-label="Clear all items from cart"
          >
            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span>Clear</span>
          </Button>
        </div>
      </div>
      
      {/* Scrollable Items Area - Flexible */}
      <div className="cart-scroll flex-1 overflow-y-auto px-3 sm:px-6 py-3 sm:py-4" style={{scrollbarWidth:'thin', scrollbarColor:'#4b5563 transparent'}}>
        <div className="space-y-2 sm:space-y-3">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop";
                    }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-orange-600 dark:text-orange-400 font-semibold text-xs sm:text-sm">
                    ₹{item.price.toFixed(0)}
                  </p>
                </div>
                
                {showActions && (
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="h-6 w-6 sm:h-7 sm:w-7 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-2 focus:ring-orange-500"
                      disabled={isLoading}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                    </Button>
                    
                    <span className="w-6 sm:w-8 text-center text-gray-900 dark:text-white text-xs sm:text-sm font-medium min-w-fit">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="h-6 w-6 sm:h-7 sm:w-7 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-2 focus:ring-orange-500"
                      disabled={isLoading}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="h-6 w-6 sm:h-7 sm:w-7 p-0 border-red-300 dark:border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 ml-1 focus:ring-2 focus:ring-red-500"
                      disabled={isLoading}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X className="h-2 w-2 sm:h-3 sm:w-3" />
                    </Button>
                  </div>
                )}
                
                {!showActions && (
                  <div className="text-right flex-shrink-0 min-w-fit">
                    <p className="text-xs text-gray-600 dark:text-gray-300">Qty: {item.quantity}</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                      ₹{(item.price * item.quantity).toFixed(0)}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
        
      {/* Footer - Fixed */}
      <motion.div 
        className="flex-shrink-0 border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4 px-3 sm:px-6 pb-3 sm:pb-4 bg-white dark:bg-gray-800 space-y-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-center text-base sm:text-lg font-bold">
          <span className="text-gray-900 dark:text-white">Total:</span>
          <span className="text-orange-600 dark:text-orange-400">
            ₹{getTotalPrice().toFixed(0)}
          </span>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Taxes and delivery charges will be calculated at checkout
        </div>
        {showActions && (
          <Button
            onClick={() => {
              onClose?.();
              navigate('/checkout');
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-orange-500/30"
          >
            Proceed to Checkout
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default CartSummary;
