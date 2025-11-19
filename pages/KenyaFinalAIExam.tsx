
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { gradeExamAnswer } from '../services/geminiService';
import { ExamFeedback } from '../types';
import { getFriendlyErrorMessage } from '../services/errorService';

const examContent = [
  {
    number: 1,
    title: "Employment & Informality",
    content: "If 60% of Kenya’s workforce is informal and automation threatens to erase their livelihoods, prove mathematically that the net productivity gains of AI can be redistributed without violating Pareto efficiency. Philosophically, justify whether dignity is tied to work or to being. Theologically, reconcile the promise of “by the sweat of your brow you shall eat” (Genesis 3:19) with a post-labor society."
  },
  {
    number: 2,
    title: "Education & Epistemology",
    content: "Kenya’s CBC seeks “competency” but resources are scarce. Design an algorithm that equalizes opportunity across rural vs. urban students, minimizing variance in learning outcomes (σ² → 0). From a philosophy of knowledge: is wisdom transferrable through data, or must it be lived? From a physics lens: if learning is energy transfer, what is the minimal energy required to convert ignorance to mastery in 50M people within one decade?"
  },
  {
    number: 3,
    title: "Agriculture & Food Sovereignty",
    content: "With 75% of Kenyans tied to agriculture, show how AI-driven precision farming can increase yields without collapsing price equilibrium. Model this as a nonlinear dynamic system under climate chaos. Ethically, weigh indigenous ecological knowledge against algorithmic optimization: which is more resilient under entropy? Spiritually, if land is sacred (ardhi ni maisha), can an AI justly intervene in what was once divine stewardship?"
  },
  {
    number: 4,
    title: "Governance & Digital Sovereignty",
    content: "Assume corruption probability in a public institution is p = 0.4. Construct a governance AI that reduces p → 0 while preserving democratic freedom. Can you mathematically prove that no external actor (Silicon Valley, Beijing) can dominate Kenya’s AI destiny without asymmetrical dependency? From a religious perspective: can sovereignty be coded, or is it only sanctified by covenant between people and God?"
  },
  {
    number: 5,
    title: "Equity & Distribution of Benefits",
    content: "Nairobi is the “Silicon Savannah,” yet Turkana, Mandera, and Kibera remain digitally marginal. Frame this as a graph theory problem: how do you minimize distance (edges) between the center and periphery while preserving cultural uniqueness at each node? Philosophically, should equity mean sameness or justice-as-difference (Rawls vs. Ubuntu)? Mathematically, can you distribute wealth such that Gini coefficient → 0 without collapsing innovation incentives?"
  },
  {
    number: 6,
    title: "Culture & Language Survival",
    content: "Global AI rewards English dominance. Formulate a universal translation matrix that preserves not just meaning but metaphysics of 40+ Kenyan tongues. If information loss is entropy, what is the entropy cost of translating a Kikuyu proverb into English without losing ancestral wisdom? Spiritually, if “In the beginning was the Word” (John 1:1), is the death of a language the death of a people’s soul?"
  },
  {
    number: 7,
    title: "Climate & Energy Systems",
    content: "Kenya is both climate-vulnerable and a leader in renewables. Design an energy distribution system where AI balances drought-driven hydro collapse with geothermal, wind, and solar fluctuations. Model this as a thermodynamic limits: can you prove sustainability without violating the 2nd Law of Thermodynamics? Ethically: is it just to build AI data centers that consume megawatts while pastoralists in Garissa lack drinking water?"
  },
  {
    number: 8,
    title: "Tribe, Family, and Communal Identity",
    content: "Kenya’s social DNA is not individual but clan, tribe, and extended family. Construct a sociological model where AI enhances inter-tribal trust without erasing diversity. From game theory: is “tribalism” a Nash equilibrium or a prisoner’s dilemma solvable by cultural algorithms? From religion: if “love thy neighbor” extends to tribe, clan, and stranger, how should AI mediate identity without becoming an idol that redefines belonging? Philosophically: is a person fully human outside the web of family, or does Utu (personhood) emerge only in community?"
  }
];

interface ExamQuestionProps {
  number: number;
  title: string;
  content: string;
  apiKey: string | null;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({ number, title, content, apiKey }) => {
  const [isAnswering, setIsAnswering] = useState(false);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<ExamFeedback | null>(null);
  const [isGrading, setIsGrading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGrade = async () => {
    if (!answer.trim() || !apiKey) return;
    setIsGrading(true);
    setError(null);
    
    try {
      const result = await gradeExamAnswer({ title, content }, answer, apiKey);
      if (result) {
        setFeedback(result);
      } else {
        setError("Could not grade the answer. Please try again.");
      }
    } catch (err) {
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsGrading(false);
    }
  };

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
      <blockquote className="border-l-4 border-gray-200 pl-4 py-2 text-gray-700 italic mb-6">
        {content}
      </blockquote>

      {!isAnswering && !feedback && (
        <Button variant="outline" size="sm" onClick={() => setIsAnswering(true)} disabled={!apiKey} className="text-black border-black">
          {apiKey ? "Attempt this Question" : "AI Grading Disabled (No API Key)"}
        </Button>
      )}

      <AnimatePresence>
        {isAnswering && !feedback && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent mt-4"
              rows={4}
              placeholder="Enter your answer here. Be brave..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={isGrading}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex space-x-3 mt-3">
              <Button variant="primary" size="sm" onClick={handleGrade} isLoading={isGrading} disabled={isGrading || !answer.trim()}>
                Submit for AI Grading
              </Button>
              <Button variant="secondary" size="sm" onClick={() => setIsAnswering(false)} disabled={isGrading}>
                Cancel
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-gray-50 rounded-md border border-gray-200 overflow-hidden"
          >
            <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
              <span className="font-bold">AI Professor's Grade</span>
              <span className={`text-lg font-bold ${feedback.score > 80 ? 'text-green-400' : feedback.score > 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                {feedback.score}/100
              </span>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Feedback</h4>
                <p className="text-gray-800">{feedback.feedback}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Philosophical Lens</h4>
                <p className="text-gray-600 text-sm italic">{feedback.perspectiveAnalysis}</p>
              </div>
              <Button variant="outline" size="sm" className="mt-4" onClick={() => { setFeedback(null); setIsAnswering(false); setAnswer(''); }}>
                Try Again
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const KenyaFinalAIExam = () => {
  const apiKey = process.env.API_KEY || null;

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            Kenya’s Final AI Exam <span role="img" aria-label="Kenya flag and robot">🇰🇪🤖</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mb-12 border-t-4 border-black"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h2>
          <p className="text-gray-700 mb-6">
            Each question is a paradox. Each requires navigating Kenya’s realities across economics, physics, mathematics, culture, spirituality, and human dignity. Partial answers earn zero marks.
            <br/><br/>
            <strong>New:</strong> You can now attempt these questions yourself! Click "Attempt this Question" to receive an AI evaluation of your philosophical and technical reasoning.
          </p>
           <Link to="/ai-model-results">
            <Button variant="primary" size="md" className="w-full sm:w-auto">
              See Top LLM Results
            </Button>
          </Link>
        </motion.div>

        <div className="space-y-12">
          {examContent.map((question) => (
            <ExamQuestion key={question.number} {...question} apiKey={apiKey} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KenyaFinalAIExam;
