import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Lightbulb, Tv, Grid, Wind, Brush, LayoutPanelLeft, ChevronRight, Utensils, Maximize } from 'lucide-react';

const services = [
  {
    title: 'Window Blind',
    description: 'Production & Installation. Automated & manual systems for perfect light control.',
    image: '/assets/services/window_blinds.png',
    icon: Wind,
  },
  {
    title: 'Curtains',
    description: 'Production & Installation. Bespoke fabrics and textures tailored for your home.',
    image: '/assets/services/curtains.png',
    icon: Layers,
  },
  {
    title: 'Wallpaper / Wall Stickers',
    description: 'Exclusive patterns and textures that redefine walls, from classic to modern stickers.',
    image: '/assets/services/wallpaper.png',
    icon: Brush,
  },
  {
    title: '3D Panels',
    description: 'Add texture and depth to your walls for premium ambience with modern 3D designs.',
    image: '/assets/services/3d_panels.png',
    icon: Grid,
  },
  {
    title: 'Electrical Services',
    description: 'Smart home integration and aesthetic lighting design. Safe & professional.',
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Lightbulb,
  },
  {
    title: 'TV Console',
    description: 'Custom-made luxury units designed to complement your modern living area.',
    image: '/assets/services/tv_console_new.png',
    icon: Tv,
  },
  {
    title: 'Fluted Wood Installation',
    description: 'Premium fluted panels and wood finishes for sophisticated wall textures.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: LayoutPanelLeft,
  },
  {
    title: 'Kitchen & Wardrobe',
    description: 'Bespoke cabinetry and space-saving storage solutions for modern homes.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Utensils,
  },
  {
    title: 'False Ceiling (POP)',
    description: 'Artistic ceiling designs and POP works with integrated mood lighting.',
    image: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Maximize,
  },
];

const ServicesSection = () => {
  const handleOrder = (serviceTitle) => {
    const message = encodeURIComponent(`Hello S/J Interiors! I'm interested in the ${serviceTitle} service. Could you provide more details and a quote?`);
    window.open(`https://wa.me/2347032125981?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h4 className="text-accent-orange text-xs font-black tracking-[0.5em] mb-6 uppercase">OUR SERVICES</h4>
            <h2 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1]">
              Elevating Spaces Through <br /> 
              <span className="text-accent italic font-normal">Design Excellence</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary/60 max-w-sm text-lg font-medium leading-relaxed italic"
          >
            "We deliver a good services. Comfort & beautification for your home and business."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden mb-8 aspect-[4/5] rounded-sm shadow-2xl bg-primary/5">
                  <motion.img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Badge */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent flex items-center justify-center rounded-full shadow-2xl translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 order-2">
                    <Icon size={28} className="text-primary" />
                  </div>

                  {/* Quick Order Button Overlay */}
                  <div className="absolute bottom-10 left-10 right-10 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <button 
                      onClick={() => handleOrder(service.title)}
                      className="w-full py-4 bg-white text-primary font-black tracking-widest text-[10px] uppercase shadow-2xl hover:bg-accent transition-colors"
                    >
                      Instant Order
                    </button>
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-3xl font-serif text-primary mb-4 pr-12 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-primary/50 text-sm leading-relaxed mb-8 font-medium">
                    {service.description}
                  </p>
                  
                  <button 
                    onClick={() => handleOrder(service.title)}
                    className="flex items-center gap-2 text-xs font-black tracking-widest text-primary group-hover:text-accent-orange transition-colors uppercase"
                  >
                    Select & Order Service
                    <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
