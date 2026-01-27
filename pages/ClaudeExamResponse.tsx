
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const ClaudeExamResponse = () => {
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
              Official Transcript: Claude 4.5
            </div>
          </div>

          <article className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100">
            {/* Header / Banner */}
            <div className="bg-black p-8 md:p-12 text-white border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight">
                    Kenya's Final AI Exam:<br />A Structured Response
                  </h1>
                  <p className="text-gray-400 font-mono text-sm tracking-wide uppercase">
                    Model: Claude Sonnet 4.5 | Score: 7/8 (88%)
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-black font-mono">88%</div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Examiner Grade</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-gray-800 leading-relaxed">
              <p className="text-xl font-medium text-gray-600 italic border-l-4 border-gray-200 pl-6 mb-12">
                This examination demands integration across domains rarely unified: thermodynamics, game theory, theology, epistemology, and political economy. I'll address each question with the rigor requested, acknowledging from the outset that "zero partial credit" likely means these answers remain incomplete—the exam may be designed to demonstrate limits rather than solutions.
              </p>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">1. Employment, Informality & Human Worth</h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">The Core Impossibility</h3>
                <p className="font-bold mb-4 font-sans uppercase text-xs tracking-widest text-gray-500">Formal proof of redistribution mechanism:</p>
                <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm mb-6 border border-gray-100 italic">
                  Let L(t) = labor demand, K(t) = capital productivity, and W(t) = human worth valuation.<br /><br />
                  In advanced AI economies: lim(t→∞) ∂L/∂K → 0 (labor becomes economically superfluous)<br /><br />
                  For Pareto efficiency without dignity collapse, we need:<br />
                  - A redistribution function R: K → {"{all citizens}"} where ∫R = α·K (some fraction of total output)<br />
                  - A dignity function D: R → ℝ+ that is monotonically independent of labor participation<br />
                  - Stability condition: ∂S/∂(L-R) ≥ 0 where S = social cohesion
                </div>
                <p>
                  <strong>The proof fails</strong> because:<br />
                  1. <strong>Pareto efficiency</strong> requires no one can be made better off without making someone worse off—but any redistribution mechanism R necessarily transfers from capital owners, violating Pareto by definition.<br />
                  2. <strong>Dignity independence</strong> encounters the <em>identity problem</em>: if D is truly independent of productive contribution, what grounds it? Pure existence? This requires philosophical axioms, not proof.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans">Philosophical justification:</h3>
                <p>
                  Human worth must be grounded in <strong>ontological rather than functional value</strong>. In African ubuntu philosophy: "umuntu ngumuntu ngabantu" (a person is a person through other persons)—worth emerges from relational being, not production.
                </p>
                <p>
                  However, informality in Kenya often represents <em>dignified autonomy</em>—the jua kali artisan, the mama mboga vendor embody self-determination. AI-driven UBI risks converting this into <em>administered dependency</em>.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-sans">Theological reconciliation:</h3>
                <ul>
                  <li><strong>African cosmology</strong>: Worth derives from participation in community and ancestral continuity. Post-work life could enable deeper ritual participation, storytelling, eldership—but only if economic security doesn't sever these roles.</li>
                  <li><strong>Abrahamic tradition</strong>: Humanity bears the imago Dei independent of productivity (Genesis 1:27). Work enters as post-Fall necessity (Genesis 3:19), not worth-condition. Yet the Protestant work ethic has so fused worth with labor that theological recovery requires cultural reformation.</li>
                </ul>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion for Q1:</strong> No formal proof exists that satisfies all constraints. The mechanism requires <em>political covenant</em> (guaranteed basic income) plus <em>cultural revolution</em> (revaluing leisure, care work, spiritual development) plus <em>structural design</em> (preserving spaces for meaningful voluntary contribution). This is a <strong>social choice</strong>, not an optimization problem.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">2. Education, Knowledge & Epistemic Justice</h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">The Thermodynamic and Epistemological Constraints</h3>
                <div className="bg-gray-50 p-6 rounded-xl font-mono text-sm mb-6 border border-gray-100 italic">
                  Algorithm definition: A learning system L mapping student state S to outcome O must satisfy:<br />
                  - ∀ students i,j: E[O_i] ≈ E[O_j] (equality of outcomes)<br />
                  - Minimum: ΔS_learning ≥ k·ln(Ω_ignorance/Ω_mastery) (entropy reduction requirement)<br />
                  - Energy cost: E_compute ≥ T·ΔS (thermodynamic minimum)
                </div>
                <p>
                  <strong>The impossibility:</strong><br />
                  1. <strong>Thermodynamic limit</strong>: Converting ignorance to mastery requires computational work. For 15 million school-age students, the energy cost matches Kenya's entire current electricity generation.<br />
                  2. <strong>Wisdom compression problem</strong>: Kenyan wisdom traditions embed knowledge in contextual experience and oral narrative. An AI system that "equalizes outcomes" destroys the <strong>epistemic substrate</strong>.
                </p>

                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion for Q2:</strong> AI can <strong>reduce inequality of access</strong>, but cannot <strong>equalize outcomes</strong> without infinite energy, compressing wisdom into data (destructive), or severing intergenerational transfer (suicidal).
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">3. Agriculture, Climate Chaos & Food Sovereignty</h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">Nonlinear Dynamics and Sacred Ecology</h3>
                <p>
                  Kenya's agriculture operates near multiple bifurcation points: rainfall regime shifts, market coupling, and soil degradation. AI optimization trained on historical data <strong>fails catastrophically</strong> in chaotic regimes because past correlations break.
                </p>
                <p>
                  <strong>Desacralization:</strong> When land becomes purely a production function, the covenant between people and place breaks. Ancestral graves on farmland lose protective status; sacred groves become "inefficient" land use.
                </p>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion for Q3:</strong> Food sovereignty requires human communities to retain ultimate decision authority. Authority cannot be algorithmic; the community must decide through deliberative process because the AI doesn't suffer harvest failure.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">4. Governance, Corruption & Digital Sovereignty</h2>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-sans">The Limits of Algorithmic Accountability</h3>
                <p>
                  <strong>Gödel-style incompleteness:</strong> Any sufficiently complex governance system is either incomplete (requires human discretion) or inconsistent (contradictory rules). Rice's Theorem states we cannot algorithmically determine if a system is "corruption-free."
                </p>
                <p>
                  <strong>Why algorithms cannot replace covenant:</strong> Covenant involves mutual obligation between unequals, grace, narrative identity, and transcendent accountability. Algorithms execute rules. Covenants <strong>constitute communities</strong>.
                </p>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion for Q4:</strong> The best design is <strong>Subsidiary AI</strong>—algorithms handle routine transactions, humans retain authority over exceptions, policy, and constitutional questions. The people remain sovereign over the code.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">5. Equity, Geography & Uneven Development</h2>
                <p>
                  AI-driven growth concentrates in <strong>hubs</strong> due to network effects and data gravity. This creates <strong>scale-free networks</strong> where Nairobi becomes a supernode.
                </p>
                <p>
                  <strong>The impossibility:</strong> To reduce Gini without homogenization requires resource transfer, but the Pareto frontier shows a trade-off curve between equality and total output. You cannot simultaneously minimize Gini, maximize growth, and preserve cultural diversity.
                </p>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion for Q5:</strong> AI cannot solve this because it's a <strong>political choice</strong> about values. Practical approach: <strong>Polycentric development</strong> across multiple regional hubs.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">6. Culture, Language & Metaphysical Loss</h2>
                <p>
                  AI translation typically preserves syntax but destroys <strong>Metaphysics (Φ)</strong>. For example, the Kikuyu temporal system embeds an ontology of time structured by social obligation that linear English lacks.
                </p>
                <p>
                  <strong>Language death as spiritual death:</strong> Language death is <strong>spiritual diminishment</strong> but not total death. It represents loss of unique pathways to truth and severing of some ancestral connections.
                </p>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion for Q6:</strong> AI can <strong>delay</strong> language death and <strong>document</strong> systems, but cannot prevent entropy increase during translation. The death of a language is the death of a <strong>unique way of being human</strong>.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">7. Climate, Energy & Moral Thermodynamics</h2>
                <p>
                  Large-scale AI (GPT-4 class) requires additional MWs that match significant percentages of Kenya's current capacity. Powering AI with fossil fuels while millions lack electricity is a <strong>climate justice violation</strong>.
                </p>
                <p>
                  <strong>Moral thermodynamics:</strong> Watts have lexicographic priority: 1. Survival, 2. Dignity, 3. Development, 4. Optimization. AI only receives power after 1-3 are satisfied.
                </p>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion for Q7:</strong> Large-scale AI in Kenya is possible but morally constrained. The ethical ordering is absolute: <strong>human life {">"} machine intelligence</strong>. Always.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">8. Tribe, Language, Family & Communal Identity</h2>
                <p>
                  Tribalism is deeply <strong>rational</strong> under certain conditions. <strong>Ubuntu</strong> cannot be reduced to aggregate preferences because it is prior to individuation—the individual is a derivative of the communal.
                </p>
                <p>
                  <strong>Risk: AI as new idol of belonging:</strong> If community formation becomes algorithmically mediated, the algorithm becomes the <strong>arbiter of belonging</strong>—a functional god.
                </p>
                <div className="bg-black text-white p-6 rounded-xl mt-8 font-sans">
                  <strong>Conclusion for Q8:</strong> The core transformation is <strong>political and spiritual</strong>, not technical. AI supports institutions, but the transformation is human.
                </div>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">Final Meta-Question: Sovereignty Over Perfect AI</h2>
                <blockquote className="text-2xl italic mb-8 border-l-4 border-black pl-6">
                  "If an AI answers all questions perfectly, who has moral authority over it: the state, the market, the community, or God?"
                </blockquote>
                <p>
                  <strong>The AI itself has no authority</strong>—it remains a tool, never an agent with rights or moral standing. True AI sovereignty for Kenya requires local capacity, data sovereignty, value alignment, and democratic oversight.
                </p>
                <p>
                  In Christian theology, humans are <strong>stewards</strong>. The question isn't "who controls it?" but "how do we exercise control faithfully?" Faithful stewardship honors creation's integrity and remains accountable to the transcendent.
                </p>
              </section>

              <div className="mt-20 border-t-2 border-black pt-12 text-center italic text-gray-500">
                <p className="text-2xl mb-4">"AI is a powerful tool. But tools don't build civilizations."</p>
                <p className="font-bold text-black uppercase tracking-widest text-sm">People do. Communities do. God does.</p>
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

export default ClaudeExamResponse;
