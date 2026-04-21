import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, ChevronRight, Lock, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { useUser } from '../context/UserContext';

const SignupPage = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ name, email });
    navigate('/');
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
          className="w-full h-full object-cover opacity-30 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/95 via-primary/80 to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 w-full max-w-2xl px-6"
      >
        <div className="bg-white p-12 md:p-16 shadow-2xl rounded-sm border-t-8 border-accent">
          {/* Brand Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[10px] font-black tracking-[0.4em] text-accent uppercase mb-2">NEW MEMBER APPLICATION</p>
              <h2 className="text-4xl font-serif text-primary">S/J Interiors</h2>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1">
              <div className="w-12 h-1 bg-accent"></div>
              <div className="w-8 h-1 bg-accent-orange"></div>
            </div>
          </div>

          <p className="text-primary/60 mb-12 italic text-sm border-l-2 border-accent/20 pl-6">
            "Applying for membership grants you access to institutional design ledgers, priority on-site consultations, and curated interior acquisitions."
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group">
                <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">FULL NAME</label>
                <div className="relative">
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ALEXANDER VANCE" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-lg font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                  />
                  <User size={16} className="absolute right-0 bottom-4 text-gray-100 group-focus-within:text-accent transition-colors" />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">EMAIL ADDRESS</label>
                <div className="relative">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ALEX@VANCE.COM" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-lg font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                  />
                  <Mail size={16} className="absolute right-0 bottom-4 text-gray-100 group-focus-within:text-accent transition-colors" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group">
                <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">PHONE NUMBER</label>
                <div className="relative">
                  <input 
                    type="tel" 
                    required
                    placeholder="+234 ..." 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-lg font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                  />
                  <Phone size={16} className="absolute right-0 bottom-4 text-gray-100 group-focus-within:text-accent transition-colors" />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">SECURITY CODE</label>
                <div className="relative">
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••" 
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-lg font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                  />
                  <Lock size={16} className="absolute right-0 bottom-4 text-gray-100 group-focus-within:text-accent transition-colors" />
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 border-l-2 border-accent italic text-[11px] text-primary/50 leading-relaxed rounded-r-sm">
              "By submitting this application, I authorize S/J Interiors to anchor my details in their professional ledger for the purpose of beautification and comfort services."
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-accent py-6 flex items-center justify-center gap-4 hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20 rounded-sm group mt-4"
            >
              <span className="text-xs font-black tracking-[0.3em] uppercase group-hover:scale-105 transition-transform">Apply for Access</span>
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>

            <button 
              type="button"
              onClick={handleGuestEntry}
              className="w-full border-2 border-primary/5 text-primary/40 py-5 flex items-center justify-center gap-4 hover:bg-primary/5 hover:text-primary transition-all rounded-sm group"
            >
              <span className="text-xs font-black tracking-[0.3em] uppercase group-hover:tracking-[0.4em] transition-all">Enter as Guest</span>
              <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <div className="mt-12 text-center text-xs text-primary/40">
            Already have an institutional account? 
            <Link to="/login" className="ml-3 text-primary font-black tracking-widest uppercase hover:text-accent transition-colors">Enter Gateway</Link>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-8 text-[9px] font-medium text-white/30 uppercase tracking-[0.4em]">
          <span>Security Guaranteed</span>
          <span>Institutional Trust</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
