import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ChevronRight, ShieldCheck, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { useUser } from '../context/UserContext';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email);
    if (success) {
      navigate('/');
    } else {
      setError('Institutional account not found. Please apply for membership.');
    }
  };

  const handleGuestEntry = (e) => {
    e.preventDefault();
    login('vance.alex@luxury.com');
    navigate('/');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/auth_bg.png" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-xl px-6"
      >
        <div className="bg-white p-12 md:p-20 shadow-2xl rounded-sm">
          {/* Logo Brand Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl font-serif font-black tracking-tighter text-primary italic">S/J</span>
              <div className="flex flex-col gap-0.5">
                <div className="w-5 h-1 bg-accent"></div>
                <div className="w-5 h-1 bg-accent-orange"></div>
                <div className="w-5 h-1 bg-primary"></div>
              </div>
            </div>
            <p className="text-[10px] font-black tracking-[0.4em] text-primary/40 uppercase">INSTITUTIONAL GATEWAY</p>
          </div>

          <h2 className="text-4xl font-serif text-primary text-center mb-4">Welcome Back</h2>
          <p className="text-primary/50 text-center mb-10 text-sm italic">"Comfort and Beautification resides here."</p>

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 p-4 bg-red-50 text-red-600 text-xs font-bold border-l-4 border-red-500 flex justify-center uppercase tracking-widest"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="group">
              <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">EMAIL ADDRESS</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alexander@vance.com" 
                className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-xl font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
              />
            </div>

            <div className="group relative">
              <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">PASSWORD</label>
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                placeholder="••••••••" 
                className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-xl font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute bottom-4 right-0 text-gray-100 hover:text-accent transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 text-xs text-primary/60 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary" />
                Stay authenticated
              </label>
              <a href="#" className="text-xs font-black tracking-widest text-accent uppercase hover:text-primary transition-colors">Forgot Access Code?</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-accent py-6 flex items-center justify-center gap-4 hover:bg-primary-dark transition-all mt-6 shadow-2xl shadow-primary/20 rounded-sm group"
            >
              <span className="text-xs font-black tracking-[0.3em] uppercase group-hover:scale-105 transition-transform">Authorize Entry</span>
              <Lock size={16} className="group-hover:rotate-12 transition-transform" />
            </button>

            <button 
              type="button"
              onClick={handleGuestEntry}
              className="w-full border-2 border-primary/5 text-primary/40 py-5 flex items-center justify-center gap-4 hover:bg-primary/5 hover:text-primary transition-all rounded-sm group"
            >
              <span className="text-xs font-black tracking-[0.3em] uppercase group-hover:tracking-[0.4em] transition-all">Continue as Guest</span>
              <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <p className="mt-12 text-center text-xs text-primary/40 flex items-center justify-center gap-2">
            New to S/J Interiors? 
            <Link to="/signup" className="text-primary font-black tracking-widest uppercase hover:text-accent transition-colors">Apply for membership</Link>
          </p>

          <div className="mt-16 pt-10 border-t border-gray-50 flex justify-center gap-10 opacity-30">
             <div className="flex items-center gap-2 text-[8px] font-black tracking-[0.3em] uppercase grayscale">
                <ShieldCheck size={14} /> 256-BIT SECURE
             </div>
             <div className="flex items-center gap-2 text-[8px] font-black tracking-[0.3em] uppercase grayscale">
                <ShieldCheck size={14} /> SSL COMPLIANT
             </div>
          </div>
        </div>

        {/* Global Footer Quote */}
        <div className="text-center mt-12 text-white/40 text-[10px] font-black tracking-[0.5em] uppercase">
          BEAUTIFICATION IS OUR LEGACY
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
