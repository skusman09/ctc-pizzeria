import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  Sparkles, 
  Calendar,
  Navigation,
  UtensilsCrossed,
  Tag
} from 'lucide-react';

const StoreHours = () => {
  const navigate = useNavigate();
  const hours = [
    { day: 'Monday', time: '9:00 AM - 11:00 PM', icon: '📅' },
    { day: 'Tuesday', time: '9:00 AM - 11:00 PM', icon: '📅' },
    { day: 'Wednesday', time: '9:00 AM - 11:00 PM', icon: '🥟', special: 'Momo Wednesday - Buy 1 Get 1 Free!' },
    { day: 'Thursday', time: '9:00 AM - 11:00 PM', icon: '📅' },
    { day: 'Friday', time: '9:00 AM - 11:00 PM', icon: '🎉', special: 'Weekend Special Pizza Combos' },
    { day: 'Saturday', time: '9:00 AM - 11:00 PM', icon: '🎉', special: 'Weekend Rush: Order Early!' },
    { day: 'Sunday', time: '9:00 AM - 11:00 PM', icon: '🍕', special: 'Family Feast Discount' },
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  const offers = [
    { title: "App Perks", description: "Up to 50% off on first order + live tracking", icon: "📱", code: "FIRST50" },
    { title: "Momo Wednesday", description: "Buy 1 Get 1 Free on all momos", icon: "🥟", code: "MOMOFREE" },
    { title: "Instant Discount", description: "Flat 10% off on UPI & card payments", icon: "💳", code: "UPI10" },
    { title: "Loyalty Program", description: "Earn 10% cashback points on dining bills", icon: "🎁", code: "REWARD10" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 py-8 sm:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

        {/* Header */}
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
            <span>Open 7 Days a Week • 9 AM to 11 PM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Store Hours & Offers
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Check our daily schedule, special combo days, and active dining offers at CTC Pizzeria Nallasopara East.
          </p>
        </motion.div>

        {/* Clean Live Status Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Card className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      We're Open Today!
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    Ready to serve hot pizzas & momos
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Today ({currentDay}): 9:00 AM – 11:00 PM • Approx. ₹350 for two people
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  onClick={() => navigate('/menu')}
                  className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold px-5 py-2.5 rounded-xl shadow-xs text-xs transition-all cursor-pointer"
                >
                  Order Now
                </Button>
                <a
                  href="tel:+918655676716"
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  title="Call Store"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Side: Consolidated Weekly Schedule Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <Card className="rounded-2xl shadow-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex-1">
              <CardHeader className="bg-slate-50/60 dark:bg-slate-950/60 p-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                        Weekly Operating Schedule
                      </CardTitle>
                      <CardDescription className="text-xs text-slate-500 dark:text-slate-400">
                        Kitchen & counter timings for dining, takeaway and delivery
                      </CardDescription>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-900">
                    Active All Days
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 space-y-2">
                {hours.map((schedule) => {
                  const isToday = schedule.day === currentDay;
                  return (
                    <div
                      key={schedule.day}
                      className={`p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                        isToday
                          ? 'bg-slate-100/80 dark:bg-slate-800/80 border-slate-400 dark:border-slate-600 shadow-2xs'
                          : 'bg-slate-50/50 dark:bg-slate-950/40 border-slate-200/60 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{schedule.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-semibold text-xs sm:text-sm ${isToday ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                              {schedule.day}
                            </span>
                            {isToday && (
                              <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-md">
                                Today
                              </span>
                            )}
                          </div>
                          {schedule.special && (
                            <p className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1 mt-0.5">
                              <Sparkles className="w-3 h-3" />
                              <span>{schedule.special}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`text-xs sm:text-sm font-medium ${isToday ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}>
                          {schedule.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side: Offers & Info Stack (5 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Active Offers */}
            <Card className="rounded-2xl shadow-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex-1 flex flex-col">
              <CardHeader className="p-5 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold text-slate-900 dark:text-white">
                      Active Deals & Offers
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-500 dark:text-slate-400">
                      Valid for dine-in & online orders
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-0 space-y-2.5 flex-1">
                {offers.map((offer, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3"
                  >
                    <span className="text-base shrink-0 mt-0.5">{offer.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm truncate">
                          {offer.title}
                        </h4>
                        <span className="text-[10px] font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                          {offer.code}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {offer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Order CTA Footer */}
              <div className="px-5 pb-5 mt-auto">
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 mb-3 font-medium uppercase tracking-wider">Order Online &amp; Redeem</p>
                  <div className="flex gap-2">
                    <a
                      href="https://www.zomato.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-all"
                    >
                      <span>🍕</span>
                      <span>Zomato</span>
                    </a>
                    <a
                      href="https://www.swiggy.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-all"
                    >
                      <span>🛵</span>
                      <span>Swiggy</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Contact & Directions */}
            <Card className="rounded-2xl shadow-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    Visit Our Outlet
                  </h3>
                </div>
                <a
                  href="https://maps.google.com/?q=Nallasopara+East+Mumbai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:underline flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Map↗</span>
                </a>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Shop 11, Sunshine Garden, Near Railway Station, Nallasopara East, Mumbai 401209
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <a
                  href="tel:+918655676716"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-semibold py-2.5 rounded-xl text-xs transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>

                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2.5 rounded-xl border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    onClick={() => window.open('https://instagram.com/ctcpizzeria', '_blank')}
                  >
                    <Instagram className="w-4 h-4 text-pink-500" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2.5 rounded-xl border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    onClick={() => window.open('https://facebook.com', '_blank')}
                  >
                    <Facebook className="w-4 h-4 text-blue-500" />
                  </Button>
                </div>
              </div>
            </Card>

          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default StoreHours;
