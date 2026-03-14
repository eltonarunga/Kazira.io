import React from 'react';
import { Shield, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="flex items-center space-x-4 mb-8">
          <Shield className="w-10 h-10 text-black" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500 font-medium">Last Updated: March 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you create an account, use our AI tools, or communicate with us. This may include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contact information (e.g., name, email address)</li>
              <li>Authentication data</li>
              <li>Usage data and interactions with our AI models</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Personalize your experience and learning paths</li>
              <li>Process transactions and send related information</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
          </section>

          <section className="bg-gray-50 border-l-4 border-gray-800 p-6 rounded-r-lg my-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-gray-800" />
              <h2 className="text-xl font-bold text-gray-900 m-0">3. Data Security & Anti-Scraping Measures</h2>
            </div>
            <p className="mb-4">
              We implement robust security measures to protect your personal information. To maintain the integrity of our platform and protect user data:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>We employ advanced monitoring to detect and block unauthorized scraping, automated data extraction, and bot activity.</li>
              <li>Any attempt to bypass our security measures, conduct unauthorized vulnerability testing, or access data you are not authorized to view is strictly prohibited.</li>
              <li>Violations of these security policies will result in immediate account termination and potential legal action, as outlined in our Terms of Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf, subject to strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. Please contact us to exercise these rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;