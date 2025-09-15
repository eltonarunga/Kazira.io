
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={`text-lg font-semibold text-gray-100 mb-4`}>Kazira.io</h3>
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
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/kazira_io" target="_blank" rel="noopener noreferrer" className={`hover:text-white`} aria-label="Kazira.io on Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-md font-semibold text-white mb-2">Newsletter</h4>
              <form className="flex">
                <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
                <button type="submit" className={`px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700`}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kazira.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;