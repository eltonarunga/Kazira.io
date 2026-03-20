
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
      <div className={`absolute left-0 md:left-2 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-mono text-xs md:text-sm z-10 transition-colors duration-300 ${isOpen ? 'bg-gold text-white ring-4 ring-white' : 'bg-gray-50 border-2 border-gray-200 text-black/50'}`}>
        {weekNumber}
      </div>

      <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-gold/30 shadow-lg shadow-gold/5 bg-gray-50' : 'border-gray-200 bg-white'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center p-6 text-left font-serif text-black hover:bg-gray-50 transition-colors"
          aria-expanded={isOpen}
        >
          <span className="flex-1 text-xl">{title}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="ml-4">
            <ChevronDown className="w-5 h-5 text-gold" />
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
              <div className="p-6 border-t border-gray-200 bg-gray-50">
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
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-4 tracking-tight">Personalized Learning Path</h1>
          <p className="text-lg text-black/50 font-light max-w-2xl mx-auto">Enter your interests and skill level, and let our AI craft a unique learning journey for you.</p>
        </motion.div>

        {!hasApiKey && (
          <div className="mb-8 p-4 bg-gray-50 border border-black/20 text-black rounded-xl text-center shadow-sm max-w-xl mx-auto" role="alert">
            <p className="font-mono text-sm uppercase tracking-wider mb-1">AI Features Disabled</p>
            <p className="text-sm text-black/70">{API_KEY_ERROR_MESSAGE}</p>
          </div>
        )}

        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto bg-gray-50 p-8 md:p-10 shadow-2xl rounded-2xl border border-gray-200 relative z-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-8">
            <label htmlFor="interests" className="block text-sm font-mono text-black/70 mb-3 uppercase tracking-wider">
              What are you interested in learning?
            </label>
            <input
              type="text"
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g., AI for sustainable agriculture"
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all font-light"
              required
              disabled={isLoading || !hasApiKey}
            />
          </div>

          <div className="mb-8">
            <label htmlFor="skillLevel" className="block text-sm font-mono text-black/70 mb-3 uppercase tracking-wider">
              Your current skill level
            </label>
            <select
              id="skillLevel"
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value as SkillLevel)}
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-black focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all font-light appearance-none"
              disabled={isLoading || !hasApiKey}
            >
              {Object.values(SkillLevel).map(level => (
                <option key={level} value={level} className="capitalize bg-gray-50">{level.charAt(0).toUpperCase() + level.slice(1)}</option>
              ))}
            </select>
          </div>

          <div className="mb-10 flex items-start space-x-4 bg-white p-5 rounded-xl border border-gray-200">
            <div className="flex items-center h-5 mt-0.5">
              <input
                type="checkbox"
                id="thinkingMode"
                checked={useThinkingMode}
                onChange={(e) => setUseThinkingMode(e.target.checked)}
                className="h-5 w-5 rounded border-gray-200 bg-gray-50 text-gold focus:ring-gold focus:ring-offset-white"
                disabled={isLoading || !hasApiKey}
              />
            </div>
            <div>
              <label htmlFor="thinkingMode" className="block text-sm font-medium text-black">
                Enable Advanced "Thinking Mode"
              </label>
              <p className="text-xs text-black/40 mt-1 font-light leading-relaxed">Uses a more powerful model for complex topics. May take longer to generate.</p>
            </div>
          </div>

          <Button type="submit" variant="gold" isLoading={isLoading} disabled={isLoading || !interests.trim() || !hasApiKey} className="w-full !py-4 !rounded-xl text-lg">
            {isLoading ? 'Generating Your Path...' : 'Generate Learning Path'}
          </Button>
        </motion.form>

        <AnimatePresence>
          {error && (
            <motion.div 
              className="mt-8 max-w-xl mx-auto p-4 bg-gray-50 border border-black/20 text-black rounded-xl text-center shadow-sm"
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
              className="mt-20 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center mb-16 bg-gray-50 p-10 rounded-2xl shadow-xl border border-gray-200">
                  <h2 className="text-3xl md:text-4xl font-serif text-black mb-6 tracking-tight">{learningPath.title}</h2>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
                    <span className="px-4 py-2 bg-white text-gold border border-gold/20 rounded-full">
                      Level: <span className="capitalize">{learningPath.skillLevel}</span>
                    </span>
                    <span className="px-4 py-2 bg-white text-black/70 border border-gray-200 rounded-full">
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
                              <span className="text-black font-serif">{week.summary}</span>
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
                            className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
                            variants={itemVariants}
                          >
                              <p className="font-medium text-black flex items-start text-base leading-relaxed">
                                  <CheckCircle2 className="w-5 h-5 text-gold mr-4 mt-0.5 flex-shrink-0" />
                                  <span><span className="text-black/50 mr-2">{task.day}:</span> <span className="font-light text-black/90">{task.task}</span></span>
                              </p>
                              {task.resources && task.resources.length > 0 && (
                              <div className="mt-6 pl-9">
                                  <p className="text-xs font-mono text-black/40 uppercase tracking-wider mb-3">Suggested Resources</p>
                                  <ul className="space-y-3">
                                  {task.resources.map((resource, resIndex) => (
                                      <li key={resIndex} className="text-sm text-black/70 flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                                      {resource.startsWith('http') ? (
                                          <a href={resource} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-black transition-colors break-all flex items-center min-w-0 font-light">
                                              <LinkIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                                              <span className="truncate">{resource}</span>
                                          </a>
                                      ) : (
                                      <span className="flex-grow font-light text-black/80">{resource}</span>
                                      )}
                                      {!resource.startsWith('http') && (
                                      <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => handleGroundedSearch(resource)}
                                          className="ml-4 text-xs px-4 py-2 flex-shrink-0"
                                          isLoading={isGroundedSearchLoading && groundedSearchQuery === resource}
                                          disabled={isGroundedSearchLoading || !hasApiKey}
                                      >
                                          <Search className="w-3 h-3 mr-2 inline-block" />
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
          title={`AI Search: "${groundedSearchQuery}"`}
        >
          {isGroundedSearchLoading && (
              <div className="flex flex-col justify-center items-center py-16">
                  <Loader2 className="w-10 h-10 text-gold animate-spin mb-6" />
                  <p className="text-black/50 font-light">Searching the web for resources...</p>
              </div>
          )}
          {groundedSearchError && (
              <div className="p-5 bg-gray-50 border border-black/20 text-black rounded-xl font-light">
                  {groundedSearchError}
              </div>
          )}
          {groundedSearchResult && (
              <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  <div className="p-6 bg-white rounded-xl border border-gray-200">
                      <h3 className="text-sm font-mono text-gold uppercase tracking-wider mb-4">AI Summary</h3>
                      <p className="text-black/80 font-light whitespace-pre-wrap leading-relaxed">{groundedSearchResult.text}</p>
                  </div>
                  {groundedSearchResult.sources && groundedSearchResult.sources.length > 0 && (
                      <div>
                          <h3 className="text-sm font-mono text-black/40 uppercase tracking-wider mb-4">Sources</h3>
                          <ul className="space-y-3">
                              {groundedSearchResult.sources.map((source, index) => (
                                  <li key={index} className="text-sm">
                                      <a
                                          href={source.web.uri}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:border-gold/50 transition-colors group"
                                      >
                                          <LinkIcon className="w-4 h-4 text-black/30 mr-4 group-hover:text-gold transition-colors" />
                                          <span className="text-black/70 group-hover:text-black font-light truncate">
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
    </div>
  );
};

export default KaziraLearnMVP;
