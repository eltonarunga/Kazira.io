
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Star, ArrowRight, Lightbulb, Settings, ClipboardCheck, ExternalLink } from 'lucide-react';
import Button from '../components/common/Button';
import JotformModal from '../components/common/JotformModal';
import { JOTFORM_UPDATES_URL, KAARB_URL } from '../constants';

const LandingPage = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
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
    <div className="bg-white text-black min-h-screen font-sans selection:bg-gold selection:text-black">
      
      {/* Hero Banner */}
      <section id="hero" className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gray-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 mb-8"
            >
              <span className="h-px w-8 bg-gold"></span>
              <span className="font-mono text-gold text-xs uppercase tracking-widest">The Future of Intelligence</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 font-light tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Make Your Operations <br/>
              <span className="italic text-black/70">Work Smarter.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-black/60 mb-12 max-w-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Business intelligence, performance analysis and AI-enabled workflow strategy for clinics, healthcare organizations and growing businesses.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <Button 
                size="lg" 
                variant="gold"
                onClick={() => setIsUpdateModalOpen(true)}
              >
                Get Updates
              </Button>
              <a href={KAARB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-3 text-sm font-mono uppercase tracking-widest text-black/70 transition-colors hover:text-black">
                Explore the K-AARB benchmark <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Consultation & Strategy Section */}
      <section id="consultation" className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <span className="h-px w-8 bg-gold"></span>
              <span className="font-mono text-gold text-xs uppercase tracking-widest">Expert Guidance</span>
              <span className="h-px w-8 bg-gold"></span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-light mb-6"
            >
              NanostrategyKE
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-black/60 font-light"
            >
              A new solution by Kazira.io for consultancy. Navigate the complexities of artificial intelligence with our expert consultants. We help you identify opportunities, mitigate risks, and implement AI solutions that drive real business value.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 border border-gray-100 bg-gray-50/50 rounded-2xl hover:border-gold/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-4">Custom AI Solutions</h3>
              <p className="text-black/60 font-light leading-relaxed">
                Tailored artificial intelligence models and applications designed specifically for your unique business challenges and data ecosystem.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 border border-gray-100 bg-gray-50/50 rounded-2xl hover:border-gold/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-4">Workflow Automation</h3>
              <p className="text-black/60 font-light leading-relaxed">
                Streamline operations by integrating intelligent automation into your existing processes, reducing manual effort and increasing efficiency.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 border border-gray-100 bg-gray-50/50 rounded-2xl hover:border-gold/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-4">AI Readiness Assessments</h3>
              <p className="text-black/60 font-light leading-relaxed">
                Comprehensive evaluation of your organization's data infrastructure, team capabilities, and operational readiness for AI adoption.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="gold"
              onClick={() => setIsConsultationModalOpen(true)}
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </section>

      <JotformModal 
        isOpen={isUpdateModalOpen} 
        onClose={() => setIsUpdateModalOpen(false)} 
        title="Get Updates"
        subtitle="Stay informed about new benchmark releases, tools, and updates from Kazira.io."
      />

      <JotformModal 
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
        title="Request Consultation"
        subtitle="Connect with our team to discuss custom AI strategy, workflow automation, and enterprise deployment."
      />

    </div>
  );
};

export default LandingPage;
