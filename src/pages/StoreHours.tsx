
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const StoreHours = () => {
  const hours = [
    { day: 'Monday', time: '11:00 AM - 10:00 PM', icon: '📅' },
    { day: 'Tuesday', time: '11:00 AM - 10:00 PM', icon: '📅' },
    { day: 'Wednesday', time: '11:00 AM - 10:00 PM', icon: '📅' },
    { day: 'Thursday', time: '11:00 AM - 10:00 PM', icon: '📅' },
    { day: 'Friday', time: '11:00 AM - 11:00 PM', icon: '🎉' },
    { day: 'Saturday', time: '11:00 AM - 11:00 PM', icon: '🎉' },
    { day: 'Sunday', time: '12:00 PM - 9:00 PM', icon: '😴' },
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Clock className="h-12 w-12 text-burger-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Store Hours
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to serve you delicious burgers throughout the week. Come visit us!
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-burger-50 to-bun-50 border-burger-200">
            <CardContent className="text-center py-6">
              <h2 className="text-2xl font-bold text-burger-700 mb-2">We're Open Today!</h2>
              <p className="text-burger-600">
                Come grab a delicious burger - we're ready to serve you! 🍔
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hours List */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid gap-4"
        >
          {hours.map((schedule, index) => (
            <motion.div
              key={schedule.day}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className={`transition-all duration-300 hover:shadow-lg ${
                schedule.day === currentDay 
                  ? 'bg-burger-50 border-burger-300 shadow-md' 
                  : 'hover:bg-gray-50'
              }`}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{schedule.icon}</span>
                    <div>
                      <h3 className={`text-xl font-semibold ${
                        schedule.day === currentDay ? 'text-burger-700' : 'text-gray-900'
                      }`}>
                        {schedule.day}
                        {schedule.day === currentDay && (
                          <span className="ml-2 text-sm bg-burger-600 text-white px-2 py-1 rounded-full">
                            Today
                          </span>
                        )}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-medium ${
                      schedule.day === currentDay ? 'text-burger-600' : 'text-gray-700'
                    }`}>
                      {schedule.time}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <Card className="bg-gradient-to-br from-meat-50 to-meat-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🎉</span>
                <span>Happy Hour</span>
              </CardTitle>
              <CardDescription>
                Special deals during off-peak hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Monday - Thursday: 2:00 PM - 5:00 PM<br />
                Get 20% off on all burger combos!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-bun-50 to-bun-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🚗</span>
                <span>Drive-Thru</span>
              </CardTitle>
              <CardDescription>
                Quick service for on-the-go customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Available during all operating hours<br />
                Average wait time: 3-5 minutes
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <Card>
            <CardContent className="py-6">
              <p className="text-gray-600 mb-2">
                Questions about our hours? Give us a call!
              </p>
              <p className="text-2xl font-bold text-burger-600">
                📞 (555) 123-BURGER
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoreHours;
