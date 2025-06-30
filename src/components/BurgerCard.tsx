
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface BurgerCardProps {
  name: string;
  description: string | React.ReactNode;
  price: string;
  image: string;
  featured?: boolean;
  category?: string;
  tags?: string[];
}

const BurgerCard = ({ name, description, price, image, featured = false, category, tags }: BurgerCardProps) => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    const priceNumber = parseFloat(price.replace('₹', ''));
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addToCart({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      price: priceNumber,
      image: imageError ? "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop" : image
    });

    toast({
      title: "Added to Cart! 🍕",
      description: `${name} has been added to your cart.`,
      duration: 3000,
    });
    
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group h-full flex flex-col focus-within:ring-2 focus-within:ring-orange-500">
        <div className="relative overflow-hidden">
          <img
            src={imageError ? "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop" : image}
            alt={`${name} - ${category || 'Food item'}`}
            className="w-full h-32 sm:h-40 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {featured && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold shadow-lg"
            >
              Featured
            </motion.div>
          )}
          {tags && tags.includes('⭐') && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-lg"
            >
              ⭐ Popular
            </motion.div>
          )}
        </div>
        
        <CardHeader className="pb-2 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 flex-1">
          <CardTitle className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 line-clamp-2 leading-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3 transition-colors duration-300 text-xs sm:text-sm flex-1">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="flex justify-between items-center pt-2 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 mt-auto gap-2">
          <span className="text-base sm:text-lg lg:text-xl font-bold text-orange-600 dark:text-orange-400 transition-colors duration-300 flex-shrink-0">
            {price}
          </span>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              onClick={handleAddToCart}
              disabled={isLoading}
              className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 disabled:bg-orange-400 text-white shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label={`Add ${name} to cart for ${price}`}
            >
              {isLoading ? (
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="hidden sm:inline">Adding...</span>
                </div>
              ) : (
                "Add to Cart"
              )}
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BurgerCard;
