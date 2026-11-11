import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Workflow, BarChart3, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';

const sectorContent = {
  sme: {
    eyebrow: 'For SMEs and growing businesses',
    title: 'Spend less time on admin.',
    intro: 'Kazira helps growing businesses cut repetitive admin, connect the tools they use and see how the business is performing.',
    challenge: 'As a business grows, enquiries, follow-ups, quotations, invoices, stock records and tasks end up scattered across spreadsheets, email and chat apps.',
    workflows: [
      'Capture customer enquiries and send them to the right person.',
      'Manage quotations, approvals, reminders and follow-ups.',
      'Connect the tools you already use so you stop typing the same data twice.',
      'See stock, tasks and service delivery in one place.'
    ],
    intelligence: [
      'Track enquiries, sales and how many leads become customers.',
      'Watch workload, delivery times and operating costs.',
      'Put your key numbers on a simple dashboard.',
      'Spot problems that keep coming back.'
    ],
    guardrail: 'We start by learning how you work today. We only recommend automation where it is useful, easy to maintain and fits the size of your business.'
  },
  healthcare: {
    eyebrow: 'For clinics and healthcare organisations',
    title: 'Fix the admin behind better care.',
    intro: 'Kazira helps clinics automate admin work, connect their systems and see how the clinic is performing. We design for how clinics really work.',
    challenge: 'Clinic teams often handle appointments, recalls, patient messages, records, stock and reports in separate tools. This wastes time and makes it hard for managers to see what is happening.',
    workflows: [
      'Handle appointment requests, confirmations and reminders.',
      'Support recall lists and follow-up tasks.',
      'Send admin requests and paperwork to the right staff.',
      'Keep track of stock and daily operations.'
    ],
    intelligence: [
      'Monitor appointments and how busy each service is.',
      'Review admin workload and where delays happen.',
      'Track stock levels and key performance numbers.',
      'Create reports that help with planning and improving services.'
    ],
    guardrail: 'Our tools support administration and operations only. They do not replace clinical judgement, diagnosis, prescribing or any decision made by a qualified health professional. Patient information must be handled in line with privacy, security and professional rules.'
  }
};

const SectorAutomationPage = () => {
  const { sector } = useParams();
  const content = sector === 'healthcare' ? sectorContent.healthcare : sector === 'sme' ? sectorContent.sme : null;

  if (!content) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-serif mb-4">Sector page not found</h1>
        <Link to="/automate" className="text-sm underline underline-offset-4">Return to KarizaX</Link>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <section className="py-20 md:py-28 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"><div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]" /></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/automate" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black/50 hover:text-gold mb-10"><ArrowLeft className="w-4 h-4" /> Kazira Systems & Intelligence</Link>
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold">{content.eyebrow}</span>
            <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-tight mt-5 mb-7">{content.title}</h1>
            <p className="text-xl text-black/60 font-light leading-relaxed max-w-3xl mb-9">{content.intro}</p>
            <a href="https://form.jotform.com/260052273727050" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="gold">Discuss your organisation <ArrowRight className="inline w-4 h-4 ml-2" /></Button></a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gold">The problem</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">Understand the work before automating it.</h2>
            <p className="text-lg text-black/60 font-light leading-relaxed">{content.challenge}</p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <h3 className="font-serif text-2xl mb-5">A practical starting point</h3>
            <p className="text-sm text-black/60 font-light leading-relaxed">{content.guardrail}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12"><span className="font-mono text-xs uppercase tracking-widest text-gold">What we can set up for you</span><h2 className="text-3xl md:text-4xl font-serif font-light mt-4">Automation and reporting that work together.</h2></div>
          <div className="grid md:grid-cols-2 gap-7">
            <article className="bg-white border border-gray-100 rounded-2xl p-8">
              <Workflow className="w-8 h-8 text-gold mb-6" />
              <h3 className="text-2xl font-serif mb-5">Workflow automation</h3>
              <ul className="space-y-3">{content.workflows.map(item => <li key={item} className="flex gap-3 text-sm text-black/65 font-light leading-relaxed"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />{item}</li>)}</ul>
            </article>
            <article className="bg-white border border-gray-100 rounded-2xl p-8">
              <BarChart3 className="w-8 h-8 text-gold mb-6" />
              <h3 className="text-2xl font-serif mb-5">Dashboards and reports</h3>
              <ul className="space-y-3">{content.intelligence.map(item => <li key={item} className="flex gap-3 text-sm text-black/65 font-light leading-relaxed"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-gold">Start with one workflow</span>
          <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">Tell us where work gets stuck.</h2>
          <p className="text-white/60 font-light leading-relaxed mb-9">We will review the process with you, decide what should change and plan a sensible first project.</p>
          <a href="https://form.jotform.com/260052273727050" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="gold">Start a conversation <ArrowRight className="inline w-4 h-4 ml-2" /></Button></a>
        </div>
      </section>
    </div>
  );
};

export default SectorAutomationPage;
