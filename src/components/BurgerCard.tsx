
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';

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

  const handleAddToCart = () => {
    const priceNumber = parseFloat(price.replace('₹', ''));
    
    addToCart({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      price: priceNumber,
      image
    });

    toast({
      title: "Added to Cart! 🍕",
      description: `${name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {featured && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute top-3 left-3 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
            >
              Featured
            </motion.div>
          )}
          {tags && tags.includes('⭐') && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg"
            >
              ⭐ Popular
            </motion.div>
          )}
        </div>
        
        <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
          <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 line-clamp-2">
            {name}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3 transition-colors duration-300 text-xs sm:text-sm">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="flex justify-between items-center pt-2 sm:pt-4 px-3 sm:px-6 pb-3 sm:pb-6 mt-auto">
          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 dark:text-orange-400 transition-colors duration-300">
            {price}
          </span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={handleAddToCart}
              className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5"
            >
              Add to Cart
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BurgerCard;
