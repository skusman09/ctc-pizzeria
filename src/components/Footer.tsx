
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-3 sm:mb-4">🍕 CTC Pizzeria</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Quick-bites joint best known for momos, pizzas, burgers, fries, Maggi, desserts and more. 
              Serving delicious food with love since our inception.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>⭐ 3.5★ Dining</span>
              <span>📦 94+ Deliveries</span>
              <span>💳 Digital Payments</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 block text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 block text-sm sm:text-base">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 block text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/hours" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 block text-sm sm:text-base">
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
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-400 mb-4 sm:mb-6">
              <p className="flex items-start text-sm sm:text-base">
                <span className="mr-2">📍</span>
                Shop 11, Sunshine Garden, Near Railway Station, Nalasopara, Mumbai 401209
              </p>
              <p className="flex items-center text-sm sm:text-base">
                <span className="mr-2">📞</span>
                <a href="tel:+918655676716" className="hover:text-orange-400 transition-colors duration-200">
                  +91 86556 76716
                </a>
              </p>
              <p className="flex items-center text-sm sm:text-base">
                <span className="mr-2">✉️</span>
                <a href="mailto:hello@ctcpizzeria.com" className="hover:text-orange-400 transition-colors duration-200">
                  hello@ctcpizzeria.com
                </a>
              </p>
              <p className="flex items-center text-sm sm:text-base">
                <span className="mr-2">🕒</span>
                Daily: 9 AM - 11 PM
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a
                href="https://instagram.com/ctcpizzeria"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Order Online Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8"
        >
          <div className="text-center mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Order Online</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
              <a 
                href="https://zomato.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
              >
                🍽️ Order on Zomato
              </a>
              <a 
                href="https://swiggy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-sm sm:text-base"
              >
                🚚 Order on Swiggy
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400"
        >
          <p className="text-xs sm:text-sm">
            &copy; 2024 CTC Pizzeria. All rights reserved. Made with ❤️ for food lovers in Nalasopara.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            ISI-approved kitchens • Daily sanitization • ₹350 for two (approx.)
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
