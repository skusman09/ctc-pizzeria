
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BurgerCard from '@/components/BurgerCard';

const Home = () => {
  const navigate = useNavigate();

  const featuredItems = [
    {
      name: "Mexican Chicken Cheese Pizza",
      description: "Delicious Mexican-style chicken pizza with melted cheese",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      category: "pizza"
    },
    {
      name: "Chicken Burger + Green Apple Mojito",
      description: "Juicy chicken burger served with refreshing green apple mojito",
      price: "₹169",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
      category: "combo"
    },
    {
      name: "Vegetable Masala Maggi",
      description: "Spicy and flavorful Maggi noodles with fresh vegetables",
      price: "₹139",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop",
      category: "maggi"
    }
  ];

  const offers = [
    { title: "App-only perks", description: "Up to 50% off on first order + live tracking", icon: "📱" },
    { title: "Pre-book offer", description: "Flat 15% off (9 AM–11:55 PM)", icon: "⏰" },
    { title: "Instant offer", description: "Flat 10% off on bill payments", icon: "💳" },
    { title: "Loyalty rewards", description: "Flat 10% off on next dining payment", icon: "🎁" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Best momos and pizza in Nalasopara! The delivery is always quick and food is fresh.",
      rating: 4
    },
    {
      name: "Rahul Patel",
      text: "Love their Mexican chicken pizza. Great value for money and tasty food.",
      rating: 4
    },
    {
      name: "Sneha Joshi",
      text: "Perfect place for quick bites. Their Maggi and fries are amazing!",
      rating: 3
    }
  ];

  const handleOrderNow = () => {
    navigate('/menu');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transition-colors duration-300"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300 leading-tight"
          >
            CTC Pizzeria{' '}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block"
            >
              🍕
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 transition-colors duration-300 px-4"
          >
            Quick-bites joint best known for momos, pizzas, burgers, fries, Maggi, desserts and more. 
            <br className="hidden sm:block" />
            <span className="text-orange-600 dark:text-orange-400 font-semibold">Daily 9 AM – 11 PM | ₹350 for two</span>
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={handleOrderNow}
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Order Now
              </Button>
            </motion.div>
            <Link to="/menu">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  See Menu
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Rating & Quick Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600 dark:text-gray-300"
          >
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span>3.5★ Dining</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div>📦 94 Delivery orders</div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <div>📍 Near Railway Station, Nalasopara</div>
          </motion.div>
        </div>
        
        {/* Floating Animation */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl opacity-20"
        >
          🍕
        </motion.div>
      </section>

      {/* Offers Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
              Special Offers & Deals
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Save more on your favorite food with our exclusive offers!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600 h-full">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{offer.icon}</div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-2">{offer.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{offer.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
              Popular Menu Highlights
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              Try our most loved dishes - handcrafted with fresh ingredients and served hot!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <BurgerCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Don't just take our word for it - hear from our happy customers!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-lg sm:text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic transition-colors duration-300 text-sm sm:text-base">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 text-sm sm:text-base">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
