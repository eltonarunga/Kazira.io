import React from 'react';
import { ShieldAlert, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="flex items-center space-x-4 mb-8">
          <Scale className="w-10 h-10 text-black" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
        </div>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 font-medium">Last Updated: March 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Kazira.io ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p>
              Kazira.io provides AI-powered automation, learning tools, and clinical intelligence solutions. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.
            </p>
          </section>

          <section className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg my-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-red-600" />
              <h2 className="text-xl font-bold text-red-900 m-0">3. Prohibited Conduct & Security</h2>
            </div>
            <p className="text-red-800 font-medium mb-4">
              The security and integrity of Kazira.io are of utmost importance. You strictly agree NOT to engage in any of the following activities:
            </p>
            <ul className="list-disc list-inside space-y-3 text-red-800">
              <li><strong>Unauthorized Scraping & Data Extraction:</strong> Using automated systems, bots, spiders, or scrapers to extract data, content, or information from the Platform without explicit written permission.</li>
              <li><strong>Vulnerability Testing:</strong> Conducting unauthorized penetration testing, vulnerability scanning, load testing, or any other action designed to probe, scan, or test the vulnerability of our systems or networks.</li>
              <li><strong>Security Circumvention:</strong> Attempting to bypass, exploit, defeat, or disable any security measures, authentication mechanisms, or access controls implemented by Kazira.io.</li>
              <li><strong>Reverse Engineering:</strong> Decompiling, reverse engineering, or disassembling any software, AI models, or underlying infrastructure of the Platform.</li>
            </ul>
            <div className="mt-6 p-4 bg-red-100 rounded-md border border-red-200">
              <p className="text-red-900 font-bold text-sm uppercase tracking-wider mb-1">Legal Repercussions</p>
              <p className="text-red-800 text-sm">
                Any violation of these security provisions will result in immediate termination of your access. Kazira.io actively monitors for such activities and will pursue all available legal remedies, including civil damages and reporting to relevant law enforcement authorities for criminal prosecution under applicable cybercrime laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality on the Platform, including but not limited to text, graphics, logos, and AI models, are owned by Kazira.io and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              Kazira.io and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;