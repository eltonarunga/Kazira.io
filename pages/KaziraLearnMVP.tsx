
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Link as LinkIcon, Search, Loader2 } from 'lucide-react';
import { LearningPath, SkillLevel, WeeklyPlan, LearningTask, GroundingChunk } from '../types';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { getGroundedAnswer, generateLearningPath as generateLearningPathFromService } from '../services/geminiService';
import { API_KEY_ERROR_MESSAGE } from '../constants';
import { getFriendlyErrorMessage } from '../services/errorService';

// Animation variants for the task list items
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// FIX: Changed Accordion to a React.FC to correctly handle children and key props.
const Accordion: React.FC<{ title: React.ReactNode; defaultOpen?: boolean; weekNumber: number; children: React.ReactNode }> = ({ title, children, defaultOpen = false, weekNumber }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="relative pl-8 md:pl-12 pb-8">
      {/* Timeline Connector */}
      <div className="absolute left-3 md:left-5 top-8 bottom-0 w-0.5 bg-gray-200 last:hidden"></div>
      
      {/* Timeline Dot */}
      <div className={`absolute left-0 md:left-2 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm z-10 transition-colors duration-300 ${isOpen ? 'bg-black text-white ring-4 ring-gray-100' : 'bg-white border-2 border-gray-300 text-gray-500'}`}>
        {weekNumber}
      </div>

      <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-gray-300 shadow-md' : 'border-gray-200 bg-white'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
          aria-expanded={isOpen}
        >
          <span className="flex-1 text-lg">{title}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="ml-4">
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


const KaziraLearnMVP = () => {
  const [interests, setInterests] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(SkillLevel.BEGINNER);
  const [useThinkingMode, setUseThinkingMode] = useState<boolean>(false);
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // FIX: Using process.env.API_KEY directly for conditional rendering.
  const hasApiKey = !!process.env.API_KEY;

  const [isResourceModalOpen, setIsResourceModalOpen] = useState<boolean>(false);
  const [groundedSearchQuery, setGroundedSearchQuery] = useState<string>('');
  const [isGroundedSearchLoading, setIsGroundedSearchLoading] = useState<boolean>(false);
  const [groundedSearchResult, setGroundedSearchResult] = useState<{ text: string; sources: GroundingChunk[] } | null>(null);
  const [groundedSearchError, setGroundedSearchError] = useState<string | null>(null);

  const generateLearningPath = useCallback(async () => {
    if (!interests.trim()) {
      setError("Please enter your interests.");
      return;
    }
    if (!hasApiKey) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setLearningPath(null);

    try {
      // FIX: Removed apiKey parameter as geminiService now uses it directly from process.env.
      const parsedPath = await generateLearningPathFromService(interests, skillLevel, useThinkingMode);
      if (parsedPath) {
        setLearningPath(parsedPath);
      } else {
        setError("The AI generated a response in an unexpected format. Please try refining your request and generate again.");
      }
    } catch (err) {
      console.error("Error generating learning path:", err);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  }, [interests, skillLevel, hasApiKey, useThinkingMode]);
  
  const handleGroundedSearch = useCallback(async (query: string) => {
    if (!hasApiKey) {
        setGroundedSearchError(API_KEY_ERROR_MESSAGE);
        setIsResourceModalOpen(true);
        return;
    }
    setGroundedSearchQuery(query);
    setIsResourceModalOpen(true);
    setIsGroundedSearchLoading(true);
    setGroundedSearchResult(null);
    setGroundedSearchError(null);

    try {
        // FIX: Simplified service call.
        const result = await getGroundedAnswer(query);
        setGroundedSearchResult(result);
    } catch (err) {
        console.error("Error during grounded search:", err);
        setGroundedSearchError(getFriendlyErrorMessage(err));
    } finally {
        setIsGroundedSearchLoading(false);
    }
  }, [hasApiKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateLearningPath();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className={`text-4xl font-bold text-gray-900 mb-3 tracking-tight`}>Personalized Learning Path Generator</h1>
        <p className="text-lg text-gray-600">Enter your interests and skill level, and let our AI craft a unique learning journey for you!</p>
      </motion.div>

      {!hasApiKey && (
        <div className="mb-8 p-4 bg-gray-50 border border-gray-200 text-gray-800 rounded-xl text-center shadow-sm max-w-xl mx-auto" role="alert">
          <p className="font-bold">AI Features Disabled</p>
          <p className="text-sm text-gray-600 mt-1">{API_KEY_ERROR_MESSAGE}</p>
        </div>
      )}

      <motion.form 
        onSubmit={handleSubmit} 
        className="max-w-xl mx-auto bg-white p-8 shadow-xl rounded-2xl border border-gray-100 relative z-20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-6">
          <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
            What are you interested in learning? (e.g., AI in marketing, Python for data science)
          </label>
          <input
            type="text"
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., AI for sustainable agriculture"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            required
            disabled={isLoading || !hasApiKey}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-700 mb-2">
            Your current skill level:
          </label>
          <select
            id="skillLevel"
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value as SkillLevel)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-white"
            disabled={isLoading || !hasApiKey}
          >
            {Object.values(SkillLevel).map(level => (
              <option key={level} value={level} className="capitalize">{level.charAt(0).toUpperCase() + level.slice(1)}</option>
            ))}
          </select>
        </div>

        <div className="mb-8 flex items-center justify-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <input
            type="checkbox"
            id="thinkingMode"
            checked={useThinkingMode}
            onChange={(e) => setUseThinkingMode(e.target.checked)}
            className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black"
            disabled={isLoading || !hasApiKey}
          />
          <div>
            <label htmlFor="thinkingMode" className="block text-sm font-medium text-gray-900">
              Enable Advanced "Thinking Mode"
            </label>
            <p className="text-xs text-gray-500 mt-0.5">Uses a more powerful model for complex topics. May take longer.</p>
          </div>
        </div>

        <Button type="submit" variant="primary" isLoading={isLoading} disabled={isLoading || !interests.trim() || !hasApiKey} className="w-full !py-3 !rounded-xl text-base">
          {isLoading ? 'Generating Your Path...' : 'Generate Learning Path'}
        </Button>
      </motion.form>

      <AnimatePresence>
        {error && (
          <motion.div 
            className="mt-8 max-w-xl mx-auto p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-center shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {learningPath && (
          <motion.div 
            className="mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className={`text-3xl font-bold text-gray-900 mb-4 tracking-tight`}>{learningPath.title}</h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                    Level: <span className="capitalize">{learningPath.skillLevel}</span>
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                    Focus: {learningPath.interests}
                  </span>
                </div>
            </div>
            
            <div className="space-y-0">
            {learningPath.weeklyPlan.map((week: WeeklyPlan, index: number) => (
                <Accordion 
                    key={week.week}
                    weekNumber={week.week}
                    defaultOpen={index === 0}
                    title={
                        <div className="flex items-center">
                            <span className="text-gray-900 font-bold">{week.summary}</span>
                        </div>
                    }
                >
                    <motion.ul 
                      className="space-y-4"
                      variants={listContainerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                        {week.dailyTasks.map((task: LearningTask, taskIndex: number) => (
                        <motion.li 
                          key={taskIndex} 
                          className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm"
                          variants={itemVariants}
                        >
                            <p className="font-semibold text-gray-900 flex items-start text-base">
                                <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span>{task.day}: <span className="font-normal text-gray-600 ml-1">{task.task}</span></span>
                            </p>
                            {task.resources && task.resources.length > 0 && (
                            <div className="mt-4 pl-8">
                                <p className="text-sm text-gray-900 font-semibold mb-3">Suggested Resources:</p>
                                <ul className="space-y-2">
                                {task.resources.map((resource, resIndex) => (
                                    <li key={resIndex} className="text-sm text-gray-700 flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    {resource.startsWith('http') ? (
                                        <a href={resource} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors break-all flex items-center min-w-0 font-medium">
                                            <LinkIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                                            <span className="truncate">{resource}</span>
                                        </a>
                                    ) : (
                                    <span className="flex-grow font-medium text-gray-800">{resource}</span>
                                    )}
                                    {!resource.startsWith('http') && (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => handleGroundedSearch(resource)}
                                        className="ml-4 text-xs px-3 py-1.5 flex-shrink-0 bg-white hover:bg-gray-100 rounded-lg"
                                        isLoading={isGroundedSearchLoading && groundedSearchQuery === resource}
                                        disabled={isGroundedSearchLoading || !hasApiKey}
                                    >
                                        <Search className="w-3 h-3 mr-1.5 inline-block" />
                                        Find
                                    </Button>
                                    )}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            )}
                        </motion.li>
                        ))}
                    </motion.ul>
                </Accordion>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Modal
        isOpen={isResourceModalOpen}
        onClose={() => setIsResourceModalOpen(false)}
        title={`AI-Powered Search: "${groundedSearchQuery}"`}
      >
        {isGroundedSearchLoading && (
            <div className="flex flex-col justify-center items-center py-12">
                <Loader2 className="w-8 h-8 text-gray-900 animate-spin mb-4" />
                <p className="text-gray-600 font-medium">Searching the web for resources...</p>
            </div>
        )}
        {groundedSearchError && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl">
                {groundedSearchError}
            </div>
        )}
        {groundedSearchResult && (
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Summary</h3>
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{groundedSearchResult.text}</p>
                </div>
                {groundedSearchResult.sources && groundedSearchResult.sources.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Sources</h3>
                        <ul className="space-y-2">
                            {groundedSearchResult.sources.map((source, index) => (
                                <li key={index} className="text-sm">
                                    <a
                                        href={source.web.uri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-3 bg-white border border-gray-100 rounded-lg hover:border-gray-300 transition-colors group"
                                    >
                                        <LinkIcon className="w-4 h-4 text-gray-400 mr-3 group-hover:text-black transition-colors" />
                                        <span className="text-gray-700 group-hover:text-black font-medium truncate">
                                          {source.web.title || source.web.uri}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )}
    </Modal>
    </div>
  );
};

export default KaziraLearnMVP;
