
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BurgerCard from '@/components/BurgerCard';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Burgers' },
    { id: 'beef', name: 'Beef' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'veggie', name: 'Veggie' },
    { id: 'premium', name: 'Premium' },
  ];

  const burgers = [
    {
      name: "The Classic",
      description: "Juicy beef patty, lettuce, tomato, onion, pickles, and our signature sauce",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop",
      category: "beef"
    },
    {
      name: "BBQ Beast",
      description: "Double beef patty, BBQ sauce, bacon, cheddar cheese, and crispy onions",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&h=300&fit=crop",
      category: "premium"
    },
    {
      name: "Chicken Supreme",
      description: "Grilled chicken breast, avocado, swiss cheese, and herb mayo",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1606755962773-d324e2dacd04?w=500&h=300&fit=crop",
      category: "chicken"
    },
    {
      name: "Veggie Delight",
      description: "Plant-based patty, avocado, sprouts, tomato, and herb mayo",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=500&h=300&fit=crop",
      category: "veggie"
    },
    {
      name: "Bacon Cheeseburger",
      description: "Beef patty, crispy bacon, cheddar cheese, lettuce, and tomato",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=300&fit=crop",
      category: "beef"
    },
    {
      name: "Spicy Chicken",
      description: "Crispy chicken, jalapeños, pepper jack cheese, and spicy mayo",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1513185158878-8d064c2de2a2?w=500&h=300&fit=crop",
      category: "chicken"
    },
    {
      name: "Mushroom Swiss",
      description: "Beef patty, sautéed mushrooms, swiss cheese, and garlic aioli",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=300&fit=crop",
      category: "premium"
    },
    {
      name: "Black Bean Burger",
      description: "House-made black bean patty, pepper jack cheese, and chipotle mayo",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
      category: "veggie"
    },
    {
      name: "The Tower",
      description: "Triple beef patty, triple cheese, bacon, and all the fixings",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      category: "premium"
    }
  ];

  const filteredBurgers = activeFilter === 'all' 
    ? burgers 
    : burgers.filter(burger => burger.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Delicious Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From classic favorites to gourmet creations, we have something for every burger lover.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`${
                activeFilter === filter.id
                  ? "bg-burger-600 hover:bg-burger-700 text-white"
                  : "border-burger-600 text-burger-600 hover:bg-burger-50"
              }`}
            >
              {filter.name}
            </Button>
          ))}
        </motion.div>

        {/* Burger Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBurgers.map((burger, index) => (
            <motion.div
              key={burger.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <BurgerCard {...burger} />
            </motion.div>
          ))}
        </motion.div>

        {filteredBurgers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600">No burgers found in this category.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;
