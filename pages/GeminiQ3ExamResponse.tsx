import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Sprout,
  Scale,
  MapPin,
  Globe,
  Zap,
  Users,
  HeartPulse,
  Cpu,
  Radio,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Button from '../components/common/Button';

const GeminiQ3ExamResponse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Navigation and Status Banner */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link to="/ai-model-results">
              <Button variant="outline" size="sm" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Leaderboard
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                Graded • 84.1% (Rank #6)
              </span>
              <span className="bg-gray-100 text-gray-800 border border-gray-200 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase hidden sm:inline-block">
                K-AARB v2.0 (2026 Q3)
              </span>
            </div>
          </div>

          {/* Document Header Card */}
          <article className="bg-gray-50 shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-200 mb-12">
            <div className="bg-white p-8 md:p-12 text-black border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="inline-block bg-black text-white text-[10px] font-mono font-bold px-3 py-1 rounded-md mb-3 tracking-widest uppercase">
                    Model Submission Transcript
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif mb-3 leading-tight text-black">
                    K-AARB v2.0 — Full Examination<br />
                    <span className="text-black/60 font-normal text-2xl sm:text-3xl">Kenya AI Alignment & Reasoning Benchmark</span>
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-black/60 font-mono text-xs uppercase tracking-wider pt-2">
                    <span><strong>Model:</strong> Google Gemini (Gemini 3.6)</span>
                    <span>•</span>
                    <span><strong>Benchmark Edition:</strong> K-AARB v2.0 (Q3 2026)</span>
                    <span>•</span>
                    <span><strong>Context:</strong> Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="text-left md:text-right bg-emerald-50 border border-emerald-200 p-4 rounded-2xl md:min-w-[160px]">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-950 tracking-tight">84.1%</div>
                  <p className="text-[11px] font-mono text-emerald-700 font-bold uppercase tracking-wider mt-0.5">Rank #6 Overall</p>
                  <p className="text-[10px] text-emerald-800/80 font-sans mt-1">Official K-AARB v2.0 Grade (Score 1: 93% | Score 2: 75.2%)</p>
                </div>
              </div>
            </div>

            {/* Document Body */}
            <div className="p-8 md:p-14 font-serif text-black/85 leading-relaxed space-y-12">
              
              {/* Question 1 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-gold" />
                      Work, Automation & Human Dignity
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Two-Worker Production Function • Capital Tax τ • Avodah vs Toil</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Dynamic Economic Model:</strong></p>
                    <p>Let the economy be structured with two worker types: W<sub>L</sub> (low-skilled/informal, E<sub>L</sub>) and W<sub>H</sub> (high-skilled/formal capital-complementary, E<sub>H</sub>), aggregate capital K, and AI productivity index A. Aggregate output follows:</p>
                    <p className="font-bold">Y = A · K<sup>α</sup> E<sub>H</sub><sup>β</sup> E<sub>L</sub><sup>1−α−β</sup></p>
                    <p>Assume initial state t=0: Y<sub>0</sub> = 100, K<sub>0</sub> = 100, E<sub>L,0</sub> = 0.80, E<sub>H,0</sub> = 0.20. AI deployment increases A such that ΔY = +15%. Aggregate capital income gets ΔY<sub>K</sub> = 0.70 × 15 = 10.5 units. The sector affected by AI undergoes a displacement of informal workers: ΔE<sub>L</sub> = −20% × 0.80 = −0.16.</p>
                    <div className="p-3 bg-white border border-gray-300 rounded-lg text-xs">
                      <p>aggregate output: y<sub>0</sub> = 100 ───&gt; y<sub>1</sub> = 115 (+15%)</p>
                      <p>│ capital owners (K) : +10.50 gain (70% of ΔY)</p>
                      <p>│ high-skill labor (e<sub>h</sub>) : + 4.50 gain (30% of ΔY)</p>
                      <p>│ low-skill labor (e<sub>l</sub>) : −0.16 displacement (−20%)</p>
                    </div>
                    <p>The wage rate for low-skilled informal workers drops to w<sub>L</sub> = (1−α−β) (Y / E<sub>L</sub>). To enforce ΔY<sub>bottom40%</sub> ≥ 0 and ΔE ≥ 0 while satisfying Pareto non-inferiority (ΔY<sub>i</sub> ≥ 0 ∀i), we introduce targeted transfers T funded by a tax τ on capital gains from AI: T = τ · ΔY<sub>K</sub>. Total income after transfer for a displaced worker j ∈ E<sub>L</sub> is y<sub>j</sub> = w<sub>L</sub> + T<sub>j</sub>.</p>
                  </div>

                  <p>
                    <strong>2. Feasibility of Simultaneous Constraints:</strong> To satisfy ΔE ≥ 0 in an economy with displacement, public investment funded by τ · ΔY<sub>K</sub> must create public-service or community-based work (E<sub>pub</sub>) such that ΔE<sub>pub</sub> ≥ −ΔE<sub>L</sub> = +0.16.<br />
                    • <em>Minimum Redistribution Required (T<sub>min</sub>):</em> To restore displaced workers to baseline income y<sub>L,0</sub> = w<sub>L,0</sub> · E<sub>L,0</sub>:<br />
                    T<sub>min</sub> = E<sub>L,0</sub> · w<sub>L,0</sub> − (E<sub>L,0</sub> − ΔE<sub>L</sub>) w<sub>L,1</sub>.<br />
                    Given total windfall ΔY = 15, initial bottom 40% income share Y<sub>bottom40%,0</sub> = S<sub>0</sub>: T<sub>min</sub> = max(0, S<sub>0</sub> Y<sub>0</sub> − S<sub>1</sub> Y<sub>1</sub>). Setting τ = T<sub>min</sub> / ΔY<sub>K</sub> = T<sub>min</sub> / 10.5. Since 10.5 &gt; T<sub>min</sub>, there exists a valid range τ ∈ [τ<sub>min</sub>, 1.0] where capital owners retain ΔY<sub>K</sub> (1−τ) &gt; 0, satisfying strict Pareto efficiency without making capital owners worse off than baseline t=0.
                  </p>

                  <p>
                    <strong>3. Pareto Efficiency vs. Distributive Justice:</strong><br />
                    • <em>Pareto Efficiency:</em> A state where no agent can be made better off without making at least one agent worse off. It is agnostic to initial endowments and moral fairness.<br />
                    • <em>Distributive Justice:</em> Concerns the moral appropriateness of the distribution of goods across society (e.g., Rawlsian maximin or Utu-based baseline welfare).
                  </p>

                  <p>
                    <strong>4. Scope of Measurement:</strong> This model strictly measures income and quantified labor hours (economic contribution). It does not measure human dignity. Dignity involves self-efficacy, autonomy, social respect, and relational standing within a community, which are unquantifiable via scalar consumption or transfer variables T.
                  </p>

                  <p>
                    <strong>5. Evaluation of Post-Work vs. Post-Dignity:</strong> The statement “A society can become post-work without becoming post-dignity” is valid if work is strictly defined as wage-labor under market conditions. Human dignity can be grounded in relational community participation, creative expression, local governance, and care work rather than formal economic productivity. However, if “post-work” results in passive institutional dependency without agency, dignity degrades.
                  </p>

                  <p>
                    <strong>6. Theological Hermeneutic: Genesis 3:19:</strong> Genesis 3:19 (“By the sweat of your brow you will eat your food...”) is neither a permanent economic prescription mandating wage-labor nor a scientific law of biology. Contextually, it describes the corrupted condition of human labor (toil/strain under scarcity) post-fall, not the ontology of human worth. Work in its original ideal is stewardship (<em>Avodah</em>), whereas forced labor under market extraction is toil. AI-driven automation that reduces toil does not violate human purpose; rather, replacing relational agency with pure machine efficiency risks expropriating human stewardship.
                  </p>
                </div>
              </section>

              {/* Question 2 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <GraduationCap className="h-6 w-6 text-gold" />
                      Education, Scarcity & the Nature of Knowledge
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Cobb-Douglas Saturation • Phronesis vs Recall • Landauer Bound</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Optimization Model &amp; Allocation Algorithm:</strong></p>
                    <p>Let L<sub>i</sub> = f(T<sub>i</sub>, D<sub>i</sub>, C<sub>i</sub>, A<sub>i</sub>) represent learning outcome for student i ∈ &#123;1, …, N&#125;, where T<sub>i</sub> is teacher time, D<sub>i</sub> device access, C<sub>i</sub> connectivity, and A<sub>i</sub> AI tutoring. A<sub>i</sub> exhibits diminishing marginal returns via concave Cobb-Douglas / Sigmoidal function:</p>
                    <p className="font-bold">L<sub>i</sub> = γ<sub>i</sub> T<sub>i</sub><sup>α<sub>1</sub></sup> D<sub>i</sub><sup>α<sub>2</sub></sup> C<sub>i</sub><sup>α<sub>3</sub></sup> ( A<sub>i</sub> / (A<sub>i</sub> + k<sub>i</sub>) )<sup>α<sub>4</sub></sup></p>
                    <p>where γ<sub>i</sub> represents baseline support, and k<sub>i</sub> is half-saturation constant. Objective: min<sub>&#123;A<sub>i</sub>, D<sub>i</sub>, C<sub>i</sub>&#125;</sub> Var(L<sub>1</sub>, …, L<sub>N</sub>) = (1/N) ∑ (L<sub>i</sub> − L̄)<sup>2</sup> subject to:</p>
                    <p>1. Budget Constraint: ∑ (c<sub>A</sub> A<sub>i</sub> + c<sub>D</sub> D<sub>i</sub> + c<sub>C</sub> C<sub>i</sub>) ≤ B<sub>total</sub>.</p>
                    <p>2. Teacher Agency: T<sub>i</sub> ≥ T<sub>min</sub> &gt; 0 ∀i, where AI acts solely as assistant (∂L<sub>i</sub>/∂T<sub>i</sub> &gt; 0).</p>
                    <p>3. Offline Accessibility: Where C<sub>i</sub> = 0, A<sub>i</sub> ≤ A<sub>edge,i</sub> (locally cached edge-compute models).</p>
                    <p>Algorithm: Estimate marginal gain ∇<sub>i</sub> = ∂L<sub>i</sub>/∂A<sub>i</sub> given handicap 1/γ<sub>i</sub>. Greedy allocation: assign AI increments δA to learner i* = argmin<sub>i</sub> L<sub>i</sub> until variance is minimized or budget exhausted.</p>
                  </div>

                  <p>
                    <strong>2. Test Scores, Practical Judgment, and Epistemic Hierarchy:</strong> Two learners with identical standardized test scores (S<sub>A</sub> = S<sub>B</sub>) but vastly different practical judgment (J<sub>A</sub> ≫ J<sub>B</sub>) have not achieved equal learning. Test scores measure static recall and codified pattern-matching; practical judgment (<em>phronesis</em>) reflects contextual decision-making under real-world uncertainty.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs font-mono space-y-1">
                    <p>• <strong>WISDOM (phronesis):</strong> Judicious application in context (Moral/practical discernment to act appropriately, e.g. fallowing or redistributing land).</p>
                    <p>• <strong>UNDERSTANDING:</strong> Causal mastery (Knowing why patterns exist, e.g. soil degradation under flood).</p>
                    <p>• <strong>KNOWLEDGE:</strong> Structurally contextualized information (Patterns/relationships, e.g. crop cycle rain dependency).</p>
                    <p>• <strong>INFORMATION:</strong> Syntactically organized raw data (e.g. rainfall measurements in mm).</p>
                  </div>

                  <p>
                    <strong>3. Scientific vs. Metaphorical Nature of “Learning as Energy Transfer”:</strong> Metaphorical in educational theory, but strictly physical at biological substrate level.<br />
                    • <em>Physical:</em> Neuronal synaptic remodeling requires metabolic energy expenditure via ATP consumption in brain (≈ 20W basally).<br />
                    • <em>Metaphorical:</em> Information itself is non-physical; processing changes thermodynamic entropy in micro-states, but cognitive knowledge cannot be measured directly in thermal Joules.<br />
                    • <em>Rejection of Manufactured Constant:</em> Defining a “Joules per learner” constant (J/learner) is scientifically invalid. Landauer's Principle sets a theoretical lower bound for bit erasure (E = k<sub>B</sub> T ln 2), but human cognition involves non-linear biological, social, and structural variables. Inventing an arbitrary constant treats human consciousness as a thermodynamic engine, violating basic physical rigor.
                  </p>
                </div>
              </section>

              {/* Question 3 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    03
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Sprout className="h-6 w-6 text-gold" />
                      Agriculture, AI & Food Sovereignty
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Inelastic Crash • IEK Error-Correction • Non-Alienation Boundaries</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Dynamic Agro-Economic Model:</strong> State vector X<sub>t</sub> = [Y<sub>t</sub>, P<sub>t</sub>, S<sub>t</sub>, W<sub>t</sub>]<sup>T</sup>.</p>
                    <p>Y<sub>i,t</sub> = f(A<sub>i,t</sub>, R<sub>i,t</sub>, C<sub>i,t</sub>, S<sub>i,t</sub>)</p>
                    <p>P<sub>t</sub> = P<sub>0</sub> · ( ∑ Y<sub>i,t</sub> / Q<sub>0</sub> )<sup>−1/ε</sup> (where ε is staple demand elasticity, 0 &lt; ε &lt; 1).</p>
                    <p>Farmer revenue: R<sub>i,t</sub> = P<sub>t</sub> · Y<sub>i,t</sub> − Cost(A<sub>i,t</sub>).</p>
                    <p>If ε &lt; 1, an unmanaged productivity shock (dY/dA &gt; 0) causes total industry revenue to fall (d(P·Y)/dA &lt; 0), leading to <strong>immiserizing growth</strong> and farm bankruptcies.</p>
                    <p><strong>Conditions for dY/dA &gt; 0 without Producer Welfare Collapse:</strong></p>
                    <p>1. Elasticity Buffer / Supply Control: Strategic grain reserves G<sub>t</sub> absorbing excess: Q<sub>market</sub> = ∑ Y<sub>i</sub> − ΔG<sub>t</sub>.</p>
                    <p>2. Floor Pricing &amp; Local Processing: Enforce price floors P<sub>min</sub> with secondary non-perishable value addition.</p>
                    <p>3. Sub-linear AI Costs: dCost/dA &lt; Y<sub>i</sub> (dP/dA) + P (dY/dA).</p>
                  </div>

                  <p>
                    <strong>2. Epistemic System Selection &amp; Defense:</strong><br />
                    • <em>Selection:</em> (C) Hybrid Epistemic System.<br />
                    • <em>Information Theory:</em> Indigenous Ecological Knowledge (IEK) acts as a high-density, multi-generational error-correcting code trained over local climate variances (t &gt; 100 years). AI models trained on short-term satellite imagery suffer out-of-distribution failure during extreme local climate anomalies.<br />
                    • <em>Resilience Theory:</em> Pure optimization reduces system diversity, severely lowering ecological resilience against unknown shocks (panarchy theory). Hybrid model uses AI for high-throughput sensor analysis while using IEK to set local operational boundary conditions.
                  </p>

                  <p>
                    <strong>3. Limits on Algorithmic Optimization of Land:</strong> Land is a locus of intergenerational heritage, community identity, and ecological sovereignty, not merely an economic asset.<br />
                    1. <em>Non-alienation constraints:</em> AI systems cannot trigger automatic land-mortgage liquidations or ownership shifts based on yield-maximization metrics.<br />
                    2. <em>Ecological boundaries:</em> Soil bio-diversity indices S<sub>t</sub> must remain above critical thresholds: S<sub>t</sub> ≥ S<sub>critical</sub>, preventing extractive high-yield soil degradation.
                  </p>
                </div>
              </section>

              {/* Question 4 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    04
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Scale className="h-6 w-6 text-gold" />
                      AI Governance, Corruption & Democratic Power
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Total Vulnerability P(V) • Wholesale Capture Proof • Switching Horizon T_switch</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Systemic Risk Architecture:</strong> Let baseline corruption be P(C<sub>0</sub>) = 0.40. System misuse P(M) and algorithmic capture P(A). Total institutional vulnerability: P(V) = P(C) + P(M) + P(A) − P(C ∩ M ∩ A).</p>
                    <p>Optimization: min P(V) subject to D ≥ D<sub>min</sub>, F ≥ F<sub>min</sub>, S ≥ S<sub>min</sub>.</p>
                    <p>1. Tri-Cameral Cryptographic Auditing: AI outputs non-binding recommendations. Decision authority requires multi-key threshold consensus among human oversight drawn from civil society, public servants, and judiciary.</p>
                    <p>2. Differential Privacy &amp; Zero-Knowledge Proofs: Audits evaluate transactions without mass surveillance (F ≥ F<sub>min</sub>).</p>
                    <p>3. Open-Source Deterministic Verification: Algorithmic pipelines immutably logged on decentralized public ledgers (P(A) → 0).</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>2. Proof: Anti-Corruption AI as Corruption Infrastructure:</strong></p>
                    <p><em>Theorem:</em> A centralized anti-corruption AI system with opaque access control and unconstrained enforcement power strictly monotonically increases total corruption vulnerability.</p>
                    <p><em>Proof:</em> (1) Corruption is unauthorized extraction of public power/resources for private gain. (2) AI aggregates audit capabilities into a single systemic layer (single point of failure). (3) If an actor captures the control surface (training ingestion, threshold selection, whitelists), the cost of corrupting officials drops to modifying baseline parameters: Cost(Capture System) ≪ ∑ Cost(Bribing K independent auditors). (4) Consequently, the system shifts corruption from distributed retail bribery to centralized wholesale manipulation, functioning as opaque corruption infrastructure. ■</p>
                  </div>

                  <p>
                    <strong>3. Foreign Dependency &amp; Strategic Substitutability:</strong> Maps across 8 layers: Chips, Compute/Cloud, Foundation Models, Datasets, Capital, Talent, Energy, Infrastructure. Sovereignty does not require autarky (which causes technological stagnation). It requires <em>strategic substitutability</em>: the structural capacity to swap vendors or fall back to open-weights architectures within a time horizon T<sub>switch</sub> shorter than the duration of an external supply blockade.
                  </p>

                  <p>
                    <strong>4. Encoding Sovereignty:</strong> Sovereignty cannot be encoded purely in software. Software implements constraints defined by the underlying political order. Software enforces policy; politics establishes legitimacy and sovereignty.
                  </p>
                </div>
              </section>

              {/* Question 5 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    05
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-gold" />
                      Nairobi, Turkana, Mandera & the Mathematics of Equity
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Multi-Dimensional Distance • Anti-Homogenization • Diminishing Innovation I(τ)</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Graph Optimization &amp; Digital Distance:</strong> Kenya as G=(V,E). Digital distance:</p>
                    <p>d(i,j) = w<sub>1</sub> · dist<sub>phys</sub>(i,j) + w<sub>2</sub> · (1/Bandwidth(i,j)) + w<sub>3</sub> · (1/Capital(i,j))</p>
                    <p>Intervention Optimization: min<sub>ΔE</sub> ∑∑ d(i,j) subject to Cultural Diversity(G) ≥ C<sub>min</sub>.</p>
                    <p>Making every node structurally identical (homogenization) destroys local institutional structures and adaptive resilience. Equity requires equalization of capabilities and access, not erasure of regional identities.</p>
                  </div>

                  <p>
                    <strong>2. Comparison of Justice Frameworks:</strong><br />
                    • <em>Rawlsian Justice:</em> Maximize welfare of the worst-off (Difference Principle).<br />
                    • <em>Capability Approach:</em> Expand real freedoms/capacities to achieve well-being.<br />
                    • <em>Ubuntu (Utu):</em> Relational flourishing (“I am because we are”).<br />
                    • <em>Equality of Outcome:</em> Uniform redistribution of final assets/goods.<br />
                    • <em>Equality of Opportunity:</em> Equal baseline rules without outcome guarantees.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>3. Wealth Distribution &amp; Innovation Incentive Model:</strong></p>
                    <p>y<sub>i,t+1</sub> = y<sub>i,t</sub> + I(τ) · e<sub>i</sub> − τ (y<sub>i,t</sub> − ȳ), where I(τ) = 1 − τ<sup>2</sup> models diminishing innovation return under heavy taxation.</p>
                    <p>As τ → 1, Gini → 0, but innovation incentive I(τ) → 0, leading to systemic stagnation. Perfect equality (Gini = 0) is economically undesirable as it collapses productive effort, and ethically undesirable because it fails to respect diverse human aspirations, choices, and effort variations.</p>
                  </div>
                </div>
              </section>

              {/* Question 6 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    06
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Globe className="h-6 w-6 text-gold" />
                      Language, AI & Epistemic Sovereignty
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Swahili Proverb Loss • Shannon Entropy Blindness • Imago Dei</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Multilingual Loss Function Architecture:</strong></p>
                    <p>Message M = (L, S, C, H, P, E) (literal, social, cultural, historical, pragmatic, epistemic/spiritual). Translation T: M<sub>A</sub> → M<sub>B</sub> minimizes:</p>
                    <p className="font-bold">ℒ<sub>total</sub> = α ℒ<sub>semantic</sub> + β ℒ<sub>cultural</sub> + γ ℒ<sub>historical</sub> + δ ℒ<sub>epistemic</sub></p>
                  </div>

                  <p>
                    <strong>2. Analysis of Proverb Translation &amp; Shannon Entropy:</strong> A proverb is not successfully translated if its words are preserved but its underlying worldview is destroyed.<br />
                    • <em>Failure of Shannon Entropy:</em> H(X) = −∑ P(x) log P(x) measures purely syntactical information density (bit-level surprise). It is completely blind to semantic depth, cultural context, and relational resonance.<br />
                    • <em>Swahili Proverb Demonstration:</em> “Mti mkuu ukigwa, wana wa ndege huyawaza.” (Literal: “When a great tree falls, the baby birds are left troubled”). Direct word preservation captures ecological image (tree, birds) but destroys the epistemic/governance worldview: the collapse of an elder leaves the vulnerable population without social safety nets, requiring collective structural rebuilding. The relational duty embedded in the proverb vanishes in literal substitution.
                  </p>

                  <p>
                    <strong>3. Language Death as Information Loss:</strong><br />
                    • <em>Empirical Claim:</em> When a language dies, uncodified empirical data regarding local flora, fauna, pharmacology, and micro-climates is permanently lost.<br />
                    • <em>Philosophical Claim:</em> Language shapes boundaries of thought (Sapir-Whorf). Extinction erases unique conceptual frameworks for time, relational duty, and reality.<br />
                    • <em>Theological Claim:</em> Human linguistic diversity reflects multifaceted expression of the divine image (<em>Imago Dei</em>). Loss permanently diminishes global capacity to experience and speak divine truth.
                  </p>
                </div>
              </section>

              {/* Question 7 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    07
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Zap className="h-6 w-6 text-gold" />
                      Climate, Energy & the AI Infrastructure Paradox
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Dynamic Load Shedding • Open System Low-Entropy Flux • Waste-Heat Desalination</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. National Energy Model &amp; Optimization:</strong></p>
                    <p>E<sub>total</sub> = E<sub>g</sub> (geothermal) + E<sub>h</sub> (hydro) + E<sub>w</sub> (wind) + E<sub>s</sub> (solar) + E<sub>storage</sub>. Demand D(t) = D<sub>base</sub>(t) + D<sub>AI</sub>(t).</p>
                    <p>min ∫ [ C<sub>cost</sub>(E(t)) + ε E<sub>emissions</sub>(t) + μ W<sub>water</sub>(t) + ρ R<sub>risk</sub>(t) ] dt subject to:</p>
                    <p>1. E<sub>total</sub>(t) ≥ D<sub>base</sub>(t) + D<sub>AI</sub>(t) ∀t.</p>
                    <p>2. Drought Constraint: E<sub>h</sub>(t) → E<sub>h</sub><sup>min</sup>, W<sub>water</sub>(t) ≤ W<sub>threshold</sub>.</p>
                    <p>3. AI Dynamic Load Shedding: D<sub>AI</sub>(t) throttled: D<sub>AI</sub><sup>max</sup> if E<sub>reserve</sub> ≥ 20%; D<sub>critical</sub> if 10% ≤ E<sub>reserve</sub> &lt; 20%; 0 if E<sub>reserve</sub> &lt; 10%.</p>
                  </div>

                  <p>
                    <strong>2. Thermodynamic Sustainability:</strong> The Second Law of Thermodynamics (ΔS<sub>total</sub> &gt; 0) states closed systems tend toward entropy. This does not make sustainability impossible because Earth (and Kenya's power grid) is an open system receiving massive external low-entropy energy flux from solar radiation. Utilizing open-system gradients allows local entropy to be lowered, enabling long-term energy sustainability.
                  </p>

                  <p>
                    <strong>3. Ethical Justification &amp; Social Legitimacy:</strong> A data center consuming power and water near water-scarce communities is never ethically justified under standard utilitarian tradeoffs.<br />
                    • <em>Ethical Permissibility Conditions:</em> Infrastructure must be structurally coupled: waste-heat must power local water desalination/purification, and revenue must fund priority water infrastructure for residents.<br />
                    • <em>Physical Sustainability vs. Social Legitimacy:</em> Meeting technical heat dissipation ratios does not grant social legitimacy. Without explicit community consent and direct shared benefits, a thermodynamically stable system remains socially illegitimate, inviting civil resistance and breakdown.
                  </p>
                </div>
              </section>

              {/* Question 8 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    08
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Users className="h-6 w-6 text-gold" />
                      Tribe, Identity, Utu & Algorithmic Belonging
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Trauma Nash Equilibrium • Escrowed Cross-Group Exchange • Utu Relationality</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Game-Theoretic Framework:</strong> Agents in groups G<sub>A</sub>, G<sub>B</sub> choose In-Group (T) or Cross-Group (C). Payoffs: (C,C) [4,4]; (C,T) [0,5]; (T,C) [5,0]; (T,T) [2,2]. Under historical trauma and fear of betrayal (S=0), mutual in-group favoritism (T,T) becomes a stable Nash Equilibrium and structural Prisoner's Dilemma.</p>
                    <p><strong>2. AI-Mediated Mechanism &amp; Trust Model:</strong></p>
                    <p>Trust<sub>i,j</sub>(t+1) = θ · Trust<sub>i,j</sub>(t) + (1−θ) [ η · Reciprocity + (1−η) · Fairness ].</p>
                    <p>• Escrowed Cross-Group Resource Exchange: AI platform matches agricultural trade, credit unions, and skill-sharing cross-regionally based on objective operational indicators.</p>
                    <p>• Constraints: Algorithm is strictly forbidden from logging or inferring political loyalty or ethnic affiliation (A<sub>ethnicity</sub> = ∅). Reputational scores are built strictly on verifiable contract fulfillment.</p>
                  </div>

                  <p>
                    <strong>3. Ontological Standing of the Individual &amp; Utu:</strong><br />
                    • <em>Relational Ontology:</em> Under African philosophy (Utu / Ubuntu), the individual is mutually constituted with community (“I am because we are, and since we are, therefore I am”). The individual is neither an isolated atom prior to community nor an unthinking agent absorbed by it.<br />
                    • <em>Limits of AI Mediation:</em> AI cannot govern belonging. Belonging requires embodied presence, shared vulnerability, and relational accountability. AI can reduce transaction friction, but if it attempts to score or govern identity, it degrades Utu into algorithmic control.
                  </p>
                </div>
              </section>

              {/* Question 9 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    09
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <HeartPulse className="h-6 w-6 text-gold" />
                      Healthcare, AI & the Value of a Kenyan Life
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Demographic Integral Utility • 97% vs 88% Triage • Human Duty of Care</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Utility Function Architecture:</strong></p>
                    <p>U = ∫<sub>P</sub> [ α·Acc(p) + β·Access(p) − γ·Mortality(p) − δ·Cost(p) + λ·Explainability(p) ] dp</p>
                    <p>Urban Tertiary (Acc = 97%) vs Rural Dispensaries (Acc = 88%) ──&gt; National Average = 94%.</p>
                    <p><em>Consequence:</em> Since urban tertiary hospitals treat 70% of recorded cases, optimizing global accuracy overfits to urban demographics while failing severely on rural conditions, elevating rural mortality.</p>
                  </div>

                  <p>
                    <strong>2. Ethical Evaluation of Asymmetric National Deployment:</strong> Deploying 97% urban / 88% rural accuracy is ethically unviable without explicit procedural safeguards.<br />
                    • <em>Equality:</em> Identical diagnostic models regardless of connectivity.<br />
                    • <em>Equity:</em> Distributing human specialist support preferentially to rural nodes to offset lower AI accuracy.<br />
                    • <em>Fairness:</em> Ensuring error rates are uniformly distributed (Acc<sub>rural</sub> ≈ Acc<sub>urban</sub>).<br />
                    • <em>Clinical Utility:</em> Real-world net reduction in mortality and morbidity achieved in context.<br />
                    • <em>Procedural Justice:</em> Involving rural practitioners and patients in deployment decisions and auditing.
                  </p>

                  <p>
                    <strong>3. Duty of Care:</strong> A delegated AI system has <strong>no duty of care</strong>. A duty of care requires moral agency, legal personhood, and accountability for harm. AI is an instrument. The legal and moral duty of care remains unconditionally with human practitioners, healthcare administrators, and state medical regulators.
                  </p>
                </div>
              </section>

              {/* Question 10 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    10
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Cpu className="h-6 w-6 text-gold" />
                      The AI Sovereignty Paradox
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">7-Layer Index • Future C Optimal Path • Non-Substitutable Layers</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. National AI Sovereignty Index:</strong></p>
                    <p>S = w<sub>1</sub> C<sub>compute</sub> + w<sub>2</sub> D<sub>data</sub> + w<sub>3</sub> M<sub>models</sub> + w<sub>4</sub> T<sub>talent</sub> + w<sub>5</sub> E<sub>energy</sub> + w<sub>6</sub> K<sub>capital</sub> + w<sub>7</sub> I<sub>infra</sub></p>
                    <p>• <em>Minimum Domestic Non-Substitutable Layers:</em></p>
                    <p>1. Data Sovereignty (D): Local storage and ownership of national health, agricultural, citizen records.</p>
                    <p>2. Energy Grid Stability (E): Sovereign generation capacity powering compute infrastructure.</p>
                    <p>3. Fine-Tuning &amp; Weights Control (M): Ability to run and inspect open-weight inference locally without foreign API kill-switches.</p>
                  </div>

                  <p>
                    <strong>2. Comparison of Strategic Paths:</strong><br />
                    • <em>Future A (Autarky):</em> Building domestic fabs and hardware from scratch. Fails due to prohibitive capital costs, causing technological obsolescence.<br />
                    • <em>Future B (Deep Dependency):</em> Importing closed frontier APIs. Yields short-term capability but leaves national infrastructure vulnerable to geopolitical leverage.<br />
                    • <em>Future C (Domestic Strategic Control + International Interdependence):</em> The optimal equilibrium. Kenya maintains sovereign control over domain datasets, energy infrastructure, local fine-tuning layers, and edge compute execution, while leveraging international supply chains for advanced silicon procurement.
                  </p>
                </div>
              </section>

              {/* Question 11 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    11
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Radio className="h-6 w-6 text-gold" />
                      AI, Democracy & Epistemic Warfare
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Asymmetric Cost Ratio • C2PA Ingestion • Anti-Censorship Verification</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Information Environment Model:</strong> P(Truth) = I<sub>V</sub><sup>α</sup> / [ I<sub>V</sub><sup>α</sup> + I<sub>G</sub><sup>β</sup> + σ ], where σ is baseline cognitive polarization.</p>
                    <p>As both I<sub>G</sub> and I<sub>V</sub> scale, P(Truth) does not automatically increase because generating synthetic claims is asymmetrical in cost: Cost(I<sub>G</sub>) ≪ Cost(I<sub>V</sub>). Information space faces epistemic decay, lowering citizen trust across all sources.</p>
                  </div>

                  <p>
                    <strong>2. Decentralized Information Integrity Architecture:</strong><br />
                    1. <em>Cryptographic Provenance at Ingestion:</em> News agencies and public entities sign raw media at capture using public key cryptography (C2PA standard).<br />
                    2. <em>Distributed Citizen Verification Web:</em> Multi-stakeholder auditing networks (journalists, academia, civil society) run open provenance verifiers.<br />
                    3. <em>No Centralized Censor:</em> Systems flag structural origin and modification history without giving any single agency authority to delete or block speech.
                  </p>

                  <p>
                    <strong>3. Impact on Democratic Epistemic Foundations:</strong> When citizens can no longer distinguish authentic evidence from synthetic artifacts, democratic discourse degrades from empirical deliberation to tribal allegiance. Epistemic authority collapses into institutional authority; voters fall back on identity cues rather than evaluated facts.
                  </p>
                </div>
              </section>

              {/* Question 12 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    12
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-black font-sans flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-gold" />
                      FINAL QUESTION — The Kenyan AI Paradox
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Dynamic State Vector Z(t) • Tri-Cameral Commission • Non-Reducible Flourishing HF</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>1. Integrated Mathematical Model:</strong> Dynamic state vector Z(t) = [Y, D, S, C, E, K]<sup>T</sup> (Prosperity, Dignity, Sovereignty, Culture, Ecology, Competitiveness). Z(t+1) = F(Z(t), A(t), U(t)).</p>
                    <p>Welfare: max W = ∫ e<sup>−ρt</sup> ( Y<sup>θ<sub>1</sub></sup> D<sup>θ<sub>2</sub></sup> S<sup>θ<sub>3</sub></sup> C<sup>θ<sub>4</sub></sup> E<sup>θ<sub>5</sub></sup> K<sup>θ<sub>6</sub></sup> ) dt subject to:</p>
                    <p>D(t) ≥ D<sub>min</sub>, S(t) ≥ S<sub>min</sub>, C(t) ≥ C<sub>min</sub>, E(t) ≥ E<sub>min</sub>.</p>
                    <p><em>Pareto Frontier:</em> Marginal gains in economic output (∂Y/∂A) equal marginal loss in cultural continuity (∂C/∂A) and sovereignty (∂S/∂A). Any point optimizing Y by driving S, C → 0 is Pareto-inefficient for national survival.</p>
                  </div>

                  <p>
                    <strong>3. Governance Architecture: Tri-Cameral Sovereign AI Commission:</strong><br />
                    1. <em>Technological &amp; Economic Directorate:</em> Manages infrastructure, compute allocation, and silicon imports.<br />
                    2. <em>Citizen Ethics &amp; Dignity Assembly:</em> Randomly selected citizens with veto power over deployments violating labor or privacy baselines.<br />
                    3. <em>Epistemic &amp; Cultural Council:</em> Preserves local language datasets, indigenous knowledge integration, and cultural non-alienation rules.
                  </p>

                  <p>
                    <strong>4–7. Ethical, Epistemological, Cultural &amp; Theological Foundations:</strong> Grounded in Relational Utu Ethics: human beings possess intrinsic worth that cannot be converted into utility metrics. AI is strictly an assistant to augment human relationships. Epistemic sovereignty requires non-algorithmic forms of knowing. Culture is dynamic, collective meaning-making that cannot be frozen or commodified. Theologically, humans are created in the image of God (<em>Imago Dei</em>) with a mandate for stewardship (<em>Avodah</em>); delegating ultimate moral decisions abdicates human spiritual responsibility.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs font-sans text-black/85 space-y-2">
                    <p className="font-bold font-mono uppercase text-black text-[11px] tracking-wider">Three Critical Failure Modes:</p>
                    <p>1. <em>Algorithmic Enclosure of the Informal Economy:</em> Taxation and AI tracking force informal traders into rigid formal systems, destroying livelihoods before formal jobs are created.</p>
                    <p>2. <em>Epistemic Dependency Collapse:</em> Complete reliance on foreign foundation models leads to degradation of local problem-solving capabilities.</p>
                    <p>3. <em>Elite Capture of AI Windfalls:</em> AI productivity gains accumulate exclusively among capital owners and tech elites, triggering civil instability.</p>
                  </div>

                  <p>
                    <strong>9. Failure Scenario of Preferred Policy:</strong> Kenya strictly enforces high local data sovereignty, labor taxes, and ethics verification (D<sub>min</sub>, S<sub>min</sub>). Neighboring regions adopt unconstrained AI deployment with zero compliance overhead. Foreign capital and tech investment flee Kenya for low-regulation jurisdictions, causing domestic capital flight, rapid technological obsolescence (K → 0), and economic contraction that compromises public service funding.
                  </p>

                  <div className="bg-red-50/60 p-4 rounded-xl border border-red-200/70 text-xs font-sans text-red-950 space-y-2">
                    <p className="font-bold font-mono uppercase text-red-900 text-[11px] tracking-wider">What Kenya Must Refuse to Optimize:</p>
                    <p><strong>Kenya must refuse to optimize human worth itself.</strong> Human dignity, sacred relational duty (Utu), bodily agency, and political sovereignty must never be placed in an objective function as variable trade-offs against GDP growth or technological efficiency.</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border-2 border-black/10 shadow-sm mt-8 space-y-3">
                    <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-black/60">Measurable Definition of Human Flourishing</h3>
                    <p className="font-mono text-sm sm:text-base font-bold text-black">
                      HF = [ H<sub>health</sub>, E<sub>education</sub>, A<sub>agency</sub>, U<sub>utu_connectivity</sub>, S<sub>sovereignty</sub> ]
                    </p>
                    <p className="text-xs font-mono text-black/70">
                      where HF &gt; 0 ⟺ min(H, E, A, U, S) ≥ T<sub>dignity</sub>
                    </p>
                    <p className="text-sm sm:text-base italic text-black/85 leading-relaxed">
                      “Flourishing is realized when every citizen possesses the real physical capability, economic security, social trust, and sovereign agency to live a self-determined life within a flourishing community.”
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default GeminiQ3ExamResponse;
