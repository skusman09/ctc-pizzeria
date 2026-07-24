
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BurgerCard from '@/components/BurgerCard';
import { MENU_ITEMS as menuItems } from '@/data/menu';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
      momos: menuItems.filter(item => item.category === 'momos').length,
      combos: menuItems.filter(item => item.category === 'combos').length,
      beverages: menuItems.filter(item => item.category === 'beverages').length,
    };
  };

  const filterCounts = getFilterCounts();

  const filters = [
    { id: 'all', name: 'All Items', count: filterCounts.all },
    { id: 'momos', name: 'Momos', count: filterCounts.momos },
    { id: 'pizza', name: 'Pizza', count: filterCounts.pizza },
    { id: 'burger', name: 'Burgers', count: filterCounts.burger },
    { id: 'fries', name: 'French Fries', count: filterCounts.fries },
    { id: 'maggi', name: 'Maggi', count: filterCounts.maggi },
    { id: 'starters', name: 'Starters & Sides', count: filterCounts.starters },
    { id: 'seafood', name: 'Seafood', count: filterCounts.seafood },
    { id: 'combos', name: 'Combos', count: filterCounts.combos },
    { id: 'beverages', name: 'Beverages', count: filterCounts.beverages },
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
      className="min-h-screen pt-16 sm:pt-20 pb-6 sm:pb-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
            Our Delicious Menu
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300 px-2">
            From crispy momos to delicious pizzas and burgers - we have something for every taste!
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3 mb-6 sm:mb-8 px-2"
        >
          {filters.map((filter) => (
            <motion.div
              key={filter.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`text-xs sm:text-sm ${
                  activeFilter === filter.id
                    ? "bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white shadow-md"
                    : "border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800"
                } transition-all duration-300 px-2 sm:px-3 py-1.5 sm:py-2 h-auto min-h-fit focus:ring-2 focus:ring-orange-500`}
                aria-label={`Filter by ${filter.name}`}
              >
                {filter.name}
                <span className="ml-1 text-xs bg-white/20 rounded-full px-1 sm:px-1.5 py-0.5">
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
          className="text-center mb-4 sm:mb-6"
        >
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-sm">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
            {activeFilter !== 'all' && ` in ${filters.find(f => f.id === activeFilter)?.name}`}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                delay: index * 0.03, 
                duration: 0.3,
                layout: { duration: 0.3 }
              }}
            >
              <BurgerCard 
                {...item} 
                description={
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
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
            className="text-center py-8 sm:py-12"
          >
            <div className="text-4xl sm:text-6xl mb-4">🍕</div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              No items found in this category.
            </p>
            <Button 
              onClick={() => setActiveFilter('all')}
              className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white focus:ring-2 focus:ring-orange-500"
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
