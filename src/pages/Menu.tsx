
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BurgerCard from '@/components/BurgerCard';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const menuItems = [
    // French Fries
    {
      name: "Salt Fries",
      description: "Crispy golden fries seasoned with salt (200g)",
      price: "₹109",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=300&fit=crop",
      category: "fries",
      tags: ["🥬"]
    },
    {
      name: "Plain Melting Cheese Fries",
      description: "Golden fries topped with melted cheese (200g)",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e136d3?w=500&h=300&fit=crop",
      category: "fries",
      tags: ["🥬"]
    },
    {
      name: "Barbeque Peri Peri Melting Cheese Fries",
      description: "Spicy peri peri fries with BBQ sauce and melted cheese",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&h=300&fit=crop",
      category: "fries",
      tags: ["🥬", "🌶️"]
    },
    {
      name: "Peri Peri Masala Fries",
      description: "Crispy fries with spicy peri peri masala seasoning (200g)",
      price: "₹139",
      image: "https://images.unsplash.com/photo-1576107232684-1279f390b638?w=500&h=300&fit=crop",
      category: "fries",
      tags: ["🥬", "🌶️"]
    },

    // Maggi
    {
      name: "Vegetable Masala Maggi",
      description: "Spicy and flavorful Maggi noodles with fresh vegetables",
      price: "₹139",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&h=300&fit=crop",
      category: "maggi",
      tags: ["🥬"]
    },
    {
      name: "Cheese Vegetable Masala Maggi",
      description: "Vegetable masala Maggi topped with melted cheese",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=300&fit=crop",
      category: "maggi",
      tags: ["🥬"]
    },

    // Non-Veg Pizza
    {
      name: "Mexican Chicken Cheese Pizza",
      description: "Delicious Mexican-style chicken pizza with melted cheese",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      category: "pizza",
      tags: ["🥩", "⭐"]
    },
    {
      name: "Mexican Chicken Tikka Cheese Pizza",
      description: "Mexican chicken tikka with cheese and spices",
      price: "₹189",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&h=300&fit=crop",
      category: "pizza",
      tags: ["🥩"]
    },
    {
      name: "Peri Peri Spicy Chicken Tikka Pizza",
      description: "Spicy peri peri chicken tikka pizza with authentic flavors",
      price: "₹189",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=300&fit=crop",
      category: "pizza",
      tags: ["🥩", "🌶️"]
    },
    {
      name: "Chicken Cheese Pizza [9″, 8 pcs]",
      description: "Large 9-inch chicken cheese pizza cut in 8 pieces",
      price: "₹319",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&h=300&fit=crop",
      category: "pizza",
      tags: ["🥩", "⭐"]
    },

    // Veg Burgers
    {
      name: "Veg Burger",
      description: "Fresh vegetable patty with lettuce and tomato",
      price: "₹109",
      image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=500&h=300&fit=crop",
      category: "burger",
      tags: ["🥬"]
    },
    {
      name: "Veg Cheese Burger",
      description: "Vegetable patty with melted cheese and fresh veggies",
      price: "₹119",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=300&fit=crop",
      category: "burger",
      tags: ["🥬"]
    },
    {
      name: "Chilli Potato Veg Burger",
      description: "Spicy chilli potato patty with vegetables",
      price: "₹119",
      image: "https://images.unsplash.com/photo-1606755962773-d324e2dacd04?w=500&h=300&fit=crop",
      category: "burger",
      tags: ["🥬", "🌶️"]
    },

    // Veg Pizza
    {
      name: "Classic Margherita Cheese Pizza",
      description: "Traditional margherita with fresh basil and mozzarella",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=300&fit=crop",
      category: "pizza",
      tags: ["🥬", "⭐"]
    },
    {
      name: "Double Cheese Classic Margherita",
      description: "Classic margherita with double cheese topping",
      price: "₹219",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
      category: "pizza",
      tags: ["🥬", "⭐"]
    },
    {
      name: "Mixed Veg Loaded Cheese Pizza",
      description: "Loaded with mixed vegetables and melted cheese",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop",
      category: "pizza",
      tags: ["🥬", "🌶️", "⭐"]
    },

    // Chicken Burgers
    {
      name: "Chicken Burger",
      description: "Juicy grilled chicken patty with fresh vegetables",
      price: "₹99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop",
      category: "burger",
      tags: ["🥩"]
    },
    {
      name: "Chicken Cheese Burger",
      description: "Grilled chicken patty with melted cheese",
      price: "₹119",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=300&fit=crop",
      category: "burger",
      tags: ["🥩"]
    },
    {
      name: "Spicy Chicken Cheese Burger",
      description: "Spicy chicken patty with cheese and hot sauce",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1513185158878-8d064c2de2a2?w=500&h=300&fit=crop",
      category: "burger",
      tags: ["🥩", "🌶️"]
    },

    // Starters & Sides
    {
      name: "Chicken Cheese Balls",
      description: "Crispy chicken cheese balls - 6 pieces",
      price: "₹139",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=300&fit=crop",
      category: "starters",
      tags: ["🥩", "🌶️"]
    },
    {
      name: "Chicken Popcorn",
      description: "Bite-sized crispy chicken pieces - 15 pieces",
      price: "₹169",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=300&fit=crop",
      category: "starters",
      tags: ["🥩", "🌶️"]
    },

    // Seafood
    {
      name: "Fish Fries",
      description: "Crispy fish fries - 15 pieces",
      price: "₹169",
      image: "https://images.unsplash.com/photo-1544943545-489136e4b7b0?w=500&h=300&fit=crop",
      category: "seafood",
      tags: ["🐟"]
    },
    {
      name: "Fish Burger",
      description: "Fresh fish patty with vegetables and sauce",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=300&fit=crop",
      category: "seafood",
      tags: ["🐟"]
    },

    // Desserts
    {
      name: "Brownie Molten Choco Lava",
      description: "Warm chocolate brownie with molten center (100g)",
      price: "₹99",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=300&fit=crop",
      category: "desserts",
      tags: ["🥬", "⭐"]
    },
    {
      name: "Mawa Rabdi",
      description: "Traditional Indian sweet dessert (100g)",
      price: "₹99",
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&h=300&fit=crop",
      category: "desserts",
      tags: ["🥬"]
    }
  ];

  // Dynamic filter counts based on actual menu data
  const getFilterCounts = () => {
    return {
      all: menuItems.length,
      fries: menuItems.filter(item => item.category === 'fries').length,
      maggi: menuItems.filter(item => item.category === 'maggi').length,
      pizza: menuItems.filter(item => item.category === 'pizza').length,
      burger: menuItems.filter(item => item.category === 'burger').length,
      starters: menuItems.filter(item => item.category === 'starters').length,
      seafood: menuItems.filter(item => item.category === 'seafood').length,
      desserts: menuItems.filter(item => item.category === 'desserts').length,
    };
  };

  const filterCounts = getFilterCounts();

  const filters = [
    { id: 'all', name: 'All Items', count: filterCounts.all },
    { id: 'fries', name: 'French Fries', count: filterCounts.fries },
    { id: 'maggi', name: 'Maggi', count: filterCounts.maggi },
    { id: 'pizza', name: 'Pizza', count: filterCounts.pizza },
    { id: 'burger', name: 'Burgers', count: filterCounts.burger },
    { id: 'starters', name: 'Starters & Sides', count: filterCounts.starters },
    { id: 'seafood', name: 'Seafood', count: filterCounts.seafood },
    { id: 'desserts', name: 'Desserts', count: filterCounts.desserts },
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            Our Delicious Menu
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300 px-4">
            From crispy fries to delicious pizzas and burgers - we have something for every taste!
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
        >
          {filters.map((filter) => (
            <motion.div
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`text-xs sm:text-sm ${
                  activeFilter === filter.id
                    ? "bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white shadow-md"
                    : "border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800"
                } transition-all duration-300 px-3 sm:px-4 py-2`}
              >
                {filter.name}
                <span className="ml-1 sm:ml-2 text-xs bg-white/20 rounded-full px-1.5 sm:px-2 py-0.5">
                  {filter.count}
                </span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6 sm:mb-8"
        >
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
            {activeFilter !== 'all' && ` in ${filters.find(f => f.id === activeFilter)?.name}`}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.3,
                layout: { duration: 0.3 }
              }}
            >
              <BurgerCard 
                {...item} 
                description={
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {item.description}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.tags?.map((tag, i) => (
                        <span key={i} className="text-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-4xl sm:text-6xl mb-4">🍕</div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              No items found in this category.
            </p>
            <Button 
              onClick={() => setActiveFilter('all')}
              className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"
            >
              Show All Items
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Menu;
