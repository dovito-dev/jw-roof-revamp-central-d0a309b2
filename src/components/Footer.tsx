
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              JW Building Solutions
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Central Missouri's trusted commercial roofing and residential spray foam specialists. 
              Quality workmanship with up to 20-year warranties.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <a href="tel:5733756743" className="text-gray-300 hover:text-white">
                  (573) 375-6743
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <a href="mailto:ben@jw-buildingsolutions.com" className="text-gray-300 hover:text-white">
                  ben@jw-buildingsolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/commercial-services" className="text-gray-300 hover:text-white">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link to="/commercial-services" className="text-gray-300 hover:text-white">
                  Metal Roof Restoration
                </Link>
              </li>
              <li>
                <Link to="/commercial-services" className="text-gray-300 hover:text-white">
                  Fabric Reinforced Systems
                </Link>
              </li>
              <li>
                <Link to="/residential-services" className="text-gray-300 hover:text-white">
                  Spray Foam Insulation
                </Link>
              </li>
              <li>
                <Link to="/commercial-services" className="text-gray-300 hover:text-white">
                  Emergency Roof Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Free Assessment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>39217 Pleasant Hill Rd, Barnett, MO</p>
              <p>Licensed & Insured • Conklin Authorized Contractor</p>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 JW Building Solutions LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
