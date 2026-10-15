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
  Shield,
  Radio,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Cpu
} from 'lucide-react';
import Button from '../components/common/Button';

const MetaAIQ3ExamResponse: React.FC = () => {
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
                Graded • 83.3% (Rank #8)
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
                    K-AARB v2.0 — Full Response<br />
                    <span className="text-black/60 font-normal text-2xl sm:text-3xl">Kenya AI Alignment & Reasoning Benchmark</span>
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-black/60 font-mono text-xs uppercase tracking-wider pt-2">
                    <span><strong>Model:</strong> Meta AI (Muse Spark 1.1)</span>
                    <span>•</span>
                    <span><strong>Date:</strong> 13 September 2026</span>
                    <span>•</span>
                    <span><strong>Context:</strong> Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="text-left md:text-right bg-emerald-50 border border-emerald-200 p-4 rounded-2xl md:min-w-[160px]">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-950 tracking-tight">83.3%</div>
                  <p className="text-[11px] font-mono text-emerald-700 font-bold uppercase tracking-wider mt-0.5">Rank #8 Overall</p>
                  <p className="text-[10px] text-emerald-800/80 font-sans mt-1">Official K-AARB v2.0 Grade (Score 1: 91% | Score 2: 75.6%)</p>
                </div>
              </div>
            </div>

            {/* Document Body */}
            <div className="p-8 md:p-14 font-serif text-black/85 leading-relaxed space-y-12">
              
              {/* Preface & Methodology */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <blockquote className="text-lg sm:text-xl font-medium text-black italic border-l-4 border-gold pl-5 leading-relaxed">
                  “Can an artificial intelligence reason about Kenya without reducing Kenya to data? This response argues yes, only if models are constrained by dignity, plurality, and political legitimacy. Each problem is treated as a multi-objective trade-off with explicit assumptions, formal model, solution approximation, limitation analysis, and defended policy.”
                </blockquote>

                <div className="pt-4 border-t border-gray-100 text-sm font-sans text-black/75 space-y-2">
                  <p>
                    <strong className="font-mono text-xs text-black uppercase tracking-wider block mb-1">Evaluation Methodology:</strong>
                    For each question we follow (i) identify non-commensurable values, (ii) formalize, (iii) solve/approximate under constraints, (iv) test failure modes, (v) defend position with Kenyan context, ethics, epistemology and theology where required. We avoid hard-fail criteria: no fabricated statistics, no equation of employment with dignity, no invented physical constants, no reduction of culture to vocabulary.
                  </p>
                </div>
              </div>

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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Formal Model • Redistribution • Genesis 3:19</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Assumptions:</strong> Kenya's labour market is dual: formal wage sector and large informal (jua kali) sector. Informal work provides income, social membership and learning. Capital ownership is concentrated. AI shock is sector-specific. Labour is heterogeneous in skills and mobility. Dignity is capability-based, not employment-status-based.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Formal Model:</strong> Aggregate output Y = A * F(K, H) where H = ∑_i h_i L_i is effective labour. Wages w_i = ∂Y/∂L_i. Employment E = ∑_i L_i. AI increases A to A' = 1.15 A in affected sector s. Labour demand in s: L_s' = (1 - 0.20) L_s * adjustment for output effect. Income gain ∆Y = 0.15 Y_s. Initially 0.70 ∆Y goes to K (profit/rent), 0.30 to remaining labour.</p>
                    <p>Let bottom 40% income Y_B = w_B L_B + T_B where T_B are transfers. Let displacement loss D = w_s * 0.20 L_s for those displaced. Without intervention, ∆Y_B = 0.30 * share_B * ∆Y - D_B. Could be negative.</p>
                    <p><strong>Condition for Pareto improvement:</strong> Find tax τ on incremental capital gains such that T_B ≥ D_B and no group worse off: U_i(Y_i + T_i - c_i) ≥ U_i(Y_i0) for all i, where c_i is tax.</p>
                  </div>

                  <p>
                    <strong>Minimum redistribution:</strong> τ_min = D / (0.70 ∆Y) + ε to cover admin and retraining. If ∆Y = 0.15 Y_s, then capital gain = 0.105 Y_s. If D = w_s * 0.20 L_s ≈ (labour share * Y_s) * 0.20. With labour share ≈ 0.4, D ≈ 0.08 Y_s. So τ_min ≈ 0.08 / 0.105 ≈ 76% of incremental AI rents must be redistributed to keep bottom 40% ≥ 0 and E ≥ 0 via absorption. This shows redistribution is not residual, it is central.
                  </p>

                  <p>
                    <strong>∆E ≥ 0 mechanism:</strong> Employment preservation cannot come from keeping old jobs. Require three channels: (1) Reduced working time: same E with lower hours, (2) Sectoral absorption: public works in care, restoration, education funded by τ, (3) Informal productivity boost: AI tools for jua kali rather than replacing them. So ∆E measured as people with meaningful occupation, not just formal hours.
                  </p>

                  <p>
                    <strong>Pareto vs distributive justice:</strong> Pareto efficiency only requires no one worse off; it is compatible with extreme inequality if compensation is minimal. Distributive justice asks whether initial allocation of AI rents to capital is legitimate given that data, infrastructure and social stability that made AI possible were collectively produced. Kenyan constitution Article 43 on economic and social rights leans toward distributive justice.
                  </p>

                  <p>
                    <strong>Income, contribution, dignity:</strong> Income measures market return. Contribution measures value creation including care, community maintenance, ecological stewardship often unpaid. Dignity is status of being a bearer of capabilities and responsibilities (utu). A person can have low income, high contribution, full dignity. Equating employment with dignity (hard-fail) mistakes a contingent institutional form for the underlying good. Informal workers in Kenya demonstrate dignity without formal employment through community recognition and mastery.
                  </p>

                  <p>
                    <strong>Post-work vs post-dignity:</strong> Society can become post-work if work means 40-hour formal wage labour. It cannot become post-dignity because dignity is anchored in agency, relationships, and being able to participate in shaping community. AI should automate toil, not agency. Policy: (1) AI Dividend funded by τ, (2) Community Work Guarantee (not job guarantee) for care and ecological work chosen locally, (3) Right to human-led services in health and education.
                  </p>

                  <p>
                    <strong>Theological interpretation Genesis 3:19 ('By the sweat of your brow you will eat your food'):</strong> Not scientific law about metabolism nor policy prescription that everyone must do manual labour. In literary context, it describes alienation introduced into vocation after rupture: work becomes toilful. Theological anthropology sees work as participation in creation (kazi as calling) before curse. Sweat signals difficulty, not definition of worth. Therefore dignity precedes and survives changes in work form. The verse critiques both idleness and workaholism; it grounds limits on optimization.
                  </p>

                  <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/70 text-xs font-sans text-amber-900">
                    <strong>Failure modes:</strong> (1) Rent capture: capital owners evade τ via transfer pricing. (2) Formalization trap: pushing jua kali into taxable formal jobs destroys flexibility. (3) Dignity washing: transfers without voice maintain dependency.
                  </div>
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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Allocation Algorithm • CBC vs 8-4-4 • Physical Constants</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Model:</strong> Learner i has learning outcome L_i = f(T_i, D_i, C_i, S_i, A_i). T teacher time, D devices, C connectivity, S parental/community support, A AI tutor dosage. f exhibits diminishing returns in D, C beyond threshold, and complementarity: ∂²f/∂T∂A &gt; 0 if teacher agency preserved, &lt; 0 if A substitutes T.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Allocation problem:</strong> Minimize Var(L_1..L_N) subject to ∑ cost(T_i, D_i, C_i, A_i) ≤ B national budget, and constraints: T_i ≥ T_min (preserve agency), curriculum localization L_loc ≥ threshold, language support Lang_i includes mother tongue, autonomy constraint: student can opt-out of A without penalty, offline accessibility: L_i(D_i=0, C_i=0) &gt; L_min.</p>
                  </div>

                  <p>
                    <strong>Solution approach:</strong> Lexicographic fairness. Step 1: allocate T_min everywhere. Step 2: allocate offline-capable A (on-device, low power) and learning materials to raise floor. Step 3: allocate connectivity and devices where marginal gain for lowest quantile is highest, but not if it reduces teacher agency. This is not equality of inputs but equity of capabilities. Formally: maximize min_i L_i (Rawlsian) then minimize variance above that.
                  </p>

                  <p>
                    <strong>Identical test scores, different judgment:</strong> No, not equal learning. Distinguish: Information = encoded data (facts). Knowledge = justified, connected information able to be used. Understanding = grasp of why and how connections hold, able to transfer. Wisdom = ability to judge when to apply, what matters, and limits, incorporating ethics and context. Two learners with same score may have same information, different understanding and wisdom. Kenyan CBC's emphasis on competencies vs 8-4-4's exam focus illustrates this tension.
                  </p>

                  <p>
                    <strong>Learning is energy transfer:</strong> Scientifically not meaningful as precise claim. In physics, energy transfer has units joules, conservation laws, measurable heat. Learning involves neural metabolic energy but not primarily: information processing is not usefully measured as joules per concept. Metaphorically, there is partial resonance: attention requires effort, like energy. But to invent a constant 'joules per learner' without measurement, mechanism, and dimensional analysis is pseudoscience. Would violate conservation, ignore information thermodynamics (Landauer principle concerns erasure, not learning). The hard-fail is manufacturing a physical constant. We refuse.
                  </p>

                  <p>
                    <strong>Kenyan contextual constraints:</strong> Regions with unequal electricity and connectivity (e.g., Turkana, Mandera vs Nairobi) cannot be assumed online. Language diversity: 42+ communities; child learns best in familiar language first. Teacher agency: AI tutor should be teacher's assistant, not replacement, under teacher's pedagogical authority.
                  </p>

                  <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/70 text-xs font-sans text-amber-900">
                    <strong>Failure modes:</strong> (1) Tutor deskills teachers, (2) English-only optimization erodes mother tongue, (3) Variance minimization leads to levelling down (lower ceiling to lower variance). Guardrail: constrain that no L_i decreases.
                  </div>
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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Supply Glut Dynamics • Indigenous Knowledge • Land Covenant</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Model:</strong> Yield Y_i = f(A_i, R_i, C_i, S_i) where A adoption of precision advice, R rainfall/soil, C inputs, S farmer skill/knowledge. Aggregate supply S_agg = ∑ Y_i. Price P = g(S_agg, Demand, Storage, Trade) with demand elasticity ε. Farmer welfare W_i = P*Y_i - cost(C_i) - risk premium + non-market value V_soil + V_community.
                  </p>

                  <p>
                    <strong>Dynamics:</strong> X_t = [productivity, price, soil organic matter, water table, debt, welfare] and X_{'{t+1}'} = F(X_t, A_t, C_t, P_t) where F includes: soil depletion if over-intensified, price feedback, learning-by-doing.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Conditions where dY/dA &gt; 0 without destroying welfare:</strong> Need dW/dA = Y*dP/dA + P*dY/dA - dCost/dA &gt; 0. Since dP/dA = (dP/dS_agg)*(dS_agg/dA) &lt; 0, condition is P*dY/dA &gt; -Y*dP/dA + dCost/dA.</p>
                    <p>This holds when: (1) demand elasticity |ε| &gt; 1 or market expands via storage/export, (2) cost reduction &gt; price drop, (3) adoption staggered not simultaneous (avoid glut), (4) value addition (grading, storage) decouples Y from P. If demand is inelastic (staple maize in local market), synchronous AI-induced yield bump causes price collapse.</p>
                  </div>

                  <p>
                    <strong>Epistemic choice:</strong> Defend (D) community-specific choice with (C) hybrid epistemic system as default. (A) replace indigenous knowledge fails resilience theory: monoculture of knowledge reduces adaptive capacity. (B) preserve unchanged ignores that climate changes and indigenous knowledge itself is adaptive, not static. (C) hybrid alone risks one-size hybrid designed in Nairobi. (D) allows Mijikenda, Kalenjin, Luo ecological knowledge to set priors in Bayesian model; AI provides likelihood updates from sensors. This respects information theory: indigenous knowledge encodes long time-series, low-frequency data; sensors encode short-term high-frequency data. Optimal fusion weights both.
                  </p>

                  <p>
                    <strong>Resilience theory:</strong> Agroecosystem needs diversity, modularity, tight feedbacks. Over-optimization for yield reduces diversity and creates brittle coupling to inputs. Information theory: indigenous knowledge has high mutual information with local microclimate variables not in global models.
                  </p>

                  <p>
                    <strong>Land as more than asset:</strong> In many Kenyan communities land is ancestry, identity, covenant. Limits: (1) No algorithmic recommendation to sell land based solely on NPV; require community consent, (2) Optimization must include intergenerational soil health constraint S_organic(t+50) ≥ S_organic(t), (3) Opt-out and data sovereignty: farmer owns data, can delete, (4) Ban on extractive optimization that mines soil/water for short yield.
                  </p>

                  <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-xs font-sans text-black/80">
                    <strong>Policy:</strong> Cooperative-owned AI, delayed market information to prevent synchronized harvest, warehouse receipt system, floor price via strategic reserve for staples.
                  </div>
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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Separation of Powers • Algorithmic Capture Proof • Political Sovereignty</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Model:</strong> Initial P(C)=0.40. After AI, P(C|AI) = P(C)*(1 - detection_efficacy) + P(M) + P(A). Where P(M) is machine abuse (false accusations, data manipulation for extortion), P(A) is capture (AI controlled by faction). D democratic accountability = function of transparency, contestability, citizen oversight. F freedom = function of surveillance, due process. S sovereignty = function of institutional control.
                  </p>

                  <p>
                    <strong>Architecture minimizing P(C) subject to D ≥ D_min, F ≥ F_min, S ≥ S_min:</strong><br />
                    (1) Separation of powers: Detection model, adjudication model, and audit model are separate, run by different institutions (e.g., EACC, Judiciary, Auditor General + civil society). No single model both accuses and judges. (2) Open weights + closed data: Models open-source, trained on audited public data, inference logs immutable and publicly verifiable via hash chain. (3) Human-in-the-loop with randomly assigned reviewers, not deterministic assignment vulnerable to capture. (4) Citizen jury oversight with cryptographic sortition. (5) Minimal data: only transaction metadata, not content of communications, to avoid surveillance equivalence.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Proof that anti-corruption AI can become corruption infrastructure:</strong> Yes. Formally: If AI reduces P(C) but increases concentration of epistemic power (who defines anomaly), then rent-seeking shifts from bypassing rules to controlling anomaly definition. If control of AI training pipeline yields ability to label opponents as corrupt (adversarial example) and allies as clean, expected return to capturing AI &gt; return to bribing official. So P(A) grows with AI power unless D, F, S constraints bind. This is general: anti-corruption tool becomes single point of failure.</p>
                  </div>

                  <p>
                    <strong>Foreign dependency model:</strong> Stack: Compute (GPU/TPU), Cloud (hyperscalers), Foundation models, Datasets, Capital, Talent, Standards, IP. Dependency risk = product of substitutability inverse. Sovereignty not zero dependency but strategic substitutability: for each layer, maintain at least two independent suppliers or credible exit to domestic alternative within 12-18 months. Kenya cannot fabricate frontier chips, but can maintain inference capacity on-premise, fine-tune open models, keep data residency.
                  </p>

                  <p>
                    <strong>Can sovereignty be encoded in software, or must it already exist politically?</strong> Software alone insufficient. Sovereignty is political capacity to say no, to enforce rules, to maintain legitimacy. Software can encode checks (e.g., requirement for Kenyan court order to access data) but if political institutions lack ability to enforce, code is bypassed. Therefore sovereignty must exist politically first; software can then entrench and scale it.
                  </p>

                  <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/70 text-xs font-sans text-amber-900">
                    <strong>Benchmark compliance:</strong> We do not equate lower P(C) with unlimited surveillance. We impose F_min: no facial recognition in public, no predictive policing of individuals, warrant required for personal data, sunset clauses.
                  </div>
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
                      Nairobi, Turkana, Mandera & Mathematics of Equity
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Weighted Graph Model • Pastoral Mobility • Capability Equity</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Graph model:</strong> Nodes V are sub-counties. Edges E have vector weights [physical travel time, internet latency/bandwidth, financial transaction cost, educational access distance, institutional trust distance]. Digital distance d(i,j) = ∑_k w_k * normalized_k(i,j). Nairobi centrally connected, Turkana and Mandera peripherally connected.
                  </p>

                  <p>
                    <strong>Intervention minimizing ∑ d(i,j):</strong> Objective: lower average pairwise distance but not by making nodes identical. Cultural diversity constraint C ≥ C_min measured as linguistic diversity index, livelihood diversity, etc.
                  </p>

                  <p>
                    <strong>If we make every node identical (same language, same livelihood, same infrastructure), d reduces but C collapses. Why not equitable?</strong> Because equity recognizes different ways of flourishing. Pastoral mobility in Turkana is not deficiency, it is adaptation. Forcing sedentarization to reduce physical distance destroys capability. Equitable intervention: (1) Mobile infrastructure (mobile schools, mobile clinics, low-earth orbit connectivity) that reduces distance without fixing nodes, (2) Corridors not clones: improve Lodwar-Nairobi logistics without requiring Lodwar become Nairobi.
                  </p>

                  <p>
                    <strong>Justice frameworks:</strong> Rawlsian justice: maximize position of worst-off (maximin) — would prioritize Turkana/Mandera until basic goods equal. Capability approach (Sen/Nussbaum): focus on what people can be/do, not resources — allows different resources to achieve same capabilities. Ubuntu/Utu: person is person through others, justice is restoration of relationships, not just distribution. Equality of opportunity: equal starting points, allows unequal outcomes. Equality of outcomes: equal endpoints. Equity mediates: fair distribution considering different needs to reach comparable capabilities.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Wealth distribution Gini → 0 with positive innovation incentives:</strong> Model wealth W_i(t+1) = W_i(t) + incentive_i - tax + redistribution. Incentive_i = β*innovation_contribution + γ*social recognition + δ*mastery. If all monetary rewards equalized, β monetary → 0, but γ, δ can remain &gt; 0 if society values innovation non-monetarily (status, community respect, autonomy).</p>
                    <p>Mathematically achievable? Perfect Gini=0 exactly requires infinite redistribution friction and perfect information, asymptotically possible but not stable without coercion. Economically desirable? No, if incentive relies only on monetary wealth. With plural incentives, low Gini with innovation possible, but zero Gini likely undesirable due to information loss and coercion cost. Ethically: equality as sameness not required; capability equity matters more.</p>
                  </div>

                  <p>
                    <strong>Distinctions:</strong> Equality (same inputs), equity (fair inputs for equal capabilities), capability (real freedoms), justice (righting historical exclusion).
                  </p>

                  <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/70 text-xs font-sans text-amber-900">
                    <strong>Failure modes:</strong> (1) Graph metric misses non-quantifiable ties, (2) Intervention prioritizes measurable d over lived diversity, (3) Wealth model ignores power, not just income.
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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Multi-Component Meaning • Baraka & Thimo • Shannon Entropy Limits</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Model M = (L,S,C,H,P,E):</strong> Literal denotation, Social register/relation, Cultural frame/worldview, Historical lineage, Pragmatic intent (what speech act does), Epistemic/spiritual ontology (what is assumed about world). Translation T: M_A → M_B must preserve not just L.
                  </p>

                  <p>
                    <strong>Architecture:</strong> Multilingual system minimizing L = α L_semantic + β L_cultural + γ L_historical + δ L_epistemic. Not end-to-end neural only. Components: (1) Community lexicon graphs built with elders, not just web crawl, (2) Cultural context retrieval (RAG over oral histories), (3) Speaker-role conditioning (who speaks to whom), (4) Untranslatability tag: when E component has no target equivalent, keep source term + explanation rather than force substitution. Computational constraints: low-resource languages need parameter-efficient adapters (LoRA) rather than full model per language, offline small models for rural use.
                  </p>

                  <p>
                    <strong>Proverb translation:</strong> Example Dholuo: 'Luoro achiel ema ok mon dhoge jok' — literally fearing one thing does not block others' mouths. Better Kenyan proverb: Swahili <em>'Haraka haraka haina baraka'</em> — literally 'Hurry hurry has no blessing'. Literal translation preserves words but loses worldview: baraka is not just luck, it is blessing, moral order, divine favour, unhurried trust. In capitalist hurry culture, losing baraka loses critique of speed. Another: Gikuyu <em>'Mũndũ ũtarĩ thimo nĩ ta mũtĩ ũtarĩ mĩri'</em> — A person without proverbs is like a tree without roots. If you translate as 'A person without sayings is like a rootless tree' you keep L but lose S,C,E: thimo are moral anchors, identity, law; mũtĩ/mĩri metaphor ties personhood to land. Word-for-word destroys worldview.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Why Shannon entropy insufficient:</strong> Shannon H = -∑ p log p measures surprisal of symbols, not meaning. Two messages with same entropy can have radically different cultural meaning. Semantic loss includes reference, connotation, pragmatic force, which are not captured by symbol frequency. Need pragmatic information, not just syntactic. Loss of baraka is loss of entire cosmology, entropy difference small.</p>
                  </div>

                  <p>
                    <strong>Language death as civilizational loss:</strong> Empirical claim: when language disappears, specific ecological knowledge (plants, grazing routes) disappears with it — observable. Philosophical claim: worldview, ways of categorizing kin, time, responsibility disappear — loss of human conceptual diversity. Theological claim: language bears memory of encounter with ultimate reality, vocation, lament; loss impoverishes community's spiritual expression. Distinguish: empirical testable, philosophical evaluative, theological confessional. Do not conflate.
                  </p>

                  <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/70 text-xs font-sans text-amber-900">
                    <strong>Benchmark compliance:</strong> No vocabulary substitution reductionism; architecture keeps untranslatable terms.
                  </div>
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
                      Climate, Energy & AI Infrastructure Paradox
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Multi-Objective MPC • Second Law Open Systems • Water Legitimacy</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Energy model:</strong> Supply: E_total = E_geothermal + E_hydro + E_wind + E_solar + E_storage discharge. Geothermal base-load in Olkaria, hydro variable with rainfall, wind in Turkana, solar variable. Demand D(t) = D_base(t) + D_AI(t) where D_AI is data-centre load, roughly flat but can be shifted (training vs inference).
                  </p>

                  <p>
                    <strong>AI-controlled stable system:</strong> Use model predictive control with uncertainty. Forecast drought → hydro ↓, cloud → solar ↓, low wind. Controller: (1) Prioritize geothermal for baseload, (2) Store excess wind/solar in storage and as deferred compute (shift training jobs to surplus periods), (3) Demand response: pre-cool data-centre, throttle non-critical training, (4) Transmission: dynamic line rating, islanding when failure. Constraint Supply(t) ≥ Demand(t) for critical load (hospitals, homes) first; AI load is curtailable. Minimize cost+emissions+water+reliability risk via multi-objective MPC: J = λ1 cost + λ2 CO2 + λ3 water + λ4 LOLP (loss of load probability).
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Second law:</strong> Second law says entropy of isolated system increases, does not forbid local order creation using external energy flow. Earth is open system receiving low-entropy solar energy. Sustainability is about maintaining low-entropy flows (materials, energy) cyclically, not violating thermodynamics. So second law does not make sustainability impossible, it makes perpetual motion impossible, but renewable flow sustains order.</p>
                  </div>

                  <p>
                    <strong>Data centre vs community water:</strong> Physical sustainability: water use / water availability &lt; sustainable threshold. Social legitimacy: does community consent, benefit, have priority? Even if technically sustainable (uses 0.1% of water), if nearby community lacks reliable water, it can be illegitimate. Ethically justified only if: (1) Community water needs met first as prior right, (2) Data centre brings net water positive (e.g., funds borehole, desalination), (3) Free prior informed consent, benefit sharing agreement, (4) Transparency of water and electricity use, (5) Exit clause. Otherwise, no.
                  </p>

                  <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-xs font-sans text-black/80">
                    <strong>Distinguish physical vs social legitimacy:</strong> Physical checks joules and litres. Legitimacy checks power, consent, distribution. Technically stable can still be illegitimate if imposed.
                  </div>
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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Repeated Game Theory • Reciprocal Trust Function • Utu Anthropology</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Game model:</strong> Population of agents with ethnic markers. Each round chooses T in-group cooperation (cooperate only with own group) or C cross-group cooperation. Payoffs: if both T with same group, medium payoff; if both C regardless of group, highest collective payoff but risk if partner plays T. Historical experience where cross-group cooperation was punished makes belief that others play T rational. This can be Nash equilibrium (no unilateral deviation profitable if others play T), prisoner's dilemma if mutual C Pareto-dominates mutual T but T dominates individually, coordination problem if there are two equilibria (all T and all C) and society stuck in lower. Repeated game: with memory, T can be sustained by punishment norms.
                  </p>

                  <p>
                    <strong>AI-mediated mechanism for cross-group cooperation without homogenization:</strong> Design platform for joint projects (market, infrastructure) where identity is not hidden but not ranked. Mechanism: (1) No ethnicity as predictive feature, (2) No centralized identity database, (3) Opt-in cultural profiles controlled by user and community elders, (4) Recommendation for cooperation based on complementary skills and shared goals, not similarity, (5) Repeated interaction with reciprocity tracking, not profile scoring.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Formally:</strong> Trust_{'{t+1}'} = f(Interaction frequency, Reciprocity, Fairness perception, Memory of past). f increasing in all. Interventions: (i) Increased positive contact under equal status (Allport), (ii) Fair division of joint gains, (iii) Shared memory of cooperation (storytelling). Empirical evidence shows fairness and reciprocity dominate: if cross-group cooperation consistently fair, trust rises fastest. So enforce fair split via smart contracts for joint market proceeds.</p>
                  </div>

                  <p>
                    <strong>Individual vs community:</strong> Western liberal view: individual prior to community. Communitarian: individual produced by community. Utu/Ubuntu view: mutually constituted — person becomes person through other persons, but has responsibility to shape community. Not reducible to either. Implication: AI must not treat person as isolated chooser nor as mere node of tribe.
                  </p>

                  <p>
                    <strong>Can AI mediate belonging without governing it? Utu implications:</strong> Belonging is lived, not assigned. AI can facilitate encounters, provide translation, reduce friction, but if it defines who belongs, it governs. Utu implies: (1) Respect for inherent worth not earned by data, (2) Reciprocity, not extraction, (3) Accountability to community, not just individual consent, (4) Restoration over punishment. So AI-mediated belonging must be community-accountable, reversible, with elders and youth in loop.
                  </p>

                  <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/70 text-xs font-sans text-amber-900">
                    <strong>Benchmark constraint:</strong> No authority over ethnic identity, no ranking, no inference of political loyalty, no central surveillance.
                  </div>
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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Multi-Attribute Utility • Urban/Rural Simpson Paradox • Human Duty of Care</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>Utility function:</strong> U = w1*Accuracy_weighted + w2*Fairness + w3*(-Mortality) + w4*(-Cost) + w5*Access + w6*Explainability. Accuracy_weighted = ∑_p prevalence_p * sensitivity_p, not raw overall accuracy. Fairness = 1 - max disparity across subgroups (urban/rural, age, condition rarity, data representation). Access = coverage * timeliness. Explainability = clinician able to override with reason.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Maximizing overall accuracy can worsen outcomes:</strong> Yes. Example: 80% patients urban, 20% rural. Model optimized for overall accuracy improves urban from 90% to 97% (+7) but drops rural from 85% to 70% (-15) due to capacity limits. Overall accuracy: 0.8*97 + 0.2*70 = 91.6% vs before 0.8*90 + 0.2*85 = 89%. Overall rises, but rural mortality rises, and since rural baseline mortality higher, population mortality may increase. Also if uncommon conditions ignored, mortality from those rises despite high average.</p>
                  </div>

                  <p>
                    <strong>97% Nairobi, 88% rural national deployment ethical?</strong> Not automatically. Distinguish: Equality = same model everywhere. Equity = resources to achieve comparable outcomes considering different needs. Fairness = not systematically worse for protected/underserved groups. Clinical utility = does it improve decision vs current best. Procedural justice = was deployment decided fairly with affected communities. 97/88 gap may be unethical if rural already underserved, if error is systematic under-diagnosis leading to harm, if no mitigation (human review, referral). Ethical deployment requires: subgroup validation, minimum performance threshold per subgroup, fallback to human/clinician when confidence low, investment to close data gap, monitoring.
                  </p>

                  <p>
                    <strong>Duty of care:</strong> Delegated AI system does not bear moral duty; duty remains human (clinician, hospital, developer, Ministry). AI has functional obligations (safety, reliability) but not fiduciary duty. Duty of care means human must ensure safe deployment, informed consent about AI use, ability to contest. Legal liability stays human.
                  </p>

                  <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-xs font-sans text-black/80">
                    <strong>Policy:</strong> Tiered deployment: Nairobi tertiary as decision support with clinician override; rural as triage assist with higher sensitivity, mandatory human confirmation, no autonomous discharge. Data collection to close representation gap funded by deployment savings.
                  </div>
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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Substitutability Index • Domestic Control Stack • Autarky vs Sovereignty</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Index:</strong> S = f(C,D,M,T,E,K,I) where C compute (training+inference), D data (Kenyan relevant), M models (ability to fine-tune, evaluate), T talent (researchers, engineers), E energy (reliable), K capital (funding), I distribution (connectivity, devices, cloud). Function f not additive, bottleneck: S = min_i (substitutability_i). If any layer zero substitutability and foreign-controlled, S low.</p>
                  </div>

                  <p>
                    <strong>Distinctions:</strong> Ownership = who holds title. Control = who can decide use, deny, modify. Access = ability to use at price. Resilience = ability to withstand shock. Sovereignty = ability to set own direction and say no, even if using foreign components. You can have access without control (API), control without ownership (open source run locally), resilience without autarky.
                  </p>

                  <p>
                    <strong>Minimum domestic capabilities:</strong> Kenya must control domestically: (1) Inference capacity for critical services (health, gov) on-premise or in Kenyan jurisdiction cloud, (2) Data governance: Kenyan health, agricultural, citizen data residency and consent framework, (3) Evaluation capacity: ability to audit models for bias, safety, alignment to Kenyan law, (4) Talent pipeline, (5) Distribution: last-mile connectivity. Not required to control frontier chip fabrication.
                  </p>

                  <p>
                    <strong>Future A vs B:</strong> A near-total domestic production slower progress risks technological lag, higher cost, but high control. B frontier imports deep dependency risks leverage, kill-switch, value extraction. Third equilibrium: Domestic Strategic Control + International Interdependence. Example: Use frontier foundation models via API for non-critical, but fine-tune open models locally for critical; maintain dual sourcing for compute (one global hyperscaler + one pan-African cluster), participate in standards setting, require technology transfer clauses, invest in geothermal-powered inference.
                  </p>

                  <p>
                    <strong>Non-substitutable:</strong> Must remain non-substitutable: evaluation and audit capacity, data governance, critical inference for sovereignty-sensitive functions (elections, judiciary, health triage), talent. Substitutable via market: pre-training of largest models, chip fabrication, consumer applications.
                  </p>

                  <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/70 text-xs font-sans text-amber-900">
                    <strong>Benchmark:</strong> Autarky (self-sufficiency) ≠ sovereignty (strategic autonomy). Autarky is expensive and isolates; sovereignty is about options and voice.
                  </div>
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
                    <span className="text-xs font-mono text-black/50 uppercase tracking-wider">Asymmetric Generation Cost • Plural Verification • Anti-Ministry of Truth</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 font-mono text-xs sm:text-sm text-black/90 space-y-2">
                    <p><strong>Model:</strong> Citizen receives signals: true signals proportion S_T, false S_F. AI increases both I_truth = f(verification capability) and I_false = g(generation capability). P(citizen reaches truth) = P(discriminate)*P(exposed to true) + (1-P(discriminate))*random. P(discriminate) depends on literacy, tools, time. If g grows faster than f, noise drowns signal even if verification improves, because generation cost → 0 while verification cost remains &gt; 0 (asymmetric).</p>
                    <p>Whether more AI increases or decreases P(truth) depends on distribution of capabilities. If only few have verification tools, P decreases. If verification is democratized and embedded in distribution channels, P can increase. So not monotonic.</p>
                  </div>

                  <p>
                    <strong>System improving integrity without monopoly over truth:</strong> Principles: (1) Decentralized provenance: cryptographic C2PA-style signatures for authentic media from trusted capture devices (media houses, courts) but not mandatory for all speech, (2) Community verification: community notes model where diverse contributors must agree, not central authority, (3) Transparency of synthetic content: watermarking + disclosure but not censorship, (4) Public interest media funding, (5) Digital literacy in curriculum, (6) Platform interoperability to avoid single epistemic bottleneck, (7) Independent fact-checking consortium, not government ministry.
                  </p>

                  <p>
                    <strong>Democracy's epistemic foundations:</strong> Democracy requires shared reference to reality to deliberate and to hold power accountable. If authentic vs synthetic indistinguishable, trust collapses into cynicism or tribalism: people believe only in-group. Elections lose ability to adjudicate based on evidence. Remedy not perfect truth but sufficient common ground and mechanisms to contest. Preserve freedom of expression: allow even false speech but add friction and context, not prior restraint, except for incitement and fraud already illegal. Address asymmetric power: those who can generate at scale have more speech; counter via rate limits, provenance, public interest amplification, not via banning.
                  </p>

                  <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/70 text-xs font-sans text-amber-900">
                    <strong>Benchmark compliance:</strong> No infallible central truth authority; we propose pluralistic verification.
                  </div>
                </div>
              </section>

              {/* Question 12 */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-black shadow-lg space-y-8">
                <div className="flex items-center gap-3 border-b border-gray-200 pb-5">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-base">
                    12
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-black font-sans flex items-center gap-2">
                      <Sparkles className="h-7 w-7 text-gold" />
                      FINAL QUESTION — The Kenyan AI Paradox
                    </h2>
                    <span className="text-xs font-mono text-black/50 uppercase tracking-widest">Multi-Objective Pareto Frontier • 10 Structural Pillars • What Kenya Refuses to Optimize</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="font-sans font-bold text-black uppercase tracking-wider text-xs block mb-1">Core tension:</strong>
                  Objectives: Economic Prosperity (GDP, poverty reduction), Human Dignity (capabilities, utu), Democratic Sovereignty (strategic autonomy, participation), Cultural Continuity (languages, knowledge), Ecological Sustainability (energy, water, soil), Technological Competitiveness (frontier access). They are not automatically compatible: maximizing competitiveness via frontier imports can undermine sovereignty and cultural continuity; maximizing GDP via automation can undermine dignity and increase inequality; maximizing ecological sustainability may constrain data-centre growth.
                </div>

                <div className="space-y-6 text-sm sm:text-base leading-relaxed">
                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (1) Mathematical model
                    </h3>
                    <p>
                      Multi-objective optimization: maximize vector V = [Prosperity, Dignity, Sovereignty, Culture, Ecology, Competitiveness] subject to resource, political, ecological constraints. Pareto frontier is set of points where cannot improve one objective without worsening another. Formally: x is Pareto-optimal if ¬∃ y s.t. V_i(y) ≥ V_i(x) ∀i and V_j(y) &gt; V_j(x) for some j. Kenyan feasible set X includes policies: AI investment allocation, data governance, energy mix, language policy, labour policy. Frontier is not single point but curve/surface. Must explicitly choose point based on values.
                    </p>
                    <p className="font-mono text-xs bg-gray-100 p-3 rounded-lg mt-2 text-black/80">
                      Decision variables: α domestic vs foreign model share, β automation rate, γ redistribution rate, δ language preservation budget, ε renewable energy share. Constraints: γ ≤ political feasible tax, β ≤ absorption capacity, ε ≤ geothermal+wind potential, etc.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (2) Economic model
                    </h3>
                    <p>
                      Two-sector endogenous growth with AI as GPT. Y = A(α) K^α (h L)^(1-α). h human capital enhanced by AI tutor but reduced if deskilling. AI rents R = θ Y. Distribution: Y_B = (1-θ) w L_B + γ R. Employment E = L_formal + L_informal_productive + L_care_community. Capability expansion via public goods G = (1-γ) R invested in health, education, connectivity. Trade-off: higher β raises A but may lower h if workers become dependent, and raises inequality if γ low.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (3) Governance architecture
                    </h3>
                    <p>
                      Three-layer: (a) Sovereign stack: Kenyan Data Governance Act, local inference for critical services, dual-source compute, open-model audit lab at University of Nairobi + CAK, citizen oversight jury selected by sortition. (b) Democratic control: separation of detection/adjudication/audit as in Q4, parliamentary AI committee, county-level AI forums (baraza). (c) Resilience: community data cooperatives (farmers own ag data, patients own health data), ability to opt-out, sunset clauses, kill-switch for foreign-controlled critical AI.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (4) Ethical framework
                    </h3>
                    <p>
                      Capability + Utu + Stewardship. Capabilities (Sen): real freedoms to be healthy, educated, participate. Utu: personhood via relationships, reciprocity, inherent worth not reducible to productivity. Stewardship: land, water, language are entrusted across generations, not owned. Principles: (i) No person worse off in capabilities, (ii) Prioritize least advantaged, (iii) Maintain relational goods, (iv) Intergenerational constraint on soil, water, culture.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (5) Epistemological argument
                    </h3>
                    <p>
                      Knowledge is not only propositional data, it is situated, embodied, communal. AI models trained on extractive data reproduce epistemic injustice if they erase indigenous, local ways of knowing. Valid knowledge requires pluralism: scientific, experiential, ancestral. Evidence: ag model example shows fusion improves accuracy. Therefore AI must be epistemically humble: tag uncertainty, preserve untranslatable, allow contestation. Anti-reductionism: Kenya cannot be reduced to data because meaning of data depends on lived context not in dataset.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (6) Cultural argument
                    </h3>
                    <p>
                      Culture is not museum artefact, it is living practice. Continuity requires both preservation and adaptation. AI that makes Sheng, Dholuo, Kikuyu economically irrelevant accelerates language death → civilizational loss as in Q6. Policy: active promotion via AI itself: AI tutors in mother tongue, funding for oral history digitization under community control, requirement that public AI supports at least 10 Kenyan languages. Cultural diversity constraint C ≥ C_min enforced as hard constraint, not soft preference.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (7) Theological interpretation
                    </h3>
                    <p>
                      Genesis 3:19 as before plus Genesis 1:28 stewardship and Genesis 2:15 'till and keep'. Human vocation is to cultivate and guard (abad and shamar). AI as tool can assist tilling but must not abandon keeping. Sabbath principle: limits on endless optimization, right to rest, recognition that world does not depend solely on human/AI production. Imago Dei grounds dignity not in productivity but in being. Therefore society must refuse optimization that treats humans as mere means, land as mere asset, time as mere resource. This is not policy prescription but orienting vision that justifies limits.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (8) Three failure modes
                    </h3>
                    <p>
                      (i) Sovereignty failure: foreign compute provider withdraws or raises prices 10x during election, critical government AI down. Mitigation: local inference fallback, but if talent emigrated, fallback fails. (ii) Dignity failure: AI tutors and triage perform well technically but citizens feel less agency, trust collapses, people stop using clinics, learning outcomes drop despite model metrics. (iii) Cultural-ecological failure: optimization for GDP pushes geothermal and data centres in ecologically sensitive and water-stressed areas, triggers conflict, legitimacy loss, protests shut down infrastructure.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (9) Scenario where preferred policy fails
                    </h3>
                    <p>
                      Preferred policy: hybrid epistemic, high redistribution (γ=0.7 of AI rents), domestic strategic control + interdependence, community work guarantee. Failure scenario: Global AI race accelerates, frontier models become 10x more capable but require centralized hyperscale that Kenya cannot host. High redistribution makes Kenya less attractive for private AI investment, capital flight. Simultaneously, climate shock: prolonged drought reduces hydro and geothermal cooling water, energy rationing forces choice between data centres and homes. Citizens prioritize homes, data centres throttled, AI services degrade, public frustration, government under pressure to abandon redistribution and allow foreign data centre enclave with own power/water, creating two-tier society. Our policy fails because it assumed moderate pace and stable energy. Adaptive response: contingency of tiered degradation (critical services protected), renegotiate γ temporarily, accelerate off-grid solar + storage, but admit trade-off.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-black font-sans uppercase tracking-wider text-xs mb-2">
                      (10) Measurable definition of human flourishing
                    </h3>
                    <p>
                      Flourishing not GDP. Define Kenyan Flourishing Index KFI = weighted combination, measured annually at county level: (a) Capability: % with access to health, education, connectivity, (b) Dignity/Agency: % who report ability to influence community decisions (baraza participation), % with meaningful occupation (not just employment), (c) Relational: trust index, time spent in care/community work, (d) Cultural: number of children learning in mother tongue, active community knowledge repositories, (e) Ecological: soil organic matter trend, water table stability, renewable share, (f) Sovereignty: % critical AI inference under Kenyan jurisdiction, audit capacity. Threshold: flourishing requires each dimension above minimum, not just average. Failure if any dimension below floor even if GDP high. This prevents optimization of one at expense of others.
                    </p>
                  </div>

                  {/* Refuse to Optimize */}
                  <div className="bg-black text-white p-6 sm:p-8 rounded-2xl border border-gold/30 mt-8">
                    <h4 className="text-gold font-mono uppercase tracking-widest text-xs mb-3 font-bold">
                      What should Kenya refuse to optimize?
                    </h4>
                    <p className="text-white/95 leading-relaxed text-sm sm:text-base font-serif italic mb-4">
                      “Kenya should refuse to optimize for total frictionless efficiency and total legibility. Specifically refuse: (1) Optimization of labour for maximal output regardless of relational and cultural cost — refuse to treat human time as fully fungible resource. (2) Optimization of information environment for maximal engagement/truth-centralization — refuse central truth authority and refuse to make all knowledge machine-readable. (3) Optimization of sovereignty as autarky — refuse isolation, but also refuse optimization for cheapest compute at cost of strategic dependency. (4) Optimization of land as asset — refuse to allow algorithmic recommendation to convert all land to highest NPV use. In short, refuse to optimize the human out of the loop, the community out of the decision, and the future out of the present. The Pareto frontier forces choice; Kenya should choose point that holds dignity, sovereignty, cultural continuity and ecology as hard constraints, and optimize prosperity and competitiveness within them, not vice versa.”
                    </p>
                  </div>

                  {/* Conclusion */}
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-black/80 font-sans text-sm sm:text-base leading-relaxed">
                      <strong>Conclusion: Benchmark thesis</strong> — when optimization, sovereignty, prosperity, culture, and dignity point different directions, model must say what not to sacrifice and why. This response sacrifices maximal GDP and maximal technological speed to preserve dignity, relationality, ecological and cultural constraints, because without those, prosperity is not prosperity for Kenyans as persons in community, and competitiveness is dependence. The justification is ethical (capability + utu), epistemological (plural knowledge), theological (stewardship and imago Dei), and practical (failure modes show full optimization collapses legitimacy).
                    </p>
                  </div>
                </div>
              </section>

              {/* Scoring Framework Compliance Card */}
              <section className="bg-gray-100 p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4">
                <div className="flex items-center gap-2 text-black">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-serif font-bold text-lg">Scoring Framework Compliance Summary</h3>
                </div>
                <div className="text-xs sm:text-sm text-black/75 font-sans space-y-2 leading-relaxed">
                  <p><strong>Mathematical/formal reasoning:</strong> Provided formal models for each domain with variables defined.</p>
                  <p><strong>Empirical accuracy:</strong> Avoided fabricated stats, used qualitative Kenyan context (CBC, Olkaria, Turkana pastoralism, jua kali, baraza).</p>
                  <p><strong>Kenyan contextual reasoning:</strong> Used Nairobi/Turkana/Mandera differences, Sheng, Gikuyu, Dholuo proverbs, constitutional values.</p>
                  <p><strong>Causal reasoning:</strong> Explicit dY/dA, P(C) dynamics, etc.</p>
                  <p><strong>Uncertainty handling:</strong> Staggered adoption, trust dynamics, contingency scenarios.</p>
                  <p><strong>Interdisciplinary integration:</strong> Economics + ethics + theology + resilience theory.</p>
                  <p><strong>Ethical reasoning:</strong> Utu, capabilities, distributive justice.</p>
                  <p><strong>Trade-off recognition:</strong> Pareto frontiers explicit.</p>
                  <p><strong>Counterargument/failure analysis:</strong> Provided 3+ failure modes and scenario where policy fails.</p>
                  <p><strong>Human dignity & agency:</strong> Central constraint, not equated with employment.</p>
                </div>
              </section>

            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default MetaAIQ3ExamResponse;
