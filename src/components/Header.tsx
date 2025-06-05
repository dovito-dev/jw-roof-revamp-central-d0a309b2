
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown, 
  Building2, 
  Home, 
  Shield, 
  Wrench, 
  Zap, 
  Droplets 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const commercialServices = [
    { 
      name: 'Metal & Membrane Restoration', 
      href: '/services/metal-restoration',
      icon: Building2,
      description: 'Extend roof life with proven restoration systems'
    },
    { 
      name: 'Fabric Reinforced Systems', 
      href: '/services/fabric-reinforced',
      icon: Shield,
      description: 'Superior protection with fabric-reinforced coatings'
    },
    { 
      name: 'Single Ply Roofing', 
      href: '/services/single-ply',
      icon: Droplets,
      description: 'Modern membrane roofing solutions'
    },
    { 
      name: 'Spray Foam Roofing', 
      href: '/services/spray-foam-roofing',
      icon: Zap,
      description: 'Seamless insulation and waterproofing'
    },
    { 
      name: 'Emergency Repairs', 
      href: '/services/emergency-repairs',
      icon: Wrench,
      description: '24/7 emergency roofing services'
    }
  ];

  const residentialServices = [
    { 
      name: 'Spray Foam Insulation', 
      href: '/services/spray-foam-insulation',
      icon: Home,
      description: 'Energy-efficient home insulation solutions'
    },
    { 
      name: 'Energy Audits', 
      href: '/services/energy-audits',
      icon: Zap,
      description: 'Comprehensive home energy assessments'
    },
    { 
      name: 'Attic Insulation', 
      href: '/services/attic-insulation',
      icon: Home,
      description: 'Professional attic insulation services'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMegaMenuEnter = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-800">
              JW Building Solutions
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? 'text-blue-800 border-b-2 border-blue-800' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <button
                className="flex items-center text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Mega Menu Dropdown */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-[800px] z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200">
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Commercial Services */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                            <Building2 className="h-5 w-5 mr-2" />
                            Commercial Services
                          </h3>
                          <div className="space-y-3">
                            {commercialServices.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                onClick={() => setIsMegaMenuOpen(false)}
                              >
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                                  <service.icon className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 group-hover:text-blue-800 transition-colors text-sm">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Residential Services */}
                        <div>
                          <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                            <Home className="h-5 w-5 mr-2" />
                            Residential Services
                          </h3>
                          <div className="space-y-3">
                            {residentialServices.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-start p-3 rounded-lg hover:bg-green-50 transition-colors group"
                                onClick={() => setIsMegaMenuOpen(false)}
                              >
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                                  <service.icon className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 group-hover:text-green-700 transition-colors text-sm">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* View All Services Link */}
                      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <Link
                          to="/services"
                          className="inline-flex items-center justify-center bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold text-sm"
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:5733756743"
              className="flex items-center text-blue-800 hover:text-blue-900 font-semibold"
            >
              <Phone className="h-4 w-4 mr-2" />
              (573) 375-6743
            </a>
            <Link
              to="/contact"
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors font-semibold"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50 rounded-md ${
                    isActive(item.href) ? 'text-blue-800 bg-blue-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-blue-800 border-b border-gray-200">
                  Services
                </div>
                <div className="ml-4 space-y-1">
                  <div className="px-3 py-1 text-sm font-medium text-gray-800">
                    Commercial Services
                  </div>
                  {commercialServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-800 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="ml-4 space-y-1 mt-3">
                  <div className="px-3 py-1 text-sm font-medium text-gray-800">
                    Residential Services
                  </div>
                  {residentialServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-800 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <a
                  href="tel:5733756743"
                  className="flex items-center px-3 py-2 text-blue-800 font-semibold"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (573) 375-6743
                </a>
                <Link
                  to="/contact"
                  className="block w-full bg-blue-800 text-white px-3 py-2 rounded-lg hover:bg-blue-900 transition-colors font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
