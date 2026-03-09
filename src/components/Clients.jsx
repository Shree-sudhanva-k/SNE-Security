import React, { useEffect, useRef, useState } from 'react';

function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const clients = [
    "Corporate Offices",
    "Residential Apartments",
    "Hospitals & Clinics",
    "IT Tech Parks",
    "Industrial Facilities",
    "Shopping Malls",
    "Educational Institutions",
    "Warehouses"
  ];

  return (
    <section id="clients" className="py-16 bg-white bg-pattern-dots overflow-hidden" ref={sectionRef}>
      <div className={`text-center mb-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold text-sne-blue mb-4">Trusted <span className="text-sne-red">Clients</span></h2>
        <div className="w-20 h-1 bg-sne-red mx-auto rounded"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
          Trusted by multiple businesses and residential communities across Bengaluru for reliable manpower services.
        </p>
      </div>

      {/* Infinite scrolling marquee using Tailwind CSS */}
      <div className="relative flex overflow-x-hidden border-y border-gray-100 bg-gray-50 py-8">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <span 
              key={index} 
              className="mx-8 text-xl font-semibold text-gray-400 uppercase tracking-widest hover:text-sne-blue transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
      
      {/* Add Custom Animation to index.css later */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Clients;
