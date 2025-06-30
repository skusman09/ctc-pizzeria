
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import ThemeToggle from '@/components/ThemeToggle';
import CartSummary from '@/components/CartSummary';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems, clearCart } = useCart();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
    { name: 'Hours', href: '/hours' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleOrderNow = () => {
    navigate('/menu');
    setIsOpen(false);
  };

  const totalItems = getTotalItems();

  const handleCheckout = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-orange-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 dark:text-orange-400 transition-colors duration-300"
            >
              🍕 CTC Pizzeria
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-orange-600 dark:text-orange-400'
                    : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-orange-600 dark:bg-orange-400"
                  />
                )}
              </Link>
            ))}
            
            {/* Cart Icon with Sheet */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="relative p-2 hover:bg-orange-50 dark:hover:bg-gray-800">
                  <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 dark:text-gray-200" />
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-orange-600 dark:bg-orange-500 text-white text-xs rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center font-bold text-[10px] lg:text-xs"
                    >
                      {totalItems > 99 ? '99+' : totalItems}
                    </motion.span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg bg-white dark:bg-gray-900 p-4">
                <SheetHeader className="pb-4">
                  <SheetTitle className="text-gray-900 dark:text-white text-lg">Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto pr-2">
                    <CartSummary showActions={true} />
                  </div>
                  {totalItems > 0 && (
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3 mt-4">
                      <Button
                        onClick={handleCheckout}
                        className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-3"
                        size="lg"
                      >
                        Proceed to Checkout
                      </Button>
                      <Button
                        onClick={clearCart}
                        variant="outline"
                        className="w-full border-red-300 dark:border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        Clear Cart
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            
            <ThemeToggle />
            <Button 
              onClick={handleOrderNow}
              className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white text-sm px-4 py-2 transition-colors duration-200"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Cart Icon */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="relative p-2 hover:bg-orange-50 dark:hover:bg-gray-800">
                  <ShoppingCart className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-orange-600 dark:bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold text-[10px]"
                    >
                      {totalItems > 99 ? '99+' : totalItems}
                    </motion.span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full bg-white dark:bg-gray-900 p-4">
                <SheetHeader className="pb-4">
                  <SheetTitle className="text-gray-900 dark:text-white">Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto pr-2">
                    <CartSummary showActions={true} />
                  </div>
                  {totalItems > 0 && (
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3 mt-4">
                      <Button
                        onClick={handleCheckout}
                        className="w-full bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-3"
                        size="lg"
                      >
                        Proceed to Checkout
                      </Button>
                      <Button
                        onClick={clearCart}
                        variant="outline"
                        className="w-full border-red-300 dark:border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        Clear Cart
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-gray-800'
                    : 'text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={handleOrderNow}
              className="w-full mt-3 bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-3"
            >
              Order Now
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
