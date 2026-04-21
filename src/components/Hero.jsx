import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          alt="S/J Interiors Luxury" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white mt-16">
        <div className="inline-block px-6 py-2 border border-accent/20 bg-accent/5 backdrop-blur-md rounded-full mb-8 animate-bounce">
          <span className="text-accent text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
            WE DELIVER A GOOD SERVICES
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif max-w-5xl mx-auto mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Transform Your Space <br />
          <span className="text-accent italic">With Elegance</span>
        </h1>
        
        <p className="text-secondary/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          We specialize in premium interior solutions that bring comfort, style and lasting value to your home and business.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <button className="btn-primary w-full md:w-auto shadow-2xl shadow-accent/20">
            OUR SERVICES
          </button>
          <a 
            href="https://wa.me/2347032125981" 
            className="btn-outline w-full md:m-auto flex items-center justify-center gap-3 backdrop-blur-sm"
          >
            <Phone size={20} className="text-accent" />
            BOOK CONSULTATION
          </a>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-lg border-t border-white/10 hidden lg:block">
        <div className="container py-8 flex justify-around text-white">
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-accent">150+</p>
            <p className="text-[10px] tracking-widest uppercase opacity-60 font-black">Projects Completed</p>
          </div>
          <div className="w-[1px] bg-white/10"></div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-accent">Anambra</p>
            <p className="text-[10px] tracking-widest uppercase opacity-60 font-black">Design HQ</p>
          </div>
          <div className="w-[1px] bg-white/10"></div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-accent">Lagos</p>
            <p className="text-[10px] tracking-widest uppercase opacity-60 font-black">Main Office</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
