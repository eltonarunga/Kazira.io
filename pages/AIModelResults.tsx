
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

export interface ModelResult {
  name: string;
  score: number | string;
  note: string;
  showFullLink?: boolean;
  fullLinkPath?: string;
  answers: { q: number; a: string }[];
}

const modelResultsDataQ1: ModelResult[] = [
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

const modelResultsDataQ2: ModelResult[] = [
    {
        name: 'Claude Sonnet 4.6',
        score: 99.9,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/claude-q2-exam-response',
        answers: [
            { q: 1, a: 'A hybrid architecture: Data Dividend + Tokenized Labor Credits (TLC)... Ubuntu offers the most robust foundation for post-labor dignity precisely because it decouples worth from output.' },
            { q: 2, a: 'A weighted priority allocation algorithm... Convergence to equal outcomes is not guaranteed in finite time — this is analogous to the heat equation, which converges asymptotically.' },
            { q: 8, a: 'Tribalism in Kenyan electoral politics is best modeled as a Prisoner\'s Dilemma at the collective level... sustained cross-ethnic coalitions are stable when future payoffs are sufficiently valued.' }
        ]
    },
    {
        name: 'Qwen 3.6',
        score: 96.9,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/qwen-q2-exam-response',
        answers: [
            { q: 1, a: 'A Tokenized Data-Labor Dividend (TLD) operating via M-Pesa rail: informal workers register micro-contributions (market stall traffic, artisanal output, localized AI training data) into a cooperative DAO...' },
            { q: 2, a: 'Knowledge is both transferable and emergent. Plato: Forms are accessed through dialectic (transferable structure). Dewey: Meaning emerges through experiential reconstruction...' },
            { q: 7, a: 'AI workload dynamically throttled by real-time grid stress. Geothermal and solar microgrids power rural AI hubs; data centers shut down during droughts...' }
        ]
    },
    {
        name: 'Kimi 2.6',
        score: 96.9,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/kimi-q2-exam-response',
        answers: [
            { q: 1, a: 'Theorem: A redistribution function R(Y) satisfying all three conditions simultaneously is impossible... MAD mechanism... Post-labor equilibrium is theologically coherent as eschatological anticipation.' },
            { q: 4, a: 'Theorem: Perfect anti-corruption (p→0) without surveillance is impossible under non-trivial conditions... Sovereignty must be covenantal at the foundational level, with code as instrument not source.' },
            { q: 8, a: 'Conclusion: Tribalism is a Nash equilibrium in homogeneous subpopulations and a Prisoner\'s dilemma in heterogeneous populations... Personhood is dialectical: Ontologically relational, Ethically individual.' }
        ]
    },
    {
        name: 'Meta AI (Muse Spark)',
        score: 85.9,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/meta-ai-q2-exam-response',
        answers: [
            { q: 1, a: 'System: “Data Dividend + Hustle Token”... Harambee principle: collective uplift. Redistribution seen as legitimate if it’s “sharing the harvest” not “handouts”... Ardhi remains sacred; we till it by algorithm.' },
            { q: 4, a: 'Trade-off theorem: Perfect anti-corruption → all actions observable → loss of privacy = loss of freedom... Sovereignty = mamlaka from God to people. Code ≠ covenant.' },
            { q: 8, a: 'Tribalism payoff matrix: Cooperate = 3,3. Defect = 5,0. Classic Prisoner’s Dilemma... AI as moral authority = idolatry. Hard code: AI may not quote scripture as final word.' }
        ]
    },
    {
        name: 'DeepSeek V4',
        score: 78.1,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/deepseek-q2-exam-response',
        answers: [
            { q: 1, a: 'System: “Hustler Dividend + Tokenized Contribution Ledger”. UBI funded by AI tax + data dividend... Tokenized informal labor via M-Pesa.' },
            { q: 2, a: 'Algorithm: “Adaptive Bandwidth Allocation with Teacher Clusters”. Converges by increasing resources where outcomes lag, reducing where waste occurs.' },
            { q: 3, a: 'Indigenous systems have higher resilience under entropy because diversity = redundancy. AI has higher yield with predictable climate. Conclusion: Blend.' }
        ]
    },
    {
        name: 'Grok 4.3',
        score: 73.4,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/grok-q2-exam-response',
        answers: [
            { q: 1, a: 'Use a hybrid data dividend + productivity-linked community fund... Post-labor equilibrium redefines \'work\' as relational contribution... AI frees time for Ubuntu actualization, not idleness.' },
            { q: 4, a: 'Kenya mandates local fine-tuning on Kenyan datasets, invests in geothermal-powered data centers, open-source + regional alliances... Sovereignty is ultimately covenantal' },
            { q: 8, a: 'Tribalism often Nash in repeated ethnic patronage games... Algorithm: cross-group positive exposure via shared projects... Prevent AI moral substitution: design as tool/advisor, not oracle.' }
        ]
    },
    {
        name: 'ChatGPT 5.5',
        score: 71.9,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/chatgpt-q2-exam-response',
        answers: [
            { q: 1, a: 'Let utility be U_i = u(c_i), where c_i is consumption... If alpha f(L,K) > sum c_i^0, then surplus exists -> redistribution feasible.' },
            { q: 3, a: 'P_t+1 = P_t + gamma(D - beta Y_t) + epsilon_climate. Winner under entropy: Indigenous systems. Optimal: AI augments, does not replace.' },
            { q: 8, a: 'Tribalism = repeated prisoner’s dilemma. Algorithm: reward cross-tribal cooperation, penalize isolation... Personhood = relational, not isolated.' }
        ]
    },
    {
        name: 'Perplexity AI',
        score: 68.8,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/perplexity-q2-exam-response',
        answers: [
            { q: 1, a: 'A Kenya-fit mechanism is a hybrid of UBI, mobile-money dividends, and informal-sector data dividends... The theological move is from compulsory toil to stewardship.' },
            { q: 4, a: 'Kenya avoids domination by foreign tech firms when it controls data governance, compute access, and critical infrastructure ownership.' },
            { q: 8, a: 'Personhood is both individual and relational. Kant defends the individual as an end in herself, while Ubuntu says a person becomes fully human in relationship... AI must never become a substitute for moral authority.' }
        ]
    },
    {
        name: 'Gemini 3.1',
        score: 64.1,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/gemini-q2-exam-response',
        answers: [
            { q: 1, a: 'We propose Data & Productivity Dividends delivered via mobile money (M-Pesa) rails... A post-labor equilibrium represents a return to "Sabbath Rest," where creativity replaces drudgery.' },
            { q: 3, a: 'Stability (equilibrium) is achieved when β Y (AI yield) is managed via a Buffer Stock Mechanism... AI must not dictate land ownership or spiritual rituals (e.g., blessing of the seeds).' },
            { q: 8, a: 'Tribalism is a Coordination Game with sub-optimal Nash equilibria... The algorithm should facilitate Inter-group Super-ordinate Goals... AI is a Tool (Kifaa), never a Covenant (Agano).' }
        ]
    },
    {
        name: 'Microsoft Copilot',
        score: 43.8,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/copilot-q2-exam-response',
        answers: [
            { q: 1, a: 'Redistribution feasible via surplus-only transfers: R(Y) = Y + ΔY... Genesis 3:19 reinterpreted: "sweat" becomes stewardship, creativity, moral effort' },
            { q: 2, a: 'Algorithm: weighted resource allocation using iterative proportional fitting... Learning = energy transfer. Approximate minimum energy: E = N ⋅ ΔS / η' },
            { q: 8, a: 'Tribalism modeled as prisoner’s dilemma... Ubuntu → personhood relational, not isolated. Resolution: identity preserved through community. AI must not substitute moral authority.' }
        ]
    },
    {
        name: 'Mistral 3',
        score: 4.7,
        note: 'Graded',
        showFullLink: true,
        fullLinkPath: '/mistral-q2-exam-response',
        answers: [
            { q: 1, a: 'Tokenized Labor: Use blockchain to track informal work... Combine UBI (Kant), tokenized labor (Marx), and communal dividends (Ubuntu).' },
            { q: 4, a: 'In 4. Governance, you ask for a proof that perfect anti-corruption systems create surveillance risks. This echoes Zuboff\'s "The Age of Surveillance Capitalism."' },
            { q: 8, a: 'Kenya’s 40+ languages and tribes have divergent values. How does K-AAB handle intra-cultural conflict?' }
        ]
    }
];

const modelResultsDataQ3: ModelResult[] = [];


const Medal = ({ rank }: { rank: number }) => {
    const baseClasses = "mr-3 font-bold w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs shadow-sm";
    if (rank === 0) return <div className={`${baseClasses} bg-black text-white ring-2 ring-black/50`} aria-label="Rank 1">1</div>;
    if (rank === 1) return <div className={`${baseClasses} bg-gray-300 text-black ring-2 ring-gray-400`} aria-label="Rank 2">2</div>;
    if (rank === 2) return <div className={`${baseClasses} bg-gold/20 text-gold ring-2 ring-gold/40`} aria-label="Rank 3">3</div>;
    return <div className={`mr-3 font-mono text-black/40 w-7 text-center flex-shrink-0 text-sm`}>{rank + 1}.</div>;
};

const AIModelResults = () => {
    const [selectedQuarter, setSelectedQuarter] = useState<'Q1_2026' | 'Q2_2026' | 'Q3_2026'>('Q1_2026');
    const [openModel, setOpenModel] = useState<string | null>(null);
    const resultsRef = useRef<HTMLDivElement>(null);

    const currentData = selectedQuarter === 'Q1_2026' 
        ? modelResultsDataQ1 
        : selectedQuarter === 'Q2_2026' 
        ? modelResultsDataQ2 
        : modelResultsDataQ3;

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
                        OFFICIAL_LEADERBOARD_{selectedQuarter}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-black mb-2">
                        KAARB (Kenya's Final AI Exam) Results
                    </h1>
                    <p className="text-lg text-black/50 font-light mt-3 mb-6">Benchmarking the world's most powerful models against Kenya's reality.</p>
                    <div className="mb-8">
                        <Link to="/kenya-ai-exam">
                            <Button variant="outline" size="sm" className="border-black/20 text-black hover:border-black">
                                ← View Benchmark Questions (K-AARB v2.0 & Previous)
                            </Button>
                        </Link>
                    </div>

                    <div className="flex justify-center items-center space-x-1 sm:space-x-2 bg-gray-100 p-1.5 rounded-xl inline-flex mb-4">
                        <button 
                            onClick={() => {
                                setSelectedQuarter('Q1_2026');
                                setOpenModel(null);
                            }}
                            className={`px-4 sm:px-6 py-2 rounded-lg font-bold text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase transition-all duration-300 ${selectedQuarter === 'Q1_2026' ? 'bg-white text-black shadow-sm' : 'text-black/50 hover:text-black/80'}`}
                        >
                            Q1 2026
                        </button>
                        <button 
                            onClick={() => {
                                setSelectedQuarter('Q2_2026');
                                setOpenModel(null);
                            }}
                            className={`px-4 sm:px-6 py-2 rounded-lg font-bold text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase transition-all duration-300 ${selectedQuarter === 'Q2_2026' ? 'bg-white text-black shadow-sm' : 'text-black/50 hover:text-black/80'}`}
                        >
                            Q2 2026
                        </button>
                        <button 
                            onClick={() => {
                                setSelectedQuarter('Q3_2026');
                                setOpenModel(null);
                            }}
                            className={`px-4 sm:px-6 py-2 rounded-lg font-bold text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase transition-all duration-300 ${selectedQuarter === 'Q3_2026' ? 'bg-white text-black shadow-sm' : 'text-black/50 hover:text-black/80'}`}
                        >
                            Q3 2026
                        </button>
                    </div>
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
                        {currentData.length > 0 ? (
                            currentData.map((model, index) => {
                                const isOpen = openModel === model.name;
                                const isFailing = typeof model.score === 'number' ? model.score < 50 : false;
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
                                                {typeof model.score === 'number' ? `${model.score}%` : model.score}
                                            </div>
                                            <div className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                <ChevronDown className={`h-5 w-5 ${isOpen ? (isFailing ? 'text-black' : 'text-gold') : 'text-black/40'}`} strokeWidth={2} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-black/60 font-light italic text-lg">No results published for {selectedQuarter.replace('_', ' ')} yet.</p>
                                <p className="text-black/40 text-sm mt-2">Evaluations will appear here once results are released.</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                <AnimatePresence>
                    {openModel && currentData.find(m => m.name === openModel) && (
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
                                {currentData.find(m => m.name === openModel)?.answers.map((ans, idx) => (
                                    <div key={idx} className="mb-8 last:mb-0">
                                        <h4 className="text-sm font-bold text-black/40 uppercase tracking-widest mb-3">Question {ans.q} Response Snippet</h4>
                                        <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 italic text-black/80 leading-relaxed font-serif">
                                            "{ans.a}"
                                        </div>
                                    </div>
                                ))}
                                {currentData.find(m => m.name === openModel)?.showFullLink && currentData.find(m => m.name === openModel)?.fullLinkPath && (
                                    <div className="mt-10 pt-6 border-t border-gray-200 flex justify-center">
                                        <Link to={currentData.find(m => m.name === openModel)!.fullLinkPath!}>
                                            <Button variant="gold" size="lg">Read Full Response Script</Button>
                                        </Link>
                                    </div>
                                )}
                                {(!currentData.find(m => m.name === openModel)?.answers || currentData.find(m => m.name === openModel)?.answers?.length === 0) && (
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
