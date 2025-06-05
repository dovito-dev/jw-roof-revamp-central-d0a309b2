
import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle, Droplets, Zap, Clock, Phone } from 'lucide-react';

const SinglePly = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Single Ply Roofing Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Modern membrane roofing solutions offering superior performance, 
                energy efficiency, and long-term value for commercial properties.
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
              <span className="text-gray-500">Single Ply Roofing Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Single Ply Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lightweight, flexible, and durable membrane solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightweight</h3>
              <p className="text-gray-600">Minimal structural load with maximum protection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UV Resistant</h3>
              <p className="text-gray-600">Excellent resistance to ultraviolet radiation and weathering</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Lasting</h3>
              <p className="text-gray-600">20+ year service life with proper installation and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membrane Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Membrane Options
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">EPDM (Rubber)</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Excellent weather resistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Outstanding thermal stability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Easy to repair and maintain</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Cost-effective solution</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Ideal for buildings with minimal foot traffic and standard commercial applications.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">TPO (Thermoplastic)</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Energy-efficient white membrane</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Heat-weldable seams</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Chemical and puncture resistant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span className="text-gray-600">Environmentally friendly</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Perfect for energy-conscious buildings and applications requiring superior seam strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Installation Methods
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Adhered</h3>
              <p className="text-gray-600">Complete bonding to substrate for maximum wind resistance</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mechanically Attached</h3>
              <p className="text-gray-600">Fastened to deck with ballast or attachment strips</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ballasted</h3>
              <p className="text-gray-600">Loose-laid with ballast material for weight</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Modern Roofing Solutions
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover the benefits of single ply roofing for your commercial property.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Expert Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SinglePly;
