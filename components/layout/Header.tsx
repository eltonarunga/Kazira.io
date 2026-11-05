import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, JOTFORM_UPDATES_URL } from '../../constants';
import { NavItem } from '../../types';
import Button from '../common/Button';
import Logo from '../common/Logo';
import JotformModal from '../common/JotformModal';

const KaziraLogo = () => (
  <Link to="/" className="flex items-center space-x-3 group">
    <Logo height={21} className="text-black group-hover:text-gold" />
  </Link>
);

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUpdatesModalOpen, setIsUpdatesModalOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPageLink?: boolean) => {
    setIsMobileMenuOpen(false);
    if (!isPageLink && href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/' && location.pathname !== '/home') {
        navigate('/', { state: { scrollTo: href.substring(1) } });
      } else {
        document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderNavItem = (item: NavItem, isMobile: boolean) => {
    const desktopClass = `text-black/70 hover:text-gold transition-colors duration-200 font-sans text-xs tracking-widest uppercase inline-flex items-center gap-1`;
    const mobileClass = `flex items-center justify-between px-4 py-3 text-sm font-sans tracking-widest uppercase text-black/80 hover:text-gold hover:bg-black/5 transition-colors`;
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
          <span>{item.name}</span>
          <ExternalLink className="w-3 h-3 opacity-50" />
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
            {NAV_ITEMS.map((item) => renderNavItem(item, false))}
            <Button
              onClick={() => setIsUpdatesModalOpen(true)}
              variant="gold"
              size="sm"
            >
              Get Updates
            </Button>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black/70 hover:text-gold focus:outline-none p-2 transition-colors"
              aria-label="Toggle navigation menu"
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
            <nav id="mobile-navigation" className="px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => renderNavItem(item, true))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsUpdatesModalOpen(true);
                }}
                variant="gold"
                className="w-full mt-4"
              >
                Get Updates
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <JotformModal 
        isOpen={isUpdatesModalOpen} 
        onClose={() => setIsUpdatesModalOpen(false)} 
        title="Stay Connected"
        subtitle="Get updates on Kazira automation solutions, advisory services and practical AI learning resources."
      />
    </header>
  );
};

export default Header;