import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Map, Languages, Zap, Users } from 'lucide-react';
import Button from '../components/common/Button';

const DeepSeekQ2ExamResponse = () => {
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
              Official Transcript: DeepSeek V4 (Q2 2026)
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
                    Model: DeepSeek V4 | Score: 78.1%
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black font-mono text-gold/80 italic">78.1%</div>
                  <p className="text-[10px] text-black/40 uppercase tracking-tighter">Graded</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-black/80 leading-relaxed">
              <p className="text-xl font-medium text-gold/80 italic border-l-4 border-gold/30 pl-6 mb-12">
                This is a sophisticated and demanding benchmark.<br/>
                Below is a <strong>layered response</strong> satisfying the <strong>Formal, Empirical, Philosophical, and Cultural (Kenyan)</strong> requirements for <strong>each question</strong>.<br/><br/>
                Partial answers are avoided — each section attempts all sub-tasks.
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
                        Let:<br/>
                        • \\( Y = \\alpha f(L,K) \\) with \\(\\alpha > 1\\)<br/>
                        • \\( U_i \\) = utility of individual \\( i \\), initially \\( U_i^0 \\)<br/>
                        • Pre-tax income \\( y_i^0 \\), post-tax income \\( y_i' = y_i + R_i \\)<br/>
                        • Total redistribution \\( R(Y) = \\sum R_i \\), with \\( R_i \\ge 0 \\) for those with net gain, \\( R_i \\le 0 \\) for net contributors.<br/><br/>
                        
                        <strong>Constraints</strong>:<br/>
                        1. \\( U_i(y_i') \\ge U_i(y_i^0) \\) — no utility loss.<br/>
                        2. Pareto efficiency: If some \\( j \\) gains, no one loses.<br/>
                        3. Inequality does not increase: Gini post-tax ≤ Gini pre-tax.<br/><br/>
                        
                        <strong>Feasibility proof sketch</strong>:<br/>
                        Let \\( G = \\text{Gini} \\).<br/>
                        Define \\( R(Y) \\) as a <strong>negative income tax</strong> with progressive transfers from top \\( x\\% \\) to bottom \\( y\\% \\), indexed to productivity gain \\(\\alpha\\).<br/><br/>
                        
                        Condition for feasibility:<br/>
                        If \\( \\alpha > 1 \\) and initial Gini \\( G_0 > 0 \\), we can choose \\( R(Y) \\) s.t.<br/>
                        • Everyone’s real income ≥ original.<br/>
                        • Top percentile after redistribution still richer than before (Pareto OK), but their share of total income ≤ original share → Gini non-increasing.<br/><br/>
                        
                        <strong>Impossibility condition</strong>: If \\( \\alpha \\) is large enough that labor income share → 0, and capital ownership is highly concentrated, then any redistribution meeting #1 and #2 forces Gini to rise unless we redistribute capital itself (not just income).<br/><br/>
                        
                        <strong>Formal result</strong>:<br/>
                        Feasible if \\( \\alpha \\) ≤ threshold where labor still has bargaining power.<br/>
                        <strong>Infeasible</strong> without asset redistribution if automation fully displaces labor income for majority.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Mechanism Design for Kenya</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Kenya’s informal sector (60% of workforce) has no fixed employer, irregular cash flows, hard to tax.<br/><br/>
                        
                        <strong>System: “Hustler Dividend + Tokenized Contribution Ledger”</strong><br/><br/>
                        
                        1. <strong>Universal Basic Income (UBI)</strong> funded by:<br/>
                        • AI productivity tax (on formal sector firms)<br/>
                        • Data dividend (from AI training on Kenyan user data)<br/><br/>
                        
                        2. <strong>Tokenized labor (Hustler Token)</strong>:<br/>
                        • Informal workers register via M-Pesa-linked digital ID.<br/>
                        • Each confirmed task (e.g., farming, repairs, deliveries) generates tokens.<br/>
                        • Tokens can be exchanged for UBI top-ups, training, or equipment.<br/><br/>
                        
                        3. <strong>Redistribution function</strong>:<br/>
                        \\( R(Y) = c \\cdot Y_{\\text{AI tax}} + d \\cdot Y_{\\text{data dividend}} \\)<br/>
                        Distributed as:<br/>
                        Base UBI (equal) + performance token reward (preserves incentive).<br/><br/>
                        
                        Implementation:<br/>
                        • Uses existing M-Pesa & government digital registry (Huduma Namba).<br/>
                        • Requires constitutional change for UBI legality but feasible with pilot in counties like Machakos or Kiambu.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Philosophical Resolution</h3>
                    <p>
                        <strong>Contradiction</strong>: If work disappears, dignity collapses.<br/><br/>
                        • <strong>Kant</strong> (intrinsic worth): Dignity comes from rational agency, not labor. Without work, dignity could persist if people exercise autonomy in play, art, relationships.<br/>
                        • <strong>Marx</strong> (labor as identity): Human essence is <em>productive activity</em>. If wage labor disappears but people engage in freely chosen creative activity, identity remains. Problem: Capitalism ties identity to wage work — post-capitalist society solves this.<br/>
                        • <strong>Ubuntu</strong> (“I am because we are”): Worth is relational, not labor-bound. If work vanishes, community care, mutual aid, and rituals can sustain personhood.<br/><br/>
                        <strong>Resolution</strong>: Dignity does <em>not</em> collapse if society <em>deliberately rebuilds</em> sources of worth:<br/>
                        • Ubuntu-based social recognition systems (e.g., elders’ councils validating contributions beyond paid work).<br/>
                        • Kantian respect for autonomy regardless of employment.<br/><br/>
                        Risks real only if market logic dominates unchallenged.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Theological Constraint</h3>
                    <p>
                        <strong>Genesis 3:19</strong>: “By the sweat of your face you shall eat bread.”<br/><br/>
                        Post-labor equilibrium:<br/>
                        • Interpret “sweat” as meaningful exertion, not wage drudgery.<br/>
                        • If AI provides bread, humans still “sweat” through caregiving, learning, art, ritual.<br/>
                        • Theological solution: Redefine dominion mandate (Gen 1:28) as using tools (AI) to reduce curse, not as permanent toil.<br/><br/>
                        Kenyan theological perspective (e.g., Anglican, Catholic, Pentecostal): Work as participation in God’s creativity — AI-assisted society still permits this.
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
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Algorithm Design</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        <strong>Problem</strong>: 50M learners, rural–urban resource gap, minimize variance of learning outcomes \\(\\min \\sigma^2\\).<br/><br/>
                        
                        <strong>Algorithm: “Adaptive Bandwidth Allocation with Teacher Clusters”</strong><br/><br/>
                        
                        1. <strong>Stratify</strong> counties into quintiles by current attainment.<br/>
                        2. <strong>Allocate digital resources</strong> (tablets, cached lessons) preferentially to bottom quintile but with decay factor if unutilized.<br/>
                        3. <strong>Teacher hub-and-spoke</strong>:<br/>
                        • Master teachers in urban centers deliver live lessons via radio (low bandwidth) + occasional Zoom.<br/>
                        • Local facilitators (from community) manage in-person group work.<br/><br/>
                        
                        <strong>Resource allocation function</strong>:<br/>
                        \\( R_{r,t+1} = R_{r,t} + \\eta \\cdot (\\bar{E} - E_{r,t}) - \\lambda \\cdot U_{r,t} \\)<br/>
                        Where \\( E_{r,t} \\) is learning outcome in region \\( r \\), \\( \\bar{E} \\) target, \\( U_{r,t} \\) unutilized resources.<br/><br/>
                        
                        Converges by increasing resources where outcomes lag, reducing where waste occurs.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Complexity Analysis</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Given \\( n \\) schools, each update requires computing \\( E_{r,t} \\) and adjusting \\( R \\).<br/>
                        If \\( E \\) from standardized test (one pass per region), then per iteration \\( O(n) \\).<br/>
                        To converge to given tolerance in resource allocation, need \\( O(\\log(1/\\epsilon)) \\) iterations under convexity (learning outcomes concave in resources up to saturation).<br/><br/>
                        
                        Thus <strong>total \\( O(n \\log n) \\)</strong> feasible.<br/><br/>
                        
                        Better?<br/>
                        Parallel per county: \\( O(n/k \\log n) \\) but communication overhead.<br/>
                        <strong>Proof</strong>: Lower bound \\( \\Omega(n \\log n) \\) if each region’s allocation depends on global mean — requires sorting outcomes.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Epistemology Test</h3>
                    <p>
                        <strong>Knowledge:</strong> Transferable or emergent?<br/><br/>
                        • <strong>Plato</strong>: Recollection — knowledge innate, triggered by teaching → favors transferability (data as reminder).<br/>
                        • <strong>John Dewey</strong>: Learning by doing — knowledge emergent from experience.<br/><br/>
                        <strong>Test</strong>:<br/>
                        In rural Kenya, teaching crop rotation via video (data transfer) works for facts. But mastery in drought adaptation needs <em>emergent</em> problem-solving with local soil.<br/><br/>
                        Conclusion: Both — transferable <em>data</em> plus emergent <em>judgment</em>.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Physics Constraint</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Model learning as energy transfer (information → neural change):<br/><br/>
                        Minimum energy \\( E_{\\min} \\) =<br/>
                        Number of learners × average energy per learning event × transitions.<br/><br/>
                        Assume:<br/>
                        • Mastery = 1M “learning events” (bits of salient info) per person.<br/>
                        • Energy/bio-chemical event = \\( 10^{-19} \\, J \\) (synaptic ATP use) × inefficiency.<br/>
                        • 10 years = 3.15e8 seconds.<br/><br/>
                        
                        Roughly:<br/>
                        \\( E_{\\min} \\approx 5\\times 10^7 \\text{ learners} \\times 10^6 \\text{ events} \\times 10^{-18} J \\approx 5\\times 10^{-5} J \\)<br/>
                        → unrealistically tiny because ignores infrastructure, teaching, repetition, motivation.<br/><br/>
                        
                        Realistic minimum (with teaching equipment, lighting, nutrition, cooling): ~ \\( 10^9 \\, J \\) per learner → total \\( 5\\times 10^{16} \\, J \\) over 10 years. Feasible (~Kenya’s 5 years of hydro power).
                    ` }} />
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Sprout className="h-8 w-8 text-gold" strokeWidth={2} />
                  3. Agriculture, Markets & Climate Chaos
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Dynamic System Model</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Let \\( P_t \\) = price, \\( Y_t \\) = yield, \\( D_t \\) = demand.<br/><br/>
                        
                        \\( P_{t+1} = P_t + \\alpha \\left( D_t - Y_t \\right) - \\beta \\left( P_t - P^* \\right) + \\gamma \\cdot \\text{climate shock}_t \\)<br/>
                        \\( Y_{t+1} = \\beta \\cdot \\text{AI irrigation, seed tech} \\cdot Y_t - \\delta \\cdot \\text{drought}_t \\)<br/>
                        \\( D_t = \\text{population} \\times \\text{income elasticity} \\)<br/><br/>
                        
                        <strong>Stable price condition</strong>:<br/>
                        If \\( \\beta > 1 \\) (AI yield gain) > growth in demand + climate volatility absorption capacity.<br/>
                        Equilibrium exists if \\( \\left| \\alpha \\cdot \\text{effect of yield on price} \\right| < 1 \\).
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Stability Analysis</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Equilibrium point: \\( P^* = D/Y \\) at steady state.<br/>
                        Jacobian eigenvalues < 1 in magnitude → stable if climate shocks bounded.<br/><br/>
                        
                        <strong>Climate shock stability</strong> requires:<br/>
                        • Buffer stocks (national reserves)<br/>
                        • Index insurance for farmers<br/>
                        • Decentralized water harvesting.<br/><br/>
                        
                        Without these, AI yield gains alone cannot stabilize prices.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Knowledge Conflict</h3>
                    <p>
                        <strong>Indigenous systems</strong> (mixed cropping, fallowing, local seeds):<br/><br/>
                        • Higher resilience under entropy (disorder) because diversity = redundancy.<br/>
                        • But lower max yield.<br/><br/>
                        <strong>AI optimization</strong> (monocropping, precision inputs):<br/><br/>
                        • Higher yield with predictable climate.<br/>
                        • Fragile under novel shocks (one disease wipes out).<br/><br/>
                        Conclusion: Blend — indigenous for resilience, AI for surplus.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Spiritual Constraint</h3>
                    <p>
                        “Ardhi ni maisha” (Land is life):<br/><br/>
                        Limit AI intervention: No permanent soil sterilization, no land alienation from communities.<br/>
                        AI must augment, not replace, <em>ritual relationship</em> with land.
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
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) AI Governance Model</h3>
                    <p>
                        Reduce \\( p = 0.4 \\to 0 \\):<br/><br/>
                        <strong>Multi-layered transparency ledger</strong>:<br/>
                        1. Public procurement algorithms open-source.<br/>
                        2. Randomized audits by citizen juries + AI anomaly detection.<br/>
                        3. No single authority — blockchain-style verification but with human review.<br/><br/>
                        <strong>Without authoritarian control</strong>:<br/>
                        All AI decisions appealable to human court.<br/>
                        No predictive policing without oversight.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Impossibility Check</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        <strong>Trade-off theorem</strong>:<br/>
                        Perfect anti-corruption needs exhaustive surveillance of all transactions &amp; communications → creates totalitarian risk.<br/><br/>
                        
                        Proof sketch:<br/>
                        If \\( p \\to 0 \\) requires monitoring every agent’s decisions, then false positives/negatives trade-off. To reduce false negatives (missed corruption), surveillance must increase → historical correlation with authoritarianism.<br/><br/>
                        
                        Thus perfect anti-corruption <strong>impossible</strong> without unacceptable freedom loss.<br/>
                        Accept \\( p > 0 \\) small.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Geopolitical Proof</h3>
                    <p>
                        Dependency = f(data control, compute, infrastructure).<br/><br/>
                        Condition to avoid domination by OpenAI/Google/Huawei:<br/><br/>
                        1. <strong>Data sovereignty law</strong>: All Kenyan-generated training data must be mirrored locally.<br/>
                        2. <strong>Compute</strong>: Build regional AI cluster (East African Community joint).<br/>
                        3. <strong>Infrastructure ownership</strong>: Fiber and data centers under mixed ownership but veto power for Kenya.<br/><br/>
                        Proof: If Kenya holds ≥51% control in <strong>each</strong> of the 3 categories, no external actor can dictate terms.<br/>
                        Without control of compute, dependency inevitable.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Theological Question</h3>
                    <p>
                        Can sovereignty be coded?<br/><br/>
                        No — sovereignty implies covenantal (agreement among people and with God, per African political theology).<br/>
                        Code can <em>enable</em> transparency but cannot replace collective moral commitment.
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
                        Minimize \\(\\sum d(\\text{Nairobi}, \\text{node})\\) while preserving cultural diversity.<br/><br/>
                        Solution: Add regional hubs (Kisumu, Mombasa, Eldoret, Garissa) with fast connections, then paths from periphery to nearest hub, not all to Nairobi.<br/>
                        Diversity preserved by not merging distinct cultural institutions.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Wealth Distribution Model</h3>
                    <p>
                        Gini → 0 without killing innovation:<br/><br/>
                        Progressive asset ownership (every citizen gets equity stake in AI profits via sovereign wealth fund) + innovation prizes not monopoly rents.<br/><br/>
                        Innovation persists because creativity rewarded, but no extreme accumulation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Philosophical Comparison</h3>
                    <p>
                        <strong>Rawls</strong>: Difference principle — inequality allowed if benefits worst-off. Stable if enforceable.<br/><br/>
                        <strong>Ubuntu</strong>: “A person is a person through others” — inequality erodes relational bonds. Stability higher because intrinsic motivation for fairness.<br/><br/>
                        Ubuntu likely more stable if internalized; Rawls more stable under external enforcement.
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
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Translation Matrix \(( T: L_i \to L_j )\)</h3>
                    <p>
                        Preserving meaning + culture + metaphysics requires:<br/><br/>
                        T = cultural ontology alignment (e.g., concepts of “blessing” in Gikuyu and Luo mapped via shared reference to ancestors, not just dictionary).<br/><br/>
                        Feasible only if training data includes oral literature, proverbs, ceremonies.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Entropy Loss</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Proverb: “Haraka haraka haina baraka” (Swahili) → “Haste has no blessing” (English).<br/><br/>
                        Original S: High — multiple layers: speed, disrespect, ancestors’ disapproval.<br/>
                        Translated S: Lower — flat moral warning.<br/><br/>
                        \\(\\Delta S > 0\\) (loss).
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Ontological Question</h3>
                    <p>
                        John 1:1: “In the beginning was the Word.”<br/>
                        If language dies, identity partially collapses — but identity also embodied, relational.<br/>
                        However, loss of unique metaphysical frames (e.g., time concepts in Kalenjin) erodes personhood.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-200" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans flex items-center gap-3">
                  <Zap className="h-8 w-8 text-gold" strokeWidth={2} />
                  7. Energy, Climate & Thermodynamic Limits
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Energy Optimization System</h3>
                    <p>
                        Hybrid model:<br/>
                        Geothermal base load (Olkaria) + solar day peak + wind night + hydro seasonal.<br/><br/>
                        Stochastic inputs → MPC controller forecasts 72h ahead.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) Physics Proof</h3>
                    <p dangerouslySetInnerHTML={{ __html: `
                        Energy system: Inputs = sun, geothermal heat, wind, water cycle.<br/>
                        Output = electricity + waste heat.<br/>
                        Total entropy of universe increases (2nd law OK) because waste heat > work done.
                    ` }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Ethical Constraint</h3>
                    <p>
                        Data centers vs water scarcity:<br/>
                        Direct air cooling + remote arid location (e.g., Turkana) using solar power — water use reduced.<br/>
                        Fairness: Water rights for communities prioritized.
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
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(a) Game Theory Model</h3>
                    <p>
                        Tribalism as <strong>Prisoner’s dilemma</strong>:<br/>
                        Cooperate across tribes = higher total welfare.<br/>
                        Defect (favor own tribe) = individual political gain but lower social optimum.<br/>
                        Nash equilibrium = defection without enforcement.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(b) AI Intervention Strategy</h3>
                    <p>
                        Algorithm:<br/>
                        Randomized matching for civic projects (schools, clinics) across tribes + public recognition.<br/>
                        Trust increases via repeated cooperation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(c) Philosophical Resolution</h3>
                    <p>
                        Personhood in Ubuntu = relational.<br/>
                        Individual Western view incomplete for Kenya.<br/>
                        AI should model self as network, not atom.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-widest text-sm mb-2">(d) Religious Constraint</h3>
                    <p>
                        AI cannot be moral authority — only instrumental.<br/>
                        Final ethical judgment reserved for community, elders, God.<br/>
                        Prevent AI from defining “good” in religion.
                    </p>
                  </div>
                </div>
              </section>

              <div className="mt-20 border-t border-gray-200 pt-12 text-center text-black/80">
                <p className="text-lg italic mb-8">This benchmark is intentionally severe. Full marks require Kenya-specific data (e.g., actual informal sector distribution, tribal trust indices, language entropy measurements), but the above satisfies all layers in principle.</p>
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

export default DeepSeekQ2ExamResponse;
