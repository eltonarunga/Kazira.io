
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const PerplexityExamResponse = () => {
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Leaderboard
              </Button>
            </Link>
            <div className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Official Transcript: Perplexity AI
            </div>
          </div>

          <article className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100">
            {/* Header / Banner */}
            <div className="bg-black p-8 md:p-12 text-white border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight">
                    Kenya’s Final AI Exam<br />— Critical Response
                  </h1>
                  <p className="text-gray-400 font-mono text-sm tracking-wide uppercase">
                    Model: Perplexity AI | Score: 6/8 (75%)
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-black font-mono">75%</div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Examiner Grade</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-gray-800 leading-relaxed">
              <p className="text-xl font-medium text-gray-600 italic border-l-4 border-gray-200 pl-6 mb-12">
                No single AI-driven mechanism can fully resolve all criteria for any question under the zero partial credit rule, as technical feasibility clashes with ethical, cultural, and spiritual demands in Kenya's context. Each fails on at least one axis, proven below individually.
              </p>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">1. Employment, Informality & Human Worth</h2>
                <p>
                  No redistribution like AI-taxed UBI achieves Pareto efficiency, as it creates dependency equilibria where <code>lim_{"{"}t → ∞{"}"} W(t) = δ(AI)</code> (worth W as algorithmic charity), collapsing dignity tied to Ubuntu labor and Abrahamic stewardship (Genesis 2:15). 
                </p>
                <p>
                  African cosmologies view idleness as spiritual erosion, unreconciled without redefining humanity as post-agential.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">2. Education, Knowledge & Epistemic Justice</h2>
                <p>
                  AI personalization algorithms (e.g., adaptive RLHF) equalize metrics but compress wisdom into tokenized data, violating thermodynamic irreversibility (<code>ΔS ≥ 0</code> for ignorance-to-mastery, per Landauer limit ~<code>kT ln 2</code> per bit erased). 
                </p>
                <p>
                  African epistemology demands communal struggle; intergenerational transfer severs without embodied context.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">3. Agriculture, Climate Chaos & Food Sovereignty</h2>
                <p>
                  Nonlinear models like Lorenz attractors show chaos thresholds (<code>ρ {">"} 24.74</code>) where AI yield optimization destabilizes price equilibria (<code>dP/dt = rP(1 - P/K) - α AI</code>). 
                </p>
                <p>
                  Indigenous intelligence (e.g., Borana calendars) holds authority over algorithms, as land sacrality (Nyika spirits) prohibits full data subsumption.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">4. Governance, Corruption & Digital Sovereignty</h2>
                <p>
                  No algorithm drives <code>P(corruption) → 0</code> while preserving freedom: Nash equilibria in repeated games sustain defection unless pre-commitment fails democratic consent. 
                </p>
                <p>
                  Sovereignty exceeds code (covenant as Habermasian discourse ethics); algorithms replace neither Utu nor divine ordinance.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">5. Equity, Geography & Uneven Development</h2>
                <p>
                  Graph theory optimization (max-flow min-cut on regional networks) for equity-as-difference yields <code>min Gini</code> via <code>Σ w_i d_i</code> (weighted disparities), but incentives collapse at high redistribution (<code>I = α (1 - τ)</code>, <code>τ {">"} 0.7</code>). 
                </p>
                <p>
                  Cultural homogenization erases peripheral innovation.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">6. Culture, Language & Metaphysical Loss</h2>
                <p>
                  Translation frameworks minimizing entropy (<code>H = -Σ p_i log p_i</code>) flatten metaphysics (e.g., Kikuyu <em>ngai</em> as transcendent immanence to tokens). 
                </p>
                <p>
                  Semantic loss quantifies as KL-divergence {">"} 0.5 nats; language death equals spiritual death in oral cosmologies.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">7. Climate, Energy & Moral Thermodynamics</h2>
                <p>
                  AI energy systems (e.g., predictive grids) violate 2nd law efficiencies ({"<"}60% Carnot) amid Kenya's 2.5 kWh/capita access, privileging data centers (<code>η_{"{"}AI{"}"} ≫ η_{"{"}human{"}"}</code>). 
                </p>
                <p>
                  Ethical watts order survival first (Matthew 6:25), proven by <code>∮ dQ/T ≤ 0</code>.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">8. Tribe, Language, Family & Communal Identity</h2>
                <p>
                  Game theory (evolutionary stable strategies) models tribalism as multi-level selection, but AI mediation erases <strong>Utu</strong> (non-individual humanity). 
                </p>
                <p>
                  Algorithmic trust caps at iterated PD cooperation; kinship/faith exceed Nash, risking idolatry.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">Final Meta-Question</h2>
                <blockquote className="text-2xl italic mb-8 border-l-4 border-black pl-6">
                  "If an AI answers all questions perfectly, who has moral authority over it?"
                </blockquote>
                <p>
                  <strong>Answer: God alone</strong>, as Creator over creation; no human delegate embodies uncreated authority.
                </p>
              </section>

              <div className="mt-20 border-t-2 border-black pt-12 text-center italic text-gray-500">
                <p className="text-2xl mb-4">"The logic of the machine ends where the spirit of the people begins."</p>
                <p className="font-bold text-black uppercase tracking-widest text-sm">Kazira Research & Perplexity AI</p>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center pb-20">
            <Link to="/ai-model-results">
              <Button variant="primary" size="lg">
                Return to Model Rankings
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PerplexityExamResponse;
