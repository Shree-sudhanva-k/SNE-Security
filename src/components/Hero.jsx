import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
  "Security Services",
  "Parking Management",
  "Facility Maintenance",
  "Housekeeping",
  "Skilled & Unskilled Workforce"
];

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentService = services[textIndex];

    if (isDeleting) {
      // Speed of backspacing
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText.length <= 1) { // When it hits 0 or 1, trigger next word
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % services.length);
          setDisplayText('');
        }
      }, 50);
    } else {
      if (displayText.length < currentService.length) {
        // Speed of typing
        timer = setTimeout(() => {
          setDisplayText(currentService.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause at the end before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: 'url("/assets/photo-collage-landscape.png")' }}
      />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: 'url("/assets/photo-collage-potrait.png")' }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Reliable Manpower Solutions
          <span className="block text-sne-red mt-2 h-16 sm:h-auto">
            For {displayText}
            <span className="animate-pulse inline-block w-[3px] bg-sne-red h-[1em] relative top-1 ml-1" style={{ animationDuration: '0.8s' }}></span>
          </span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto text-gray-200 drop-shadow-md pb-8">
          Providing trained, disciplined, and reliable manpower for corporate offices, residential communities, hospitals, industries, and commercial establishments.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
          <Link
            to="/quote"
            className="bg-sne-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Get a Quote
          </Link>
          <a
            href="tel:+919876543210"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-sne-blue text-white font-bold py-3 px-8 rounded-md shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
