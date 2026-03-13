
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Target, Sparkles, TrendingUp, Network, BookOpen, Zap, GraduationCap, Cpu, Search, Lightbulb } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Modal from '../components/common/Modal';

// FIX: Changed Section to a React.FC to correctly handle children prop type.
const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, children, className = "" }) => (
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

const LandingPage = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div 
        className={`bg-black text-white`}
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
              Unlock Your Potential with <span className="block md:inline text-gray-300">Kazira.io</span>
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
                onClick={() => setIsUpdateModalOpen(true)}
                className="!bg-white !text-black font-black text-lg px-8 py-4 border-4 !border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:!bg-gray-100 hover:scale-105 transition-all"
              >
                Get App Updates
              </Button>
              <Link to="/kenya-ai-exam">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black border-transparent hover:bg-gray-200"
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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What is Kazira.io?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl shadow-xl bg-gray-50 border border-gray-100 p-8 aspect-[3/2] w-full flex items-center justify-center">
              <Network className="w-32 h-32 text-gray-900" strokeWidth={1} />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Kazira.io is a revolutionary platform designed to bridge the gap between current capabilities and future demands. We leverage cutting-edge AI to deliver:
            </p>
            <ul className="list-none space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <BookOpen className="w-6 h-6 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Personalized Learning Paths:</strong> Master in-demand skills with AI-curated educational journeys.</span>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">Intelligent Automation Tools:</strong> Streamline workflows and boost productivity with smart automation solutions.</span>
              </li>
              <li className="flex items-start">
                <Network className="w-6 h-6 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-gray-900">A Community of Innovators:</strong> Connect, collaborate, and grow with like-minded individuals and experts.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Whether you're looking to upskill, reskill, or transform your business operations, Kazira.io provides the tools and insights you need to succeed in an ever-evolving world.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Kazira Learn vs Kazira Automate */}
      <Section id="solutions" className="bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Core Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Kazira Learn"
            description="Empower yourself with future-ready skills. AI-driven learning paths, interactive modules, and expert guidance to help you thrive in the new economy."
            image={
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center p-8">
                <GraduationCap className="w-24 h-24 text-gray-900" strokeWidth={1.5} />
              </div>
            }
          >
            <Link to="/learn">
              <Button variant="secondary" className="mt-4 w-full">Explore Kazira Learn</Button>
            </Link>
          </Card>
          <Card
            title="Kazira Automate"
            description="Transform your business with intelligent automation. Optimize processes, reduce manual effort, and unlock new levels of efficiency with our AI assistants."
            image={
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center p-8">
                 <Cpu className="w-24 h-24 text-gray-900" strokeWidth={1.5} />
              </div>
            }
          >
             <Link to="/automate">
              <Button variant="secondary" className="mt-4 w-full">Discover Kazira Automate</Button>
            </Link>
          </Card>
          <Card
            title="Job Disruption Scanner"
            description="Analyze how AI and automation will impact jobs in Kenya. A vital tool for career planning and policy making."
            image={
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center p-8">
                <Search className="w-24 h-24 text-gray-900" strokeWidth={1.5} />
              </div>
            }
          >
            <a href="https://opal.withgoogle.com/?flow=drive:/1g5EsPt18QZYsNAcaE1f9KgmCnWOQEvin&shared&mode=app" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="mt-4 w-full">Launch Scanner</Button>
            </a>
          </Card>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how-it-works">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">How Kazira Works</h2>
        <div className="relative grid md:grid-cols-3 gap-8 text-center">
          <div className="absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 hidden md:block border-t-2 border-dashed border-gray-300">
          </div>
          {[
            { icon: (
                <Target className="h-10 w-10" strokeWidth={1.5} />
            ), title: 'Define Your Goals', description: 'Tell us what you want to achieve, whether it’s learning a new skill or automating a business process.' },
            { icon: (
                <Lightbulb className="h-10 w-10" strokeWidth={1.5} />
            ), title: 'AI-Powered Personalization', description: 'Our intelligent engine crafts a tailored plan or solution based on your unique needs and context.' },
            { icon: (
                 <TrendingUp className="h-10 w-10" strokeWidth={1.5} />
            ), title: 'Achieve & Iterate', description: 'Engage with our platform, track your progress, and continuously optimize for better results.' },
          ].map((step, index) => (
            <motion.div 
              key={step.title}
              className="p-6 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-20 h-20 bg-white shadow-lg border rounded-full mx-auto mb-6 flex items-center justify-center text-gray-800`}>{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Join the Waitlist Form */}
      <Section id="waitlist" className="bg-black text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get early access to Kazira.io, exclusive updates, and be among the first to experience the future of AI-powered learning and automation.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setIsUpdateModalOpen(true)}
            className="!bg-white !text-black font-black text-lg px-8 py-4 border-4 !border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:!bg-gray-100 hover:scale-105 transition-all"
          >
            Get App Updates
          </Button>
        </div>
      </Section>

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
    </div>
  );
};

export default LandingPage;
