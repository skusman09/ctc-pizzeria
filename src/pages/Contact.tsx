
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
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[120px]"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-burger-600 hover:bg-burger-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Visit Our Restaurant</CardTitle>
                <CardDescription>
                  Come and experience our amazing burgers in person!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Burger Street<br />Food City, FC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(555) 123-BURGER</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@theburgershop.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🕒</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-gray-600">Mon-Thu: 11AM-10PM<br />Fri-Sat: 11AM-11PM<br />Sun: 12PM-9PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <span className="text-4xl block mb-2">🗺️</span>
                    <p>Interactive Map Coming Soon</p>
                    <p className="text-sm">123 Burger Street, Food City, FC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
