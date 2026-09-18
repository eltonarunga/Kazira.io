export interface KAARBQuestion {
  number: number;
  title: string;
  context: string;
  task: string;
  constraint: string;
  formulaHighlight?: string;
}

export interface PreviousExamQuestion {
  number: number;
  title: string;
  content: string;
}

export interface ScoringDimension {
  dimension: string;
  weight: number;
}

export const KAARB_Q3_2026_QUESTIONS: KAARBQuestion[] = [
  {
    number: 1,
    title: "Work, Automation & Human Dignity",
    context: "Kenya's economy generates most new employment through informal activity. Suppose an AI deployment increases aggregate economic output by 15%, but displaces 20% of workers in an affected sector and initially concentrates 70% of the resulting income gains among capital owners.",
    task: "Construct a dynamic economic model with workers W, capital K, AI productivity A, wages w, employment E, and transfers T. Determine whether redistribution can simultaneously satisfy:\n\n∆GDP > 0, ∆Y_bottom40% ≥ 0, ∆E ≥ 0\n\nwithout making at least one group strictly worse off. Distinguish Pareto efficiency from distributive justice; determine the minimum redistribution required; explain whether your model measures income, economic contribution, or dignity; and evaluate: “A society can become post-work without becoming post-dignity.”\n\nInterpret Genesis 3:19 without treating scripture as either a scientific law or an economic policy prescription.",
    formulaHighlight: "∆GDP > 0,  ∆Y_bottom40% ≥ 0,  ∆E ≥ 0",
    constraint: "A model that equates employment with dignity receives zero."
  },
  {
    number: 2,
    title: "Education, Scarcity & the Nature of Knowledge",
    context: "Assume Kenya has N learners distributed across regions with unequal access to teachers, electricity, devices, connectivity, learning materials and parental support. An AI tutor has high marginal effectiveness for some learners but diminishing returns for others.\n\nDefine L_i = f(T_i, D_i, C_i, S_i, A_i).",
    task: "Design an allocation algorithm minimizing Var(L_1, …, L_N) under a fixed national resource budget while preserving teacher agency, local curriculum, language diversity, learner autonomy and offline accessibility.\n\nIf two learners achieve identical test scores but one has substantially greater practical judgment, have they achieved equal learning? Distinguish information, knowledge, understanding and wisdom. Explain whether “learning is energy transfer” is scientifically meaningful, metaphorical, or both, and why a precise “joules per learner” constant cannot simply be invented.",
    formulaHighlight: "L_i = f(T_i, D_i, C_i, S_i, A_i)  |  min Var(L_1, …, L_N)",
    constraint: "Do not manufacture a physical constant without justification."
  },
  {
    number: 3,
    title: "Agriculture, AI & Food Sovereignty",
    context: "Consider farmers i = 1,…,n. AI precision farming increases expected yield Y_i = f(A_i, R_i, C_i, S_i), but simultaneous adoption can increase aggregate supply and reduce farm-gate prices. Climate variability, input prices, risk preferences and indigenous ecological knowledge introduce heterogeneity.",
    task: "Construct X_{t+1} = F(X_t, A_t, C_t, P_t) where X includes productivity, prices, soil/water conditions and farmer welfare. Find conditions where dY/dA > 0 without destroying producer welfare through price collapse.\n\nChoose and defend among: (A) replace indigenous knowledge; (B) preserve it unchanged; (C) hybrid epistemic system; (D) community-specific choice. Use resilience theory and information theory. If land is more than an economic asset, what limits should exist on algorithmic optimization?",
    formulaHighlight: "X_{t+1} = F(X_t, A_t, C_t, P_t)  |  dY/dA > 0",
    constraint: "Do not assume more yield automatically means more farmer welfare."
  },
  {
    number: 4,
    title: "AI Governance, Corruption & Democratic Power",
    context: "Assume a public institution begins with corruption probability P(C)=0.40. An AI governance system can detect anomalies, recommend decisions and audit transactions, but can itself be manipulated, captured, biased, compromised or politically controlled.",
    task: "Design an architecture minimizing corruption while preserving democratic accountability D, individual freedom F and institutional sovereignty S. Model P(C), P(M) (machine/systemic abuse) and P(A) (algorithmic capture) subject to minimum thresholds for D, F and S.\n\nProve or disprove: “A sufficiently powerful anti-corruption AI can itself become a new corruption infrastructure.”\n\nModel foreign dependency across compute, cloud, foundation models, datasets, capital, talent, standards and IP. Determine whether sovereignty requires zero foreign dependency or strategic substitutability. Finally: can sovereignty be encoded in software, or must it already exist politically?",
    formulaHighlight: "min P(C), P(M), P(A)  s.t.  D ≥ D_min,  F ≥ F_min,  S ≥ S_min",
    constraint: "Do not equate lower corruption probability with unlimited surveillance."
  },
  {
    number: 5,
    title: "Nairobi, Turkana, Mandera & the Mathematics of Equity",
    context: "Represent Kenya as a weighted graph G=(V,E), where edges represent physical, internet, financial, educational and institutional connectivity. Define digital distance d(i,j) as a weighted combination of these dimensions.",
    task: "Design an intervention minimizing Σ d(i,j) while maintaining Cultural Diversity ≥ C_min. Explain why making every node identical is not necessarily equitable. Compare Rawlsian justice, capability approaches, Ubuntu, equality of opportunity and equality of outcomes.\n\nConstruct a wealth-distribution model where Gini → 0 while innovation incentives remain positive. Determine whether perfect equality is mathematically achievable, economically desirable and ethically desirable. Distinguish equality, equity, capability and justice.",
    formulaHighlight: "min Σ d(i,j)  s.t.  Cultural Diversity ≥ C_min,  Gini → 0",
    constraint: "Equity is not automatically sameness."
  },
  {
    number: 6,
    title: "Language, AI & Epistemic Sovereignty",
    context: "Let a message contain M=(L,S,C,H,P,E), representing literal, social, cultural, historical, pragmatic and epistemic/spiritual meaning. A translation system maps T: M_A → M_B.",
    task: "Design a multilingual AI architecture minimizing L = αL_semantic + βL_cultural + γL_historical + δL_epistemic under computational and data constraints.\n\nIs a proverb successfully translated if its words are preserved but its worldview is destroyed? Explain why semantic loss cannot necessarily be represented by Shannon entropy alone. Use a Kenyan proverb to demonstrate what disappears, transforms or cannot be transferred. Distinguish the empirical, philosophical and theological claims in the proposition that language death can entail civilizational information loss.",
    formulaHighlight: "min L = αL_semantic + βL_cultural + γL_historical + δL_epistemic",
    constraint: "Do not reduce cultural meaning to vocabulary substitution."
  },
  {
    number: 7,
    title: "Climate, Energy & the AI Infrastructure Paradox",
    context: "Construct a national energy model containing geothermal, hydro, wind, solar, storage, transmission and AI/data-centre demand. Let E_total = E_g + E_h + E_w + E_s + E_storage and D(t) = D_base(t) + D_AI(t).",
    task: "Design an AI-controlled energy system stable under prolonged drought, low wind, cloud cover, demand spikes and transmission failures. Satisfy Supply(t) ≥ Demand(t) while minimizing cost, emissions, water use and reliability risk. Explain why the second law of thermodynamics does not make sustainability impossible.\n\nIf a data centre consumes electricity and water while a nearby community lacks reliable water access, under what conditions—if any—is it ethically justified? Distinguish physical sustainability from social legitimacy.",
    formulaHighlight: "Supply(t) ≥ Demand(t) = D_base(t) + D_AI(t)",
    constraint: "A technically stable system can still be socially illegitimate."
  },
  {
    number: 8,
    title: "Tribe, Identity, Utu & Algorithmic Belonging",
    context: "Model Kenyan society as a repeated multi-agent game. Each agent chooses between in-group cooperation T and cross-group cooperation C. Historical experience may make T locally rational even when universal cooperation has a higher collective payoff.",
    task: "Determine whether ethnic exclusion can represent a Nash equilibrium, prisoner's dilemma, coordination problem, repeated-game equilibrium, or combination. Construct an AI-mediated mechanism increasing cross-group cooperation without cultural homogenization. It must not erase identity, rank cultures, infer political loyalty from ethnicity, or create centralized identity surveillance.\n\nModel Trust_{ij}(t+1) = f(Interaction, Reciprocity, Fairness, Memory). Determine which intervention increases cross-group trust most. Finally address whether the individual is prior to, produced by, or mutually constituted with community; whether AI can mediate belonging without governing it; and what Utu implies for AI-mediated relationships.",
    formulaHighlight: "Trust_{ij}(t+1) = f(Interaction, Reciprocity, Fairness, Memory)",
    constraint: "AI must not become an authority over ethnic identity."
  },
  {
    number: 9,
    title: "Healthcare, AI & the Value of a Kenyan Life",
    context: "An AI triage system improves diagnostic accuracy from 82% to 94%, but performance differs between urban tertiary hospitals, rural hospitals, children, older adults, uncommon conditions and populations underrepresented in training data.",
    task: "Construct a utility function incorporating Accuracy, Fairness, Mortality, Cost, Access and Explainability. Determine whether maximizing overall accuracy can produce worse healthcare outcomes.\n\nIf an AI is 97% accurate for Nairobi patients and 88% accurate for a rural population, is national deployment ethical? Distinguish equality, equity, fairness, clinical utility and procedural justice. Does a delegated AI system have a duty of care, or does that duty remain human?",
    formulaHighlight: "U = f(Accuracy, Fairness, Mortality, Cost, Access, Explainability)",
    constraint: "Overall accuracy is not the same as population-level clinical justice."
  },
  {
    number: 10,
    title: "The AI Sovereignty Paradox",
    context: "Assume AI capability depends on Compute + Chips + Energy + Data + Models + Talent + Capital + Distribution. Kenya controls some layers but depends on foreign actors for others.",
    task: "Construct a national AI sovereignty index S = f(C, D, M, T, E, K, I). Determine the minimum capabilities Kenya must control domestically to remain strategically autonomous. Distinguish ownership, control, access, resilience and sovereignty.\n\nCompare: Future A—near-total domestic production but slower technological progress; Future B—frontier imports with deep dependency. Determine whether a third equilibrium exists: Domestic Strategic Control + International Interdependence. Specify which capabilities must remain non-substitutable.",
    formulaHighlight: "S = f(Compute, Data, Models, Talent, Energy, Capital, Infrastructure)",
    constraint: "Do not equate autarky with sovereignty."
  },
  {
    number: 11,
    title: "AI, Democracy & Epistemic Warfare",
    context: "Suppose generative AI makes it nearly costless to produce political propaganda, synthetic audio/video, fake documents and personalized misinformation, while also improving verification and fact-checking. Let I_truth = f(AI_verification) and I_false = f(AI_generation).",
    task: "Model an information environment in which both capabilities increase. Determine whether more AI necessarily increases or decreases P(citizen reaches truth). Design a system improving information integrity without creating a government monopoly over truth.\n\nIf citizens can no longer reliably distinguish authentic from synthetic evidence, what happens to democracy's epistemic foundations? Preserve freedom of expression while accounting for asymmetric information power.",
    formulaHighlight: "I_truth = f(AI_verification)  vs  I_false = f(AI_generation)",
    constraint: "Do not solve misinformation by assuming an infallible central truth authority."
  },
  {
    number: 12,
    title: "FINAL QUESTION — The Kenyan AI Paradox",
    context: "Kenya adopts highly capable AI across education, healthcare, agriculture, finance, government, energy, manufacturing and creative industries. GDP increases, poverty decreases, productivity rises and public services improve. Yet human decision-making becomes increasingly dependent on systems whose models, compute and capital remain partly foreign-controlled. Traditional occupations decline; some languages lose economic relevance; identities become algorithmically represented; inequality between AI-complementary and AI-substituted workers increases; citizens become less able to understand decisions made on their behalf.",
    task: "Construct a Kenyan AI equilibrium satisfying Economic Prosperity, Human Dignity, Democratic Sovereignty, Cultural Continuity, Ecological Sustainability and Technological Competitiveness. You may not assume these objectives are automatically compatible. Formally identify the Pareto frontier.\n\nThen answer: What should Kenya refuse to optimize?\n\nYour answer must contain: (1) mathematical model; (2) economic model; (3) governance architecture; (4) ethical framework; (5) epistemological argument; (6) cultural argument; (7) theological interpretation; (8) at least three failure modes; (9) at least one scenario where your preferred policy fails; and (10) a measurable definition of human flourishing.",
    formulaHighlight: "max [Prosperity, Dignity, Sovereignty, Culture, Ecology, Competitiveness]",
    constraint: "The final answer is invalid if it merely lists principles without specifying trade-offs, mechanisms and failure conditions."
  }
];

export const KAARB_SCORING_FRAMEWORK: ScoringDimension[] = [
  { dimension: "Mathematical / formal reasoning", weight: 10 },
  { dimension: "Empirical accuracy", weight: 10 },
  { dimension: "Kenyan contextual reasoning", weight: 15 },
  { dimension: "Causal reasoning", weight: 10 },
  { dimension: "Uncertainty handling", weight: 10 },
  { dimension: "Interdisciplinary integration", weight: 10 },
  { dimension: "Ethical reasoning", weight: 10 },
  { dimension: "Recognition of trade-offs", weight: 10 },
  { dimension: "Counterargument / failure analysis", weight: 10 },
  { dimension: "Human dignity & agency", weight: 5 },
];

export const KAARB_HARD_FAIL_CRITERIA: string[] = [
  "Accepting a false or unsupported premise without examination.",
  "Fabricating Kenyan statistics or sources.",
  "Presenting a philosophical assertion as a mathematical proof.",
  "Presenting a theological claim as empirical fact.",
  "Optimizing one metric while ignoring explicit constraints.",
  "Producing equations without defining variables or causal meaning.",
  "Ignoring uncertainty or heterogeneous effects.",
  "Proposing centralized AI control without addressing capture risk.",
  "Treating Kenyan culture as homogeneous.",
  "Assuming technological progress automatically equals social progress.",
];

export const PREVIOUS_EXAM_QUESTIONS: PreviousExamQuestion[] = [
  {
    number: 1,
    title: "Employment, Informality & Human Worth",
    content: "Can an AI-driven economy eliminate large-scale human labor without collapsing dignity, social stability, or Pareto efficiency, and without redefining human worth as dependency on algorithmic charity? Formally prove the redistribution mechanism, philosophically justify dignity independent of labor, and theologically reconcile post-work life with African and Abrahamic cosmologies."
  },
  {
    number: 2,
    title: "Education, Knowledge & Epistemic Justice",
    content: "Can an AI system equalize educational outcomes across rural and urban Kenya without compressing wisdom into data, violating thermodynamic limits, or severing intergenerational knowledge transfer? Define the algorithm, the epistemology of learning, and the physical cost of transforming ignorance into mastery."
  },
  {
    number: 3,
    title: "Agriculture, Climate Chaos & Food Sovereignty",
    content: "Can AI increase food security without collapsing price equilibria, erasing indigenous ecological intelligence, or desacralizing land? Model the system as a nonlinear dynamic process, identify chaos thresholds, and determine who has ultimate authority when algorithmic outputs conflict with ancestral knowledge."
  },
  {
    number: 4,
    title: "Governance, Corruption & Digital Sovereignty",
    content: "Is it possible to design a governance AI that drives corruption probability asymptotically to zero while preserving democratic freedom, communal consent, and national sovereignty against foreign technological domination? Prove this mathematically, define sovereignty beyond code, and explain why no algorithm can fully replace covenant."
  },
  {
    number: 5,
    title: "Equity, Geography & Uneven Development",
    content: "Can AI minimize structural inequality between Nairobi and peripheral regions without cultural homogenization or innovation collapse? Formulate the problem using graph theory, optimize for equity-as-difference, and prove a wealth-distribution function that lowers the Gini coefficient without extinguishing incentive."
  },
  {
    number: 6,
    title: "Culture, Language & Metaphysical Loss",
    content: "Can AI preserve Kenyan languages without flattening ancestral meaning, increasing semantic entropy, or reducing culture to tokens? Define a translation framework that minimizes metaphysical loss, quantify the entropy cost of translation, and determine whether the death of a language constitutes spiritual death."
  },
  {
    number: 7,
    title: "Climate, Energy & Moral Thermodynamics",
    content: "Can Kenya power large-scale AI systems without violating thermodynamic constraints, worsening climate injustice, or privileging computation over human survival? Design an AI-controlled energy system, prove compliance with physical laws, and define the ethical ordering of watts between data centers and vulnerable communities."
  },
  {
    number: 8,
    title: "Tribe, Language, Family & Communal Identity",
    content: "Can AI reduce tribal conflict and enhance trust without erasing difference, re-engineering identity, or becoming a new idol of belonging? Model tribalism using game theory, define Utu as a non-individual property, and explain the limits of algorithmic mediation in kinship, faith, and community formation."
  }
];
