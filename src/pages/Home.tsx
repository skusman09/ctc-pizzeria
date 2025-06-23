
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BurgerCard from '@/components/BurgerCard';

const Home = () => {
  const featuredBurgers = [
    {
      name: "The Classic",
      description: "Juicy beef patty, lettuce, tomato, onion, pickles, and our secret sauce",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop",
      featured: true
    },
    {
      name: "BBQ Beast",
      description: "Double beef patty, BBQ sauce, bacon, cheddar cheese, and crispy onions",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&h=300&fit=crop"
    },
    {
      name: "Veggie Delight",
      description: "Plant-based patty, avocado, sprouts, tomato, and herb mayo",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=500&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Best burgers in town! The quality is unmatched and the flavors are incredible.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "I've been coming here for years. The consistency and taste never disappoint.",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "Even their veggie burger is amazing! Great options for everyone.",
      rating: 5
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burger-100 via-bun-100 to-meat-100"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Burgers that make you drool{' '}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block"
            >
              🍔
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            Experience the perfect blend of premium ingredients, artisanal buns, and flavors that'll make your taste buds dance.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-burger-600 hover:bg-burger-700 text-white px-8 py-4 text-lg">
              Order Now
            </Button>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-burger-600 text-burger-600 hover:bg-burger-50 px-8 py-4 text-lg">
                See Menu
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Floating Burger Animation */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-6xl opacity-20"
        >
          🍔
        </motion.div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Burgers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted with love, grilled to perfection, and served with a side of happiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBurgers.map((burger, index) => (
              <motion.div
                key={burger.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <BurgerCard {...burger} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bun-50 to-burger-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our happy customers!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-bun-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
