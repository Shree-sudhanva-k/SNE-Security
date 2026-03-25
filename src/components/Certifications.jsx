import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Award } from 'lucide-react';

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
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
    { title: "MSME Certificate", img: "/assets/MSME Certificate.jpg", desc: "Registered as Micro, Small & Medium Enterprise." }

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
                className="w-[280px] md:w-[320px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden snap-center group flex-shrink-0 cursor-pointer flex flex-col"
                onClick={() => !cert.img.endsWith('.pdf') && setSelectedCert(cert.img)}
              >
                <div className="h-[360px] md:h-[400px] w-full bg-gray-50 flex flex-col items-center justify-center p-4 relative">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white font-semibold text-lg px-6 py-2 border-2 border-white rounded-lg backdrop-blur-sm shadow-md">
                      View Document
                    </span>
                  </div>
                  {cert.img.endsWith('.pdf') ? (
                    <div className="text-center p-4">
                      <Award size={64} className="mx-auto text-gray-400 mb-4" />
                      <span className="text-gray-500 font-medium tracking-wide">PDF Document</span>
                    </div>
                  ) : (
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-contain drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-500 rounded bg-white"
                    />
                  )}
                </div>
                <div className="p-5 border-t border-gray-100 bg-white flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-sne-blue mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Lightbox / Modal for Viewing Certificate Full Screen */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl max-h-screen w-full flex justify-center py-8"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 sm:right-6 text-white/70 hover:text-sne-red transition-colors bg-black/60 hover:bg-white p-3 rounded-full shadow-lg border border-white/20 z-[101] flex items-center justify-center"
              onClick={() => setSelectedCert(null)}
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <img
              src={selectedCert}
              alt="Certificate Verification Details"
              className="max-h-[85vh] max-w-full object-contain bg-white rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
