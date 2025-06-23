
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface BurgerCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

const BurgerCard = ({ name, description, price, image, featured = false }: BurgerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`${featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {featured && (
            <div className="absolute top-4 left-4 bg-meat-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">{name}</CardTitle>
          <CardDescription className="text-gray-600 line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="flex justify-between items-center">
          <span className="text-2xl font-bold text-burger-600">{price}</span>
          <Button className="bg-burger-600 hover:bg-burger-700 text-white">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BurgerCard;
