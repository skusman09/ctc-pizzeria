
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Instagram, Facebook } from 'lucide-react';

const StoreHours = () => {
  const hours = [
    { day: 'Monday', time: '9:00 AM - 11:00 PM', icon: '📅' },
    { day: 'Tuesday', time: '9:00 AM - 11:00 PM', icon: '📅' },
    { day: 'Wednesday', time: '9:00 AM - 11:00 PM', icon: '🥟', special: 'Momo Wednesday - BOGO Free!' },
    { day: 'Thursday', time: '9:00 AM - 11:00 PM', icon: '📅' },
    { day: 'Friday', time: '9:00 AM - 11:00 PM', icon: '🎉' },
    { day: 'Saturday', time: '9:00 AM - 11:00 PM', icon: '🎉' },
    { day: 'Sunday', time: '9:00 AM - 11:00 PM', icon: '📅' },
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  const offers = [
    { title: "App-only perks", description: "Up to 50% off on first order + live tracking", icon: "📱" },
    { title: "Pre-book offer", description: "Flat 15% off (9 AM–11:55 PM)", icon: "⏰" },
    { title: "Instant offer", description: "Flat 10% off on bill payments", icon: "💳" },
    { title: "Loyalty rewards", description: "Flat 10% off on next dining payment", icon: "🎁" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex justify-center mb-4">
            <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Store Hours
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            We're here to serve you delicious food every day of the week!
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600">
            <CardContent className="text-center py-4 sm:py-6">
              <h2 className="text-xl sm:text-2xl font-bold text-orange-700 dark:text-orange-400 mb-2">We're Open Today!</h2>
              <p className="text-orange-600 dark:text-orange-300 text-sm sm:text-base">
                Come grab delicious pizza, momos, and more - we're ready to serve you! 🍕
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                ₹350 for two (approx.) • Digital payments accepted
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Hours List */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-3 sm:space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Daily Hours</h3>
            {hours.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`transition-all duration-300 hover:shadow-lg ${
                  schedule.day === currentDay 
                    ? 'bg-orange-50 dark:bg-gray-800 border-orange-300 dark:border-orange-600 shadow-md' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}>
                  <CardContent className="flex items-center justify-between p-3 sm:p-4">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <span className="text-xl sm:text-2xl">{schedule.icon}</span>
                      <div>
                        <h3 className={`text-base sm:text-lg font-semibold ${
                          schedule.day === currentDay ? 'text-orange-700 dark:text-orange-400' : 'text-gray-900 dark:text-white'
                        }`}>
                          {schedule.day}
                          {schedule.day === currentDay && (
                            <span className="ml-2 text-xs bg-orange-600 text-white px-2 py-1 rounded-full">
                              Today
                            </span>
                          )}
                        </h3>
                        {schedule.special && (
                          <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 font-medium">
                            {schedule.special}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm sm:text-base font-medium ${
                        schedule.day === currentDay ? 'text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {schedule.time}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Offers & Social */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Special Offers */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <span>🎉</span>
                  <span className="text-gray-900 dark:text-white">Special Offers</span>
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Save more on your favorite food!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-4 sm:p-6">
                {offers.map((offer, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2 sm:p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-lg sm:text-xl">{offer.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{offer.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{offer.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media & Community */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <span>📱</span>
                  <span className="text-gray-900 dark:text-white">Follow Us</span>
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Stay updated with our latest offers and events
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center space-x-2 border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20 text-sm"
                    onClick={() => window.open('https://instagram.com/ctcpizzeria', '_blank')}
                  >
                    <Instagram className="h-4 w-4" />
                    <span>@ctcpizzeria</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex items-center space-x-2 border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20 text-sm"
                    onClick={() => window.open('https://facebook.com', '_blank')}
                  >
                    <Facebook className="h-4 w-4" />
                    <span>Facebook</span>
                  </Button>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <p><strong>Coming Soon:</strong> Live music nights, pizza-eating contests</p>
                  <p><strong>Health & Safety:</strong> ISI-approved kitchens, daily sanitization</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact & Location Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Questions about our hours?
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                📞 +91 86556 76716
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Call us anytime during business hours
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Find Us
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3">
                Shop 11, Sunshine Garden<br />
                Near Railway Station, Nalasopara<br />
                Mumbai, Maharashtra 401209
              </p>
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20 text-sm"
                onClick={() => window.open('https://maps.google.com', '_blank')}
              >
                📍 Find us on Google Maps
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoreHours;
