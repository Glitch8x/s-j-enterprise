import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, MapPin } from 'lucide-react';

const ExcellenceSection = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Premium Aesthetics',
      desc: 'Curated designs that blend comfort with high-end beautification.'
    },
    {
      icon: Shield,
      title: 'Durability',
      desc: 'We use institutional-grade materials that stand the test of time.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      desc: 'Your time is valued. We ensure precision and on-schedule installation.'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      desc: 'Serving Anambra and Lagos with localized interior insights.'
    }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full mb-6 border border-accent/20 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                  <Icon size={24} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-lg font-serif font-bold mb-4 tracking-wide">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed px-4">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
