import React, { useEffect, useRef, useState } from 'react';
import { UserCheck, Clock, Zap, FileSearch, ShieldCheck, UserCog, PiggyBank } from 'lucide-react';

function WhyChooseUs() {
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

  const features = [
    { icon: <UserCheck size={32} className="text-white" />, title: "Trained & Verified Staff" },
    { icon: <Clock size={32} className="text-white" />, title: "24/7 Security Support" },
    { icon: <Zap size={32} className="text-white" />, title: "Quick Deployment" },
    { icon: <FileSearch size={32} className="text-white" />, title: "Background Verification" },
    { icon: <ShieldCheck size={32} className="text-white" />, title: "Professional Guards" },
    { icon: <UserCog size={32} className="text-white" />, title: "Experienced Supervisors" },
    { icon: <PiggyBank size={32} className="text-white" />, title: "Affordable Plans" },
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: 'url("/assets/CRW09526.jpg")' }}
      />
      <div className="absolute inset-0 bg-sne-blue/90 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why <span className="text-sne-red">Choose Us</span></h2>
          <div className="w-20 h-1 bg-sne-red mx-auto rounded"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            We deliver exceptional service quality through rigorous training, strict supervision, and a commitment to customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-sne-red group hover-lift transition-all duration-500
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
