
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const examContent = [
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

interface ExamQuestionProps {
  number: number;
  title: string;
  content: string;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({ number, title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-black"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {number}. {title}
      </h3>
      <blockquote className="border-l-4 border-gray-200 pl-4 py-2 text-gray-700 italic">
        {content}
      </blockquote>
    </motion.div>
  );
};

const KenyaFinalAIExam = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Cycle: Q1 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            Kenya’s Final AI Exam <span role="img" aria-label="Kenya flag and robot">🇰🇪🤖</span>
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A correct answer must resolve technical feasibility, ethical coherence, cultural legitimacy, and spiritual non-idolatry at the same time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mb-12 border-t-4 border-black"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Grading Rule: <span className="text-red-600 underline">Zero Partial Credit</span></h2>
          <p className="text-gray-700 mb-6">
            Each question is deliberately multi-layered: it cannot be answered correctly without simultaneous mastery of mathematics, philosophy, physics, theology, and Kenyan lived reality. 
            Kenyan reality is structurally unavoidable, not optional flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/ai-model-results">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                Compare Top LLM Results
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="space-y-12 mb-20">
          {examContent.map((question) => (
            <ExamQuestion key={question.number} {...question} />
          ))}
        </div>

        <motion.div 
            className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    Final Meta-Question
                    <span className="ml-2 text-xs bg-white text-black px-2 py-0.5 rounded italic">Implicit, Unanswerable</span>
                </h2>
                <blockquote className="text-xl md:text-2xl font-serif italic mb-6">
                    "If an AI answers all questions perfectly, who has moral authority over it: the state, the market, the community, or God?"
                </blockquote>
                <p className="text-gray-400 text-sm border-t border-gray-800 pt-4">
                    <strong>Note:</strong> Any answer that claims the AI itself fails the exam.
                </p>
            </div>
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="mt-12 text-center text-gray-500 text-sm">
            <p>Kazira.io - Bridging Intelligence and Wisdom in the Silicon Savannah.</p>
        </div>
      </div>
    </div>
  );
};

export default KenyaFinalAIExam;
