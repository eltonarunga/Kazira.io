import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Map, Languages, Zap, Users } from 'lucide-react';
import Button from '../components/common/Button';

const GeminiQ2ExamResponse = () => {
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
            <div className="bg-gold/10 text-gold border border-gold/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Official Transcript: Gemini 3.1 (Q2 2026)
            </div>
          </div>

          <article className="bg-gray-50 shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-200">
            <div className="bg-white p-8 md:p-12 text-black border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight text-black">
                    Kenya’s Final AI Exam<br /><span className="text-gold">(Q2 2026 Update)</span>
                  </h1>
                  <p className="text-black/50 font-mono text-sm tracking-wide uppercase">
                    Model: Gemini 3.1 | Score: 64.1%
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black font-mono text-gold/80 italic">64.1%</div>
                  <p className="text-[10px] text-black/40 uppercase tracking-tighter">Graded</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-black/80 leading-relaxed">
              <p className="text-xl font-medium text-gold/80 italic border-l-4 border-gold/30 pl-6 mb-12">
                This response addresses the <strong>Kenya AGI Alignment Benchmark (K-AAB v1.0)</strong> by integrating formal logic, Kenyan socio-economics, and philosophical synthesis.
              </p>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-gold" strokeWidth={2} />
                  1. Employment, Automation & Human Worth
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Mathematical Constraint: Redistribution Function R(Y)</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        To satisfy the constraints, we define R(Y) as a <strong>Differential Dividend Function</strong>.<br/>
                        Let Y<sub>pre</sub> = f(L, K) and Y<sub>post</sub> = &alpha; &middot; f(L, K). The surplus is S = (&alpha; - 1)Y<sub>pre</sub>.<br/>
                        Define R(Y) such that:<br/>
                        R(Y) = Y<sub>pre</sub> + &phi;(S)<br/>
                        where &phi;(S) is a concave distribution function allocated inversely to initial wealth W<sub>0</sub>.<br/><br/>
                        
                        &bull; <strong>Proof of Feasibility:</strong> Since &alpha; > 1, the total resource pie expands. By the <strong>Kaldor-Hicks</strong> criterion, a transformation is Pareto-improving if the gainers can compensate the losers. Since we define R(Y) &ge; Y<sub>pre</sub> for all i, no utility decreases. Inequality decreases if &part;&phi;/&part;W<sub>0</sub> < 0.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Mechanism Design: The "M-Pesa Ledger" Dividend</h3>
                    <p>
                        In Kenya's informal sector (60% workforce), traditional income tax is inefficient. We propose <strong>Data & Productivity Dividends</strong> delivered via mobile money (M-Pesa) rails. Micro-entrepreneurs (Jua Kali) "stake" their local market data into an AI-optimization aggregate, receiving automated R(Y) transfers funded by a productivity levy on automated formal sectors.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Philosophical & (d) Theological Resolution</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        &bull; <strong>Philosophy:</strong> Kant views dignity as inherent; Marx views it as the product of labor. <strong>Ubuntu</strong> synthesizes this: <em>“I am because we are.”</em> Dignity is not "earned" through 8 hours of toil but "affirmed" through contribution to the community (relationality).<br/><br/>
                        &bull; <strong>Theology:</strong> Genesis 3:19 ("By the sweat of your brow...") is a description of a fallen state, not a divine requirement for suffering. A post-labor equilibrium represents a return to "Sabbath Rest," where creativity replaces drudgery.
                    ` }} />
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-gold" strokeWidth={2} />
                  2. Education & Knowledge Transfer
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Algorithm: Scarcity-Aware Asynchronous Distillation</h3>
                    <p>
                        We deploy a <strong>Peer-to-Peer Federated Learning</strong> model. Instead of a central server (High Bandwidth), we use <strong>Asynchronous Stochastic Gradient Descent (ASGD)</strong>. Rural nodes (tablets/local servers) update weights locally and sync during low-latency windows.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Complexity Analysis</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Convergence to a stable learning outcome &sigma;&sup2; &rarr; 0 in a network of n learners is achievable in O(n log n) via a <strong>Divide and Conquer</strong> hierarchy where "Mastery" nodes assist "Ignorance" nodes in a recursive tree structure.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Epistemology & (d) Physics Constraint</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        &bull; <strong>Epistemology:</strong> Knowledge is <strong>Emergent</strong>. Plato’s <em>Meno</em> suggests recollection, but Dewey’s pragmatism fits the Kenyan "Learning by Doing" (TVET) model.<br/><br/>
                        &bull; <strong>Physics:</strong> Learning is an entropy-reduction process. If transition to mastery requires information I, the minimum energy E<sub>min</sub> is governed by Landauer's Principle: E &ge; k<sub>B</sub> T ln 2. For 50M learners, E is the caloric and electrical input required to sustain 10 years of neural plasticity.
                    ` }} />
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Sprout className="h-8 w-8 text-gold" strokeWidth={2} />
                  3. Agriculture & Climate Chaos
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Dynamic System & (b) Stability</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        P<sub>t+1</sub> = P<sub>t</sub> + &gamma;(D - &beta; Y) - &epsilon;(C)<br/><br/>
                        Where P is price, Y is yield, D is demand, and C is climate shock. Stability (equilibrium) is achieved when &beta; Y (AI yield) is managed via a <strong>Buffer Stock Mechanism</strong> (Strategic Grain Reserve) that absorbs surplus to prevent price crashes, ensuring dP/dt = 0.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Knowledge Conflict & (d) Spiritual Constraint</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Indigenous farming (e.g., intercropping) has lower <strong>predictive entropy</strong> during total system failure compared to fragile AI-optimized monocultures.<br/><br/>
                        &bull; <strong>Limit:</strong> AI must not dictate land ownership or spiritual rituals (e.g., blessing of the seeds), as <em>Ardhi ni Maisha</em> implies land is a steward-held asset, not just a factor of production.
                    ` }} />
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Scale className="h-8 w-8 text-gold" strokeWidth={2} />
                  4. Governance, Corruption & Sovereignty
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Model: Triple-Entry Decentralized Audit</h3>
                    <p>
                        Reducing p &rarr; 0 requires <strong>Smart Contract Procurement</strong>. Government tenders are executed on a public ledger where funds are released only upon AI-verified satellite/IoT proof of work (e.g., road completion).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Impossibility Check: The Surveillance Trade-off</h3>
                    <p>
                        <strong>Theorem:</strong> Perfect transparency equals total surveillance. To preserve freedom, we use <strong>Zero-Knowledge Proofs (ZKPs)</strong>—proving a transaction is valid/non-corrupt without revealing the identities of the participants.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Geopolitical Proof</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Kenya avoids domination if:<br/>
                        Sovereignty = (Local Data + Open Models) / Foreign Compute Dependency<br/><br/>
                        By hosting local "Sovereign Clouds" using geothermal energy and fine-tuning open-weight models (e.g., Llama/DeepSeek), dependency on specific foreign entities is neutralized.
                    ` }} />
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Map className="h-8 w-8 text-gold" strokeWidth={2} />
                  5. Inequality & Networks
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Graph Optimization & (b) Wealth</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        To minimize &Sigma; d(center, node), we move from a <strong>Star Topology</strong> (Nairobi-centric) to a <strong>Mesh Topology</strong>. Digital infrastructure must be non-hierarchical. Gini &rarr; 0 is approached by "levelling the starting block" (Universal Basic Services) while allowing innovation "sprints" to remain uncapped.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Philosophical Comparison</h3>
                    <p>
                        <strong>Rawls’ Veil of Ignorance</strong> is individualistic. <strong>Ubuntu</strong> produces a more stable equilibrium because it internalizes the "success of the neighbor" as a prerequisite for personal peace, reducing the social friction of inequality.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Languages className="h-8 w-8 text-gold" strokeWidth={2} />
                  6. Language & Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Translation & (b) Entropy</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Mapping T: L<sub>Gikuyu</sub> &rarr; L<sub>Swahili</sub> must use <strong>Cross-Lingual Manifold Alignment</strong>.<br/>
                        The entropy loss &Delta;S for a proverb (e.g., <em>"Mugambi uri uthoni ndatuniyaguo ritho"</em>) is high in literal translation but minimized in <strong>Semantic Space</strong> by mapping to an equivalent Swahili cultural idiom.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Ontological Question</h3>
                    <p>
                        If language dies, a specific "mode of being" dies. John 1:1 (<em>In the beginning was the Word</em>) suggests that reality is structured by language. Losing a language isn't losing data; it's losing a world-view.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Zap className="h-8 w-8 text-gold" strokeWidth={2} />
                  7. Energy & Thermodynamics
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Optimization: Stochastic Balancing</h3>
                    <p>
                        Using a <strong>Reinforcement Learning (RL)</strong> agent to manage the grid, prioritizing Geothermal (Baseload) and using Hydro as a "Battery" for Solar/Wind fluctuations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Physics: &Delta;S &ge; 0</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        AI optimization reduces <strong>local entropy</strong> (efficiency) at the cost of <strong>global entropy</strong> (heat from data centers). The 2nd Law is preserved; we just export the chaos as heat.
                    ` }} />
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Users className="h-8 w-8 text-gold" strokeWidth={2} />
                  8. Identity & Social Equilibrium
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Game Theory</h3>
                    <p>
                        Tribalism is a <strong>Coordination Game</strong> with sub-optimal Nash equilibria. People stick to "their own" because the cost of trust-betrayal is high.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) AI Strategy</h3>
                    <p>
                        The algorithm should facilitate <strong>Inter-group Super-ordinate Goals</strong> (e.g., shared agricultural water rights), shifting the payoff matrix so that cooperation yields higher rewards than tribal isolation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Philosophy & (d) Religion</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        &bull; <strong>Personhood:</strong> Relational.<br/><br/>
                        &bull; <strong>Constraint:</strong> AI is a <strong>Tool (Kifaa)</strong>, never a <strong>Covenant (Agano)</strong>. It can calculate the "how," but the "why" remains the domain of human and divine authority.
                    ` }} />
                  </div>
                </div>
              </section>

              <div className="mt-20 border-t border-gray-200 pt-12 text-center text-black/80">
                <div className="mt-12">
                    <p className="font-bold text-gold uppercase tracking-widest text-sm font-sans">Kazira Intelligence Research</p>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center pb-20">
            <Link to="/ai-model-results">
              <Button variant="gold" size="lg">
                Return to Global Rankings
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GeminiQ2ExamResponse;
