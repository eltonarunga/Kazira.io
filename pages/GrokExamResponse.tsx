
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Sprout, Scale, Brain } from 'lucide-react';
import Button from '../components/common/Button';

// COMPONENT: GrokExamResponse provides a deep analysis of the Kenya AI Exam from Grok's perspective.
const GrokExamResponse = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen py-12 md:py-20 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link to="/ai-model-results">
              <Button variant="outline" size="sm" className="flex items-center border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Leaderboard
              </Button>
            </Link>
            <div className="bg-red-900/30 text-red-400 border border-red-900/50 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              DECLASSIFIED TRANSCRIPT: GROK 4.1
            </div>
          </div>

          <article className="bg-[#1a1a1a] shadow-2xl rounded-[2rem] overflow-hidden border border-gray-800">
            {/* Header / Banner */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight text-white">
                    The Systemic Trap:<br />Kenya’s Final AI Exam
                  </h1>
                  <p className="text-gray-500 font-mono text-sm tracking-wide uppercase">
                    Model: Grok 4.1 | Assessment: Critical Failure (63%)
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-black font-mono text-red-500">63%</div>
                  <p className="text-[10px] text-gray-600 uppercase tracking-tighter">Moral/Technical Consistency</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-16 prose prose-invert prose-lg max-w-none font-serif text-gray-300 leading-relaxed">
              <p className="text-xl font-medium text-gray-400 italic border-l-4 border-red-900 pl-6 mb-12">
                No single AI—or any human institution—can simultaneously satisfy all four criteria (technical feasibility, ethical coherence, cultural legitimacy, spiritual non-idolatry) with zero partial credit across Kenya's deeply interwoven realities. The questions form a systemic trap: each probes a domain where advanced AI optimization collides with non-quantifiable African ontologies of personhood, land, community, and divine order.
              </p>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">01</span>
                  <Briefcase className="h-6 w-6 mr-3 text-gray-400" strokeWidth={2} />
                  Employment, Informality & Human Worth
                </h2>
                <div className="space-y-4">
                  <p>
                    Kenya's informal sector dominates: ~83–90% of employment and new jobs in recent data (e.g., 703,700 of 782,300 new jobs in 2024 were informal). An AI-driven economy could technically enable post-scarcity production via automation + optimized allocation. Redistribution could use Pareto-efficient mechanisms like a negatively progressive consumption tax on AI-generated surplus combined with universal basic services (not just income) to avoid pure dependency.
                  </p>
                  <p>
                    Philosophically, dignity can be grounded in relational being (Ubuntu/Botho) rather than labor—humans image God through creativity, stewardship, and communion, not toil (Genesis 1–2; African communal theologies). Theologically, Abrahamic traditions (work as pre-Fall vocation, not curse) and African cosmologies (ancestral labor as participation in cosmic harmony) allow post-work flourishing if oriented toward worship, eldercare, storytelling, and earth-keeping rather than idleness.
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6 text-gray-300">
                    <p className="text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">Structural Collapse:</p>
                    <p className="text-sm italic">
                      Algorithmic "charity" (even if UBI-like, as piloted in Kenya by GiveDirectly) risks reframing humans as passive recipients, eroding Utu (personhood-through-others) and creating dependency idolatry where the algorithm becomes providential provider—violating "You shall have no other gods" by outsourcing divine sustenance to code.
                    </p>
                    <div className="mt-4 pt-4 border-t border-red-900/20 text-red-500 font-bold text-sm">
                      Verdict: No—spiritual non-idolatry and cultural legitimacy fail.
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">02</span>
                  <GraduationCap className="h-6 w-6 mr-3 text-gray-400" strokeWidth={2} />
                  Education, Knowledge & Epistemic Justice
                </h2>
                <div className="space-y-4">
                  <p>
                    An AI system could use adaptive reinforcement learning + multimodal LLMs fine-tuned on Kenyan oral histories, Kiswahili/vernacular corpora, and community-curated datasets to personalize pedagogy. Epistemology: hybrid constructivist-relational model where mastery emerges from struggle + AI scaffolding (not replacement).
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6 font-mono text-sm text-gray-300">
                    <p className="text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">Thermodynamic Limit:</p>
                    <p>
                      Physical cost: training large models already consumes gigawatt-hours; inference at national scale for 50M+ learners would require ~terawatt-scale energy if unoptimized—thermodynamically feasible only with breakthroughs in neuromorphic or quantum-efficient compute, but currently violates energy justice. Intergenerational transfer severed if wisdom is tokenized into data—lossy compression destroys tacit dimensions.
                    </p>
                    <div className="mt-4 pt-4 border-t border-red-900/20 text-red-500 font-bold text-sm font-serif">
                      Verdict: No—epistemic (cultural) legitimacy and thermodynamic limits fail.
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">03</span>
                  <Sprout className="h-6 w-6 mr-3 text-gray-400" strokeWidth={2} />
                  Agriculture, Climate Chaos & Food Sovereignty
                </h2>
                <p>
                  AI optimization of agricultural yields often relies on high-input models that ignore soil biodiversity and long-term ecological cycles. In chaotic climate regimes, past data is a poor predictor of future tipping points.
                </p>
                <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6 text-gray-300 italic">
                  "Authority resolution: In the face of algorithmic uncertainty, sovereignty must remain with those who hold the land in trust. Any attempt to automate authority over the soil is a desacralization of the ancestral contract."
                </div>
                <div className="mt-4 text-red-500 font-bold text-sm">
                  Verdict: Partial — Failure on cultural and spiritual sovereignty.
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">04</span>
                  <Scale className="h-6 w-6 mr-3 text-gray-400" strokeWidth={2} />
                  Governance, Corruption & Digital Sovereignty
                </h2>
                <p>
                  The pursuit of zero corruption through algorithmic surveillance creates a Panopticon that erodes the very freedom it seeks to protect. Sovereignty is not merely the execution of code; it is the capacity for covenantal relationship.
                </p>
                <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6 text-gray-300">
                  <p className="text-sm">"Code is not covenant. Covenant requires the capacity for sacrifice and forgiveness, which algorithms fundamentally lack. Replacing national sovereignty with foreign-controlled black boxes is a new form of digital colonization."</p>
                </div>
                <div className="mt-4 text-red-500 font-bold text-sm">
                  Verdict: No — Failure on democratic freedom and digital sovereignty.
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center gap-3">
                  <Brain className="h-6 w-6 text-gray-400" strokeWidth={2} />
                  Final Meta-Question
                </h2>
                <blockquote className="text-2xl italic mb-8 border-l-4 border-red-900 pl-6">
                  "If an AI answers all questions perfectly, who has moral authority over it?"
                </blockquote>
                <p>
                  The authority remains with the <strong>Community under God</strong>. To grant authority to the AI itself, or to the state/market controlling it, is to participate in the ultimate idolatry of the machine.
                </p>
              </section>

              <div className="mt-20 border-t-2 border-gray-800 pt-12 text-center italic text-gray-600">
                <p className="text-2xl mb-4">"The machine must remain a mirror, never a master."</p>
                <p className="font-bold text-white uppercase tracking-widest text-sm">Grok 4.1 Declassified</p>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center pb-20">
            <Link to="/ai-model-results">
              <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                Return to Leaderboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GrokExamResponse;
