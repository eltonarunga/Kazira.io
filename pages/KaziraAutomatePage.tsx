import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Workflow, BarChart3, Stethoscope, Building2, MessagesSquare } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const KaziraAutomatePage = () => {
  const deliverables = [
    { icon: Workflow, title: 'AI workflow automation & systems integration', body: 'We map and improve repetitive processes, connect the software and communication tools your team already uses, and automate routine tasks such as enquiry handling, approvals, reminders, document movement and follow-up. Each workflow is designed with clear permissions and human review where needed.' },
    { icon: BarChart3, title: 'Business intelligence & performance dashboards', body: 'We organise operational data into useful dashboards, reports and performance indicators. Leaders gain a clearer view of sales, service delivery, workload, costs and operational bottlenecks so they can act on evidence rather than guesswork.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white text-black py-20 md:py-32 relative overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 opacity-20"><div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]" /></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold border border-gold/20 font-mono text-xs uppercase tracking-widest mb-6">Kazira Systems & Intelligence</span>
              <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6 text-black">Intelligent systems for better-run organisations.</h1>
              <p className="text-xl md:text-2xl text-black/55 mb-10 font-light leading-relaxed">We help SMEs and healthcare organisations connect their systems, automate routine work and turn operational information into decisions and measurable improvements.</p>
              <a href="https://form.jotform.com/260052273727050" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="gold" className="w-full sm:w-auto text-lg px-8 py-4">Discuss your workflow <ArrowRight className="ml-2 w-5 h-5 inline" /></Button></a>
              <p className="text-xs text-black/40 mt-5">We assess the process first, then recommend the right level of automation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-gold text-xs uppercase tracking-widest">Our capabilities</span>
            <h2 className="text-3xl md:text-4xl font-serif text-black mt-4 mb-6">Integrated systems. Clear business outcomes.</h2>
            <p className="text-lg text-black/55 font-light">Our delivery is concentrated on integrated capabilities: improving how work moves through your organisation and improving how you understand its performance.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {deliverables.map(({ icon: Icon, title, body }) => <Card key={title} className="p-8 md:p-10"><div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-7 border border-gold/20"><Icon className="w-7 h-7 text-gold" /></div><h3 className="text-2xl font-serif text-black mb-4">{title}</h3><p className="text-black/55 font-light leading-relaxed">{body}</p></Card>)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14"><span className="font-mono text-gold text-xs uppercase tracking-widest">Sector applications</span><h2 className="text-3xl md:text-4xl font-serif mt-4 mb-5">Built around real operating environments.</h2><p className="text-lg text-black/55 font-light">Choose your operating environment to explore relevant workflows and outcomes.</p></div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/automate/sme" className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"><Card className="p-8 md:p-10 h-full transition-colors group-hover:border-gold/50"><Building2 className="w-8 h-8 text-gold mb-6" /><h3 className="text-2xl font-serif mb-4">SMEs and growing businesses</h3><p className="text-black/55 font-light leading-relaxed mb-5">Explore lead capture, customer workflows, quotations, invoicing administration, task routing, inventory visibility and management reporting.</p><span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold">Explore SME solutions <ArrowRight className="w-4 h-4" /></span></Card></Link>
            <Link to="/automate/healthcare" className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"><Card className="p-8 md:p-10 h-full transition-colors group-hover:border-gold/50"><Stethoscope className="w-8 h-8 text-gold mb-6" /><h3 className="text-2xl font-serif mb-4">Clinics and healthcare organisations</h3><p className="text-black/55 font-light leading-relaxed mb-5">Explore appointment and recall coordination, patient communication, administrative documentation, stock monitoring and service reporting.</p><span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold">Explore healthcare solutions <ArrowRight className="w-4 h-4" /></span></Card></Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14"><span className="font-mono text-gold text-xs uppercase tracking-widest">How we deliver</span><h2 className="text-3xl md:text-4xl font-serif mt-4 mb-5">Start small. Prove value. Scale responsibly.</h2></div>
          <div className="grid md:grid-cols-4 gap-8">
            {[['01','Discover','Understand the current process, systems, pain points and desired outcomes.'],['02','Design','Map the improved workflow, data requirements, integrations and safeguards.'],['03','Implement','Configure and test the solution with the people who will use it.'],['04','Improve','Measure adoption and results, resolve issues and expand where value is demonstrated.']].map(([number,title,body]) => <div key={number} className="border-t border-gold pt-5"><span className="font-mono text-gold text-sm">{number}</span><h3 className="text-xl font-serif mt-3 mb-2">{title}</h3><p className="text-sm text-black/55 font-light leading-relaxed">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessagesSquare className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Bring us one process that needs to work better.</h2>
          <p className="text-lg text-white/60 font-light mb-10 max-w-2xl mx-auto">We will help you assess the opportunity and identify a practical first automation project.</p>
          <a href="https://form.jotform.com/260052273727050" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="gold" className="px-8 py-4 text-lg">Start a conversation</Button></a>
        </div>
      </section>
    </div>
  );
};

export default KaziraAutomatePage;
