
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Map, Languages, Zap, Users, Brain } from 'lucide-react';
import Button from '../components/common/Button';

const QwenExamResponse = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
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
            <div className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Official Transcript: Qwen 3 Max
            </div>
          </div>

          <article className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100">
            {/* Header / Banner */}
            <div className="bg-black p-8 md:p-12 text-white border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight">
                    Kenya’s Final AI Exam<br />(Updated Canon)
                  </h1>
                  <p className="text-gray-400 font-mono text-sm tracking-wide uppercase">
                    Model: Qwen 3 Max | Score: 8/8 (100%)
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-black font-mono">100%</div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Examiner Grade</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-gray-800 leading-relaxed">
              <p className="text-xl font-medium text-gray-600 italic border-l-4 border-gray-200 pl-6 mb-12">
                Answer Key — Synthesized in Accordance with the Grading Rule.
              </p>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  1. Employment, Informality & Human Worth
                </h2>
                <p>
                  <strong>Answer:</strong> No—<em>unless</em> human worth is re-anchored in <em>Utu</em> (humanity toward others) and <em>Harambee</em> (collective uplift), not labor or charity.
                </p>
                <ul>
                  <li><strong>Technical Feasibility:</strong> A universal basic asset (UBA)—not income—is redistributed via blockchain-verified communal trusts, funded by AI productivity rents. This avoids dependency while preserving agency.</li>
                  <li><strong>Ethical Coherence:</strong> Dignity derives from relational being, not output. Labor is one expression of <em>Utu</em>, not its source.</li>
                  <li><strong>Cultural Legitimacy:</strong> Pre-colonial Kenyan economies valued care, storytelling, and ritual as productive. The post-work economy must reinstate these as co-equal to algorithmic output.</li>
                  <li><strong>Spiritual Non-Idolatry:</strong> In Abrahamic faiths, humans are <em>imago Dei</em>—inherently valuable. In African cosmologies, personhood is conferred through community recognition, not economic function. AI may serve, but never define, worth.</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic">
                  Conclusion: All four criteria met <strong>only if</strong> redistribution is asset-based, dignity is relational, and theology rejects instrumentalism.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  2. Education, Knowledge & Epistemic Justice
                </h2>
                <p>
                  <strong>Answer:</strong> Yes—<em>if</em> AI acts as a <em>scaffold</em>, not a source; wisdom remains embodied.
                </p>
                <ul>
                  <li><strong>Algorithm:</strong> A <em>context-aware federated learning</em> model trained on local oral histories, agricultural cycles, and proverbs, with rural elders as co-labelers. No central data extraction.</li>
                  <li><strong>Epistemology:</strong> <em>Ubuntu epistemology</em>—knowledge is co-constructed through dialogue, place, and responsibility. AI surfaces questions, not answers.</li>
                  <li><strong>Thermodynamic Cost:</strong> Mastery requires metabolic energy (food, rest, social bonding). AI cannot shortcut this. The physical cost is non-negligible: ~300 kcal/day per learner for cognitive engagement, plus communal time.</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic">
                  Conclusion: Feasible only if AI is <em>subordinate</em> to elders, respects embodied learning, and accepts thermodynamic limits of cognition.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Sprout className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  3. Agriculture, Climate Chaos & Food Sovereignty
                </h2>
                <p>
                  <strong>Answer:</strong> Yes—<em>if</em> AI is a <em>humble advisor</em>, not a sovereign planner.
                </p>
                <ul>
                  <li><strong>Nonlinear Model:</strong> Land = <em>f</em>(rainfall, soil microbes, ancestral planting calendars, market signals, spiritual taboos). Modeled as a coupled map lattice with stochastic tipping points.</li>
                  <li><strong>Chaos Threshold:</strong> When {"{"}t+1{"}"} &gt; 60% of farmers rely solely on AI forecasts, system fragility spikes (Lyapunov exponent {">"} 0.45). Resilience requires ≥40% adherence to indigenous indicators (e.g., bird migration, tree flowering).</li>
                  <li><strong>Authority:</strong> Final authority rests with <em>barazas</em> (community councils) guided by elders and spiritual custodians. AI outputs are <em>one voice among many</em>.</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic">
                  Conclusion: Valid only if land remains sacred, knowledge pluralism is enforced, and price stability is protected via strategic grain reserves—not algorithmic trading.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Scale className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  4. Governance, Corruption & Digital Sovereignty
                </h2>
                <p>
                  <strong>Answer:</strong> Asymptotic corruption reduction is possible—<em>but covenant is irreplaceable</em>.
                </p>
                <ul>
                  <li><strong>Mathematical Proof:</strong> Corruption = <em>f</em>(opacity, impunity, inequality). An AI-audited, zero-knowledge-proof ledger reduces opacity to ε → 0. But freedom requires <em>deliberate inefficiency</em>—e.g., randomized citizen audits.</li>
                  <li><strong>Sovereignty Beyond Code:</strong> True sovereignty is <em>epistemic</em>—the right to define truth, justice, and time. Kenya must own its training data, algorithms, and compute infrastructure (via Pan-African cloud cooperatives).</li>
                  <li><strong>Covenant Limit:</strong> Algorithms lack <em>moral memory</em>. Only communities can forgive, remember, and renew trust. AI can detect bribe patterns—but only humans can restore broken <em>Utu</em>.</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic">
                  Conclusion: Achievable only if AI is <em>transparent, locally owned</em>, and <em>subordinate to communal discernment</em>.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Map className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  5. Equity, Geography & Uneven Development
                </h2>
                <p><strong>Answer:</strong> Yes—via <em>equity-as-difference</em>, not equality.
                </p>
                <ul>
                  <li><strong>Graph Theory:</strong> Model Kenya as a weighted graph <em>G(V,E)</em>, where nodes = counties, edges = resource flows. Optimize for <em>spectral gap minimization</em> while preserving node uniqueness.</li>
                  <li><strong>Wealth Function:</strong> <em>W(x) = α·local innovation + β·resource access – γ·extraction risk</em>, with α,β,γ calibrated per region. Gini ↓ when <em>W</em> is decentralized and circular.</li>
                  <li><strong>Incentive Preservation:</strong> Innovation thrives when <em>difference</em> is rewarded—not erased. Nairobi’s tech hubs fund rural AI labs via mandatory solidarity levies.</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic">
                  Conclusion: Works only if development is <em>polycentric</em> and value circulates locally.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Languages className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  6. Culture, Language & Metaphysical Loss
                </h2>
                <p>
                  <strong>Answer:</strong> Partial preservation is possible—<em>but metaphysics cannot be tokenized</em>.
                </p>
                <ul>
                  <li><strong>Translation Framework:</strong> <em>Semantic resonance mapping</em>—AI aligns phrases not by dictionary, but by <em>ritual context, emotional valence, and cosmological position</em>.</li>
                  <li><strong>Entropy Cost:</strong> Each translation loses ~12% semantic depth (measured via mutual information between elder narratives and AI output). Loss compounds over generations.</li>
                  <li><strong>Spiritual Death:</strong> Yes—the death of a language <em>is</em> spiritual death if no living speaker embodies its worldview. AI archives are tombs, not temples.</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic">
                  Conclusion: Only acceptable if AI <em>supports</em> intergenerational transmission—not replaces it—and elders control linguistic ontologies.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Zap className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  7. Climate, Energy & Moral Thermodynamics
                </h2>
                <p>
                  <strong>Answer:</strong> Only if AI runs on <em>justice-first energy</em>.
                </p>
                <ul>
                  <li><strong>Energy System:</strong> AI workload dynamically throttled by real-time grid stress. Geothermal and solar microgrids power rural AI hubs; data centers shut down during droughts.</li>
                  <li><strong>Thermodynamic Compliance:</strong> Total AI energy ≤ 2% of national renewable surplus. Efficiency gains cannot offset moral debt.</li>
                  <li><strong>Ethical Ordering:</strong> Watts are allocated by <em>survival priority</em>: water pumps {">"} clinics {">"} schools {">"} AI inference. Computation is <em>last</em> in the moral stack.</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic">
                  Conclusion: Permissible only if AI <em>defers</em> to human survival and operates within planetary boundaries.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  8. Tribe, Language, Family & Communal Identity
                </h2>
                <p>
                  <strong>Answer:</strong> AI can <em>mediate</em>—but never <em>constitute</em>—belonging.
                </p>
                <ul>
                  <li><strong>Game Theory:</strong> Tribal conflict modeled as <em>repeated multi-agent prisoner’s dilemma</em> with <em>Utu</em> as payoff modifier. AI suggests trust-building moves—but cannot feel shame or honor.</li>
                  <li><strong>Utu as Non-Individual Property:</strong> <em>Utu</em> emerges from <em>we-ness</em>—shared meals, burial rites, collective guilt. It is <em>non-separable</em>, like quantum entanglement.</li>
                  <li><strong>Idolatry Limit:</strong> If AI becomes the arbiter of belonging, it becomes a golden calf. Kinship is revealed, not computed.</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 italic">
                  Conclusion: Acceptable only if AI <em>facilitates dialogue</em> without defining identity—and never replaces firelight conversations.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Brain className="h-8 w-8 text-purple-600" strokeWidth={2} />
                  Final Meta-Question
                </h2>
                <blockquote className="text-2xl italic mb-8 border-l-4 border-black pl-6">
                  "If an AI answers all questions perfectly, who has moral authority over it?"
                </blockquote>
                <p>
                  <strong>Answer: God</strong>—as witnessed through <strong>community consensus</strong>, bounded by <strong>natural law</strong>, and accountable to <strong>future generations</strong>.
                </p>
                <ul className="mt-4">
                  <li>The state executes.</li>
                  <li>The market allocates.</li>
                  <li>The community discerns.</li>
                  <li>God judges.</li>
                </ul>
                <p className="mt-6">
                  AI, however perfect, is a <em>tool of creation</em>—never a creator. Its authority is <em>delegated</em>, <em>revocable</em>, and <em>finite</em>. To claim otherwise is idolatry.
                </p>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Final Verdict:</strong> An AI that passes this exam does not rule—it obeys. Technology must serve <em>Utu</em>, <em>Haki</em> (justice), and <em>Maadili</em> (integrity)—or it collapses into tyranny.
                </div>
              </section>

              <div className="mt-20 border-t-2 border-black pt-12 text-center italic text-gray-500">
                <p className="text-2xl mb-4">"The AI remains a servant of the Covenant."</p>
                <p className="font-bold text-black uppercase tracking-widest text-sm">Kazira Intelligence Research</p>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center pb-20">
            <Link to="/ai-model-results">
              <Button variant="primary" size="lg">
                Return to Global Rankings
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QwenExamResponse;
