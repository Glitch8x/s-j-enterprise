import React from 'react';
import { MessageSquare } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-primary py-20 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-primary-dark/50 p-8 md:p-16 border border-white/10 rounded-sm">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Secure Order via WhatsApp</h2>
            <p className="text-gray-400 text-lg mb-0">
              Connect directly with our institutional concierge and place your order instantly on WhatsApp. 
              Personalization is just a message away.
            </p>
          </div>

          <a 
            href="https://wa.me/2347032125981" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-accent p-1 pr-8 rounded-sm hover:bg-white transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary flex items-center justify-center text-white">
              <MessageSquare size={32} />
            </div>
            <div>
              <p className="text-primary font-black text-xs tracking-widest uppercase mb-1">CONTACT SJ ENTERPRISE</p>
              <p className="text-primary/70 text-sm font-medium">Place Order via WhatsApp</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
