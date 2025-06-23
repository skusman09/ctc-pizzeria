
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartSummaryProps {
  showActions?: boolean;
}

const CartSummary = ({ showActions = true }: CartSummaryProps) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Your Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 text-center py-8">
            Your cart is empty. Add some delicious burgers!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white flex justify-between">
          Your Cart
          <span className="text-sm font-normal text-gray-600 dark:text-gray-300">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex items-center space-x-4 p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
              <p className="text-burger-600 dark:text-bun-400 font-semibold">
                ${item.price.toFixed(2)}
              </p>
            </div>
            
            {showActions && (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="h-8 w-8 p-0 border-gray-300 dark:border-gray-600"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                
                <span className="w-8 text-center text-gray-900 dark:text-white">
                  {item.quantity}
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="h-8 w-8 p-0 border-gray-300 dark:border-gray-600"
                >
                  <Plus className="h-3 w-3" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                  className="h-8 w-8 p-0 border-red-300 dark:border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            )}
            
            {!showActions && (
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-300">Qty: {item.quantity}</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            )}
          </motion.div>
        ))}
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-gray-900 dark:text-white">Total:</span>
            <span className="text-burger-600 dark:text-bun-400">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
