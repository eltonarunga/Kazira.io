
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Modal from '../components/common/Modal';

const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className = "" }) => (
  <motion.section 
    id={id} 
    className={`py-16 md:py-24 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </motion.section>
);

const LandingPage: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist email submitted:', waitlistEmail); // Mock submission
    setWaitlistSubmitted(true);
    // In a real app, you'd send this to a backend/Firebase.
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        className={`bg-gray-900 text-white`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Section id="hero" className="min-h-[70vh] flex items-center text-center !py-20 md:!py-32">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Unlock Your Potential with <span className="block md:inline">Kazira.io</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              AI-Powered Automation and Future-Skills Learning, Tailored For You.
            </motion.p>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsWaitlistModalOpen(true)}
                className="border-white text-white hover:bg-white hover:text-gray-800"
              >
                Get Early Access
              </Button>
              <Link to="/kenya-ai-exam">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-800"
                >
                  Kenya's Final AI Exam
                </Button>
              </Link>
            </motion.div>
          </div>
        </Section>
      </motion.div>

      {/* What is Kazira.io? */}
      <Section id="what-is-kazira">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">What is Kazira.io?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-lg shadow-xl bg-gray-100 p-8 aspect-[3/2] w-full flex items-center justify-center">
              <svg className="w-full h-full text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2.5"></circle>
                  <circle cx="5" cy="5" r="2"></circle>
                  <circle cx="19" cy="5" r="2"></circle>
                  <circle cx="5" cy="19" r="2"></circle>
                  <circle cx="19" cy="19" r="2"></circle>
                  <path d="M12 14.5v3"></path>
                  <path d="M10.2 11.2l-3.4-3.4"></path>
                  <path d="M13.8 11.2l3.4-3.4"></path>
                  <path d="M10.2 12.8l-3.4 3.4"></path>
                  <path d="M13.8 12.8l3.4 3.4"></path>
                  <path d="M6.8 5h10.4"></path>
                  <path d="M5 6.8v10.4"></path>
                  <path d="M19 6.8v10.4"></path>
                  <path d="M6.8 19h10.4"></path>
              </svg>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              Kazira.io is a revolutionary platform designed to bridge the gap between current capabilities and future demands. We leverage cutting-edge AI to deliver:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
              <li><span className={`font-semibold text-gray-800`}>Personalized Learning Paths:</span> Master in-demand skills with AI-curated educational journeys.</li>
              <li><span className={`font-semibold text-gray-800`}>Intelligent Automation Tools:</span> Streamline workflows and boost productivity with smart automation solutions.</li>
              <li><span className={`font-semibold text-gray-800`}>A Community of Innovators:</span> Connect, collaborate, and grow with like-minded individuals and experts.</li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              Whether you're looking to upskill, reskill, or transform your business operations, Kazira.io provides the tools and insights you need to succeed in an ever-evolving world.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Kazira Learn vs Kazira Automate */}
      <Section id="solutions" className="bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Core Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Kazira Learn"
            description="Empower yourself with future-ready skills. AI-driven learning paths, interactive modules, and expert guidance to help you thrive in the new economy."
            image={
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center p-8">
                <svg className="w-full h-full text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"></path>
                </svg>
              </div>
            }
          >
            <Link to="/learn">
              <Button variant="outline" className="mt-4 w-full">Explore Kazira Learn</Button>
            </Link>
          </Card>
          <Card
            title="Kazira Automate"
            description="Transform your business with intelligent automation. Optimize processes, reduce manual effort, and unlock new levels of efficiency with our AI assistants."
            image={
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center p-8">
                 <svg className="w-full h-full text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <rect x="9" y="9" width="6" height="6"></rect>
                    <line x1="9" y1="1" x2="9" y2="4"></line>
                    <line x1="15" y1="1" x2="15" y2="4"></line>
                    <line x1="9" y1="20" x2="9" y2="23"></line>
                    <line x1="15" y1="20" x2="15" y2="23"></line>
                    <line x1="20" y1="9" x2="23" y2="9"></line>
                    <line x1="20" y1="14" x2="23" y2="14"></line>
                    <line x1="1" y1="9" x2="4" y2="9"></line>
                    <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
            }
          >
             <Link to="/automate">
              <Button variant="outline" className="mt-4 w-full">Discover Kazira Automate</Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how-it-works">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">How Kazira Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '🎯', title: 'Define Your Goals', description: 'Tell us what you want to achieve, whether it’s learning a new skill or automating a business process.' },
            { icon: '🧠', title: 'AI-Powered Personalization', description: 'Our intelligent engine crafts a tailored plan or solution based on your unique needs and context.' },
            { icon: '🚀', title: 'Achieve & Iterate', description: 'Engage with our platform, track your progress, and continuously optimize for better results.' },
          ].map((step, index) => (
            <motion.div 
              key={step.title}
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`text-5xl mb-4`}>{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Join the Waitlist Form */}
      <Section id="waitlist" className="bg-gray-800 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join our waitlist to get early access to Kazira.io, exclusive updates, and be among the first to experience the future of AI-powered learning and automation.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => setIsWaitlistModalOpen(true)}
            className="border-white text-white hover:bg-white hover:text-gray-800"
          >
            Join the Waitlist Now
          </Button>
        </div>
      </Section>

      <Modal isOpen={isWaitlistModalOpen} onClose={() => { setIsWaitlistModalOpen(false); setWaitlistSubmitted(false); setWaitlistEmail(''); }} title="Join Our Waitlist">
        {waitlistSubmitted ? (
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-16 w-16 text-green-500 mx-auto mb-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600">You've been added to our waitlist. We'll be in touch soon!</p>
            <Button onClick={() => { setIsWaitlistModalOpen(false); setWaitlistSubmitted(false); setWaitlistEmail(''); }} className="mt-6 w-full">Close</Button>
          </div>
        ) : (
          <form onSubmit={handleWaitlistSubmit}>
            <p className="text-gray-600 mb-4">Be the first to know when Kazira.io launches. Enter your email below.</p>
            <input
              type="email"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none mb-4"
            />
            <Button type="submit" className="w-full">
              Sign Me Up!
            </Button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default LandingPage;
