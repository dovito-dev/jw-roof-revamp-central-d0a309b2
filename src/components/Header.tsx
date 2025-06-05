
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Commercial Services', href: '/commercial-services' },
    { name: 'Residential Services', href: '/residential-services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

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
          <nav className="hidden lg:flex space-x-8">
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
