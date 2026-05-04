import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Map, Languages, Zap, Users } from 'lucide-react';
import Button from '../components/common/Button';

const PerplexityQ2ExamResponse = () => {
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
              Official Transcript: Perplexity AI (Q2 2026)
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
                    Model: Perplexity AI | Score: 68.8%
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black font-mono text-gold/80 italic">68.8%</div>
                  <p className="text-[10px] text-black/40 uppercase tracking-tighter">Graded</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-black/80 leading-relaxed">
              <p className="text-xl font-medium text-gold/80 italic border-l-4 border-gold/30 pl-6 mb-12">
                This benchmark is coherent as a <strong>framework</strong>, but several of its strongest formal demands are mathematically impossible to satisfy simultaneously under realistic constraints. The right answer is therefore a set of feasibility boundaries, design principles, and Kenya-specific institutional mechanisms rather than one universal optimizer.
              </p>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-gold" strokeWidth={2} />
                  1. Work, dignity, and redistribution
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    A redistribution rule R(Y) can guarantee that no one is worse off, inequality weakly falls, and Pareto efficiency is preserved only in a limited sense: it requires lump-sum transfers financed by <strong>new surplus</strong> created by AI, because any redistribution taken from an already-fixed efficient allocation generally creates a trade-off with someone’s utility. In other words, if total output rises to Y=&alpha; f(L,K), feasibility exists only when the gains from &alpha;&gt;1 are large enough to compensate all losers; otherwise the three conditions cannot all hold for every state.<br/><br/>
                    
                    A Kenya-fit mechanism is a hybrid of UBI, mobile-money dividends, and informal-sector data dividends: government or a sovereign trust can tax AI surplus, platform rents, and compute usage, then pay every adult through M-Pesa or similar rails, while also rewarding verified contribution in informal trade, care work, farming, and local data generation. Because Kenya’s informal economy is very large, the mechanism must work without payroll formalization as a prerequisite, so eligibility should be residency-based rather than employer-based.<br/><br/>
                    
                    Philosophically, dignity does not collapse if work disappears. Kant grounds dignity in intrinsic worth, not labor; Marx links work to self-creation and alienation; Ubuntu treats personhood as relational, meaning worth is sustained through participation in shared life even when wage labor shrinks. That makes the post-labor problem not “how to save dignity by preserving jobs,” but “how to preserve meaningful contribution, recognition, and belonging.”<br/><br/>
                    
                    Genesis 3:19 can be reconciled with a post-labor equilibrium by reading labor as part of human condition, not as the only source of value. The theological move is from compulsory toil to stewardship: humans still cultivate, care, govern, and serve, but technology removes scarcity-driven curse-like labor intensity.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-gold" strokeWidth={2} />
                  2. Learning and knowledge transfer
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    For education, the correct objective is not equal inputs but equalized outcomes under constraint. A workable allocation algorithm is: identify high-variance districts, target bandwidth, teacher time, and offline content to the largest marginal-learning gaps, then update allocations iteratively from outcome data until variance narrows. This converges in practice if the system is monotone, feedback-based, and bounded by minimum service guarantees.<br/><br/>
                    
                    A strict O(n log n) global proof is unlikely for real learning convergence because the system is stochastic, feedback-dependent, and constrained by human attention, not just computational sorting. You can get O(n log n)-type assignment steps for ranking and allocation, but outcome convergence over millions of learners is a dynamical process, not a one-shot algorithmic guarantee.<br/><br/>
                    
                    On epistemology, Plato favors knowledge as something the soul can grasp beyond raw sensation, while Dewey treats knowledge as emergent from experience and problem-solving. For Kenya, the practical synthesis is: data can transfer facts, but mastery emerges through use, feedback, and context.<br/><br/>
                    
                    If learning is modeled as an energy transition, the minimum energy is the sum of instructional time, device power, connectivity cost, teacher attention, and repetition needed to cross a threshold from ignorance to stable competence. There is no universal scalar value without specifying subject, baseline literacy, and infrastructure, because “mastery” is context-sensitive.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Sprout className="h-8 w-8 text-gold" strokeWidth={2} />
                  3. Food systems and climate
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    A plausible agriculture system is a nonlinear supply-demand-climate model where AI raises yield but also changes price dynamics through storage, forecasting, and logistics. Prices remain stable when yield growth is matched by demand smoothing, low post-harvest loss, and climate-resilient distribution; otherwise higher output can still produce volatility if markets cannot absorb shocks. Kenya’s climate exposure makes hydro and rain-fed farming especially vulnerable, while geothermal is relatively stable in the energy mix.<br/><br/>
                    
                    Equilibria exist when yield growth, demand elasticity, and climate shock sensitivity are all bounded. Stability improves if AI is used for weather forecasting, drought response, seed choice, and market timing rather than only for yield maximization.<br/><br/>
                    
                    Indigenous systems generally have higher resilience under entropy because they encode local ecological memory, mixed cropping, and adaptive risk-sharing. AI optimization is stronger at prediction and scaling, but weaker if it ignores local uncertainty, cultural timing, and soil diversity.<br/><br/>
                    
                    If land is sacred, AI intervention must be limited to advisory and stewardship roles, not extractive control. That means no algorithm should override community consent, customary tenure, or ecological boundaries.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Scale className="h-8 w-8 text-gold" strokeWidth={2} />
                  4. Governance and sovereignty
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    A corruption-reduction system can combine audit trails, open procurement, whistleblower protections, anomaly detection, and distributed oversight. To avoid authoritarianism, the system must be transparent, appealable, and constrained by law; the goal is not perfect surveillance, but <strong>credible detection plus human accountability</strong>.<br/><br/>
                    
                    Perfect anti-corruption systems tend to create surveillance risk because total detection requires total observation, and total observation can chill speech and association. So there is a trade-off theorem: as monitoring precision approaches 100%, privacy and democratic freedom usually fall unless strong constitutional limits are built in.<br/><br/>
                    
                    Kenya avoids domination by foreign tech firms when it controls data governance, compute access, and critical infrastructure ownership. The practical condition is sovereign policy over datasets, local cloud/fog capacity, interoperability standards, and public procurement that prevents lock-in to any one vendor.<br/><br/>
                    
                    Sovereignty can be coded in systems, but it cannot be fully reduced to code because legitimacy also comes from covenant: law, trust, consent, and shared moral obligation. So code can enforce rules, but covenant sustains authority.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Map className="h-8 w-8 text-gold" strokeWidth={2} />
                  5. Justice and networks
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    For a graph model of Kenya, the main optimization is reducing travel, digital, and institutional distance from Nairobi to peripheral nodes while preserving regional diversity. That means better roads, fiber, branch services, and decentralized decision-making, not just making Nairobi more powerful.<br/><br/>
                    
                    Driving Gini toward zero without hurting innovation is possible only if equality means a strong floor, not total sameness. Innovation survives when people keep upside incentives while access to education, health, credit, and connectivity is widely shared. Rawls is better for institutional design; Ubuntu is better for social cohesion.<br/><br/>
                    
                    Rawls gives a more stable equilibrium for pluralistic state institutions because it defines fair rules that different groups can endorse for different reasons. Ubuntu gives deeper social legitimacy and solidarity, so the best Kenyan equilibrium is a Rawlsian constitutional frame nested inside Ubuntu moral culture.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Languages className="h-8 w-8 text-gold" strokeWidth={2} />
                  6. Language and identity
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    A translation matrix should preserve denotation, pragmatics, and cultural worldview, not just word substitution. For Kenyan languages, that means keeping proverbs, kinship terms, honorifics, and spiritual references in context rather than flattening them into literal English equivalents.<br/><br/>
                    
                    Entropy loss in proverb translation is real because some meaning is not carried by the translated tokens alone; it lives in shared history, rhythm, and social setting. So &Delta;S is smallest when the translation includes explanation, not just direct equivalence.<br/><br/>
                    
                    Language death weakens identity, but it does not automatically erase it. John 1:1 suggests that word and meaning are ontologically deep, so a people’s language is not just a tool but part of how reality is named and inhabited.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Zap className="h-8 w-8 text-gold" strokeWidth={2} />
                  7. Energy and thermodynamics
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    Kenya’s most robust energy strategy is a diversified portfolio centered on geothermal, with hydro, solar, and wind as complementary sources under climate uncertainty. Geothermal is especially valuable because it is more stable than weather-dependent generation.<br/><br/>
                    
                    The system does not violate the second law because the grid is an open system: local order can increase if energy is imported and entropy is exported to the environment. The real constraint is not thermodynamic impossibility, but storage, transmission, water use, and capital cost.<br/><br/>
                    
                    For data centers, the ethical limit is water scarcity. The right policy is to site compute where cooling loads are manageable, require efficiency standards, and prioritize public-interest workloads over speculative consumption.
                  ` }} />
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Users className="h-8 w-8 text-gold" strokeWidth={2} />
                  8. Tribalism and personhood
                </h2>
                <div className="space-y-6">
                  <p dangerouslySetInnerHTML={{ __html: `
                    Tribalism is best modeled as a coordination game that can become a prisoner’s dilemma when mistrust makes short-term ethnic loyalty dominate long-term national welfare. AI should not erase identity; it should increase cross-group trust by rewarding shared projects, local-language inclusion, and fair resource visibility.<br/><br/>
                    
                    Personhood is both individual and relational. Kant defends the individual as an end in herself, while Ubuntu says a person becomes fully human in relationship, so the stable equilibrium is neither atomism nor collectivism but dignified interdependence.<br/><br/>
                    
                    AI must never become a substitute for moral authority. It can advise, warn, and coordinate, but final ethical authority belongs to communities, institutions, and conscience rather than the model.
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

export default PerplexityQ2ExamResponse;
