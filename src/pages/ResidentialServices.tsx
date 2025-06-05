
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Thermometer, DollarSign, Phone } from 'lucide-react';

const ResidentialServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Residential Spray Foam Insulation
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Transform your home's energy efficiency with professional spray foam insulation. 
            Superior air sealing and insulation performance for Central Missouri homes.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Spray Foam Insulation?
            </h2>
            <p className="text-xl text-gray-600">
              Superior energy efficiency and comfort compared to traditional insulation methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Energy Efficiency</h3>
              <p className="text-gray-600">Reduce heating and cooling costs by up to 50%</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Air Sealing</h3>
              <p className="text-gray-600">Complete air barrier eliminates drafts and hot spots</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Long-term Savings</h3>
              <p className="text-gray-600">Investment pays for itself through reduced energy bills</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Durability</h3>
              <p className="text-gray-600">Won't settle, sag, or lose R-value over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Spray Foam Insulation Works
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Spray foam insulation expands on contact to fill every crack, crevice, and void. 
                This creates a continuous thermal barrier and air seal that traditional insulation can't match.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Professional Application</h4>
                    <p className="text-gray-600">Our certified technicians apply foam using professional equipment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Expansion & Curing</h4>
                    <p className="text-gray-600">Foam expands to fill all gaps and cures into a solid barrier</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Immediate Results</h4>
                    <p className="text-gray-600">Notice improved comfort and energy efficiency right away</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Spray Foam Application Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* R-Value Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Superior Insulation Performance
            </h2>
            <p className="text-xl text-gray-600">
              Compare spray foam's performance to traditional insulation methods
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Closed-Cell Spray Foam</h3>
                <div className="text-4xl font-bold text-green-700 mb-2">R-6.5</div>
                <p className="text-gray-600">per inch + air sealing</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Moisture barrier
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Structural strength
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete air seal
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Open-Cell Spray Foam</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">R-3.8</div>
                <p className="text-gray-600">per inch + air sealing</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sound dampening
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cost effective
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellent air sealing
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Fiberglass</h3>
                <div className="text-4xl font-bold text-gray-400 mb-2">R-3.2</div>
                <p className="text-gray-600">per inch (no air sealing)</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center text-red-600">
                    <span className="w-4 h-4 border border-red-500 rounded mr-2"></span>
                    Gaps and air leaks
                  </li>
                  <li className="flex items-center text-red-600">
                    <span className="w-4 h-4 border border-red-500 rounded mr-2"></span>
                    Settles over time
                  </li>
                  <li className="flex items-center text-red-600">
                    <span className="w-4 h-4 border border-red-500 rounded mr-2"></span>
                    Moisture issues
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where We Apply Spray Foam
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive insulation solutions for every area of your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Attics</h3>
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Attic Insulation</span>
              </div>
              <p className="text-gray-600">
                Seal and insulate your attic for maximum energy savings and comfort control.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Crawl Spaces</h3>
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Crawl Space</span>
              </div>
              <p className="text-gray-600">
                Eliminate moisture issues and drafts with crawl space encapsulation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basements</h3>
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Basement Walls</span>
              </div>
              <p className="text-gray-600">
                Insulate basement walls to prevent condensation and improve comfort.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rim Joists</h3>
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Rim Joist</span>
              </div>
              <p className="text-gray-600">
                Seal the critical junction between foundation and framing.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">New Construction</h3>
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">New Home</span>
              </div>
              <p className="text-gray-600">
                Complete home insulation packages for new construction projects.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pole Barns</h3>
              <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Pole Barn</span>
              </div>
              <p className="text-gray-600">
                Turn your pole barn into a comfortable, energy-efficient workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional, efficient installation with minimal disruption to your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your home's insulation needs and energy efficiency opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">
                Area preparation and protection to ensure clean, professional installation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">
                Professional spray foam application by certified technicians using commercial-grade equipment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-800">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600">
                Final inspection and cleanup to ensure your complete satisfaction with the project.
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical Project Timeline</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-green-700 mb-2">Same Day</div>
                  <p className="text-gray-600">Assessment & Quote</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-700 mb-2">1-2 Days</div>
                  <p className="text-gray-600">Typical Installation</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-700 mb-2">24 Hours</div>
                  <p className="text-gray-600">Full Cure Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Home's Energy Efficiency?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get a free assessment and discover how much you can save with professional spray foam insulation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:5733756743"
              className="flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default ResidentialServices;
