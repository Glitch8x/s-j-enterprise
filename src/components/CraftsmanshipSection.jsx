import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CraftsmanshipSection = () => {
  return (
    <section className="section-padding bg-[#F4F4F4]">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
                alt="Architectural Excellence" 
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent hidden md:flex items-center justify-center p-8 text-primary font-serif italic text-xl text-center">
                15+ Years of Excellence
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h4 className="text-sm font-bold tracking-[0.4em] text-accent mb-6 uppercase">CRAFTMANSHIP</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Architectural Excellence in Every Detail
            </h2>
            <div className="w-20 h-[2px] bg-accent mb-8"></div>
            
            <p className="text-text-muted mb-6 text-lg leading-relaxed">
              Our philosophy centers on the dialogue between architecture and interior life. We don't just fill rooms; we sculpt experiences through light, texture, and proportion.
            </p>
            <p className="text-text-muted mb-10 leading-relaxed">
              With over a decade of experience in high-end residential and commercial developments, SJ Enterprises stands at the forefront of timeless design, ensuring every project is an heirloom of the future.
            </p>

            <ul className="space-y-4 mb-12">
              {[
                'Precision Engineering & Installation',
                'Ethically Sourced Sustainable Materials',
                'Expert Architectural Consultation',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-primary font-medium">
                  <CheckCircle2 className="text-accent" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="btn-primary">LEARN MORE ABOUT US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
