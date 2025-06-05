
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowDown, Phone } from 'lucide-react';

const CommercialServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Commercial Roofing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive commercial roofing solutions for Central Missouri businesses. 
            From restoration to new installations, we solve the roofing challenges others abandon.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Free Assessment
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Commercial Roofing Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Specialized services for warehouses, offices, churches, schools, and industrial facilities
            </p>
          </div>
        </div>
      </section>

      {/* Metal & Membrane Restoration */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Metal & Membrane Roof Restoration
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Extend your roof's life by 20+ years with our proven restoration systems. 
                More cost-effective than replacement, with warranties that prove our confidence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Complete leak elimination with seamless membrane application</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Energy efficiency improvements reduce cooling costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Minimal business disruption during installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Up to 20-year renewable warranties</span>
                </li>
              </ul>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Ideal For:</h4>
                <p className="text-gray-600">
                  Metal roofs, modified bitumen, built-up roofs, and most existing commercial roofing systems
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Metal Roof Restoration Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Reinforced Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center order-2 lg:order-1">
              <span className="text-gray-500">Fabric Reinforced System Photo</span>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Fabric Reinforced Roofing Systems
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Conklin's revolutionary fabric reinforced systems provide superior durability and 
                flexibility. Perfect for challenging roof conditions and extreme weather resistance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Enhanced puncture and impact resistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Superior thermal expansion and contraction handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Seamless, monolithic membrane application</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Excellent for irregular roof surfaces</span>
                </li>
              </ul>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Best Applications:</h4>
                <p className="text-gray-600">
                  High-traffic roofs, equipment-heavy surfaces, and roofs requiring maximum durability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Single Ply & Spray Foam */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Single Ply */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Ply Roofing</h3>
              <div className="bg-gray-200 h-48 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Single Ply Photo</span>
              </div>
              <p className="text-gray-600 mb-6">
                Advanced single ply membranes for new construction and roof replacements. 
                Energy-efficient, durable, and cost-effective solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  TPO and EPDM systems
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Energy Star rated options
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Fast installation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Long-term warranties
                </li>
              </ul>
            </div>

            {/* Spray Foam */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Spray Foam</h3>
              <div className="bg-gray-200 h-48 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500">Spray Foam Photo</span>
              </div>
              <p className="text-gray-600 mb-6">
                Superior insulation and air sealing for maximum energy efficiency. 
                Perfect for irregular surfaces and complex roof configurations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Highest R-value per inch
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Complete air sealing
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Self-adhering system
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Structural reinforcement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Emergency Roof Repair Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Roof leaks can't wait. Our emergency response team provides rapid assessment 
            and temporary repairs to protect your business operations.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Response</h3>
              <p className="text-gray-600">Same-day emergency service to minimize business disruption</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Temporary Protection</h3>
              <p className="text-gray-600">Professional tarping and leak mitigation solutions</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Permanent Solutions</h3>
              <p className="text-gray-600">Long-term repair strategies to prevent future issues</p>
            </div>
          </div>
          <a
            href="tel:5733756743"
            className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
          >
            <Phone className="h-5 w-5 mr-2" />
            Emergency Line: (573) 375-6743
          </a>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Leading Warranty Protection
            </h2>
            <p className="text-xl text-gray-600">
              We stand behind our work with warranties that protect your investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Up to 20 Years</h3>
              <p className="text-gray-600">Comprehensive material and labor warranties on most systems</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Renewable</h3>
              <p className="text-gray-600">Warranties can be renewed and extended with proper maintenance</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowDown className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transferable</h3>
              <p className="text-gray-600">Warranties transfer to new building owners for added value</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Solve Your Commercial Roofing Challenges?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a professional assessment and discover why Central Missouri businesses choose JWBS for quality roofing solutions.
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
              Call (573) 375-6743
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommercialServices;
