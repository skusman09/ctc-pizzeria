
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast({
        title: "Valid Email Required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter your message.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent! 📧",
      description: "Thank you for contacting us. We'll get back to you within 24 hours!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Get in Touch
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300 px-4">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500 dark:focus:ring-orange-400 py-2.5 sm:py-3"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500 dark:focus:ring-orange-400 py-2.5 sm:py-3"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[100px] sm:min-h-[120px] bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-orange-500 dark:focus:border-orange-400 focus:ring-orange-500 dark:focus:ring-orange-400"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 sm:py-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg text-base"
                  >
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3 sm:mt-4">
                    🔒 We respect your privacy—your info will never be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Location */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Information */}
            <Card className="shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Visit CTC Pizzeria</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Come and experience our amazing food in person!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6">
                <div className="flex items-start space-x-3">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      Shop 11, Sunshine Garden<br />
                      Near Railway Station<br />
                      Nalasopara, Mumbai, Maharashtra 401209
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-xl sm:text-2xl">📞</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Phone</h4>
                    <a 
                      href="tel:+918655676716" 
                      className="text-orange-600 dark:text-orange-400 hover:underline text-sm sm:text-base"
                    >
                      +91 86556 76716
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-xl sm:text-2xl">✉️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:hello@ctcpizzeria.com" 
                      className="text-orange-600 dark:text-orange-400 hover:underline text-sm sm:text-base"
                    >
                      hello@ctcpizzeria.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-xl sm:text-2xl">🕒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      Daily: 9:00 AM - 11:00 PM<br />
                      <span className="text-orange-600 dark:text-orange-400 font-medium">₹350 for two (approx.)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-xl sm:text-2xl">⭐</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Ratings</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      Dining: 3.5★ | Delivery: 94 orders<br />
                      Digital payments accepted
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Online */}
            <Card className="shadow-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600">
              <CardContent className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Order Online</h3>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20 py-2.5 sm:py-3"
                    onClick={() => window.open('https://zomato.com', '_blank')}
                  >
                    🍽️ Order on Zomato
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20 py-2.5 sm:py-3"
                    onClick={() => window.open('https://swiggy.com', '_blank')}
                  >
                    🚚 Order on Swiggy
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-3 sm:mt-4">
                  Home delivery, takeaway & table bookings available
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
