import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
      <div className="flex items-center space-x-4 mb-8">
        <Shield className="w-10 h-10 text-gold" />
        <h1 className="text-3xl md:text-4xl font-serif text-black">Privacy Policy</h1>
      </div>
      <div className="prose max-w-none text-black/70 space-y-6 font-light">
        <p className="text-sm text-black/40 font-mono tracking-wider uppercase">Last reviewed: 17 November 2026</p>
        <section>
          <h2 className="text-2xl font-serif text-black mt-8 mb-4">1. Scope and data controller</h2>
          <p>This notice covers the public Kazira.io corporate website and its enquiry form. Kazira LLC is the data controller, as identified by Kazira. This notice does not automatically cover separate products or services reached through links on this website; those services may have their own operators and privacy notices.</p>
          <p>The website code reviewed for this notice does not include first-party account registration, payment processing, or AI-model interaction endpoints. Product capabilities on linked websites should not be assumed to be processing activities of this corporate website.</p>
        </section>
        <section>
          <h2 className="text-2xl font-serif text-black mt-8 mb-4">2. Information submitted through our enquiry form</h2>
          <p>Our enquiry and consultation form is hosted by Jotform and is embedded in, or linked from, this website. The form currently asks for your name, email address, primary purpose, a free-text description of your request, and a verification response. If you submit the form, the information is entered into Jotform's service and made available to the form owner according to the form and account configuration.</p>
          <p>Please provide only information needed for your enquiry. Do not include patient details, health information, or other sensitive personal information in the free-text field.</p>
          <p>Jotform publishes its own <a href="https://www.jotform.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gold">Privacy Policy</a>. Review it before submitting information through the form. Kazira's Jotform account access, integrations, retention settings, deletion process, and selected data region are still being verified.</p>
        </section>
        <section>
          <h2 className="text-2xl font-serif text-black mt-8 mb-4">3. How enquiry information is used</h2>
          <p>Information submitted through the enquiry form is intended to let Kazira review and respond to the request and continue the related business communication. Do not use the form to send information that is not necessary for that purpose.</p>
        </section>
        <section>
          <h2 className="text-2xl font-serif text-black mt-8 mb-4">4. Website and external services</h2>
          <p>This website is configured for hosting on Vercel and loads fonts from Google Fonts. Those providers may receive technical information when your browser requests website pages or font resources. The production hosting logs, analytics settings, retention periods, and applicable provider configuration have not yet been fully verified by Kazira.</p>
          <p>Links to products and services such as KaziX, Dentside Remote, JinoX AI, Kazira Clinical Intelligence, DentMatch KE, and other external services take you to separate websites. Their collection and use of information is governed by the relevant service's own notices and settings, not by this website notice.</p>
        </section>
        <section>
          <h2 className="text-2xl font-serif text-black mt-8 mb-4">5. Retention and deletion</h2>
          <p>Kazira has not yet confirmed the retention period, deletion workflow, backups, or storage region configured for the Jotform enquiry form. We will update this notice when those settings have been checked. No specific retention period is promised in this notice.</p>
        </section>
        <section>
          <h2 className="text-2xl font-serif text-black mt-8 mb-4">6. Your privacy requests</h2>
          <p>You may have rights under applicable data-protection law to request access to, correction of, or deletion of personal information, or to raise a concern about how it is handled. The availability and scope of a right depend on the applicable law and circumstances.</p>
          <p>Kazira has supplied <a href="mailto:support@kazira.io" className="text-black underline hover:text-gold">support@kazira.io</a> as a provisional privacy contact. The mailbox has not yet been confirmed as active and monitored, so do not rely on it as an operational privacy-request channel until Kazira confirms it.</p>
        </section>
        <section>
          <h2 className="text-2xl font-serif text-black mt-8 mb-4">7. Security</h2>
          <p>Please do not submit sensitive information through the enquiry form. No method of sending information over the internet can be guaranteed to be completely secure. Kazira is still verifying the provider-side access controls and security configuration relevant to this website.</p>
        </section>
        <section>
          <h2 className="text-2xl font-serif text-black mt-8 mb-4">8. Changes to this notice</h2>
          <p>This notice will be revised when Kazira confirms the remaining provider settings and operational privacy contact details. The review date above indicates when this version was prepared.</p>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
