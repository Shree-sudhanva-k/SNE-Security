import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

function ContactOverview() {
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

  return (
    <section id="contact" className="py-20 bg-gray-50 bg-pattern-dots" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-sne-blue mb-4">Contact <span className="text-sne-red">Us</span></h2>
          <div className="w-20 h-1 bg-sne-red mx-auto rounded"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for reliable manpower solutions. Our team is ready to assist you 24/7.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 space-y-6">
              <h3 className="text-2xl font-bold text-sne-blue border-b pb-4">Our Office</h3>

              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded-full mr-4 shrink-0">
                  <MapPin className="text-sne-red" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Address</h4>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    19, 2nd Cross Rd, RK Block, Nrapathunga Layout,<br />
                    J.C.Nagar, Bengaluru, Karnataka 560032
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded-full mr-4 shrink-0">
                  <Phone className="text-sne-red" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Phone</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+919876543210" className="hover:text-sne-red transition-colors">+91 98765 43210</a><br />
                    <a href="tel:+919876543211" className="hover:text-sne-red transition-colors">+91 98765 43211</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded-full mr-4 shrink-0">
                  <Mail className="text-sne-red" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Email</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:info@snenterprises.com" className="hover:text-sne-red transition-colors">info@snenterprises.com</a><br />
                    <a href="mailto:sales@snenterprises.com" className="hover:text-sne-red transition-colors">sales@snenterprises.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded-full mr-4 shrink-0">
                  <Clock className="text-sne-red" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Working Hours</h4>
                  <p className="text-gray-600 mt-1">
                    General: Mon - Sat (9:00 AM - 6:00 PM)<br />
                    Security Control: 24/7 Operations
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=13.0076167,77.5956749&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S N Enterprises Location"
              ></iframe>
            </div>

          </div>

          {/* Quick Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-sne-blue mb-6">Send an Inquiry</h3>
            <form className="space-y-5 flex-grow flex flex-col" onSubmit={async (e) => {
              e.preventDefault();
              const btn = e.target.querySelector('button[type="submit"]');
              const originalText = btn.innerHTML;

              btn.innerHTML = '<span>Sending...</span>';
              btn.disabled = true;

              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData.entries());
              data._subject = "New Inquiry from Website";

              try {
                await fetch("https://formsubmit.co/ajax/anvithj2304@gmail.com", {
                  method: "POST",
                  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                  body: JSON.stringify(data)
                });

                // Show success state on the button
                btn.innerHTML = '<span>Message Sent!</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>';
                btn.classList.remove('bg-sne-blue', 'hover:bg-blue-900');
                btn.classList.add('bg-green-500', 'hover:bg-green-600');

                e.target.reset();

                // Revert back after 5 seconds
                setTimeout(() => {
                  btn.innerHTML = originalText;
                  btn.classList.remove('bg-green-500', 'hover:bg-green-600');
                  btn.classList.add('bg-sne-blue', 'hover:bg-blue-900');
                  btn.disabled = false;
                }, 5000);

              } catch (error) {
                alert('Sorry, there was an error sending your message. Please try again or email us directly.');
                btn.innerHTML = originalText;
                btn.disabled = false;
              }
            }}>
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sne-red focus:border-sne-red outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" maxLength="10" title="Please enter exactly 10 digits" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sne-red focus:border-sne-red outline-none transition-all" placeholder="9876543210" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sne-red focus:border-sne-red outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select id="service" name="service" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sne-red focus:border-sne-red outline-none transition-all bg-white">
                  <option value="">Select a service...</option>
                  <option value="Security Services">Security Services</option>
                  <option value="Housekeeping Services">Housekeeping Services</option>
                  <option value="Facility Maintenance">Facility Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex-grow">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sne-red focus:border-sne-red outline-none transition-all resize-none h-full min-h-[120px]" placeholder="How can we help you?"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-sne-blue hover:bg-blue-900 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg mt-auto"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactOverview;
