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

  const featuredClients = [
    { name: "Euroamer Garuda India Pvt Ltd", logo: "/assets/garuda-logo-nobg.png" },
    { name: "Global Kitchens LLP Bangalore", logo: "/assets/globsl kitchen.jpg" },
    { name: "Cheryl Enterprises Pvt. Ltd", logo: "/assets/cheryl.png" }
  ];

  const generalCategories = [
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
      <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-bold text-sne-blue mb-4">Our Trusted <span className="text-sne-red">Clients</span></h2>
        <div className="w-20 h-1 bg-sne-red mx-auto rounded"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
          We provide dedicated security and facility management services to a growing number of corporate entities, as well as several residential apartments across Bengaluru.
        </p>
      </div>

      {/* Featured Clients Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {featuredClients.map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group">
              <div className="h-32 w-full flex items-center justify-center mb-6 overflow-hidden">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-50 flex items-center justify-center rounded-lg">
                    <span className="text-gray-400">Logo Unavailable</span>
                  </div>
                )}
              </div>
              <h3 className="text-center font-bold text-gray-800 text-lg group-hover:text-sne-blue transition-colors">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
        <p className={`text-center text-gray-500 mt-8 italic transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          ... and a couple of premium apartments in Bangalore.
        </p>
      </div>

      {/* Infinite scrolling marquee using Tailwind CSS */}
      <div className="relative flex overflow-x-hidden border-y border-gray-100 bg-gray-50 py-8">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...generalCategories, ...generalCategories, ...generalCategories].map((category, index) => (
            <span
              key={index}
              className="mx-8 text-xl font-semibold text-gray-400 uppercase tracking-widest hover:text-sne-blue transition-colors cursor-default"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

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
