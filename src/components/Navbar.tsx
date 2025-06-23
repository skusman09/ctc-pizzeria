
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-burger-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-burger-600 dark:text-bun-400 transition-colors duration-300"
            >
              🍔 The Burger Shop
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-burger-600 dark:text-bun-400'
                    : 'text-gray-700 dark:text-gray-200 hover:text-burger-600 dark:hover:text-bun-400'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-burger-600 dark:bg-bun-400"
                  />
                )}
              </Link>
            ))}
            
            {/* Cart Icon */}
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-burger-600 dark:bg-bun-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </div>
            
            <ThemeToggle />
            <Button 
              onClick={handleOrderNow}
              className="bg-burger-600 hover:bg-burger-700 dark:bg-bun-600 dark:hover:bg-bun-700 text-white transition-colors duration-200"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Cart Icon */}
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-burger-600 dark:bg-bun-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </div>
            
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-burger-600 dark:text-bun-400 bg-burger-50 dark:bg-gray-800'
                    : 'text-gray-700 dark:text-gray-200 hover:text-burger-600 dark:hover:text-bun-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={handleOrderNow}
              className="w-full mt-4 bg-burger-600 hover:bg-burger-700 dark:bg-bun-600 dark:hover:bg-bun-700 text-white"
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
