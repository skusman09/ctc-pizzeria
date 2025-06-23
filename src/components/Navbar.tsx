
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
    { name: 'Hours', href: '/hours' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-burger-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-burger-600"
            >
              🍔 The Burger Shop
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-burger-600'
                    : 'text-gray-700 hover:text-burger-600'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-burger-600"
                  />
                )}
              </Link>
            ))}
            <Button className="bg-burger-600 hover:bg-burger-700 text-white">
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
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
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'text-burger-600 bg-burger-50'
                    : 'text-gray-700 hover:text-burger-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-burger-600 hover:bg-burger-700 text-white">
              Order Now
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
