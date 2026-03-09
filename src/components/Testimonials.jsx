import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const reviews = [
    {
      text: "The professionalism and discipline of S N Enterprises security staff have greatly improved the safety of our office premises.",
      author: "Rahul Sharma",
      role: "Facility Manager, Tech Park"
    },
    {
      text: "We appreciate their quick response and reliable housekeeping staff. The premises have never been cleaner.",
      author: "Priya Menon",
      role: "Secretary, Green Valley Apartments"
    },
    {
      text: "Highly dependable manpower agency. Their supervisors are very proactive and management is always reachable.",
      author: "Vikram Reddy",
      role: "Operations Head, Logistics Corp"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-sne-blue mb-4">Client <span className="text-sne-red">Testimonials</span></h2>
          <div className="w-20 h-1 bg-sne-red mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg hover-lift border-t-4 border-sne-red relative transition-all duration-700
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 right-6 text-gray-100 w-16 h-16 z-0" />
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-sne-blue">{review.author}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
