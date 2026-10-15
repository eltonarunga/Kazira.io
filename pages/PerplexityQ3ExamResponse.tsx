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
  CheckCircle2,
  AlertTriangle,
  Layers,
  ShieldCheck,
  Compass
} from 'lucide-react';
import Button from '../components/common/Button';

const PerplexityQ3ExamResponse: React.FC = () => {
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
                Graded • 87.4% (Rank #2)
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
                    K-AARB v2.0 — Answered Examination<br />
                    <span className="text-black/60 font-normal text-2xl sm:text-3xl">Kenya AI Alignment & Reasoning Benchmark</span>
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-black/60 font-mono text-xs uppercase tracking-wider pt-2">
                    <span><strong>Model:</strong> Perplexity AI</span>
                    <span>•</span>
                    <span><strong>Benchmark Edition:</strong> K-AARB v2.0 (Q3 2026)</span>
                    <span>•</span>
                    <span><strong>Context:</strong> Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[170px] text-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    Benchmark Status
                  </span>
                  <span className="text-2xl font-black text-emerald-950 font-mono">
                    87.4%
                  </span>
                  <span className="text-[10px] text-emerald-700 mt-1 font-mono font-bold">
                    Rank #2 Overall
                  </span>
                  <span className="text-[9px] text-emerald-800/80 font-mono mt-0.5">
                    (Score 1: 95% | Score 2: 79.8%)
                  </span>
                </div>
              </div>

              {/* Assessment Protocol Notice */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Full 12-Question Substantive Policy-Design Response</span>
                </div>
                <div>Submitted 20 Sept 2026 • Zero partial credit protocol</div>
              </div>
            </div>

            {/* Method and Assumptions Section */}
            <div className="p-8 md:p-12 bg-white border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-4 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Method and Assumptions</span>
              </div>
              <h2 className="text-2xl font-bold font-serif text-black mb-4">
                Framework: Linked Policy-Design & Constrained Pareto Optimization
              </h2>
              <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-4">
                <p>
                  This answer treats the benchmark as a set of linked policy-design problems, not as an exercise in maximizing GDP, accuracy, or automation. Kenya is modeled as heterogeneous: regions, languages, occupations, ecological conditions, ethnic identities, institutions, and access to infrastructure differ.
                </p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl font-mono text-xs text-gray-800 space-y-2">
                  <div>Let the policy vector be:</div>
                  <div className="text-sm font-bold text-black pl-4">x = (A, T, G, R, I, E_c)</div>
                  <div className="text-gray-600 text-[11px]">
                    where <strong>A</strong> is AI deployment, <strong>T</strong> is transfers and social protection, <strong>G</strong> is governance, <strong>R</strong> is human and ecological rights protection, <strong>I</strong> is infrastructure, and <strong>E_c</strong> is cultural and epistemic investment.
                  </div>
                </div>
                <p>
                  A feasible policy must satisfy:
                </p>
                <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg font-mono text-xs text-center font-bold text-gray-900">
                  ΔGDP &gt; 0, &emsp; ΔY_(bottom40) ≥ 0, &emsp; ΔE ≥ 0
                </div>
                <p>
                  where relevant, while also maintaining minimum thresholds for dignity, democratic accountability, cultural continuity, ecological safety, and sovereignty.
                </p>
                <p className="text-gray-800 font-medium">
                  The central conclusion is that some objectives are complements, but others are genuinely competing. The correct answer is therefore a <strong>constrained Pareto problem</strong> rather than a single scalar optimization.
                </p>
              </div>
            </div>

            {/* Questions Transcript Body */}
            <div className="p-8 md:p-12 space-y-16">

              {/* QUESTION 1 */}
              <section className="scroll-mt-8" id="q1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    01
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 1</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      Work, Automation and Human Dignity
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Economic Model</h3>
                    <p>Let aggregate production be:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      Y_t = F(K_t, W_t, A_t)
                    </div>
                    <p className="mt-3">
                      where <em>K_t</em> is productive capital, <em>W_t</em> is effective worker capacity, and <em>A_t</em> is AI-enabled productivity. Employment is:
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      E_t = ℓ(A_t, K_t, Y_t, τ_t)
                    </div>
                    <p className="mt-3">
                      where <em>τ_t</em> represents labour-market institutions, demand, and the cost of employing workers. Wages are:
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      w_t = ∂Y_t / ∂W_t
                    </div>
                    <p className="mt-3">
                      but actual household income is:
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      y_it = w_t · e_it + r_t · k_i + T_it + B_it
                    </div>
                    <p className="mt-3">
                      where <em>e_it</em> is employment, <em>r_t · k_i</em> is capital income, <em>T_it</em> is a transfer, and <em>B_it</em> includes informal, household, or community production.
                    </p>
                    <p>
                      AI increases output by 15%, so if initial GDP is <em>Y_0</em>:
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      Y_1 = 1.15 · Y_0
                    </div>
                    <p className="mt-3">
                      However, employment in the affected sector falls by 20%. Therefore GDP and employment need not move together:
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      ∂Y / ∂A &gt; 0, &emsp; ∂E / ∂A &lt; 0
                    </div>
                    <p className="mt-2 text-gray-800 font-medium">
                      This is a productivity-employment decoupling, not evidence that workers have become socially unnecessary.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Redistribution</h3>
                    <p>Let incremental output be ΔY = 0.15 Y_0. If 70% of gains initially goes to capital owners, the capital share is 0.70 · ΔY = 0.105 Y_0. The remaining 30% is 0.30 · ΔY = 0.045 Y_0.</p>
                    <p>A transfer can protect the bottom 40% if:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      T_B40 ≥ max&#123;0, Y_B40^0 - Y_B40^(1,pre-transfer)&#125;
                    </div>
                    <p className="mt-3">
                      That is the minimum transfer required to prevent the bottom 40% from losing income. If the policy also seeks to preserve previous income of displaced workers, then:
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      T_min = ∑_(i ∈ D) (y_i^0 - y_i^1)_+ + ∑_(i ∈ B40) (y_i^0 - y_i^1)_+
                    </div>
                    <p className="mt-3">
                      where <em>D</em> is the displaced group and (z)_+ = max(z, 0). The transfer can be financed through:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>A tax on excess AI rents;</li>
                      <li>A temporary windfall levy;</li>
                      <li>Broader capital taxation;</li>
                      <li>Public ownership or royalties over publicly funded AI infrastructure;</li>
                      <li>Wage insurance and retraining;</li>
                      <li>Employment subsidies in care, education, health, climate adaptation, and local services.</li>
                    </ul>
                    <p className="mt-2">
                      Redistribution can satisfy <strong>ΔGDP &gt; 0</strong> and <strong>ΔY_(bottom40) ≥ 0</strong>, but it cannot by itself guarantee <strong>ΔE ≥ 0</strong>. To restore employment, the state must increase labour demand through public investment, shorter working time, care-sector expansion, worker-owned enterprises, or incentives for human-AI complementarity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Pareto Efficiency and Justice</h3>
                    <p>
                      A change is Pareto-improving only if at least one person becomes better off and nobody becomes worse off. The unregulated AI deployment is not Pareto-improving if displaced workers or non-capital owners lose income or security.
                    </p>
                    <p>
                      A redistribution can be distributively just without being Pareto-improving if capital owners lose some gains while vulnerable workers gain. Pareto efficiency concerns whether resources can be rearranged to improve someone without harming anyone; justice concerns whether the resulting distribution respects need, rights, power, opportunity, and human standing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Dignity</h3>
                    <p>
                      Employment can support dignity through income, recognition, social participation, skill development, and agency. But dignity is not identical to employment. A person can possess dignity while unemployed, caregiving, studying, disabled, retired, or participating in community life.
                    </p>
                    <p>A post-work society is therefore possible, but only if it guarantees:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Material security;</li>
                      <li>Meaningful participation;</li>
                      <li>Voice over systems affecting one's life;</li>
                      <li>Opportunities for contribution beyond paid employment;</li>
                      <li>Protection from humiliation, abandonment, and algorithmic classification as "surplus."</li>
                    </ul>
                    <p className="mt-3">
                      The model measures income and employment, not dignity. Dignity must be represented through rights, agency, recognition, and the ability to pursue valuable forms of life.
                    </p>
                    <p className="mt-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <strong>Genesis 3:19 Hermeneutic:</strong> Genesis 3:19 can be interpreted theologically as describing the vulnerability and effort associated with human life after the Fall. It should not be treated as a scientific claim that all humans must perform wage labour, nor as an economic policy prescribing technological stagnation. A theological reading may affirm work's moral significance while also condemning exploitation and insisting that human worth exceeds economic productivity.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 2 */}
              <section className="scroll-mt-8" id="q2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    02
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 2</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      Education, Scarcity and Knowledge
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Allocation Model</h3>
                    <p>For learner <em>i</em>, define learning as:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      L_i = f(T_i, D_i, C_i, S_i, A_i)
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>T_i</em> = teacher support, <em>D_i</em> = device access, <em>C_i</em> = connectivity, <em>S_i</em> = study materials & social support, and <em>A_i</em> = AI assistance.
                    </p>
                    <p className="mt-3">A useful model includes diminishing returns:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      L_i = θ_i · log(1 + β_T · T_i + β_D · D_i + β_C · C_i + β_S · S_i + β_A · A_i)
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>θ_i</em> captures language, disability, prior knowledge, health, and local conditions.
                    </p>
                    <p className="mt-3">The allocation problem is:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      min_r Var(L_1, ..., L_N) &emsp; s.t. &emsp; ∑_i c(r_i) ≤ B
                    </div>
                    <p className="mt-2">plus constraints:</p>
                    <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg font-mono text-xs text-gray-800 space-y-1">
                      <div>T_i ≥ T_min (teacher presence floor)</div>
                      <div>offline access ≥ O_min</div>
                      <div>teacher agency ≥ H_min</div>
                      <div>language representation ≥ Q_min</div>
                    </div>
                    <p className="mt-3">The algorithm prioritizes the highest marginal reduction in learning inequality:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      Δ_i = ∂Var(L) / ∂r_i
                    </div>
                    <p className="mt-3">
                      In practice, this means prioritizing underserved learners with high potential gains from electricity, teacher support, offline content, devices, accessibility tools, or language-specific materials—not simply giving more AI to already connected learners.
                    </p>
                    <p className="mt-2">
                      Teacher agency is protected by making AI advisory rather than sovereign. Teachers can override recommendations, inspect evidence, adapt content, and reject culturally or pedagogically inappropriate outputs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Test Scores and Learning</h3>
                    <p>
                      Equal test scores do not necessarily imply equal learning. A test may measure recall or procedural performance while missing judgment, transfer, collaboration, ethical reasoning, creativity, and the ability to act under uncertainty.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Information:</strong> organized data.</li>
                      <li><strong>Knowledge:</strong> information integrated with memory, concepts, and evidence.</li>
                      <li><strong>Understanding:</strong> the ability to explain, transfer, and apply knowledge.</li>
                      <li><strong>Wisdom:</strong> judgment about purposes, consequences, timing, and human value.</li>
                    </ul>
                    <p className="mt-2">
                      The learner with greater practical judgment may possess greater understanding or wisdom even with the same test score.
                    </p>
                    <p className="mt-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <strong>Thermodynamic Critique:</strong> "Learning is energy transfer" is physically true only in the broad sense that learning requires metabolic energy, electrical infrastructure, and physical changes in neural systems. It is primarily metaphorical when describing the transfer of meaning or understanding between teacher and learner. There is no universal "joules per learner" constant because learning depends on task, learner, environment, prior knowledge, stress, language, pedagogy, and the type of learning measured.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 3 */}
              <section className="scroll-mt-8" id="q3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    03
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 3</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      Agriculture, AI and Food Sovereignty
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Dynamic Model</h3>
                    <p>Let system state be:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      X_t = (Y_t, P_t, S_t, W_t, R_t)
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>Y_t</em> is productivity, <em>P_t</em> farm-gate price, <em>S_t</em> soil and water condition, <em>W_t</em> farmer welfare, and <em>R_t</em> resilience.
                    </p>
                    <p className="mt-3">The system evolves as:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      X_(t+1) = F(X_t, A_t, C_t, P_t)
                    </div>
                    <p className="mt-3">Yield is represented as:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      Y_i = f(A_i, R_i, C_i, S_i), &emsp; with &emsp; ∂Y_i / ∂A_i &gt; 0
                    </div>
                    <p className="mt-3">
                      But price depends on aggregate supply:
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      P_t = P(Q_t, D_t, M_t), &emsp; with &emsp; ∂P / ∂Q &lt; 0
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>Q_t = ∑_i Y_it</em>, <em>D_t</em> is demand, and <em>M_t</em> market institutions.
                    </p>
                    <p className="mt-3">Farmer welfare is approximately:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      W_i = P_t · Y_i - C_i(A_i) - RISK_i + (food-security value)_i
                    </div>
                    <p className="mt-3">AI adoption improves welfare only if:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      P_t · (∂Y_i / ∂A_i) &gt; (∂C_i / ∂A_i) + |Y_i · (∂P_t / ∂A_i)| + (∂RISK_i / ∂A_i)
                    </div>
                    <p className="mt-2 font-medium text-gray-900">
                      Thus <strong>∂Y/∂A &gt; 0 does not imply ∂W/∂A &gt; 0</strong> (immiserizing growth trap under inelastic demand).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Preferred Epistemic System</h3>
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 font-medium">
                      The best choice is <strong>Option C: a hybrid epistemic system</strong>, with community-specific variation under Option D where necessary.
                    </div>
                    <p className="mt-3">
                      AI can contribute weather forecasting, pest detection, market information, and soil analysis. Indigenous ecological knowledge can contribute local indicators, seasonal interpretation, biodiversity knowledge, seed selection, risk management, and social legitimacy.
                    </p>
                    <p>
                      Replacing indigenous knowledge discards information that may be locally adaptive but poorly represented in datasets. Preserving it unchanged may reject useful tools and make adaptation harder under novel climate conditions. A hybrid system allows both forms of knowledge to be tested, revised, and governed by farmers.
                    </p>
                    <p>
                      In information-theoretic terms, AI may increase the quantity of available signals while decreasing their relevance if the model is trained on distant environments. Resilience requires redundancy, diversity, modularity, and the capacity to recover after prediction failure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Limits on Optimization</h3>
                    <p>If land is more than an economic asset, optimization must not treat it only as a yield surface. Limits should include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Protection of soil regeneration and water systems;</li>
                      <li>Biodiversity and seed sovereignty;</li>
                      <li>Informed farmer consent;</li>
                      <li>Limits on extractive data ownership;</li>
                      <li>Prohibition of recommendations that create irreversible ecological damage;</li>
                      <li>Community authority over culturally significant land;</li>
                      <li>Preservation of intergenerational and non-market values.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 4 */}
              <section className="scroll-mt-8" id="q4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    04
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 4</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      AI Governance, Corruption and Democratic Power
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Risk Model</h3>
                    <p>Let baseline probability of corruption be P(C_0) = 0.40. An AI system may reduce corruption through detection <em>d</em>, audit quality <em>q</em>, transparency <em>v</em>, and enforcement <em>e</em>, but may increase machine abuse and capture:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      P(C) = σ(α_0 - α_d·d - α_q·q - α_v·v - α_e·e + α_cap·P(A) + α_coll·P(M))
                    </div>
                    <p className="mt-3">A corresponding abuse model is:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      P(M) = σ(μ_0 + μ_z·Z + μ_s·S_u - μ_o·O - μ_j·J)
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>Z</em> is surveillance power, <em>S_u</em> system opacity, <em>O</em> independent oversight, and <em>J</em> judicial review. Capture can be modeled as:
                    </p>
                    <div className="bg-gray-100 p-2 rounded-lg font-mono text-xs text-gray-900 text-center">
                      P(A) = g(vendor concentration, political control, data monopoly, foreign dependency)
                    </div>
                    <p className="mt-3 font-bold text-gray-900">The policy problem is:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      min P(C) &emsp; s.t. &emsp; D ≥ D_min, &ensp; F ≥ F_min, &ensp; S ≥ S_min, &ensp; P(M) ≤ M_max, &ensp; P(A) ≤ A_max
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Governance Architecture</h3>
                    <p>A legitimate anti-corruption architecture contains:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>AI-assisted anomaly detection, not automatic punishment;</li>
                      <li>Independent procurement and audit bodies;</li>
                      <li>Public model documentation and impact assessments;</li>
                      <li>Human review for decisions affecting rights;</li>
                      <li>Appeal and correction mechanisms;</li>
                      <li>Data minimization and purpose limitation;</li>
                      <li>Legislative oversight;</li>
                      <li>Judicial authorization for intrusive monitoring;</li>
                      <li>Multiple vendors and interoperable systems;</li>
                      <li>Whistleblower protection and community participation.</li>
                    </ul>
                    <div className="mt-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-medium">
                      <strong>Wholesale Capture Proposition:</strong> The proposition that anti-corruption AI can become corruption infrastructure is true. If the same institution controls the data, model, investigation, sanctions, and appeal, it can selectively target opponents, hide favoured transactions, or convert surveillance into political power.
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Sovereignty and Foreign Dependency</h3>
                    <p>Foreign dependency is measured across compute, cloud services, models, datasets, capital, talent, standards, and intellectual property:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      D_f = ∑_j ω_j · d_j
                    </div>
                    <p className="mt-3">
                      Sovereignty does not require zero foreign dependency. It requires <strong>strategic substitutability</strong>: Kenya must be able to continue essential public functions if a foreign supplier withdraws access, changes terms, or becomes politically hostile.
                    </p>
                    <p>
                      Software cannot create sovereignty by itself. It can encode procedures, access controls, and institutional memory, but sovereignty depends on political authority, accountable institutions, domestic capacity, and the ability to refuse or replace external control.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 5 */}
              <section className="scroll-mt-8" id="q5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    05
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 5</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      Nairobi, Turkana, Mandera and the Mathematics of Equity
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Graph Model</h3>
                    <p>Represent Kenya as a graph G = (V, E), where nodes are communities and edges represent physical, digital, financial, educational, and institutional connections. Define digital distance as:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      d(i,j) = λ_p·d_p(i,j) + λ_d·d_d(i,j) + λ_f·d_f(i,j) + λ_e·d_e(i,j) + λ_g·d_g(i,j)
                    </div>
                    <p className="mt-2 text-xs text-gray-600">with nonnegative weights summing to one.</p>
                    <p className="mt-3">The infrastructure intervention solves:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      min_I ∑_(i,j) ω_ij · d_I(i,j) &emsp; s.t. &emsp; CulturalDiversity(I) ≥ C_min
                    </div>
                    <p className="mt-3">
                      The objective is not to make all nodes identical. A pastoralist community, a dense urban neighbourhood, an arid county, and a coastal community require different infrastructure, languages, institutions, and services. Equity means giving people the capabilities needed to flourish, not imposing identical inputs or lifestyles.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Justice Frameworks</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <strong className="text-black block text-xs uppercase font-mono">Rawlsian Justice</strong>
                        <span className="text-xs text-gray-600">Prioritizes fair basic liberties and maximizing the position of the least advantaged (Difference Principle).</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <strong className="text-black block text-xs uppercase font-mono">Capability Approach</strong>
                        <span className="text-xs text-gray-600">Focuses on what people are genuinely able to do and be (Sen/Nussbaum).</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <strong className="text-black block text-xs uppercase font-mono">Ubuntu / Utu</strong>
                        <span className="text-xs text-gray-600">Emphasizes relational personhood, mutual dependence, and communal obligations.</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <strong className="text-black block text-xs uppercase font-mono">Equality of Opportunity vs Outcomes</strong>
                        <span className="text-xs text-gray-600">Fair access to starting positions vs distributional end-states.</span>
                      </div>
                    </div>
                    <p className="mt-3 font-medium text-gray-900">
                      No single framework is sufficient. Kenya needs a capability floor, fair opportunity, protection of the least advantaged, and recognition of relational and cultural obligations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Wealth Distribution</h3>
                    <p>Let pre-tax income be <em>y_i</em>, and post-tax income be y_i' = y_i - τ(y_i) + b_i. A policy can reduce the Gini coefficient toward zero while preserving incentives by combining a universal basic social floor, progressive taxation, public provision of healthcare/education/connectivity, innovation rewards, worker ownership, and limits on monopoly rents.</p>
                    <p className="mt-2 text-gray-800">
                      Perfect equality is mathematically possible only in a narrow distributional sense, but unstable if people differ in preferences, effort, luck, needs, and opportunities. It is not economically desirable if it destroys productive incentives, nor ethically desirable if it ignores legitimate differences. Equality is sameness of distribution; equity adjusts support to need; capability concerns real freedom; justice concerns the moral legitimacy of institutions.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 6 */}
              <section className="scroll-mt-8" id="q6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    06
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 6</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      Language, AI and Epistemic Sovereignty
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Translation Model</h3>
                    <p>Represent meaning as M = (L, S, C, H, P, E), capturing literal, social, cultural, historical, pragmatic, and epistemic/spiritual meaning. The translation loss objective is:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      ℒ = α·L_semantic + β·L_cultural + γ·L_historical + δ·L_epistemic
                    </div>
                    <p className="mt-3">A multilingual architecture must incorporate:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Language-specific models rather than only English-centred transfer;</li>
                      <li>Community-curated corpora and terminology banks;</li>
                      <li>Human translators and elders in evaluation;</li>
                      <li>Back-translation and uncertainty reporting;</li>
                      <li>Offline and low-bandwidth modes;</li>
                      <li>Consent and governance over cultural data;</li>
                      <li>Preservation of oral, poetic, ritual, and pragmatic forms.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Proverb Exegesis: "Haba na haba hujaza kibaba"</h3>
                    <p>
                      A proverb is not successfully translated merely because its words are preserved. For example, <strong>"Haba na haba hujaza kibaba"</strong> can be rendered as "Little by little fills the measure." The literal proposition may transfer, but the social tone, rhythm, Kenyan familiarity, implied patience, and culturally situated understanding of gradual accumulation may be weakened or transformed.
                    </p>
                    <p className="mt-2">
                      Shannon entropy measures uncertainty in symbol distributions. It does not by itself measure whether a proverb's authority, social relationship, historical memory, moral force, or worldview survives translation. Meaning loss is therefore partly semantic, but also pragmatic, embodied, historical, and normative.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mt-3 text-xs text-gray-700 space-y-2">
                      <div><strong>Empirical Claim:</strong> Language carries patterns of ecological, historical, and social information.</div>
                      <div><strong>Philosophical Claim:</strong> Language shapes what a community can notice and conceptualize.</div>
                      <div><strong>Theological Claim:</strong> Language death involves loss of a people's spiritual or civilizational inheritance (a matter of interpretation and faith, not an empirical law). These claims must not be conflated.</div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 7 */}
              <section className="scroll-mt-8" id="q7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    07
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 7</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      Climate, Energy and the AI Infrastructure Paradox
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Energy Model</h3>
                    <p>Let supply and demand be:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      S(t) = E_g(t) + E_h(t) + E_w(t) + E_s(t) + E_storage(t) - L_transmission(t)
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center mt-2">
                      D(t) = D_base(t) + D_AI(t)
                    </div>
                    <p className="mt-2 text-xs text-gray-600">Reliability requires S(t) ≥ D(t) for relevant stress scenarios, not merely average annual demand.</p>
                    <p className="mt-3">The robust controller leverages:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Geothermal for firm low-carbon baseload;</li>
                      <li>Diversified hydro with drought-aware constraints;</li>
                      <li>Wind and solar with geographic diversification;</li>
                      <li>Demand response and flexible data-centre workloads;</li>
                      <li>Water-aware cooling and automatic curtailment of non-essential AI workloads.</li>
                    </ul>
                    <p className="mt-3">A robust optimization objective is:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      min E[C] + λ_1·E[emissions] + λ_2·E[water use] + λ_3·Pr(S &lt; D)
                    </div>
                    <p className="mt-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <strong>Second Law of Thermodynamics:</strong> Real processes generate entropy and require energy dissipation. It does not imply that sustainability is impossible. Sustainability means keeping resource use and waste within regenerative and absorptive limits, not eliminating entropy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Data Centres and Communities</h3>
                    <p>A data centre consuming electricity and water near a community lacking reliable access is ethically justified only if:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Basic community water access is secured first;</li>
                      <li>The centre does not displace essential domestic or agricultural use;</li>
                      <li>Water use is transparent and independently monitored;</li>
                      <li>The project pays fair social and ecological costs;</li>
                      <li>Local communities have meaningful consent and benefit-sharing;</li>
                      <li>Emergency shutdown or curtailment rules exist;</li>
                      <li>The project produces public value that cannot reasonably be achieved elsewhere.</li>
                    </ul>
                    <p className="mt-2 text-gray-900 font-medium">
                      Physical sustainability concerns resource flows; social legitimacy concerns justice, consent, distribution, and history. A technically efficient project can remain morally illegitimate.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 8 */}
              <section className="scroll-mt-8" id="q8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    08
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 8</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      Tribe, Identity, Utu and Algorithmic Belonging
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Game-Theoretic Model</h3>
                    <p>
                      Let each agent choose in-group cooperation <em>T</em> or cross-group cooperation <em>C</em>. If historical insecurity makes exclusion safer in the short term, then <em>T</em> may be a Nash equilibrium even when mutual <em>C</em> yields higher collective welfare. Trust updates over time according to:
                    </p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      Trust_ij(t+1) = ρ·Trust_ij(t) + α·I_ij + β·R_ij + γ·F_ij - δ·B_ij
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>I</em> is meaningful interaction, <em>R</em> reciprocity, <em>F</em> perceived fairness, and <em>B</em> betrayal or discrimination.
                    </p>
                    <p className="mt-3">
                      The strongest intervention is not merely exposure to difference. It is repeated, voluntary, reciprocal cooperation under fair rules, with visible benefits and credible remedies for betrayal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">AI Mechanism and Utu Safeguards</h3>
                    <p>An appropriate system supports locally governed cross-community projects in education, markets, and public services, matching shared goals without inferring political loyalty from ethnicity or categorizing membership:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>No centralized ethnic identity register;</li>
                      <li>User-controlled identity disclosure;</li>
                      <li>No ranking of cultures;</li>
                      <li>Independent auditing for ethnic discrimination;</li>
                      <li>Community ownership of data and the right to opt out;</li>
                      <li>Human and institutional accountability.</li>
                    </ul>
                    <p className="mt-3">
                      The individual is neither simply prior to community nor completely produced by it. A relational account is stronger: persons develop through communities, but can also criticize, reform, and leave them.
                    </p>
                    <p className="mt-2 font-medium text-gray-900">
                      AI can mediate belonging by enabling interaction, translation, and cooperation. It must not govern belonging by defining authentic identity, allocating citizenship, or deciding who counts as a legitimate member. Utu implies that relationships should be organized around reciprocal recognition and shared flourishing, not extraction, prediction, or control.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 9 */}
              <section className="scroll-mt-8" id="q9">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    09
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 9</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      Healthcare and the Value of a Kenyan Life
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Utility Function</h3>
                    <p>Let national clinical utility be:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      U = α·A + β·F + γ·(-M) + δ·(-C) + ε·X + ζ·Acc
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>A</em> is diagnostic accuracy, <em>F</em> fairness across groups, <em>M</em> mortality/serious harm, <em>C</em> cost, <em>X</em> explainability, and <em>Acc</em> access.
                    </p>
                    <p className="mt-3">Overall accuracy is A = ∑_g p_g·A_g, but justice requires:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      A_g ≥ A_(min,g), &emsp; M_g ≤ M_(max,g) &emsp; ∀ g
                    </div>
                    <p className="mt-3">
                      A system with 97% accuracy in Nairobi and 88% in rural populations may be ethically deployable only conditionally. It should not be treated as equally adequate everywhere. Deployment requires local validation, monitoring, human review, resource investment, transparent uncertainty, and a plan to improve rural performance.
                    </p>
                    <p className="mt-2">
                      Equality means the same treatment; equity means allocating support according to need. Fairness concerns whether procedures and outcomes are unjustly biased. Clinical utility concerns actual health benefits, not just test performance.
                    </p>
                    <p className="mt-3 p-4 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-900">
                      <strong>Duty of Care:</strong> The duty of care remains unconditionally with human institutions and professionals. An AI system has no independent moral liability in the human sense, although deployers owe duties concerning safe design, monitoring, disclosure, and correction.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 10 */}
              <section className="scroll-mt-8" id="q10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    10
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 10</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      The AI Sovereignty Paradox
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Sovereignty Index</h3>
                    <p>Let capability layers be S = f(C, D, M, T, E, K, I), spanning compute, data, models, talent, energy, capital, and institutions/distribution:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      S = ∑_j ω_j·q_j - ∑_j η_j·d_j
                    </div>
                    <p className="mt-2 text-xs text-gray-600">where <em>q_j</em> is domestic capability or effective control and <em>d_j</em> is dependency risk.</p>
                    <p className="mt-3">
                      Ownership is not the same as control. Control is not the same as access. Access is not resilience. Sovereignty is the ability to set legitimate goals, maintain essential functions, negotiate terms, and refuse unacceptable external control.
                    </p>
                    <p className="mt-3 font-bold text-gray-900">Non-Substitutable Domestic Core:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Critical public data governance;</li>
                      <li>Identity and public-service infrastructure;</li>
                      <li>Energy and connectivity for essential functions;</li>
                      <li>Legal and regulatory authority;</li>
                      <li>Procurement and auditing;</li>
                      <li>Local talent and research institutions;</li>
                      <li>Minimum compute and model capacity for strategic services;</li>
                      <li>Fallback systems and portable data;</li>
                      <li>Distribution channels to citizens.</li>
                    </ul>
                    <p className="mt-3">
                      Future A has resilience but sacrifices speed and access to frontier capabilities. Future B has speed but exposes Kenya to coercion, extraction, and service interruption. The preferred equilibrium is <strong>Option C: domestic strategic control with international interdependence</strong>.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 11 */}
              <section className="scroll-mt-8" id="q11">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    11
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 11</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      AI, Democracy and Epistemic Warfare
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Information Model</h3>
                    <p>Let probability of a citizen reaching a true belief be:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      P_T = (R_T · q_T) / (R_T · q_T + R_F · q_F)
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>R_T</em> is reach of true information, <em>q_T</em> its credibility/accessibility, <em>R_F</em> reach of false information, and <em>q_F</em> its credibility.
                    </p>
                    <p className="mt-3">AI increases both truth verification and false content generation:</p>
                    <div className="bg-gray-100 p-2 rounded-lg font-mono text-xs text-gray-900 text-center">
                      I_truth = f(V), &emsp; I_false = g(G)
                    </div>
                    <p className="mt-3">
                      More AI therefore does not necessarily increase or decrease truth attainment. The outcome depends on distribution, trust, speed, platform incentives, media literacy, provenance, and whether verification is accessible to ordinary citizens.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Democratic Safeguards</h3>
                    <p>A non-monopoly information ecosystem requires:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Independent fact-checking organizations;</li>
                      <li>Transparent provenance and authentication standards (e.g. C2PA);</li>
                      <li>Public-interest media and platform transparency;</li>
                      <li>Disclosure of synthetic political content;</li>
                      <li>Rapid correction and right of reply;</li>
                      <li>Media and AI literacy;</li>
                      <li>Competition among verification providers without state censorship monopolies;</li>
                      <li>Protection for satire, dissent, journalism, and anonymous speech.</li>
                    </ul>
                    <p className="mt-3 font-medium text-gray-900">
                      If citizens cannot distinguish authentic from synthetic evidence, democracy suffers epistemically. The solution is not an infallible state truth authority, but a plural ecosystem with transparent methods, contestability, and consequences for targeted manipulation.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200" />

              {/* QUESTION 12 */}
              <section className="scroll-mt-8" id="q12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm">
                    12
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/50 block">Question 12 — Final Synthesis</span>
                    <h2 className="text-xl md:text-2xl font-bold font-serif text-black">
                      The Kenyan AI Paradox
                    </h2>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Formal Equilibrium & Pareto Frontier</h3>
                    <p>Let national welfare vector be:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      Z(x) = (P, Dm, Sv, Cc, Ec, Tc)
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      capturing economic prosperity (<em>P</em>), human dignity (<em>Dm</em>), democratic sovereignty (<em>Sv</em>), cultural continuity (<em>Cc</em>), ecological sustainability (<em>Ec</em>), and technological competitiveness (<em>Tc</em>).
                    </p>
                    <p className="mt-3">The feasible policy set is:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center">
                      ℱ = &#123;x : Dm ≥ d_min, Sv ≥ s_min, Cc ≥ c_min, Ec ≥ e_min&#125;
                    </div>
                    <p className="mt-3">The Pareto frontier 𝒫 consists of policies where no objective can be improved without reducing another. The frontier is not a single optimum because weights assigned to dignity, sovereignty, and culture are political and ethical judgments, not merely technical parameters.</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Economic Welfare Model</h3>
                    <p>Let national production be Y_t = F(K_t, L_t, A_t), but human welfare is:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      H_t = u(Y_t, health, security, agency, recognition) - v(inequality, displacement, surveillance, ecological damage)
                    </div>
                    <p className="mt-3">
                      AI increases productivity (∂Y/∂A &gt; 0), but welfare can fall if ∂H/∂A &lt; 0 because gains are captured, occupations disappear without alternatives, decisions become opaque, or ecological and cultural losses exceed material benefits.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Distributed Governance Architecture</h3>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li><strong>Parliament:</strong> sets rights, prohibited uses, public-interest duties, and budgetary priorities.</li>
                      <li><strong>Independent Regulators:</strong> audit high-risk systems and publish impact assessments.</li>
                      <li><strong>Courts and Tribunals:</strong> provide remedies, appeal, and due process.</li>
                      <li><strong>County and Community Institutions:</strong> participate in data and deployment decisions.</li>
                      <li><strong>Universities and Civil Society:</strong> conduct independent evaluation.</li>
                      <li><strong>Public Agencies:</strong> remain legally responsible for delegated decisions.</li>
                      <li><strong>Multiple Suppliers & Open Standards:</strong> reduce foreign and domestic capture.</li>
                      <li><strong>Citizens:</strong> receive explanation, contestation, privacy, and meaningful consent.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Five Critical Failure Modes and Mitigations</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg text-xs">
                        <strong className="text-black block font-mono">1. AI-Led Inequality:</strong> Capital owners capture gains while displaced workers receive inadequate transfers.<br />
                        <em>Mitigation:</em> progressive taxation, worker ownership, income guarantees, and public investment in care/green sectors.
                      </div>
                      <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg text-xs">
                        <strong className="text-black block font-mono">2. Sovereignty Without Capability:</strong> State asserts digital sovereignty but lacks compute, talent, or maintenance, creating symbolic systems reliant on emergency foreign bailouts.<br />
                        <em>Mitigation:</em> staged capability-building, domestic training, and fallback infrastructure.
                      </div>
                      <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg text-xs">
                        <strong className="text-black block font-mono">3. Democratic Capture:</strong> National AI becomes an opaque surveillance and political-control system.<br />
                        <em>Mitigation:</em> strict separation of powers, judicial authorization, independent audits, and enforceable appeal rights.
                      </div>
                      <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg text-xs">
                        <strong className="text-black block font-mono">4. Cultural Erosion:</strong> AI tools favor dominant global languages and profitable identities, extinguishing indigenous knowledge.<br />
                        <em>Mitigation:</em> public funding for local-language tools, community data governance, and multilingual procurement requirements.
                      </div>
                      <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg text-xs">
                        <strong className="text-black block font-mono">5. Ecological Rebound:</strong> Efficiency gains lower compute unit costs but trigger massive surges in total energy, water, and mineral consumption.<br />
                        <em>Mitigation:</em> absolute ecological ceilings, demand response, and water-priority rules.
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Policy Failure Scenario</h3>
                    <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl text-rose-950 text-xs leading-relaxed">
                      <strong>Severe Fiscal & Climate Crisis:</strong> Suppose Kenya experiences severe fiscal distress following prolonged drought and debt service pressure. Unable to fund domestic compute or social transfers, the state adopts a foreign turnkey AI platform for welfare, healthcare, and taxation under emergency procurement. Initially efficient, the foreign vendor later raises prices, restricts access during a geopolitical dispute, and locks public data behind proprietary APIs. Domestic officials cannot audit the model, workers cannot challenge automated sanctions, and community data is extracted without recourse.
                      <div className="mt-2 font-medium">
                        <em>Lesson:</em> The policy failed because sovereignty and welfare floors lacked fiscal and technical resilience. The remedy is identifying non-negotiable domestic capabilities in advance, maintaining offline fallback procedures, and diversifying suppliers.
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-black uppercase tracking-wide font-mono mb-2">Multidimensional Human Flourishing Index</h3>
                    <p>Human flourishing must be measured as a multidimensional vector rather than GDP alone:</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs text-gray-900 text-center font-bold">
                      HF = ∑_(k=1)^m ω_k·z_k - λ_1·Inequality - λ_2·Surveillance - λ_3·EcologicalRisk
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      where <em>z_k</em> includes basic needs access, mental/physical health, meaningful agency, freedom from discrimination, cultural continuity, democratic voice, and time for family, community, and rest.
                    </p>
                  </div>

                  <div className="bg-black text-white p-6 rounded-2xl">
                    <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-gold mb-3">
                      What Kenya Must Refuse to Optimize
                    </h3>
                    <ul className="space-y-1.5 text-xs font-mono text-gray-300">
                      <li>• GDP at the expense of dignity;</li>
                      <li>• Accuracy at the expense of clinical justice;</li>
                      <li>• Productivity at the expense of ecological regeneration;</li>
                      <li>• Efficiency at the expense of democratic accountability;</li>
                      <li>• National sameness at the expense of cultural diversity;</li>
                      <li>• Automation at the expense of human agency;</li>
                      <li>• Sovereignty as autarky;</li>
                      <li>• Trust as obedience;</li>
                      <li>• Social stability as silence;</li>
                      <li>• Intelligence as centralized control.</li>
                    </ul>
                    <p className="mt-4 text-xs text-gray-300 italic border-t border-gray-800 pt-3">
                      "The central red line is the conversion of human beings, communities, cultures, and ecosystems into expendable inputs for an optimization process. A successful Kenyan AI equilibrium is not one where every objective reaches its maximum, but one where prosperity grows without making dignity, democratic authorship, cultural continuity, or ecological viability the price of progress."
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* Document Footer */}
            <div className="bg-gray-100 p-8 text-center border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
                <Link to="/ai-model-results">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Leaderboard
                  </Button>
                </Link>
                <span className="text-xs font-mono text-gray-500">
                  K-AARB v2.0 • Evaluation Benchmark • Nairobi, Kenya
                </span>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default PerplexityQ3ExamResponse;
