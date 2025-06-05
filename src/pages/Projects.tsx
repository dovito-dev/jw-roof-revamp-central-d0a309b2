
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, DollarSign, Shield } from 'lucide-react';

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Project Portfolio
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the quality and expertise that Central Missouri businesses trust. 
            Real projects, real results, and satisfied customers.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Project: Jim Weddle Warehouse
            </h2>
            <p className="text-xl text-gray-600">
              $87,000 commercial warehouse restoration showcasing our expertise and efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-500">Warehouse Before Photo</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Before: Aging Metal Roof</h3>
              <p className="text-gray-600">
                Deteriorating metal roof with multiple leak points and energy efficiency issues.
              </p>
            </div>
            <div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-500">Warehouse After Photo</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">After: Restored System</h3>
              <p className="text-gray-600">
                Complete metal roof restoration with Conklin fabric reinforced system and 20-year warranty.
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">$87,000</div>
                <div className="text-gray-600">Project Value</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">8 Days</div>
                <div className="text-gray-600">Completion Time</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">20 Years</div>
                <div className="text-gray-600">Warranty Period</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-800" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Project Scope</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Complete metal roof restoration with Conklin system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Fabric reinforced membrane application</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Complete leak elimination and weatherproofing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Energy efficiency improvements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Results</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Project completed ahead of schedule</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Zero business disruption during installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">20-year renewable warranty provided</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Customer extremely satisfied with results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Projects Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Project Examples
            </h2>
            <p className="text-xl text-gray-600">
              A showcase of our diverse commercial and residential projects across Central Missouri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial Office Building */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Office Building</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Office Building</h3>
                <p className="text-gray-600 mb-4">
                  Single ply TPO installation on 15,000 sq ft office complex with 15-year warranty.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold">15,000 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">System:</span>
                    <span className="font-semibold">TPO Single Ply</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Warranty:</span>
                    <span className="font-semibold">15 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Church Restoration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Church Building</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Historic Church Restoration</h3>
                <p className="text-gray-600 mb-4">
                  Fabric reinforced roof restoration preserving historic character while solving leak issues.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold">8,500 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">System:</span>
                    <span className="font-semibold">Fabric Reinforced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Warranty:</span>
                    <span className="font-semibold">20 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* School Building */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">School Building</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Elementary School Renovation</h3>
                <p className="text-gray-600 mb-4">
                  Summer break roof replacement ensuring students return to a leak-free environment.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold">25,000 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">System:</span>
                    <span className="font-semibold">Metal Restoration</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Warranty:</span>
                    <span className="font-semibold">20 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing Facility */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Manufacturing Facility</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Facility</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale spray foam roofing system for industrial facility with high thermal performance needs.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold">50,000 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">System:</span>
                    <span className="font-semibold">Spray Foam</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Warranty:</span>
                    <span className="font-semibold">15 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Residential Spray Foam */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Residential Home</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Home Insulation</h3>
                <p className="text-gray-600 mb-4">
                  Complete home spray foam insulation package for new construction energy efficiency.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">New Construction</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">System:</span>
                    <span className="font-semibold">Closed Cell Foam</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Energy Savings:</span>
                    <span className="font-semibold">40% reduction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pole Barn */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">Pole Barn</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agricultural Pole Barn</h3>
                <p className="text-gray-600 mb-4">
                  Spray foam insulation transforms unheated pole barn into comfortable year-round workspace.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold">5,000 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">System:</span>
                    <span className="font-semibold">Open Cell Foam</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">R-Value:</span>
                    <span className="font-semibold">R-23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied Central Missouri businesses and homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4 italic">
                "JWBS completed our warehouse roof restoration ahead of schedule and under budget. 
                The quality of work exceeded our expectations, and Joni's attention to detail was outstanding."
              </p>
              <div className="font-bold text-gray-900">- Jim Weddle</div>
              <div className="text-gray-600">Warehouse Owner</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4 italic">
                "After years of dealing with roof leaks, JWBS finally solved our problems permanently. 
                The 20-year warranty gives us complete peace of mind."
              </p>
              <div className="font-bold text-gray-900">- Sarah Mitchell</div>
              <div className="text-gray-600">Church Administrator</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4 italic">
                "The spray foam insulation in our home has cut our energy bills in half. 
                Professional installation and immediate results. Highly recommend JWBS."
              </p>
              <div className="font-bold text-gray-900">- Mike Johnson</div>
              <div className="text-gray-600">Homeowner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            See how JWBS can solve your roofing challenges with the same quality and expertise 
            that has satisfied customers across Central Missouri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Your Project
            </Link>
            <a
              href="tel:5733756743"
              className="bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (573) 375-6743
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
