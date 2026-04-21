import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ExcellenceSection from '../components/ExcellenceSection';
import CTASection from '../components/CTASection';
import CraftsmanshipSection from '../components/CraftsmanshipSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ExcellenceSection />
      <CTASection />
      <CraftsmanshipSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
