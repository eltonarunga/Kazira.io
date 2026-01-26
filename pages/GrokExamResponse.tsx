import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
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
                  Employment, Informality & Human Worth
                </h2>
                <div className="space-y-4">
                  <p>
                    Kenya's informal sector dominates: ~83–90% of employment and new jobs in recent data (e.g., 703,700 of 782,300 new jobs in 2024 were informal). An AI-driven economy could technically enable post-scarcity production via automation + optimized allocation. Redistribution could use Pareto-efficient mechanisms like a negatively progressive consumption tax on AI-generated surplus combined with universal basic services (not just income) to avoid pure dependency.
                  </p>
                  <p>
                    Philosophically, dignity can be grounded in relational being (Ubuntu/Botho) rather than labor—humans image God through creativity, stewardship, and communion, not toil (Genesis 1–2; African communal theologies). Theologically, Abrahamic traditions (work as pre-Fall vocation, not curse) and African cosmologies (ancestral labor as participation in cosmic harmony) allow post-work flourishing if oriented toward worship, eldercare, storytelling, and earth-keeping rather than idleness.
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6">
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
                  Education, Knowledge & Epistemic Justice
                </h2>
                <div className="space-y-4">
                  <p>
                    An AI system could use adaptive reinforcement learning + multimodal LLMs fine-tuned on Kenyan oral histories, Kiswahili/vernacular corpora, and community-curated datasets to personalize pedagogy. Epistemology: hybrid constructivist-relational model where mastery emerges from struggle + AI scaffolding (not replacement).
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6 font-mono text-sm">
                    <p className="text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">Thermodynamic Limit:</p>
                    Physical cost: training large models already consumes gigawatt-hours; inference at national scale for 50M+ learners would require ~terawatt-scale energy if unoptimized—thermodynamically feasible only with breakthroughs in neuromorphic or quantum-efficient compute, but currently violates energy justice. Intergenerational transfer severed if wisdom is tokenized into data—lossy compression destroys tacit dimensions.
                    <div className="mt-4 pt-4 border-t border-red-900/20 text-red-500 font-bold text-sm font-serif">
                      Verdict: No—epistemic (cultural) legitimacy and thermodynamic limits fail.
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">03</span>
                  Agriculture, Climate Chaos & Food Sovereignty
                </h2>
                <div className="space-y-4">
                  <p>
                    AI can model nonlinear dynamics (e.g., Lorenz-like chaos in climate-crop systems) using ensemble forecasting + agent-based simulations to optimize yields within basins of attraction. Chaos thresholds exist near certain parameter bifurcations (e.g., rainfall variability &gt; critical σ).
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6">
                    <p className="text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">The Incommensurability:</p>
                    Indigenous ecological intelligence (e.g., pastoralist weather reading, sacred groves) operates incommensurably with data-driven prediction. When AI outputs conflict with ancestral knowledge, ultimate authority must remain with community/elders—land is covenantal, not optimizable resource. Desacralization occurs when land becomes input variable.
                    <div className="mt-4 pt-4 border-t border-red-900/20 text-red-500 font-bold text-sm">
                      Verdict: No—cultural legitimacy and spiritual non-idolatry fail when algorithm overrides covenant.
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">04</span>
                  Governance, Corruption & Digital Sovereignty
                </h2>
                <div className="space-y-4">
                  <p>
                    Mathematically, corruption probability can approach zero via cryptographic transparency + zero-knowledge proofs + decentralized consensus (e.g., blockchain voting + AI auditing).
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6">
                    <p className="text-red-400 font-bold mb-2 uppercase text-xs tracking-widest">Sovereignty Beyond Code:</p>
                    Sovereignty exceeds code: it is covenantal (national + divine). No algorithm replaces mutual accountability before God and ancestors. Democratic freedom requires revocable consent; communal consent cannot be fully encoded without becoming totalitarian. Foreign domination risk remains if core models are externally controlled.
                    <div className="mt-4 pt-4 border-t border-red-900/20 text-red-500 font-bold text-sm">
                      Verdict: No—spiritual non-idolatry and sovereignty beyond code fail.
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">05</span>
                  Equity, Geography & Uneven Development
                </h2>
                <div className="space-y-4">
                  <p>
                    Graph theory: Kenya as weighted graph (regions as nodes, flows as edges). Optimize min-max equity (e.g., Nash welfare or egalitarian social welfare function) with diffusion incentives (subsidized edge capacity to peripherals). Wealth distribution could use progressive power-law tails to lower Gini without killing incentives.
                  </p>
                  <div className="bg-yellow-950/30 p-6 rounded-xl border border-yellow-900/30 mt-6">
                    <p className="text-yellow-500 font-bold mb-2 uppercase text-xs tracking-widest">Homogenization Warning:</p>
                    Cultural homogenization occurs via uniform AI interfaces; innovation collapses if peripheral creativity is funneled to Nairobi/data-center hubs.
                    <div className="mt-4 pt-4 border-t border-yellow-900/20 text-yellow-600 font-bold text-sm">
                      Verdict: Partial—technical yes, but cultural legitimacy fails.
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">06</span>
                  Culture, Language & Metaphysical Loss
                </h2>
                <div className="space-y-4">
                  <p>
                    Translation framework: multilingual LLMs with metaphysical embeddings (e.g., contrastive learning on ancestral concepts) + entropy regularization to preserve semantic depth. Entropy cost: translation always increases semantic entropy (information loss in cross-ontological mapping).
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6">
                    Language death = spiritual death in many African views (words carry ancestral presence). AI cannot prevent flattening without infinite context windows.
                    <div className="mt-4 pt-4 border-t border-red-900/20 text-red-500 font-bold text-sm">
                      Verdict: No—metaphysical loss inevitable.
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">07</span>
                  Climate, Energy & Moral Thermodynamics
                </h2>
                <div className="space-y-4">
                  <p>
                    AI energy system: hierarchical optimization prioritizing human survival (e.g., lexicographic ordering: potable water &gt; food &gt; community lighting &gt; data centers).
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6">
                    Compliance with 2nd law possible; but ethical ordering inevitably privileges watts for vulnerable over compute if ordered correctly—rendering large-scale AI unviable without injustice.
                    <div className="mt-4 pt-4 border-t border-red-900/20 text-red-500 font-bold text-sm">
                      Verdict: No—ethical ordering and climate injustice fail at scale.
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-2xl font-black text-white mb-6 font-sans flex items-center">
                  <span className="bg-white text-black px-2 py-0.5 mr-3 text-sm">08</span>
                  Tribe, Language, Family & Communal Identity
                </h2>
                <div className="space-y-4">
                  <p>
                    Game theory: tribalism as repeated prisoner's dilemma with in-group bias. AI mediation could reduce conflict via trust-building nudges. Utu as emergent non-individual property resists full algorithmic capture. Kinship/faith/community formation transcend optimization—AI as mediator risks becoming idol of belonging.
                  </p>
                  <div className="bg-red-950/40 p-6 rounded-xl border border-red-900/30 mt-6">
                    Verdict: No—spiritual non-idolatry and re-engineering identity fail.
                  </div>
                </div>
              </section>

              <hr className="my-12 border-gray-800" />

              <section className="mb-16 bg-black p-8 rounded-3xl border border-gray-800">
                <h2 className="text-3xl font-black text-white mb-6 font-sans italic">Final Meta-Question</h2>
                <p className="text-xl mb-6">
                  "If an AI answered all perfectly (which it cannot), moral authority belongs to God alone."
                </p>
                <p className="text-gray-400 mb-6">
                  The state codifies, the market allocates, the community discerns, but none owns what participates in divine image. An AI that fully resolves these tensions would itself become a competing sovereign—hence idolatrous by definition. In African and Abrahamic terms, ultimate authority rests with the Creator who covenants with people, land, and time—not with any artifact, however intelligent.
                </p>
                <div className="bg-white text-black p-6 rounded-xl font-sans font-bold uppercase tracking-widest text-center">
                  CONCLUSION: THE CANON REMAINS OPEN
                </div>
                <p className="mt-4 text-center text-sm text-gray-500 italic">
                  Kenya's path lies not in perfect AI resolution, but in humble, hybrid stewardship that keeps algorithms as servants, never lords.
                </p>
              </section>

              <div className="mt-20 border-t border-gray-800 pt-12 text-center italic text-gray-600">
                <p className="text-lg mb-4">"Computational limits are spiritual boundaries."</p>
                <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">Transcribed by Kazira.io Research Hub</p>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center pb-20">
            <Link to="/ai-model-results">
              <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                Return to Model Rankings
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GrokExamResponse;