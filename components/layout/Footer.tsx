
import React, { useState } from 'react';
import { Twitter } from 'lucide-react';
import Modal from '../common/Modal';

const Footer = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className={`text-lg font-semibold text-white mb-4`}>Kazira.io</h3>
            <p className="text-sm">AI-Powered Automation & Learning for a brighter future.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/learn" className={`hover:text-white`}>Kazira Learn</a></li>
              <li><a href="#/automate" className={`hover:text-white`}>Kazira Automate</a></li>
              <li><a href="#/" className={`hover:text-white`}>Home</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/terms" className={`hover:text-white`}>Terms of Service</a></li>
              <li><a href="#/privacy" className={`hover:text-white`}>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://twitter.com/kazira_io" target="_blank" rel="noopener noreferrer" className={`hover:text-white`} aria-label="Kazira.io on Twitter">
                <Twitter className="w-6 h-6" strokeWidth={1.5} />
              </a>
            </div>
            <div>
              <h4 className="text-md font-semibold text-white mb-2">Platform Updates</h4>
              <p className="text-xs text-gray-400 mb-3">Get the latest on AI tools and features.</p>
              <button 
                onClick={() => setIsUpdateModalOpen(true)}
                className="px-6 py-3 !bg-white !text-black rounded-md hover:!bg-gray-100 transition-all text-sm font-black border-2 !border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105"
              >
                Join Update List
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kazira.io. All rights reserved.</p>
        </div>
      </div>

      <Modal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} title="Stay Updated">
        <div className="w-full min-h-[450px] overflow-hidden rounded-lg">
          <iframe
            src="https://form.jotform.com/260052273727050"
            title="App Updates"
            className="w-full h-[500px] border-none"
            allow="geolocation; microphone; camera"
          />
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
