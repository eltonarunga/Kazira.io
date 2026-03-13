
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { NAV_ITEMS_LOGGED_IN, NAV_ITEMS_LOGGED_OUT, LANDING_PAGE_NAV_ITEMS } from '../../constants';
import { NavItem } from '../../types';

const KaziraLogo = () => (
  <Link to="/" className="flex items-center space-x-2 group">
    <div className="bg-black p-1.5 rounded-lg group-hover:bg-gray-800 transition-colors">
      <Cpu className="w-6 h-6 text-white" strokeWidth={2} />
    </div>
    <span className="text-2xl font-bold text-gray-900 tracking-tight">Kazira.io</span>
  </Link>
);

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const baseNavItems = isAuthenticated ? NAV_ITEMS_LOGGED_IN : NAV_ITEMS_LOGGED_OUT;
  const currentNavItems = location.pathname === '/' ? [...baseNavItems.filter(item => item.isPageLink || item.isExternal), ...LANDING_PAGE_NAV_ITEMS] : baseNavItems;

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

  const renderNavItem = (item: NavItem, isMobile: boolean) => {
    const desktopClass = `text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-sm`;
    const mobileClass = `block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors`;
    const className = isMobile ? mobileClass : desktopClass;

    if (item.isExternal) {
      return (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.name}
        </a>
      );
    }
    
    if (item.isPageLink) {
      return (
        <Link
          key={item.name}
          to={item.href}
          onClick={(e) => handleNavClick(e, item.href, item.isPageLink)}
          className={className}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        onClick={(e) => handleNavClick(e, item.href, item.isPageLink)}
        className={className}
      >
        {item.name}
      </a>
    );
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <KaziraLogo />
          <nav className="hidden md:flex space-x-8 items-center">
            {currentNavItems.map((item) => renderNavItem(item, false))}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="ml-4 px-5 py-2 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Logout
              </button>
            )}
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-xl absolute w-full border-t border-gray-100 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2">
              {currentNavItems.map((item) => renderNavItem(item, true))}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="w-full mt-4 text-center block px-4 py-3 rounded-xl text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Logout
                </button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;