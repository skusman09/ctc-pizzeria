
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-bun-400 mb-4">🍔 The Burger Shop</h3>
            <p className="text-gray-400 mb-4">
              Serving the most delicious burgers in town since 2020. 
              Made with love and the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-bun-400 transition-colors">Home</a></li>
              <li><a href="/menu" className="text-gray-400 hover:text-bun-400 transition-colors">Menu</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-bun-400 transition-colors">Contact</a></li>
              <li><a href="/hours" className="text-gray-400 hover:text-bun-400 transition-colors">Store Hours</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 123 Burger Street, Food City, FC 12345</p>
              <p>📞 (555) 123-BURGER</p>
              <p>✉️ hello@theburgershop.com</p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-bun-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-bun-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Burger Shop. All rights reserved. Made with ❤️ for burger lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
