import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

function Footer() {
  const location = useLocation();

  const handleScroll = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-sne-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block mb-4">
              <img src="/assets/20181025_162507.png" alt="S N Enterprises Logo" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing trained, disciplined, and reliable manpower for corporate offices, residential communities, hospitals, industries, and commercial establishments in Bengaluru.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sne-red transition-colors group">
                <Facebook size={18} className="text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sne-red transition-colors group">
                <Twitter size={18} className="text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sne-red transition-colors group">
                <Instagram size={18} className="text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sne-red transition-colors group">
                <Linkedin size={18} className="text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => handleScroll('home')} className="text-gray-300 hover:text-sne-red transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> Home</button></li>
              <li><button onClick={() => handleScroll('about')} className="text-gray-300 hover:text-sne-red transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> About Us</button></li>
              <li><button onClick={() => handleScroll('services')} className="text-gray-300 hover:text-sne-red transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> Services</button></li>
              <li><button onClick={() => handleScroll('clients')} className="text-gray-300 hover:text-sne-red transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> Clients</button></li>
              <li><button onClick={() => handleScroll('contact')} className="text-gray-300 hover:text-sne-red transition-colors flex items-center"><ArrowRight size={14} className="mr-2" /> Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center"><ArrowRight size={14} className="mr-2 text-sne-red" /> Security Services</li>
              <li className="text-gray-300 flex items-center"><ArrowRight size={14} className="mr-2 text-sne-red" /> Housekeeping</li>
              <li className="text-gray-300 flex items-center"><ArrowRight size={14} className="mr-2 text-sne-red" /> Parking Management</li>
              <li className="text-gray-300 flex items-center"><ArrowRight size={14} className="mr-2 text-sne-red" /> Facility Maintenance</li>
              <li className="text-gray-300 flex items-center"><ArrowRight size={14} className="mr-2 text-sne-red" /> Office Support Staff</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-sne-red shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">#123, 4th Main Road, Corporate Block, Bengaluru, India 560001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-sne-red shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-sne-red shrink-0" />
                <a href="mailto:info@snenterprises.com" className="text-gray-300 hover:text-white transition-colors">info@snenterprises.com</a>
              </li>
            </ul>

            <div className="mt-6">
              <Link to="/quote" className="inline-block bg-sne-red hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-gray-400 text-sm">
            &copy; 2025 S N Enterprises Manpower Services. All Rights Reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
