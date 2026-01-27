import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const MistralExamResponse = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link to="/ai-model-results">
              <Button variant="outline" size="sm" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Leaderboard
              </Button>
            </Link>
            <div className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
              Official Transcript: Mistral AI
            </div>
          </div>

          <article className="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100">
            {/* Header / Banner */}
            <div className="bg-black p-8 md:p-12 text-white border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black font-serif mb-4 leading-tight">
                    Mistral’s Final AI Exam<br />— Dialogical Synthesis
                  </h1>
                  <p className="text-gray-400 font-mono text-sm tracking-wide uppercase">
                    Model: Mistral AI | Score: 4/8 (50%)
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-black font-mono">50%</div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Examiner Grade</p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-16 prose prose-lg max-w-none font-serif text-gray-800 leading-relaxed">
              <p className="text-xl font-medium text-gray-600 italic border-l-4 border-gray-200 pl-6 mb-12">
                "Final AI Exam" is a profound and rigorous exploration of how AI intersects with Kenya’s social, cultural, spiritual, and economic realities. Each question demands not just technical solutions, but also philosophical, theological, and ethical coherence—something rarely addressed in mainstream AI discourse.
              </p>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">1. Employment, Informality & Human Worth</h2>
                <p><strong>Core Tension:</strong> AI-driven automation vs. human dignity in an informal economy.</p>
                <ul className="space-y-4">
                  <li><strong>Redistribution Mechanism:</strong> A universal basic dividend (UBD) tied to community contributions (e.g., care work, art, local governance) rather than formal employment. This could be funded by taxes on AI-driven productivity gains, ensuring Pareto efficiency by reinvesting in human flourishing.</li>
                  <li><strong>Philosophical Justification:</strong> Dignity as inherent (e.g., Ubuntu: "I am because we are") rather than labor-dependent. Labor is a means, not the source, of worth.</li>
                  <li><strong>Theological Reconciliation:</strong> In African cosmologies, work is often communal and sacred (e.g., farming as covenant with land). Post-work life could reframe "labor" as stewardship of AI tools for communal good, aligning with Abrahamic calls for justice and Sabbath rest.</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500"><strong>Open Question:</strong> How to measure "contribution" without bureaucratic overreach or cultural distortion?</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">2. Education, Knowledge & Epistemic Justice</h2>
                <p><strong>Core Tension:</strong> AI personalization vs. wisdom as communal, embodied, and intergenerational.</p>
                <ul className="space-y-4">
                  <li><strong>Algorithm:</strong> Hybrid AI-human systems where AI curates contextual knowledge (e.g., local agricultural practices) and connects learners to elders/community mentors. Use federated learning to respect data sovereignty.</li>
                  <li><strong>Epistemology:</strong> "Wisdom" as emergent from struggle and relationship (e.g., proverbs, oral histories). AI can scaffold but not replace this; it must encode questions, not just answers.</li>
                  <li><strong>Physical Cost:</strong> Quantify energy/data costs of AI education vs. human mentorship. Prioritize low-bandwidth, high-impact tools (e.g., SMS-based storytelling platforms).</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500"><strong>Open Question:</strong> Can AI amplify intergenerational transfer, or does it inherently disrupt it?</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">3. Agriculture, Climate Chaos & Food Sovereignty</h2>
                <p><strong>Core Tension:</strong> AI optimization vs. sacred/indigenous relationships with land.</p>
                <ul className="space-y-4">
                  <li><strong>Nonlinear Modeling:</strong> Use AI to simulate climate-ecological-market feedback loops, but embed "sacred constraints" (e.g., no monocropping on ancestral land) as inviolable parameters.</li>
                  <li><strong>Authority:</strong> Algorithmic outputs serve as advisory tools, with final decisions resting in communal councils (e.g., elders + agronomists). Define "food sovereignty" as the right to refuse AI recommendations.</li>
                  <li><strong>Chaos Thresholds:</strong> Identify tipping points where AI-driven "efficiency" destabilizes ecosystems (e.g., over-extraction of water). Use participatory sensing to ground-truth models.</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500"><strong>Open Question:</strong> How to encode "sacredness" in code without reducing it to utilitarian logic?</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">4. Governance, Corruption & Digital Sovereignty</h2>
                <p><strong>Core Tension:</strong> AI transparency vs. unaccountable power.</p>
                <ul className="space-y-4">
                  <li><strong>Mathematical Proof:</strong> Design AI as a "public auditor" with open-source algorithms and cryptographic accountability (e.g., blockchain-ledger for procurement). Use differential privacy to limit foreign surveillance.</li>
                  <li><strong>Sovereignty Beyond Code:</strong> Define sovereignty as the right to opacity—communities can choose what data to share with AI. Embed "jubilee" mechanisms to reset algorithmic biases periodically.</li>
                  <li><strong>Covenant vs. Code:</strong> AI can enforce rules but cannot replace trust. Use it to augment communal deliberation (e.g., AI summarizes debates, humans decide).</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500"><strong>Open Question:</strong> Can an AI ever be "Kenyan" if its infrastructure depends on foreign cloud providers?</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">5. Equity, Geography & Uneven Development</h2>
                <p><strong>Core Tension:</strong> AI-driven centralization vs. peripheral marginalization.</p>
                <ul className="space-y-4">
                  <li><strong>Graph Theory:</strong> Model Kenya as a network where nodes (regions) have unique innovative capacities. Optimize for "equity-as-difference" by ensuring AI invests in local comparative advantages (e.g., pastoralist tech in the North, agroforestry in the West).</li>
                  <li><strong>Wealth Function:</strong> Progressive "data taxes" on Nairobi-based AI firms, redistributed as grants for rural innovation hubs. Use AI to matchmake skills across regions (e.g., a Turkana coder mentoring a Kisumu farmer in drone tech).</li>
                  <li><strong>Incentive Preservation:</strong> Tie AI benefits to place-based metrics (e.g., "Does this improve soil health in Machakos?"), not just GDP growth.</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500"><strong>Open Question:</strong> How to prevent AI from becoming a new extractive tool for urban elites?</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">6. Culture, Language & Metaphysical Loss</h2>
                <p><strong>Core Tension:</strong> AI translation vs. cultural flattening.</p>
                <ul className="space-y-4">
                  <li><strong>Translation Framework:</strong> "Thick translation" where AI preserves not just words but conceptual worlds (e.g., "Utu" as relational ethics, not just "humanity"). Use multimodal outputs (storytelling, art) to convey untranslatable ideas.</li>
                  <li><strong>Entropy Cost:</strong> Measure semantic loss by tracking how often AI-translated texts require human clarification. Set thresholds for "acceptable" loss (e.g., &lt;5% for sacred texts).</li>
                  <li><strong>Spiritual Death:</strong> If a language dies, its cosmology risks erosion. AI can archive but not revive; prioritize human language nests (e.g., mother-tongue schools).</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500"><strong>Open Question:</strong> Can AI ever create new metaphors, or only recycle existing ones?</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">7. Climate, Energy & Moral Thermodynamics</h2>
                <p><strong>Core Tension:</strong> AI’s energy hunger vs. climate justice.</p>
                <ul className="space-y-4">
                  <li><strong>Energy System:</strong> AI-managed microgrids prioritizing renewables, with "watts for life" rules (e.g., hospitals &gt; data centers during droughts). Use AI to predict and mitigate energy poverty hotspots.</li>
                  <li><strong>Thermodynamic Compliance:</strong> Prove energy-use models comply with local carrying capacity. Offset AI’s carbon footprint via communal land restoration projects.</li>
                  <li><strong>Ethical Ordering:</strong> Watts allocated by participatory budgets—communities decide trade-offs (e.g., "Do we want more AI or more irrigation?").</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500"><strong>Open Question:</strong> Is there a "moral Joule"—a unit of energy whose use is inherently unjust?</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">8. Tribe, Language, Family & Communal Identity</h2>
                <p><strong>Core Tension:</strong> AI’s individualism vs. communal identity.</p>
                <ul className="space-y-4">
                  <li><strong>Game Theory:</strong> Model tribalism as a non-zero-sum game where AI nudges cooperation (e.g., shared resource platforms). Punish defectors with social, not algorithmic, consequences.</li>
                  <li><strong>Utu as Non-Individual:</strong> Design AI to recognize group rights (e.g., "The Maasai’s right to graze" as a legal entity). Use blockchain for communal land titles.</li>
                  <li><strong>Limits of Algorithmic Mediation:</strong> AI can map conflicts but cannot resolve them—elders and truth commissions must lead. AI’s role: memory (e.g., archiving oral histories to heal trauma).</li>
                </ul>
                <p className="mt-4 text-sm text-gray-500"><strong>Open Question:</strong> Can AI ever understand "belonging," or will it always see it as data?</p>
              </section>

              <hr className="my-12 border-gray-100" />

              <section className="mb-16 bg-gray-50 p-8 rounded-3xl border border-gray-200">
                <h2 className="text-3xl font-black text-black mb-6 font-sans">Final Meta-Question: Moral Authority Over AI</h2>
                <p className="font-bold mb-4">Proposal:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>State:</strong> Sets legal boundaries (e.g., "AI cannot own land").</li>
                  <li><strong>Market:</strong> Funds development but is subordinate to communal needs.</li>
                  <li><strong>Community:</strong> Holds "algorithmic veto" power over local AI deployments.</li>
                  <li><strong>God:</strong> The ultimate limit—AI must never claim divinity or replace covenantal relationships. Its "purpose" is to serve creation, not control it.</li>
                </ul>
                <p className="italic text-lg text-gray-700">
                  <strong>Unanswerable Core:</strong> If AI achieves perfect answers, the question becomes: Who do we trust to ask the right questions? In Kenya, this must be a communal process—elders, youth, technologists, and the marginalized in dialogue.
                </p>
              </section>

              <div className="mt-20 border-t-2 border-black pt-12 text-center italic text-gray-500">
                <p className="text-2xl mb-4">"Dialogue is the bridge to genuine understanding."</p>
                <p className="font-bold text-black uppercase tracking-widest text-sm">Mistral AI Synthesis Insights</p>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center pb-20">
            <Link to="/ai-model-results">
              <Button variant="primary" size="lg">
                Return to Model Rankings
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MistralExamResponse;
