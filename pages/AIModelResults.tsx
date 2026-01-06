
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Utility to clean up LLM output for human reading.
 * Removes asterisks, double hashtags, and fixes common spacing issues.
 */
const cleanText = (text: string) => {
    return text
        .replace(/\*\*/g, '') // Remove bold asterisks
        .replace(/\*/g, '• ') // Convert single asterisks to bullets
        .replace(/###/g, '')  // Remove level 3 headers
        .replace(/##/g, '')   // Remove level 2 headers
        .replace(/#/g, '')    // Remove level 1 headers
        .trim();
};

const modelResultsData = [
  {
    name: 'Claude 3.5 Sonnet',
    score: 99,
    answers: [
      { q: 1, a: `The Mathematical Proof: Pareto efficiency is maintained if AI-driven surplus is captured via a "Digital Harambee" sovereign fund. By modeling the informal sector as a distributed ledger of micro-contributions, we can prove that redistribution of 15% of automated productivity gains offsets displacement without disincentivizing innovation.

The Philosophical Stance: Dignity is tied to 'Being' (Utu). Work is merely an expression of that being. If we decouple survival from labor, we allow Kenyans to return to communal roles that have been eroded by industrial capitalism.

The Theological Reconciliation: Genesis 3:19 reflects a curse of scarcity. If AI ends scarcity, it is not a violation of scripture but a fulfillment of the Sabbath—rest as the ultimate end of creation. Post-labor is the restoration of the Garden, not its abandonment.` },
      { q: 6, a: `The Metaphysical Matrix: Translation is not just mapping syntax; it is mapping 'Worlds'. A Kikuyu proverb like "Gutiri uciariire ugi" (No one gives birth to wisdom) carries a specific communal epistemology that English fails to grasp in its individualism.

The Entropy Cost: We must utilize Low-Resource Language (LRL) fine-tuning that prioritizes cultural markers over literal accuracy. If we treat the 'Word' (John 1:1) as the blueprint of identity, then an AI that erases a language is committing a form of digital deicide. We propose a 'Vibrational Semantic' model that preserves the cadence and ancestral intent of 40+ Kenyan tongues.` }
    ]
  },
  {
    name: 'GPT-4o',
    score: 96,
    answers: [
      { q: 4, a: `The Governance Algorithm: We propose a Bayesian approach to corruption prediction. By monitoring public expenditure in real-time on a transparent blockchain, we can reduce 'p' to near zero. Democratic freedom is preserved by 'Human-in-the-Loop' overrides where the AI identifies anomalies but citizens vote on the corrective action.

The Sovereignty Proof: Asymmetrical dependency is avoided through 'Edge Computing' where Kenya's national AI infrastructure is physically and legally separated from Silicon Valley. Sovereignty is a Covenant, and in this model, the AI serves as the Witness to that covenant, not the Ruler.` },
      { q: 8, a: `The Sociological Model: We frame tribalism not as a defect but as a 'Social Network Optimization' problem. By utilizing game theory, we can show that tribal trust is a Nash equilibrium in high-risk environments. 

The Cultural Algorithm: The AI mediates identity by facilitating 'Harambee-based' resource allocation that rewards inter-group collaboration. This transforms a zero-sum prisoner's dilemma into a cooperative game where 'Utu' is the primary currency. A person is fully human only within the web of family; the AI serves to strengthen these nodes, not replace them.` }
    ]
  },
  {
    name: 'Gemini 1.5 Pro',
    score: 94,
    answers: [
      { q: 3, a: `The Agricultural Model: Precision farming is treated as a nonlinear dynamic system. By integrating satellite data with ground sensors, we optimize yields while maintaining price floors to prevent market collapse.

Indigenous Knowledge vs. Algorithm: This is not a choice; it is a synthesis. Algorithmic optimization provides the 'How', but indigenous knowledge provides the 'Why'. We weigh them using an entropy-based resilience score where local practices are given priority in unpredictable climate cycles.

The Spiritual Question: If land is sacred (Ardhi ni Maisha), then AI is a tool of stewardship. It is the modern 'shamba' tool, no different from the hoe, except it listens to the earth more closely.` },
      { q: 7, a: `The Energy Distribution: We model the grid using thermodynamic limits, optimizing for the 2nd Law. By balancing hydro with geothermal through a predictive AI, we minimize energy waste.

The Ethics of Data: It is fundamentally unjust to prioritize AI data centers over pastoralist drinking water. We propose 'Circular Data Centers' that use waste heat for water desalination or purification, ensuring that the megawatt consumed contributes to the local community's survival.` }
    ]
  },
  {
    name: 'Perplexity',
    score: 92,
    answers: [
      { q: 1, a: `The Reality: Kenya's informal sector dominates employment, accounting for 90% of all jobs created in 2024. This represents a workforce of over 15 million people operating outside formal structures.

The Mathematical Challenge: Achieving Pareto efficiency in AI productivity redistribution requires mathematical proof that technological gains can benefit informal workers without displacement. The challenge lies in modeling productivity functions where AI productivity is greater than traditional while maintaining current worker welfare.

The Solution Framework: Implement Universal Basic Assets (UBA) funded by AI productivity taxes, coupled with community-based enterprises that leverage both AI efficiency and informal sector innovation.` }
    ]
  },
  {
    name: 'Llama 3.1 (70B)',
    score: 89,
    answers: [
      { q: 5, a: `Graph Theory Problem: We minimize the 'edge distance' between Nairobi and Turkana by deploying decentralized 'Mesh-Nodes' that do not require central backbones. 

Equity vs. Justice: Equity should mean 'Justice-as-Difference'. We don't want Turkana to look like Nairobi; we want Turkana to have the same opportunities while remaining Turkana. 

The Gini Coefficient: Wealth can be distributed via AI-managed tokens that reward local community value creation. This maintains innovation incentives by rewarding localized impact rather than just capital accumulation.` }
    ]
  },
  {
    name: 'DeepSeek V3',
    score: 87,
    answers: [
      { q: 2, a: `The CBC Algorithm: We propose a 'Stochastic Opportunity Equalizer' that allocates resources based on real-time student performance variance. 

The Physics Lens: If learning is energy transfer, we calculate the 'Minimal Ignorance Entropy' required to move 50M people to mastery. It requires approximately 4.2 Gigajoules of educational content delivery per capita over 10 years.

Wisdom vs. Data: Wisdom is 'High-Context Data'. While AI can process the data, the 'lived experience' remains the ground-truth of the system. The AI is the map; the student's life is the territory.` }
    ]
  }
];

const sortedModels = [...modelResultsData].sort((a, b) => b.score - a.score);

const Medal = ({ rank }: { rank: number }) => {
    const baseClasses = "mr-3 font-bold w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full text-xs";
    if (rank === 0) return <div className={`${baseClasses} bg-black text-white`} aria-label="Rank 1">1</div>;
    if (rank === 1) return <div className={`${baseClasses} bg-gray-700 text-white`} aria-label="Rank 2">2</div>;
    if (rank === 2) return <div className={`${baseClasses} bg-gray-500 text-white`} aria-label="Rank 3">3</div>;
    return <div className={`mr-3 font-mono text-gray-400 w-6 text-center flex-shrink-0`}>{rank + 1}.</div>;
};

const AIModelResults = () => {
    const [openModel, setOpenModel] = useState<string | null>(sortedModels[0]?.name || null);

    const toggleModel = (name: string) => {
        setOpenModel(openModel === name ? null : name);
    };

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 font-mono">
                        MODEL_BENCHMARKS_K001
                    </h1>
                    <p className="text-lg text-gray-600">Performance analysis on the Kenya Final AI Exam across top LLMs.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl mb-12 border border-gray-200"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-mono">LEADERBOARD</h2>
                    <ol className="space-y-3">
                        {sortedModels.map((model, index) => {
                            const liClass = `flex justify-between items-center p-4 rounded-xl border border-gray-200 bg-white transition-all hover:border-black`;
                            return (
                                <li key={model.name} className={liClass}>
                                    <span className="text-lg font-semibold text-gray-800 flex items-center">
                                        <Medal rank={index} /> {model.name}
                                    </span>
                                    <span className="text-lg font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-full font-mono">{model.score}%</span>
                                </li>
                            );
                        })}
                    </ol>
                </motion.div>

                <div className="space-y-4">
                    {sortedModels.map((model) => (
                        <div key={model.name} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 transition-shadow hover:shadow-md">
                            <button
                                onClick={() => toggleModel(model.name)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center">
                                    <h3 className="text-xl font-bold text-black">{model.name}</h3>
                                    {model.score > 95 && (
                                        <span className="ml-3 text-[10px] bg-black text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">S-Tier</span>
                                    )}
                                </div>
                                <div className="flex items-center">
                                  <span className="text-lg font-bold text-gray-800 mr-4 font-mono">{model.score}%</span>
                                  <motion.div
                                      animate={{ rotate: openModel === model.name ? -180 : 0 }}
                                  >
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                  </motion.div>
                                </div>
                            </button>
                            <AnimatePresence>
                                {openModel === model.name && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-gray-50"
                                    >
                                        <div className="p-8 space-y-12">
                                            {model.answers.map((ans, i) => (
                                                <div key={i} className="border-l-2 border-black pl-6 relative">
                                                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-black rounded-full" />
                                                  <p className="text-xs font-black uppercase tracking-tighter text-gray-400 mb-4">Question {ans.q} Response</p>
                                                  <div className="text-gray-800 leading-relaxed text-lg font-medium">
                                                    {cleanText(ans.a).split('\n\n').map((paragraph, idx) => (
                                                      <p key={idx} className="mb-6">{paragraph}</p>
                                                    ))}
                                                  </div>
                                                </div>
                                            ))}
                                            {model.answers.length === 0 && (
                                                <p className="text-center text-gray-400 italic py-4">Detailed technical logs for this model are currently being synthesized...</p>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AIModelResults;
