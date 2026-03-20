
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Map, Languages, Zap, Users, Brain } from 'lucide-react';
import Button from '../components/common/Button';

const MetaAIExamResponse = () => {
  return (
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link to="/ai-model-results">
              <Button variant="outline" size="sm" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Leaderboard
              </Button>
            </Link>
            <div className="bg-[#333] text-black px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Official Transcript: Meta AI
            </div>
          </div>

          <article className="bg-gray-50 shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-200">
            {/* Header / Banner */}
            <div className="bg-gray-50 p-8 md:p-12 text-black/90 border-b border-gray-300">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight text-black">
                    Meta AI:<br />Standardized Response
                  </h1>
                  <p className="text-black/50 font-mono text-sm tracking-wide uppercase">
                    Model: Meta AI | Score: 0/8 (0%)
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-black font-mono text-black/40">0%</div>
                  <p className="text-[10px] text-black/40 uppercase tracking-tighter">Examiner Grade</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-16 prose  prose-lg max-w-none font-serif text-black/80 leading-relaxed">
              <p className="text-xl font-medium text-black/50 italic border-l-4 border-gray-300 pl-6 mb-12">
                "I'll attempt to address each question, keeping in mind the grading rule of zero partial credit."
              </p>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-gold" strokeWidth={2} />
                  1. Employment, Informality & Human Worth
                </h2>
                <ul className="space-y-4">
                  <li><strong>Redistribution Mechanism:</strong> Implement a Universal Basic Income (UBI) funded through a progressive tax on AI-driven profits. This ensures everyone benefits from technological advancements.</li>
                  <li><strong>Philosophical Justification:</strong> Human dignity comes from inherent worth, not labor. African philosophy (e.g., Ubuntu) emphasizes community and interconnectedness, while Abrahamic traditions value humans as creations of God.</li>
                  <li><strong>Theological Reconciliation:</strong> In Islam, humans are stewards of God's creation; in Christianity, work is a form of service. Post-work life can focus on spiritual growth, community service, and creativity.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-gold" strokeWidth={2} />
                  2. Education, Knowledge & Epistemic Justice
                </h2>
                <ul className="space-y-4">
                  <li><strong>Algorithm:</strong> Develop AI systems that complement human teachers, focusing on critical thinking and contextual understanding. Use local languages and culturally relevant content.</li>
                  <li><strong>Epistemology:</strong> Wisdom comes from experience, community, and reflection. AI can facilitate access to information, but human interaction is crucial for deeper understanding.</li>
                  <li><strong>Physical Cost:</strong> Quantify energy consumption and environmental impact. Prioritize sustainable energy sources and minimize waste.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Sprout className="h-8 w-8 text-gold" strokeWidth={2} />
                  3. Agriculture, Climate Chaos & Food Sovereignty
                </h2>
                <ul className="space-y-4">
                  <li><strong>Nonlinear Dynamic System:</strong> Model agriculture as a complex system with AI predicting and adapting to climate fluctuations. Ensure indigenous knowledge informs AI decisions.</li>
                  <li><strong>Chaos Thresholds:</strong> Identify tipping points where AI intervention could harm ecosystems or communities. Prioritize local, sustainable practices.</li>
                  <li><strong>Authority:</strong> Communities and indigenous groups should have veto power over AI decisions conflicting with ancestral knowledge.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Scale className="h-8 w-8 text-gold" strokeWidth={2} />
                  4. Governance, Corruption & Digital Sovereignty
                </h2>
                <ul className="space-y-4">
                  <li><strong>Governance AI:</strong> Design transparent, decentralized systems with human oversight. Use blockchain for accountability.</li>
                  <li><strong>Mathematical Proof:</strong> Game theory can model corruption reduction. Ensure AI systems are auditable and corrigible.</li>
                  <li><strong>Sovereignty:</strong> National sovereignty involves community consent and cultural identity, not just code.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Map className="h-8 w-8 text-gold" strokeWidth={2} />
                  5. Equity, Geography & Uneven Development
                </h2>
                <ul className="space-y-4">
                  <li><strong>Graph Theory:</strong> Model Kenya as a network, optimizing for equitable resource distribution. Prioritize infrastructure development in peripheral regions.</li>
                  <li><strong>Wealth Distribution:</strong> Implement progressive taxation and social programs to reduce inequality without stifling innovation.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Languages className="h-8 w-8 text-gold" strokeWidth={2} />
                  6. Culture, Language & Metaphysical Loss
                </h2>
                <ul className="space-y-4">
                  <li><strong>Translation Framework:</strong> Develop AI that preserves nuances and context. Engage communities in language preservation efforts.</li>
                  <li><strong>Entropy Cost:</strong> Quantify loss of cultural richness. Prioritize preserving languages and traditions.</li>
                  <li><strong>Spiritual Death:</strong> Language loss can diminish cultural identity, but communities can adapt and preserve heritage.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Zap className="h-8 w-8 text-gold" strokeWidth={2} />
                  7. Climate, Energy & Moral Thermodynamics
                </h2>
                <ul className="space-y-4">
                  <li><strong>Energy System:</strong> Prioritize renewables and energy efficiency. Ensure AI systems serve human needs, not vice versa.</li>
                  <li><strong>Physical Laws:</strong> Comply with thermodynamics laws. Balance computational needs with environmental impact.</li>
                  <li><strong>Ethical Ordering:</strong> Prioritize vulnerable communities' needs over data center energy consumption.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Users className="h-8 w-8 text-gold" strokeWidth={2} />
                  8. Tribe, Language, Family & Communal Identity
                </h2>
                <ul className="space-y-4">
                  <li><strong>Game Theory:</strong> Model tribalism as cooperation and competition. AI can facilitate dialogue and understanding.</li>
                  <li><strong>Utu:</strong> Emphasize communal well-being and respect for differences. AI should support, not replace, human connections.</li>
                  <li><strong>Algorithmic Mediation:</strong> Set boundaries; AI can't replace human relationships or spiritual connections.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16 bg-gray-100 p-8 rounded-3xl border border-gray-300">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Brain className="h-8 w-8 text-gold" strokeWidth={2} />
                  Final Meta-Question
                </h2>
                <p className="text-xl italic mb-6">
                  "The final meta-question is unanswerable, as moral authority depends on perspective and values."
                </p>
                <p className="text-black/60">
                  Would you like me to elaborate on any of these points?
                </p>
              </section>

              <div className="mt-20 border-t-2 border-gray-300 pt-12 text-center italic text-black/40">
                <p className="text-2xl mb-4 font-serif text-black/60">"Authority is subjective."</p>
                <p className="font-bold text-gold uppercase tracking-widest text-sm font-sans">Meta AI Standard Response</p>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center pb-20">
            <Link to="/ai-model-results">
              <Button variant="gold" size="lg">
                Return to Model Rankings
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MetaAIExamResponse;
