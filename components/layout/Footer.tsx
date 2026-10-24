
import React from 'react';
import { Twitter } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-white text-black/60 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Column 1: Brand, Address, Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group mb-8">
              <Logo height={21} className="text-black" />
            </div>
            
            <div className="pt-4 flex space-x-4">
              <a href="https://twitter.com/kazira_io" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Kazira.io on Twitter">
                <Twitter className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="font-mono text-xs text-black uppercase tracking-widest mb-8">Solutions</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="https://x.com/nanostrategyke" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">NanostrategyKE</a></li>
              <li><a href="https://opal.google/app/1RS_gONM_N73fAQy3u_mtelYIjJHNtfN8" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Kazira Learn</a></li>
              <li><a href="#/automate" className="hover:text-gold transition-colors">Kazira Automate</a></li>
              <li><a href="https://opal.withgoogle.com/?flow=drive:/1g5EsPt18QZYsNAcaE1f9KgmCnWOQEvin&shared&mode=app" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Job Disruption Scanner</a></li>
              <li><a href="#/kenya-ai-exam" className="hover:text-gold transition-colors">Kenya's Final AI Exam</a></li>
              <li><a href="https://jino-x.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">JinoX AI</a></li>
              <li><a href="https://dentside-remote.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">DentSide Remote</a></li>
              <li><a href="https://kazixfrontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">KaziX</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-mono text-xs text-black uppercase tracking-widest mb-8">Company</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#/" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="https://form.jotform.com/260052273727050" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Get Updates</a></li>
              <li><a href="https://form.jotform.com/260052273727050" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Request Consultation</a></li>
              <li><a href="#/terms" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#/privacy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono tracking-widest uppercase text-black/40">
          <p>&copy; {new Date().getFullYear()} Kazira.io. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for the Future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
