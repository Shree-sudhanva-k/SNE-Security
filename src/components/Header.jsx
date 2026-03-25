import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'services', 'clients', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 150; // Add an offset
        // Check from bottom to top
        for (const section of [...sections].reverse()) {
          const element = document.getElementById(section);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      } else {
        setActiveSection('');
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = (section) => {
    return `font-medium transition-colors ${activeSection === section
      ? 'text-sne-red border-b-2 border-sne-red pb-1'
      : 'text-gray-700 hover:text-sne-red'
      }`;
  };

  const mobileNavLinkClass = (section) => {
    return `block px-3 py-3 text-base font-medium text-left border-b border-gray-50 transition-colors ${activeSection === section
      ? 'text-sne-red bg-red-50'
      : 'text-gray-700 hover:text-sne-red hover:bg-gray-50'
      }`;
  };

  return (
    <header className="fixed w-full z-50 top-0 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-sne-blue text-white py-1 px-4 text-xs sm:text-sm transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex space-x-4">
            <span>GSTIN: <span className="font-semibold">29BOKPS4135M1Z8</span></span>
            <span className="hidden sm:inline">|</span>
            <span>ESI / PF Registered</span>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="tel:+919876543210" className="flex items-center hover:text-gray-300 transition-colors">
              <Phone size={14} className="mr-1" />
              +91 98765 43210
            </a>
            <a href="mailto:info@snenterprises.com" className="flex items-center hover:text-gray-300 transition-colors">
              <Mail size={14} className="mr-1" />
              info@snenterprises.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'shadow-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center py-2">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
                <img src="/assets/20181025_162507.png" alt="S N Enterprises Logo" className="h-10 sm:h-16 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('home')} className={navLinkClass('home')}>Home</button>
              <button onClick={() => scrollToSection('about')} className={navLinkClass('about')}>About Us</button>
              <button onClick={() => scrollToSection('services')} className={navLinkClass('services')}>Services</button>
              <button onClick={() => scrollToSection('clients')} className={navLinkClass('clients')}>Clients</button>
              <button onClick={() => scrollToSection('contact')} className={navLinkClass('contact')}>Contact</button>
              <Link to="/quote" className="bg-sne-red hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm hover:shadow-md ml-4">
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-sne-blue hover:text-sne-red focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <button onClick={() => scrollToSection('home')} className={mobileNavLinkClass('home')}>Home</button>
              <button onClick={() => scrollToSection('about')} className={mobileNavLinkClass('about')}>About Us</button>
              <button onClick={() => scrollToSection('services')} className={mobileNavLinkClass('services')}>Services</button>
              <button onClick={() => scrollToSection('clients')} className={mobileNavLinkClass('clients')}>Clients</button>
              <button onClick={() => scrollToSection('contact')} className={`${mobileNavLinkClass('contact')} mb-4`}>Contact</button>
              <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center bg-sne-red hover:bg-red-700 text-white px-5 py-3 rounded-md font-medium transition-colors shadow-sm mt-2">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
