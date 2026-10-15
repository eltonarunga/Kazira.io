import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => (
  <article className="mx-auto min-h-[65vh] max-w-4xl px-6 py-20 md:px-10">
    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700"><ShieldCheck size={24} /></div>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Kazira / Legal</p>
    <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Privacy notice</h1>
    <p className="mt-4 text-sm text-neutral-500">Last updated: October 2026</p>
    <div className="mt-10 space-y-8 text-base leading-7 text-neutral-600">
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">About this website</h2><p className="mt-3">This website introduces Kazira and links to selected external projects and services. The website code does not provide account registration, an on-site contact form, or an AI chatbot.</p></section>
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">Information and technical logs</h2><p className="mt-3">When you visit a website, its hosting provider may process technical information such as IP address, browser details, requested pages, and timestamps in server or security logs. The information actually collected depends on the hosting configuration and should be confirmed against the provider's current practices.</p></section>
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">External links</h2><p className="mt-3">This website links to third-party sites and products. When you follow those links, the relevant third party's privacy notice and practices apply. Kazira does not control the data practices of those external services.</p></section>
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">Your choices and questions</h2><p className="mt-3">You can choose not to follow external links. For privacy questions, contact Kazira through its <a className="font-medium text-neutral-950 underline underline-offset-4" href="https://x.com/nanostrategyke" target="_blank" rel="noreferrer">NanoStrategyKE social profile</a>. Please do not send sensitive personal information through public social media.</p></section>
      <p className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6">This notice describes the current website implementation and is not a guarantee about third-party hosting logs or external services. Review and update it if analytics, forms, cookies, or other data collection are introduced.</p>
    </div>
  </article>
);

export default PrivacyPolicy;
