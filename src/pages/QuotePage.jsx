import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    staffCount: '',
    location: '',
    duration: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Quote Request Submitted:", formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 mt-[72px]">
        <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-xl border-t-4 border-green-500 text-center fade-in-scroll is-visible">
          <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Request Received!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for contacting us. Our team will get back to you shortly with a customized manpower service quote.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-sne-blue hover:text-sne-red font-semibold transition-colors underine"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 bg-pattern-dots flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 mt-[72px]">
      
      <div className="text-center mb-10 fade-in-scroll is-visible">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-sne-blue mb-4">Request a <span className="text-sne-red">Quote</span></h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Fill out the form below and our team will contact you shortly with a customized manpower service quote.
        </p>
      </div>

      <div className="max-w-3xl w-full bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-100 fade-in-scroll is-visible">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-sne-red">*</span></label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sne-blue focus:border-sne-blue outline-none transition-all shadow-sm" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-sne-red">*</span></label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sne-blue focus:border-sne-blue outline-none transition-all shadow-sm" placeholder="+91 98765 43210" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address <span className="text-sne-red">*</span></label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sne-blue focus:border-sne-blue outline-none transition-all shadow-sm" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company / Organization Name</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sne-blue focus:border-sne-blue outline-none transition-all shadow-sm" placeholder="Tech Corp Ltd." />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required <span className="text-sne-red">*</span></label>
              <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sne-blue focus:border-sne-blue outline-none transition-all shadow-sm bg-white">
                <option value="">Select a service...</option>
                <option value="Security Services">Security Services</option>
                <option value="Housekeeping Services">Housekeeping Services</option>
                <option value="Parking Management">Parking Management</option>
                <option value="Facility Maintenance">Facility Maintenance</option>
                <option value="Warehouse Staff">Warehouse Staff</option>
                <option value="Office Support Staff">Office Support Staff</option>
                <option value="Event Security">Event Security</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="staffCount" className="block text-sm font-medium text-gray-700 mb-2">Number of Staff Required <span className="text-sne-red">*</span></label>
              <input type="number" id="staffCount" name="staffCount" min="1" required value={formData.staffCount} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sne-blue focus:border-sne-blue outline-none transition-all shadow-sm" placeholder="e.g. 5" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location of Deployment <span className="text-sne-red">*</span></label>
              <input type="text" id="location" name="location" required value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sne-blue focus:border-sne-blue outline-none transition-all shadow-sm" placeholder="Area, City" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Service Duration</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="duration" value="Short Term" onChange={handleChange} className="text-sne-red focus:ring-sne-red h-4 w-4" />
                  <span className="ml-2 text-gray-700">Short Term</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="duration" value="Long Term" onChange={handleChange} className="text-sne-red focus:ring-sne-red h-4 w-4" />
                  <span className="ml-2 text-gray-700">Long Term</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" name="duration" value="Contract Based" onChange={handleChange} className="text-sne-red focus:ring-sne-red h-4 w-4" />
                  <span className="ml-2 text-gray-700">Contract Based</span>
                </label>
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Additional Requirements</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-sne-blue focus:border-sne-blue outline-none transition-all shadow-sm resize-y" placeholder="Any specific requirements or details?"></textarea>
          </div>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100 gap-4">
            <div className="flex space-x-4 w-full sm:w-auto">
              <a href="tel:+919876543210" className="flex-1 sm:flex-none flex items-center justify-center px-6 py-3 border-2 border-sne-blue text-sne-blue hover:bg-sne-blue hover:text-white rounded-md font-semibold transition-colors">
                Call Us Now
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold transition-colors">
                WhatsApp
              </a>
            </div>
            
            <button type="submit" className="w-full sm:w-auto bg-sne-red hover:bg-red-700 text-white font-bold py-3 px-10 rounded-md shadow-lg transition-colors flex items-center justify-center space-x-2 text-lg">
              <span>Submit Request</span>
              <Send size={20} />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default QuotePage;
