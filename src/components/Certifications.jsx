import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Award } from 'lucide-react';

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const certificates = [
    { title: "GST Registration", img: "/assets/GST Certificate.jpeg", desc: "Goods and Services Tax registered entity." },
    { title: "ESI Registration", img: "/assets/ESI Corp.jpeg", desc: "Compliant with Employee State Insurance Corporation." },
    { title: "PF Registration", img: "/assets/PF pg2.jpeg", desc: "Registered with Employees' Provident Fund Organisation." },
    { title: "Labour License", img: "/assets/Labour Licence.jpeg", desc: "Authorized by Department of Labour." },
    { title: "MSME Certificate", img: "/assets/MSME Certificate.pdf", desc: "Registered as Micro, Small & Medium Enterprise." }, // PDF might not show as img nicely, but assuming thumbnail or fallback, we use PDF for now or replace with image if needed. Using img tag for now assuming user might have a thumbnail or it's a placeholder. Actually, let's use the provided Excellence Certificate pdf as text/link or just use the images. I will use the image files provided.
    { title: "Govt. Approv. Prop.", img: "/assets/Proprietor Photo-copy.jpeg", desc: "Authorized Proprietorship." }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white bg-pattern-dots" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-sne-red" size={32} />
              <h2 className="text-3xl sm:text-4xl font-bold text-sne-blue">Our <span className="text-sne-red">Certifications</span></h2>
            </div>
            <div className="w-20 h-1 bg-sne-red rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              We operate with 100% statutory compliance, ensuring peace of mind for our clients and fair practices for our staff.
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2 mt-4 md:mt-0">
            <button onClick={scrollLeft} className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-sne-red hover:text-white hover:border-sne-red transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={scrollRight} className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-sne-red hover:text-white hover:border-sne-red transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden snap-center group flex-shrink-0 cursor-pointer"
              >
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-2 relative">
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                     <span className="text-white font-medium px-4 py-2 border border-white rounded-md">View</span>
                   </div>
                   {cert.img.endsWith('.pdf') ? (
                     <div className="text-center p-4">
                       <Award size={48} className="mx-auto text-gray-400 mb-2" />
                       <span className="text-sm text-gray-500">PDF Document</span>
                     </div>
                   ) : (
                     <img 
                       src={cert.img} 
                       alt={cert.title} 
                       className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                     />
                   )}
                </div>
                <div className="p-5 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-sne-blue mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
