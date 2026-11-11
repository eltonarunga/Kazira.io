import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight, Workflow, BarChart3, Stethoscope, Building2, Compass,
  Database, GraduationCap, ExternalLink
} from 'lucide-react';
import Button from '../components/common/Button';
import JotformModal from '../components/common/JotformModal';
import { KAARB_URL, KAZIRA_LEARN_URL, JOB_SCANNER_URL } from '../constants';

const LandingPage = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  const platformCapabilities = [
    { icon: Workflow, title: 'Workflow automation', body: 'KarizaX is the platform we are building. It connects the tools a business already uses and automates routine tasks, with a person approving anything important. We build each feature once customers show they need it.' },
    { icon: BarChart3, title: 'Business reports and dashboards', body: 'We turn your daily records into simple dashboards and reports that show how the business is doing and where to act. We are starting with clinics.' },
    { icon: Database, title: 'Data and AI testing', body: 'We build clean data pipelines and test our AI models, so the results can be trusted.' },
  ];

  const sectors = [
    { icon: Stethoscope, title: 'Healthcare (where we start)', body: 'We help clinics with reports, appointment reminders, patient recalls, revenue tracking and stock checks. Doctors and dentists keep making all clinical decisions.' },
    { icon: Building2, title: 'Professional firms and small businesses', body: 'Later, we will bring the same tools to consultants, accountants, lawyers, shops, logistics firms and other businesses that need better records and simpler workflows.' },
  ];

  const ventures = [
    { name: 'KaziX', category: 'Skilled labour marketplace', description: 'A marketplace that connects customers and businesses with skilled workers.', href: 'https://kazixfrontend.vercel.app/', status: 'Marketplace' },
    { name: 'Dentside Remote', category: 'Remote dental care', description: 'Remote dental care that connects patients with dentists for consultations and support.', href: 'https://dentside-remote.onrender.com/', status: 'Product' },
    { name: 'JinoX AI', category: 'Healthcare AI', description: 'A healthcare AI product we are developing.', href: 'https://jino-x.vercel.app/', status: 'Product initiative' },
    { name: 'DentMatch KE', category: 'Dental jobs marketplace', description: 'A job marketplace idea that connects dentists with opportunities.', href: null, status: 'Concept stage' },
  ];

  const deliverySteps = [
    ['01', 'Diagnose', 'Learn how your organisation works: its processes, systems, data and goals.'],
    ['02', 'Design', 'Decide what to build, how it connects to your systems and who approves what.'],
    ['03', 'Implement', 'Set up a solution that fits your size, with a person reviewing important actions.'],
    ['04', 'Measure', 'Check that people use it, that it works reliably and that it helps the business, before we do more.'],
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-gold selection:text-black">
      <section id="hero" className="relative min-h-[82vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gray-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center space-x-2 mb-8">
              <span className="h-px w-8 bg-gold" />
              <span className="font-mono text-gold text-xs uppercase tracking-widest">AI tools for businesses in Kenya</span>
            </motion.div>
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.08] mb-8 font-light tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              AI tools that help<br /><span className="italic text-black/70">businesses run better.</span>
            </motion.h1>
            <motion.p className="text-lg sm:text-xl text-black/60 mb-10 max-w-3xl font-light leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              Kazira builds software that automates routine work and shows business owners how their business is doing. We are based in Kenya and are starting with healthcare.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Talk to Kazira</Button>
              <a href="#systems-intelligence" className="inline-flex items-center gap-2 py-3 text-sm font-mono uppercase tracking-widest text-black/70 hover:text-black">See what we do <ArrowRight className="h-4 w-4" /></a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="systems-intelligence" className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-gold text-xs uppercase tracking-widest">01 · Systems & intelligence</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">KarizaX: the platform behind our work.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">KarizaX is our platform for AI workflow automation and business reporting. It is still being built, and we are growing it step by step. We will only describe features that customers can use today.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {platformCapabilities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-7 border border-gray-100 bg-gray-50/50 rounded-2xl">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold"><Icon className="w-6 h-6" /></div>
                <h3 className="text-xl font-serif mb-3">{title}</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
            <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Talk about your project</Button>
            <Link to="/automate" className="inline-flex items-center gap-2 py-3 text-sm font-mono uppercase tracking-widest text-black/70 hover:text-gold">See what we offer <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-gold text-xs uppercase tracking-widest">Where we start</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">We start with healthcare, then grow from there.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">We are building one focused offer for clinics first. What we learn there will help us serve other businesses later.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10">
                <Icon className="w-8 h-8 text-gold mb-6" />
                <h3 className="text-2xl font-serif mb-4">{title}</h3>
                <p className="text-black/60 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advisory" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-mono text-gold text-xs uppercase tracking-widest">02 · Advisory</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">NanoStrategyKE: advice on AI and operations.</h2>
              <p className="text-lg text-black/60 font-light leading-relaxed mb-6">Kazira Advisory helps organisations find what is slowing them down and decide how AI and technology can help.</p>
              <div className="space-y-5 mb-8">
                <div className="flex gap-4"><BarChart3 className="w-6 h-6 text-gold shrink-0 mt-1" /><div><h3 className="font-serif text-xl mb-1">Business review</h3><p className="text-sm text-black/55 font-light leading-relaxed">We look at how your operations run, study your data and show you what is holding you back and where the chances are.</p></div></div>
                <div className="flex gap-4"><Compass className="w-6 h-6 text-gold shrink-0 mt-1" /><div><h3 className="font-serif text-xl mb-1">AI and technology plan</h3><p className="text-sm text-black/55 font-light leading-relaxed">We check if you are ready for AI, pick the best uses for it and give you a clear plan to follow.</p></div></div>
              </div>
              <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Ask for advice</Button>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10">
              <div className="font-mono text-xs uppercase tracking-widest text-gold mb-5">How advice becomes software</div>
              <div className="space-y-6">
                {[
                  ['Understand', 'Learn how your business runs: its workflows, data and priorities.'],
                  ['Diagnose', 'Find the delays, risks and chances to improve.'],
                  ['Implement', 'Help you make the changes, using strategy, software and automation.'],
                  ['Build', 'Turn solutions that keep working into products other businesses can use.'],
                ].map(([title, body], index) => <div key={title} className="flex gap-4"><span className="font-mono text-gold text-sm">0{index + 1}</span><div><h3 className="font-serif text-xl mb-1">{title}</h3><p className="text-sm text-black/55 font-light leading-relaxed">{body}</p></div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ventures-learn" className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">03 · Ventures & learn</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">Our products and training.</h2>
            <p className="text-lg text-white/65 font-light leading-relaxed">Kazira Ventures builds focused products and marketplaces. Kazira Learn teaches practical AI and data skills.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {ventures.map((item) => (
              <article key={item.name} className="border border-white/15 rounded-2xl p-7">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold">{item.category}</span>
                <h3 className="text-xl font-serif mt-3 mb-3">{item.name}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-5">{item.description}</p>
                {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold hover:text-white">Visit product <ExternalLink className="w-3 h-3" /></a> : <span className="text-xs font-mono uppercase tracking-widest text-white/40">{item.status}</span>}
              </article>
            ))}
          </div>
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center border-t border-white/15 pt-12">
            <div>
              <div className="flex items-center gap-3 mb-4"><GraduationCap className="w-7 h-7 text-gold" /><span className="font-mono text-xs uppercase tracking-widest text-gold">Kazira Learn</span></div>
              <h3 className="text-3xl font-serif mb-4">Learn practical AI skills.</h3>
              <p className="text-white/60 font-light leading-relaxed">Workshops and courses on using AI, automating workflows, reading business data and adopting new technology responsibly.</p>
            </div>
            <div className="lg:text-right">
              <a href={KAZIRA_LEARN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gold hover:text-white">See learning resources <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14"><span className="font-mono text-gold text-xs uppercase tracking-widest">How we work</span><h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">We learn your business first, then build.</h2></div>
          <div className="grid md:grid-cols-4 gap-8">
            {deliverySteps.map(([number, title, body]) => <div key={number} className="border-t border-gold pt-5"><span className="font-mono text-gold text-sm">{number}</span><h3 className="text-xl font-serif mt-3 mb-2">{title}</h3><p className="text-sm text-black/55 font-light leading-relaxed">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="independent-initiatives" className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8"><span className="font-mono text-gold text-xs uppercase tracking-widest">Other projects</span><h2 className="text-2xl md:text-3xl font-serif mt-3 mb-4">Related projects</h2><p className="text-sm text-black/55 font-light leading-relaxed">These are not core Kazira services. K-AARB is an independent research project that evaluates AI models.</p></div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href={JOB_SCANNER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">Job Disruption Scanner <ExternalLink className="w-3 h-3" /></a>
            <a href={KAARB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">K-AARB (independent) <ExternalLink className="w-3 h-3" /></a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-gold text-xs uppercase tracking-widest">Get started</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">What would you like to work better?</h2>
          <p className="text-lg text-black/55 font-light mb-10 max-w-2xl mx-auto">Tell us where work gets stuck, what takes too long or what you cannot measure. We will suggest a practical next step.</p>
          <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Start a conversation</Button>
        </div>
      </section>

      <JotformModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} title="Talk to Kazira" subtitle="Tell us about your organisation, the problems you face and the workflows you want to improve." />
    </div>
  );
};

export default LandingPage;
