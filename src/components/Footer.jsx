import React from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-32 pb-12 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-serif font-black tracking-tighter text-white italic">S/J</span>
                <div className="flex flex-col gap-0.5 mt-1">
                  <div className="w-8 h-1.5 bg-accent"></div>
                  <div className="w-8 h-1.5 bg-accent-orange"></div>
                  <div className="w-8 h-1.5 bg-white/10"></div>
                </div>
              </div>
              <span className="text-xs font-black tracking-[0.5em] uppercase text-accent-orange mt-4">INTERIORS</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs italic">
              "We specialize in premium interior solutions that bring comfort, style and lasting value to your home and business."
            </p>
            <div className="flex items-center gap-8 pt-4">
              <a href="#" className="text-accent text-[10px] font-black tracking-widest hover:text-white transition-all uppercase border-b border-accent/20 pb-1">INSTAGRAM</a>
              <a href="#" className="text-accent text-[10px] font-black tracking-widest hover:text-white transition-all uppercase border-b border-accent/20 pb-1">FACEBOOK</a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] text-accent-orange mb-12 uppercase">GUIDE</h4>
            <ul className="space-y-6">
              {['About Us', 'Bespoke Services', 'Project Journal', 'Showroom Portfolio', 'Partner Program'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/50 text-sm font-medium hover:text-accent transition-colors block translate-x-0 hover:translate-x-2 duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] text-accent-orange mb-12 uppercase">LOCATIONS</h4>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-500">
                  <MapPin size={16} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-white text-xs font-black tracking-widest mb-2 uppercase">Anambra HQ</p>
                  <p className="text-white/40 text-xs leading-relaxed italic">No8 Awka road <br /> opposite All Cathedral</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-500">
                  <MapPin size={16} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-white text-xs font-black tracking-widest mb-2 uppercase">Lagos Showroom</p>
                  <p className="text-white/40 text-xs leading-relaxed italic">40c Ayilara Street off Ishaga, <br /> Ojuelegba road</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] text-accent-orange mb-12 uppercase">REACH OUT</h4>
            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('tel:+2347032125981')}>
                <div className="w-12 h-12 bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                  <Phone size={18} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">+234 703 212 5981</p>
                  <p className="text-white/20 text-[9px] font-black tracking-widest uppercase mt-1">Direct Concierge</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('mailto:Savilaudo@gmail.com')}>
                <div className="w-12 h-12 bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                  <Mail size={18} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-tight lowercase">Savilaudo@gmail.com</p>
                  <p className="text-white/20 text-[9px] font-black tracking-widest uppercase mt-1">Official Inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase font-black">
              © 2024 S/J INTERIORS
            </p>
            <div className="w-8 h-px bg-white/10 hidden md:block" />
            <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase font-black italic">
              Comfort & Beautification
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-accent text-[10px] tracking-[0.5em] font-black uppercase hover:text-white transition-all"
          >
            <span className="border-b-2 border-accent/20 group-hover:border-white pb-1">BACK TO TOP</span>
            <ArrowRight size={14} className="-rotate-90 group-hover:-translate-y-2 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
