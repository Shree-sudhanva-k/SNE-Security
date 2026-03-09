import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import ContactOverview from '../components/ContactOverview';

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 sm:pt-[72px]">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      <Certifications />
      <ContactOverview />
    </div>
  );
}

export default LandingPage;
