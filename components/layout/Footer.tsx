import React from 'react';
import { Link } from 'react-router-dom';
import { KAARB_URL, KAZIRA_LEARN_URL, JOB_SCANNER_URL } from '../../constants';
import { Twitter, ExternalLink } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => (
  <footer className="bg-white text-black/60 border-t border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6"><Logo height={21} className="text-black" /></div>
          <p className="text-sm font-light leading-relaxed">AI workflow automation, business intelligence and practical digital skills for SMEs and healthcare organisations.</p>
          <a href="https://twitter.com/kazira_io" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 inline-flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Kazira.io on X"><Twitter className="w-4 h-4" strokeWidth={1.5} /></a>
        </div>

        <div>
          <h3 className="font-mono text-xs text-black uppercase tracking-widest mb-8">Kazira arms</h3>
          <ul className="space-y-4 text-sm font-light">
            <li><Link to="/automate" className="hover:text-gold transition-colors">Kazira Solutions</Link></li>
            <li><Link to="/" state={{ scrollTo: "advisory" }} className="hover:text-gold transition-colors">Kazira Advisory</Link></li>
            <li><a href={KAZIRA_LEARN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Kazira Academy <ExternalLink className="inline w-3 h-3 ml-1" /></a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs text-black uppercase tracking-widest mb-8">Solutions & initiatives</h3>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="https://kazixfrontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">KaziX blue-collar skills marketplace</a></li>
            <li><a href="https://dentside-remote.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">DentSide Remote</a></li>
            <li><a href="https://jino-x.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">JinoX AI</a></li>
            <li><a href={JOB_SCANNER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Job Disruption Scanner</a></li>
            <li><a href={KAARB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">K-AARB <span className="text-black/35">(independent)</span></a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs text-black uppercase tracking-widest mb-8">Company</h3>
          <ul className="space-y-4 text-sm font-light">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><a href="https://form.jotform.com/260052273727050" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Get in touch</a></li>
            <li><Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono tracking-widest uppercase text-black/40">
        <p>&copy; {new Date().getFullYear()} Kazira.io. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Better systems. Smarter work.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
