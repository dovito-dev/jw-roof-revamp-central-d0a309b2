
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
    urgency: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
    alert('Thank you for your message! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact JW Building Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to solve your roofing challenges? Get in touch for a free assessment 
            and discover why Central Missouri businesses trust JWBS.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:5733756743" className="text-blue-800 hover:text-blue-900 text-lg">
                      (573) 375-6743
                    </a>
                    <p className="text-gray-600 text-sm">Available for emergency calls 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:ben@jw-buildingsolutions.com" className="text-blue-800 hover:text-blue-900 text-lg">
                      ben@jw-buildingsolutions.com
                    </a>
                    <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-800 text-lg">39217 Pleasant Hill Rd</p>
                    <p className="text-gray-800 text-lg">Barnett, MO</p>
                    <p className="text-gray-600 text-sm">Serving all of Central Missouri</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-800">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-800">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 text-sm">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve commercial and residential customers throughout Central Missouri, including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <div>• Barnett</div>
                  <div>• Jefferson City</div>
                  <div>• Columbia</div>
                  <div>• Sedalia</div>
                  <div>• Warrensburg</div>
                  <div>• Fulton</div>
                  <div>• California</div>
                  <div>• Boonville</div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Not sure if we serve your area? Give us a call – we travel throughout Central Missouri for qualified projects.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Request Free Assessment
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(573) 555-0123"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select project type</option>
                        <option value="commercial-roofing">Commercial Roofing</option>
                        <option value="residential-spray-foam">Residential Spray Foam</option>
                        <option value="roof-restoration">Roof Restoration</option>
                        <option value="emergency-repair">Emergency Repair</option>
                        <option value="new-construction">New Construction</option>
                        <option value="consultation">Consultation Only</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="emergency">Emergency (Within 24 hours)</option>
                        <option value="urgent">Urgent (Within 1 week)</option>
                        <option value="normal">Normal (Within 1 month)</option>
                        <option value="planning">Planning (2+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe your roofing needs, building size, current issues, or any specific questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-900 transition-colors"
                  >
                    Submit Request
                  </button>
                </form>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <div className="text-sm text-green-800">
                      <strong>What happens next?</strong> We'll review your request and contact you within 24 hours 
                      to schedule your free assessment. For emergencies, call us directly at (573) 375-6743.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-t border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Emergency Roofing Service
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Roof leaks can't wait. If you have an emergency roofing situation, 
            call us immediately for rapid response and temporary protection.
          </p>
          <a
            href="tel:5733756743"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Emergency Line: (573) 375-6743
          </a>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">Licensed</div>
              <div className="text-gray-600">Fully Licensed Contractor</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">Insured</div>
              <div className="text-gray-600">Comprehensive Insurance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">Since 2015</div>
              <div className="text-gray-600">Commercial Roofing Focus</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">20-Year</div>
              <div className="text-gray-600">Warranty Available</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
