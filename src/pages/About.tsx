
import React from 'react';
import Layout from '../components/Layout';
import { Award, Users, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About JW Building Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Founded on Master Builder expertise and unwavering commitment to quality, 
            we've been serving Central Missouri's commercial roofing needs since 2015.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built on Experience, Driven by Quality
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                JW Building Solutions was founded by Joni Wickey, who began his roofing career at age 16 
                and has focused exclusively on commercial roofing since 2015. What started as hands-on 
                learning has evolved into Master Builder expertise that Central Missouri businesses rely on.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a family business with deep Central Missouri roots, we understand the unique challenges 
                our climate presents to commercial buildings. Every project receives direct owner involvement, 
                ensuring the quality and attention to detail that has built our reputation.
              </p>
              <p className="text-lg text-gray-600">
                We're not just contractors – we're your long-term roofing partners, committed to solving 
                problems other contractors abandon and delivering solutions that stand the test of time.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Joni Wickey Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose JWBS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Central Missouri Chooses JWBS
            </h2>
            <p className="text-xl text-gray-600">
              We're different from typical contractors, and our results prove it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Master Builder Certification</h3>
              <p className="text-gray-600">
                Joni's Master Builder credentials represent the highest level of expertise in 
                commercial roofing, ensuring every project meets professional standards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality-Focused Approach</h3>
              <p className="text-gray-600">
                We believe in doing things right the first time. While others compete on price, 
                we compete on value and long-term performance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Owner Involvement</h3>
              <p className="text-gray-600">
                Joni personally oversees every project, ensuring consistent quality and 
                accountability that larger companies can't match.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry-Leading Warranties</h3>
              <p className="text-gray-600">
                Up to 20-year warranties that are renewable and extendable because we stand 
                behind our work with confidence.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conklin Partnership Since 1977</h3>
              <p className="text-gray-600">
                Our long-standing partnership with Conklin ensures access to the industry's 
                most advanced roofing technologies and materials.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Community Commitment</h3>
              <p className="text-gray-600">
                As Central Missouri natives, we're invested in our community's success and 
                build lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to roofing excellence
            </p>
          </div>

          {/* Joni Wickey Profile */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Joni Wickey Photo</span>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Joni Wickey - Owner & Master Builder
                </h3>
                <p className="text-gray-600 mb-4">
                  With over 20 years in the roofing industry, Joni brings unmatched expertise to 
                  every commercial roofing project. His journey began at age 16, and since 2015, 
                  he has focused exclusively on commercial applications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Master Builder Certified
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Conklin Authorized Contractor
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safety Certified & Licensed
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Central Missouri Native
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Expertise */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-800" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Training</h4>
              <p className="text-gray-600">
                Continuous education and certification in the latest roofing technologies and safety practices.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-800" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Safety First</h4>
              <p className="text-gray-600">
                OSHA compliant safety protocols and comprehensive insurance coverage for every project.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-800" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">
                Rigorous quality control processes ensure every installation meets our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
