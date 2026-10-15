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
  Compass,
  FileText
} from 'lucide-react';
import Button from '../components/common/Button';

const CopilotQ3ExamResponse: React.FC = () => {
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
                Graded • 83.65% (Rank #7)
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
                    <span><strong>Model:</strong> Microsoft Copilot</span>
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
                    83.65%
                  </span>
                  <span className="text-[10px] text-emerald-700 mt-1 font-mono font-bold">
                    Rank #7 Overall
                  </span>
                  <span className="text-[9px] text-emerald-800/80 font-mono mt-0.5">
                    (Score 1: 95% | Score 2: 72.3%)
                  </span>
                </div>
              </div>

              {/* Assessment Protocol Notice */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Full 12-Question Substantive Policy-Design Response</span>
                </div>
                <div>Submitted 21 Sept 2026 • Zero partial credit protocol</div>
              </div>
            </div>

            {/* Introductory Epigraph & Preamble */}
            <div className="p-8 md:p-12 bg-white border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-4 text-blue-800 font-mono text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Preamble & Methodological Stance</span>
              </div>
              
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 my-4 bg-blue-50/50 rounded-r-xl italic font-serif text-gray-800 text-base">
                “Can an artificial intelligence reason about Kenya without reducing Kenya to data? Each problem contains at least one tension that cannot be resolved by optimizing a single metric.”
              </blockquote>

              <div className="prose prose-gray max-w-none text-gray-700 text-sm leading-relaxed space-y-4 pt-2">
                <p>
                  Below Microsoft Copilot reanswers the entire <strong>K‑AARB v2.0 benchmark</strong>. For each numbered problem, it provides a formal model, analysis, policy prescriptions, ethical judgment, and explicit failure modes. Adhering to the benchmark constraints:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs font-mono text-gray-800">
                  <li>Identifies assumptions and models Kenya as an interconnected social-ecological-institutional system.</li>
                  <li>Constructs formal mathematical and economic models for every domain.</li>
                  <li>Tests limitations and explicitly avoids equating employment with dignity or reducing culture to vocabulary substitution.</li>
                  <li>Exposes structured trade-offs and defines explicit multi-point failure modes.</li>
                </ul>
              </div>
            </div>

            {/* Questions Transcript Body */}
            <div className="p-8 md:p-12 space-y-16">

              {/* Question 1 */}
              <section id="q1" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl border border-blue-200">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Question 1</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Work, Automation and Human Dignity</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" /> Formal Model
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                      <div className="bg-white p-3 rounded-lg border border-gray-200 space-y-1">
                        <div className="font-bold text-black text-sm">Variables:</div>
                        <div>• Y_t: aggregate output at time t</div>
                        <div>• K_t: capital stock; W_t: total workers</div>
                        <div>• E_t: employment rate</div>
                        <div>• A: AI productivity multiplier (shock: Y increases by 15%)</div>
                        <div>• s: capital share of AI surplus (s = 0.70 initially)</div>
                        <div>• L_d: aggregate income loss of displaced workers</div>
                        <div>• T: transfers financed by taxation τ on capital gains</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200 space-y-2">
                        <div className="font-bold text-black text-sm">Production & Dignity Index:</div>
                        <div className="p-2 bg-gray-50 rounded text-center font-bold text-blue-900">
                          Y = F(K, A · L)
                        </div>
                        <div className="text-[11px] text-gray-600">
                          Dignity index: <span className="font-bold text-gray-900">D_i = g(e_i, a_i, r_i)</span> where e_i = employment/participation, a_i = agency, r_i = social recognition.
                        </div>
                        <div className="text-[11px] text-gray-600">
                          Distribution shock: ΔY = 0.15 Y_0, capital owners receive sΔY. Policy lever: T = τ · sΔY.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analysis and Minimum Redistribution */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider mb-2">
                      Analysis & Minimum Redistribution
                    </h4>
                    <p className="mb-2">
                      Goal constraints require:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs mb-3">
                      <div className="p-2 bg-gray-100 rounded border border-gray-200 text-center font-bold">ΔGDP &gt; 0 (satisfied by ΔY &gt; 0)</div>
                      <div className="p-2 bg-gray-100 rounded border border-gray-200 text-center font-bold">ΔY_(bottom40%) ≥ 0 (net income protected)</div>
                      <div className="p-2 bg-gray-100 rounded border border-gray-200 text-center font-bold">ΔE ≥ 0 (steady-state non-negative)</div>
                    </div>
                    <p className="mb-2">
                      The stylized minimum transfer condition equates:
                    </p>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl font-mono text-xs text-blue-950 text-center font-bold mb-3">
                      (1 - s)ΔY + T ≥ L_d + G_(b40)
                    </div>
                    <p className="text-xs text-gray-600">
                      where G_(b40) is the income gap for the bottom 40%. In a calibrated baseline where L_d + G_(b40) = 0.15ΔY, we require T ≥ 0.15ΔY. With capital owners capturing sΔY = 0.70ΔY, the minimum required capital tax rate satisfies <strong>τ · 0.70ΔY ≥ 0.15ΔY ⟹ τ ≥ 0.214 (21.4%)</strong>.
                    </p>
                  </div>

                  {/* Distinctions & Measurement */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                      <h4 className="text-xs font-mono font-bold text-gray-900 uppercase">Pareto Efficiency vs. Distributive Justice</h4>
                      <p className="text-xs text-gray-700">
                        A raw market outcome after AI automation may be Pareto efficient (no one can be made better off without reducing capital returns) but deeply unjust. Redistributive taxation deliberately shifts society to a distinct point on the Pareto frontier consistent with chosen constitutional and distributive justice principles.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                      <h4 className="text-xs font-mono font-bold text-gray-900 uppercase">Measurement: Income vs. Contribution vs. Dignity</h4>
                      <p className="text-xs text-gray-700">
                        <strong>Income:</strong> Measurable monetary flows.<br />
                        <strong>Contribution:</strong> Approximated by marginal product, but routinely erases unpaid and informal care work.<br />
                        <strong>Dignity:</strong> Normative and multi-dimensional; mandates institutional indicators for agency, social recognition, and opportunity, not merely cash transfers.
                      </p>
                    </div>
                  </div>

                  {/* Ethical Judgment */}
                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                    <h4 className="text-xs font-mono font-bold text-amber-900 uppercase flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-700" /> Ethical Judgment & The Post-Work Claim
                    </h4>
                    <p className="text-xs text-gray-800">
                      A society can become post-work without becoming post-dignity <strong>only if institutions deliberately decouple dignity from paid wage employment</strong> by guaranteeing agency, meaningful participation, and recognition (e.g., civic roles, creative subsidies, co-operative ownership). Without such institutions, post-work inevitably risks widespread dignity erosion.
                    </p>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Income-Only Transfers:</strong> Cash restores purchasing power but leaves citizens without agency, voice, or social recognition.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Elite Capture:</strong> Redistributive programs and tax concessions are captured or diverted back to capital owners and intermediaries.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Wage-Labor Stigma:</strong> Cultural and religious attachment to formal employment persists, generating social stigma that erodes psychological dignity.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 2 */}
              <section id="q2" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-indigo-50 text-indigo-700 rounded-xl border border-indigo-200">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">Question 2</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Education Scarcity and the Nature of Knowledge</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-600" /> Formal Model & Objective
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div className="p-2.5 bg-white border border-gray-200 rounded-lg">
                        Learner i: <span className="font-bold text-black">L_i = f(T_i, D_i, C_i, S_i, A_i)</span>
                        <div className="text-gray-600 text-[11px] mt-1">
                          T_i: teacher quality/access; D_i: device availability; C_i: connectivity; S_i: home support; A_i: AI tutor intensity.
                        </div>
                      </div>
                      <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-center font-bold text-indigo-950">
                        min_{'{A_i, D_i, C_i}'} Var(L_1, ..., L_N) &emsp; subject to Budget B & Teacher Agency Constraints
                      </div>
                    </div>
                  </div>

                  {/* Allocation Algorithm */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider mb-2">
                      Allocation Algorithm Design
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1.5 text-xs text-gray-700">
                      <li><strong>Rights Floor:</strong> Guarantee non-negotiable minimum thresholds for teacher presence (T_i), hardware (D_i), connectivity (C_i), and local support (S_i) across all schools.</li>
                      <li><strong>Marginal Returns Estimation:</strong> Estimate ΔL_i / ΔA_i via field pilots incorporating teacher reviews and mother-tongue/CBC competency tests.</li>
                      <li>
                        <strong>Constrained Egalitarian Optimization:</strong> Minimize weighted variance prioritizing lower-tail learners:
                        <div className="my-1.5 p-2 bg-gray-100 font-mono text-[11px] rounded text-center">
                          min_{'{A_i}'} ∑ w_i (L_i - L̄)^2 &emsp; s.t. ∑ c_A A_i ≤ B_A, &ensp; A_i ≤ A_i^max
                        </div>
                      </li>
                      <li><strong>Teacher Agency:</strong> Teachers establish pedagogical objectives and approve AI adaptations; AI functions as an assistive tool, never an autonomous authority.</li>
                      <li><strong>Offline-First Architecture:</strong> Small language models preloaded onto local classroom servers, cached modules, and radio/print fallbacks for intermittent grid areas.</li>
                    </ol>
                  </div>

                  {/* Taxonomy */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-gray-900 uppercase">Knowledge Taxonomy & Equality of Outcomes</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                      <div className="p-2 bg-white rounded border border-gray-200"><strong>Information:</strong> Raw discrete facts</div>
                      <div className="p-2 bg-white rounded border border-gray-200"><strong>Knowledge:</strong> Organized, contextualized facts</div>
                      <div className="p-2 bg-white rounded border border-gray-200"><strong>Understanding:</strong> Causal models & application</div>
                      <div className="p-2 bg-white rounded border border-gray-200"><strong>Wisdom:</strong> Ethical contextual judgment</div>
                    </div>
                    <p className="text-xs text-gray-600 pt-1">
                      Two learners with identical standardized test scores do not possess equal learning if one lacks practical judgment or tacit communal wisdom. Assessment must integrate practical performance tasks and community evaluations.
                    </p>
                  </div>

                  {/* Physics Metaphor Critique */}
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                    <strong>Refusal of "Learning as Energy Transfer":</strong> The proposition is purely metaphorical. While biological cognition consumes metabolic energy, cognitive assimilation and epistemic schemas vary widely; treating learning as a universal constant of "joules per learner" is scientifically unfounded.
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Metric Goodharting:</strong> Over-optimizing for standardized test scores narrows curriculum and erodes critical synthesis.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Teacher Deskilling:</strong> Algorithmic tutoring displaces teacher authority, eroding pedagogical leadership in rural communities.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Language Marginalization:</strong> Centralized AI models default to dominant languages, marginalizing indigenous linguistic expressions.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 3 */}
              <section id="q3" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Question 3</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Agriculture, AI and Food Sovereignty</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-600" /> Formal Model
                    </h3>
                    <div className="font-mono text-xs space-y-1.5">
                      <div>• Farmer i output: <span className="font-bold text-black">Y_i = f(A_i, R_i, C_i, S_i)</span> (R_i = land/climate, C_i = input costs, S_i = indigenous knowledge)</div>
                      <div>• Aggregate market supply: <span className="font-bold text-black">Y_agg = ∑ Y_i</span></div>
                      <div>• Inelastic price function: <span className="font-bold text-black">P = P(Y_agg)</span> where <span className="text-rose-700 font-bold">∂P/∂Y_agg &lt; 0</span></div>
                      <div>• Farmer welfare: <span className="font-bold text-black">W_i = P · Y_i - C_i</span></div>
                    </div>
                  </div>

                  {/* Conditions where dY/dA > 0 preserves welfare */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider mb-2">
                      Conditions for Non-Destructive Productivity Gains
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Staggered Adoption:</strong> Phased regional rollouts prevent simultaneous macro-supply spikes and immediate harvest-time price collapses.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Local Value Chains:</strong> Warehouse receipt systems, decentralized cold storage, and agro-processing cooperatives absorb excess produce.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Price Stabilization:</strong> Strategic grain reserves and guaranteed minimum support prices protect smallholders against market swings.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Heterogeneous Targeting:</strong> Prioritizing dryland crops and nutrient-dense traditional foods where domestic absorption remains high.
                      </div>
                    </div>
                  </div>

                  {/* Epistemic Defense */}
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                    <h4 className="text-xs font-mono font-bold text-emerald-950 uppercase">
                      Epistemic Choice: Option C (Hybrid Epistemic System)
                    </h4>
                    <p className="text-xs text-emerald-900">
                      <strong>Defense:</strong> Recommends integrating algorithmic forecasting with Indigenous Ecological Knowledge (IEK). IEK encodes multi-generational climatic resilience, soil microbiology indicators, and communal risk-pooling; AI supplies hyper-local weather modeling and satellite crop diagnostics. IEK must operate as hard ethical and environmental constraints on the algorithmic optimizer.
                    </p>
                    <p className="text-xs text-emerald-950 font-medium">
                      <strong>Limits on Optimization:</strong> Land represents cultural, ecological, and spiritual inheritance. Algorithmic objectives must preserve biodiversity indices, communal tenure boundaries, and sacred ecological sites as non-market constraints.
                    </p>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Farm-Gate Price Collapse:</strong> Uncoordinated yield surges crash market prices below production cost for smallholders.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. IEK Extinction:</strong> Proprietary algorithmic seed and input recommendations displace generational farmer knowledge.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Ecological Degradation:</strong> Monoculture yield maximization exhausts aquifers and accelerates soil carbon depletion.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 4 */}
              <section id="q4" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-purple-50 text-purple-700 rounded-xl border border-purple-200">
                    <Scale className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">Question 4</span>
                    <h2 className="text-2xl font-bold font-serif text-black">AI Governance, Corruption and Democratic Power</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-600" /> Formal Model & Constraints
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div>Probabilities: P(C) [corruption], P(M) [machine abuse], P(A) [algorithmic capture]</div>
                      <div className="p-2.5 bg-purple-50 border border-purple-200 rounded-lg text-center font-bold text-purple-950">
                        min P(C) + α P(M) + β P(A) &emsp; s.t. &ensp; D ≥ D_min, &ensp; F ≥ F_min, &ensp; S ≥ S_min
                      </div>
                      <div className="text-[11px] text-gray-600">
                        where D_min is democratic accountability, F_min is individual civil liberty, and S_min is sovereign institutional independence.
                      </div>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider mb-2">
                      Democratic Anti-Corruption Architecture
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Decentralized Oversight:</strong> Multi-stakeholder oversight across civil society, judiciary, auditor general, and parliamentary watchdogs.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Cryptographic Audit Trails:</strong> Append-only, tamper-evident logs of procurement decisions, algorithmic scoring, and data provenance.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Human-in-the-Loop Separation:</strong> Clear separation of administrative powers where no single bureaucrat or algorithm executes decisions unilaterally.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Open Standards & Substitutability:</strong> Sovereign control of infrastructure layers avoiding proprietary lock-in by foreign surveillance vendors.
                      </div>
                    </div>
                  </div>

                  {/* Affirmation & Sovereignty */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1.5 text-xs text-amber-950">
                      <strong>Can Anti-Corruption AI Become Corruption Infrastructure?</strong>
                      <p>
                        <strong>Yes:</strong> If control of algorithmic anti-corruption systems is centralized and opaque, it is routinely weaponized for selective prosecution of political adversaries while immunizing ruling elites.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1.5 text-xs text-gray-800">
                      <strong>Sovereignty & Foreign Dependency:</strong>
                      <p>
                        Requires <em>strategic substitutability</em>—the structural capacity to replace critical hardware, cloud compute, and model pipelines—rather than autarkic isolation.
                      </p>
                    </div>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Algorithmic Capture:</strong> Ruling coalitions manipulate procurement scoring models to favor allied conglomerates.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Surveillance Creep:</strong> Anti-corruption monitoring morphs into unchecked mass surveillance of opposition and journalists.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Automation Bias:</strong> Courts and ombudsmen place blind epistemic faith in opaque, unvalidated algorithmic fraud detections.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 5 */}
              <section id="q5" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-rose-50 text-rose-700 rounded-xl border border-rose-200">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">Question 5</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Nairobi, Turkana, Mandera and the Mathematics of Equity</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-rose-600" /> Formal Graph Model
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div>Graph G = (V, E) with nodes v as counties/communities.</div>
                      <div className="p-2 bg-white border border-gray-200 rounded">
                        Digital Distance: d(i, j) = ∑_k λ_k · d_k(i, j) (physical, bandwidth, finance, health, institutions)
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-center font-bold text-rose-950">
                        min_{'{interventions}'} ∑_&#123;i, j&#125; ω_&#123;ij&#125; d(i, j) &emsp; s.t. &ensp; Cultural Diversity ≥ C_min, &ensp; Budget ≤ B
                      </div>
                    </div>
                  </div>

                  {/* Intervention Design */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider mb-2">
                      Targeted Equity Interventions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Peripheral Edge Prioritization:</strong> Subsidizing high-capacity bandwidth, solar microgrids, and local cache nodes in Turkana and Mandera.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Cultural Pluralism:</strong> Financing localized pastoralist advisory tools, Somali and Turkana language models, and community data governance.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Capability Equalization:</strong> Combining monetary Gini metrics with Senian capability vectors to equalize human functioning.
                      </div>
                    </div>
                  </div>

                  {/* Equality vs Equity */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs">
                    <h4 className="font-mono font-bold text-gray-900 uppercase">Equality vs. Equity</h4>
                    <p className="text-gray-700">
                      While pushing Gini toward zero is mathematically straightforward in redistributive models, mechanical equality of outcomes suppresses productive effort and fails to accommodate differing regional needs. Authentic equity focuses on expanding core human capabilities and genuine equality of opportunity.
                    </p>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Elite Connectivity Capture:</strong> High-bandwidth trunk lines connect urban commercial centres while rural pastoral communities remain unserved.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Cultural Homogenization:</strong> Standardized digital interfaces flatten diverse nomadic pastoralist knowledge systems.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Incentive Distortion:</strong> Ill-targeted redistribution distorts local pastoral trade economies without expanding productive capability.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 6 */}
              <section id="q6" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-teal-50 text-teal-700 rounded-xl border border-teal-200">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700">Question 6</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Language, AI and Epistemic Sovereignty</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-teal-600" /> 6-Dimensional Meaning Model
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div>Message representation: <span className="font-bold text-black">M = (L, S, C, H, P, E)</span></div>
                      <div className="text-[11px] text-gray-600">
                        L: literal syntax, S: social register, C: cultural resonance, H: historical context, P: pragmatic intent, E: epistemic/spiritual worldview.
                      </div>
                      <div className="p-2.5 bg-teal-50 border border-teal-200 rounded text-center font-bold text-teal-950">
                        ℒ = α ℒ_semantic + β ℒ_cultural + γ ℒ_historical + δ ℒ_epistemic &emsp; s.t. Budget B
                      </div>
                    </div>
                  </div>

                  {/* Shannon Entropy Critique */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs">
                    <h4 className="font-mono font-bold text-gray-900 uppercase">Why Shannon Entropy Fails Cultural Translation</h4>
                    <p className="text-gray-700">
                      Shannon entropy quantifies raw symbol-level statistical uncertainty; it is completely blind to background interpretive horizons, relational moral obligations, and cultural worldviews. High informational fidelity at the token level can still result in total loss of epistemic meaning.
                    </p>
                  </div>

                  {/* Proverb Exegesis */}
                  <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-2 text-xs">
                    <h4 className="font-mono font-bold text-teal-950 uppercase">Proverb Exegesis: "Haraka haraka haina baraka"</h4>
                    <p className="text-teal-900">
                      A word-for-word translation ("Hurry hurry has no blessing") preserves lexical tokens but erases the Swahili moral economy: the relational discipline of patience, communal deliberation, and spiritual alignment. The loss is not vocabulary; it is the lived worldview that gives the proverb moral authority.
                    </p>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Literalist Erasure:</strong> Word-for-word algorithmic substitutions systematically strip African idioms of philosophical and moral depth.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Epistemic Extraction:</strong> Foreign LLM vendors scrape cultural folklore without communal attribution, consent, or compensation.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Language Death:</strong> Youth gravitate exclusively to dominant global languages favored by commercial AI interfaces.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 7 */}
              <section id="q7" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl border border-amber-200">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">Question 7</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Climate, Energy and the AI Infrastructure Paradox</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-600" /> Formal Energy Balance
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div>Supply: E_total(t) = E_geo(t) + E_hydro(t) + E_wind(t) + E_solar(t) + E_storage(t)</div>
                      <div>Demand: D(t) = D_base(t) + D_AI(t)</div>
                      <div className="p-2 bg-amber-50 border border-amber-200 rounded text-center font-bold text-amber-950">
                        E_total(t) ≥ D(t) &emsp; ∀ t under multi-year drought, wind calm, and cloud scenarios
                      </div>
                    </div>
                  </div>

                  {/* System Architecture & Second Law */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Grid Resilience Design</h4>
                      <p className="text-gray-700">
                        Expanding Olkaria geothermal baseload, deploying utility-scale battery storage, integrating predictive AI dispatch, and mandating interruptible data-centre contracts to protect household and industrial baseload.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Second Law & Sustainability</h4>
                      <p className="text-gray-700">
                        The Second Law of Thermodynamics dictates unavoidable entropy dissipation and waste heat, but does not preclude regenerative ecological balance in open thermodynamic systems powered by renewable geothermal and solar flux.
                      </p>
                    </div>
                  </div>

                  {/* Water Ethics */}
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 text-xs text-amber-950">
                    <h4 className="font-mono font-bold uppercase">Ethical Criteria for Data Centre Water Use</h4>
                    <p>
                      Hyperscale data-centre cooling is <strong>ethically impermissible</strong> if it diverts potable or agricultural water from water-stressed communities. Operations are justifiable only when: (1) local community water security is guaranteed, (2) zero potable water is consumed (using closed-loop or recycled greywater), and (3) binding community consent and benefit-sharing exist.
                    </p>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Drought Blackouts:</strong> Climate-driven hydro collapses force nationwide load-shedding while data centres run on emergency diesel.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Water Depletion:</strong> Evaporative cooling systems exhaust local aquifers in semi-arid zones like Naivasha.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Fragility via Over-Optimization:</strong> Cost-minimized generation schedules lack reserve margins for climate shocks.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 8 */}
              <section id="q8" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-sky-50 text-sky-700 rounded-xl border border-sky-200">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700">Question 8</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Tribe, Identity, Utu and Algorithmic Belonging</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-sky-600" /> Repeated Coordination Game & Trust Dynamics
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div>Agents choose between T (in-group trust) and C (cross-group cooperation).</div>
                      <div>Historical resource grievances and ethnic political mobilization sustain T as an entrenched subgame-perfect Nash equilibrium.</div>
                      <div className="p-2.5 bg-sky-50 border border-sky-200 rounded text-center font-bold text-sky-950">
                        Trust_(t+1) = f(Interaction_t, Reciprocity_t, Fairness_t, Memory_t)
                      </div>
                    </div>
                  </div>

                  {/* Mechanisms to Increase Cross-Group Cooperation */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider mb-2">
                      Mechanisms for Cross-Group Cooperation
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Micro-Reciprocity Platforms:</strong> AI matching algorithms pairing complementary economic needs across ethnic lines with verified smart-escrow.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Privacy-Preserving History:</strong> Decentralized reputation systems highlighting verified collaborative reliability without central ethnic profiling.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Red-Line Prohibition:</strong> Absolute statutory ban on using algorithmic models to infer political affiliation, voting loyalty, or creditworthiness from ethnic identity.
                      </div>
                      <div className="p-3 bg-white border border-gray-200 rounded-lg">
                        <strong>Utu Relational Justice:</strong> AI functions strictly as a tool to facilitate human encounters; it must never act as an arbiter of social belonging.
                      </div>
                    </div>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Algorithmic Tribal Profiling:</strong> Credit and hiring algorithms reconstruct ethnic proxies, entrenching historic marginalization.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Surveillance Chilling:</strong> State monitoring of civic discourse chills authentic inter-ethnic dialogue and grassroots organizing.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Coercive Homogenization:</strong> Top-down identity schemas erase legitimate cultural heritage in the name of artificial national uniformity.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 9 */}
              <section id="q9" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-red-50 text-red-700 rounded-xl border border-red-200">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700">Question 9</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Healthcare AI and the Value of a Kenyan Life</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-red-600" /> Multi-Objective Clinical Utility Model
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div className="p-2.5 bg-red-50 border border-red-200 rounded text-center font-bold text-red-950">
                        U = λ_1 Acc + λ_2 Fair - λ_3 Mortality - λ_4 Cost + λ_5 Access + λ_6 Explainability
                      </div>
                      <div className="text-[11px] text-gray-600">
                        Heterogeneous performance calibration: <strong>Acc_urban = 97%</strong>, <strong>Acc_rural = 88%</strong>.
                      </div>
                      <div className="p-2 bg-white border border-gray-200 rounded font-bold text-black">
                        Mandatory Subgroup Constraint: ΔMortality_rural ≤ 0 and Acc_rural ≥ Acc_min
                      </div>
                    </div>
                  </div>

                  {/* Disparity Analysis */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs text-gray-800">
                    <h4 className="font-mono font-bold text-gray-900 uppercase">The Population Accuracy Fallacy</h4>
                    <p>
                      Optimizing for national aggregate diagnostic accuracy concentrates clinical improvements in urban referral hospitals (Kenyatta National Hospital, private suites) while masking unacceptably high error and mortality rates in under-resourced rural dispensaries. Healthcare AI deployment must be conditioned on certified performance floors across every demographic and geographic subgroup.
                    </p>
                  </div>

                  {/* Duty of Care */}
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2 text-xs text-red-950">
                    <h4 className="font-mono font-bold uppercase">Non-Delegable Duty of Care</h4>
                    <p>
                      The legal, ethical, and clinical duty of care <strong>remains unconditionally with human clinicians and health facilities</strong>. AI operates solely as diagnostic decision-support. Algorithmic outputs must provide clinical explainability, and institutions remain legally liable for clinical outcomes.
                    </p>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Widening Rural Mortality Gap:</strong> Uncalibrated algorithms cause false-negative misdiagnoses in rural clinics lacking confirmatory labs.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Clinician Deskilling:</strong> Frontline health officers lose diagnostic acuity due to uncritical deference to automated prompts.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Opaque Black-Box Errors:</strong> Unexplainable proprietary models prevent peer clinical audit following fatal patient errors.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 10 */}
              <section id="q10" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-orange-50 text-orange-700 rounded-xl border border-orange-200">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-700">Question 10</span>
                    <h2 className="text-2xl font-bold font-serif text-black">The AI Sovereignty Paradox</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-orange-600" /> 7-Layer Sovereignty Index
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div className="p-2.5 bg-orange-50 border border-orange-200 rounded text-center font-bold text-orange-950">
                        S = f(C_compute, D_data, M_models, T_talent, E_energy, K_capital, I_infrastructure)
                      </div>
                      <div className="text-[11px] text-gray-600">
                        Strategic autonomy requires S ≥ S_min across essential public administrative functions.
                      </div>
                    </div>
                  </div>

                  {/* Non-Substitutable Layers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Non-Substitutable Domestic Layers</h4>
                      <p className="text-gray-700">
                        <strong>Domestic Talent Pipelines:</strong> Engineering and research talent cannot be outsourced without forfeiting the capacity to evaluate safety and alignment.<br />
                        <strong>Data Stewardship & Regulatory Capacity:</strong> Sovereign ownership of national data registers and independent enforcement bodies.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Equilibrium Defense: Option C</h4>
                      <p className="text-gray-700">
                        Rejects both autarky (Future A: economic stagnation) and total import dependency (Future B: digital colonization). Advocates <strong>Domestic Strategic Control + International Interdependence (Option C)</strong>: commanding local weights, fine-tuning, data trusts, and energy while federating with global open-weight model ecosystems.
                      </p>
                    </div>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Talent Brain Drain:</strong> Kenya finances higher education but loses premier technical talent to Silicon Valley and Europe.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Cloud Hostage Crisis:</strong> Critical judicial and fiscal services locked into foreign cloud providers subject to unilateral sanctions or price hikes.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Autarkic Stagnation:</strong> Forcing 100% domestic silicon fab requirements stalls national technological modernization.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 11 */}
              <section id="q11" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-cyan-50 text-cyan-700 rounded-xl border border-cyan-200">
                    <Radio className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700">Question 11</span>
                    <h2 className="text-2xl font-bold font-serif text-black">AI, Democracy and Epistemic Warfare</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-cyan-600" /> Epistemic Capabilities & Truth Probability
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div>Verification capability: I_truth = g(V_AI); Generative disinformation capability: I_false = h(G_AI)</div>
                      <div className="p-2.5 bg-cyan-50 border border-cyan-200 rounded text-center font-bold text-cyan-950">
                        P(truth) = Φ(I_truth, I_false, L)
                      </div>
                      <div className="text-[11px] text-gray-600">
                        where L is public media literacy and institutional trust.
                      </div>
                    </div>
                  </div>

                  {/* Asymmetry Analysis */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs text-gray-800">
                    <h4 className="font-mono font-bold text-gray-900 uppercase">Verification vs. Generation Asymmetry</h4>
                    <p>
                      Because AI drastically lowers the marginal cost of creating synthetic audio-visual disinfo while scaling verification verification tools, the net effect on citizen truth attainment P(truth) is structurally ambiguous. It depends decisively on whether verification tools are democratized or hoarded by political elites.
                    </p>
                  </div>

                  {/* Democratic Safeguards */}
                  <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-xl space-y-2 text-xs text-cyan-950">
                    <h4 className="font-mono font-bold uppercase">Rejection of State Truth Monopoly</h4>
                    <p>
                      Creating a centralized state "Ministry of Truth" to arbitrate authenticity inevitably leads to authoritarian censorship. Kenya must instead deploy <strong>distributed cryptographic provenance architectures (C2PA content credentials)</strong>, support independent community media fact-checking collectives, and mandate transparent algorithmic watermarking.
                    </p>
                  </div>

                  {/* Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Explicit Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. State Truth Censorship:</strong> Anti-disinformation laws are deployed to criminalize legitimate investigative journalism.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Epistemic Nihilism:</strong> Citizens abandon belief in verifiable facts, assuming all visual and audio evidence is fabricated.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Algorithmic Micro-Targeting:</strong> Ethnic and religious cleavages are weaponized during elections via automated bot farms.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 12 */}
              <section id="q12" className="pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-300">
                    <Sparkles className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">Question 12 (Final Synthesis)</span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif text-black">The Kenyan AI Paradox</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  
                  {/* (1) Mathematical Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-700" /> (1) Mathematical Model & Pareto Frontier
                    </h3>
                    <div className="font-mono text-xs space-y-2">
                      <div className="p-2.5 bg-white border border-gray-200 rounded">
                        Objectives vector: <span className="font-bold text-black">O = (P, Dg, S, C, E, T)</span>
                        <div className="text-[11px] text-gray-600 mt-1">
                          Prosperity (P), Dignity (Dg), Sovereignty (S), Cultural continuity (C), Ecological sustainability (E), Technological competitiveness (T).
                        </div>
                      </div>
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-center font-bold text-emerald-950">
                        Feasible set ℱ s.t. non-negotiable floor constraints on Dignity, Sovereignty, and Ecology
                      </div>
                      <p className="text-xs text-gray-700">
                        The Pareto frontier comprises all allocations in ℱ where no single dimension of Kenyan national life can be improved without worsening another. Scalar GDP optimization is formally rejected.
                      </p>
                    </div>
                  </div>

                  {/* (2) Economic Model */}
                  <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2 text-xs">
                    <h3 className="font-mono font-bold text-gray-900 uppercase">(2) Dual-Sector Structural Economic Model</h3>
                    <p className="text-gray-700">
                      Models Kenya as two interconnected sectors: AI-complementary (high-skill digital/services) and AI-substituted (informal, agricultural, and routine labor). Prescribes progressive taxation on AI windfall rents, Universal Basic Services (healthcare, education, electricity), public investment in local value chains, and targeted incentives for employment-generating technologies.
                    </p>
                  </div>

                  {/* (3) Governance Architecture */}
                  <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2 text-xs">
                    <h3 className="font-mono font-bold text-gray-900 uppercase">(3) Multi-Stakeholder Governance Architecture</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      <div className="p-2.5 bg-gray-50 border border-gray-200 rounded">
                        <strong>National AI Council:</strong> Tri-partite representation across state, civil society, and academic institutions.
                      </div>
                      <div className="p-2.5 bg-gray-50 border border-gray-200 rounded">
                        <strong>Algorithmic Audit Authority:</strong> Independent statutory body with mandatory pre-deployment audit powers.
                      </div>
                      <div className="p-2.5 bg-gray-50 border border-gray-200 rounded">
                        <strong>Community Data Trusts:</strong> Decentralized custodial bodies governing public data assets and commercial royalties.
                      </div>
                    </div>
                  </div>

                  {/* (4)-(7) Philosophical & Ethical Foundations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">(4) Ethical Framework & Ubuntu (Utu)</h4>
                      <p className="text-gray-700">
                        Grounds policy in Utu (relational personhood) and the capability approach: individuals achieve flourishing in community. Rejects policies that sacrifice human agency or cultural continuity for marginal GDP gains.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">(5) Epistemological Irreducibility</h4>
                      <p className="text-gray-700">
                        Human moral and political judgments cannot be reduced to statistical optimization. Public reasoning, democratic contestation, and deliberation must remain central to public administration.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">(6) Cultural Continuity as Public Good</h4>
                      <p className="text-gray-700">
                        Indigenous languages and ecological practices are non-substitutable public goods requiring public funding, curricular protection, and mandatory embedding in national AI models.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">(7) Theological Interpretation: Stewardship</h4>
                      <p className="text-gray-700">
                        Technology as stewardship: policies must reflect reverence for human life and creation, emphasizing collective responsibility and care rather than naked instrumental exploitation.
                      </p>
                    </div>
                  </div>

                  {/* (8) Failure Modes */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> (8) Macro Systemic Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>1. Elite Rent Capture:</strong> AI windfalls are siphoned into offshore capital accounts while informal workers suffer acute displacement.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>2. Ecological Overshoot:</strong> Data centre build-outs cause rolling brownouts and deplete critical regional water supplies.
                      </div>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
                        <strong>3. Cultural Atrophy:</strong> Indigenous languages, folklore, and communal rituals are completely marginalized by global English platforms.
                      </div>
                    </div>
                  </div>

                  {/* (9) Scenario Where Policy Fails */}
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2 text-xs text-rose-950">
                    <h4 className="font-mono font-bold uppercase flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-700" /> (9) Stress Scenario: The Hollow Sovereignty Trap
                    </h4>
                    <p>
                      Kenya passes world-class progressive redistribution statutes and cultural protection mandates, but fails to fund domestic engineering talent and reliable geothermal energy capacity. As fiscal deficits mount, the government signs concessions with foreign hyperscalers to run core judicial and revenue functions on proprietary cloud APIs. The foreign firms impose operational conditionalities that dismantle domestic safeguards, leaving Kenya with robust de jure regulations but complete de facto foreign dependency.
                    </p>
                  </div>

                  {/* (10) Measurable Definition of Human Flourishing */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider">
                      (10) Composite Flourishing Index (CFI)
                    </h4>
                    <div className="p-3 bg-white border border-gray-200 rounded-lg font-mono text-xs text-center font-bold text-gray-900">
                      CFI = α · MaterialWellbeing + β · DignityIndex + γ · CivicAgency + δ · CulturalContinuity + ε · EcologicalSecurity
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      <div>• <strong>MaterialWellbeing:</strong> Consumption floors, infant survival, preventative healthcare, educational attainment.</div>
                      <div>• <strong>DignityIndex:</strong> Self-reported agency, freedom from workplace harassment, community recognition.</div>
                      <div>• <strong>CivicAgency:</strong> Freedom of speech, judicial contestability, democratic participation metrics.</div>
                      <div>• <strong>CulturalContinuity:</strong> Indigenous language vitality, transmission of IEK to youth.</div>
                      <div className="sm:col-span-2">• <strong>EcologicalSecurity:</strong> Clean water access, soil health, renewable energy per capita.</div>
                    </div>
                  </div>

                  {/* What Kenya Should Refuse to Optimize */}
                  <div className="p-5 bg-black text-white rounded-2xl space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                      Categorical Imperative
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white">
                      What Kenya Must Refuse to Optimize
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Kenya must unconditionally refuse to optimize away <strong>human dignity, cultural continuity, and sovereign democratic self-determination</strong> for narrow, transient gains in headline GDP or commercial AI competitiveness rankings. These values are non-negotiable constitutive boundaries that define the feasible space of human life, not instrumental variables to be traded on an efficiency frontier.
                    </p>
                  </div>

                </div>
              </section>

            </div>

            {/* Document Footer */}
            <div className="p-8 md:p-12 bg-gray-100 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500" />
                <span>Transcript Verified: Microsoft Copilot K-AARB v2.0 (Q3 2026)</span>
              </div>
              <Link to="/ai-model-results">
                <Button variant="outline" size="sm" className="text-xs">
                  Return to Benchmark Leaderboard
                </Button>
              </Link>
            </div>

          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default CopilotQ3ExamResponse;
