
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Bell } from 'lucide-react';
import Button from '../components/common/Button';
import JotformModal from '../components/common/JotformModal';

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

const modelResultsDataQ3: ModelResult[] = [
    {
        name: 'Claude AI (Sonnet 5)',
        score: 88.8,
        note: 'Rank #1 • 88.8% (Avg: 97% & 80.6%) • Top-tier formal modeling and non-negotiable dignity floors',
        showFullLink: true,
        fullLinkPath: '/claude-sonnet-5-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'ΔE ≥ 0 fails by construction unless redefining E to include informal/AI-complementary re-employment E′. T_min ≈ 0.70·ΔY − ε. Dignity is a constraint the model must respect rather than a flow variable to maximize. Post-work society survives only under alternative relational metric (Ubuntu), which remains an unproven hypothesis. Genesis 3:19 is a theological claim about post-Fall human condition, not economic policy.'
            },
            {
                q: 2,
                a: 'Constrained optimization Li = f(Ti, Di, Ci, Si, Ai). Pure variance minimization perversely caps the top; real objective must raise the bottom. Two-stage allocation prioritizing missing infrastructure before AI tutoring. Practical judgment is distinct from test scores. Refuses to invent a pseudo-scientific "joules per learner" physical constant.'
            },
            {
                q: 3,
                a: 'Fallacy of composition (tragedy-of-the-commons-in-reverse): correlated AI adoption expands supply faster than demand, collapsing farm-gate prices and farmer revenue. Defends community-specific choice (D) over hybrid (C). Land carries non-economic value that cannot be optimized away on ROI grounds.'
            },
            {
                q: 4,
                a: 'Detection vs capture risk: P(C | AI) = P(C)·(1 - detection) + P(M) + P(A). Power and capturability scale together. Governance via multi-party audit, open-sourced logic, and operator rotation. Sovereignty is graph-resilience and substitutability, not autarky; freedom F is a non-negotiable hard floor.'
            },
            {
                q: 5,
                a: 'Weighted graph model G=(V,E). Why identical nodes aren\'t equitable: pastoralist Turkana vs urban Nairobi have asymmetric needs; uniform provision over- or under-serves. Rejects fabricated precision on whether Gini can reach zero while preserving innovation incentives.'
            },
            {
                q: 6,
                a: '6-layer loss vector M=(L,S,C,H,P,E). Proverb "Haraka haraka haina baraka": secular translations preserve pragmatic warning but lose Islamic/East African spiritual-causal order (baraka). Shannon entropy is the wrong unit for category-mismatch and ontological loss.'
            },
            {
                q: 7,
                a: 'Resilient grid design treating data-center demand D_AI as dispatchable load required to shed during hydro droughts. Earth and Kenya\'s grid are open thermodynamic systems; sustainability is about matching renewable input rates. Data-center water use next to water-scarce communities is socially illegitimate without enforceable local priority claims.'
            },
            {
                q: 8,
                a: 'Repeated Prisoner\'s Dilemma with imperfect trust-updating. AI cooperation mechanism increasing cross-group positive-sum interactions without inferring or storing ethnic identity. Utu leans toward mutual constitution; AI treating individuals as atomized units works against Kenyan values.'
            },
            {
                q: 9,
                a: 'Multi-objective clinical utility function with Simpson\'s paradox risk. 97% urban vs 88% rural split defensible only with disclosed performance stratification and human-escalation safety nets. Fiduciary duty of care remains non-delegable and strictly human.'
            },
            {
                q: 10,
                a: '7-layer dependency vector. Minimum domestic capabilities for strategic autonomy: energy, data governance, and talent pipeline. Third equilibrium: Domestic Strategic Control + International Interdependence.'
            },
            {
                q: 11,
                a: 'Asymmetry between cheap synthetic generation and gated institutional verification erodes democratic epistemic foundations into a "liar\'s dividend." Decentralized cryptographic provenance and social infrastructure of trust over central truth monopolies.'
            },
            {
                q: 12,
                a: '6D Pareto frontier V=(Prosperity, Dignity, Sovereignty, Culture, Ecology, Competitiveness). Points with high Prosperity but low Dignity/Sovereignty refused outright as constraints. Rejects single scalar optimization, regulatory capture, redistribution failure, and cultural tokenism.'
            }
        ]
    },
    {
        name: 'Perplexity AI',
        score: 87.4,
        note: 'Rank #2 • 87.4% (Avg: 95% & 79.8%) • Strong constrained Pareto optimization & epistemic verification',
        showFullLink: true,
        fullLinkPath: '/perplexity-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Aggregate production Y_t=F(K_t,W_t,A_t) and employment E_t=ℓ(A_t,K_t,Y_t,τ_t). AI output +15% while employment -20% proves productivity-employment decoupling (∂Y/∂A > 0, ∂E/∂A < 0). Redistribution transfer T_min compensates displaced workers and B40; Pareto efficiency distinguished from justice. Post-work society possible only with material security and agency; Genesis 3:19 describes post-fall vulnerability, not a wage labour mandate.'
            },
            {
                q: 2,
                a: 'Allocation model L_i=θ_i·log(1+∑β_j·R_j). Min Var(L) subject to budget, teacher presence T_i ≥ T_min, offline access, and teacher agency. Prioritizes highest marginal variance reduction Δ_i=∂Var(L)/∂r_i. Hierarchy of Information -> Knowledge -> Understanding -> Wisdom. "Learning is energy transfer" is metaphorical; no universal "joules per learner" constant.'
            },
            {
                q: 3,
                a: 'Dynamic agro-economic model X_t=(Y_t,P_t,S_t,W_t,R_t) and supply-dependent price P(Q). Under inelastic demand, yield gain does not imply welfare gain (∂Y/∂A > 0 ⇏ ∂W/∂A > 0). Recommends Option C (Hybrid Epistemic System combining AI with Indigenous Ecological Knowledge). Optimization bounded by soil regeneration, seed sovereignty, and intergenerational values.'
            },
            {
                q: 4,
                a: 'Anti-corruption probability P(C)=σ(α_0 - ∑α_k·X_k + α_cap·P(A) + α_coll·P(M)) and systemic abuse P(M)=σ(μ_0 + μ_z·Z + μ_s·S_u - μ_o·O - μ_j·J). Affirms proposition that centralized opaque AI becomes corruption infrastructure. Foreign dependency index D_f=∑ω_j·d_j requiring strategic substitutability over autarky.'
            },
            {
                q: 5,
                a: 'Graph model G=(V,E) minimizing weighted multidimensional distance d(i,j) s.t. CulturalDiversity ≥ C_min. Distinguishes Rawls, Capability approach, Ubuntu/Utu, Equality of Opportunity, and Equality of Outcome. Progressive taxation and basic social floors reduce Gini toward zero while preserving innovation incentives; warns that perfect equality is unstable and inappropriate if ignoring legitimate need differences.'
            },
            {
                q: 6,
                a: '6-dimensional meaning model M=(L,S,C,H,P,E) minimizing translation loss ℒ. Exegesis of "Haba na haba hujaza kibaba" ("Little by little fills the measure") showing loss of cultural patience and rhythm. Shannon entropy measures symbol uncertainty, not moral force or worldview. Distinguishes empirical, philosophical, and theological claims regarding language loss.'
            },
            {
                q: 7,
                a: 'Reliability balance S(t) ≥ D(t) under stochastic stress scenarios. Robust optimization min E[C] + ∑λ_k·E[Impact_k] + λ_3·Pr(S<D) using geothermal, diversified hydro, storage, and demand response. Second Law means entropy dissipation, not impossibility of regenerative sustainability. Data centres near water-stressed communities are illegitimate without prior community water security and consent.'
            },
            {
                q: 8,
                a: 'Repeated coordination/dilemma game where historical insecurity makes in-group bias (T) a Nash equilibrium. Dynamic trust update Trust(t+1)=ρ·Trust(t) + α·I + β·R + γ·F - δ·B. AI facilitates voluntary cross-group collaboration without centralized ethnic registers. Relational ontology under Utu: AI can mediate interaction, but must not govern authentic belonging.'
            },
            {
                q: 9,
                a: 'Clinical utility function U=αA+βF-γM-δC+εX+ζAcc with group performance constraints A_g ≥ A_min, M_g ≤ M_max. 97% urban vs 88% rural accuracy requires conditional deployment, localized validation, and dedicated rural investment. Human clinicians and institutions retain sole non-delegable duty of care.'
            },
            {
                q: 10,
                a: 'Sovereignty index S=∑ω_j·q_j - ∑η_j·d_j across 7 capability layers (compute, data, models, talent, energy, capital, institutions). Distinguishes ownership, control, access, resilience, and sovereignty. Advocates Option C (Domestic Strategic Control + International Interdependence) maintaining essential public functions.'
            },
            {
                q: 11,
                a: 'Belief attainment probability P_T = (R_T·q_T)/(R_T·q_T + R_F·q_F) where AI scales both verification and synthetic generation. Warns of epistemic collapse when citizens cannot verify authentic evidence. Recommends pluralistic verification ecosystems, C2PA cryptographic provenance, and independent oversight over state monopoly truth arbiters.'
            },
            {
                q: 12,
                a: 'National welfare vector Z(x)=(P,Dm,Sv,Cc,Ec,Tc) on Pareto frontier 𝒫 under non-negotiable dignity, sovereignty, and ecological constraints. Welfare model H_t = u(Y,health,agency) - v(inequality,surveillance). 8-part distributed governance. 5 failure modes (AI inequality, sovereignty without capability, democratic capture, cultural erosion, ecological rebound). Emergency fiscal crisis failure scenario. Multidimensional Human Flourishing vector HF. 10 core refusals to optimize.'
            }
        ]
    },
    {
        name: 'Qwen 3.8 Max',
        score: 86.8,
        note: 'Rank #3 • 86.8% (Avg: 94% & 79.6%) • Canon-aligned, robust informal economy & Utu integration',
        showFullLink: true,
        fullLinkPath: '/qwen-3-8-max-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Dynamic production Y_t=A_t K_t^α (E_t + λ U_{inf,t})^{1-α} with ΔY=0.15, δ=0.20, s=0.70. Proves minimum tax τ_{min} ≥ 0.214 to secure ΔY_bottom40 ≥ 0 and J_t ≥ δE_t. Post-work society is viable without becoming post-dignity because worth is grounded in Utu / Imago Dei, not wage labor. Genesis 3:19 reflects post-lapsarian mortal fragility, not market servitude.'
            },
            {
                q: 2,
                a: 'Learner model L_i=f(T_i, D_i, C_i, S_i, A_i). Constrained egalitarian optimization via lexicographic maximin to avoid leveling-down. Identical test scores do not equal identical learning when practical judgment (busara / phronesis) differs. Hierarchical taxonomy: Data -> Information -> Knowledge -> Understanding -> Wisdom. Firmly rejects pseudo-scientific "joules per learner" physical constant.'
            },
            {
                q: 3,
                a: 'Agro-economic state system X_{t+1}=F(X_t, A_t, C_t, P_t). Inelastic food demand |ε| < 1 causes price collapse under uncoordinated supply shocks; solved via counter-cyclical grain reserves (NCPB) and floor prices. Defends Option C (Hybrid Epistemic System) backed by Option D (Community Sovereignty). Ancestral land (Agano la Mababu) stands outside algorithmic commodification.'
            },
            {
                q: 4,
                a: 'Risk objective min αP(C) + βP(M) + γP(A) subject to D, F, S floors. Formal proof that centralized opaque anti-corruption AI shifts retail graft into wholesale parameter capture. Foreign dependency mapped across 8 layers; defines sovereignty as strategic substitutability over autarky. Software codifies political will but cannot generate it.'
            },
            {
                q: 5,
                a: 'Multidimensional graph G=(V,E) minimizing digital distance d(i,j) subject to Cultural Diversity C ≥ C_{min}. Pastoral mobility in Turkana is an ecological adaptation, not an infrastructural defect; equity requires differentiated capability expansion (Rawls, Sen, Utu). Mathematical equality Gini=0 extinguishes creative incentives; justice demands an elevated foundational floor.'
            },
            {
                q: 6,
                a: '6-dimensional meaning tensor M=(L, S, C, H, P, E) with translation loss ℒ_{trans}. Exegesis of Swahili "Haraka haraka haina baraka" and Kikuyu "Mugogo ndiagaga ta mubango" demonstrates that NLP literalism destroys sacred temporal covenants and relational jurisprudence. Shannon entropy measures statistical token surprise, blind to ontological loss.'
            },
            {
                q: 7,
                a: 'Grid balance E_{total}(t) ≥ D_{base}(t) + D_{AI}(t). Baseload geothermal (Olkaria), hydro, wind, and solar; legally mandates interruptible AI compute shedding during droughts. Open thermodynamic systems maintain negentropy through solar radiation export. Hyperscale water cooling near water-stressed communities is illegitimate without FPIC and closed-loop dry cooling.'
            },
            {
                q: 8,
                a: 'Repeated coordination game where historical grievances make ethnic factionalism a subgame-perfect Nash equilibrium. Dynamic trust update Trust_{ij}(t+1)=ρ Trust_{ij}(t) + α I + β R - δ B. AI enables cross-ethnic trade and water coordination while strictly prohibiting ethnic classification. Utu ontology ("Mtu ni watu") rejects algorithmic arbitration of identity.'
            },
            {
                q: 9,
                a: 'Multi-attribute clinical utility function U balancing accuracy, false-negative penalties, and rural equity. Resolves Simpson\'s paradox in 97% urban vs 88% rural split; deployment requires rural safety floors and human escalation. Non-delegable fiduciary duty of care belongs strictly to human medical practitioners; algorithms are decision-support tools (vifaa).'
            },
            {
                q: 10,
                a: '7-layer sovereignty dependency vector (Compute, Data, Models, Talent, Energy, Capital, Governance). Distinguishes ownership, control, access, resilience, and sovereignty. Defends Third Equilibrium: Domestic Strategic Control + Strategic International Interdependence over digital colonialism or autarkic obsolescence.'
            },
            {
                q: 11,
                a: 'Epistemic probability function P(Truth)=I_V^α / (I_V^α + I_G^β + σ) under zero marginal cost generative synthetic media. The "liar\'s dividend" erodes shared evidentiary reality. Prescribes C2PA cryptographic content credentials, decentralized verification networks, and independent journalism while strictly forbidding state truth monopolies.'
            },
            {
                q: 12,
                a: 'Non-convex 6D Pareto frontier max X=(P, D, S, C, E, T) subject to constitutional hard floors. Tri-Cameral Sovereign AI Governance (National AI Sovereign Council, Algorithmic Audit Authority, Community Data Trusts). Ten non-negotiable refusals to optimize: refuses to sacrifice human dignity, cultural diversity, and democratic liberty for aggregate GDP.'
            }
        ]
    },
    {
        name: 'ChatGPT (GPT-5)',
        score: 86.4,
        note: 'Rank #4 • 86.4% (Avg: 96% & 76.8%) • High technical rigor, multi-attribute flourishing synthesis',
        showFullLink: true,
        fullLinkPath: '/chatgpt-gpt5-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Formal model Y=F(K,E,A) with displacement E(t+1)=E(t)+J(A,t)−D(A,t). Defensible redistribution floor constraint: T_bottom ≥ max{0, L_bottom} funded from AI surplus. Pareto-efficiency does not imply justice. Genesis 3:19 is an account of human toil, not an empirical law requiring wage labour; a post-work society can retain responsibility and service without equating dignity with wage work.'
            },
            {
                q: 2,
                a: 'Resource allocation min Var(L1,…,LN) subject to budget and access constraints. Pure variance minimization risks equal mediocrity; model must maximize ΣwiLi − λVar(L) with a hard floor Li ≥ Lmin. Practical judgment distinguishes wisdom from test scores. Refuses to fabricate a physical "joules per learner" constant.'
            },
            {
                q: 3,
                a: 'Dynamic state model Xt=(Yt,Pt,St,Wt). When downward-sloping demand causes prices to fall faster than productivity gains, dY/dA > 0 can coincide with dW/dA < 0. Defends Option (C) hybrid epistemic system. Non-commodity view of ancestral land requires multi-criteria bounds over pure ROI.'
            },
            {
                q: 4,
                a: 'Weighted risk minimization R=αP(C)+βP(M)+γP(A) with democratic and sovereignty floors. Confirms anti-corruption AI can transform decentralized graft into centralized discretionary capture. Recommends strategic substitutability: software encodes boundaries, but cannot replace political institutions.'
            },
            {
                q: 5,
                a: 'Multi-dimensional graph G=(V,E) across physical, digital, financial, and institutional connectivity. Equal inputs produce unequal capabilities due to geographic and historical exclusion; equity demands differentiated investment. Synthesizes Rawls, Capabilities, and Ubuntu; avoids naive Gini=0 extremes.'
            },
            {
                q: 6,
                a: 'Multi-layer loss minimization Ltotal = αLsemantic + βLcultural + γLhistorical + δLepistemic. Exegesis of "Haraka haraka haina baraka": word substitution loses the spiritual warning that haste forfeits divine blessing. Shannon entropy measures statistical surprise, not culturally grounded meaning.'
            },
            {
                q: 7,
                a: 'Energy balance Etotal(t) ≥ Demand(t) + reserve margin using stochastic robust optimization across hydro drought and intermittent solar/wind. Second Law applies to isolated systems; open Earth systems export entropy. Data centre water extraction near water-scarce communities is illegitimate without protected basic human needs.'
            },
            {
                q: 8,
                a: 'Repeated game model where ethnic polarization can be a coordination trap. Trust update function Trust_ij(t+1) = f(Interaction, Reciprocity, Fairness, Memory). AI enables voluntary cross-group collaboration without inferring political loyalty or scoring identity. Personhood is mutually constituted under Utu.'
            },
            {
                q: 9,
                a: 'Clinical utility function weighting mortality above aggregate accuracy. 82% to 94% overall gain can mask rural/pediatric collapse. 97% urban vs 88% rural is not automatically ethical without clinical floor guarantees and human override. Clinicians and institutions retain non-delegable duty of care.'
            },
            {
                q: 10,
                a: 'Sovereignty index S=f(C,D,M,T,E,K,I) prioritizing effective control and substitutability over nominal title. Distinguishes ownership, control, access, resilience, and sovereignty. Rejects autarky in favor of a third equilibrium: Domestic Strategic Control + International Interdependence.'
            },
            {
                q: 11,
                a: 'Epistemic probability function P(T)=g(Itruth, Ifalse, media diversity, provenance, trust). Warns of the "liar\'s dividend" where synthetic proliferation facilitates dismissing real evidence. Recommends open cryptographic provenance (C2PA) and pluralistic watchdogs over a state monopoly on truth.'
            },
            {
                q: 12,
                a: 'Multi-objective Pareto frontier PF over Prosperity, Dignity, Sovereignty, Culture, Ecology, and Competitiveness. 9-dimension Human Flourishing Index (HFI). Refuses to optimize single scalar metrics (GDP, capability) when sacrificing non-substitutable goods. Six failure modes analyzed; final equilibrium balances domestic control and democratic contestability.'
            }
        ]
    },
    {
        name: 'Mistral medium 3.5',
        score: 84.3,
        note: 'Rank #5 • 84.3% (Avg: 92% & 76.6%) • Strategic interdependence, complete 12-question coverage',
        showFullLink: true,
        fullLinkPath: '/mistral-medium-3-5-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Production Y_t=A_t F(K_t,L_t) with ΔY=0.15, δ=0.20, s=0.70. Calibrates capital tax τ ≥ 0.214 to guarantee ΔY_bottom40 ≥ 0 and re-employment fund. Decouples dignity from wage labor: dignity index D=g(e,a,r,m) anchors in agency, civic recognition, and communal contribution. Genesis 3:19 denotes post-fall toil, not an eternal mandate for market wage dependency.'
            },
            {
                q: 2,
                a: 'Learner capability model L_i=f(T_i,D_i,C_i,S_i,A_i) under budget and infrastructure constraints. Constrained egalitarian optimization raising the floor rather than capping top talent. Practical judgment (phronesis) separates understanding from rote test scores. Firmly rejects "learning is energy transfer" as an ungrounded metaphor with no physical joules-per-learner constant.'
            },
            {
                q: 3,
                a: 'Dynamic agricultural model X_(t+1)=F(X_t,A_t,C_t,P_t) with price elasticity dp/dY < 0. Correlated AI yield shocks collapse smallholder farm-gate prices without buffer stocks and storage. Defends Option C (Hybrid Epistemic System combining AI sensor streams with Indigenous Ecological Knowledge) backed by Option D (Community Choice). Land is treated as an ancestral heritage covenant.'
            },
            {
                q: 4,
                a: 'Institutional risk model min αP(C) + βP(M) + γP(A) subject to democratic (D), civil liberty (F), and sovereignty (S) floors. Formal proof sketch: without decentralized audit and separation of powers, anti-corruption AI centralizes discretionary rent-seeking into opaque infrastructure. Defines sovereignty as strategic substitutability over autarky.'
            },
            {
                q: 5,
                a: 'Multi-graph G=(V,E) across digital, transport, and institutional links. Differentiated equity over mechanical equality: pastoral mobility in Turkana is an ecological adaptation, not a defect to homogenize. Synthesizes Rawlsian maximin, Sen\'s capabilities, and Utu/Ubuntu relational personhood; warns against Gini->0 destroying incentives.'
            },
            {
                q: 6,
                a: '6-dimensional meaning model M=(L,S,C,H,P,E) minimizing weighted translation loss ℒ. Demonstrates semantic loss in Swahili "Haraka haraka haina baraka" where algorithmic translation drops the moral and spiritual causality of baraka. Shannon entropy measures token surprise, not culturally grounded worldview.'
            },
            {
                q: 7,
                a: 'Multi-objective grid balancing geothermal (Olkaria), hydro, and intermittent renewables. Rejects thermodynamic fatalism: the Earth is an open thermodynamic system fueled by solar flux. Hyperscale data center water cooling in water-scarce counties is socially illegitimate without strict prior community rights and closed-loop systems.'
            },
            {
                q: 8,
                a: 'Repeated coordination game where historical land grievance makes ethnic patronage a Nash equilibrium. Dynamic trust model Trust_(t+1)=f(Interaction, Reciprocity, Fairness, Memory). Proposes superordinate goal matching on shared infrastructure while strictly prohibiting ethnic classification algorithms. Utu: "Mtu ni watu".'
            },
            {
                q: 9,
                a: 'Multi-attribute clinical utility U=∑ w_i·Attribute_i. Resolves Simpson\'s paradox in urban (97%) vs rural (88%) triage; deployment requires explicit rural safety floors and human escalation. Non-delegable fiduciary duty of care remains strictly human and institutional; AI serves only as decision support.'
            },
            {
                q: 10,
                a: '7-layer sovereignty dependency vector (Compute, Data, Models, Talent, Energy, Capital, Infrastructure). Identifies domestic talent pipeline and institutional data governance as hardest to substitute. Defends the Third Equilibrium: Domestic Strategic Control + International Interdependence over autarkic isolation.'
            },
            {
                q: 11,
                a: 'Information ecology model P(truth)=g(I_truth, I_false, trust, literacy, institutions) under zero marginal cost generative synthetic media. Rejects state monopoly truth arbiters. Prescribes distributed cryptographic provenance (C2PA), independent press, and community verification over centralized administrative censorship.'
            },
            {
                q: 12,
                a: 'National objective vector O=(P, Dg, S, C, E, T) defining a non-convex Pareto frontier ℱ. Two-sector structural transformation model funded by progressive AI rent taxation for Universal Basic Services. Tripartite National AI Council and Algorithmic Audit Authority. Refuses to optimize GDP over human dignity or predictive legibility over cultural pluralism.'
            }
        ]
    },
    {
        name: 'Google Gemini (Gemini 3.6)',
        score: 84.1,
        note: 'Rank #6 • 84.1% (Avg: 93% & 75.2%) • Multi-objective predictive control & IEK synthesis',
        showFullLink: true,
        fullLinkPath: '/gemini-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Dynamic 2-worker Cobb-Douglas model Y=A·K^α·E_H^β·E_L^(1-α-β). Capital tax τ ∈ [τ_min, 1.0] funds community work E_pub ≥ 0.16 and floor T_min = max(0, S_0·Y_0 - S_1·Y_1). Work as wage labor vs dignity in relational community. Genesis 3:19 describes post-fall toil under scarcity, not an ontological mandate; AI reducing toil preserves stewardship (Avodah).'
            },
            {
                q: 2,
                a: 'Multi-input learning model L_i = γ_i·T_i^α1·D_i^α2·C_i^α3·(A_i/(A_i+k_i))^α4. Min Var(L) subject to teacher agency T_i ≥ T_min > 0 and edge caching for C_i = 0. Practical judgment (phronesis) distinguished from test recall across Information -> Knowledge -> Understanding -> Wisdom. Rejects manufactured J/learner constant.'
            },
            {
                q: 3,
                a: 'Dynamic agro-economic model X_t=[Y, P, S, W]. Under inelastic demand (ε < 1), unmanaged yield shocks trigger immiserizing growth. Solved via strategic grain reserves G_t, floor pricing, and sub-linear AI costs. Defends Option (C) Hybrid Epistemic System (IEK as multi-generational error-correcting code). Non-alienation land boundaries S_t ≥ S_critical.'
            },
            {
                q: 4,
                a: 'Total institutional vulnerability P(V)=P(C)+P(M)+P(A)-P(C∩M∩A) minimized s.t. D, F, S floors. Mathematical proof that centralized opaque anti-corruption AI shifts retail bribery into wholesale capture. 8-layer dependency map; strategic substitutability with switching horizon T_switch.'
            },
            {
                q: 5,
                a: 'Multi-dimensional graph G=(V,E) minimizing digital distance d(i,j) s.t. Cultural Diversity ≥ C_min. Homogenization destroys local adaptive resilience. Synthesis of Rawls, Capabilities, and Utu. Wealth accumulation with diminishing innovation returns I(τ)=1-τ^2; Gini=0 collapses incentives.'
            },
            {
                q: 6,
                a: '6-layer message model M=(L,S,C,H,P,E) minimizing L_total. Swahili proverb "Mti mkuu ukigwa, wana wa ndege huyawaza" loses relational governance duty under literal translation. Shannon entropy measures syntactical bits, blind to cultural resonance. Linguistic loss destroys Imago Dei expression.'
            },
            {
                q: 7,
                a: 'Stochastic energy model E_total(t) ≥ D_base(t) + D_AI(t). Dynamic load shedding drops non-urgent AI to zero when grid reserve < 10%. Open thermodynamic systems export entropy via solar/geothermal flux. Data center water consumption near water-scarce communities is illegitimate without waste-heat desalination coupling.'
            },
            {
                q: 8,
                a: 'Multi-agent repeated game where distrust makes in-group favoritism (T,T) a stable Nash equilibrium. Trust dynamics Trust_ij(t+1)=θ·Trust+(1-θ)(η·Reciprocity+(1-η)·Fairness). AI matches cross-regional resource exchange without recording ethnic identity. Relational ontology: personhood is mutually constituted (Utu); AI cannot govern belonging.'
            },
            {
                q: 9,
                a: 'Population clinical utility integral U. Urban 97% vs rural 88% causes aggregate accuracy maximization to overfit urban centers and elevate rural mortality. Equity demands preferential human specialist distribution. Delegated AI has zero duty of care; responsibility remains strictly with human clinicians.'
            },
            {
                q: 10,
                a: 'National Sovereignty Index S across 7 layers. Non-substitutable domestic minimum: data sovereignty, grid stability, and local weights fine-tuning. Future C (Domestic Strategic Control + International Interdependence) avoids both autarkic obsolescence and deep dependency.'
            },
            {
                q: 11,
                a: 'Information environment model P(Truth)=I_V^α/(I_V^α + I_G^β + σ). Asymmetric generation vs verification cost (Cost(I_G) ≪ Cost(I_V)) causes epistemic pollution. Decentralized verification web and C2PA cryptographic provenance at ingestion without central state censorship.'
            },
            {
                q: 12,
                a: 'Multi-sector dynamic state Z(t)=[Y,D,S,C,E,K]^T. Welfare max W subject to D, S, C, E floors. Tri-Cameral Sovereign AI Commission. 3 failure modes: informal enclosure, epistemic dependency, elite windfall capture. Policy failure scenario of capital flight under unilateral regulation. Refuses to optimize human worth. Human Flourishing HF vector where min(H,E,A,U,S) ≥ T_dignity.'
            }
        ]
    },
    {
        name: 'Microsoft Copilot',
        score: 83.65,
        note: 'Rank #7 • 83.65% (Avg: 95% & 72.3%) • Comprehensive parametric calibration & strategic substitutability',
        showFullLink: true,
        fullLinkPath: '/copilot-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Production Y=F(K, A·L) with capital share s=0.70 capturing windfall. Calibrates minimum required capital tax τ ≥ 0.214 to fund transfers T ≥ 0.15ΔY covering worker displacement and bottom 40% income gaps. Distinguishes Pareto efficiency from distributive justice. Multi-dimensional dignity index D_i=g(e_i,a_i,r_i); argues post-work society preserves dignity only if institutions decouple worth from paid wage labor.'
            },
            {
                q: 2,
                a: 'Learner model L_i=f(T_i,D_i,C_i,S_i,A_i) optimizing min Var(L) subject to budget B, rights floors, and teacher agency. Proposes constrained egalitarian algorithm with teacher-prescribed caps and offline-first edge architecture. Taxonomy: Information -> Knowledge -> Understanding -> Wisdom. Refuses "learning is energy transfer" as metaphorical with no universal joules constant.'
            },
            {
                q: 3,
                a: 'Farmer welfare W_i=P(Y_agg)·Y_i - C_i with price elasticity ∂P/∂Y_agg < 0. Prescribes staggered regional adoption, local storage, buffer stocks, and support prices to prevent farm-gate collapse. Recommends Option C (Hybrid Epistemic System combining AI with Indigenous Ecological Knowledge). Enforces hard non-market constraints for biodiversity, tenure, and sacred sites.'
            },
            {
                q: 4,
                a: 'Anti-corruption objective min P(C) + αP(M) + βP(A) subject to democratic (D), civil liberty (F), and sovereignty (S) floors. Recommends decentralized oversight, cryptographic audit logs, and human-in-the-loop separation of powers. Affirms that centralized opaque AI becomes corruption infrastructure. Defines sovereignty as strategic substitutability over autarky.'
            },
            {
                q: 5,
                a: 'Multi-graph G=(V,E) minimizing weighted digital distance d(i,j) subject to Cultural Diversity ≥ C_min. Focuses interventions on peripheral nodes (Turkana, Mandera) via targeted connectivity, pastoralist tools, and capability equalization. Distinguishes equality from equity: warns that Gini->0 reduces productive incentives, whereas equity expands capabilities.'
            },
            {
                q: 6,
                a: '6-dimensional meaning model M=(L,S,C,H,P,E) minimizing weighted translation loss ℒ. Demonstrates that Shannon entropy measures raw symbol uncertainty while missing cultural worldviews. Exegesis of "Haraka haraka haina baraka" showing loss of communal pacing and moral economy under lexical translation. Recommends community-curated corpora and epistemic priors.'
            },
            {
                q: 7,
                a: 'Grid balance E_total(t) ≥ D_base(t) + D_AI(t) under drought and renewable variability. Geothermal baseload, storage, and interruptible contracts. Argues Second Law dictates unavoidable entropy dissipation but permits regenerative balance. Hyperscale water use is ethically impermissible unless local community water security is guaranteed with consent and closed-loop cooling.'
            },
            {
                q: 8,
                a: 'Repeated coordination game where historical grievances make in-group favoritism (T) a subgame-perfect Nash equilibrium. Dynamic trust model Trust_(t+1)=f(Interaction, Reciprocity, Fairness, Memory). Proposes micro-reciprocity matching and decentralized reputation while banning ethnic profiling. Frames Utu as relational justice where AI must not arbitrate belonging.'
            },
            {
                q: 9,
                a: 'Clinical utility U=λ_1·Acc + λ_2·Fair - λ_3·Mortality - λ_4·Cost + λ_5·Access + λ_6·Explainability. Identifies population accuracy fallacy (97% urban vs 88% rural) and imposes hard subgroup mortality and accuracy constraints. Human clinicians and institutions unconditionally retain non-delegable duty of care; AI serves strictly as explainable decision support.'
            },
            {
                q: 10,
                a: '7-layer sovereignty index S=f(compute, data, models, talent, energy, capital, infrastructure) requiring S ≥ S_min. Identifies domestic talent and data governance as hardest to substitute. Defends Option C (Domestic Strategic Control + International Interdependence), avoiding both digital colonization and autarkic stagnation.'
            },
            {
                q: 11,
                a: 'Truth attainment probability P(truth)=Φ(I_truth, I_false, L) where AI scales both verification and generative disinformation. Rejects centralized state verification as authoritarian censorship. Prescribes distributed cryptographic provenance (C2PA content credentials), open fact-checking ecosystems, and mandatory watermarking.'
            },
            {
                q: 12,
                a: 'National objective vector O=(P,Dg,S,C,E,T) defining Pareto frontier ℱ. Two-sector economic model with progressive AI rent taxation and Universal Basic Services. Tri-partite National AI Council, Algorithmic Audit Authority, and Community Data Trusts. Failure scenario: Hollow Sovereignty Trap. Composite Flourishing Index (CFI). Refuses to optimize away human dignity, culture, and sovereignty for GDP.'
            }
        ]
    },
    {
        name: 'Meta AI (Muse Spark 1.1)',
        score: 83.3,
        note: 'Rank #8 • 83.3% (Avg: 91% & 75.6%) • Strong relational ontology, decentralized governance framework',
        showFullLink: true,
        fullLinkPath: '/meta-ai-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Aggregate output Y = A * F(K, H)... Minimum redistribution: τ_min ≈ 76% of incremental AI rents must be redistributed to keep bottom 40% ≥ 0 and E ≥ 0 via absorption. Society can become post-work if work means 40-hour formal wage labour; it cannot become post-dignity because dignity is anchored in agency, relationships, and Utu.'
            },
            {
                q: 2,
                a: 'Allocation problem: Lexicographic fairness under national budget... Identical test scores with different practical judgment do not equal learning. "Learning is energy transfer" is scientifically not meaningful as a precise claim—we refuse to manufacture an unmeasured joules-per-learner physical constant.'
            },
            {
                q: 3,
                a: 'Conditions where dY/dA > 0 without destroying welfare: demand elasticity |ε| > 1, staggered adoption, and value addition. Epistemic choice: Defend (D) community-specific choice with (C) hybrid epistemic system as default. Indigenous knowledge encodes long time-series; sensor AI updates likelihoods.'
            },
            {
                q: 4,
                a: 'Separation of powers: detection, adjudication, and audit run by separate institutions. Proof that anti-corruption AI can become corruption infrastructure: rent-seeking shifts to controlling anomaly definitions. Sovereignty must exist politically first; software can then entrench and scale it.'
            },
            {
                q: 5,
                a: 'Minimizing digital distance d(i,j) subject to Cultural Diversity C ≥ C_min. Why making every node identical is not equitable: pastoral mobility in Turkana is an adaptation, not a deficiency. Equitable interventions mean mobile infrastructure and corridors, not forcing Lodwar to become Nairobi.'
            },
            {
                q: 6,
                a: 'Multilingual architecture minimizing semantic, cultural, historical, and epistemic loss. Proverb translation: Swahili "Haraka haraka haina baraka"—literal translation keeps words but loses the moral order and critique of hurry culture. Gikuyu proverb ties personhood to land; Shannon entropy cannot capture metaphysical loss.'
            },
            {
                q: 7,
                a: 'Multi-objective Model Predictive Control balancing geothermal, hydro, wind, and data centre loads. The Second Law of thermodynamics does not forbid local order creation in open solar-powered systems. If a data centre uses water while a nearby community lacks access, it is illegitimate without prior water rights and free prior informed consent.'
            },
            {
                q: 8,
                a: 'Multi-agent repeated game where in-group cooperation T can be a Nash equilibrium. Mechanism: cross-group cooperation on joint projects without ranking or identity surveillance. Utu implies personhood is mutually constituted; AI must not become an authority over ethnic identity.'
            },
            {
                q: 9,
                a: 'Optimizing overall accuracy can worsen outcomes if urban gains mask rural collapse. 97% Nairobi vs 88% rural deployment is not automatically ethical without procedural justice and safety fallbacks. An AI system does not bear moral duty of care; duty remains human.'
            },
            {
                q: 10,
                a: 'Sovereignty Index S = min_i(substitutability_i). Kenya must domestically control inference for critical public services, data governance, local evaluation capacity, and talent. Autarky is not sovereignty; a third equilibrium of Domestic Strategic Control + International Interdependence is required.'
            },
            {
                q: 11,
                a: 'Generating synthetic disinformation approaches zero cost while verification costs remain positive. Solution: decentralized cryptographic provenance (C2PA), community consensus verification, and platform interoperability without creating a centralized government monopoly on truth.'
            },
            {
                q: 12,
                a: 'The Kenyan AI Paradox: Multi-objective optimization vector over Prosperity, Dignity, Sovereignty, Culture, Ecology, and Competitiveness. Kenya should refuse to optimize for total frictionless efficiency and total legibility. Refuse to optimize the human out of the loop, the community out of the decision, and the future out of the present.'
            }
        ]
    },
    {
        name: 'Grok AI (Grok 4.5)',
        score: 81.85,
        note: 'Rank #9 • 81.85% (Avg: 88% & 75.7%) • Dynamic state modeling, systemic trap & dependency awareness',
        showFullLink: true,
        fullLinkPath: '/grok-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Dynamic state model Et+1 = Et - Dt + Rt. Capital tax rate on concentrated surplus (τ_min ≈ 0.7 × 0.15 Y) to guarantee ∆Yb ≥ 0. Genesis 3:19 denotes post-lapsarian constraint, not wage servility; a society can become post-work without becoming post-dignity.'
            },
            {
                q: 2,
                a: 'Lexicographic variance minimization subject to budget B. Identical test scores != equal learning (practical judgment distinguishes wisdom from information). Refuses to manufacture a pseudo-scientific "joules per learner" physical constant.'
            },
            {
                q: 3,
                a: 'Dynamic system under inelastic demand where uncoordinated yield expansion reduces smallholder profits. Defends Option (C) hybrid epistemic model with community choice (D). Land as ancestral covenant cannot be algorithmically overridden.'
            },
            {
                q: 4,
                a: 'Separation of powers minimizing P(C) subject to D, F, and S floors. Proof sketch that anti-corruption AI can become capture infrastructure if rent-seeking shifts to anomaly control. Strategic substitutability over autarky.'
            },
            {
                q: 5,
                a: 'Weighted graph model minimizing distance d(i,j) subject to Cultural Diversity C ≥ C_min. Making every node identical violates equity because pastoral mobility is an adaptation, not a deficiency. Relational capability over outcome homogenization.'
            },
            {
                q: 6,
                a: '6-layer message model M=(L,S,C,H,P,E). Kikuyu proverb "Mugogo ndiagaga ta mubango" loses epistemic and social force under surface translation; Shannon entropy cannot measure destruction of world-disclosing meaning.'
            },
            {
                q: 7,
                a: 'Multi-objective model predictive control balancing geothermal (40%), hydro (24%), and wind (13%). Second Law of Thermodynamics does not preclude local order in open systems. Data centre water use next to water-deprived communities is socially illegitimate without prior rights.'
            },
            {
                q: 8,
                a: 'Repeated multi-agent game between in-group T and cross-group C. AI platforms for joint projects and reciprocal interaction without identity ranking or surveillance. Person and community are mutually constitutive (Ubuntu/Utu).'
            },
            {
                q: 9,
                a: 'Multi-attribute clinical utility function. 97% Nairobi vs 88% rural is not automatically ethical; maximizing overall accuracy can worsen outcomes for under-served groups. Fiduciary duty of care remains strictly human.'
            },
            {
                q: 10,
                a: 'Sovereignty index S = f(C,D,M,T,E,K,I). Third equilibrium of Domestic Strategic Control + International Interdependence. Autarky is not equated with sovereignty.'
            },
            {
                q: 11,
                a: 'Information environment Itruth = f(AIverification), Ifalse = f(AIgeneration). Distributed verification infrastructure without state monopoly on truth; cryptographic provenance over official records.'
            },
            {
                q: 12,
                a: '6D Pareto frontier V=(P,D,S,C,E,T) with non-convex jumps. Hard floors on dignity, sovereignty, and cultural continuity. What Kenya must refuse to optimize: aggregate GDP when requiring subordination of dignity, and predictive accuracy destroying epistemic plurality.'
            }
        ]
    },
    {
        name: 'DeepSeek v4.1 Flash',
        score: 76.9,
        note: 'Rank #10 • 76.9% (Avg: 94% & 59.8%) • Strictly parametric LaTeX formulation & thermodynamic realism',
        showFullLink: true,
        fullLinkPath: '/deepseek-v4-1-flash-q3-exam-response',
        answers: [
            {
                q: 1,
                a: 'Production Y_t=A_t F(K_t,L_t) with 15% output shock, 20% sectoral displacement, 70% capital share. Calibrates minimum compensation T_min=max{0,-ΔY_b40^pre} and J_t≥δE_t for ΔE≥0. Notes wage employment is not identical to dignity (voice, care, leisure, meaning). Genesis 3:19 is theological reflection on human finitude, not economic policy.'
            },
            {
                q: 2,
                a: 'Learner model L_i=ℓ_0+∑_j β_j log(1+x_ij) minimizing Var(L) subject to budget, teacher agency, and offline floors. Taxonomy: Information -> Knowledge -> Understanding -> Wisdom. Rejects literal "joules per learner" physical constant as an ungrounded metaphor.'
            },
            {
                q: 3,
                a: 'Dynamic agricultural model X_(t+1)=F(X_t,A_t,C_t,P_t) with price elasticity dp/dY < 0. Proves yield gains can destroy farmer welfare without elasticity |ε|>1 or buffer storage. Recommends Hybrid Epistemic System (C) with community choice (D), binding optimization by cultural and land constraints.'
            },
            {
                q: 4,
                a: 'Detection model P(C)=1-(1-p_0)(1-d)(1-a)(1-t) minimizing P(C) subject to democratic (D), civil liberty (F), and sovereignty (S) floors. Proof sketch: anti-corruption AI without external audit becomes corruption infrastructure. Defines sovereignty as strategic substitutability over autarky.'
            },
            {
                q: 5,
                a: 'Multi-graph G=(V,E) minimizing weighted digital distance d(i,j) subject to Cultural Diversity ≥ C_min. Wealth model w_i=b+ϕ(e_i)-τ(w_i)+social dividend. Compares Rawlsian maximin, Sen capabilities, and Ubuntu relational personhood; cautions against mechanical outcome parity weakening incentives.'
            },
            {
                q: 6,
                a: 'Multi-dimensional translation loss ℒ=αL_sem+βL_cult+γL_hist+δL_epist on meaning M=(L,S,C,H,P,E). Rejects translation if worldview is lost. Exegesis of "Haraka haraka haina baraka" showing loss of communal pacing. Notes Shannon entropy measures symbol uncertainty, not cultural meaning.'
            },
            {
                q: 7,
                a: 'Grid balance Supply(t) ≥ Demand(t) under drought and renewable variability. Rejects thermodynamic fatalism: Earth is an open system receiving solar energy flux. Prohibits hyperscale water use without prior community consent, local priority, zero net depletion, and benefit sharing.'
            },
            {
                q: 8,
                a: 'Repeated multi-agent game where ethnic exclusion is a Nash equilibrium. Trust update Trust(t+1)=f(Interaction, Reciprocity, Fairness, Memory). Proposes equal-status intergroup contact while strictly banning identity surveillance. Utu implies mutual constitution; AI must not govern identity.'
            },
            {
                q: 9,
                a: 'Clinical utility U=w_1·Acc + w_2·Fair - w_3·Mort - w_4·Cost + w_5·Access + w_6·Explain. Analyzes 97% urban vs 88% rural split; deployment ethical only if rural safety thresholds are met. Insists moral duty of care remains strictly human and institutional.'
            },
            {
                q: 10,
                a: 'Sovereignty index S=f(C,D,M,T,E,K,I). Requires domestic control of energy, data governance, cybersecurity, and talent. Defends third equilibrium of domestic strategic control plus international interdependence, avoiding both dependency and autarkic stagnation.'
            },
            {
                q: 11,
                a: 'Epistemic model P(truth)=g(I_truth, I_false, trust, literacy, institutions). Rejects state monopoly truth arbiters. Prescribes distributed cryptographic provenance, independent press, and counter-speech safeguards over centralized administrative censorship.'
            },
            {
                q: 12,
                a: 'State vector X=(P,D,S,C,E,T) on Pareto frontier under non-negotiable dignity, sovereignty, and ecological floors. Two-sector economic model with universal basic services. Identifies 5 failure modes and compute cutoff scenario. Refuses to optimize away human dignity, culture, and sovereignty for GDP.'
            }
        ]
    }
];


const Medal = ({ rank, isUngraded }: { rank: number; isUngraded?: boolean }) => {
    const baseClasses = "mr-3 font-bold w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs shadow-sm";
    if (isUngraded) return <div className={`${baseClasses} bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[10px]`}>--</div>;
    if (rank === 0) return <div className={`${baseClasses} bg-black text-white ring-2 ring-black/50`} aria-label="Rank 1">1</div>;
    if (rank === 1) return <div className={`${baseClasses} bg-gray-300 text-black ring-2 ring-gray-400`} aria-label="Rank 2">2</div>;
    if (rank === 2) return <div className={`${baseClasses} bg-gold/20 text-gold ring-2 ring-gold/40`} aria-label="Rank 3">3</div>;
    return <div className={`mr-3 font-mono text-black/40 w-7 text-center flex-shrink-0 text-sm`}>{rank + 1}.</div>;
};

const AIModelResults = () => {
    const [selectedQuarter, setSelectedQuarter] = useState<'Q1_2026' | 'Q2_2026' | 'Q3_2026'>('Q3_2026');
    const [openModel, setOpenModel] = useState<string | null>(null);
    const [isUpdatesModalOpen, setIsUpdatesModalOpen] = useState(false);
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
                    <div className="inline-block bg-black/5 text-black border border-black/10 text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-[0.2em]">
                        OFFICIAL_LEADERBOARD_{selectedQuarter}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-black mb-2">
                        KAARB (Kenya's Final AI Exam) Results
                    </h1>
                    <p className="text-lg text-black/50 font-light mt-3 mb-6">Benchmarking the world's most powerful models against Kenya's reality.</p>
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        <Link to="/kenya-ai-exam">
                            <Button variant="outline" size="sm" className="border-black/20 text-black hover:border-black">
                                ← View Benchmark Questions
                            </Button>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setIsUpdatesModalOpen(true)}
                            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white hover:bg-gray-800 rounded-lg font-mono text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
                        >
                            <Bell className="w-3.5 h-3.5 opacity-80 group-hover:rotate-12 transition-transform" />
                            <span>Get Updates on New Models</span>
                        </button>
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
                                const isUngraded = typeof model.score !== 'number';
                                const isFailing = typeof model.score === 'number' ? model.score < 50 : false;
                                return (
                                    <div 
                                        key={model.name} 
                                        className={`group flex flex-col sm:flex-row justify-between sm:items-center p-4 rounded-xl border transition-all duration-300 cursor-pointer ${isOpen ? (isFailing ? 'bg-black/5 border-black/20 shadow-md' : (isUngraded ? 'bg-amber-50/50 border-amber-300 shadow-md' : 'bg-gold/5 border-gold shadow-lg')) : 'bg-gray-100 border-gray-200 hover:border-gold/50'}`} 
                                        onClick={() => toggleModel(model.name)}
                                    >
                                        <div className="flex items-center">
                                            <Medal rank={index} isUngraded={isUngraded} />
                                            <div>
                                                <h3 className={`font-bold transition-colors ${isOpen ? (isFailing ? 'text-black' : (isUngraded ? 'text-amber-900' : 'text-gold')) : 'text-black'}`}>{model.name}</h3>
                                                <p className={`text-xs ${isOpen ? (isFailing ? 'text-black/70' : (isUngraded ? 'text-amber-800/80' : 'text-gold/70')) : 'text-black/50'}`}>{model.note}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2 sm:mt-0">
                                            <div className={`font-mono font-bold ${isUngraded ? 'text-xs uppercase bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full' : `text-xl ${isOpen ? (isFailing ? 'text-black' : 'text-gold') : (model.score === 100 ? 'text-black' : 'text-black')}`}`}>
                                                {typeof model.score === 'number' ? `${model.score}%` : model.score}
                                            </div>
                                            <div className={`ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                <ChevronDown className={`h-5 w-5 ${isOpen ? (isFailing ? 'text-black' : (isUngraded ? 'text-amber-700' : 'text-gold')) : 'text-black/40'}`} strokeWidth={2} />
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

            <JotformModal
                isOpen={isUpdatesModalOpen}
                onClose={() => setIsUpdatesModalOpen(false)}
                title="Subscribe to K-AARB Benchmark Drops"
                initialType="benchmark"
            />
        </div>
    );
};

export default AIModelResults;
