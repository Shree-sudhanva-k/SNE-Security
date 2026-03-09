import React, { useEffect, useRef, useState } from 'react';
import { Shield, Sparkles, Car, Wrench, Factory, Building2, Home, Tent, Package, Briefcase, Box } from 'lucide-react';

function Services() {
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

  const services = [
    { icon: <Shield size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Security Guard Services", desc: "Professional, trained, and disciplined security personnel." },
    { icon: <Sparkles size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Housekeeping Services", desc: "Comprehensive cleaning and sanitization solutions." },
    { icon: <Car size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Parking Management", desc: "Efficient traffic flow and valet parking services." },
    { icon: <Wrench size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Facility Maintenance", desc: "Electrical, plumbing, and general building upkeep." },
    { icon: <Factory size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Industrial Security", desc: "Specialized guarding for factories and plants." },
    { icon: <Building2 size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Corporate Security", desc: "Access control and reception management for offices." },
    { icon: <Home size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Residential Security", desc: "24/7 protection for apartments and gated communities." },
    { icon: <Tent size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Event Security", desc: "Crowd control and VIP protection for special events." },
    { icon: <Package size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Packing & Loading", desc: "Trained staff for logistics and warehouse operations." },
    { icon: <Briefcase size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Office Support Staff", desc: "Peons, pantry boys, and administrative assistants." },
    { icon: <Box size={40} className="text-sne-red mb-4 group-hover:text-white transition-colors" />, title: "Warehouse Manpower", desc: "Skilled and unskilled labor for inventory management." },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-sne-blue mb-4">Our <span className="text-sne-red">Services</span></h2>
          <div className="w-20 h-1 bg-sne-red mx-auto rounded"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Comprehensive manpower solutions tailored to meet the specific needs of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-md hover-lift group border border-gray-100 hover:bg-sne-blue transition-all duration-500 cursor-pointer transform min-h-[220px] flex flex-col justify-center
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition-colors text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
