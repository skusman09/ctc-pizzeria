
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CreditCard, MapPin, Phone, User, Mail,
  CheckCircle, Banknote, Package, Clock, ShieldCheck, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

interface OrderFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pinCode: string;
  paymentMethod: 'card' | 'cash';
}

const DELIVERY_FEE = 49;
const GST_RATE = 0.05;

const Checkout = () => {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pinCode: '',
    paymentMethod: 'cash'
  });
  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});

  const subtotal = getTotalPrice();
  const gst = subtotal * GST_RATE;
  const grandTotal = subtotal + DELIVERY_FEE + gst;

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!formData.address.trim()) newErrors.address = 'Delivery address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pinCode.trim()) newErrors.pinCode = 'PIN code is required';
    else if (!/^\d{6}$/.test(formData.pinCode)) newErrors.pinCode = 'Enter a valid 6-digit PIN code';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsProcessing(true);
    setTimeout(() => {
      const num = `CTC${Date.now().toString().slice(-6)}`;
      setOrderNumber(num);
      setOrderComplete(true);
      setIsProcessing(false);
      clearCart();
    }, 2000);
  };

  // ─── Empty cart ───────────────────────────────────────────────
  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-7xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold text-white mb-3">Your cart is empty</h2>
          <p className="text-gray-400 mb-8">Add some delicious items to proceed to checkout.</p>
          <Button
            onClick={() => navigate('/menu')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-base"
          >
            Browse Menu
          </Button>
        </motion.div>
      </div>
    );
  }

  // ─── Order success ────────────────────────────────────────────
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="bg-gray-900 border border-gray-700 rounded-2xl p-10 max-w-md w-full text-center shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="h-10 w-10 text-green-400" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-2">Order Placed! 🎉</h2>
          <p className="text-gray-400 mb-1">Order ID: <span className="text-orange-400 font-semibold">#{orderNumber}</span></p>
          <p className="text-gray-400 mb-8">Estimated delivery: <span className="text-white font-medium">25–40 minutes</span></p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: Package, label: 'Preparing', color: 'text-orange-400' },
              { icon: Clock, label: '25–40 min', color: 'text-yellow-400' },
              { icon: ShieldCheck, label: 'Confirmed', color: 'text-green-400' },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="bg-gray-800 rounded-xl p-3 flex flex-col items-center gap-1">
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="text-xs text-gray-300">{label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <Button onClick={() => navigate('/')} className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-2.5">
              Back to Home
            </Button>
            <Button onClick={() => navigate('/menu')} variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 rounded-xl py-2.5">
              Order Again
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ─── Main checkout ────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-orange-400 font-medium">Cart</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white font-semibold">Checkout</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── LEFT: Delivery Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 bg-gray-900 border border-gray-700/60 rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-400" />
              Delivery Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-gray-300 text-sm mb-1.5 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={e => handleInputChange('fullName', e.target.value)}
                    placeholder="Rahul Sharma"
                    className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-400 focus:ring-orange-400/20 ${errors.fullName ? 'border-red-500' : ''}`}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300 text-sm mb-1.5 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5" /> Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                    placeholder="9876543210"
                    className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-400 focus:ring-orange-400/20 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-300 text-sm mb-1.5 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                  placeholder="rahul@example.com"
                  className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-400 focus:ring-orange-400/20 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-gray-300 text-sm mb-1.5 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Delivery Address *
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={e => handleInputChange('address', e.target.value)}
                  placeholder="House/Flat No., Street, Area"
                  className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-400 focus:ring-orange-400/20 ${errors.address ? 'border-red-500' : ''}`}
                />
                {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
              </div>

              {/* City + PIN */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-gray-300 text-sm mb-1.5">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={e => handleInputChange('city', e.target.value)}
                    placeholder="Mumbai"
                    className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-400 focus:ring-orange-400/20 ${errors.city ? 'border-red-500' : ''}`}
                  />
                  {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                </div>
                <div>
                  <Label htmlFor="pinCode" className="text-gray-300 text-sm mb-1.5">PIN Code *</Label>
                  <Input
                    id="pinCode"
                    value={formData.pinCode}
                    onChange={e => handleInputChange('pinCode', e.target.value)}
                    placeholder="400001"
                    maxLength={6}
                    className={`bg-gray-800 border-gray-600 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-400 focus:ring-orange-400/20 ${errors.pinCode ? 'border-red-500' : ''}`}
                  />
                  {errors.pinCode && <p className="text-red-400 text-xs mt-1">{errors.pinCode}</p>}
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <Label className="text-gray-300 text-sm mb-3 block flex items-center gap-1.5">
                  <CreditCard className="h-3.5 w-3.5" /> Payment Method
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'card', icon: CreditCard, label: 'Card Payment', sub: 'Debit / Credit / UPI' },
                    { value: 'cash', icon: Banknote, label: 'Cash on Delivery', sub: 'Pay at your door' },
                  ].map(({ value, icon: Icon, label, sub }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleInputChange('paymentMethod', value)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                        formData.paymentMethod === value
                          ? 'border-orange-500 bg-orange-500/10'
                          : 'border-gray-600 bg-gray-800 hover:border-gray-500'
                      }`}
                    >
                      <Icon className={`h-5 w-5 flex-shrink-0 ${formData.paymentMethod === value ? 'text-orange-400' : 'text-gray-400'}`} />
                      <div>
                        <p className={`text-sm font-medium ${formData.paymentMethod === value ? 'text-orange-300' : 'text-gray-200'}`}>{label}</p>
                        <p className="text-xs text-gray-500">{sub}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl text-base mt-2 transition-all shadow-lg shadow-orange-500/20"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Processing Order...
                  </span>
                ) : (
                  `Place Order · ₹${grandTotal.toFixed(0)}`
                )}
              </Button>
            </form>
          </motion.div>

          {/* ── RIGHT: Order Summary ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-gray-900 border border-gray-700/60 rounded-2xl overflow-hidden sticky top-24"
          >
            <div className="px-5 pt-5 pb-3 border-b border-gray-700/60">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Package className="h-5 w-5 text-orange-400" />
                Order Summary
                <span className="ml-auto text-sm font-normal text-gray-400">{getTotalItems()} items</span>
              </h2>
            </div>

            {/* Scrollable Items */}
            <div className="cart-scroll overflow-y-auto max-h-72 px-4 py-3 space-y-2.5" style={{ scrollbarWidth: 'thin', scrollbarColor: '#4b5563 transparent' }}>
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-gray-800/60 rounded-xl p-2.5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 object-cover rounded-lg flex-shrink-0"
                    onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop'; }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{item.name}</p>
                    <p className="text-xs text-gray-400">₹{item.price.toFixed(0)} × {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-orange-400 flex-shrink-0">
                    ₹{(item.price * item.quantity).toFixed(0)}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="px-5 pt-3 pb-5 border-t border-gray-700/60 space-y-2.5">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Delivery Fee</span>
                <span>₹{DELIVERY_FEE}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>GST (5%)</span>
                <span>₹{gst.toFixed(0)}</span>
              </div>
              <div className="h-px bg-gray-700 my-1" />
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-white">Total</span>
                <span className="text-xl font-bold text-orange-400">₹{grandTotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-gray-500 text-center pt-1 flex items-center justify-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                Secure & encrypted checkout
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
