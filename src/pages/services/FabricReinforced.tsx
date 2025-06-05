
import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Zap, Droplets, Phone } from 'lucide-react';

const FabricReinforced = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fabric Reinforced Roofing Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Superior protection with embedded fabric mesh technology. 
                Enhanced durability and performance for demanding commercial applications.
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
              <span className="text-gray-500">Fabric Reinforced System Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Protection Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fabric reinforcement provides superior strength and longevity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enhanced Durability</h3>
              <p className="text-gray-600">Fabric mesh reinforcement resists cracking and splitting</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weather Resistant</h3>
              <p className="text-gray-600">Superior protection against UV, wind, and temperature extremes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Efficient</h3>
              <p className="text-gray-600">Reflective properties reduce cooling costs and energy consumption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                System Features
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Polyester Fabric Mesh:</strong>
                    <span className="text-gray-600"> High-strength reinforcement embedded in coating</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Seamless Application:</strong>
                    <span className="text-gray-600"> Continuous membrane without weak points</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Crack Bridging:</strong>
                    <span className="text-gray-600"> Accommodates structural movement and thermal cycling</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Chemical Resistance:</strong>
                    <span className="text-gray-600"> Withstands harsh environmental conditions</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">System Features Diagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ideal Applications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Industrial Facilities</h3>
              <p className="text-gray-600">Manufacturing plants, warehouses, distribution centers</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Commercial Buildings</h3>
              <p className="text-gray-600">Office buildings, retail centers, restaurants</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Institutional</h3>
              <p className="text-gray-600">Schools, hospitals, government buildings</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Specialty Structures</h3>
              <p className="text-gray-600">Aircraft hangars, sports facilities, churches</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Upgrade to Fabric Reinforced Protection
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover how fabric reinforced systems can provide superior protection for your commercial roof.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FabricReinforced;
