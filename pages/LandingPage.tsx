import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight, Workflow, BarChart3, GraduationCap, Stethoscope, Building2,
  Compass, Database, ExternalLink
} from 'lucide-react';
import Button from '../components/common/Button';
import JotformModal from '../components/common/JotformModal';
import { KAARB_URL, KAZIRA_LEARN_URL, JOB_SCANNER_URL } from '../constants';

const LandingPage = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  const solutionDeliverables = [
    { icon: Workflow, title: 'AI workflow automation & systems integration', body: 'We redesign repetitive business processes and connect the tools teams already use. From customer enquiries and approvals to administration and follow-up, we build reliable workflows with appropriate human oversight.' },
    { icon: BarChart3, title: 'Business intelligence & performance dashboards', body: 'We turn fragmented operational data into clear dashboards and management reports, helping leaders track performance, identify bottlenecks and make evidence-informed decisions.' },
  ];

  const sectors = [
    { icon: Building2, title: 'SMEs and growing businesses', body: 'Improve lead handling, customer communication, sales administration, invoicing workflows, task coordination, inventory visibility and management reporting.' },
    { icon: Stethoscope, title: 'Healthcare organisations', body: 'Support clinic administration, appointment and recall workflows, patient communication, service performance reporting, stock visibility and operational coordination. Clinical decisions remain with qualified professionals.' },
  ];

  const ecosystem = [
    { name: 'KaziX', category: 'Blue-collar skills marketplace', description: 'A marketplace connecting customers and organisations with skilled blue-collar workers.', href: 'https://kazixfrontend.vercel.app/' },
    { name: 'DentSide Remote', category: 'Healthcare solution', description: 'A remote-support initiative focused on extending access to dental and oral-health expertise.', href: 'https://dentside-remote.onrender.com/' },
    { name: 'JinoX AI', category: 'AI tool', description: 'An AI-focused product in the wider Kazira ecosystem.', href: 'https://jino-x.vercel.app/' },
    { name: 'Job Disruption Scanner', category: 'Research tool', description: 'Explore how AI and automation may affect roles, tasks and skills, and where workforce adaptation may be needed.', href: JOB_SCANNER_URL },
    { name: 'K-AARB', category: 'Independent benchmark', description: 'The Kenya AI Alignment & Reasoning Benchmark evaluates model reasoning and reliability on Kenya-relevant tasks. It is an independent project, not a Kazira service line.', href: KAARB_URL },
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
              <span className="font-mono text-gold text-xs uppercase tracking-widest">AI workflow automation · Business systems · Practical skills</span>
            </motion.div>
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.08] mb-8 font-light tracking-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              Better systems.<br /><span className="italic text-black/70">Smarter work.</span>
            </motion.h1>
            <motion.p className="text-lg sm:text-xl text-black/60 mb-10 max-w-3xl font-light leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              Kazira helps SMEs and healthcare organisations simplify operations with AI-enabled workflow automation, connected business systems and actionable intelligence. We also advise organisations on their transformation journey and equip people with the skills to work confidently with AI.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Discuss a workflow</Button>
              <a href="#solutions" className="inline-flex items-center gap-2 py-3 text-sm font-mono uppercase tracking-widest text-black/70 hover:text-black">Explore our solutions <ArrowRight className="h-4 w-4" /></a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-gold text-xs uppercase tracking-widest">What we do</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">Two focused solutions. Measurable operational value.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">Kazira Solutions concentrates on two high-value outcomes: making everyday work flow more efficiently, and giving leaders better visibility into business performance.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutionDeliverables.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-7 border border-gray-100 bg-gray-50/50 rounded-2xl">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold"><Icon className="w-6 h-6" /></div>
                <h3 className="text-xl font-serif mb-3">{title}</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-gold text-xs uppercase tracking-widest">Who we work with</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">Solutions shaped around your sector.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">Different organisations have different constraints. Our approach is tailored to the workflows, teams, systems and responsibilities of each environment.</p>
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
              <span className="font-mono text-gold text-xs uppercase tracking-widest">02 · Consultancy arm</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">Kazira Advisory</h2>
              <p className="text-lg text-black/60 font-light leading-relaxed mb-6">Through Kazira Advisory, including NanoStrategyKE, we help leaders understand organisational performance and make sound decisions about technology, AI and transformation. Our work is focused on two advisory outcomes.</p>
              <div className="space-y-5 mb-8">
                <div className="flex gap-4"><BarChart3 className="w-6 h-6 text-gold shrink-0 mt-1" /><div><h3 className="font-serif text-xl mb-1">Business performance diagnostics & intelligence</h3><p className="text-sm text-black/55 font-light leading-relaxed">Assess operations, interpret performance data and identify the constraints, opportunities and priorities that matter most to the organisation.</p></div></div>
                <div className="flex gap-4"><Compass className="w-6 h-6 text-gold shrink-0 mt-1" /><div><h3 className="font-serif text-xl mb-1">AI & digital transformation strategy</h3><p className="text-sm text-black/55 font-light leading-relaxed">Evaluate AI opportunities and readiness, prioritise use cases, and develop practical adoption roadmaps with governance and implementation priorities.</p></div></div>
              </div>
              <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Request advisory support</Button>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10">
              <div className="font-mono text-xs uppercase tracking-widest text-gold mb-5">Our approach</div>
              <div className="space-y-6">
                {[
                  ['Understand', 'Review the current operating model, workflows, data and business priorities.'],
                  ['Identify', 'Find bottlenecks, duplicated effort, risks and opportunities for improvement.'],
                  ['Design', 'Develop a practical roadmap with clear priorities, ownership and success measures.'],
                  ['Implement', 'Support delivery through automation, systems integration, training and ongoing review.'],
                ].map(([title, body], index) => <div key={title} className="flex gap-4"><span className="font-mono text-gold text-sm">0{index + 1}</span><div><h3 className="font-serif text-xl mb-1">{title}</h3><p className="text-sm text-black/55 font-light leading-relaxed">{body}</p></div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="academy" className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold">03 · Learning and skills arm</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">Kazira Academy</h2>
              <p className="text-lg text-white/65 font-light leading-relaxed mb-6">Kazira Academy helps individuals and organisations build practical capabilities for an AI-enabled workplace. We focus on applied learning that can be used immediately in professional and business settings.</p>
              <p className="text-white/55 font-light leading-relaxed mb-8">Our two learning offers combine practical AI use with the data and digital skills needed to work productively and confidently.</p>
              <a href={KAZIRA_LEARN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gold hover:text-white">Explore learning resources <ArrowRight className="w-4 h-4" /></a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, title: 'Applied AI & automation training', body: 'Hands-on training in practical AI tools, prompt and workflow design, no-code automation and responsible use for real work tasks.' },
                { icon: Database, title: 'Data & digital productivity skills', body: 'Build confidence in spreadsheets, data interpretation, digital collaboration and reporting to improve everyday workplace productivity.' },
              ].map(({ icon: Icon, title, body }) => <div key={title} className="border border-white/15 rounded-xl p-6"><Icon className="w-6 h-6 text-gold mb-4" /><h3 className="font-serif text-xl mb-2">{title}</h3><p className="text-sm text-white/55 font-light leading-relaxed">{body}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-gold text-xs uppercase tracking-widest">The wider ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">A growing portfolio of focused solutions.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">Alongside our core services, Kazira develops and connects specialised tools, platforms and research initiatives. Each addresses a distinct problem and may operate as a standalone product or partner resource.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {ecosystem.map((item) => <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="group border border-gray-100 rounded-2xl p-7 hover:border-gold/50 transition-colors"><span className="font-mono text-[10px] uppercase tracking-widest text-gold">{item.category}</span><h3 className="flex items-center gap-2 text-xl font-serif mt-3 mb-3">{item.name}<ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" /></h3><p className="text-sm text-black/60 font-light leading-relaxed">{item.description}</p></a>)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-gold text-xs uppercase tracking-widest">Start with the problem</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">What could your organisation do better?</h2>
          <p className="text-lg text-black/55 font-light mb-10 max-w-2xl mx-auto">Tell us where work gets stuck, what takes too much time or what you cannot currently measure. We will help you explore a practical next step.</p>
          <Button size="lg" variant="gold" onClick={() => setIsConsultationModalOpen(true)}>Start a conversation</Button>
        </div>
      </section>

      <JotformModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} title="Stay connected" subtitle="Receive updates on Kazira solutions, practical AI learning resources and new tools." />
      <JotformModal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} title="Talk to Kazira" subtitle="Tell us about your organisation, operational challenges and the workflows you would like to improve." />
    </div>
  );
};

export default LandingPage;
