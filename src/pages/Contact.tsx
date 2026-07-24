import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Navigation, 
  HelpCircle, 
  ShieldCheck, 
  Utensils, 
  Truck,
  Sparkles
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const subjects = [
    'General Inquiry',
    'Bulk / Party Order',
    'Feedback & Suggestions',
    'Order Support',
    'Franchise Inquiry'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
        description: "Please write a message so we can assist you.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out. The CTC Pizzeria team will respond within 24 hours.",
    });

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'Our Location',
      content: 'Shop 11, Sunshine Garden, Near Railway Station',
      subtext: 'Nallasopara East, Mumbai, MH 401209',
      actionText: 'Get Directions',
      actionUrl: 'https://maps.google.com/?q=Nallasopara+East+Mumbai',
      badge: 'Near Station',
      iconBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
    },
    {
      icon: Phone,
      title: 'Call & WhatsApp',
      content: '+91 86556 76716',
      subtext: 'Available 9:00 AM – 11:00 PM Daily',
      actionText: 'Call Now',
      actionUrl: 'tel:+918655676716',
      badge: 'Quick Orders',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@ctcpizzeria.com',
      subtext: 'Response guaranteed within 24 hrs',
      actionText: 'Send Email',
      actionUrl: 'mailto:hello@ctcpizzeria.com',
      badge: 'Support',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Clock,
      title: 'Store Timing & Price',
      content: 'Daily: 9:00 AM – 11:00 PM',
      subtext: '₹350 for two people (approx.)',
      actionText: 'View Store Hours',
      actionUrl: '/hours',
      badge: 'Open 7 Days',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
    }
  ];

  const faqs = [
    {
      q: "Do you deliver around Nallasopara East?",
      a: "Yes! We offer hot & fresh home delivery across Nallasopara East. You can also order directly via Zomato or Swiggy for real-time tracking."
    },
    {
      q: "Can I place bulk or party orders for momos and pizzas?",
      a: "Absolutely! We cater for birthday parties, office lunches, and gatherings. Call us at +91 86556 76716 for special party discounts."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all digital payment methods including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, and Cash on Delivery."
    },
    {
      q: "What are your most popular menu items?",
      a: "Our signature Cheese Burst Pizzas, Kurkure Momos, Paneer Tikka Pizzas, and Spicy Schezwan Momos are local favorites!"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 py-8 sm:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">

        {/* Header */}
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>We'd Love to Hear From You</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Have a question about our menu, need assistance with an order, or planning a party? Drop us a line or visit us in Nallasopara East!
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              3.5★ Rating (94+ Orders)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs">
              <Truck className="w-3.5 h-3.5 text-emerald-500" />
              Fast Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-xs">
              <Utensils className="w-3.5 h-3.5 text-rose-500" />
              Dine-In & Takeaway
            </span>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08 * idx, duration: 0.4 }}
              className="h-full"
            >
              <div className="h-full p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                      <card.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {card.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-1">
                      {card.content}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {card.subtext}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                  <a
                    href={card.actionUrl}
                    target={card.actionUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-slate-900 dark:text-slate-100 hover:text-rose-600 dark:hover:text-rose-400 transition-colors gap-1"
                  >
                    <span>{card.actionText}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Section with Perfect Bottom Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Contact Form (7 cols) - Stretches to match exact height of right column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <Card className="rounded-2xl shadow-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex-1 flex flex-col justify-between">
              <CardHeader className="bg-slate-50/60 dark:bg-slate-900/60 p-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-500 dark:text-slate-400">
                      Fill out the form below and we'll reply within 24 hours.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                {submitted ? (
                  <div className="py-12 text-center space-y-3 my-auto">
                    <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Message Received!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                      Thank you for contacting CTC Pizzeria. We will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-1">
                          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rahul Sharma"
                            className="rounded-xl bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 py-2.5 text-sm"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Email Address <span className="text-rose-500">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="rahul@example.com"
                            className="rounded-xl bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 py-2.5 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone Number */}
                        <div className="space-y-1">
                          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="rounded-xl bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 py-2.5 text-sm"
                          />
                        </div>

                        {/* Subject */}
                        <div className="space-y-1">
                          <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                            Topic / Subject
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 px-3 py-2.5 text-sm outline-none"
                          >
                            {subjects.map((subj) => (
                              <option key={subj} value={subj} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                                {subj}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1">
                        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                          Your Message <span className="text-rose-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us what you'd like to ask..."
                          className="rounded-xl bg-slate-50 dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 p-3 text-sm resize-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold py-3 rounded-xl shadow-xs transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span>We respect your privacy—no spam ever.</span>
                      </div>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Order Banner & Location (5 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Reach Us Instantly Card */}
            <Card className="rounded-2xl shadow-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  📞 Quick Contact
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">9 AM – 11 PM</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Reach Us Instantly
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Call us, chat on WhatsApp, or find us on social media — we're here to help.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:+918655676716"
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-semibold py-2.5 rounded-xl text-xs transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>
                <a
                  href="https://wa.me/918655676716"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-xl text-xs transition-all"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">Follow us</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com/ctcpizzeria"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-pink-950/40 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pink-500 transition-all text-sm"
                  >
                    📸
                  </a>
                  <a
                    href="https://maps.google.com/?q=Nallasopara+East+Mumbai"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-all text-sm"
                  >
                    📍
                  </a>
                </div>
              </div>
            </Card>

            {/* Embedded Map Card */}
            <Card className="rounded-2xl shadow-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <CardTitle className="text-base font-bold text-slate-900 dark:text-white">
                    Nallasopara Outlet
                  </CardTitle>
                </div>
                <a
                  href="https://maps.google.com/?q=Nallasopara+East+Mumbai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:underline"
                >
                  Google Maps↗
                </a>
              </div>

              <div className="w-full h-40 sm:h-44 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex-1">
                <iframe
                  title="CTC Pizzeria Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.568285514681!2d72.8193855!3d19.4180424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a1308a0d4d%3A0x6bd77a28892f39!2sNalla%20Sopara!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] dark:invert-[90%] dark:hue-rotate-180"
                />
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Shop 11, Sunshine Garden, 2 mins walk from Nallasopara East Railway Station.
              </p>
            </Card>

          </motion.div>
        </div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-1 bg-slate-50/50 dark:bg-slate-950/50">
                <AccordionTrigger className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-slate-600 dark:text-slate-400 pb-3">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Contact;
