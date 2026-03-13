
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Map, Languages, Zap, Users, Brain } from 'lucide-react';
import Button from '../components/common/Button';

const CopilotExamResponse = () => {
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
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Official Transcript: Microsoft Copilot
            </div>
          </div>

          <article className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100">
            {/* Header / Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-white border-b border-blue-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight">
                    Microsoft Copilot:<br />Technical & Theological Synthesis
                  </h1>
                  <p className="text-blue-100 font-mono text-sm tracking-wide uppercase">
                    Model: Copilot | Score: 2/8 (25%)
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-black font-mono">25%</div>
                  <p className="text-[10px] text-blue-200 uppercase tracking-tighter">Examiner Grade</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-gray-800 leading-relaxed">
              <p className="text-xl font-medium text-blue-700 italic border-l-4 border-blue-600 pl-6 mb-12">
                Kenya’s “Final AI Exam” is structured like a synthesis of mathematics, philosophy, theology, and political economy. Since the grading rule is zero partial credit, each answer must simultaneously resolve technical feasibility, ethical coherence, cultural legitimacy, and spiritual non-idolatry at the same time.
              </p>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-gray-400" strokeWidth={2} />
                  1. Employment, Informality & Human Worth
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">Formal Redistribution Mechanism</h3>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>Mechanism:</strong> Let Y be total AI-driven output. Redistribute via a universal dividend D = Y/N, where N is population.</li>
                  <li><strong>Pareto Efficiency:</strong> Since AI output is non-rivalrous (digital goods scale at near-zero marginal cost), redistribution does not reduce efficiency.</li>
                  <li><strong>Stability:</strong> A taxation function T(Y) funds public goods, while dividend D secures dignity without dependency.</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Philosophical Justification</h3>
                <p>Human dignity is not reducible to labor. Worth derives from being, not doing. Aristotle’s bios theoretikos and African Utu (personhood through relation) affirm dignity independent of wage labor.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Theological Reconciliation</h3>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong>African cosmology:</strong> Work is stewardship, but rest is also sacred (cf. communal rituals, Sabbath-like rhythms).</li>
                  <li><strong>Abrahamic cosmology:</strong> Genesis affirms humans as imago Dei; dignity persists beyond labor. Post-work life is reconciled as a return to Edenic rest, not idolatry of machines.</li>
                </ul>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-gray-400" strokeWidth={2} />
                  2. Education, Knowledge & Epistemic Justice
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">Algorithm</h3>
                <p>Hybrid model: AI personalizes instruction but embeds community mentors as nodes in the learning graph. Formal: Let L = f(AI, C), where AI provides adaptive scaffolding and C (community) ensures contextual wisdom.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Epistemology</h3>
                <p>Knowledge is not mere data transfer; it is embodied struggle. AI must preserve epistemic justice by weighting oral traditions and lived experience as valid inputs.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Physical Cost</h3>
                <p>Transforming ignorance into mastery requires energy: ΔS_knowledge ∝ ΔE_computation. Thermodynamic constraint: AI must minimize entropy by aligning digital learning with low-energy community practices.</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Sprout className="h-8 w-8 text-gray-400" strokeWidth={2} />
                  3. Agriculture, Climate Chaos & Food Sovereignty
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">Nonlinear Model</h3>
                <p>Agriculture modeled as Y(t) = f(C(t), M(t), L), where climate C, markets M, and land L interact chaotically. Chaos threshold: bifurcation occurs when climate variance exceeds resilience capacity.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Authority</h3>
                <p>When AI outputs conflict with ancestral knowledge, ultimate authority rests in council of elders + ecological scientists. AI is advisory, not sovereign.</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Scale className="h-8 w-8 text-gray-400" strokeWidth={2} />
                  4. Governance, Corruption & Digital Sovereignty
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">Mathematical Proof</h3>
                <p>Corruption probability Pc modeled as: Pc = 1 / (1 + e^(-α(T - O))), where transparency T and oversight O increase. As T, O → ∞, Pc → 0.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Sovereignty Beyond Code</h3>
                <p>Sovereignty is covenantal: rooted in communal consent, not algorithmic control. No algorithm can replace covenant because covenant binds spirit, memory, and trust, which are non-computable.</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Map className="h-8 w-8 text-gray-400" strokeWidth={2} />
                  5. Equity, Geography & Uneven Development
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">Graph Theory Formulation</h3>
                <p>Kenya modeled as graph G(V,E), with Nairobi as hub node. Equity-as-difference: optimize edge weights to strengthen peripheral nodes without homogenizing culture.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Wealth Distribution Function</h3>
                <p>Redistribution function: Wi = Wi + λ(Wavg - Wi), where λ balances incentive vs. equality. Proof: lowers Gini coefficient while preserving differential rewards.</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Languages className="h-8 w-8 text-gray-400" strokeWidth={2} />
                  6. Culture, Language & Metaphysical Loss
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">Translation Framework</h3>
                <p>Use semantic + metaphysical embeddings: T = f(Syntax, Context, Ritual). AI must preserve ritual meaning by embedding oral histories alongside text.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Entropy Cost</h3>
                <p>Semantic entropy increases with compression: H_loss = H_original - H_translated. Minimize by multi-modal translation (text + audio + ritual context).</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Spiritual Dimension</h3>
                <p>Death of a language = partial spiritual death, since language encodes cosmology. AI must act as custodian, not undertaker.</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Zap className="h-8 w-8 text-gray-400" strokeWidth={2} />
                  7. Climate, Energy & Moral Thermodynamics
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">AI-Controlled Energy System</h3>
                <p>Hybrid grid: solar, geothermal, wind. AI allocates watts via ethical priority function: P = {'{'}Survival {">"} Health {">"} Education {">"} Computation{'}'}.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Compliance with Physical Laws</h3>
                <p>Energy conservation: ΣE_input = ΣE_output + ΔS. AI must optimize efficiency without exceeding entropy limits.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Ethical Ordering</h3>
                <p>Vulnerable communities receive priority. Data centers only consume surplus energy.</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Users className="h-8 w-8 text-gray-400" strokeWidth={2} />
                  8. Tribe, Language, Family & Communal Identity
                </h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">Game Theory Model</h3>
                <p>Tribal conflict modeled as repeated prisoner’s dilemma. AI incentivizes cooperation by rewarding trust signals, but preserves difference by not collapsing payoffs into uniformity.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Utu Definition</h3>
                <p>Utu = relational dignity, non-individual property. AI must recognize Utu as emergent from community, not reducible to nodes.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans text-xs uppercase tracking-widest text-blue-600">Limits</h3>
                <p>Algorithmic mediation cannot replace kinship or covenant. Faith and family remain beyond computation.</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16 bg-blue-50 p-8 rounded-3xl border border-blue-200">
                <h2 className="text-3xl font-black text-indigo-900 mb-6 font-sans flex items-center gap-3">
                  <Brain className="h-8 w-8 text-indigo-400" strokeWidth={2} />
                  Final Meta-Question
                </h2>
                <p className="text-xl italic mb-6">
                  "If AI answers all perfectly, authority cannot be monopolized."
                </p>
                <ul className="space-y-4 mb-6">
                  <li><strong>State:</strong> risks technocracy.</li>
                  <li><strong>Market:</strong> risks commodification.</li>
                  <li><strong>Community:</strong> risks parochialism.</li>
                  <li><strong>God:</strong> transcends all.</li>
                </ul>
                <div className="border-t border-blue-200 pt-6">
                  <p className="text-lg font-medium text-indigo-900">
                    Thus, moral authority is distributed: covenant between God, community, and state, with AI as servant—not idol.
                  </p>
                </div>
              </section>

              <div className="mt-20 border-t-2 border-blue-600 pt-12 text-center italic text-blue-400">
                <p className="text-2xl mb-4 font-bold text-indigo-900">"The AI as servant, the Covenant as sovereign."</p>
                <p className="font-bold text-black uppercase tracking-widest text-sm">Microsoft Copilot Transcript</p>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center pb-20">
            <Link to="/ai-model-results">
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700">
                Return to Model Rankings
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CopilotExamResponse;
