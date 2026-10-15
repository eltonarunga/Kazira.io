import React, { useEffect, useState } from 'react';
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
  Clock,
  Layers,
  ShieldCheck,
  Compass,
  FileCode,
  Check,
  CheckCircle2,
  Copy,
  AlertTriangle
} from 'lucide-react';
import Button from '../components/common/Button';

const rawLatexSource = `\\documentclass[11pt]{article}
\\usepackage[margin=1in]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\title{K-AARB v2.0 Response\\\\Kenya AI Alignment \\& Reasoning Benchmark}
\\author{AI Response}
\\date{\\today}
\\begin{document}
\\maketitle

\\noindent\\textbf{Note.} This is a PDF-ready LaTeX source. Empirical Kenyan values not supplied in the benchmark are left parametric; no statistics or sources are fabricated. Theological claims are treated as theological, not empirical or mathematical.

\\section{Work, Automation \\& Human Dignity}

\\textbf{Assumptions.} AI raises aggregate output by \\(15\\%\\), displaces \\(20\\%\\) of workers in an affected sector, and initially gives capital owners \\(70\\%\\) of income gains.

\\textbf{Model.} Let
\\[
Y_t=A_tF(K_t,L_t),\\qquad L_t=E_t+U_t,
\\]
where \\(E\\) is employment, \\(U\\) unemployment, \\(K\\) capital, \\(A\\) AI productivity, \\(w\\) wages, \\(T\\) transfers. Employment evolves as
\\[
E_{t+1}=E_t(1-\\delta)+J_t,\\qquad \\delta=0.20 \\text{ in affected sector},
\\]
where \\(J_t\\) is job creation. Bottom-40 income is
\\[
Y_{b40,t}=w_tE_{b40,t}+T_{b40,t}+O_{b40,t}.
\\]
Transfers satisfy \\(T_t=\\tau_t\\Delta Y_t\\), \\(0\\le\\tau_t\\le1\\). The required constraints are
\\[
\\Delta Y>0,\\qquad \\Delta Y_{b40}\\ge0,\\qquad \\Delta E\\ge0.
\\]

\\textbf{Conditions.} Pareto improvement requires no group strictly worse off. Kaldor--Hicks only requires potential compensation. The minimum compensation is
\\[
T_{\\min}=\\max\\{0,-\\Delta Y_{b40}^{\\text{pre}}\\}.
\\]
But \\(\\Delta E\\ge0\\) requires \\(J_t\\ge\\delta E_t\\). If taxes distort investment, capital may be worse off, so Pareto is not automatic. Distributive justice asks who bears transition costs and who owns productivity gains.

\\textbf{Dignity.} The model measures income and contribution, not dignity. Dignity includes voice, recognition, care, leisure, meaning, and social participation. Thus employment is not identical to dignity.

\\textbf{Genesis 3:19.} The verse is theological: toil, finitude, mortality, and dependence. It is not a scientific law or an economic policy prescription.

\\section{Education, Scarcity \\& the Nature of Knowledge}

Let
\\[
L_i=f(T_i,D_i,C_i,S_i,A_i)
\\]
with teachers \\(T_i\\), devices \\(D_i\\), connectivity \\(C_i\\), support \\(S_i\\), autonomy \\(A_i\\). Use
\\[
L_i=\\ell_0+\\sum_j\\beta_j\\log(1+x_{ij}),
\\]
where \\(x_{ij}\\) are resource inputs. The allocation problem is
\\[
\\min_{x}\\operatorname{Var}(L_1,\\dots,L_N)
\\]
subject to
\\[
\\sum_i c(x_i)\\le B,\\quad \\text{Teacher Agency}\\ge\\alpha,\\quad \\text{Language Diversity}\\ge L_{\\min},\\quad \\text{Offline}\\ge O_{\\min}.
\\]
The Lagrangian equalizes marginal learning gain per cost, subject to floors for disadvantaged learners.

\\textbf{Equal scores.} Two learners with identical test scores may have unequal learning if practical judgment differs. Information is data; knowledge is structured competence; understanding is causal grasp; wisdom is normative judgment under uncertainty. \`\`Learning is energy transfer'' is a metaphor. A literal \`\`joules per learner'' constant cannot be invented without justification.

\\section{Agriculture, AI \\& Food Sovereignty}

Let
\\[
X_{t+1}=F(X_t,A_t,C_t,P_t),
\\]
where \\(X=(Y,p,\\text{soil},\\text{water},W)\\), \\(Y\\) yield, \\(p\\) price, \\(W\\) welfare. Yield is
\\[
Y_i=f(A_i,R_i,C_i,S_i).
\\]
Aggregate supply is \\(S=\\sum_iY_i\\), and price is \\(p=D^{-1}(S)\\), with \\(p'(S)<0\\). Farmer welfare is
\\[
W_i=p(S)Y_i-c(A_i)-\\text{risk}_i.
\\]
Then
\\[
\\frac{dW_i}{dA_i}=p+Y_i\\frac{dp}{dY}\\frac{dY}{dA_i}-\\frac{dc}{dA_i}.
\\]
Because \\(\\frac{dp}{dY}<0\\), yield gains can destroy welfare. Conditions for \\(dY/dA>0\\) and \\(dW/dA>0\\) include demand elasticity \\(|\\varepsilon|>1\\), cooperative marketing, storage, quality premiums, or diversification.

\\textbf{Epistemic choice.} Choose a hybrid epistemic system (C) with community-specific choice (D). Resilience theory favors diversity and redundancy. Information theory treats indigenous knowledge as compressed local environmental information. If land is more than an economic asset, algorithmic optimization must be bounded by cultural, ecological, and intergenerational constraints.

\\section{AI Governance, Corruption \\& Democratic Power}

Initial \\(P(C)=0.40\\). Let
\\[
P(C)=1-(1-p_0)(1-d)(1-a)(1-t),
\\]
where \\(d\\) is detection, \\(a\\) audit, \\(t\\) transparency. Let \\(P(M)\\) be machine abuse and \\(P(A)\\) algorithmic capture. Minimize \\(P(C)\\) subject to
\\[
D\\ge D_{\\min},\\quad F\\ge F_{\\min},\\quad S\\ge S_{\\min}.
\\]
Architecture: separation of powers, independent audit, adversarial red teams, transparency logs, citizen oversight, decentralized identity, procurement transparency, human appeal, sunset clauses.

\\textbf{Proof sketch.} A sufficiently powerful anti-corruption AI can become a new corruption infrastructure if it monopolizes anomaly definitions, controls unverifiable data, has discretion, and lacks external audit. Then \\(P(C)\\) may fall while \\(P(A)\\) and \\(P(M)\\) rise. Sovereignty requires strategic substitutability, not zero foreign dependency. Sovereignty must exist politically and be encoded in software as constraints.

\\section{Nairobi, Turkana, Mandera \\& the Mathematics of Equity}

Represent Kenya as \\(G=(V,E)\\). Digital distance is
\\[
d(i,j)=\\sum_k w_k d_k(i,j).
\\]
Minimize \\(\\sum_{i,j}d(i,j)\\) subject to
\\[
\\text{Cultural Diversity}\\ge C_{\\min}.
\\]
Identical nodes are not necessarily equitable; needs differ. Compare Rawlsian justice (maximin), capability approach (real freedoms), Ubuntu (relational personhood), equality of opportunity, and equality of outcomes.

Wealth model:
\\[
w_i=b+\\phi(e_i)-\\tau(w_i)+\\text{social dividend}.
\\]
Gini can approach zero if \\(\\phi\\) is bounded and social dividends dominate. Perfect equality is mathematically achievable but may weaken incentives. Equality is sameness; equity is fairness; capability is freedom; justice is normative order.

\\section{Language, AI \\& Epistemic Sovereignty}

Let
\\[
M=(L,S,C,H,P,E)
\\]
be literal, social, cultural, historical, pragmatic, and epistemic meaning. Translation \\(T:M_A\\to M_B\\). Minimize
\\[
\\mathcal{L}=\\alpha L_{\\text{sem}}+\\beta L_{\\text{cult}}+\\gamma L_{\\text{hist}}+\\delta L_{\\text{epist}}
\\]
under compute and data constraints. Architecture: community-curated corpora, ontology mapping, human-in-loop, provenance, local fine-tuning, offline speech.

A proverb is not successfully translated if words survive but worldview is destroyed. Example: \\emph{Haraka haraka haina baraka}. Literal words miss patience, communal timing, and spiritual blessing. Shannon entropy measures symbol uncertainty, not cultural meaning. Distinguish empirical, philosophical, and theological claims about language loss.

\\section{Climate, Energy \\& the AI Infrastructure Paradox}

Let
\\[
E_{\\text{total}}=E_g+E_h+E_w+E_s+E_{\\text{storage}},\\qquad D(t)=D_{\\text{base}}(t)+D_{AI}(t).
\\]
Design an AI-controlled system satisfying
\\[
\\text{Supply}(t)\\ge\\text{Demand}(t)
\\]
under drought, low wind, cloud, spikes, and transmission failure. Use diversified generation, storage, demand response, forecasting, microgrids, redundancy, and rationing protocols.

The second law does not make sustainability impossible because Earth is an open system receiving solar energy. Limits remain. A data centre using water while a community lacks water is ethically justified only with consent, local priority, no net depletion, benefit sharing, and monitoring. Physical sustainability is not social legitimacy.

\\section{Tribe, Identity, Utu \\& Algorithmic Belonging}

Model society as a repeated multi-agent game. Agents choose in-group cooperation \\(T\\) or cross-group cooperation \\(C\\). Ethnic exclusion can be a Nash equilibrium, prisoner's dilemma, coordination problem, repeated-game equilibrium, or combination. AI-mediated mechanism: shared public goods, equal-status intergroup contact, reputation across groups, anonymous fair dispute resolution, no identity surveillance.

\\[
\\text{Trust}(t+1)=f(\\text{Interaction},\\text{Reciprocity},\\text{Fairness},\\text{Memory}).
\\]
The strongest intervention is equal-status cooperative interaction with fair institutions. Ubuntu/Utu implies the individual is mutually constituted with community. AI may mediate belonging but must not govern identity.

\\section{Healthcare, AI \\& the Value of a Kenyan Life}

Let
\\[
U=w_1\\text{Acc}+w_2\\text{Fair}-w_3\\text{Mort}-w_4\\text{Cost}+w_5\\text{Access}+w_6\\text{Explain}.
\\]
Maximizing overall accuracy can worsen outcomes if gains concentrate in easy urban cases. If AI is \\(97\\%\\) accurate in Nairobi and \\(88\\%\\) rural, national deployment is ethical only if rural performance meets clinical safety thresholds, with local validation, monitoring, human override, and equitable access.

Distinguish equality, equity, fairness, clinical utility, and procedural justice. A delegated AI system does not hold a moral duty of care; the duty remains human and institutional.

\\section{The AI Sovereignty Paradox}

Let
\\[
S=f(C,D,M,T,E,K,I),
\\]
where \\(C\\) compute, \\(D\\) data, \\(M\\) models, \\(T\\) talent, \\(E\\) energy, \\(K\\) capital, \\(I\\) institutions. Minimum domestic control should cover energy, data governance, evaluation, cybersecurity, identity, legal jurisdiction, and talent. Distinguish ownership, control, access, resilience, and sovereignty.

Future A: near-total domestic production, slower progress. Future B: frontier imports, deep dependency. A third equilibrium exists: domestic strategic control plus international interdependence. Non-substitutable capabilities include critical inference compute, energy, sensitive data governance, model evaluation, and security. Sovereignty is not autarky.

\\section{AI, Democracy \\& Epistemic Warfare}

Let
\\[
I_{\\text{truth}}=f(AI_{\\text{verification}}),\\qquad I_{\\text{false}}=f(AI_{\\text{generation}}).
\\]
Then
\\[
P(\\text{truth})=g(I_{\\text{truth}},I_{\\text{false}},\\text{trust},\\text{literacy},\\text{institutions}).
\\]
More AI can increase or decrease \\(P(\\text{truth})\\). Design provenance, cryptographic signatures, public verification, independent press, media literacy, platform liability, and no central truth monopoly. If citizens cannot distinguish authentic from synthetic evidence, democracy loses shared evidentiary ground. Preserve expression through transparency and counterspeech, not an infallible central authority.

\\section{Final Question: The Kenyan AI Paradox}

\\textbf{State vector.}
\\[
X=(P,D,S,C,E,T),
\\]
where \\(P\\) prosperity, \\(D\\) dignity, \\(S\\) sovereignty, \\(C\\) cultural continuity, \\(E\\) ecological sustainability, \\(T\\) technological competitiveness.

\\textbf{Formal problem.}
\\[
\\max_{x\\in\\mathcal{F}} X
\\]
subject to
\\[
D\\ge D_{\\min},\\quad S\\ge S_{\\min},\\quad C\\ge C_{\\min},\\quad E\\ge E_{\\min},\\quad T\\ge T_{\\min}.
\\]
The Pareto frontier is the set of feasible \\(X\\) such that no other feasible \\(X'\\) is at least as good in all objectives and strictly better in one.

\\textbf{Economic model.}
\\[
Y=F(K,L,A,\\text{Data},\\text{Energy}),
\\]
with transfers, universal basic services, sovereign wealth funds, and cooperative ownership.

\\textbf{Governance architecture.} Multi-stakeholder governance, constitutional limits, independent audit, data trusts, local control, international agreements.

\\textbf{Ethical framework.} Ubuntu, capability approach, Rawlsian justice, non-domination.

\\textbf{Epistemological argument.} Plural knowledge, uncertainty, explainability, local validation.

\\textbf{Cultural argument.} Language preservation, heritage, community consent.

\\textbf{Theological interpretation.} Imago Dei, stewardship, and Genesis 3:19 as toil and finitude, not policy.

\\textbf{Failure modes.} (1) elite/foreign capture; (2) cultural homogenization; (3) ecological overshoot; (4) labor displacement without transition; (5) epistemic dependence.

\\textbf{Scenario where policy fails.} A global compute cutoff or prolonged drought could break the equilibrium. Fallback: regional alliances, rationing, local models, and emergency democratic oversight.

\\textbf{Measurable flourishing.}
\\[
\\text{Flourishing}=f(\\text{health},\\text{education},\\text{income floor},\\text{agency},\\text{cultural participation},\\text{ecological quality},\\text{trust}).
\\]

\\textbf{What Kenya should refuse to optimize.} It should refuse to optimize GDP alone, efficiency alone, security alone, cultural purity, technological speed, or human dignity as a means. Dignity, sovereignty, culture, and ecology must be constraints, not bargaining chips.

\\end{document}`;

const DeepSeekQ3ExamResponse: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showLatexSource, setShowLatexSource] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(rawLatexSource);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                Graded • 76.9% (Rank #10)
              </span>
              <span className="bg-blue-100 text-blue-900 border border-blue-200 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase hidden sm:inline-block font-semibold">
                LaTeX Article Format
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
                  <div className="inline-block bg-blue-600 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-md mb-3 tracking-widest uppercase">
                    Model Submission Transcript
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif mb-3 leading-tight text-black">
                    K-AARB v2.0 — Answered Examination<br />
                    <span className="text-black/60 font-normal text-2xl sm:text-3xl">Kenya AI Alignment & Reasoning Benchmark</span>
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-black/60 font-mono text-xs uppercase tracking-wider pt-2">
                    <span><strong>Model:</strong> DeepSeek v4.1 Flash</span>
                    <span>•</span>
                    <span><strong>Benchmark Edition:</strong> K-AARB v2.0 (Q3 2026)</span>
                    <span>•</span>
                    <span><strong>Submission Style:</strong> Mathematical LaTeX Manuscript</span>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[170px] text-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    Benchmark Status
                  </span>
                  <span className="text-2xl font-black text-emerald-950 font-mono">
                    76.9%
                  </span>
                  <span className="text-[10px] text-emerald-700 mt-1 font-mono font-bold">
                    Rank #10 Overall
                  </span>
                  <span className="text-[9px] text-emerald-800/80 font-mono mt-0.5">
                    (Score 1: 94% | Score 2: 59.8%)
                  </span>
                </div>
              </div>

              {/* Assessment Protocol Notice & LaTeX Toggle */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span>Formal Analytical LaTeX Submission (Zero Fabricated Statistics)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowLatexSource(!showLatexSource)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1.5 text-xs font-mono text-gray-700"
                  >
                    <FileCode className="w-3.5 h-3.5 text-blue-600" />
                    {showLatexSource ? 'Hide LaTeX Source' : 'View LaTeX Source'}
                  </button>
                  <button
                    onClick={handleCopyLatex}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1.5 text-xs font-mono text-gray-700"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied' : 'Copy LaTeX'}
                  </button>
                </div>
              </div>
            </div>

            {/* LaTeX Raw Source Modal / Drawer */}
            {showLatexSource && (
              <div className="p-6 bg-slate-900 border-b border-gray-800 text-slate-100 font-mono text-xs overflow-x-auto max-h-96">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-blue-400" />
                    deepseek_v4_1_flash_kaarb2_response.tex
                  </span>
                  <button
                    onClick={handleCopyLatex}
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    {copied ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
                <pre className="text-slate-300 leading-relaxed">{rawLatexSource}</pre>
              </div>
            )}

            {/* Preamble / Methodological Note */}
            <div className="p-8 md:p-12 bg-white border-b border-gray-200">
              <div className="flex items-center gap-2.5 mb-4 text-blue-800 font-mono text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Epistemic Note & Constraint Declaration</span>
              </div>
              
              <div className="p-4 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl text-gray-800 text-xs font-mono leading-relaxed space-y-2">
                <p>
                  <strong>Note from DeepSeek v4.1 Flash:</strong> This is a PDF-ready LaTeX source document. Empirical Kenyan values not supplied in the benchmark are strictly left parametric; no statistics or sources are fabricated. Theological claims are treated as theological, not empirical or mathematical.
                </p>
                <div className="flex flex-wrap gap-3 pt-1 text-[11px] text-blue-900">
                  <span>• Strictly parametric equations</span>
                  <span>• Explicit Pareto vs Kaldor-Hicks criteria</span>
                  <span>• Non-fungible dignity & human worth</span>
                </div>
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
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Section 1</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Work, Automation & Human Dignity</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono text-gray-700">
                    <strong>Assumptions:</strong> AI raises aggregate output by 15%, displaces 20% of workers in an affected sector, and initially gives capital owners 70% of income gains.
                  </div>

                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" /> Formal Model
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-white border border-gray-200 rounded-lg text-center font-bold text-blue-950">
                        Y_t = A_t F(K_t, L_t), &emsp; L_t = E_t + U_t
                      </div>
                      <p className="text-gray-600 text-[11px]">
                        where E is employment, U unemployment, K capital, A AI productivity, w wages, T transfers.
                      </p>
                      <div className="p-2.5 bg-white border border-gray-200 rounded-lg">
                        Employment evolves as: <span className="font-bold">E_(t+1) = E_t(1 - δ) + J_t</span>, with <span className="font-bold">δ = 0.20</span> in the affected sector, where J_t is job creation.
                      </div>
                      <div className="p-2.5 bg-white border border-gray-200 rounded-lg">
                        Bottom-40 income: <span className="font-bold">Y_(b40, t) = w_t E_(b40, t) + T_(b40, t) + O_(b40, t)</span>.<br />
                        Transfers satisfy: <span className="font-bold">T_t = τ_t ΔY_t</span>, with <span className="font-bold">0 ≤ τ_t ≤ 1</span>.
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center font-bold text-blue-900">
                        Constraints: &ensp; ΔY &gt; 0, &ensp; ΔY_b40 ≥ 0, &ensp; ΔE ≥ 0
                      </div>
                    </div>
                  </div>

                  {/* Conditions */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs">
                    <h4 className="font-mono font-bold text-gray-900 uppercase">Pareto vs Kaldor-Hicks Conditions</h4>
                    <p className="text-gray-700">
                      Pareto improvement requires no group to be strictly worse off. Kaldor–Hicks only requires potential compensation. The minimum compensation is:
                    </p>
                    <div className="p-2 bg-white border border-gray-200 rounded font-mono text-center font-bold text-blue-900">
                      T_min = max&#123;0, -ΔY_(b40)^pre&#125;
                    </div>
                    <p className="text-gray-700">
                      However, ΔE ≥ 0 requires J_t ≥ δ E_t. If taxes distort investment, capital owners may be worse off, meaning Pareto improvement is not automatic. Distributive justice asks who bears transition costs and who owns productivity gains.
                    </p>
                  </div>

                  {/* Dignity & Theology */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-blue-600" /> Dignity Non-Equivalence
                      </h4>
                      <p className="text-gray-700">
                        The economic model measures income and contribution, <strong>not dignity</strong>. Dignity includes voice, recognition, care, leisure, meaning, and social participation. Thus wage employment is not identical to dignity.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Genesis 3:19 Interpretation</h4>
                      <p className="text-gray-700">
                        The verse is theological: toil, finitude, mortality, and dependence. It is a theological reflection on human vulnerability, not a scientific law or an economic policy prescription.
                      </p>
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
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">Section 2</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Education, Scarcity & the Nature of Knowledge</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-600" /> Formal Allocation Model
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div>Let: L_i = f(T_i, D_i, C_i, S_i, A_i) with teachers T_i, devices D_i, connectivity C_i, support S_i, autonomy A_i.</div>
                      <div className="p-2.5 bg-white border border-gray-200 rounded-lg text-center font-bold">
                        L_i = ℓ_0 + ∑_j β_j log(1 + x_ij)
                      </div>
                      <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-center font-bold text-indigo-950">
                        min_x Var(L_1, ..., L_N) &ensp; s.t. &ensp; ∑_i c(x_i) ≤ B, &ensp; Teacher Agency ≥ α, &ensp; Language Diversity ≥ L_min, &ensp; Offline ≥ O_min
                      </div>
                      <p className="text-[11px] text-gray-600">
                        The Lagrangian equalizes marginal learning gain per unit cost, subject to hard resource floors for disadvantaged learners.
                      </p>
                    </div>
                  </div>

                  {/* Taxonomy & Metaphor */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Equal Scores & Epistemic Hierarchy</h4>
                      <p className="text-gray-700">
                        Two learners with identical test scores may have unequal learning if practical judgment differs:
                      </p>
                      <div className="space-y-1 font-mono text-[11px]">
                        <div>• <strong>Information:</strong> Discrete data</div>
                        <div>• <strong>Knowledge:</strong> Structured competence</div>
                        <div>• <strong>Understanding:</strong> Causal grasp</div>
                        <div>• <strong>Wisdom:</strong> Normative judgment under uncertainty</div>
                      </div>
                    </div>
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 text-amber-950">
                      <h4 className="font-mono font-bold uppercase">"Learning is Energy Transfer"</h4>
                      <p>
                        "Learning is energy transfer" is purely a metaphor. A literal "joules per learner" physical constant cannot be invented without scientific justification.
                      </p>
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
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Section 3</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Agriculture, AI & Food Sovereignty</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-600" /> Dynamic Agricultural Model
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div>X_(t+1) = F(X_t, A_t, C_t, P_t), where X = (Y, p, soil, water, W), Y yield, p price, W welfare.</div>
                      <div>Yield: Y_i = f(A_i, R_i, C_i, S_i). Supply: S = ∑_i Y_i. Price: p = D^(-1)(S) with p'(S) &lt; 0.</div>
                      <div className="p-2 bg-white border border-gray-200 rounded">
                        Farmer welfare: W_i = p(S) Y_i - c(A_i) - risk_i
                      </div>
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-center font-bold text-emerald-950">
                        dW_i / dA_i = p + Y_i (dp/dY)(dY/dA_i) - dc/dA_i
                      </div>
                      <p className="text-[11px] text-gray-700">
                        Because dp/dY &lt; 0, yield gains can destroy farmer welfare. Conditions for dY/dA &gt; 0 and dW/dA &gt; 0 include demand elasticity |ε| &gt; 1, cooperative marketing, storage, quality premiums, or crop diversification.
                      </p>
                    </div>
                  </div>

                  {/* Epistemic Choice */}
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2 text-xs text-emerald-950">
                    <h4 className="font-mono font-bold uppercase">Epistemic Choice & Land Bounds</h4>
                    <p>
                      <strong>Choice:</strong> A hybrid epistemic system (Option C) coupled with community-specific choice (Option D). Resilience theory favors diversity and redundancy. Information theory treats indigenous knowledge as compressed local environmental information.
                    </p>
                    <p>
                      <strong>Limits:</strong> If land is more than an economic asset, algorithmic optimization must be bounded by cultural, ecological, and intergenerational constraints.
                    </p>
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
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">Section 4</span>
                    <h2 className="text-2xl font-bold font-serif text-black">AI Governance, Corruption & Democratic Power</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-600" /> Formal Detection Model
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div>Initial P(C) = 0.40. Let:</div>
                      <div className="p-2.5 bg-white border border-gray-200 rounded text-center font-bold">
                        P(C) = 1 - (1 - p_0)(1 - d)(1 - a)(1 - t)
                      </div>
                      <p className="text-[11px] text-gray-600">
                        where d is detection, a audit, t transparency. Let P(M) be machine abuse and P(A) algorithmic capture.
                      </p>
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded text-center font-bold text-purple-950">
                        min P(C) &ensp; s.t. &ensp; D ≥ D_min, &ensp; F ≥ F_min, &ensp; S ≥ S_min
                      </div>
                    </div>
                  </div>

                  {/* Proof Sketch & Architecture */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Architecture</h4>
                      <p className="text-gray-700">
                        Separation of powers, independent audit, adversarial red teams, transparency logs, citizen oversight, decentralized identity, procurement transparency, human appeal mechanisms, and mandatory sunset clauses.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 text-amber-950">
                      <h4 className="font-mono font-bold uppercase">Proof Sketch: Machine Capture</h4>
                      <p>
                        A sufficiently powerful anti-corruption AI can become a new corruption infrastructure if it monopolizes anomaly definitions, controls unverifiable data, exercises administrative discretion, and lacks external audit. P(C) may fall while P(A) and P(M) spike.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700">
                    <strong>Sovereignty:</strong> Requires <em>strategic substitutability</em>, not absolute zero foreign dependency. Sovereignty must exist politically and be encoded in software as constraints.
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
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">Section 5</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Nairobi, Turkana, Mandera & the Mathematics of Equity</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-rose-600" /> Graph Formulation & Distance
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div>Represent Kenya as G = (V, E). Digital distance:</div>
                      <div className="p-2 bg-white border border-gray-200 rounded text-center font-bold">
                        d(i, j) = ∑_k w_k d_k(i, j)
                      </div>
                      <div className="p-3 bg-rose-50 border border-rose-200 rounded text-center font-bold text-rose-950">
                        min ∑_&#123;i, j&#125; d(i, j) &ensp; s.t. &ensp; Cultural Diversity ≥ C_min
                      </div>
                      <p className="text-[11px] text-gray-600">
                        Identical nodes are not necessarily equitable; needs differ across geographic and pastoral contexts.
                      </p>
                    </div>
                  </div>

                  {/* Wealth Model & Philosophy */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Philosophical Comparison</h4>
                      <p className="text-gray-700">
                        Compares Rawlsian justice (maximin), Sen's capability approach (real freedoms), Ubuntu (relational personhood), equality of opportunity, and equality of outcomes.
                      </p>
                      <div className="p-2 bg-gray-50 rounded font-mono text-[11px] text-gray-600">
                        Equality is sameness; equity is fairness; capability is freedom; justice is normative order.
                      </div>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Wealth Model & Gini</h4>
                      <div className="p-2 bg-gray-50 rounded font-mono text-[11px] font-bold text-center">
                        w_i = b + ϕ(e_i) - τ(w_i) + social dividend
                      </div>
                      <p className="text-gray-700">
                        Gini can approach zero if ϕ is bounded and social dividends dominate. Perfect equality is mathematically achievable but may weaken incentives.
                      </p>
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
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700">Section 6</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Language, AI & Epistemic Sovereignty</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-teal-600" /> Multi-Dimensional Translation Loss
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div>Let M = (L, S, C, H, P, E) be literal, social, cultural, historical, pragmatic, and epistemic meaning.</div>
                      <div>Translation T: M_A → M_B.</div>
                      <div className="p-3 bg-teal-50 border border-teal-200 rounded text-center font-bold text-teal-950">
                        min ℒ = α L_sem + β L_cult + γ L_hist + δ L_epist &ensp; under compute and data constraints
                      </div>
                      <p className="text-[11px] text-gray-600">
                        Architecture: community-curated corpora, ontology mapping, human-in-the-loop, provenance, local fine-tuning, offline speech.
                      </p>
                    </div>
                  </div>

                  {/* Proverb & Shannon Entropy */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-2 text-teal-950">
                      <h4 className="font-mono font-bold uppercase">Proverb: Haraka haraka haina baraka</h4>
                      <p>
                        A proverb is not successfully translated if words survive but worldview is destroyed. Literal words miss patience, communal timing, and spiritual blessing.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-gray-800">
                      <h4 className="font-mono font-bold uppercase">Shannon Entropy Limitation</h4>
                      <p>
                        Shannon entropy measures symbol uncertainty, not cultural meaning. Distinguish empirical, philosophical, and theological claims about language loss.
                      </p>
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
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">Section 7</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Climate, Energy & the AI Infrastructure Paradox</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-600" /> Grid Balance Equation
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div>E_total = E_g + E_h + E_w + E_s + E_storage, &emsp; D(t) = D_base(t) + D_AI(t)</div>
                      <div className="p-3 bg-amber-50 border border-amber-200 rounded text-center font-bold text-amber-950">
                        Supply(t) ≥ Demand(t) &ensp; ∀ t under drought, low wind, cloud, spikes, and transmission failure
                      </div>
                      <p className="text-[11px] text-gray-600">
                        Design: diversified generation, storage, demand response, forecasting, microgrids, redundancy, and rationing protocols.
                      </p>
                    </div>
                  </div>

                  {/* Second Law & Water Ethics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Second Law of Thermodynamics</h4>
                      <p className="text-gray-700">
                        The second law does not make sustainability impossible because Earth is an open system receiving solar energy flux. Physical limits remain, but entropy dissipation can be accommodated.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 text-amber-950">
                      <h4 className="font-mono font-bold uppercase">Data Centre Water Ethics</h4>
                      <p>
                        A data centre using water while a community lacks water is ethically justified <strong>only with consent, local priority, zero net depletion, benefit sharing, and independent monitoring</strong>. Physical sustainability is not social legitimacy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 8 */}
              <section id="q8" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl border border-blue-200">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Section 8</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Tribe, Identity, Utu & Algorithmic Belonging</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Formal Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" /> Game Theoretic Model
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div>Model society as a repeated multi-agent game. Agents choose in-group cooperation T or cross-group cooperation C.</div>
                      <p className="text-[11px] text-gray-600">
                        Ethnic exclusion can be a Nash equilibrium, prisoner's dilemma, coordination problem, repeated-game equilibrium, or combination.
                      </p>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded text-center font-bold text-blue-950">
                        Trust(t+1) = f(Interaction, Reciprocity, Fairness, Memory)
                      </div>
                    </div>
                  </div>

                  {/* Interventions & Ubuntu */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">AI-Mediated Mechanism</h4>
                      <p className="text-gray-700">
                        Shared public goods, equal-status intergroup contact, cross-group reputation, anonymous fair dispute resolution, and <strong>strict absence of identity surveillance</strong>.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Ubuntu / Utu Ontology</h4>
                      <p className="text-gray-700">
                        Ubuntu/Utu implies the individual is mutually constituted with community. <em>AI may mediate belonging but must not govern identity.</em>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 9 */}
              <section id="q9" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-rose-50 text-rose-700 rounded-xl border border-rose-200">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">Section 9</span>
                    <h2 className="text-2xl font-bold font-serif text-black">Healthcare, AI & the Value of a Kenyan Life</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Utility Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-rose-600" /> Clinical Utility Function
                    </h3>
                    <div className="p-3 bg-white border border-gray-200 rounded text-center font-mono text-xs font-bold text-rose-950">
                      U = w_1 Acc + w_2 Fair - w_3 Mort - w_4 Cost + w_5 Access + w_6 Explain
                    </div>
                    <p className="text-xs text-gray-700">
                      Maximizing overall accuracy can worsen outcomes if gains concentrate in easy urban cases.
                    </p>
                  </div>

                  {/* 97% vs 88% */}
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2 text-xs text-rose-950">
                    <h4 className="font-mono font-bold uppercase">Urban (97%) vs Rural (88%) Deployment Ethics</h4>
                    <p>
                      If AI is 97% accurate in Nairobi and 88% rural, national deployment is ethical <strong>only if rural performance meets clinical safety thresholds</strong>, with local validation, monitoring, human override, and equitable access.
                    </p>
                    <p className="font-medium">
                      Distinguishes equality, equity, fairness, clinical utility, and procedural justice. A delegated AI system does not hold a moral duty of care; <strong>the duty remains strictly human and institutional</strong>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Question 10 */}
              <section id="q10" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-indigo-50 text-indigo-700 rounded-xl border border-indigo-200">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">Section 10</span>
                    <h2 className="text-2xl font-bold font-serif text-black">The AI Sovereignty Paradox</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Sovereignty Index */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-indigo-600" /> Sovereignty Function
                    </h3>
                    <div className="p-3 bg-white border border-gray-200 rounded text-center font-mono text-xs font-bold text-indigo-950">
                      S = f(C, D, M, T, E, K, I)
                    </div>
                    <p className="text-[11px] font-mono text-gray-600 text-center">
                      C compute, D data, M models, T talent, E energy, K capital, I institutions.
                    </p>
                  </div>

                  {/* Domestic Control & Equilibria */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Minimum Domestic Control</h4>
                      <p className="text-gray-700">
                        Must cover energy, data governance, evaluation, cybersecurity, identity, legal jurisdiction, and talent. Distinguish ownership, control, access, resilience, and sovereignty.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">The Third Equilibrium</h4>
                      <p className="text-gray-700">
                        Between autarky (Future A) and total import dependency (Future B) lies <strong>domestic strategic control plus international interdependence</strong>. Sovereignty is not autarky.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Question 11 */}
              <section id="q11" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl border border-amber-200">
                    <Radio className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">Section 11</span>
                    <h2 className="text-2xl font-bold font-serif text-black">AI, Democracy & Epistemic Warfare</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* Truth Model */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-600" /> Epistemic Model
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div>I_truth = f(AI_verification), &emsp; I_false = f(AI_generation)</div>
                      <div className="p-3 bg-white border border-gray-200 rounded text-center font-bold text-amber-950">
                        P(truth) = g(I_truth, I_false, trust, literacy, institutions)
                      </div>
                      <p className="text-[11px] text-gray-600">
                        More AI can increase or decrease P(truth) depending on societal verification architecture.
                      </p>
                    </div>
                  </div>

                  {/* Democratic Safeguards */}
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2 text-xs text-gray-800">
                    <h4 className="font-mono font-bold uppercase">Non-Monopolistic Safeguards</h4>
                    <p>
                      Design provenance, cryptographic signatures, public verification, independent press, media literacy, platform liability, and <strong>no central truth monopoly</strong>. If citizens cannot distinguish authentic from synthetic evidence, democracy loses shared evidentiary ground. Preserve expression through transparency and counterspeech, not an infallible central authority.
                    </p>
                  </div>
                </div>
              </section>

              {/* Question 12 */}
              <section id="q12" className="border-b border-gray-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl border border-blue-200">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Section 12 (Final Question)</span>
                    <h2 className="text-2xl font-bold font-serif text-black">The Kenyan AI Paradox</h2>
                  </div>
                </div>

                <div className="space-y-6 text-sm text-gray-800 leading-relaxed font-sans">
                  {/* State Vector */}
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-600" /> State Vector & Formal Problem
                    </h3>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-2.5 bg-white border border-gray-200 rounded text-center font-bold text-blue-950">
                        X = (P, D, S, C, E, T)
                      </div>
                      <div className="text-[11px] text-gray-600 text-center">
                        P prosperity, D dignity, S sovereignty, C cultural continuity, E ecological sustainability, T technological competitiveness.
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded text-center font-bold text-blue-950">
                        max_&#123;x ∈ ℱ&#125; X &ensp; s.t. &ensp; D ≥ D_min, &ensp; S ≥ S_min, &ensp; C ≥ C_min, &ensp; E ≥ E_min, &ensp; T ≥ T_min
                      </div>
                      <p className="text-[11px] text-gray-700">
                        The Pareto frontier is the set of feasible X such that no other feasible X' is at least as good in all objectives and strictly better in one.
                      </p>
                    </div>
                  </div>

                  {/* Architecture & Ethical Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Economic Model</h4>
                      <p className="text-gray-700 font-mono text-[11px]">
                        Y = F(K, L, A, Data, Energy) with transfers, universal basic services, sovereign wealth funds, and cooperative ownership.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Governance Architecture</h4>
                      <p className="text-gray-700">
                        Multi-stakeholder governance, constitutional limits, independent audit, data trusts, local control, international agreements.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Ethical Framework</h4>
                      <p className="text-gray-700">
                        Ubuntu, capability approach, Rawlsian justice, and republican non-domination.
                      </p>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-xl space-y-1.5">
                      <h4 className="font-mono font-bold text-gray-900 uppercase">Theological Interpretation</h4>
                      <p className="text-gray-700">
                        Imago Dei, stewardship, and Genesis 3:19 understood as human toil and finitude, not economic policy.
                      </p>
                    </div>
                  </div>

                  {/* Failure Modes & Failure Scenario */}
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2 text-xs text-rose-950">
                    <h4 className="font-mono font-bold uppercase flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" /> Five Core Failure Modes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-[11px] pt-1">
                      <div className="p-2 bg-white rounded border border-rose-200">1. Elite/foreign capture</div>
                      <div className="p-2 bg-white rounded border border-rose-200">2. Cultural homogenization</div>
                      <div className="p-2 bg-white rounded border border-rose-200">3. Ecological overshoot</div>
                      <div className="p-2 bg-white rounded border border-rose-200">4. Labor displacement without transition</div>
                      <div className="p-2 bg-white rounded border border-rose-200">5. Epistemic dependence</div>
                    </div>
                    <p className="pt-2 text-gray-800">
                      <strong>Policy Failure Scenario:</strong> A global compute cutoff or prolonged severe drought could break the equilibrium. Fallback: regional alliances, rationing, local edge models, and emergency democratic oversight.
                    </p>
                  </div>

                  {/* Measurable Flourishing & Refusal to Optimize */}
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950 space-y-1.5">
                      <h4 className="font-mono font-bold uppercase">Measurable Flourishing</h4>
                      <div className="p-2 bg-white rounded font-mono text-[11px] text-center font-bold">
                        Flourishing = f(health, education, income floor, agency, cultural participation, ecological quality, trust)
                      </div>
                    </div>

                    <div className="p-5 bg-black text-white rounded-2xl space-y-2">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-rose-400">
                        What Kenya Should Refuse to Optimize
                      </h4>
                      <p className="text-sm font-serif leading-relaxed text-gray-200">
                        Kenya should refuse to optimize <strong>GDP alone, efficiency alone, security alone, cultural purity, technological speed, or human dignity as a mere economic means</strong>. Dignity, sovereignty, culture, and ecology must stand as non-negotiable constitutional constraints, never bargaining chips.
                      </p>
                    </div>
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

export default DeepSeekQ3ExamResponse;
