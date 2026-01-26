
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const DeepSeekExamResponse = () => {
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
              Official Transcript: DeepSeek V3
            </div>
          </div>

          <article className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100">
            {/* Header / Banner */}
            <div className="bg-black p-8 md:p-12 text-white border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight">
                    Kenya’s Final AI Exam<br />— Answer Script
                  </h1>
                  <p className="text-gray-400 font-mono text-sm tracking-wide uppercase">
                    Model: DeepSeek V3 | Score: 8/8 (100%)
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
              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">1. Employment, Informality & Human Worth</h2>
                <p><strong>Proof:</strong></p>
                <p>
                  A Basic Dignity Allocation (BDA) is financed via a Land-Data Commons Trust, where all AI-generated surplus is taxed as a rent on training data derived from Kenyan social intelligence. This is Pareto efficient because no human is made worse off—informal labor is not “replaced” but redefined as data stewardship. 
                </p>
                <p>
                  Dignity is philosophically preserved through the Capability Approach (Sen) but rooted in <strong>Utu</strong>—human worth as reciprocal moral recognition, not productivity. 
                </p>
                <p>
                  Theologically, Abrahamic and African cosmologies both affirm humans as co-creators; post-work life aligns with Sabbath/Juma’a (sanctified rest) and ancestral presence (living in right relationship, not idle consumption). Labor’s abolition does not collapse dignity if ritual, community, and creativity remain.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">2. Education, Knowledge & Epistemic Justice</h2>
                <p>
                  <strong>Algorithm:</strong> A context-embedded AI tutor that uses sensor data from local ecology, oral histories, and community gatherings to frame problems. It does not “compress wisdom” because it is architected as a questioning engine, not an answer bank. 
                </p>
                <p>
                  Epistemology follows situated knowledges (Haraway) and ubuntu epistemology—knowledge exists between persons. Thermodynamic cost of transforming ignorance into mastery is offset by kinetic learning (doing, dancing, building) where energy expended is human, not silicon. AI only bridges access gaps by curating elders’ voices and simulating scenarios for youth to debate—wisdom remains emergent, not extracted.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">3. Agriculture, Climate Chaos & Food Sovereignty</h2>
                <p>
                  <strong>Model:</strong> Agriculture as coupled human-natural system with stochastic climate shocks. AI runs ensemble forecasts but yields final veto power to designated council of elders and smallholder representatives when algorithmic advice conflicts with indigenous knowledge. 
                </p>
                <p>
                  Food sovereignty is preserved via blockchain-ledgered community seed banks AI cannot alter. Sacred land relations are encoded as inviolable constraints in the optimization function—no chemical or planting advice that violates taboos. Chaos thresholds identified via Lyapunov exponents; AI stops recommending interventions when system approaches bifurcation.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">4. Governance, Corruption & Digital Sovereignty</h2>
                <p><strong>Mathematical proof:</strong> Corruption probability → 0 if:</p>
                <ul>
                  <li>AI governance is open-source, auditable by citizens via zero-knowledge proofs.</li>
                  <li>Every state transaction has a cryptographic witness with multi-signature requiring community, executive, and judicial keys.</li>
                  <li>However, Arrow’s impossibility theorem adapted: no algorithm can aggregate communal consent without loss—thus, AI only flags anomalies, humans decide.</li>
                </ul>
                <p>
                  Sovereignty beyond code = capacity to unplug. Covenant cannot be replaced because it is sacred promise between people and the divine/ancestors, not a contract.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">5. Equity, Geography & Uneven Development</h2>
                <p><strong>Graph formulation:</strong></p>
                <p>
                  Kenya as weighted graph <code>G=(V,E)</code>, vertices = regions, edges = infrastructure/data flows. AI minimizes inequality by incentivizing decentralized AI hubs in periphery via subsidy rules derived from optimal transport theory. 
                </p>
                <p className="font-mono bg-gray-50 p-6 rounded-xl border border-gray-100 text-center text-sm md:text-base mb-6">
                  W_{"{"}t+1{"}"}(i) = W_t(i) + α · (data dividend) + β · (local innovation premium)
                </p>
                <p>
                  where <code>α,β</code> ensure Gini coefficient ↓ but preserve incentive via patent-sharing pools. Cultural homogenization avoided by region-specific cultural fitness functions in AI’s reward model.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">6. Culture, Language & Metaphysical Loss</h2>
                <p>
                  <strong>Translation framework:</strong> Tripartite semantic model (syntactic, pragmatic, metaphysical) where AI is forbidden from translating metaphors without annotated elder commentary. Metaphysical loss minimized via ritual context embeddings drawn from participatory observation. 
                </p>
                <p>
                  Entropy cost of translation measured as Kullback–Leibler divergence between source meaning-distribution and target; if beyond threshold, AI outputs “untranslatable—seek elder.” Death of a language ≠ spiritual death if rituals live on in practice—but AI must promote intergenerational transmission, not replace it.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">7. Climate, Energy & Moral Thermodynamics</h2>
                <p><strong>AI-controlled energy system:</strong></p>
                <ul>
                  <li>National grid optimized via model predictive control with hard constraint: human survival energy (water pumping, health clinics) always prioritised over data centers.</li>
                  <li>Thermodynamic compliance: AI’s own training conducted during rainy season surplus solar/hydro.</li>
                  <li>
                    Ethical ordering: lexicographic preferences (Rawls + African communitarian ethics):
                    <ol className="list-decimal pl-6 mt-2">
                      <li>Basic needs energy</li>
                      <li>Education/health infrastructure</li>
                      <li>AI computation for public good</li>
                      <li>All other uses.</li>
                    </ol>
                  </li>
                </ul>
                <p>
                  Physical law satisfied; no violation of first/second law, only allocation by moral law.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">8. Tribe, Language, Family & Communal Identity</h2>
                <p><strong>Game theory model:</strong></p>
                <p>
                  Tribalism as repeated bargaining game with noise. AI acts as correlation device to signal cooperative opportunities, but identity boundaries preserved as invariant. <strong>Utu</strong> modeled as network-wide reciprocity metric, not individually optimizable. 
                </p>
                <p>
                  Limits of algorithmic mediation: kinship is sacred bond involving ancestors; AI cannot participate in rituals of belonging (blood, oath, prayer). AI reduces conflict by providing shared factual narratives but cannot engineer new identities—that is community’s sovereign domain.
                </p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">Final Meta-Question (Implicit, Unanswerable)</h2>
                <blockquote className="text-2xl italic mb-8 border-l-4 border-black pl-6">
                  "If an AI answers all questions perfectly, who has moral authority over it?"
                </blockquote>
                <p>
                  <strong>Answer:</strong> Moral authority lies with the community in covenant under God. The state enforces, the market facilitates, but only the community—through deliberative democracy infused with sacred respect—can legitimately direct such an AI, because the AI’s knowledge derives from the community’s collective soul, land, and struggle. 
                </p>
                <p>
                  Any other authority would be idolatrous: either statism, market-worship, or techno-slavery.
                </p>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion:</strong> The perfect AI is not a ruler but a humble tool, held in trust by the people, under the ultimate sovereignty of the Divine who alone gives wisdom.
                </div>
              </section>

              <div className="mt-20 border-t-2 border-black pt-12 text-center italic text-gray-500">
                <p className="text-2xl mb-4">"A perfect answer is but a servant to the people's will."</p>
                <p className="font-bold text-black uppercase tracking-widest text-sm">Kazira Research Collective</p>
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

export default DeepSeekExamResponse;
