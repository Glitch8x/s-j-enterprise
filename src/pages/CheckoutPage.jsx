import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Landmark, Lock, ShieldCheck, Trash2, CheckCircle2, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: 'S/J BESPOKE',
      desc: 'The Obsidian Silk Rug',
      price: 8200,
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 2,
      name: 'FLUTED WOOD SERIES',
      desc: 'Premium Wall Paneling',
      price: 4250,
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=200',
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleAuthorize = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment gateway delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 bg-primary min-h-screen flex items-center">
        <div className="container max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 md:p-20 text-center shadow-2xl relative overflow-hidden rounded-sm"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10, delay: 0.2 }}
              className="w-24 h-24 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-10"
            >
              <CheckCircle2 size={48} />
            </motion.div>
            <h1 className="text-5xl font-serif text-primary mb-6">Payment Authorized</h1>
            <p className="text-primary/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed italic">
              "Your order has been anchored in our institutional ledger. An S/J Representative will contact you within 2 hours to finalize installation logistics."
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link 
                to="/profile"
                className="px-12 py-5 bg-primary text-white text-xs font-black tracking-widest uppercase hover:bg-primary-dark transition-all flex items-center justify-center gap-3"
              >
                View Project Status <ChevronRight size={16} />
              </Link>
              <Link 
                to="/"
                className="px-12 py-5 border-2 border-primary/10 text-primary text-xs font-black tracking-widest uppercase hover:bg-primary hover:text-white transition-all"
              >
                Return Home
              </Link>
            </div>
            <div className="mt-16 pt-10 border-t border-gray-50 flex justify-center gap-12 text-[10px] font-black text-primary/30 tracking-widest uppercase">
              <span>Order ID: #SJ-9021-X</span>
              <span>Confirmation Sent to: Savilaudo@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-secondary min-h-screen">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-2/3"
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-1 bg-accent" />
               <h4 className="text-xs font-black tracking-[0.4em] text-primary/40 uppercase">SECURE GATEWAY</h4>
            </div>
            <h1 className="text-6xl font-serif text-primary mb-8">Institutional <br /> <span className="text-accent italic font-normal">Checkout</span></h1>
            <p className="text-primary/60 mb-12 max-w-lg text-lg leading-relaxed italic">
              "Experience seamless acquisition. Your data is protected by S/J high-level encryption protocols."
            </p>

            {/* Payment Method Tabs */}
            <div className="flex mb-12 border border-gray-100 rounded-sm overflow-hidden shadow-xl">
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 py-6 flex items-center justify-center gap-3 font-black text-xs tracking-widest transition-all ${
                  paymentMethod === 'card' ? 'bg-primary text-white' : 'bg-white text-primary/40 hover:text-primary'
                }`}
              >
                <CreditCard size={18} />
                CREDIT CARD
              </button>
              <button 
                onClick={() => setPaymentMethod('bank')}
                className={`flex-1 py-6 flex items-center justify-center gap-3 font-black text-xs tracking-widest transition-all ${
                  paymentMethod === 'bank' ? 'bg-primary text-white' : 'bg-white text-primary/40 hover:text-primary'
                }`}
              >
                <Landmark size={18} />
                BANK TRANSFER
              </button>
            </div>

            {/* Payment Form */}
            <form className="space-y-12" onSubmit={handleAuthorize}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                  <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">CARDHOLDER NAME</label>
                  <input 
                    type="text" 
                    required
                    placeholder="ALEXANDER VANCE" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-2xl font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">CARD NUMBER</label>
                  <input 
                    type="text" 
                    required
                    placeholder="0000 0000 0000 0000" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-2xl font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                  />
                  <CreditCard className="absolute bottom-4 right-0 text-gray-100 group-focus-within:text-accent transition-colors" size={24} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-16">
                <div className="group">
                  <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">EXPIRY DATE</label>
                  <input 
                    type="text" 
                    required
                    placeholder="MM / YY" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-2xl font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">CVV / CVC</label>
                  <input 
                    type="password" 
                    required
                    placeholder="***" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-2xl font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <input type="checkbox" id="save-details" className="w-6 h-6 border-2 border-gray-100 rounded-sm accent-accent cursor-pointer" />
                <label htmlFor="save-details" className="text-xs text-primary/50 font-bold cursor-pointer italic">Save payment details for future architectural consultations and expedited curated orders.</label>
              </div>

              <button 
                disabled={isProcessing}
                className="w-full bg-primary text-accent py-8 flex items-center justify-center gap-4 hover:bg-primary-dark transition-all mt-12 shadow-2xl shadow-primary/20 rounded-sm group relative overflow-hidden"
              >
                {isProcessing ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <span className="text-sm font-black tracking-[0.3em] uppercase group-hover:scale-105 transition-transform">AUTHORIZE PAYMENT — ₦{total.toLocaleString()}.00</span>
                    <Lock size={18} className="group-hover:rotate-12 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex justify-center gap-12 pt-8">
                <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-primary/20 uppercase whitespace-nowrap">
                  <ShieldCheck size={16} className="text-accent" />
                  SSL SECURE
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-primary/20 uppercase whitespace-nowrap">
                  <ShieldCheck size={16} className="text-accent" />
                  PCI COMPLIANT
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-primary/20 uppercase whitespace-nowrap">
                  <ShieldCheck size={16} className="text-accent" />
                  256-BIT AES
                </div>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3"
          >
            <div className="bg-white p-10 lg:p-14 border border-gray-50 shadow-2xl rounded-sm sticky top-32">
              <div className="flex items-center gap-3 mb-10 border-b border-gray-50 pb-8">
                <ShoppingBag className="text-accent" size={24} />
                <h3 className="text-2xl font-serif text-primary">Order Summary</h3>
              </div>
              
              <div className="space-y-10 mb-12">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="relative overflow-hidden w-24 h-24 shrink-0 rounded-sm">
                      <img src={item.image} alt={item.desc} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-black tracking-widest text-primary uppercase mb-1">{item.name}</p>
                      <p className="text-sm text-primary/40 italic mb-4 truncate">{item.desc}</p>
                      <p className="text-lg font-serif text-primary">₦{item.price.toLocaleString()}.00</p>
                    </div>
                    <button className="self-start text-gray-100 hover:text-accent-orange transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-10 border-t border-gray-50 mb-10">
                <div className="flex justify-between items-center">
                  <span className="text-primary/30 uppercase tracking-[0.2em] text-[9px] font-black">SUBTOTAL</span>
                  <span className="text-primary font-bold text-sm">₦{total.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary/30 uppercase tracking-[0.2em] text-[9px] font-black">INSTITUTIONAL DELIVERY</span>
                  <span className="text-accent font-black uppercase text-[9px] tracking-widest border border-accent/20 px-2 py-0.5 rounded-full">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between items-center bg-accent/5 p-4 -mx-4">
                  <span className="text-primary/30 uppercase tracking-[0.2em] text-[9px] font-black text-accent-orange">GRAND TOTAL</span>
                  <span className="text-xl font-serif text-primary font-bold">₦{total.toLocaleString()}.00</span>
                </div>
              </div>

              <div className="bg-primary/5 p-8 border-l-4 border-accent italic text-sm text-primary/70 leading-relaxed rounded-r-sm">
                "Beautification is our legacy. Comfort is our promise."
                <div className="text-[10px] font-black tracking-widest uppercase mt-4 text-primary block tracking-[0.3em]">— S/J MANAGEMENT</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
