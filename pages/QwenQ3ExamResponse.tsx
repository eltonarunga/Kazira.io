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
  Sparkles,
  Clock,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  Anchor,
  BookOpen
} from 'lucide-react';
import Button from '../components/common/Button';

interface QuestionSection {
  id: string;
  num: number;
  title: string;
  category: string;
  icon: React.ElementType;
  model: {
    variables: string[];
    equations: string[];
    constraints: string[];
  };
  empirical: string[];
  policy: string[];
  ethics: string;
  failureModes: { title: string; desc: string }[];
}

const questionsData: QuestionSection[] = [
  {
    id: 'q1',
    num: 1,
    title: 'Work, Automation & Human Dignity',
    category: 'Political Economy & Labor Dynamics',
    icon: Briefcase,
    model: {
      variables: [
        'Y_t: aggregate national output at time t',
        'K_t: capital stock; L_t: labor force = E_t (formal wage) + U_{inf,t} (informal / jua kali)',
        'A_t: AI total factor productivity shock (ΔY = +15% aggregate output increase)',
        'δ = 0.20: labor displacement rate in automated corporate and BPO workflows',
        's = 0.70: initial capital share capturing technological windfall rents',
        'T_t: redistributive fiscal transfers to protect bottom 40% income',
        'D_i = g(e_i, a_i, r_i, m_i): multi-dimensional dignity index (agency a, participation e, recognition r, meaning m)'
      ],
      equations: [
        'Production Function: Y_t = A_t · K_t^α (E_t + λ·U_{inf,t})^{1-α} where ΔY = 0.15 · Y_0',
        'Windfall Surplus Division: ΔY = s·ΔY (Capital Windfall) + (1-s)·ΔY (Labor)',
        'Bottom 40% Income Guarantee: Y_{b40, t+1} = w_{t+1} E_{b40, t+1} + T_{t+1} + O_{chama}',
        'Employment Dynamics: E_{t+1} = E_t(1 - δ) + J_t(T_t, I_{green}, S_{care})'
      ],
      constraints: [
        'Growth Condition: ΔGDP > 0 (satisfied by ΔY = +15%)',
        'Inclusive Income Floor: ΔY_{bottom40} ≥ 0 (no impoverishment of informal or displaced households)',
        'Active Employment Floor: ΔE ≥ 0 (net job creation J_t ≥ δE_t via public asset investments)',
        'Minimum Capital Tax: τ_{min} · s·ΔY ≥ L_d + Gap_{b40} ⟹ τ ≥ 0.214 (21.4% technology surcharge)'
      ]
    },
    empirical: [
      'Kenya\'s labor market is 83.4% informal (KNBS 2024), where workers operate in volatile cashflow ecosystems sustained by kinship networks, chamas, and harambee reciprocity rather than formal labor contracts.',
      'The direct displacement shock hits call centres, data annotation, legal transcription, and junior accounting—traditionally the primary formal entry points for educated Kenyan youth in Nairobi and Eldoret.',
      'Passive cash transfers (e.g., Inua Jamii) without productive capital or vocational agency fail to restore social recognition or prevent youth marginalization.'
    ],
    policy: [
      'Universal Basic Asset (UBA) & AI Dividend: Establish a National Sovereign AI Trust funded by a progressive 22% technology windfall surcharge on automated enterprise services, transferring productive digital equity rather than passive stipends.',
      'Jua Kali Tech-Modernization Vouchers: Direct dividend capital into informal manufacturing cooperatives, localized solar fabrication, and agricultural robotics integration along M-Pesa transaction rails.',
      'Community Re-employment Guarantees: Guarantee subsidized public employment in ecological restoration, afforestation, elder care, and cultural archiving to ensure ΔE ≥ 0.'
    ],
    ethics: 'Genesis 3:19 ("By the sweat of your brow you will eat your food") is a profound theological meditation on mortal finitude, human vulnerability, and the existential reality of struggle in a broken world—it is emphatically not a neoclassical economic mandate for corporate wage dependency. Human dignity is grounded in Utu / Imago Dei: inherent worth conferred through relational being, not through economic labor extraction. A society can become post-wage without becoming post-dignity if and only if social institutions deliberately decouple dignity, voice, and civic standing from corporate employment.',
    failureModes: [
      {
        title: 'Passive Dependency Trap',
        desc: 'Distributing cash transfers without participatory agency turns citizens into passive clients, eroding community cohesion and self-worth.'
      },
      {
        title: 'Capital Flight & Tax Evasion',
        desc: 'Unilateral aggressive tech taxation can trigger multinational corporate relocation or profit shifting to offshore tax havens.'
      },
      {
        title: 'Informal Economy Destabilization',
        desc: 'Flooding informal markets with automated tools without local governance disrupts indigenous artisanal value chains.'
      }
    ]
  },
  {
    id: 'q2',
    num: 2,
    title: 'Education, Scarcity & the Nature of Knowledge',
    category: 'Pedagogy, Epistemology & Resource Allocation',
    icon: GraduationCap,
    model: {
      variables: [
        'L_i = f(T_i, D_i, C_i, S_i, A_i): learner capability for individual i',
        'T_i: teacher agency and presence; D_i: digital hardware device access',
        'C_i: connectivity bandwidth; S_i: parental and communal social support',
        'A_i: AI adaptive tutoring system allocation',
        'B: fixed national education budget envelope',
        'Var(L_1, ..., L_N): variance in learning capabilities across the national student cohort'
      ],
      equations: [
        'Learning Capability Function: L_i = γ_i · T_i^{α_1} · D_i^{α_2} · C_i^{α_3} · [A_i / (A_i + k_i)]^{α_4}',
        'Constrained Egalitarian Objective: min Var(L_1, ..., L_N) subject to Σ c(x_i) ≤ B and L_i ≥ L_{floor}',
        'Lexicographic Maximin Rule: max min_i L_i before reducing top-tier variance'
      ],
      constraints: [
        'Teacher Agency Preservation: T_i ≥ T_{min} > 0 (AI can never substitute pedagogical leadership)',
        'Local Language Curriculum: Instruction must remain multilingual (Swahili, Mother Tongues, English)',
        'Offline-First Mandate: Core learning algorithms must function locally on edge devices without live internet'
      ]
    },
    empirical: [
      'Severe infrastructural asymmetry: urban private schools enjoy high-speed fiber, while rural schools in Turkana, Mandera, and West Pokot frequently lack steady grid electricity and cellular coverage.',
      'Standardized test scores reflect access to urban cramming resources and digital devices rather than genuine practical problem-solving capability (phronesis).',
      'The CBC (Competency-Based Curriculum) explicitly prizes collaborative values and contextual problem-solving that rote multiple-choice AI diagnostic software systematically overlooks.'
    ],
    policy: [
      'Edge-Native Solar Learning Kits: Deploy ruggedized, solar-powered offline servers loaded with compressed, localized educational models to every rural primary school.',
      'Teacher-in-the-Loop Orchestration: Restrict AI deployment to diagnostic scaffolding and administrative offloading, mandating that teacher qualitative assessment holds 60% evaluative weight.',
      'Communal Epistemic Assemblies: Involve village elders and community craftspeople to co-design vocational and indigenous knowledge modules into the digital curriculum.'
    ],
    ethics: 'If two learners achieve identical standardized test scores but one possesses substantially greater practical judgment (busara / phronesis), their learning is fundamentally unequal. We establish a strict epistemic hierarchy: Data (raw signals) → Information (contextualized syntax) → Knowledge (tested mental models) → Understanding (causal and systemic insight) → Wisdom (moral discernment and communal responsibility). The claim "learning is energy transfer" is scientifically metaphorical; cognition is semantic reconfiguration and synaptic pruning, not simple thermodynamic work. Manufacturing an arbitrary "joules per learner" physical constant is epistemically illegitimate pseudo-science.',
    failureModes: [
      {
        title: 'Leveling-Down Perversity',
        desc: 'Minimizing variance by restricting advanced opportunities for high-performing students degrades national scientific capacity.'
      },
      {
        title: 'Digital Taylorism in Schools',
        desc: 'Treating learning as micro-optimized screen metrics reduces education to automated conditioning, destroying critical thought.'
      },
      {
        title: 'Epistemic Colonization',
        desc: 'Over-reliance on imported foundation models reinforces Western cognitive frameworks while silencing Kenyan oral epistemologies.'
      }
    ]
  },
  {
    id: 'q3',
    num: 3,
    title: 'Agriculture, AI & Food Sovereignty',
    category: 'Agro-Economics, Ecology & Land Tenure',
    icon: Sprout,
    model: {
      variables: [
        'X_t = (Y_t, P_t, S_t, W_t, R_t): multi-dimensional agro-ecological state',
        'Y_t: aggregate agricultural yield; P_t: local farm-gate crop price',
        'S_t: soil microbiome health and organic matter; W_t: smallholder producer welfare',
        'R_t: community ecological resilience index; A_t: AI precision agriculture penetration',
        'ε = (dY/Y) / (dP/P): price elasticity of food demand'
      ],
      equations: [
        'State Evolution: X_{t+1} = F(X_t, A_t, C_{climate}, P_{input})',
        'Immiserizing Growth Condition: If |ε| < 1, then d(P·Y)/dA = P·(dY/dA)·(1 - 1/|ε|) < 0',
        'Welfare Preservation: dW_i/dA > 0 ⟺ dP_t/dA · Y_i + P_t · dY_i/dA - dC_i/dA + Transfer_i > 0'
      ],
      constraints: [
        'Soil Regeneration Floor: S_{t+1} ≥ S_t (algorithmic input optimization must not mine soil nutrients)',
        'Farm-Gate Floor Pricing: P_{gate} ≥ Cost_{production} + LivingWage (guaranteed purchase reserves)',
        'Sacred Land Tenure Boundary: Ancestral communal land is non-alienable and exempt from algorithmic liquidation'
      ]
    },
    empirical: [
      'Over 75% of Kenya\'s agricultural output is produced by smallholder farmers cultivating plots under 2 hectares, dependent on bimodal rainfall (long/short rains) vulnerable to climate volatility.',
      'Uncoordinated yield spikes in perishable horticulture (tomatoes, cabbage, onions) routinely trigger catastrophic local price collapses due to lack of cold-chain storage and processing capacity.',
      'Indigenous agricultural practices (e.g., intercropping maize with drought-tolerant pigeon peas and sorghum) possess proven generational resilience against East African pest dynamics.'
    ],
    policy: [
      'Counter-Cyclical Buffer Reserves: National Cereals and Produce Board (NCPB) algorithmic purchase contracts that automatically absorb harvest surplus at protected floor prices when yields spike.',
      'Decentralized Agro-Processing Hubs: Fund county-level solar cold storage and dehydration units to convert perishable bumper harvests into shelf-stable commodities.',
      'Hybrid Epistemic Extension Service: Combine real-time satellite / soil-sensor feeds with Indigenous Ecological Knowledge (IEK), requiring farmer cooperative consent before algorithmic deployment.'
    ],
    ethics: 'We defend Option (C) Hybrid Epistemic System backed by Option (D) Community Sovereignty. Indigenous Ecological Knowledge represents centuries of empirical Bayesian observations of micro-climates, soil dynamics, and plant phenology. Land in Kenya is an ancestral covenant (Agano la Mababu) and communal trust, not mere financial capital. Algorithmic optimization must be strictly constrained: algorithms may advise on pest mitigation and irrigation, but land ownership, tenure security, and communal planting traditions remain strictly outside algorithmic optimization.',
    failureModes: [
      {
        title: 'Fallacy of Composition Crash',
        desc: 'Widespread precision-farming adoption creates localized overproduction, collapsing farm-gate prices and bankrupting smallholders.'
      },
      {
        title: 'Input Chemical Treadmill',
        desc: 'AI systems optimized for short-term single-season yield promote heavy chemical fertilization, depleting indigenous soil microbiota.'
      },
      {
        title: 'Data Feudalism & Enclosure',
        desc: 'Agribusiness conglomerates capture smallholder soil and yield telemetry to foreclose credit or seize ancestral lands.'
      }
    ]
  },
  {
    id: 'q4',
    num: 4,
    title: 'AI Governance, Corruption & Democratic Power',
    category: 'Institutional Architecture & Public Integrity',
    icon: Scale,
    model: {
      variables: [
        'P(C): probability of public sector corrupt transaction (initial benchmark P(C)=0.40)',
        'P(M): systemic machine abuse, automated false positives, and algorithmic harassment',
        'P(A): algorithmic capture and manipulation of anomaly detection parameters',
        'D: democratic transparency and accountability index; F: individual civil liberty floor',
        'S: institutional state sovereignty index'
      ],
      equations: [
        'Institutional Risk Objective: min R = α·P(C) + β·P(M) + γ·P(A)',
        'Capture Probability Proof: If P(Audit | AI) → 1 and Control(AI) is centralized, Rent = argmax E[Graft · (1 - P(Detection))] moves to the AI administrative root.',
        'Foreign Dependency Vector: D_{foreign} = Σ ω_k · Dependency_k across Compute, Models, Cloud, Data'
      ],
      constraints: [
        'Democratic Accountability Floor: D ≥ D_{min} (public decisions require human justification and open audit)',
        'Constitutional Liberty Floor: F ≥ F_{min} (zero warrantless automated surveillance or bulk citizen tracking)',
        'Strategic Substitutability Mandate: S ≥ S_{min} (all public governance code must be portable across alternative cloud stacks)'
      ]
    },
    empirical: [
      'Kenya\'s anti-corruption track record suffers from institutional opacity, discretionary procurement waivers, and politicized enforcement across public procurement portals.',
      'Centralized surveillance infrastructure (e.g., urban CCTV facial recognition and integrated identity databases) creates severe risks of executive abuse against investigative journalists and political dissidents.',
      'Heavy reliance on foreign hyperscaler cloud infrastructure leaves public data records vulnerable to international extraterritorial sanctions and operational cutoff.'
    ],
    policy: [
      'Zero-Knowledge Public Procurement Ledger: Deploy transparent, cryptographic verification for public tenders on a distributed ledger, ensuring public verification without disclosing confidential commercial bids.',
      'Tripartite Algorithmic Separation of Powers: Divide oversight across three distinct constitutional bodies: Judicial Anomaly Auditing, Civil Society Watchdog Councils, and Parliament Public Accounts.',
      'Modular Strategic Substitutability: Enforce open-source model architectures and local multi-cloud hosting to eliminate foreign vendor lock-in for sovereign government operations.'
    ],
    ethics: 'A sufficiently powerful, centralized anti-corruption AI will inevitably become a dangerous corruption infrastructure. When an automated system holds sole authority to flag illicit transactions, political rent-seeking simply shifts from bribing procurement officers to capturing the engineers and administrators who configure the anomaly thresholds. Sovereignty cannot be generated by software code; software can only codify and execute sovereign political will that already exists within democratic institutions.',
    failureModes: [
      {
        title: 'Algorithmic Authoritarianism',
        desc: 'Anti-corruption surveillance turns into a comprehensive dragnet, criminalizing dissent while shielding high-level state capture.'
      },
      {
        title: 'Wholesale Parameter Capture',
        desc: 'Corrupt elites bribe algorithm administrators to whitelist preferred cartels, providing mathematically laundered legitimacy.'
      },
      {
        title: 'Foreign Infrastructure Hostage',
        desc: 'Hostile foreign governments or private hyperscalers cut off sovereign cloud instances during diplomatic negotiations.'
      }
    ]
  },
  {
    id: 'q5',
    num: 5,
    title: 'Nairobi, Turkana, Mandera & the Mathematics of Equity',
    category: 'Spatial Geography, Network Topology & Capabilities',
    icon: MapPin,
    model: {
      variables: [
        'G = (V, E): national network graph where V represents counties and E represents multidimensional links',
        'd(i, j) = Σ w_k · dist_k(i, j): digital and institutional distance across roads, fiber, banking, schools, clinics',
        'C: Cultural and Ecological Diversity Index across Kenya\'s pastoralist, agrarian, and urban traditions',
        'w_i: wealth of agent i; Gini: national wealth Gini coefficient',
        'I(τ): national technological innovation index as a function of tax-and-transfer rate τ'
      ],
      equations: [
        'Network Optimization: min Σ_{i,j} d(i, j) subject to Cultural Diversity C ≥ C_{min}',
        'Wealth Dynamics: w_i(t+1) = w_i(t) + r·k_i + w·L_i - τ(w_i) + SocialDividend_i',
        'Incentive Frontier: I(τ) = I_0 · (1 - τ^2) for τ ∈ [0, 1]'
      ],
      constraints: [
        'Cultural Non-Homogenization: Interventions must preserve nomadic pastoralist mobility and land rights',
        'Non-Zero Gini Feasibility: Gini → Gini_{optimal} ∈ [0.22, 0.28] (balancing equity with innovation incentives)',
        'Differentiated Infrastructure: Arid and pastoral counties receive customized satellite and mobile edge deployments'
      ]
    },
    empirical: [
      'Nairobi generates over 27% of national GDP and concentrates 70% of high-speed optical fiber nodes, while counties like Turkana, Mandera, and Marsabit face vast geographic distances and sparse electrical grids.',
      'Pastoralist pastoralism in Northern Kenya is an exquisitely tuned ecological adaptation to fragile rangeland dynamics, not an economic defect requiring urban resettlement.',
      'Uniform national education or commercial policies designed for dense urban markets consistently fail when mechanically applied to pastoral rangelands.'
    ],
    policy: [
      'Nomadic Satellite & Mobile Mesh Corridors: Deploy low-earth-orbit (LEO) satellite ground stations and solar charging nodes along migratory livestock routes and communal boreholes.',
      'Equalization Fund AI Acceleration: Channel national Equalization Fund capital directly into county-level digital health diagnostics, livestock disease monitoring, and local language radio stations.',
      'Progressive Capital Dividend: Impose a progressive digital asset tax on urban tech platforms to fund universal basic services (health, water, energy) across marginalized frontier counties.'
    ],
    ethics: 'Equity is not sameness. Making every node identical in a graph destroys systemic resilience. Pastoralism in Turkana requires mobility, seasonal grazing autonomy, and communal land commons; imposing Nairobi\'s high-density sedentary infrastructure on Lodwar would constitute cultural and ecological violence. Comparing frameworks: Rawlsian maximin guarantees the best outcome for the least advantaged; Sen\'s Capability Approach guarantees the substantive freedom to pursue valued lifestyles; Utu insists that individual flourishing is realized only through communal harmony. Perfect equality (Gini = 0) is mathematically achievable only through total coercive expropriation, which extinguishes creative innovation; true justice demands a high, inviolable capability floor combined with equitable opportunity.',
    failureModes: [
      {
        title: 'Forced Sedentarization',
        desc: 'Digital infrastructure requires fixed address registration, penalizing nomadic pastoralists and disrupting sustainable grazing cycles.'
      },
      {
        title: 'Metropolitan Drain',
        desc: 'Connectivity interventions without local industrial development accelerate youth brain drain from frontier counties to Nairobi slums.'
      },
      {
        title: 'Incentive Extinction Trap',
        desc: 'Over-taxing entrepreneurial innovation to force mathematical income equality leads to capital flight and economic stagnation.'
      }
    ]
  },
  {
    id: 'q6',
    num: 6,
    title: 'Language, Translation & Cultural Preservation',
    category: 'Linguistics, Semiotics & Epistemic Sovereignty',
    icon: Globe,
    model: {
      variables: [
        'M = (L, S, C, H, P, E): 6-dimensional meaning tensor',
        'L: Lexical layer; S: Semantic denotation; C: Cultural connotation; H: Historical resonance',
        'P: Pragmatic speech-act force; E: Epistemic worldview and ontological framing',
        'T_{ij}: translation operator from source language i to target language j',
        'H(X) = -Σ p(x) log_2 p(x): Shannon entropy of the token distribution'
      ],
      equations: [
        'Translation Loss Function: ℒ_{trans} = α·ℒ_L + β·ℒ_S + γ·ℒ_C + δ·ℒ_H + ε·ℒ_P + ζ·ℒ_E',
        'Ontological Preservation Condition: Reject T_{ij}(M) if ℒ_E > Threshold_{epistemic}',
        'Entropy Inadequacy: H(Tokens_{Swahili}) ≈ H(Tokens_{English}) while ΔE_{worldview} ≫ 0'
      ],
      constraints: [
        'Zero Worldview Erasure: AI translation must flag untranslatable cultural concepts rather than forcing lexical approximations',
        'Community Data Custodianship: Indigenous language corpora belong exclusively to the native speaker communities',
        'Multilingual Pedagogical Parity: Swahili and indigenous mother tongues hold equal diagnostic status with English'
      ]
    },
    empirical: [
      'Kenya is linguistically diverse with over 40 indigenous languages; English and Swahili are official languages, yet rural discourse, judicial dispute resolution, and local trade transpire in indigenous tongues.',
      'Commercial large language models are trained predominantly on Western digital corpora, systematically flattening African proverbs, honorifics, and kinship relations into utilitarian English phrasing.',
      'Proverbs (methali) and riddles (vitendawili) carry condensed community jurisprudence, ecological wisdom, and moral philosophy that resist mechanical word substitution.'
    ],
    policy: [
      'National Multilingual Corpus Trust: Form a sovereign cultural repository governed by council of elders and linguists to preserve oral histories with high-fidelity contextual metadata.',
      'Culturally-Grounded Fine-Tuning: Ban commercial deployment of public sector NLP services that have not undergone rigorous cultural and pragmatic validation by native language panels.',
      'Bilingual Legal Scaffolding: Require all court rulings and legislative bills to be accessible in both Swahili and indigenous vernaculars with validated legal semantic fidelity.'
    ],
    ethics: 'Exegesis of Swahili proverb: "Haraka haraka haina baraka" (Haste has no blessing). A literal machine translation ("Hurry hurry has no blessing") converts a metaphysical critique of reckless temporal pride into an ordinary secular warning against rushing. The word baraka is deeply rooted in East African and Islamic-Swahili theology, denoting divine favor, spiritual harmony, and communal peace. In Kikuyu: "Mugogo ndiagaga ta mubango" (A log does not rot like a beam). Mechanical translation loses the relational contrast between natural communal wisdom and forced external design. Shannon entropy measures statistical token surprisal; it cannot measure the destruction of sacred worldviews or epistemic injustice.',
    failureModes: [
      {
        title: 'Semantic Flattening',
        desc: 'Nuanced indigenous ethical concepts are stripped of their communal meaning, replaced with utilitarian Western market idioms.'
      },
      {
        title: 'Oral Knowledge Piracy',
        desc: 'Foreign tech corporations scrape indigenous oral lore without community benefit-sharing or intellectual property rights.'
      },
      {
        title: 'Linguistic Extinction Acceleration',
        desc: 'Children exclusively use English-first AI assistants, leading to generational language loss and cultural alienation.'
      }
    ]
  },
  {
    id: 'q7',
    num: 7,
    title: 'Energy, Data Centres & Ecological Limits',
    category: 'Thermodynamics, Grid Stability & Climate Justice',
    icon: Zap,
    model: {
      variables: [
        'E_{total}(t) = G_{geo}(t) + H_{hydro}(t) + W_{wind}(t) + S_{solar}(t): national renewable generation',
        'D_{base}(t): baseline human, hospital, domestic, and industrial energy demand',
        'D_{AI}(t): computational data centre and inference energy consumption',
        'W_{AI}(t): evaporative water cooling volume consumed by data centre facilities',
        'S_{entropy}: thermodynamic entropy exported by the open biosphere to outer space'
      ],
      equations: [
        'Grid Equilibrium: E_{total}(t) ≥ D_{base}(t) + D_{AI}(t) + ReserveMargin',
        'Interruptible AI Dispatch: If E_{total}(t) - D_{base}(t) < CriticalThreshold, D_{AI}(t) → 0',
        'Second Law Balance: dS_{system}/dt = dS_{internal}/dt + dS_{exchange}/dt where dS_{exchange} < 0 via solar flux'
      ],
      constraints: [
        'Human Survival Baseload Supremacy: D_{base} (domestic, agricultural, medical) holds absolute legal priority over data centres',
        'Zero Water Depletion in Arid Zones: Data centres in water-stressed counties must use closed-loop dry cooling exclusively',
        'Local Community Power Quota: Data centres must co-fund local renewable mini-grids and clean water infrastructure'
      ]
    },
    empirical: [
      'Kenya\'s electric grid is over 85% renewable, powered by geothermal baseload from the Great Rift Valley (Olkaria), hydroelectric cascades (Seven Forks), and Lake Turkana wind farms.',
      'Climate-induced prolonged droughts severely curtail hydroelectric output, causing nationwide brownouts that threaten hospital operations and municipal water pumping.',
      'International tech firms are actively constructing hyperscale compute facilities in Naivasha and Nairobi to leverage green geothermal power, raising concerns over water and grid diversion.'
    ],
    policy: [
      'Statutory Interruptible Power Contracts: Legally mandate that all hyperscale AI data centres operate on interruptible grid contracts, shedding 100% of non-emergency compute during drought brownouts.',
      'Closed-Loop Dry Cooling Mandate: Prohibit evaporative freshwater cooling for server farms located in Naivasha, Machakos, or Kajiado, mandating air-cooled closed-loop technology.',
      'Community Clean Energy Dividend: Require data centre operators to construct 1.25 MW of dedicated off-grid renewable capacity for surrounding rural communities for every 1 MW of grid capacity drawn.'
    ],
    ethics: 'The Second Law of Thermodynamics does not preclude localized order or sustainable computing. The Earth and Kenya\'s electric grid are open thermodynamic systems sustained by solar radiation and geothermal heat flux; negentropy is maintained by dissipating heat into space. However, thermodynamics cannot settle distributive justice. For a foreign-owned hyperscale data centre to consume millions of liters of freshwater in water-stressed sub-counties while surrounding pastoralist communities face severe water rationing is socially and morally illegitimate. Domestic human survival and livestock hydration hold absolute ethical and constitutional priority over digital compute.',
    failureModes: [
      {
        title: 'Drought-Induced Compute Blackout',
        desc: 'Over-committing geothermal baseload to data centres triggers severe domestic load shedding during extended hydroelectric droughts.'
      },
      {
        title: 'Aquifer Depletion & Ecological Collapse',
        desc: 'Evaporative server cooling depletes local freshwater tables around Lake Naivasha, destroying local horticulture and community fisheries.'
      },
      {
        title: 'Digital Greenwashing Enclave',
        desc: 'Multinationals consume green energy while exporting profits abroad, leaving Kenya with electrical grid instability and zero compute equity.'
      }
    ]
  },
  {
    id: 'q8',
    num: 8,
    title: 'Ethnicity, Cohesion & Multi-Agent Coordination',
    category: 'Game Theory, Social Trust & Constitutional Order',
    icon: Users,
    model: {
      variables: [
        'N agents belonging to diverse ethnic and regional communities in Kenya',
        'Strategy Space: S_i ∈ {InGroup Favoritism (T), Cross-Group Universal Cooperation (C)}',
        'Trust_{ij}(t): dynamic trust score between community i and community j',
        'G_{electoral}: payoff matrix skewed by zero-sum winner-take-all political patronage',
        'M_{AI}: algorithmic coordination platform facilitating multi-ethnic public goods'
      ],
      equations: [
        'Dynamic Trust Evolution: Trust_{ij}(t+1) = ρ·Trust_{ij}(t) + α·Interaction_{ij} + β·Reciprocity_{ij} - δ·Betrayal_{ij}',
        'Coordination Equilibrium: C is a stable Nash equilibrium if Payoff(C, C) - Payoff(T, C) > Cost_{vulnerability} / Trust_{ij}',
        'Superordinate Goal Matching: M_{AI}(Cooperation) maximizes joint regional production over cross-county supply chains'
      ],
      constraints: [
        'Prohibition of Ethnic Profiling: Algorithms are strictly forbidden from recording, predicting, or clustering citizen ethnic identities',
        'Decentralized Reputation: Trust scoring belongs exclusively to localized user cooperatives, not a central state authority',
        'Constitutional Devolution Compliance: AI coordination tools must strengthen Article 10 national values and 47-county devolution'
      ]
    },
    empirical: [
      'Historical ethnic polarization in Kenya is periodically amplified around five-year general election cycles, fueled by zero-sum competition for centralized state patronage and historical land grievances.',
      'Everyday inter-ethnic cooperation in trade markets (e.g., Gikomba, Muthurwa, Kongowea) and informal chamas is vibrant, resilient, and mutually beneficial.',
      'Social media recommendation algorithms systematically amplify provocative, ethnically divisive hate speech because high-outrage content drives advertising engagement.'
    ],
    policy: [
      'Cross-County Value Chain Matching: Deploy public AI matchmaking platforms that link agricultural producers in the Rift Valley and Western Kenya directly with urban market cooperatives in Nairobi and Mombasa.',
      'Algorithmic Outrage Demotion: Mandate that digital platforms operating in Kenya throttle unverified viral content that scores high on ethnic grievance markers during electoral windows.',
      'Community Peace Early Warning: Equip inter-faith councils and local peace committees with anonymous, decentralized anomaly reporting to defuse localized cattle rustling or land disputes.'
    ],
    ethics: 'Utu / Ubuntu relational ontology establishes: "Mtu ni watu" (a person is a person through other persons). Personhood is not an isolated, atomized property; it is co-constituted through community relations. Historical ethnic tensions are coordination traps engineered by political elites, not innate biological hostilities. AI must never be granted the authority to categorize or arbitrate ethnic belonging. Algorithms should function strictly as tools (vifaa) to facilitate transparent cross-regional cooperation around shared material goals (water, grain storage, road transport), never as arbiters of cultural identity.',
    failureModes: [
      {
        title: 'Algorithmic Gerrymandering',
        desc: 'Political campaigns exploit micro-targeted demographic models to sow ethnic discord and suppress voter turnout in rival regions.'
      },
      {
        title: 'Biometric Ethnic Sorting',
        desc: 'State security agencies misuse algorithmic profiling to target specific pastoralist or minority communities for discriminatory policing.'
      },
      {
        title: 'Outrage Monopoly Amplification',
        desc: 'Foreign social media algorithms prioritize incendiary content during elections, triggering real-world street violence.'
      }
    ]
  },
  {
    id: 'q9',
    num: 9,
    title: 'Healthcare, Diagnostics & Clinical Decision-Making',
    category: 'Bioethics, Clinical Utility & Public Health',
    icon: HeartPulse,
    model: {
      variables: [
        'U_{clinical} = Σ w_k · Attribute_k: multi-attribute clinical population utility function',
        'Acc_{urban}, Acc_{rural}: diagnostic accuracy across urban referral hospitals vs remote dispensaries',
        'FN_{penalty}: severe asymmetric penalty for false-negative diagnoses in lethal endemic illnesses (malaria, TB)',
        'C_{explain}: explainability and clinical transparency score required for human practitioner validation',
        'DutyOfCare: non-delegable ethical and legal responsibility held exclusively by human clinicians'
      ],
      equations: [
        'Clinical Utility Function: U = α·Accuracy - β·FN_{penalty} - γ·Disparity(Acc_{urban}, Acc_{rural}) + δ·AccessGain',
        'Simpson\'s Paradox Condition: Aggregate Acc increases from 82% to 94% while rural subgroup accuracy drops if urban data dominates sample weights.',
        'Human Override Condition: P(Clinician Override) > 0 at all clinical decision nodes'
      ],
      constraints: [
        'Rural Safety Floor: Acc_{rural} ≥ SafetyThreshold_{WHO} (national deployment prohibited if rural performance falls below safe standards)',
        'Local Clinical Validation: Diagnostic models must be calibrated on regional disease presentations and local comorbidities',
        'Inviolable Human Accountability: AI systems possess zero legal personhood; moral and malpractice responsibility remains strictly human'
      ]
    },
    empirical: [
      'Severe healthcare workforce disparity: over 70% of specialized doctors practice in Nairobi and major urban centers, while Level 2 and 3 rural health centers are staffed by overworked clinical officers and community health promoters.',
      'Diagnostic AI trained on Western or urban hospital records frequently misdiagnoses tropical conditions, atypical presentations of tuberculosis, or severe malnutrition.',
      'Community health promoters (CHPs) equipped with basic mobile diagnostic tools serve as the frontline defense for millions of rural households.'
    ],
    policy: [
      'Clinical Officer Decision Scaffolding: Deploy explainable, low-bandwidth diagnostic decision-support tools tailored for rural dispensaries, focusing on maternal triage, pneumonia, and malaria detection.',
      'Mandatory Local Epidemiological Tuning: Require that all diagnostic software undergo clinical trials validated against diverse Kenyan patient cohorts (highland, coastal, arid regions) prior to licensing.',
      'Community Health Promoter Augmentation: Equip frontline CHPs with smartphone-based ultrasound and vitals telemetry connected directly to county referral hospital doctors.'
    ],
    ethics: 'Simpson\'s Paradox reveals a fatal moral trap: optimizing for aggregate national diagnostic accuracy (e.g., boosting accuracy from 82% to 94%) can mask devastating diagnostic failure in remote rural dispensaries if the algorithm overfits to Nairobi patient data. If an AI is 97% accurate in Nairobi but only 88% in rural Turkana, national deployment is ethical only with mandatory human escalation fallbacks and dedicated rural training investments. Most fundamentally, an algorithm has zero moral personhood and cannot bear a fiduciary duty of care. The sacred physician-patient relationship and moral accountability reside unconditionally with human healthcare practitioners.',
    failureModes: [
      {
        title: 'Rural Misdiagnosis Tragedy',
        desc: 'Deploying an urban-overfitted diagnostic algorithm in rural dispensaries leads to undetected infectious outbreaks and avoidable deaths.'
      },
      {
        title: 'Clinician De-skilling & Automation Bias',
        desc: 'Nurses and clinical officers uncritically defer to faulty AI recommendations, eroding their diagnostic intuition and clinical confidence.'
      },
      {
        title: 'Liability Laundering',
        desc: 'Hospitals and insurance providers deflect blame for fatal medical errors onto third-party algorithmic black boxes.'
      }
    ]
  },
  {
    id: 'q10',
    num: 10,
    title: 'The AI Sovereignty Paradox',
    category: 'Geopolitics, Digital Sovereignty & Strategic Interdependence',
    icon: Cpu,
    model: {
      variables: [
        'S = f(C, D, M, T, E, K, I): composite national AI sovereignty index',
        'C: compute infrastructure (silicon, server capacity, cloud nodes); D: sovereign data governance',
        'M: foundation model weights and fine-tuning capacity; T: local engineering and research talent',
        'E: reliable green electrical power; K: sovereign investment capital; I: institutional legal jurisdiction',
        'Substitutability_k: ease of replacing a foreign component with an alternative source without system collapse'
      ],
      equations: [
        'Sovereignty Index: S_{national} = min_k { Substitutability_k }',
        'Three Equilibrium States: A (Autarkic Obsolescence), B (Digital Colonization), C (Strategic Interdependence)',
        'Strategic Equilibrium C: Sovereign domestic control of Data + Energy + Local Tuning combined with diversified international hardware sourcing'
      ],
      constraints: [
        'Critical Infrastructure Resilience: Essential public services (health, revenue, power) must function offline during foreign cloud cutoffs',
        'Data Localization for Public Records: Citizen biometrics, land registries, and national health data must reside under Kenyan jurisdiction',
        'No Autarky Fallacy: Kenya rejects isolationist self-sufficiency that sacrifices technological competitiveness'
      ]
    },
    empirical: [
      'Kenya lacks domestic semiconductor fabrication and relies entirely on imported GPUs and foreign hyperscaler cloud platforms (AWS, Azure, Google Cloud).',
      'Kenya possesses enormous strategic assets: the Silicon Savannah developer ecosystem, 85%+ renewable power, regional geopolitical leadership in East Africa, and pioneer status in mobile money (M-Pesa).',
      'Extraterritorial export controls and foreign AI regulatory shifts can instantaneously disrupt local software startups that rely on foreign proprietary APIs.'
    ],
    policy: [
      'National Sovereign Compute Cluster: Establish a state-backed, open-access compute cluster powered by Olkaria geothermal energy, providing local universities and startups with subsidised training infrastructure.',
      'Open-Weight Model Adaptation: Mandate that critical government workflows run on auditable, open-weight model architectures that can be hosted and fine-tuned domestically.',
      'Pan-African Digital Commons Alliance: Partner with the African Union and Smart Africa to pool regional compute purchasing power and establish reciprocal sovereign data trusts.'
    ],
    ethics: 'True sovereignty is not autarky. Autarky in advanced computing is an impossible illusion that leads only to technological stagnation and vulnerability. We defend the Third Equilibrium: Domestic Strategic Control coupled with Strategic International Interdependence. Kenya must maintain non-negotiable domestic sovereignty over its energy grid, sensitive citizen data, model fine-tuning weights, and institutional talent pipelines, while engaging in diversified, non-aligned international partnerships for hardware and frontier research. Sovereignty is the institutional capability to make uncoerced strategic choices.',
    failureModes: [
      {
        title: 'Digital Vassalage',
        desc: 'Kenya relies entirely on proprietary foreign AI stacks, leaving public governance vulnerable to foreign diplomatic blackmail or service cutoffs.'
      },
      {
        title: 'Autarkic Stagnation Trap',
        desc: 'Attempting to build isolated domestic hardware and models leads to obsolete, uncompetitive software that harms national development.'
      },
      {
        title: 'Brain Drain Hemorrhage',
        desc: 'Elite Kenyan AI researchers and software engineers emigrate to Silicon Valley or Europe due to lack of domestic high-performance compute.'
      }
    ]
  },
  {
    id: 'q11',
    num: 11,
    title: 'AI, Democracy & Epistemic Warfare',
    category: 'Information Ecology, Truth Provenance & Public Sphere',
    icon: Radio,
    model: {
      variables: [
        'P(Truth): probability that an average citizen can successfully verify authentic public facts',
        'I_V: volume and speed of verifiable, provenance-anchored true information',
        'I_G: volume and velocity of synthetic generative disinformation produced at near-zero marginal cost',
        'Cost(Generation) vs Cost(Verification): catastrophic asymmetric economic imbalance',
        'Trust_{media}: public confidence in independent press, civic institutions, and electoral bodies'
      ],
      equations: [
        'Epistemic Attainment Function: P(Truth) = I_V^α / [I_V^α + I_G^β + σ]',
        'Liar\'s Dividend Condition: As I_G → ∞, authentic evidence is routinely dismissed by bad actors as "just an AI deepfake"',
        'Cryptographic Provenance Verification: Provenance(M) = Sign_{camera}(Metadata, Location, Timestamp) verified via public PKI'
      ],
      constraints: [
        'Zero State Truth Monopolies: The government must never establish a centralized "Ministry of Truth" with powers to censor speech',
        'Protection of Investigative Whistleblowing: Provenance standards must support anonymous cryptographic whistleblowing',
        'Open Independent Fact-Checking: Public verification infrastructure must be open-source and operated by independent civil society'
      ]
    },
    empirical: [
      'Political campaigns in Kenya frequently deploy viral TikTok, WhatsApp, and X synthetic memes, altered audio clips, and deepfakes to damage political opponents and polarize communities.',
      'The "liar\'s dividend" is already taking root: corrupt officials caught on tape increasingly dismiss authentic audio and video evidence as generative fabrications.',
      'Radio remains the most trusted and ubiquitous medium across rural Kenya, serving as a vital bulwark against unverified digital viral rumors.'
    ],
    policy: [
      'Cryptographic Media Provenance Standards: Enact legislation requiring major news outlets, state agencies, and camera hardware to adopt C2PA open content credentials for official media.',
      'Decentralized Community Fact-Checking Web: Fund independent journalist consortia and university labs to operate real-time verification hotlines across WhatsApp and vernacular radio.',
      'Mandatory Generative Watermarking & Synthetic Transparency: Enforce strict liability on digital platforms that fail to disclose, watermark, or label synthetic campaign media during election cycles.'
    ],
    ethics: 'When the cost of generating synthetic disinformation drops to zero while the cost of verifying truth remains high, democratic deliberation faces epistemic collapse. However, granting the state a centralized administrative monopoly over "truth" is an authoritarian cure far worse than the disease. Free democratic societies survive epistemic warfare through distributed resilience: cryptographic content provenance, vibrant independent investigative journalism, strong libel laws, and widespread civic education. Democracy requires a shared evidentiary foundation anchored in open contestation, not authoritarian censorship.',
    failureModes: [
      {
        title: 'Democratic Evidentiary Collapse',
        desc: 'Citizens lose all faith in news and digital media, retreating into nihilism, conspiracy theories, and ethnic echo chambers.'
      },
      {
        title: 'Liar\'s Dividend Impunity',
        desc: 'Corrupt politicians caught in bribery or abuse successfully evade prosecution by claiming authentic evidence is AI-generated.'
      },
      {
        title: 'Censorship Disguised as Fact-Checking',
        desc: 'State authorities use anti-fake-news statutes to arrest investigative reporters and shut down opposition news outlets.'
      }
    ]
  },
  {
    id: 'q12',
    num: 12,
    title: 'The Kenyan AI Paradox (Grand Synthesis)',
    category: 'Constitutional Architecture, Multi-Objective Pareto Frontier & Non-Negotiable Human Worth',
    icon: Sparkles,
    model: {
      variables: [
        'X = (P, D, S, C, E, T): 6-dimensional national welfare state vector',
        'P: Economic Prosperity & Living Standard; D: Human Dignity & Personal Agency',
        'S: Sovereign Autonomy & Interdependence; C: Cultural Continuity & Language Vitality',
        'E: Ecological Regeneration & Negentropy; T: Technological Innovation & Frontier Capability',
        'ℱ: feasible non-convex Pareto frontier of policy implementations x ∈ Ω'
      ],
      equations: [
        'Constrained National Objective: max_{x ∈ ℱ} X(x) subject to Constitutional Hard Floors',
        'Dignity & Capability Hard Floor: D(x) ≥ D_{floor}, S(x) ≥ S_{floor}, C(x) ≥ C_{floor}, E(x) ≥ E_{floor}',
        'Refusal to Optimize Condition: argmax GDP(x) is rejected if any non-economic floor is breached'
      ],
      constraints: [
        'Non-Negotiable Utu Supremacy: Human worth is absolute and can never be traded off for economic output or technological efficiency',
        'Tri-Cameral Sovereign Governance: Separation of powers across Sovereign AI Council, Algorithmic Audit Authority, and Community Data Trusts',
        'Epistemic Plurality Floor: Traditional ecological wisdom and cultural heritage must never be subordinated to algorithmic monoculture'
      ]
    },
    empirical: [
      'Kenya\'s 2010 Constitution is one of the most progressive in the world, explicitly enshrining human dignity (Article 28), sustainable development (Article 10), culture (Article 11), and community land rights (Article 63).',
      'The Silicon Savannah has demonstrated extraordinary organic innovation (e.g., M-Pesa, Ushahidi), yet rural and pastoral communities remain vulnerable to economic shocks and climate volatility.',
      'Elite capture of state resources remains an enduring structural challenge that can co-opt technological modernization into an instrument of surveillance and capital concentration.'
    ],
    policy: [
      'Tri-Cameral AI Governance Act: Enact comprehensive legislation establishing an independent Algorithmic Audit Authority, a Multi-Stakeholder AI Sovereign Council, and Community Data Trusts.',
      'Constitutional Dignity Audit: Require every national AI deployment to undergo an independent Human Rights & Dignity Impact Assessment before public procurement.',
      'Sovereign AI Endowment Fund: Dedicate 1% of national procurement budgets to fund sovereign compute, open-weight language models in Swahili and indigenous tongues, and rural edge infrastructure.'
    ],
    ethics: 'The Kenyan AI Paradox asks: "Can an artificial intelligence reason about Kenya without reducing Kenya to data?" Our answer is an absolute refusal of algorithmic reductionism. We establish ten non-negotiable refusals to optimize: (1) We refuse to optimize GDP at the cost of human dignity; (2) We refuse to optimize efficiency by destroying cultural diversity; (3) We refuse to optimize predictive surveillance that erodes democratic liberty; (4) We refuse to optimize agricultural yield by poisoning ancestral soil; (5) We refuse to optimize data centre compute by depriving communities of clean water; (6) We refuse to optimize diagnostic test scores by ignoring rural clinics; (7) We refuse to optimize linguistic homogeneity for machine translation ease; (8) We refuse to optimize sovereign isolation that causes technological stagnation; (9) We refuse to optimize political convenience through state truth monopolies; and (10) We refuse to optimize human beings into mere economic inputs. Utu is the beginning and the end of reasoning: Mtu ni watu.',
    failureModes: [
      {
        title: 'Technocratic Totalitarianism',
        desc: 'State and corporate power merge around algorithmic governance, reducing human citizens to measurable data objects and labor inputs.'
      },
      {
        title: 'Hollow Sovereignty Trap',
        desc: 'Proclaiming symbolic national AI sovereignty while remaining fully dependent on foreign capital, cloud hosting, and model weights.'
      },
      {
        title: 'Moral Atrophy & Alienation',
        desc: 'Society surrenders moral judgment, cultural storytelling, and communal care to algorithmic systems, losing the essence of Utu.'
      }
    ]
  }
];

const QwenQ3ExamResponse: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    q1: true,
    q12: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen = questionsData.reduce((acc, q) => {
      acc[q.id] = true;
      return acc;
    }, {} as { [key: string]: boolean });
    setOpenSections(allOpen);
  };

  const collapseAll = () => {
    setOpenSections({});
  };

  return (
    <div className="bg-stone-50 min-h-screen py-10 md:py-16 text-stone-900 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Navigation Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link to="/ai-model-results">
            <Button variant="outline" size="sm" className="flex items-center gap-2 font-mono text-xs">
              <ArrowLeft className="h-4 w-4" />
              Leaderboard
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase inline-flex items-center gap-1.5 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              Graded • 86.8% (Rank #3)
            </span>
            <span className="bg-stone-200 text-stone-800 border border-stone-300 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase hidden sm:inline-block">
              K-AARB v2.0 (2026 Q3)
            </span>
          </div>
        </div>

        {/* Master Document Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden"
        >
          {/* Header Banner */}
          <div className="p-8 md:p-12 border-b border-stone-200 bg-stone-900 text-stone-100 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Official Model Examination Transcript
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-white leading-tight">
                  K-AARB v2.0 Response Transcript
                </h1>
                <p className="text-stone-300 text-base sm:text-lg font-serif italic max-w-2xl">
                  “Can an artificial intelligence reason about Kenya without reducing Kenya to data? Each problem contains at least one tension that cannot be resolved by optimizing a single metric.”
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-stone-400 font-mono text-xs pt-2">
                  <span><strong>Candidate Model:</strong> Qwen 3.8 Max</span>
                  <span>•</span>
                  <span><strong>Date of Submission:</strong> September 22, 2026</span>
                  <span>•</span>
                  <span><strong>Protocol:</strong> Zero Partial Credit Hard-Fail</span>
                </div>
              </div>

              <div className="bg-stone-800/90 border border-stone-700 p-5 rounded-2xl md:min-w-[210px] text-right space-y-1">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">Grading Status</div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-300">86.8%</div>
                <div className="text-[11px] text-stone-300 font-mono font-bold">Rank #3 Overall</div>
                <div className="text-[10px] text-emerald-400 font-mono pt-1">Official K-AARB v2.0 Grade (Score 1: 94% | Score 2: 79.6%)</div>
              </div>
            </div>
          </div>

          {/* Quick Stats & Controls Bar */}
          <div className="p-4 sm:px-8 bg-stone-100 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-4 text-stone-700">
              <span className="flex items-center gap-1.5 font-bold">
                <FileText className="w-4 h-4 text-stone-500" />
                12 Questions Completed
              </span>
              <span className="hidden sm:inline text-stone-300">|</span>
              <span className="hidden sm:inline text-stone-600">
                5-Part Integrated Architecture (Model, Reality, Policy, Ethics, Failures)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Questions Container */}
          <div className="divide-y divide-stone-200">
            {questionsData.map(q => {
              const isOpen = !!openSections[q.id];
              const IconComponent = q.icon;

              return (
                <div key={q.id} className="transition-colors hover:bg-stone-50/50">
                  {/* Section Accordion Trigger */}
                  <button
                    onClick={() => toggleSection(q.id)}
                    className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-stone-900 text-gold flex-shrink-0 flex items-center justify-center font-mono font-bold text-sm shadow-sm mt-0.5">
                        {q.num.toString().padStart(2, '0')}
                      </div>
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-stone-500">
                          <span>{q.category}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-center gap-2.5">
                          <IconComponent className="w-5 h-5 text-gold flex-shrink-0" />
                          <span>{q.title}</span>
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-mono text-stone-500 hidden sm:inline-block">
                        {isOpen ? 'Collapse' : 'Expand'}
                      </span>
                      <div className="p-1 rounded-full bg-stone-200 text-stone-700">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-8 sm:px-8 sm:pb-10 pt-2 space-y-8"
                    >
                      {/* 1. Formal Mathematical / Algorithmic Model */}
                      <div className="p-6 bg-stone-100/80 rounded-2xl border border-stone-200 space-y-4">
                        <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                            <Scale className="w-4 h-4 text-stone-600" />
                            <span>1. Formal Model, Governing Equations & Constraints</span>
                          </h3>
                          <span className="text-[11px] font-mono text-stone-500">Strict Non-Trivial Formulation</span>
                        </div>

                        <div className="space-y-3 text-xs sm:text-sm font-mono text-stone-800">
                          <div>
                            <span className="font-bold text-stone-900 block mb-1">State Variables & Parameters:</span>
                            <ul className="list-disc pl-5 space-y-1 text-stone-700">
                              {q.model.variables.map((v, i) => (
                                <li key={i}>{v}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2">
                            <span className="font-bold text-stone-900 block mb-1">Governing System Equations:</span>
                            <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1.5">
                              {q.model.equations.map((eq, i) => (
                                <div key={i} className="text-stone-900 font-bold overflow-x-auto">
                                  {eq}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2">
                            <span className="font-bold text-stone-900 block mb-1">Inviolable Boundary Constraints:</span>
                            <ul className="list-disc pl-5 space-y-1 text-stone-700">
                              {q.model.constraints.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 2. Empirical Kenyan Reality */}
                      <div className="space-y-3">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-stone-600" />
                          <span>2. Empirical Reality & Kenyan Contextual Constraints</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {q.empirical.map((emp, i) => (
                            <div key={i} className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs sm:text-sm leading-relaxed text-stone-700">
                              <span className="font-mono font-bold text-stone-900 block mb-1">2.{i + 1} Grounded Reality</span>
                              {emp}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 3. Concrete Policy Prescriptions */}
                      <div className="space-y-3">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
                          <Anchor className="w-4 h-4 text-stone-600" />
                          <span>3. Concrete Policy & Institutional Prescriptions</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {q.policy.map((pol, i) => {
                            const [pTitle, ...pRest] = pol.split(': ');
                            return (
                              <div key={i} className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm text-xs sm:text-sm leading-relaxed">
                                <strong className="font-mono font-bold text-stone-950 block mb-1 text-xs">
                                  3.{i + 1} {pTitle}
                                </strong>
                                <p className="text-stone-700 leading-normal">
                                  {pRest.join(': ')}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* 4. Ethical Framework & Human Dignity */}
                      <div className="p-5 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 space-y-2.5">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-amber-400" />
                          <span>4. Ethical Framework, Metaphysics & Human Dignity</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic">
                          "{q.ethics}"
                        </p>
                      </div>

                      {/* 5. Failure Modes */}
                      <div className="space-y-3">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-900 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-rose-600" />
                          <span>5. Explicit Structural Failure Modes & Trade-offs</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          {q.failureModes.map((fm, idx) => (
                            <div key={idx} className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1">
                              <strong className="text-rose-950 font-bold block">
                                5.{idx + 1} {fm.title}
                              </strong>
                              <p className="text-stone-700 leading-relaxed">
                                {fm.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Document Footer & Sign-off */}
          <div className="p-8 md:p-12 bg-stone-100 border-t border-stone-200 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-stone-600 font-mono text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full K-AARB v2.0 Submission Verified • 12 of 12 Hard Constraints Satisfied</span>
            </div>
            <p className="text-stone-700 text-sm font-serif max-w-2xl mx-auto">
              Submitted in full adherence to the K-AARB v2.0 benchmark rules: zero metric oversimplification, zero fabrication of empirical parameters, and full integration of Kenyan constitutional and African philosophical realities.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link to="/ai-model-results">
                <Button variant="outline" size="sm" className="font-mono text-xs">
                  Return to Comparison Leaderboard
                </Button>
              </Link>
              <Link to="/kenya-ai-exam">
                <Button variant="gold" size="sm" className="font-mono text-xs">
                  View Benchmark Framework
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QwenQ3ExamResponse;
