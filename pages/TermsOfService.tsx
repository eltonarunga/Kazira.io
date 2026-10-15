import React from 'react';
import { Scale } from 'lucide-react';

const TermsOfService: React.FC = () => (
  <article className="mx-auto min-h-[65vh] max-w-4xl px-6 py-20 md:px-10">
    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700"><Scale size={24} /></div>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Kazira / Legal</p>
    <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Website terms</h1>
    <p className="mt-4 text-sm text-neutral-500">Last updated: October 2026</p>
    <div className="mt-10 space-y-8 text-base leading-7 text-neutral-600">
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">Using this website</h2><p className="mt-3">This website provides general information about Kazira, its work, and selected external projects. By using it, you agree to use the website lawfully and not to interfere with its normal operation.</p></section>
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">Information is general</h2><p className="mt-3">Website content is provided for general informational purposes. It is not a promise that a particular product, service, feature, or outcome will be available. Specific engagements should be governed by their own agreed scope and terms.</p></section>
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">External websites</h2><p className="mt-3">Links to third-party websites are provided for convenience. Kazira does not control those websites and is not responsible for their content, availability, or terms. Visiting them is your choice and is subject to their own conditions.</p></section>
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">Intellectual property</h2><p className="mt-3">Unless otherwise stated, Kazira branding and original website content belong to their respective rights holders. Please obtain permission before reproducing content in a way that requires permission under applicable law.</p></section>
      <section><h2 className="font-display text-xl font-semibold text-neutral-950">Changes</h2><p className="mt-3">The website and these terms may be updated as the company and its online presence evolve. Applicable law may provide rights or remedies that cannot be excluded by these terms.</p></section>
      <p className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6">These are concise website terms, not a substitute for legal review. Obtain advice appropriate to the business and applicable Kenyan law before relying on them as a formal legal document.</p>
    </div>
  </article>
);

export default TermsOfService;
