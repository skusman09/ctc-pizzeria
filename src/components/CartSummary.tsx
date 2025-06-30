
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
      <Card className="bg-white dark:bg-gray-800 shadow-lg border-gray-200 dark:border-gray-700">
        <CardHeader className="pb-4">
          <CardTitle className="text-gray-900 dark:text-white text-lg">Your Cart</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="text-center py-6 sm:py-8">
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🛒</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Your cart is empty. Add some delicious items!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg border-gray-200 dark:border-gray-700">
      <CardHeader className="pb-3 sm:pb-4 px-3 sm:px-6 pt-3 sm:pt-6">
        <CardTitle className="text-gray-900 dark:text-white flex justify-between text-base sm:text-lg">
          Your Cart
          <span className="text-xs sm:text-sm font-normal text-gray-600 dark:text-gray-300">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6 pb-3 sm:pb-6">
        <div className="max-h-60 sm:max-h-80 overflow-y-auto pr-2 space-y-3 sm:space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/50"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base line-clamp-1">{item.name}</h4>
                <p className="text-orange-600 dark:text-orange-400 font-semibold text-sm sm:text-base">
                  ₹{item.price.toFixed(0)}
                </p>
              </div>
              
              {showActions && (
                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-6 w-6 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                  </Button>
                  
                  <span className="w-6 sm:w-8 text-center text-gray-900 dark:text-white text-sm sm:text-base font-medium">
                    {item.quantity}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-6 w-6 sm:h-8 sm:w-8 p-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="h-6 w-6 sm:h-8 sm:w-8 p-0 border-red-300 dark:border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 ml-1 sm:ml-2"
                  >
                    <Trash2 className="h-2 w-2 sm:h-3 sm:w-3" />
                  </Button>
                </div>
              )}
              
              {!showActions && (
                <div className="text-right flex-shrink-0">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Qty: {item.quantity}</p>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    ₹{(item.price * item.quantity).toFixed(0)}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4 mt-3 sm:mt-4">
          <div className="flex justify-between items-center text-base sm:text-lg font-bold">
            <span className="text-gray-900 dark:text-white">Total:</span>
            <span className="text-orange-600 dark:text-orange-400">
              ₹{getTotalPrice().toFixed(0)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
