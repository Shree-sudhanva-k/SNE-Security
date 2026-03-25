import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mallPhotos = [
    '/assets/MALL_SHOOT/CRW09526.jpg',
    '/assets/MALL_SHOOT/CRW09547.jpg',
    '/assets/MALL_SHOOT/CRW09553.jpg',
    '/assets/MALL_SHOOT/CRW09564.jpg',
    '/assets/MALL_SHOOT/CRW09576.jpg',
    '/assets/MALL_SHOOT/CRW09591.jpg',
    '/assets/MALL_SHOOT/CRW09592.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mallPhotos.length);
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white bg-pattern-dots" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

          {/* Text Content (Left) */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-sne-blue">
              About S N <span className="text-sne-red">Enterprises</span>
            </h2>
            <div className="w-20 h-1 bg-sne-red rounded"></div>

            <p className="text-gray-600 text-lg leading-relaxed">
              S N Enterprises Manpower Services is a Bengaluru-based manpower service provider specializing in security and facility management solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Established in 2018, the company is committed to delivering reliable, disciplined, and professional manpower to corporate clients, residential communities, commercial buildings, and industrial facilities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We focus on maintaining high standards of professionalism, punctuality, and customer satisfaction. Our manpower is carefully trained to handle security operations, housekeeping responsibilities, and facility management tasks with efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-sne-red" size={24} />
                <span className="font-semibold text-gray-800">9+ years of industry experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-sne-red" size={24} />
                <span className="font-semibold text-gray-800">100+ trained manpower deployed</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-sne-red" size={24} />
                <span className="font-semibold text-gray-800">Trusted across Bengaluru</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-sne-red" size={24} />
                <span className="font-semibold text-gray-800">Dedicated management team</span>
              </div>
            </div>
          </div>

          {/* Image Content (Right) */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <div className="absolute inset-0 bg-sne-blue rounded-xl transform translate-x-4 translate-y-4"></div>
            {mallPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`S N Enterprises Facility ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl z-10 transition-all duration-1000 ease-in-out transform ${index === currentImageIndex
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-95 -rotate-1'
                  }`}
              />
            ))}

            {/* Founder/CEO Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-2xl z-20 flex items-center space-x-4 max-w-[250px]">
              <img src="/assets/Proprietor Half PC.jpeg" alt="Founder" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-sne-blue mb-0 leading-tight">Founder & Proprietor</p>
                <p className="text-xs text-gray-500">S N Enterprises</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
