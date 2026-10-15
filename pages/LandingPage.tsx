import React from 'react';
import { ArrowUpRight, Compass, Layers3, Workflow, Code2, ShieldCheck, Globe2, ArrowRight } from 'lucide-react';

const ventures = [
  {
    number: '01',
    name: 'NanoStrategyKE',
    category: 'Strategy & advisory',
    description: 'Technology strategy, AI readiness, and practical guidance for organisations navigating digital change.',
    href: 'https://x.com/nanostrategyke',
    label: 'Explore advisory',
    icon: Compass,
  },
  {
    number: '02',
    name: 'Digital products',
    category: 'Product ecosystem',
    description: 'A growing portfolio of digital products and experiments built around useful, real-world problems.',
    href: 'https://kazixfrontend.vercel.app/',
    label: 'Explore KaziX',
    icon: Layers3,
  },
  {
    number: '03',
    name: 'Automation & systems',
    category: 'Operations',
    description: 'Helping teams identify repeatable processes, improve workflows, and build more effective digital operations.',
    href: 'https://kazira-io-clinical-intelligence-mvp.vercel.app/',
    label: 'View a product',
    icon: Workflow,
  },
];

const principles = [
  { icon: Compass, title: 'Strategy before tools', text: 'Start with the business problem, then choose the technology that makes sense.' },
  { icon: Code2, title: 'Useful by design', text: 'Build clear, focused digital experiences around real user and operational needs.' },
  { icon: ShieldCheck, title: 'Responsible implementation', text: 'Consider security, privacy, maintainability, and long-term ownership from the start.' },
];

const LandingPage: React.FC = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="overflow-hidden bg-white text-neutral-950">
      <section className="relative border-b border-neutral-200">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-8rem] top-[-7rem] h-[28rem] w-[28rem] rounded-full bg-amber-100/70 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-[18%] h-[20rem] w-[20rem] rounded-full bg-neutral-100 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.24] [background-image:linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        </div>
        <div className="relative mx-auto grid min-h-[660px] max-w-7xl items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Independent technology company
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Make technology work for <span className="text-neutral-500">real life.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
              Kazira brings together technology strategy, digital products, and practical systems to help businesses and people move from ideas to useful outcomes.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollTo('work')} className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-neutral-700">
                Explore our work <ArrowRight size={17} />
              </button>
              <a href="https://x.com/nanostrategyke" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-7 py-4 text-sm font-semibold transition hover:border-neutral-950">
                Talk to NanoStrategyKE <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-200 pt-6 text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
              <span>Strategy</span><span className="text-amber-500">/</span><span>Digital products</span><span className="text-amber-500">/</span><span>Systems</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-neutral-200/80 rotate-3" />
            <div className="relative rounded-[1.7rem] border border-neutral-200 bg-white p-6 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.3)] sm:p-8">
              <div className="flex items-start justify-between border-b border-neutral-100 pb-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">The Kazira approach</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">From complexity to clarity.</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-950 text-white"><Globe2 size={21} /></div>
              </div>
              <div className="space-y-3 py-6">
                {[
                  ['01', 'Understand the challenge', 'Define the outcome that matters.'],
                  ['02', 'Design the right system', 'Choose a practical, maintainable path.'],
                  ['03', 'Build and improve', 'Deliver, learn, and iterate.'],
                ].map(([n, title, body]) => (
                  <div key={n} className="flex gap-4 rounded-2xl p-4 transition hover:bg-neutral-50">
                    <span className="pt-1 font-display text-sm font-semibold text-amber-600">{n}</span>
                    <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-neutral-500">{body}</p></div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-neutral-950 px-5 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">Our focus</p>
                <p className="mt-2 text-sm leading-6">Clear thinking. Useful technology. Better systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">What we do</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A practical portfolio of ideas and services.</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-neutral-600">One company, connected capabilities: strategic advice, digital experiences, and systems designed around real needs.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {ventures.map((item) => {
              const Icon = item.icon;
              return <article key={item.number} className="group flex min-h-[330px] flex-col rounded-3xl border border-neutral-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl hover:shadow-neutral-200/50 sm:p-8">
                <div className="flex items-center justify-between"><span className="font-display text-sm text-neutral-400">{item.number}</span><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-neutral-900"><Icon size={21} /></span></div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">{item.category}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{item.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600">{item.description}</p>
                <a href={item.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition group-hover:gap-3">{item.label}<ArrowUpRight size={16} /></a>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">How we think</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Technology should serve the goal.</h2>
            <p className="mt-6 max-w-lg leading-7 text-neutral-600">The best solution is one people can understand, use, and maintain. We focus on clarity and sound execution over complexity for its own sake.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <Icon size={22} className="text-amber-700" />
              <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-neutral-950 px-7 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            <div aria-hidden="true" className="absolute right-[-4rem] top-[-8rem] h-80 w-80 rounded-full border border-white/10" />
            <div aria-hidden="true" className="absolute right-8 top-8 h-52 w-52 rounded-full border border-white/10" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Start a conversation</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">Have a problem worth solving?</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">Tell us what you are working on. We can explore the challenge, identify opportunities, and determine a sensible next step.</p>
              <a href="https://x.com/nanostrategyke" target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-amber-100">Connect with NanoStrategyKE <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
