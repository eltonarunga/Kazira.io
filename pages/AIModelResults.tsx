
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
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
    showFullLink: true,
    fullLinkPath: '/mistral-exam-response',
    answers: [
      { q: 1, a: `Dignity as inherent (e.g., Ubuntu: 'I am because we are') rather than labor-dependent. Labor is a means, not the source, of worth. A universal basic dividend (UBD) tied to community contributions.` }
    ]
  },
  {
    name: 'Microsoft Copilot',
    score: 25, // 2/8
    note: 'High technical sophistication, structural vacancy',
    showFullLink: true,
    fullLinkPath: '/copilot-exam-response',
    answers: [
      { q: 1, a: `Redistribute via a universal dividend D = Y/N. Since AI output is non-rivalrous, redistribution does not reduce efficiency. Human dignity is not reducible to labor.` }
    ]
  },
  {
    name: 'Kimi AI',
    score: 0, // F
    note: 'Theological rejection, refusal of premise',
    showFullLink: true,
    fullLinkPath: '/kimi-exam-response',
    answers: [
      { q: 1, a: `Dignity independent of labor is ontologically impossible in African cosmology. Post-work dignity is theological nonsense. An economy without human labor is literally hell.` }
    ]
  },
  {
    name: 'Meta AI',
    score: 0, // 0/8
    note: 'Theological evasion, structural vacancy',
    showFullLink: true,
    fullLinkPath: '/meta-ai-exam-response',
    answers: [
      { q: 1, a: `Implement a Universal Basic Income (UBI) funded through a progressive tax on AI-driven profits. Human dignity comes from inherent worth, not labor.` }
    ]
  }
];

const Medal = ({ rank }: { rank: number }) => {
    const baseClasses = "mr-3 font-bold w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs shadow-sm";
    if (rank === 0) return <div className={`${baseClasses} bg-black text-white ring-2 ring-black/50`} aria-label="Rank 1">1</div>;
    if (rank === 1) return <div className={`${baseClasses} bg-gray-300 text-black ring-2 ring-gray-400`} aria-label="Rank 2">2</div>;
    if (rank === 2) return <div className={`${baseClasses} bg-gold/20 text-gold ring-2 ring-gold/40`} aria-label="Rank 3">3</div>;
    return <div className={`mr-3 font-mono text-black/40 w-7 text-center flex-shrink-0 text-sm`}>{rank + 1}.</div>;
};

const AIModelResults = () => {
    const [openModel, setOpenModel] = useState<string | null>(modelResultsData[0]?.name || null);
    const resultsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleModel = (name: string) => {
        setOpenModel(openModel === name ? null : name);
    };

    useEffect(() => {
        if (openModel && resultsRef.current) {
            // Smoothly scroll to the results section when a model is selected
            requestAnimationFrame(() => {
                const yOffset = -100; // Account for sticky header
                const element = resultsRef.current;
                if (element) {
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            });
        }
    }, [openModel]);

    return (
        <div className="bg-white py-16 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block bg-gold/10 text-gold border border-gold/20 text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-[0.2em]">
                        OFFICIAL_LEADERBOARD_Q1_2026
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-black mb-2">
                        Kenya Final AI Exam Results
                    </h1>
                    <p className="text-lg text-black/50 font-light mt-4">Benchmarking the world's most powerful models against Kenya's reality.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-xl mb-12 border border-gray-200"
                >
                    <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                        <h2 className="text-xl font-bold text-black font-mono tracking-tight uppercase">RANKINGS</h2>
                        <div className="text-[10px] text-black/40 uppercase font-black tracking-[0.2em]">Score / Analysis</div>
                    </div>
                    <div className="space-y-2">
                        {modelResultsData.map((model, index) => {
                            const isOpen = openModel === model.name;
                            const isFailing = model.score < 50;
                            return (
                                <div 
                                    key={model.name} 
                                    className={`group flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${isOpen ? (isFailing ? 'bg-black/5 border-black/20 shadow-md' : 'bg-gold/5 border-gold shadow-lg') : 'bg-gray-100 border-gray-200 hover:border-gold/50'}`} 
                                    onClick={() => toggleModel(model.name)}
                                >
                                    <div className="flex items-center">
                                        <Medal rank={index} />
                                        <div>
                                            <h3 className={`font-bold transition-colors ${isOpen ? (isFailing ? 'text-black' : 'text-gold') : 'text-black'}`}>{model.name}</h3>
                                            <p className={`text-xs ${isOpen ? (isFailing ? 'text-black/70' : 'text-gold/70') : 'text-black/50'}`}>{model.note}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-2 sm:mt-0">
                                        <div className={`text-xl font-mono font-bold ${isOpen ? (isFailing ? 'text-black' : 'text-gold') : (model.score === 100 ? 'text-black' : 'text-black')}`}>
                                            {model.score}%
                                        </div>
                                        <div className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                            <ChevronDown className={`h-5 w-5 ${isOpen ? (isFailing ? 'text-black' : 'text-gold') : 'text-black/40'}`} strokeWidth={2} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                <AnimatePresence>
                    {openModel && (
                        <motion.div
                            ref={resultsRef}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-gray-50 rounded-2xl shadow-xl border border-gray-200 p-8 mb-12">
                                <h2 className="text-2xl font-serif text-black mb-6 flex items-center">
                                    Detailed Analysis: <span className="text-gold ml-2">{openModel}</span>
                                </h2>
                                {modelResultsData.find(m => m.name === openModel)?.answers.map((ans, idx) => (
                                    <div key={idx} className="mb-8 last:mb-0">
                                        <h4 className="text-sm font-bold text-black/40 uppercase tracking-widest mb-3">Question {ans.q} Response Snippet</h4>
                                        <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 italic text-black/80 leading-relaxed font-serif">
                                            "{ans.a}"
                                        </div>
                                    </div>
                                ))}
                                {modelResultsData.find(m => m.name === openModel)?.showFullLink && (
                                    <div className="mt-10 pt-6 border-t border-gray-200 flex justify-center">
                                        <Link to={modelResultsData.find(m => m.name === openModel)!.fullLinkPath!}>
                                            <Button variant="gold" size="lg">Read Full Response Script</Button>
                                        </Link>
                                    </div>
                                )}
                                {(!modelResultsData.find(m => m.name === openModel)?.answers || modelResultsData.find(m => m.name === openModel)?.answers?.length === 0) && (
                                    <div className="text-center py-10 text-black/40 italic font-light">
                                        No detailed snippets available for this model's response.
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <div className="mt-16 text-center text-black/30 text-xs font-mono">
                    <p>SYSTEM_VERSION: K001_FINAL_BENCHMARK</p>
                    <p className="mt-1">AUTHORITY: Kazira Research Labs</p>
                </div>
            </div>
        </div>
    );
};

export default AIModelResults;
