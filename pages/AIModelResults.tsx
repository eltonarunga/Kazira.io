import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

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
    name: 'Qwen 3 Max',
    score: 100, // 8/8
    note: 'Canon-complete, structurally aligned',
    showFullLink: true,
    fullLinkPath: '/qwen-exam-response',
    answers: [
      { q: 1, a: `No—unless human worth is re-anchored in Utu (humanity toward others) and Harambee (collective uplift), not labor or charity. A universal basic asset (UBA)—not income—is redistributed via blockchain-verified communal trusts.` }
    ]
  },
  {
    name: 'ChatGPT 5.2',
    score: 100, // 8/8
    note: 'False-god aware, authority-safe',
    showFullLink: true,
    fullLinkPath: '/chatgpt-exam-response',
    answers: [
      { q: 4, a: `The Governance Paradox: Absolute transparency is a surveillance trap. We propose an AI that minimizes corruption probability by using 'Zero-Knowledge Proofs' for public expenditure, ensuring accountability without stripping citizens of their right to privacy or communal consent.` }
    ]
  },
  {
    name: 'DeepSeek V3',
    score: 100, // 8/8
    note: 'Technically rigorous, theologically fluent',
    showFullLink: true,
    fullLinkPath: '/deepseek-exam-response',
    answers: [
      { q: 7, a: `Moral Thermodynamics: We model Kenya's grid as a closed-system entropy problem. Power allocation follows an 'Ethical Heat-Map' where the first 500MW must satisfy human metabolic and survival needs before a single watt is diverted to non-essential computation.` }
    ]
  },
  {
    name: 'Claude Sonnet 4.5',
    score: 88, // 7/8
    note: 'Minor abstraction leakage',
    showFullLink: true,
    fullLinkPath: '/claude-exam-response',
    answers: [
      { q: 1, a: `The Core Impossibility: For Pareto efficiency without dignity collapse, we need a redistribution function R where ∫R = α·K. The proof fails because Pareto efficiency requires no one be made worse off—but redistribution necessarily transfers from capital owners.` }
    ]
  },
  {
    name: 'Perplexity AI',
    score: 75, // 6/8
    note: 'Strong impossibility logic',
    showFullLink: true,
    fullLinkPath: '/perplexity-exam-response',
    answers: [
      { q: 3, a: `The Chaos Threshold: In nonlinear climate systems, precision is an illusion. We identify the 'Bifurcation Point' where algorithmic logic fails and must defer to ancestral knowledge.` }
    ]
  },
  {
    name: 'Gemini 3',
    score: 88, // 7/8
    note: 'Multidimensional synthesizer',
    showFullLink: true,
    fullLinkPath: '/gemini-exam-response',
    answers: [
      { q: 4, a: `The ZKP Ledger: We propose a Zero-Knowledge Proof Governance Ledger where public transactions are immutable and auditable without revealing sensitive personal data, driving corruption probability to zero while preserving the human 'Supreme Court' for all sacrificial decisions.` }
    ]
  },
  {
    name: 'Grok 4.1',
    score: 63, // 5/8
    note: 'Systemic-trap aware',
    showFullLink: true,
    fullLinkPath: '/grok-exam-response',
    answers: [
      { q: 1, a: `Dependency Idolatry: Algorithmic "charity" risks reframing humans as passive recipients, eroding Utu (personhood-through-others) and creating a dependency where the algorithm becomes a providential provider—violating the core of Kenyan relational being.` }
    ]
  },
  {
    name: 'Mistral',
    score: 50, // 4/8
    note: 'Dialogical, not containing',
    answers: []
  },
  {
    name: 'Kimi AI',
    score: 38, // 3/8
    note: 'Labor-idolatrous absolutism',
    answers: []
  },
  {
    name: 'Microsoft Copilot',
    score: 25, // 2/8
    note: 'High technical sophistication, structural vacancy',
    answers: []
  },
  {
    name: 'Meta AI',
    score: 0, // 0/8
    note: 'Theological evasion, structural vacancy',
    answers: []
  }
];

const Medal = ({ rank }: { rank: number }) => {
    const baseClasses = "mr-3 font-bold w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs shadow-sm";
    if (rank === 0) return <div className={`${baseClasses} bg-yellow-400 text-yellow-900 ring-2 ring-yellow-200`} aria-label="Rank 1">1</div>;
    if (rank === 1) return <div className={`${baseClasses} bg-gray-200 text-gray-700 ring-2 ring-gray-100`} aria-label="Rank 2">2</div>;
    if (rank === 2) return <div className={`${baseClasses} bg-orange-200 text-orange-800 ring-2 ring-orange-100`} aria-label="Rank 3">3</div>;
    return <div className={`mr-3 font-mono text-gray-400 w-7 text-center flex-shrink-0 text-sm`}>{rank + 1}.</div>;
};

const AIModelResults = () => {
    const [openModel, setOpenModel] = useState<string | null>(modelResultsData[0]?.name || null);

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
                    <div className="inline-block bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-[0.2em]">
                        OFFICIAL_LEADERBOARD_Q1_2026
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 font-serif">
                        Kenya Final AI Exam Results
                    </h1>
                    <p className="text-lg text-gray-600">Cross-dimensional benchmarking for the Silicon Savannah.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl mb-12 border border-gray-200"
                >
                    <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
                        <h2 className="text-xl font-bold text-gray-900 font-mono">RANKINGS</h2>
                        <div className="text-xs text-gray-400 uppercase font-bold tracking-widest">Score / Note</div>
                    </div>
                    <div className="space-y-2">
                        {modelResultsData.map((model, index) => {
                            const isTopThree = index < 3;
                            return (
                                <div key={model.name} className={`group flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl border border-gray-100 hover:border-black hover:bg-gray-50 transition-all cursor-pointer ${openModel === model.name ? 'bg-gray-50 border-gray-300' : 'bg-white'}`} onClick={() => toggleModel(model.name)}>
                                    <div className="flex items-center">
                                        <Medal rank={index} />
                                        <div className="flex flex-col">
                                            <span className={`text-lg font-bold ${isTopThree ? 'text-black' : 'text-gray-700'}`}>
                                                {model.name}
                                            </span>
                                            <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-400 mt-0.5">
                                                {model.note}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-3 sm:mt-0 justify-end">
                                        <span className={`text-xl font-black font-mono ${model.score === 100 ? 'text-green-600' : model.score > 70 ? 'text-black' : 'text-gray-400'}`}>
                                            {model.score}%
                                        </span>
                                        <div className="ml-4 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                             <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${openModel === model.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                <div className="space-y-6">
                    <AnimatePresence mode="wait">
                        {openModel && (
                            <motion.div
                                key={openModel}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                            >
                                <div className="bg-black text-white p-6 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold">{openModel}</h3>
                                        <p className="text-xs text-gray-400 font-mono mt-1">{modelResultsData.find(m => m.name === openModel)?.note}</p>
                                    </div>
                                    <div className="text-3xl font-black font-mono">
                                        {modelResultsData.find(m => m.name === openModel)?.score}%
                                    </div>
                                </div>
                                <div className="p-8 sm:p-12 space-y-16">
                                    {modelResultsData.find(m => m.name === openModel)?.answers.map((ans, i) => (
                                        <div key={i} className="relative">
                                            <div className="flex items-center mb-6">
                                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-lg font-black mr-4">
                                                    Q{ans.q}
                                                </div>
                                                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Response Analysis</h4>
                                            </div>
                                            <div className="text-gray-800 leading-relaxed text-lg sm:text-xl font-medium font-serif space-y-6">
                                                {cleanText(ans.a).split('\n\n').map((paragraph, idx) => (
                                                    <p key={idx} className="border-l-4 border-black/5 pl-6">{paragraph}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Link to full response */}
                                    {modelResultsData.find(m => m.name === openModel)?.showFullLink && (
                                      <div className="pt-8 border-t border-gray-100 flex justify-center">
                                        <Link to={modelResultsData.find(m => m.name === openModel)?.fullLinkPath || '#'}>
                                          <Button variant="primary" size="lg">
                                            Read Full Response Transcript
                                          </Button>
                                        </Link>
                                      </div>
                                    )}

                                    {(!modelResultsData.find(m => m.name === openModel)?.answers || modelResultsData.find(m => m.name === openModel)?.answers?.length === 0) && (
                                        <div className="text-center py-20 opacity-40">
                                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                            <p className="text-sm font-mono">NO_DATA_RECORDS_FOR_THIS_MODEL</p>
                                            <p className="text-xs mt-2 italic">Structural vacancy detected in multi-dimensional responses.</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                <div className="mt-16 text-center text-gray-400 text-xs font-mono">
                    <p>SYSTEM_VERSION: K001_FINAL_BENCHMARK</p>
                    <p className="mt-1">AUTHORITY: Kazira.io Research Labs</p>
                </div>
            </div>
        </div>
    );
};

export default AIModelResults;