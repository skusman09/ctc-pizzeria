
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';

interface BurgerCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

const BurgerCard = ({ name, description, price, image, featured = false }: BurgerCardProps) => {
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const priceNumber = parseFloat(price.replace('$', ''));
    
    addToCart({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      price: priceNumber,
      image
    });

    toast({
      title: "Added to Cart! 🍔",
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
      className={`${featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {featured && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute top-4 left-4 bg-meat-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
            >
              Featured
            </motion.div>
          )}
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-burger-600 dark:group-hover:text-bun-400">
            {name}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="flex justify-between items-center pt-0">
          <span className="text-2xl font-bold text-burger-600 dark:text-bun-400 transition-colors duration-300">
            {price}
          </span>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={handleAddToCart}
              className="bg-burger-600 hover:bg-burger-700 dark:bg-bun-600 dark:hover:bg-bun-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
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
