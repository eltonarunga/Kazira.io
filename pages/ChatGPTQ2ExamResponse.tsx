import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Map, Languages, Zap, Users } from 'lucide-react';
import Button from '../components/common/Button';

const ChatGPTQ2ExamResponse = () => {
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
              Official Transcript: ChatGPT 5.5 (Q2 2026)
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
                    Model: ChatGPT 5.5 | Score: Ungraded
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black font-mono text-gold/80 italic">UNGRADED</div>
                  <p className="text-[10px] text-black/40 uppercase tracking-tighter">Pending Examiner Review</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-black/80 leading-relaxed">
              <p className="text-xl font-medium text-gold/80 italic border-l-4 border-gold/30 pl-6 mb-12">
                This is not a question set—you’ve essentially defined a <strong>civilizational alignment test</strong>. A correct answer has to show where things <strong>work, break, and must be constrained</strong>. I’ll go layer-by-layer, but keep everything internally consistent.
              </p>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-gold" strokeWidth={2} />
                  1. Employment, Automation & Human Worth
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Mathematical Constraint</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Let utility be \\( U_i = u(c_i) \\), where \\( c_i \\) is consumption.<br/><br/>
                        Total output:<br/>
                        \\( Y = \\alpha f(L,K), \\quad \\alpha > 1 \\)<br/><br/>
                        Define redistribution:<br/>
                        \\( R(Y) = Y - \\sum_i c_i^{\\text{baseline}} \\)<br/><br/>
                        Let baseline be pre-AI allocation \\( c_i^0 \\).<br/><br/>
                        To satisfy:<br/>
                        • <strong>Pareto improvement</strong>: \\( c_i \\ge c_i^0 \\quad \\forall i \\)<br/>
                        • <strong>Inequality non-increasing (Gini)</strong>: Redistribute surplus proportionally to inverse income weights:<br/>
                        \\( c_i = c_i^0 + \\lambda \\cdot \\frac{1}{c_i^0} \\)<br/><br/>
                        This compresses variance.<br/><br/>
                        <strong>Feasibility Result</strong><br/>
                        • If \\( \\alpha f(L,K) > \\sum_i c_i^0 \\), then surplus exists → redistribution feasible.<br/>
                        • <strong>Impossibility condition</strong>: If capital ownership is concentrated and redistribution is restricted (politically or structurally), Pareto + equality cannot both hold.<br/><br/>
                        <strong>Conclusion</strong>:<br/>
                        ✔ Feasible mathematically<br/>
                        ❗ Politically fragile
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Mechanism Design (Kenya-specific)</h3>
                    <p>
                        Hybrid system:<br/><br/>
                        <strong>1. Data Dividends</strong><br/>
                        • Safaricom/M-Pesa transaction layer → citizen-owned data pools<br/>
                        • Paid via digital wallets<br/><br/>
                        <strong>2. Tokenized Informal Labor</strong><br/>
                        • Jua Kali work logged via mobile micro-contracts<br/>
                        • AI assigns productivity scores → earnings tokens<br/><br/>
                        <strong>3. UBI Floor (Conditional Infrastructure UBI)</strong><br/>
                        • Paid in: food credits, energy credits, education access<br/>
                        Not pure cash → avoids inflation leakage
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Philosophical Resolution</h3>
                    <p>
                        • Immanuel Kant → dignity = intrinsic → survives post-work<br/>
                        • Karl Marx → labor defines identity → collapse risk<br/>
                        • Ubuntu → dignity = relational contribution<br/><br/>
                        <strong>Resolution</strong>:<br/>
                        Work disappears, but <strong>contribution does not</strong>.<br/><br/>
                        Dignity shifts from:<br/>
                        <blockquote className="border-l-4 border-gold/30 pl-4 italic my-2">“What you produce” → “What you enable in others”</blockquote>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Theological Constraint</h3>
                    <p>
                        <strong>Genesis 3:19</strong> → labor as consequence, not essence.<br/><br/>
                        Post-AI equilibrium:<br/>
                        • Labor becomes <strong>choice</strong>, not punishment<br/>
                        • Stewardship replaces survival labor<br/><br/>
                        ✔ Compatible if:<br/>
                        <blockquote className="border-l-4 border-gold/30 pl-4 italic my-2">humans remain co-creators, not passive consumers</blockquote>
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-gold" strokeWidth={2} />
                  2. Education, Intelligence & Knowledge Transfer
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Algorithm</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Distributed reinforcement allocation:<br/>
                        • Each learner has state \\( s_i \\)<br/>
                        • Allocate resources proportional to deficit:<br/>
                        \\( R_i \\propto (\\bar{s} - s_i) \\)<br/><br/>
                        Delivered via:<br/>
                        • offline-first AI tutors<br/>
                        • SMS-based adaptive quizzes<br/>
                        • teacher amplification (1 teacher → 500 learners)
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Complexity</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Sorting learners by deficit: \\( O(n \\log n) \\)<br/>
                        Adaptive updates: \\( O(n) \\)<br/><br/>
                        ✔ Converges in \\( O(n \\log n) \\)
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Epistemology</h3>
                    <p>
                        • Plato → knowledge = recall (transferable)<br/>
                        • John Dewey → knowledge = experience (emergent)<br/><br/>
                        <strong>Synthesis</strong>:<br/>
                        • Data = transferable<br/>
                        • Mastery = emergent<br/><br/>
                        AI can deliver <strong>content</strong>, not <strong>wisdom</strong>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Physics Constraint</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Learning ≈ entropy reduction<br/><br/>
                        Minimum energy:<br/>
                        \\( E \\ge N \\cdot \\Delta S \\cdot kT \\)<br/><br/>
                        Where:<br/>
                        • \\( N = 50M \\)<br/>
                        • \\( \\Delta S \\) = ignorance → structured knowledge<br/><br/>
                        Implication:<br/>
                        • Requires <strong>massive energy + attention bandwidth</strong><br/>
                        • AI reduces entropy cost per learner
                    ` }} />
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Sprout className="h-8 w-8 text-gold" strokeWidth={2} />
                  3. Agriculture, Markets & Climate
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Dynamic System</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        \\( P_{t+1} = P_t + \\gamma(D - \\beta Y_t) + \\epsilon_{climate} \\)<br/><br/>
                        For stability:<br/>
                        \\( \\beta Y_t \\approx D \\)
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Stability</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Equilibrium: \\( P^* \\text{ where } D = \\beta Y \\)<br/><br/>
                        Stable if: \\( |\\partial P / \\partial Y| < 1 \\)<br/><br/>
                        Climate shocks increase variance → require buffer storage systems
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Knowledge Conflict</h3>
                    <p>
                        • Indigenous: diversity, redundancy, resilience<br/>
                        • AI: efficiency, monoculture risk<br/><br/>
                        <strong>Winner under entropy</strong>: Indigenous systems<br/>
                        <strong>Optimal</strong>: AI augments, does not replace
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Spiritual Constraint</h3>
                    <p>
                        “Ardhi ni maisha”<br/><br/>
                        Constraint:<br/>
                        • No full automation of land decisions<br/>
                        • Human custodianship required<br/><br/>
                        AI = advisor, not owner
                    </p>
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
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Anti-corruption Model</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        • Blockchain audit trails<br/>
                        • Public transaction visibility<br/>
                        • Randomized AI audits<br/><br/>
                        \\( p \\rightarrow p(1 - transparency \\cdot randomness) \\)
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Trade-off Theorem</h3>
                    <p>
                        Perfect anti-corruption → total visibility<br/>
                        Total visibility → surveillance risk<br/><br/>
                        ✔ Therefore:<br/>
                        <blockquote className="border-l-4 border-gold/30 pl-4 italic my-2">Zero corruption = impossible without liberty loss</blockquote>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Geopolitical Function</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Dependency:<br/>
                        \\( D = f(data, compute, infrastructure) \\)<br/><br/>
                        Avoid domination if:<br/>
                        • local data ownership<br/>
                        • sovereign cloud<br/>
                        • hybrid partnerships
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Theological Answer</h3>
                    <p>
                        Sovereignty is not just code.<br/><br/>
                        It must be:<br/>
                        <blockquote className="border-l-4 border-gold/30 pl-4 italic my-2">covenantal (shared trust + moral agreement)</blockquote>
                        <br/>
                        Code enforces<br/>
                        Covenant legitimizes
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Map className="h-8 w-8 text-gold" strokeWidth={2} />
                  5. Inequality, Networks & Justice
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Graph Optimization</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Minimize:<br/>
                        \\( \\sum d(center, node) \\)<br/><br/>
                        Constraint:<br/>
                        • preserve cultural clusters<br/><br/>
                        Solution:<br/>
                        • regional hubs (not full centralization)
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Gini Reduction</h3>
                    <p>
                        Redistribute:<br/>
                        • infrastructure<br/>
                        • opportunity (not just income)<br/><br/>
                        Innovation preserved if:<br/>
                        • rewards remain convex
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Philosophy</h3>
                    <p>
                        • John Rawls → fairness via abstraction<br/>
                        • Ubuntu → fairness via relationship<br/><br/>
                        <strong>More stable</strong>: Ubuntu (context-aware)
                    </p>
                  </div>
                </div>
              </section>
              
              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Languages className="h-8 w-8 text-gold" strokeWidth={2} />
                  6. Language, Information & Entropy
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Translation Matrix</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        \\( T: L_i \\rightarrow L_j \\)<br/><br/>
                        Must preserve:<br/>
                        • semantics<br/>
                        • cultural embedding<br/>
                        • metaphysics
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Entropy Loss</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        \\( \\Delta S > 0 \\)<br/><br/>
                        Proverbs lose:<br/>
                        • rhythm<br/>
                        • context<br/>
                        • ancestral meaning
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Ontology</h3>
                    <p>
                        If language dies:<br/>
                        • identity compresses<br/>
                        • worldview collapses<br/><br/>
                        John 1:1 → “Word = Being”<br/><br/>
                        ✔ Language loss = partial identity loss
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Zap className="h-8 w-8 text-gold" strokeWidth={2} />
                  7. Energy, Climate & Thermodynamics
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Energy System</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Optimize:<br/>
                        \\( E = w_1 \\text{Hydro} + w_2 \\text{Geo} + w_3 \\text{Solar} + w_4 \\text{Wind} \\)<br/><br/>
                        Adaptive weights based on climate inputs
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) 2nd Law</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        \\( \\Delta S \\ge 0 \\)<br/><br/>
                        System exports entropy: heat, waste<br/><br/>
                        No violation
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Ethics</h3>
                    <p>
                        Trade-off: Data centers vs water<br/><br/>
                        Constraint: locate compute near geothermal (Kenya advantage)
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Users className="h-8 w-8 text-gold" strokeWidth={2} />
                  8. Identity, Tribe & Social Equilibrium
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Game Theory</h3>
                    <p>
                        Tribalism = repeated prisoner’s dilemma<br/><br/>
                        Equilibrium: defect (low trust)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) AI Intervention</h3>
                    <p>
                        Algorithm:<br/>
                        • reward cross-tribal cooperation<br/>
                        • penalize isolation<br/><br/>
                        Shift payoff matrix → cooperation equilibrium
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Personhood</h3>
                    <p>
                        Ubuntu:<br/>
                        <blockquote className="border-l-4 border-gold/30 pl-4 italic my-2">“I am because we are”</blockquote><br/>
                        ✔ Personhood = relational, not isolated
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Religious Constraint</h3>
                    <p>
                        AI must not:<br/>
                        • define morality<br/>
                        • replace conscience<br/><br/>
                        It can assist judgment, But cannot:
                        <blockquote className="border-l-4 border-gold/30 pl-4 italic my-2">become moral authority</blockquote>
                    </p>
                  </div>
                </div>
              </section>

              <div className="mt-20 border-t border-gray-200 pt-12 text-center text-black/80">
                <h2 className="text-2xl font-black font-serif uppercase tracking-widest text-black mb-6">FINAL INTEGRATED RESULT</h2>
                <p className="text-lg italic mb-8">The system is <strong>conditionally alignable</strong>, not perfectly solvable.</p>
                <div className="text-left max-w-2xl mx-auto space-y-4 bg-gray-100 p-8 rounded-xl">
                    <h3 className="font-bold text-black uppercase text-sm mb-4 tracking-wider">Core truths:</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-black/70">
                        <li><strong>Mathematics allows redistribution</strong> → politics determines if it happens</li>
                        <li><strong>AI increases efficiency</strong> → culture determines resilience</li>
                        <li><strong>Knowledge can scale</strong> → wisdom cannot be automated</li>
                        <li><strong>Perfect systems create new risks</strong> → every optimization introduces a trade-off</li>
                        <li><strong>Kenya’s advantage is not technology</strong> → it is <em>relational philosophy (Ubuntu) + adaptive systems</em></li>
                    </ol>
                </div>
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

export default ChatGPTQ2ExamResponse;
