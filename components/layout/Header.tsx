
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { NAV_ITEMS_LOGGED_IN, NAV_ITEMS_LOGGED_OUT, LANDING_PAGE_NAV_ITEMS } from '../../constants';
import { NavItem } from '../../types';

const KaziraLogo: React.FC = () => (
  <Link to="/" className="flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 text-gray-800`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375a9.375 9.375 0 0 0 4.767-1.162M12 18.375a9.375 9.375 0 0 1-4.767-1.162M12 18.375v4.125M12 3.375A9.375 9.375 0 0 1 16.768 4.537M12 3.375A9.375 9.375 0 0 0 7.232 4.537M12 3.375V1.5M18.375 12a9.375 9.375 0 0 1-1.162 4.767M18.375 12a9.375 9.375 0 0 0-1.162-4.767M18.375 12H20.25M5.625 12a9.375 9.375 0 0 0 1.162 4.767M5.625 12a9.375 9.375 0 0 1 1.162-4.767M5.625 12H3.75m14.625-6.375C17.209 3.829 14.723 3 12 3s-5.209.829-6.375 2.625m12.75 0C19.171 6.791 20.25 9.277 20.25 12s-.829 5.209-2.625 6.375m-12.75 0C4.829 17.209 3.75 14.723 3.75 12s.829-5.209 2.625-6.375" />
    </svg>
    <span className="text-2xl font-bold text-gray-800">Kazira.io</span>
  </Link>
);

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const baseNavItems = isAuthenticated ? NAV_ITEMS_LOGGED_IN : NAV_ITEMS_LOGGED_OUT;
  const currentNavItems = location.pathname === '/' ? [...baseNavItems.filter(item => item.isPageLink), ...LANDING_PAGE_NAV_ITEMS] : baseNavItems;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPageLink?: boolean) => {
    setIsMobileMenuOpen(false);
    if (!isPageLink && href.startsWith('#')) {
      e.preventDefault();
      // Ensure we are on the landing page before trying to scroll
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href.substring(1) } });
      } else {
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (isPageLink) {
      // Standard navigation handled by Link component
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <KaziraLogo />
          <nav className="hidden md:flex space-x-6 items-center">
            {currentNavItems.map((item) => (
              item.isPageLink ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isPageLink)}
                  className={`text-gray-600 hover:text-black transition duration-150 ease-in-out`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isPageLink)}
                  className={`text-gray-600 hover:text-black transition duration-150 ease-in-out`}
                >
                  {item.name}
                </a>
              )
            ))}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className={`ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
              >
                Logout
              </button>
            )}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-gray-600 hover:text-black focus:outline-none`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {currentNavItems.map((item) => (
               item.isPageLink ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isPageLink)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isPageLink)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50`}
                >
                  {item.name}
                </a>
              )
            ))}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className={`w-full mt-2 text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800 hover:bg-gray-700`}
              >
                Logout
              </button>
            )}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
