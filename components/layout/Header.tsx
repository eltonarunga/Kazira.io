
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { NAV_ITEMS_LOGGED_IN, NAV_ITEMS_LOGGED_OUT, LANDING_PAGE_NAV_ITEMS } from '../../constants';
import { NavItem } from '../../types';
import Button from '../common/Button';

const KaziraLogo = () => (
  <Link to="/home" className="flex items-center space-x-3 group">
    <div className="bg-gold/10 p-2 rounded-none border border-gold/30 group-hover:bg-gold/20 transition-colors">
      <Cpu className="w-5 h-5 text-gold" strokeWidth={1.5} />
    </div>
    <span className="text-xl font-serif font-semibold text-black tracking-wide uppercase">Kazira</span>
  </Link>
);

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const baseNavItems = isAuthenticated ? NAV_ITEMS_LOGGED_IN : NAV_ITEMS_LOGGED_OUT;
  const currentNavItems = location.pathname === '/home' ? [...baseNavItems.filter(item => item.isPageLink || item.isExternal), ...LANDING_PAGE_NAV_ITEMS] : baseNavItems;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPageLink?: boolean) => {
    setIsMobileMenuOpen(false);
    if (!isPageLink && href.startsWith('#')) {
      e.preventDefault();
      // Ensure we are on the landing page before trying to scroll
      if (location.pathname !== '/home') {
        navigate('/home', { state: { scrollTo: href.substring(1) } });
      } else {
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (isPageLink) {
      // Standard navigation handled by Link component
    }
  };

  const renderNavItem = (item: NavItem, isMobile: boolean) => {
    const desktopClass = `text-black/70 hover:text-gold transition-colors duration-200 font-sans text-xs tracking-widest uppercase`;
    const mobileClass = `block px-4 py-3 text-sm font-sans tracking-widest uppercase text-black/80 hover:text-gold hover:bg-black/5 transition-colors`;
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
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <KaziraLogo />
          <nav className="hidden md:flex space-x-8 items-center">
            {currentNavItems.map((item) => renderNavItem(item, false))}
            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/login')}
                variant="gold"
                size="sm"
              >
                Get Started
              </Button>
            )}
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black/70 hover:text-gold focus:outline-none p-2 transition-colors"
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
            className="md:hidden bg-gray-50 border-t border-gray-200 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2">
              {currentNavItems.map((item) => renderNavItem(item, true))}
              {isAuthenticated ? (
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full mt-4"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate('/login');
                  }}
                  variant="gold"
                  className="w-full mt-4"
                >
                  Get Started
                </Button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;