
import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, DollarSign, Phone } from 'lucide-react';

const MetalRestoration = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Metal & Membrane Roof Restoration
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Extend your roof's life by 15-20 years with our proven restoration systems. 
                Cost-effective alternative to complete roof replacement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Get Free Assessment
                </Link>
                <a
                  href="tel:5733756743"
                  className="flex items-center justify-center bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (573) 375-6743
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Metal Roof Restoration Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Roof Restoration?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Restore instead of replace - save money while extending roof life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Effective</h3>
              <p className="text-gray-600">50-70% less expensive than complete roof replacement</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Minimal Disruption</h3>
              <p className="text-gray-600">Business operations continue during restoration process</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">20-Year Warranty</h3>
              <p className="text-gray-600">Renewable and extendable warranty coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Restoration Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Inspection</h3>
              <p className="text-gray-600">Thorough roof assessment and condition evaluation</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">Clean and prepare surface for optimal coating adhesion</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application</h3>
              <p className="text-gray-600">Apply premium restoration coatings and systems</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600">Final inspection and warranty documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ideal Applications
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Metal Roofs:</strong>
                    <span className="text-gray-600"> Standing seam, corrugated, and built-up metal systems</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Modified Bitumen:</strong>
                    <span className="text-gray-600"> Aged membrane roofing systems</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Built-Up Roofs:</strong>
                    <span className="text-gray-600"> Tar and gravel roofing systems</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Commercial Buildings:</strong>
                    <span className="text-gray-600"> Warehouses, offices, retail, industrial facilities</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Restoration Applications Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Restore Your Roof?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free professional assessment and discover how much you can save with roof restoration.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Schedule Free Assessment
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default MetalRestoration;
