import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Window Blinds',
    message: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '2347032125981';
    const text = `*NEW INSTITUTIONAL INQUIRY (S/J Interiors)*\n\n*Name:* ${formData.name}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
          alt="Consultation Office" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent text-xs font-black tracking-[0.5em] mb-6 uppercase">GET IN TOUCH</h4>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
              Ready to <span className="text-accent italic font-normal">Begin Your</span> <br /> 
              Transformation?
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md italic leading-relaxed">
              "We deliver a good services. Comfort & beautification for your home and business is just a conversation away."
            </p>
            
            <div className="space-y-8">
              <button 
                onClick={() => window.open('tel:+2347032125981')}
                className="flex items-center gap-6 group cursor-pointer w-full text-left"
              >
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <Phone size={20} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">CALL OUR CONCIERGE</p>
                  <p className="text-xl font-serif text-white">+234 703 212 5981</p>
                </div>
              </button>
              
              <button 
                onClick={() => window.open('mailto:Savilaudo@gmail.com')}
                className="flex items-center gap-6 group cursor-pointer w-full text-left"
              >
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <Mail size={20} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">EMAIL FOR QUOTE</p>
                  <p className="text-xl font-serif text-white underline decoration-accent/30 hover:decoration-accent transition-all">Savilaudo@gmail.com</p>
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-12 md:p-16 shadow-2xl rounded-sm"
          >
            <h3 className="text-3xl font-serif text-primary mb-10">Institutional Inquiry</h3>
            <form className="space-y-8" onSubmit={handleWhatsAppSubmit}>
              <div className="group">
                <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">FULL NAME</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="ALEXANDER VANCE" 
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-lg font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                />
              </div>
              <div className="group">
                <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">SELECT SERVICE</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-lg font-serif text-primary focus:outline-none focus:border-accent transition-colors"
                >
                  <option>Window Blinds</option>
                  <option>Curtains</option>
                  <option>Wallpaper / Wall Stickers</option>
                  <option>3D Wall Panels</option>
                  <option>Fluted Wood Installation</option>
                  <option>Kitchen & Wardrobe</option>
                  <option>False Ceiling (POP)</option>
                  <option>Electrical Services</option>
                  <option>TV Console</option>
                  <option>Full Interior Overhaul</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-[10px] font-black tracking-widest text-primary/40 mb-3 uppercase group-focus-within:text-accent transition-colors">MESSAGE</label>
                <textarea 
                  rows="3"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your space..." 
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-lg font-serif text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-gray-100"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-accent py-6 flex items-center justify-center gap-4 hover:bg-primary-dark transition-all rounded-sm group shadow-xl"
              >
                <span className="text-xs font-black tracking-[0.3em] uppercase group-hover:scale-105 transition-transform">Send via WhatsApp</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
