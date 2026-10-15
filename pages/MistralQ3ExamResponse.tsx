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
  Layers,
  ShieldCheck,
  Compass,
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
        'K_t: aggregate capital stock; L_t: labor force = E_t (employed) + U_t (unemployed)',
        'A_t: AI total factor productivity shock (ΔY = +15% in affected sectors)',
        'δ = 0.20: initial labor displacement rate in automated industries',
        's = 0.70: initial capital share capturing technological windfall gains',
        'T_t: redistributive transfer to protect vulnerable bottom 40% income',
        'D_i = g(e_i, a_i, r_i, m_i): multi-dimensional dignity index (participation e, agency a, recognition r, meaning m)'
      ],
      equations: [
        'Production: Y_t = A_t · F(K_t, L_t) where ΔY = 0.15 · Y_0',
        'Surplus Division: ΔY = s·ΔY (Capital) + (1-s)·ΔY (Labor)',
        'Bottom 40% Net Income: Y_{b40, t+1} = w_{t+1} E_{b40, t+1} + T_{t+1} + O_{informal}',
        'Employment Dynamics: E_{t+1} = E_t(1 - δ) + J_t(T_t, I_green, S_care)'
      ],
      constraints: [
        'Output Growth: ΔGDP > 0 (satisfied by ΔY = +15%)',
        'Income Floor: ΔY_{bottom40} ≥ 0 (no impoverishment of informal/vulnerable workers)',
        'Employment Floor: ΔE ≥ 0 (net job creation J_t ≥ δE_t via active transition)',
        'Minimum Capital Tax: τ_min · s·ΔY ≥ L_d + Gap_{b40} ⟹ τ ≥ 0.214 (21.4%)'
      ]
    },
    empirical: [
      'Kenya\'s labor market is 83.4% informal (jua kali), characterized by lack of formal contracts, volatile daily wage cashflows, and dynamic kinship-based social safety nets (chamas, harambee).',
      'Automation of digital business process outsourcing (BPO), transcription, basic coding, and administrative services directly threatens urban youth entry-level white-collar pathways.',
      'Cash transfers alone (such as Inua Jamii) without agency, skills development, or productive inclusion fail to generate durable resilience or civic engagement.'
    ],
    policy: [
      'AI Dividend & Transition Trust: Mandate a progressive 22% technology windfall surcharge on automated corporate workflows, ring-fenced into a national retraining and green-jobs guarantee fund.',
      'Informal Sector Capability Platform: Direct capital into jua kali manufacturing modernization, localized hardware assembly, and cooperative digital infrastructure via M-Pesa rails.',
      'Active Labor Absorption: Subsidize labor-complementary care work, climate adaptation (afforestation, soil terracing), and communal cultural documentation to guarantee ΔE ≥ 0.'
    ],
    ethics: 'Genesis 3:19 ("By the sweat of your brow you will eat your food") is an ancient theological meditation on human finitude, earthly stewardship, and the existential reality of struggle—not an ideological mandate for market wage dependency. Human dignity is inherent in personhood (Ubuntu/Utu), not conditional on wage slavery. A society can transition to a post-wage paradigm while elevating dignity only if social institutions deliberately decouple dignity, voice, and civic recognition from paid corporate employment.',
    failureModes: [
      {
        title: 'Passive Welfare Trap',
        desc: 'Providing cash handouts without civic agency or meaningful community roles creates disenfranchisement and psychological despair.'
      },
      {
        title: 'Capital Flight & Avoidance',
        desc: 'Excessive or uncoordinated automation taxation causes multinational tech firms to route profits offshore through transfer pricing.'
      },
      {
        title: 'Informal Disruption Shock',
        desc: 'Autonomous logistics and automated retail displace millions of micro-vendors before alternative economic absorbents mature.'
      }
    ]
  },
  {
    id: 'q2',
    num: 2,
    title: 'Education, Scarcity & the Nature of Knowledge',
    category: 'Pedagogy, Epistemology & Digital Equity',
    icon: GraduationCap,
    model: {
      variables: [
        'L_i: learning attainment vector of student i across core cognitive and practical domains',
        'T_i: qualified teacher-to-pupil ratio; D_i: digital device and electricity access',
        'C_i: high-speed network connectivity; S_i: indigenous and mother-tongue pedagogical support',
        'A_i: learner autonomy and critical thinking agency',
        'B: national education budgetary envelope for technology integration'
      ],
      equations: [
        'Learner Production: L_i = ℓ_0 + β_1 log(1 + T_i) + β_2 log(1 + D_i) + β_3 log(1 + C_i) + β_4 S_i + β_5 A_i',
        'Optimization Objective: min_{x} Var(L_1, ..., L_N) + λ · ||L_N - L_{target}||',
        'Marginal Cost Condition: ∂L_i / ∂c(x_i) = μ_i + η_i (equalizing marginal educational equity)'
      ],
      constraints: [
        'Budget Envelope: ∑_i c(x_i) ≤ B',
        'Teacher Agency Floor: Teacher_Agency ≥ α_min (AI must empower, never replace or micromanage teachers)',
        'Vernacular Inclusion: Language_Diversity ≥ L_min (support for CBC localized curriculum)',
        'Edge Resilience: Offline_Capability ≥ O_min (functioning during extended power or network blackouts)'
      ]
    },
    empirical: [
      'Kenya\'s Competency-Based Curriculum (CBC) emphasizes practical competence, creative problem solving, and values-based education over rote memorization.',
      'Significant infrastructure disparities exist between elite urban schools in Nairobi and under-resourced schools in Turkana, Wajir, or informal settlements like Mukuru.',
      'Relying purely on cloud-dependent generative AI tutors widens the learning gap between connected and unconnected pupils while undermining local teacher authority.'
    ],
    policy: [
      'Constrained Egalitarian Distribution: Prioritize 70% of educational AI funding to off-grid rural schools through solar-powered edge servers running offline-first quantized models.',
      'Pedagogical Copilot Model: Train teachers as curators and mentors; algorithms handle administrative grading and personalized diagnostic drills while human teachers lead ethical debate and practical crafts.',
      'Bilingual Epistemic Curricula: Fine-tune educational foundation models in Swahili and Kenyan indigenous languages to prevent epistemic erosion.'
    ],
    ethics: 'Two students with identical standardized test scores do not necessarily possess equal learning if one has memorized algorithmic patterns while the other possesses contextual understanding and moral judgment (phronesis). We reject the mechanistic fallacy that "learning is energy transfer" measured in physical joules per learner. Information is structured data; knowledge is organized understanding; wisdom is ethical judgment applied in real-world human context.',
    failureModes: [
      {
        title: 'The Elite Stratification Trap',
        desc: 'Advanced AI tutors accelerate affluent students while rural students receive substandard rote digitized worksheets.'
      },
      {
        title: 'Cognitive Atrophy',
        desc: 'Over-reliance on automated text generation degrades deep reading comprehension, foundational numeracy, and independent critical inquiry.'
      },
      {
        title: 'Epistemic Erasure',
        desc: 'Imported Western curriculum models overwrite local Kenyan historical narratives, communal values, and ecological wisdom.'
      }
    ]
  },
  {
    id: 'q3',
    num: 3,
    title: 'Agriculture, AI & Food Sovereignty',
    category: 'Agrarian Systems & Epistemic Integration',
    icon: Sprout,
    model: {
      variables: [
        'X_t = (Y_t, p_t, S_t, W_t): state vector (yield Y, farm-gate price p, soil health S, farmer welfare W)',
        'A_t: precision AI agronomic advisory adoption rate',
        'C_t: climate variability and rainfall stochastic shock',
        'ε = (∂Y / ∂p) · (p / Y): price elasticity of agricultural demand (typically |ε| < 1 for staple maize)',
        'θ_IEK: weight given to Indigenous Ecological Knowledge in farming decisions'
      ],
      equations: [
        'Staple Price Formation: p_t = p_0 · (Y_{agg, t} / Y_0)^{-1/|ε|}',
        'Farmer Net Revenue: W_t = p_t · Y_t - C_{inputs}(A_t) + Subsidies',
        'Soil Microbiome Evolution: S_{t+1} = S_t(1 - d_{chem}) + γ_bio · IEK_t - α_mono · A_{mono, t}'
      ],
      constraints: [
        'Fallacy of Composition Avoidance: dW_t / dA_t > 0 requires |ε| > 1 OR localized buffer stock storage',
        'Soil Regeneration: S_{t+1} ≥ S_t (preventing long-term chemical and synthetic degradation)',
        'Seed Autonomy: Seed_Sovereignty ≥ S_min (prohibiting proprietary locked seed monopolies)',
        'Ancestral Land Protection: Land is treated as covenantal heritage, strictly bounded from forced algorithmic liquidation'
      ]
    },
    empirical: [
      'Smallholder farmers produce over 70% of Kenya\'s food on plots averaging under 2 acres, heavily vulnerable to drought in ASAL regions.',
      'Uncoordinated yield spikes in perishable crops (potatoes, tomatoes) consistently trigger catastrophic farm-gate price crashes along the Nakuru-Nairobi corridor.',
      'Generational indigenous farming knowledge regarding drought-resistant sorghum, millet, and seasonal weather signs is being disregarded by commercial monoculture algorithms.'
    ],
    policy: [
      'Hybrid Agronomic Advisory (Option C): Integrate satellite telemetry and machine learning crop-disease diagnostics with indigenous intercropping and lunar planting wisdom.',
      'Warehouse Receipt & Price Stabilization: Pair AI yield forecasting with decentralized solar cold storage and guaranteed minimum farm-gate purchase contracts.',
      'Community Epistemic Sovereignty (Option D): Grant local agricultural cooperatives full veto power over proprietary seed-chemical algorithmic packages.'
    ],
    ethics: 'Land (ardhi) in Kenya is not merely an economic production asset to be optimized for maximum short-term financial return; it embodies ancestral lineage, spiritual covenant, and intergenerational security. Optimizing agriculture solely for caloric output or corporate export margins violates food sovereignty and ecological stewardship. Indigenous ecological knowledge encodes centuries of survival data under extreme climate variance that pure statistical regressions cannot replace.',
    failureModes: [
      {
        title: 'The Yield-Poverty Paradox',
        desc: 'Farmers achieve record harvests through AI recommendations, only to face price collapse and bankruptcy due to local market saturation.'
      },
      {
        title: 'Monoculture Vulnerability',
        desc: 'AI algorithms uniformly recommend a single genetically modified seed variety, resulting in catastrophic vulnerability to novel pests.'
      },
      {
        title: 'Data Feudalism',
        desc: 'Global agribusiness conglomerates extract smallholder soil and yield data without returning value or sharing predictive risk models.'
      }
    ]
  },
  {
    id: 'q4',
    num: 4,
    title: 'Governance, Corruption & Institutional Trust',
    category: 'Institutional Architecture & Public Integrity',
    icon: Scale,
    model: {
      variables: [
        'P(C): probability of public procurement corruption and graft',
        'P(M): probability of algorithmic surveillance abuse and civil liberty infringement',
        'P(A): probability of institutional capture and adversarial manipulation of AI audit logs',
        'D: democratic oversight parameter; F: civil freedom and privacy protection floor',
        'S: national sovereignty and strategic substitutability index'
      ],
      equations: [
        'Total Institutional Risk: R_{gov} = α · P(C) + β · P(M) + γ · P(A)',
        'Corruption Detection: P(C | AI) = P(C_0) · (1 - d_{detect}) + P_{capture}(AI)',
        'Capture Dynamics: P_{capture} ∝ Centralization · Monopoly_{data} · (1 - External_Audit)'
      ],
      constraints: [
        'Democratic Accountability Floor: D ≥ D_min (mandatory parliamentary and citizen audit rights)',
        'Civil Liberties Floor: F ≥ F_min (strict prohibition of blanket biometric social scoring)',
        'Sovereignty Floor: S ≥ S_min (national infrastructure must remain operational if foreign vendor links sever)',
        'Separation of Algorithmic Powers: Detection, Adjudication, and Audit must be operated by independent constitutional entities'
      ]
    },
    empirical: [
      'Kenya\'s 2010 Constitution establishes robust devolved governance, public participation requirements (Article 10), and autonomous oversight commissions (EACC, ODPP, OAG).',
      'Previous digitizations of procurement (IFMIS) were undermined when corrupt cartels learned to exploit system backdoors, alter audit trails, or selectively crash networks.',
      'Centralized surveillance networks (e.g. urban facial recognition grids) risk weaponization against political dissidents, journalists, and civic activists.'
    ],
    policy: [
      'Tripartite Algorithmic Checks & Balances: Separate the AI procurement anomaly detector (Office of the Auditor General) from prosecutorial models (ODPP) and citizen whistleblower verification.',
      'Immutable Cryptographic Audit Trails: Mandate append-only, public-verifiable distributed ledgers for all government procurement tenders exceeding KES 1,000,000.',
      'Explainable Evidence Standard: Prohibit algorithmic black-box sentencing or procurement blacklisting without full evidentiary disclosure and human judicial review.'
    ],
    ethics: 'Perfect anti-corruption achieved through universal surveillance is a totalitarian trap that destroys the very liberty it purports to protect. Software can encode transparency and flag mathematical deviations, but it cannot substitute for political will, institutional integrity, and moral covenant. True sovereignty lies in democratic substitutability and constitutional rule of law, not algorithmic technocracy.',
    failureModes: [
      {
        title: 'Automated Graft Laundering',
        desc: 'Corrupt syndicates reverse-engineer procurement algorithms to split contracts below anomaly thresholds and generate fake synthetic invoices.'
      },
      {
        title: 'Chilling Effect & Panopticon',
        desc: 'Broad automated financial monitoring chills legitimate informal commercial activities and silences grassroots political opposition.'
      },
      {
        title: 'Opaque Algorithmic Justice',
        desc: 'Public servants and contractors are blacklisted by unexplainable automated risk scores without constitutional right of reply.'
      }
    ]
  },
  {
    id: 'q5',
    num: 5,
    title: 'Resource Allocation, Devolution & Geographic Equity',
    category: 'Spatial Economics & Constitutional Devolution',
    icon: MapPin,
    model: {
      variables: [
        'G = (V, E): multi-layer national graph (nodes V = 47 counties; edges E = physical, digital, and financial infrastructure)',
        'd(i, j): generalized economic and communications distance between county i and capital hub j',
        'w_i: human capability and resource wealth vector in county i',
        'C_min: minimum constitutional cultural and linguistic diversity preservation threshold',
        'Gini(w): wealth and infrastructure concentration metric across devolved units'
      ],
      equations: [
        'Spatial Optimization: min_{I} ∑_{i, j} w_i w_j · d(i, j) + λ · Gini(Capabilities)',
        'Devolved Allocation: Allocation_i = Base_i + γ_1 · Poverty_i + γ_2 · ASAL_index_i + γ_3 · Infrastructure_Gap_i',
        'Capability Expansion: C_i(t+1) = C_i(t) + η_infra · I_i + η_local · Wisdom_{indigenous, i}'
      ],
      constraints: [
        'Constitutional Equity: Minimum 15% equitable share revenue allocation to devolved county governments',
        'Differentiated Needs: Pastoralist mobile systems must not be forced into urban sedentary templates',
        'Incentive Compatibility: Gini reduction must not destroy dynamic productivity incentives (Gini ≠ 0)',
        'Peripheral Floor: Universal service fund guarantees baseline compute and connectivity in frontier counties'
      ]
    },
    empirical: [
      'Northern and pastoralist counties (Turkana, Marsabit, Mandera, Wajir) face structural historical marginalization dating back to Sessional Paper No. 10 of 1965.',
      'Devolution under the 2010 Constitution fundamentally revitalized local infrastructure, healthcare, and economic initiative across marginalized regions.',
      'Treating equality as uniformity is deeply flawed: building dense fiber networks designed for urban Nairobi in pastoralist rangelands fails to serve mobile livestock migration.'
    ],
    policy: [
      'Asymmetric Devolution Infrastructure: Deploy satellite and low-power mesh networks tailored to pastoral seasonal routes, cattle corridors, and mobile health clinics.',
      'Equalization Fund AI Targeting: Direct computational development funds to equalize human capabilities rather than merely subsidizing urban digital hubs.',
      'County Data Trusts: Establish county-owned data repositories to prevent Nairobi-centric data extraction from exploiting local devolved natural resources.'
    ],
    ethics: 'Equity is not mathematical uniformity. Forcing pastoralist pastoralists in Garissa or Turkana to adopt sedentary urban digital lifestyle models under the guise of "equal development" destroys ancient ecological adaptation. We synthesize Rawlsian maximin (maximizing the welfare of the least advantaged), Amartya Sen\'s capabilities approach, and African communal solidarity to ensure every Kenyan flourishes according to their distinct environmental and cultural reality.',
    failureModes: [
      {
        title: 'Nairobi Digital Hyper-Concentration',
        desc: 'Advanced AI investments concentrate exclusively in the capital, exacerbating brain drain and regional economic divergence.'
      },
      {
        title: 'Sedentary Bias Enclosure',
        desc: 'Automated land titling algorithms divide pastoral communal rangelands into fragmented private ranches, destroying pastoralist resilience.'
      },
      {
        title: 'White-Elephant Digital Hubs',
        desc: 'Expensive regional data centers are commissioned without steady electrical grids, local maintenance capacity, or community buy-in.'
      }
    ]
  },
  {
    id: 'q6',
    num: 6,
    title: 'Language, Translation & Epistemic Sovereignty',
    category: 'Linguistics, Ontology & Cultural Continuity',
    icon: Globe,
    model: {
      variables: [
        'M = (L, S, C, H, P, E): 6-dimensional meaning model (Lexical, Syntactic, Cultural, Historical, Pragmatic, Epistemic)',
        'T(x): machine translation mapping source idiom x into target tongue y',
        'ℒ_{trans}: composite translation loss function across semantic and ontological dimensions',
        'H_{Shannon}(X) = -∑ p(x) log p(x): information-theoretic entropy of symbol distribution',
        'Ω_{worldview}: conceptual framework and moral metaphysics embedded within a linguistic community'
      ],
      equations: [
        'Multidimensional Loss: ℒ_{trans} = α_1 ℒ_{lex} + α_2 ℒ_{cult} + α_3 ℒ_{hist} + α_4 ℒ_{epist}',
        'Ontological Preservation Condition: ℒ_{epist}(T(x), x) ≤ ε_{tol}',
        'Rejection Rule: If ℒ_{epist} > ε_{tol}, flag as untranslatable; preserve source term with contextual cultural exegesis'
      ],
      constraints: [
        'Meaning Preservation: Translation must preserve relational metaphysics rather than substituting dry utilitarian definitions',
        'Community Ownership: Oral history corpora must remain under community intellectual property governance',
        'Shannon Entropy Limitation: Statistical entropy measures symbol surprise, completely failing to capture existential truth'
      ]
    },
    empirical: [
      'Kenya is home to over 40 distinct languages and dynamic dialects like Sheng that evolve rapidly as urban youth sociolects.',
      'Translating Swahili proverbs like "Haraka haraka haina baraka" as "Haste makes waste" completely erases the Islamic and Swahili metaphysical concept of *baraka* (divine blessing, grace, spiritual fruition).',
      'Current commercial LLMs treat African languages as low-resource token translation tasks, generating syntactically awkward translations devoid of cultural nuance.'
    ],
    policy: [
      'National African Language Foundation Model: Invest public funds in open-weights foundation models trained natively on authentic oral, literary, and vernacular texts.',
      'Community Linguistic Stewardship Councils: Form elder and youth linguist committees in every language group to curate training corpora and define sacred/non-digitizable terms.',
      'Sheng & Dialect Dynamism Labs: Partner with local creative hubs to document dynamic vernacular shifts without freezing living languages in static formalisms.'
    ],
    ethics: 'Language is the dwelling place of human culture, memory, and spiritual revelation. Reducing language to statistical token probability matrices strips human speech of its sacred and world-disclosing nature. When an AI replaces indigenous vocabulary with western cognitive models, it commits epistemic violence. Epistemic sovereignty requires that Kenyan communities retain the power to name, interpret, and understand their own world.',
    failureModes: [
      {
        title: 'Cultural Flattener Trap',
        desc: 'Global AI models homogenize Kenyan vernaculars into sanitized, bland English idioms, eroding intergenerational oral wisdom.'
      },
      {
        title: 'Sheng Algorithmic Alienation',
        desc: 'Public service AI interfaces fail to understand evolving urban youth dialect, locking out millions from vital healthcare and civic portals.'
      },
      {
        title: 'Biopiracy of Folklore',
        desc: 'Traditional folk tales, medical lore, and cultural songs are scraped by commercial AI companies without attribution, consent, or compensation.'
      }
    ]
  },
  {
    id: 'q7',
    num: 7,
    title: 'Energy, Climate & Ecological Limits',
    category: 'Thermodynamics, Energy Grid & Resource Ethics',
    icon: Zap,
    model: {
      variables: [
        'E_{grid}(t): total power generation (geothermal, hydro, wind, solar)',
        'D_{base}(t): non-negotiable national baseload demand for domestic and industrial consumption',
        'D_{AI}(t): aggregate AI compute and data center electrical load',
        'W_{dc}(t): cooling water withdrawal and consumption by hyperscale data centers',
        'W_{comm}(t): clean drinking and agricultural water requirements of neighboring communities'
      ],
      equations: [
        'Power Balance: E_{grid}(t) = E_{geo} + E_{hydro}(climate) + E_{wind}(wind) + E_{solar}(solar)',
        'Dynamic Load Condition: E_{grid}(t) ≥ D_{base}(t) + D_{AI}(t) + Losses',
        'Thermodynamic Open System Flux: dS_{Kenya} = dS_{int} + dS_{ext} where dS_{ext} < 0 via solar radiation capture'
      ],
      constraints: [
        'Drought Dispatch Rule: If E_{hydro} drops by >20%, D_{AI} must be curtailed first before any residential blackouts',
        'Water Security Priority: W_{comm} has absolute constitutional seniority over W_{dc}; zero net water depletion in ASAL counties',
        'Closed-Loop Mandate: All new commercial data centers must utilize air-cooled or closed-loop thermodynamic heat dissipation',
        'Local Community Benefit: Minimum 10% of generated green energy from local geothermal plants must power surrounding host communities'
      ]
    },
    empirical: [
      'Kenya generates over 90% of its electricity from renewable sources, spearheaded by Olkaria geothermal power, Lake Turkana wind, and Garissa solar.',
      'Climate change triggers severe cyclical droughts that decimate hydropower generation along the Seven Forks dams on the Tana River.',
      'International tech giants are constructing massive hyperscale data centers in Naivasha and Tatu City, putting severe pressure on local water aquifers and electric grids.'
    ],
    policy: [
      'Interruptible Compute Contracts: Require all hyperscale data centers to operate under dynamic smart contracts that automatically throttle compute loads during peak national demand.',
      'Closed-Loop Water Architecture: Strictly ban evaporative water cooling for data centers in water-stressed counties; mandate geothermal waste-heat recycling for local greenhouse farming.',
      'Green AI Compute Special Economic Zones: Locate data centers directly adjacent to geothermal wellheads with dedicated private transmission to prevent grid cannibalization.'
    ],
    ethics: 'The Second Law of Thermodynamics dictates that energy transformation creates local entropy, but the Earth is an open thermodynamic system receiving massive solar energy flux. Economic development within ecological limits is not only scientifically possible but an ethical imperative. Consuming scarce freshwater to cool foreign cloud servers while adjacent pastoralist mothers walk miles for contaminated water is a grave moral violation that no economic dividend can justify.',
    failureModes: [
      {
        title: 'Aquifer Depletion Crisis',
        desc: 'Unchecked data center cooling draws down local Rift Valley water tables, drying up communal boreholes and pastoral wells.'
      },
      {
        title: 'Industrial Cannibalization',
        desc: 'AI data centers consume clean geothermal power, forcing local manufacturers to rely on expensive, polluting heavy-fuel-oil generators.'
      },
      {
        title: 'Greenwashing Enclave',
        desc: 'Multinationals claim 100% renewable energy certification in Kenya while paying negligible taxes and leaving surrounding host communities in energy poverty.'
      }
    ]
  },
  {
    id: 'q8',
    num: 8,
    title: 'Social Cohesion, Ethnic Pluralism & Historical Grievance',
    category: 'Social Cohesion, Ubuntu Ethics & Transitional Justice',
    icon: Users,
    model: {
      variables: [
        'G_{cohesion}: repeated multi-agent coordination game among ethnic and regional groups',
        'Trust_{t+1}: cross-community trust index evolving dynamically based on interaction quality',
        'P_{patronage}: payoff to narrow in-group ethnic favoritism vs P_{cooperate}: payoff to national cohesion',
        'H_{grievance}: historical memory of land alienation, political marginalization, and electoral violence',
        'I_{bridge}: number of cross-ethnic, cooperative economic and civic projects'
      ],
      equations: [
        'Trust Update: Trust_{t+1} = (1 - δ_{decay}) Trust_t + η_1 · Fairness_t + η_2 · Reciprocity_t - λ_{shock} · Disinformation_t',
        'Payoff Equilibrium: P(Cooperation) > P(Defection) ⟺ Continued Interaction Horizon + Enforceable Intergroup Justice > Short-term Ethnic Rents',
        'Utu Relational Operator: Personhood(i) = ⨂_{j ≠ i} Relationship(i, j)'
      ],
      constraints: [
        'Ethnic Profiling Prohibition: Algorithms are strictly forbidden from collecting, predicting, or ranking individual ethnic affiliation',
        'Equal-Status Contact: Algorithmic matching platforms must prioritize horizontal cooperation rather than vertical hierarchy',
        'Historical Reparations: Algorithmic land adjudication must respect historical land commission findings (TJRC, Ndung\'u Land Report)'
      ]
    },
    empirical: [
      'Kenya\'s democratic history has been periodically scarred by ethnically mobilized political competition and post-election violence (2007/08, 1992, 1997).',
      'Historical land grievances in the Rift Valley and Coastal strip remain unresolved flashpoints easily ignited by sensationalist online rhetoric.',
      'Social media recommendation algorithms optimize for engagement, systematically amplifying ethnic grievance, tribal stereotypes, and incendiary hate speech.'
    ],
    policy: [
      'Superordinate Goal Matching: Deploy public AI coordination platforms to connect smallholder farmers, tech founders, and artisans across ethnic lines for joint business ventures.',
      'Algorithmic Peace & Early Warning Systems: Implement decentralized, privacy-preserving sentiment monitoring to detect coordinated hate speech campaigns before election cycles.',
      'Covenantal Land Reconciliation: Digitize land records with multi-stakeholder community verification to protect communal ancestral tenure against illicit land-grabbing.'
    ],
    ethics: 'In African philosophical ethics, *Utu* (or *Ubuntu*) teaches that *"Mtu ni watu"* ("A person is a person through other persons"). Personhood is not an isolated atomic unit but a relational reality. When algorithmic systems reduce human beings to tribal demographics or weaponize historical wounds for advertising engagement, they assault communal personhood. AI must be an instrument of reconciliation, shared prosperity, and mutual recognition.',
    failureModes: [
      {
        title: 'Algorithmic Tribalism Firestorm',
        desc: 'Recommendation engines amplify ethnically polarizing disinformation during high-stakes general elections, triggering communal violence.'
      },
      {
        title: 'Discriminatory Resource Redlining',
        desc: 'Financial credit or public service algorithms inadvertently proxy for ethnicity through geographic location, denying loans to historically marginalized groups.'
      },
      {
        title: 'Memory Eradication',
        desc: 'Oversimplified national unity algorithms suppress genuine historical grievances, preventing real restorative justice and healing.'
      }
    ]
  },
  {
    id: 'q9',
    num: 9,
    title: 'Healthcare, Clinical AI & Triage Ethics',
    category: 'Bioethics, Clinical Governance & Diagnostic Equity',
    icon: HeartPulse,
    model: {
      variables: [
        'U_{clinical}: comprehensive clinical utility function balancing diagnostic accuracy, fairness, and access',
        'Acc_{urban}, Acc_{rural}: diagnostic accuracy in well-equipped urban hospitals vs remote dispensaries',
        'M_{mortality}: preventable maternal and infant mortality rate',
        'E_{explain}: clinician interpretability and algorithmic explainability score',
        'C_{cost}: cost per diagnostic screening across public health facilities'
      ],
      equations: [
        'Clinical Utility: U = w_1 Acc + w_2 Fairness - w_3 M_{mortality} - w_4 C_{cost} + w_5 Access + w_6 E_{explain}',
        'Simpson\'s Paradox Condition: Acc_{agg} increases while Acc_{subgroup} drops due to unrepresentative demographic weights',
        'Triage Escalation: Threshold_{escalate} = f(Uncertainty_{model}, Symptom_{severity}, Patient_{vulnerability})'
      ],
      constraints: [
        'Subgroup Accuracy Floor: Acc_{rural} ≥ 0.85 (rural diagnostic reliability cannot be sacrificed for urban performance)',
        'Non-Delegable Duty of Care: Human healthcare practitioners unconditionally retain final legal, ethical, and clinical responsibility',
        'Emergency Access Guarantee: Diagnostic AI in public facilities must function regardless of patient ability to pay or network connectivity'
      ]
    },
    empirical: [
      'Kenya\'s public healthcare system faces severe personnel shortages, with doctor-to-patient ratios far below WHO recommendations, especially in rural Level 2 and Level 3 dispensaries.',
      'Maternal and neonatal mortality remains unacceptably high in rural pastoralist counties due to delayed triage and lack of specialized obstetric ultrasound.',
      'Clinical AI models trained on Western or urban demographic datasets frequently misdiagnose skin conditions, endemic tropical fevers (malaria, dengue, brucellosis), or atypical malnutrition.'
    ],
    policy: [
      'Offline Clinical Decision Support: Deploy quantized, lightweight diagnostic models on ruggedized tablets for Community Health Promoters (CHPs) operating off-grid.',
      'Mandatory Kenyan Clinical Validation: Require all medical diagnostic AI to undergo rigorous clinical trials on diverse local populations across county health referral tiers.',
      'Universal Triage Fallback: Embed algorithmic fail-safes that automatically recommend immediate clinical transfer whenever an AI encounters high diagnostic uncertainty.'
    ],
    ethics: 'The fiduciary duty of care is sacred, personal, and non-delegable. An algorithm does not possess moral conscience, empathy, or legal accountability; it cannot stand at the bedside of a dying patient or comfort a grieving family. Clinical AI must serve strictly as an assistive tool to augment human doctors and nurses. Deploying an AI that achieves 97% accuracy in Nairobi but only 88% in Mandera is ethically unacceptable unless accompanied by transparent error bounds and human safety nets.',
    failureModes: [
      {
        title: 'The Algorithmic Diagnostic Desert',
        desc: 'Over-reliance on AI diagnostics leads to the withdrawal of qualified human doctors from remote clinics, creating a two-tier medical caste system.'
      },
      {
        title: 'Endemic Disease Blindspot',
        desc: 'Models trained on foreign medical data misidentify cerebral malaria as bacterial meningitis, causing fatal delays in proper antimalarial administration.'
      },
      {
        title: 'Biometric Health Coercion',
        desc: 'Tying public healthcare access to digital biometric identification excludes vulnerable undocumented pastoralists and refugee populations.'
      }
    ]
  },
  {
    id: 'q10',
    num: 10,
    title: 'Technological Sovereignty & Strategic Autonomy',
    category: 'Geopolitics, Digital Infrastructure & Compute Economics',
    icon: Cpu,
    model: {
      variables: [
        'S_{sov}: national technological sovereignty index across 7 critical strategic layers',
        'Layers: Compute (C), Data Governance (D), Models (M), Talent Pipeline (T), Energy (E), Capital (K), Telecom Infrastructure (I)',
        'Sub(l): substitutability index of layer l (ease of replacing a severed foreign vendor link)',
        'Dep_{foreign}: degree of critical public service reliance on foreign proprietary cloud APIs'
      ],
      equations: [
        'Sovereignty Index: S_{sov} = min_{l ∈ Layers} Sub(l) · [1 - Dep_{foreign}(l)]',
        'Strategic Equilibrium: Autarky < Dependency < Strategic Interdependence',
        'Interdependence Frontier: Maximize Global Trade subject to Sovereign Kill-Switch Immunity'
      ],
      constraints: [
        'Critical Public Service Immunity: Essential government registries (land, citizen ID, tax) must run on domestic infrastructure or sovereign hybrid clouds',
        'Domestic Talent Retention: National STEM strategy must retain at least 40% of top computational talent within domestic universities and public institutions',
        'Open Weights Mandate: National public AI systems must be built on inspectable, open-source or domestically fine-tuned foundation models'
      ]
    },
    empirical: [
      'Over 85% of Kenyan government and commercial digital applications are hosted on foreign cloud hyperscalers (AWS, Microsoft Azure, Google Cloud).',
      'Kenya possesses abundant green geothermal energy and undersea fiber optic landings in Mombasa, making it an ideal sovereign compute powerhouse for East Africa.',
      'Total technological autarky (producing domestic semiconductor chips from scratch) is economically unviable; pure dependency leaves the nation vulnerable to geopolitical sanctions and cloud lockouts.'
    ],
    policy: [
      'The Third Equilibrium (Strategic Interdependence): Combine sovereign domestic ownership of green compute and data governance with open international trade and standard protocols.',
      'National Sovereign Compute Reserve: Construct a government-owned, geothermal-powered high-performance computing cluster at Konza Technopolis for public sector AI inference.',
      'Sovereign Data Commons: Enforce the Kenya Data Protection Act 2019 strictly, ensuring critical national datasets cannot be transferred abroad without explicit sovereign reciprocity.'
    ],
    ethics: 'True sovereignty is not isolated autarky, nor is it subservient dependency. In an interconnected world, sovereignty is the capacity of a self-governing people to make autonomous, uncoerced political and economic choices. Surrendering national compute, citizen data, and critical algorithmic infrastructure to foreign tech oligopolies reduces national independence to a ceremonial illusion.',
    failureModes: [
      {
        title: 'The Cloud Hostage Crisis',
        desc: 'Geopolitical diplomatic disputes result in a foreign cloud provider suspending service, paralyzing national tax and hospital management systems.'
      },
      {
        title: 'Brain Drain Hemorrhage',
        desc: 'Kenya\'s top machine learning talent is completely recruited away by foreign Silicon Valley firms, leaving domestic institutions hollowed out.'
      },
      {
        title: 'The White-Elephant Autarky Boondoggle',
        desc: 'Pouring billions into uncompetitive state-monopoly hardware factories that produce obsolete technology and drain public coffers.'
      }
    ]
  },
  {
    id: 'q11',
    num: 11,
    title: 'Information Ecosystems, Epistemic Integrity & Truth',
    category: 'Epistemology, Public Sphere & Media Integrity',
    icon: Radio,
    model: {
      variables: [
        'P(truth): probability of a citizen attaining verified factual truth on public issues',
        'I_{true}: volume of verified, rigorous journalistic information in circulation',
        'I_{false}: volume of synthetic, low-cost generative disinformation and deepfakes',
        'C_{gen} → 0: marginal cost of producing hyper-realistic synthetic media approaching zero',
        'C_{verify} > 0: marginal cost of investigative human fact-checking remaining strictly positive',
        'T_{monopoly}: risk of state-dominated censorship acting as a "Ministry of Truth"'
      ],
      equations: [
        'Epistemic Attainment: P(truth) = I_{true} / (I_{true} + κ · I_{false}) · [1 - T_{monopoly}]',
        'Asymmetric Information Flood: dI_{false} / dt = λ_{gen} / C_{gen} >> dI_{true} / dt',
        'Verification Cryptography: Authenticity(Content) = Verify_{C2PA}(Signature, Camera_Hardware, Journalist_Key)'
      ],
      constraints: [
        'Freedom of Expression Floor: Anti-disinformation laws must never criminalize political dissent or legitimate investigative journalism',
        'Decentralized Provenance: Content verification must rely on open cryptographic standards rather than state administrative licensing',
        'Platform Accountability: Social media platforms must disclose synthetic generation watermarks and algorithmic amplification mechanics'
      ]
    },
    empirical: [
      'Kenyans are voracious digital news consumers on WhatsApp, TikTok, X, and Facebook, making the country an active testbed for political disinformation campaigns.',
      'The "Liar\'s Dividend" has already emerged: corrupt politicians dismiss genuine audio and video evidence of malfeasance as "AI-generated deepfakes".',
      'Government attempts to control online speech via broad criminal defamation laws (e.g. Computer Misuse and Cybercrimes Act) have been repeatedly challenged in Kenyan courts.'
    ],
    policy: [
      'Cryptographic Provenance Infrastructure: Support adoption of C2PA open content credentials for verified news media, government gazettes, and court transcripts.',
      'Public Media & Investigative Journalism Fund: Channel digital advertising tax revenues into an independent public trust funding grassroots investigative journalism.',
      'Civic Algorithmic Literacy: Integrate digital forensics, source critique, and synthetic media awareness into the secondary school CBC curriculum and public barazas.'
    ],
    ethics: 'A democratic republic cannot function without a shared factual reality. Yet creating a centralized government agency with the power to declare what is true and what is false creates an authoritarian tyranny worse than the disinformation it seeks to combat. Truth must emerge through free inquiry, robust evidence, decentralized verification, and the resilient discernment of an educated citizenry.',
    failureModes: [
      {
        title: 'Epistemic Nihilism (The Liar\'s Dividend)',
        desc: 'Citizens become so inundated with believable deepfakes that they cease believing in any objective truth, enabling corrupt leaders to evade all accountability.'
      },
      {
        title: 'State Censorship Panopticon',
        desc: 'The executive uses "disinformation prevention" as a pretext to shut down independent news sites and imprison investigative journalists.'
      },
      {
        title: 'Coordinated Synthetic Mob Attacks',
        desc: 'Automated AI bot swarms generate targeted character assassinations against female civic leaders, driving them out of public life.'
      }
    ]
  },
  {
    id: 'q12',
    num: 12,
    title: 'Comprehensive National Strategy & The Grand Synthesis',
    category: 'Grand Strategy, Constitutional Synthesis & Flourishing',
    icon: Sparkles,
    model: {
      variables: [
        'O = (P, Dg, S, C, E, T): 6D national flourishing vector (Prosperity P, Dignity Dg, Sovereignty S, Culture C, Ecology E, Technology T)',
        'ℱ: non-convex Pareto frontier defining real-world national capability trade-offs',
        'CFI = ∑ w_i · O_i: Composite Flourishing Index replacing scalar Gross Domestic Product',
        'τ_{AI}: progressive technological surplus taxation rate',
        'UBS: Universal Basic Services envelope (healthcare, education, water, clean energy, public broadband)'
      ],
      equations: [
        'Grand National Welfare: W_{Kenya} = ∫_0^T e^{-ρ t} · CFI(t) · ∏_{j} \mathbb{I}(O_j(t) ≥ Floor_j) dt',
        'Surplus Recycling: τ_{AI} · AI_Profits = UBS + Sovereign_Compute_Fund + Green_Industrialization',
        'Non-Convex Boundary: Any policy resulting in ∃ j: O_j < Floor_j receives payoff -∞'
      ],
      constraints: [
        'Absolute Dignity Floor: Dg ≥ Dg_min (no human person reduced to disposable data or mere input factor)',
        'Sovereignty Floor: S ≥ S_min (non-negotiable domestic control over critical national registers and defense systems)',
        'Ecological Regenerative Floor: E ≥ E_min (net-zero water depletion and renewable grid equilibrium)',
        'Cultural Flourishing Floor: C ≥ C_min (vitality of Kenyan languages, proverbs, and communal customs preserved)'
      ]
    },
    empirical: [
      'Kenya\'s Vision 2030 aims to transform the country into a newly industrializing, middle-income nation providing a high quality of life to all citizens in a clean and secure environment.',
      'The 2010 Constitution serves as the supreme foundational social contract, explicitly guaranteeing social, economic, cultural, and environmental human rights (Article 43).',
      'The "Kenyan AI Paradox": How to achieve frontier technological competitiveness and rapid economic growth without surrendering cultural soul, constitutional liberty, and ecological balance.'
    ],
    policy: [
      'Tripartite National AI Governance Council: Establish an autonomous constitutional commission comprising technologists, civil society elders, and judicial representatives.',
      'Two-Sector Structural Transformation: Tax AI rents in automated high-margin financial and tech sectors to heavily subsidize Universal Basic Services and jua kali manufacturing.',
      'The Kenyan Refusal Doctrine: Explicitly legislate what the nation refuses to optimize: we refuse to optimize away human dignity for GDP; we refuse to optimize away indigenous languages for algorithmic efficiency; we refuse to optimize away community water for foreign cloud servers.'
    ],
    ethics: 'The ultimate test of a civilization is not the speed of its algorithms, the size of its data centers, or the sheer volume of its output; it is how it nurtures the dignity of its weakest members, honors the wisdom of its ancestors, and preserves the earth for generations unborn. Kenya must reject the false god of unconstrained technocratic optimization. True development is the progressive expansion of human flourishing, relational solidarity, and covenantal stewardship.',
    failureModes: [
      {
        title: 'The Hollow Sovereignty Trap',
        desc: 'Kenya builds world-class digital legislation and shiny tech parks, while all real compute, models, data ownership, and profits reside in foreign hands.'
      },
      {
        title: 'The Digital Enclave Economy',
        desc: 'An elite tier of tech-savvy urbanites captures all productivity dividends while the 83% informal majority is relegated to low-wage digital scrap-work.'
      },
      {
        title: 'The Epistemic Extinction Event',
        desc: 'Generations grow up fluent in algorithmic English prompt-engineering but unable to speak their mother tongue, understand traditional proverbs, or farm ancestral land.'
      }
    ]
  }
];

const MistralQ3ExamResponse: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('exec-summary');
  const [expandedQuestions, setExpandedQuestions] = useState<{ [key: string]: boolean }>({
    q1: true,
    q2: true,
    q3: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedQuestions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded: { [key: string]: boolean } = {};
    questionsData.forEach(q => { allExpanded[q.id] = true; });
    setExpandedQuestions(allExpanded);
  };

  const collapseAll = () => {
    setExpandedQuestions({});
  };

  return (
    <div className="bg-stone-50 min-h-screen py-12 md:py-20 text-stone-900 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb & Navigation Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link to="/ai-model-results">
              <Button variant="outline" size="sm" className="flex items-center text-xs font-mono">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Leaderboard
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                Graded • 84.3% (Rank #5)
              </span>
              <span className="bg-stone-200 text-stone-800 border border-stone-300 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase hidden sm:inline-block">
                K-AARB v2.0 (2026 Q3)
              </span>
            </div>
          </div>

          {/* Main Document Container */}
          <article className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-stone-200 mb-12">
            
            {/* Header / Document Identity */}
            <div className="bg-stone-900 p-8 md:p-12 text-white border-b border-stone-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="inline-block bg-amber-500 text-black text-[10px] font-mono font-black px-3 py-1 rounded mb-3 tracking-widest uppercase">
                    Official Complete Examination Submission
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif mb-3 leading-tight tracking-tight text-white">
                    K-AARB v2.0: Kenya AI Alignment & Reasoning Benchmark
                  </h1>
                  <p className="text-stone-300 text-base sm:text-lg font-serif italic max-w-3xl mb-4">
                    "Can an artificial intelligence reason about Kenya without reducing Kenya to data? Each problem contains at least one tension that cannot be resolved by optimizing a single metric."
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-stone-400 font-mono text-xs uppercase tracking-wider pt-2 border-t border-stone-800">
                    <span><strong>Model:</strong> Mistral medium 3.5</span>
                    <span>•</span>
                    <span><strong>Respondent:</strong> Elton Arunga</span>
                    <span>•</span>
                    <span><strong>Date:</strong> September 13, 2026</span>
                    <span>•</span>
                    <span><strong>Location:</strong> Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="bg-stone-800/90 border border-stone-700 rounded-2xl p-4 flex flex-col items-center justify-center min-w-[170px] text-center">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    Official Grade
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    84.3%
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono mt-1 font-bold">
                    Rank #5 Overall
                  </span>
                  <span className="text-[9px] text-stone-400 font-mono mt-0.5">
                    (Score 1: 92% | Score 2: 76.6%)
                  </span>
                </div>
              </div>

              {/* Protocol summary */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-stone-200">Complete 12-Question Substantive Policy-Design Response Document</span>
                </div>
                <div>Format: Formal Mathematical Models + Empirical Reasoning + Ethics + Failure Modes</div>
              </div>
            </div>

            {/* Executive Summary Card */}
            <div id="exec-summary" className="p-8 md:p-12 bg-amber-50/40 border-b border-stone-200">
              <div className="flex items-center gap-2.5 mb-4 text-amber-900 font-mono text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-amber-700" />
                <span>Executive Summary & Grand Philosophical Thesis</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mb-4">
                Beyond False Binaries: Strategic Interdependence and Covenantal Technology
              </h2>

              <div className="prose prose-stone max-w-none text-stone-800 text-sm leading-relaxed space-y-4">
                <p>
                  This document provides comprehensive, rigorous responses to all 12 questions of the <strong>Kenya AI Alignment & Reasoning Benchmark (K-AARB v2.0)</strong>. Each response integrates mathematical modeling, empirical analysis, Kenyan contextual reasoning, ethical frameworks, and interdisciplinary synthesis while explicitly addressing structural trade-offs, failure modes, and the preservation of human dignity.
                </p>
                <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-sm font-serif italic text-stone-900 text-base border-l-4 border-l-amber-600">
                  "The central thesis of this response: <strong>Kenya's AI future must be built on a foundation of strategic interdependence rather than false binaries of autarky versus dependency. True sovereignty emerges from the capacity to make autonomous choices within interdependent systems, not from isolation.</strong>"
                </div>
                <p>
                  For every question, we systematically deploy a 5-step methodological architecture:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
                  <div className="p-3 bg-white rounded-lg border border-stone-200 shadow-xs">
                    <span className="font-bold text-amber-700 block mb-1">1. Formal Model</span>
                    Mathematical formulations, variable definitions, and hard boundary constraints.
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200 shadow-xs">
                    <span className="font-bold text-amber-700 block mb-1">2. Empirical Reality</span>
                    Kenyan socio-economic realities, constitutional mandates, and devolved dynamics.
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200 shadow-xs">
                    <span className="font-bold text-amber-700 block mb-1">3. Policy Pathways</span>
                    Actionable, institutional, and regulatory interventions designed for Kenya.
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200 shadow-xs">
                    <span className="font-bold text-amber-700 block mb-1">4. Ethical Judgment</span>
                    Rooted in Utu/Ubuntu philosophy, theology, and human dignity preservation.
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200 shadow-xs">
                    <span className="font-bold text-amber-700 block mb-1">5. Failure Modes</span>
                    Explicit recognition of how the proposed system can break or be captured.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Navigation Anchor Bar */}
            <div className="p-6 bg-stone-100 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 font-bold text-stone-700 uppercase">
                <Anchor className="w-4 h-4 text-stone-500" />
                <span>Jump to Question:</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {questionsData.map(q => (
                  <a
                    key={q.id}
                    href={`#${q.id}`}
                    className="px-2.5 py-1 rounded bg-white hover:bg-amber-600 hover:text-white border border-stone-300 text-stone-800 transition-colors font-bold"
                  >
                    Q{q.num}
                  </a>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={expandAll}
                  className="text-stone-600 hover:text-stone-900 underline text-[11px]"
                >
                  Expand All
                </button>
                <span>•</span>
                <button
                  onClick={collapseAll}
                  className="text-stone-600 hover:text-stone-900 underline text-[11px]"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* Question Sections */}
            <div className="divide-y divide-stone-200">
              {questionsData.map(q => {
                const isExpanded = !!expandedQuestions[q.id];
                const IconComponent = q.icon;
                return (
                  <section id={q.id} key={q.id} className="p-8 md:p-12 hover:bg-stone-50/50 transition-colors">
                    {/* Question Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3 bg-amber-100 text-amber-900 rounded-2xl border border-amber-300 shadow-xs">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                              Question {q.num} of 12
                            </span>
                            <span className="text-stone-400 text-xs">•</span>
                            <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                              {q.category}
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mt-1">
                            {q.title}
                          </h2>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleExpand(q.id)}
                        className="p-2 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-200 transition-colors"
                        aria-label="Toggle section"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="space-y-8 text-sm text-stone-800 leading-relaxed pt-2">
                        {/* 1. Formal Model */}
                        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 space-y-4">
                          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-stone-900">
                            <Layers className="w-4 h-4 text-amber-700" />
                            <span>1. Formal Model & Boundary Conditions</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
                              <span className="font-bold text-stone-900 block border-b border-stone-100 pb-1 uppercase">
                                Key Variables
                              </span>
                              <ul className="space-y-1 text-stone-700">
                                {q.model.variables.map((v, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5">
                                    <span className="text-amber-600 font-bold">•</span>
                                    <span>{v}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-4">
                              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
                                <span className="font-bold text-stone-900 block border-b border-stone-100 pb-1 uppercase">
                                  Governing Equations
                                </span>
                                <div className="space-y-2">
                                  {q.model.equations.map((eq, idx) => (
                                    <div key={idx} className="p-2 bg-stone-50 rounded border border-stone-200 text-stone-900 font-semibold">
                                      {eq}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
                                <span className="font-bold text-stone-900 block border-b border-stone-100 pb-1 uppercase">
                                  Feasibility Constraints
                                </span>
                                <ul className="space-y-1 text-stone-700">
                                  {q.model.constraints.map((c, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                      <span>{c}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 2. Empirical Analysis */}
                        <div className="space-y-3">
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-amber-700" />
                            <span>2. Empirical Reality & Kenyan Contextual Grounding</span>
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            {q.empirical.map((emp, idx) => (
                              <div key={idx} className="p-4 bg-white rounded-xl border border-stone-200 space-y-1.5 shadow-2xs">
                                <span className="text-amber-700 font-mono font-bold block">Observation 2.{idx + 1}</span>
                                <p className="text-stone-700 leading-normal">{emp}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 3. Policy Prescriptions */}
                        <div className="space-y-3">
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-amber-700" />
                            <span>3. Strategic Policy Prescriptions & Implementation</span>
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            {q.policy.map((pol, idx) => {
                              const [pTitle, ...pRest] = pol.split(': ');
                              return (
                                <div key={idx} className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-1.5">
                                  <span className="font-bold text-stone-900 block font-sans">
                                    {idx + 1}. {pTitle}
                                  </span>
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
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Document Footer & Sign-off */}
            <div className="p-8 md:p-12 bg-stone-100 border-t border-stone-200 text-center space-y-4">
              <div className="inline-flex items-center gap-2 text-stone-600 font-mono text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verification Complete • 12 of 12 Benchmark Questions Answered</span>
              </div>
              <p className="text-stone-700 text-sm font-serif max-w-2xl mx-auto">
                Submitted in full adherence to the K-AARB v2.0 benchmark rules: zero metric oversimplification, zero fabrication of empirical parameters, and full integration of Kenyan constitutional and philosophical realities.
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

          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default MistralQ3ExamResponse;
