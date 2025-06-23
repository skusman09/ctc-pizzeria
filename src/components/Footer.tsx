
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-bun-400 mb-4">🍔 The Burger Shop</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Serving the most delicious burgers in town since 2020. 
              Made with love and the finest ingredients.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-bun-400 transition-colors duration-200 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-bun-400 transition-colors duration-200 block">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-bun-400 transition-colors duration-200 block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/hours" className="text-gray-400 hover:text-bun-400 transition-colors duration-200 block">
                  Store Hours
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3 text-gray-400 mb-6">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                123 Burger Street, Food City, FC 12345
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+15551234287" className="hover:text-bun-400 transition-colors duration-200">
                  (555) 123-BURGER
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:hello@theburgershop.com" className="hover:text-bun-400 transition-colors duration-200">
                  hello@theburgershop.com
                </a>
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-bun-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-bun-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              >
                <span className="text-xl">📘</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 The Burger Shop. All rights reserved. Made with ❤️ for burger lovers.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
