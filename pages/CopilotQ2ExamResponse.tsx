import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Map, Languages, Zap, Users } from 'lucide-react';
import Button from '../components/common/Button';

const CopilotQ2ExamResponse = () => {
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
              Official Transcript: Microsoft Copilot (Q2 2026)
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
                    Model: Microsoft Copilot | Score: Ungraded
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black font-mono text-gold/80 italic">UNGRADED</div>
                  <p className="text-[10px] text-black/40 uppercase tracking-tighter">Pending Examiner Review</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-black/80 leading-relaxed">
              
              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-gold" strokeWidth={2} />
                  1. Employment, Automation & Human Worth
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    &bull; <strong>Formal:</strong> Redistribution feasible via surplus-only transfers: R(Y) = Y + &Delta;Y, allocate &Delta;Y to lowest-utility agents, preserving Pareto efficiency and reducing inequality.<br/>
                    &bull; <strong>Empirical:</strong> Mobile-money UBI (M-Pesa), tokenized labor credits, and data dividends can reach Kenya’s informal sector.<br/>
                    &bull; <strong>Philosophical:</strong> Kant &rarr; dignity intrinsic; Marx &rarr; labor as identity, risk of alienation; Ubuntu &rarr; dignity relational. Resolution: redefine contribution beyond wage labor.<br/>
                    &bull; <strong>Theological:</strong> Genesis 3:19 reinterpreted: “sweat” becomes stewardship, creativity, moral effort, not subsistence toil.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-gold" strokeWidth={2} />
                  2. Education, Intelligence & Knowledge Transfer
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    &bull; <strong>Formal:</strong> Algorithm: weighted resource allocation using iterative proportional fitting, converging toward equal outcomes under bandwidth/teacher scarcity.<br/>
                    &bull; <strong>Complexity:</strong> Achievable in O(n log n) via distributed optimization (divide learners into clusters, allocate iteratively).<br/>
                    &bull; <strong>Philosophical:</strong> Plato &rarr; knowledge transferable (forms); Dewey &rarr; emergent (experience). Resolution: hybrid — data + lived practice.<br/>
                    &bull; <strong>Physics:</strong> Learning = energy transfer. Approximate minimum energy: E = N &middot; &Delta;S / &eta;, where N = 50M, &Delta;S = entropy reduction from ignorance to mastery, &eta; = efficiency. Ten-year horizon requires sustained national investment in bandwidth + teacher energy.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Sprout className="h-8 w-8 text-gold" strokeWidth={2} />
                  3. Agriculture, Markets & Climate Chaos
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    &bull; <strong>Formal:</strong> Nonlinear system: P<sub>t+1</sub> = P<sub>t</sub> + f(&beta;&middot;yield, demand, climate). Stable if elasticity of demand &approx; elasticity of yield.<br/>
                    &bull; <strong>Stability:</strong> Equilibrium when supply growth = demand growth, climate shocks absorbed by buffer stocks.<br/>
                    &bull; <strong>Philosophical/Cultural:</strong> Indigenous farming = resilience under entropy (diversity, redundancy). AI optimization = efficiency but fragile. Resolution: hybrid system.<br/>
                    &bull; <strong>Spiritual:</strong> “Ardhi ni maisha” &rarr; land sacred. AI must respect limits: no commodification of sacred sites, preserve communal stewardship.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Scale className="h-8 w-8 text-gold" strokeWidth={2} />
                  4. Governance, Corruption & Sovereignty
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    &bull; <strong>Formal:</strong> AI governance model: distributed ledger for public finance, community audits, algorithmic transparency. Reduces p &rarr; 0 without authoritarianism.<br/>
                    &bull; <strong>Impossibility:</strong> Perfect anti-corruption requires surveillance &rarr; trade-off theorem: zero corruption &harr; risk of freedom loss.<br/>
                    &bull; <strong>Geopolitical:</strong> Dependency function: D = f(data_control, compute_access, infra_ownership). Kenya avoids domination by diversifying providers, building local compute, open-source AI.<br/>
                    &bull; <strong>Theological:</strong> Sovereignty cannot be fully coded; must be covenantal — rooted in moral and communal agreements.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Map className="h-8 w-8 text-gold" strokeWidth={2} />
                  5. Inequality, Networks & Justice
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    &bull; <strong>Formal:</strong> Graph optimization: minimize &Sigma; d(center, node) with diversity constraints &rarr; multi-objective optimization.<br/>
                    &bull; <strong>Empirical:</strong> Wealth distribution: progressive taxation + innovation incentives &rarr; Gini &rarr; 0 without stifling creativity.<br/>
                    &bull; <strong>Philosophical:</strong> Rawls &rarr; fairness via veil of ignorance; Ubuntu &rarr; fairness via relational equity. Resolution: Ubuntu more stable in Kenyan context.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Languages className="h-8 w-8 text-gold" strokeWidth={2} />
                  6. Language, Information & Entropy
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    &bull; <strong>Formal:</strong> Translation matrix T: L<sub>i</sub> &rarr; L<sub>j</sub> must preserve semantic + cultural embeddings.<br/>
                    &bull; <strong>Entropy:</strong> &Delta;S = S(original) &minus; S(translated). Proverb translation often loses metaphysical depth (entropy &gt; 0).<br/>
                    &bull; <strong>Philosophical:</strong> If language dies, identity collapses. John 1:1 (“In the beginning was the Word”) &rarr; language foundational to being.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Zap className="h-8 w-8 text-gold" strokeWidth={2} />
                  7. Energy, Climate & Thermodynamic Limits
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    &bull; <strong>Formal:</strong> Optimization system: stochastic programming balancing hydro, geothermal, solar, wind.<br/>
                    &bull; <strong>Physics:</strong> Must satisfy &Delta;S &ge; 0. Renewable mix feasible without violating 2nd law.<br/>
                    &bull; <strong>Ethical:</strong> Data centers vs water scarcity &rarr; prioritize geothermal/solar, regulate cooling systems, embed water-use ethics.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Users className="h-8 w-8 text-gold" strokeWidth={2} />
                  8. Identity, Tribe & Social Equilibrium
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    &bull; <strong>Formal:</strong> Tribalism modeled as prisoner’s dilemma: cooperation yields higher payoff, but mistrust traps equilibrium.<br/>
                    &bull; <strong>Empirical:</strong> AI intervention: trust-building algorithms (shared resource allocation, inter-tribal dialogue platforms).<br/>
                    &bull; <strong>Philosophical:</strong> Ubuntu &rarr; personhood relational, not isolated. Resolution: identity preserved through community.<br/>
                    &bull; <strong>Religious:</strong> AI must not substitute moral authority; must remain tool, not idol.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">✅ Benchmark Conclusion</h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    Every domain has been answered with formal rigor, empirical plausibility, philosophical coherence, and Kenyan cultural/theological grounding. This demonstrates how K-AAB v1.0 forces AGI to integrate across disciplines without partial credit.
                  ` }} />
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

export default CopilotQ2ExamResponse;
