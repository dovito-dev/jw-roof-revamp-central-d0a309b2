
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Award, Users, Phone, ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Central Missouri's Trusted
              <span className="block text-blue-200">Commercial Roofing & Spray Foam Specialists</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Up to 20-year warranties • Master Builder expertise • Serving businesses across Central Missouri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
              >
                Get Free Roof Assessment
              </Link>
              <a
                href="tel:5733756743"
                className="flex items-center bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (573) 375-6743
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-blue-200" />
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Central Missouri Businesses Choose JWBS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver long-term roofing solutions with Master Builder expertise and industry-leading warranties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Master Builder Expertise</h3>
              <p className="text-gray-600">Joni Wickey brings decades of specialized commercial roofing experience</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Up to 20-Year Warranties</h3>
              <p className="text-gray-600">Renewable and extendable warranties because we stand behind our work</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Over Cost</h3>
              <p className="text-gray-600">Long-term solutions, not quick fixes that fail in a few years</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Central Missouri Specialists</h3>
              <p className="text-gray-600">Local expertise that understands your climate and building needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive roofing and insulation solutions for commercial and residential properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Commercial Roofing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Roofing</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Metal & Membrane Restoration
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fabric Reinforced Systems
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Single Ply Roofing
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Spray Foam Roofing
                  </li>
                </ul>
                <Link
                  to="/commercial-services"
                  className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Residential Spray Foam */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Spray Foam</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Energy Efficiency Solutions
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Air Sealing Technology
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Moisture Control
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Long-term Savings
                  </li>
                </ul>
                <Link
                  to="/residential-services"
                  className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Central Missouri Businesses
            </h2>
          </div>

          {/* Featured Case Study */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Jim Weddle Warehouse Project
                </h3>
                <p className="text-gray-600 mb-4">
                  $87,000 commercial warehouse restoration completed in just 8 days. 
                  Metal roof restoration with Conklin fabric reinforced system.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    20-year renewable warranty
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Completed ahead of schedule
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    100% satisfied customer
                  </li>
                </ul>
                <Link
                  to="/projects"
                  className="inline-block mt-4 text-blue-800 font-semibold hover:text-blue-900"
                >
                  View More Projects →
                </Link>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Project Photo</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">20</div>
              <div className="text-gray-600">Year Warranties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">100%</div>
              <div className="text-gray-600">Licensed & Insured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-800 mb-2">1977</div>
              <div className="text-gray-600">Conklin Partner Since</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Solve Your Roofing Challenges?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free professional assessment and discover why Central Missouri businesses trust JWBS for their roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Schedule Free Assessment
            </Link>
            <a
              href="tel:5733756743"
              className="flex items-center justify-center bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (573) 375-6743
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
