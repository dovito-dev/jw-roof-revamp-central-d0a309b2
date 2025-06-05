
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Home, 
  Shield, 
  Wrench, 
  Zap, 
  Droplets,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const commercialServices = [
    {
      title: 'Metal & Membrane Restoration',
      description: 'Extend roof life with proven restoration systems',
      icon: Building2,
      href: '/services/metal-restoration',
      features: ['20-year warranties', 'Cost-effective', 'Minimal disruption']
    },
    {
      title: 'Fabric Reinforced Systems',
      description: 'Superior protection with fabric-reinforced coatings',
      icon: Shield,
      href: '/services/fabric-reinforced',
      features: ['Enhanced durability', 'Weather resistant', 'Energy efficient']
    },
    {
      title: 'Single Ply Roofing',
      description: 'Modern membrane roofing solutions',
      icon: Droplets,
      href: '/services/single-ply',
      features: ['Lightweight', 'UV resistant', 'Long-lasting']
    },
    {
      title: 'Spray Foam Roofing',
      description: 'Seamless insulation and waterproofing',
      icon: Zap,
      href: '/services/spray-foam-roofing',
      features: ['Seamless application', 'Superior insulation', 'Self-flashing']
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 emergency roofing services',
      icon: Wrench,
      href: '/services/emergency-repairs',
      features: ['Rapid response', 'Temporary solutions', 'Permanent fixes']
    }
  ];

  const residentialServices = [
    {
      title: 'Spray Foam Insulation',
      description: 'Energy-efficient home insulation solutions',
      icon: Home,
      href: '/services/spray-foam-insulation',
      features: ['Energy savings', 'Air sealing', 'Moisture control']
    },
    {
      title: 'Energy Audits',
      description: 'Comprehensive home energy assessments',
      icon: Zap,
      href: '/services/energy-audits',
      features: ['Identify issues', 'Cost analysis', 'Improvement plans']
    },
    {
      title: 'Attic Insulation',
      description: 'Professional attic insulation services',
      icon: Home,
      href: '/services/attic-insulation',
      features: ['R-value optimization', 'Professional installation', 'Long-term savings']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive roofing and insulation solutions backed by Master Builder expertise and industry-leading warranties
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Commercial Roofing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for businesses across Central Missouri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service) => (
              <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-800 font-semibold hover:text-blue-900"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Energy-efficient solutions for your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service) => (
              <div key={service.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-green-700 font-semibold hover:text-green-800"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free assessment and personalized solution for your property.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Free Assessment
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
