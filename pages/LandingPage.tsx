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
    { icon: Workflow, title: 'AI systems & workflow automation', body: 'KarizaX is the core platform direction for connecting business systems, coordinating AI agents and orchestrating authorised workflows. Capabilities are developed and deployed according to validated customer needs.' },
    { icon: BarChart3, title: 'Business & domain intelligence', body: 'Turn operational information into dashboards, reports and actionable insights. Healthcare is the initial domain, with clinical intelligence developed under appropriate validation and governance.' },
    { icon: Database, title: 'Data & AI research', body: 'Develop reliable data pipelines, domain knowledge, model evaluation and research capabilities that improve the quality and usefulness of intelligent systems.' },
  ];

  const sectors = [
    { icon: Stethoscope, title: 'Healthcare — initial focus', body: 'Start with clinic business intelligence and administrative workflows: appointment coordination, recalls, reporting, revenue visibility and stock monitoring. Clinical judgement remains with qualified professionals.' },
    { icon: Building2, title: 'Professional services & SMEs', body: 'Extend validated capabilities into consulting, accounting, legal, retail, logistics and other organisations with recurring needs for connected workflows and operational insight.' },
  ];

  const ventures = [
    { name: 'KaziX', category: 'Blue-collar skilled labour marketplace', description: 'A marketplace connecting customers and organisations with skilled workers.', href: 'https://kazixfrontend.vercel.app/', status: 'Marketplace' },
    { name: 'Dentside Remote', category: 'Remote dental care', description: 'A dental remote-care product connecting patients and dental professionals through remote support and consultation.', href: 'https://dentside-remote.onrender.com/', status: 'Product' },
    { name: 'JinoX AI', category: 'Healthcare AI', description: 'A healthcare AI product initiative within the wider Kazira venture portfolio.', href: 'https://jino-x.vercel.app/', status: 'Product initiative' },
    { name: 'DentMatch KE', category: 'Dental talent marketplace', description: 'A specialised talent marketplace concept for connecting dental professionals and opportunities.', href: null, status: 'Venture initiative' },
  ];

  const deliverySteps = [
    ['01', 'Diagnose', 'Understand the organisation, its processes, systems, data and intended outcomes.'],
    ['02', 'Design', 'Define the right intelligence, workflow, integration and governance requirements.'],
    ['03', 'Implement', 'Deploy a proportionate solution with clear permissions and appropriate human review.'],
    ['04', 'Measure', 'Track adoption, reliability and business outcomes before expanding the scope.'],
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
              <span className="font-mono text-gold text-xs uppercase tracking-widest">AI infrastructure · Intelligence · Venture building</span>
            </motion.div>
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.08] mb-8 font-light tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              Intelligence.<br /><span className="italic text-black/70">Infrastructure. Innovation.</span>
            </motion.h1>
            <motion.p className="text-lg sm:text-xl text-black/60 mb-10 max-w-3xl font-light leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              Kazira builds intelligent systems, domain-specific applications and automation technologies that help businesses understand their operations, make better decisions and improve how work gets done. We are building from Kenya, with healthcare as our initial commercial focus.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Talk to Kazira</Button>
              <a href="#systems-intelligence" className="inline-flex items-center gap-2 py-3 text-sm font-mono uppercase tracking-widest text-black/70 hover:text-black">Explore the ecosystem <ArrowRight className="h-4 w-4" /></a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="systems-intelligence" className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-gold text-xs uppercase tracking-widest">01 · Systems & intelligence</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">KarizaX: the technology foundation.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">KarizaX is Kazira's core AI workflow automation and intelligence system. It brings together orchestration, integrations, data, AI models and domain-specific capabilities. The platform is developed progressively; we distinguish the long-term architecture from capabilities currently available in customer deployments.</p>
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
            <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Discuss an AI systems project</Button>
            <Link to="/automate" className="inline-flex items-center gap-2 py-3 text-sm font-mono uppercase tracking-widest text-black/70 hover:text-gold">Explore capabilities <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-gold text-xs uppercase tracking-widest">Market entry strategy</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">Start with healthcare. Build for wider application.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">Kazira will establish a focused healthcare offer, learn from real operating environments and reuse proven infrastructure as it expands into other sectors.</p>
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
              <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">NanoStrategyKE, within Kazira Advisory.</h2>
              <p className="text-lg text-black/60 font-light leading-relaxed mb-6">Kazira Advisory helps organisations understand performance, identify operational constraints and make sound decisions about AI, technology and transformation.</p>
              <div className="space-y-5 mb-8">
                <div className="flex gap-4"><BarChart3 className="w-6 h-6 text-gold shrink-0 mt-1" /><div><h3 className="font-serif text-xl mb-1">Business performance diagnostics & intelligence</h3><p className="text-sm text-black/55 font-light leading-relaxed">Assess operations, interpret available data and identify the constraints and opportunities that matter most.</p></div></div>
                <div className="flex gap-4"><Compass className="w-6 h-6 text-gold shrink-0 mt-1" /><div><h3 className="font-serif text-xl mb-1">AI & digital transformation strategy</h3><p className="text-sm text-black/55 font-light leading-relaxed">Evaluate readiness, prioritise use cases and develop practical adoption roadmaps with governance and implementation priorities.</p></div></div>
              </div>
              <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Request advisory support</Button>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10">
              <div className="font-mono text-xs uppercase tracking-widest text-gold mb-5">Consulting-to-product approach</div>
              <div className="space-y-6">
                {[
                  ['Understand', 'Review the operating model, workflows, data and priorities.'],
                  ['Diagnose', 'Identify bottlenecks, risks and opportunities for improvement.'],
                  ['Implement', 'Support practical changes through strategy, systems and automation.'],
                  ['Productise', 'Turn repeatable, validated solutions into scalable products.'],
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
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">Specialised products. Practical capabilities.</h2>
            <p className="text-lg text-white/65 font-light leading-relaxed">Kazira Ventures develops focused products and marketplaces. Kazira Learn builds practical AI, data and digital capabilities through training and education.</p>
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
              <h3 className="text-3xl font-serif mb-4">Build practical AI and digital capabilities.</h3>
              <p className="text-white/60 font-light leading-relaxed">Workshops and programmes in applied AI, workflow automation, business intelligence, data skills and responsible technology adoption.</p>
            </div>
            <div className="lg:text-right">
              <a href={KAZIRA_LEARN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gold hover:text-white">Explore learning resources <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14"><span className="font-mono text-gold text-xs uppercase tracking-widest">How we work</span><h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">Understand first. Build what proves useful.</h2></div>
          <div className="grid md:grid-cols-4 gap-8">
            {deliverySteps.map(([number, title, body]) => <div key={number} className="border-t border-gold pt-5"><span className="font-mono text-gold text-sm">{number}</span><h3 className="text-xl font-serif mt-3 mb-2">{title}</h3><p className="text-sm text-black/55 font-light leading-relaxed">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section id="independent-initiatives" className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8"><span className="font-mono text-gold text-xs uppercase tracking-widest">Research & wider ecosystem</span><h2 className="text-2xl md:text-3xl font-serif mt-3 mb-4">Related initiatives</h2><p className="text-sm text-black/55 font-light leading-relaxed">These initiatives are not core Kazira service lines. K-AARB is an independent research and evaluation project.</p></div>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href={JOB_SCANNER_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">Job Disruption Scanner <ExternalLink className="w-3 h-3" /></a>
            <a href={KAARB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">K-AARB (independent) <ExternalLink className="w-3 h-3" /></a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-gold text-xs uppercase tracking-widest">Start with the problem</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">What should work better in your organisation?</h2>
          <p className="text-lg text-black/55 font-light mb-10 max-w-2xl mx-auto">Tell us where work gets stuck, what takes too much time or what you cannot currently measure. We will help identify a practical next step.</p>
          <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Start a conversation</Button>
        </div>
      </section>

      <JotformModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} title="Talk to Kazira" subtitle="Tell us about your organisation, operational challenges and the systems or workflows you would like to improve." />
    </div>
  );
};

export default LandingPage;
