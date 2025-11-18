
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LearningPath, SkillLevel, WeeklyPlan, LearningTask, GroundingChunk } from '../types';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { getGroundedAnswer, generateLearningPath as generateLearningPathFromService } from '../services/geminiService';
import { API_KEY_ERROR_MESSAGE } from '../constants';
import { getFriendlyErrorMessage } from '../services/errorService';

// FIX: Changed Accordion to a React.FC to correctly handle children and key props.
const Accordion: React.FC<{ title: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="flex-1">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
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
            <div className="p-4 border-t border-gray-200">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
  const [apiKey] = useState<string | null>(process.env.API_KEY || null);

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
    if (!apiKey) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setLearningPath(null);

    try {
      const parsedPath = await generateLearningPathFromService(interests, skillLevel, apiKey, useThinkingMode);
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
  }, [interests, skillLevel, apiKey, useThinkingMode]);
  
  const handleGroundedSearch = useCallback(async (query: string) => {
    if (!apiKey) {
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
        const result = await getGroundedAnswer(query, apiKey);
        setGroundedSearchResult(result);
    } catch (err) {
        console.error("Error during grounded search:", err);
        setGroundedSearchError(getFriendlyErrorMessage(err));
    } finally {
        setIsGroundedSearchLoading(false);
    }
  }, [apiKey]);

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
        <h1 className={`text-4xl font-bold text-gray-900 mb-3`}>Personalized Learning Path Generator</h1>
        <p className="text-lg text-gray-700">Enter your interests and skill level, and let our AI craft a unique learning journey for you!</p>
      </motion.div>

      {!apiKey && (
        <div className="mb-8 p-4 bg-gray-100 border-l-4 border-gray-500 text-gray-800 rounded-md text-center shadow" role="alert">
          <p className="font-bold">AI Features Disabled</p>
          <p className="text-sm">{API_KEY_ERROR_MESSAGE}</p>
        </div>
      )}

      <motion.form 
        onSubmit={handleSubmit} 
        className="max-w-xl mx-auto bg-white p-8 shadow-xl rounded-lg border border-gray-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-6">
          <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
            What are you interested in learning? (e.g., AI in marketing, Python for data science)
          </label>
          <input
            type="text"
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., AI for sustainable agriculture"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
            required
            disabled={isLoading || !apiKey}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-700 mb-1">
            Your current skill level:
          </label>
          <select
            id="skillLevel"
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value as SkillLevel)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 bg-white"
            disabled={isLoading || !apiKey}
          >
            {Object.values(SkillLevel).map(level => (
              <option key={level} value={level} className="capitalize">{level.charAt(0).toUpperCase() + level.slice(1)}</option>
            ))}
          </select>
        </div>

        <div className="mb-8 flex items-center justify-center space-x-3 bg-gray-50 p-3 rounded-md border border-gray-200">
          <input
            type="checkbox"
            id="thinkingMode"
            checked={useThinkingMode}
            onChange={(e) => setUseThinkingMode(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500"
            disabled={isLoading || !apiKey}
          />
          <div>
            <label htmlFor="thinkingMode" className="block text-sm font-medium text-gray-800">
              Enable Advanced "Thinking Mode"
            </label>
            <p className="text-xs text-gray-500">Uses a more powerful model for complex topics. May take longer.</p>
          </div>
        </div>

        <Button type="submit" variant="primary" isLoading={isLoading} disabled={isLoading || !interests.trim() || !apiKey} className="w-full">
          {isLoading ? 'Generating Your Path...' : 'Generate Learning Path'}
        </Button>
      </motion.form>

      <AnimatePresence>
        {error && (
          <motion.div 
            className="mt-8 max-w-xl mx-auto p-4 bg-gray-100 border border-gray-400 text-gray-700 rounded-md text-center"
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
            className="mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-8 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h2 className={`text-3xl font-bold text-gray-900 mb-2`}>{learningPath.title}</h2>
                <p className="text-gray-700"><strong>Skill Level:</strong> <span className="capitalize">{learningPath.skillLevel}</span></p>
                <p className="text-gray-700"><strong>Focus:</strong> {learningPath.interests}</p>
            </div>
            
            <div className="space-y-4">
            {learningPath.weeklyPlan.map((week: WeeklyPlan, index: number) => (
                <Accordion 
                    key={week.week}
                    defaultOpen={index === 0}
                    title={
                        <div className="flex items-center">
                            <span className={`text-black font-bold mr-3`}>Week {week.week}</span>
                            <span className="text-gray-700 font-medium">{week.summary}</span>
                        </div>
                    }
                >
                    <ul className="space-y-4">
                        {week.dailyTasks.map((task: LearningTask, taskIndex: number) => (
                        <li key={taskIndex} className="p-4 bg-gray-50 rounded-md border border-gray-200">
                            <p className="font-semibold text-gray-800 flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                <span>{task.day}: <span className="font-normal text-gray-700">{task.task}</span></span>
                            </p>
                            {task.resources && task.resources.length > 0 && (
                            <div className="mt-3 pl-8">
                                <p className="text-sm text-gray-600 font-semibold mb-2">Suggested Resources:</p>
                                <ul className="space-y-2">
                                {task.resources.map((resource, resIndex) => (
                                    <li key={resIndex} className="text-sm text-gray-700 flex justify-between items-center p-2 bg-white rounded-md border border-gray-200">
                                    {resource.startsWith('http') ? (
                                        <a href={resource} target="_blank" rel="noopener noreferrer" className="text-black hover:underline break-all flex items-center min-w-0 font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.536a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                            </svg>
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
                                        className="ml-4 text-xs px-2 py-1 flex-shrink-0"
                                        isLoading={isGroundedSearchLoading && groundedSearchQuery === resource}
                                        disabled={isGroundedSearchLoading || !apiKey}
                                    >
                                        Find Resources
                                    </Button>
                                    )}
                                    </li>
                                ))}
                                </ul>
                            </div>
                            )}
                        </li>
                        ))}
                    </ul>
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
            <div className="flex justify-center items-center py-8">
                <svg className="animate-spin h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="ml-4 text-gray-700">Searching the web for resources...</p>
            </div>
        )}
        {groundedSearchError && (
            <div className="p-4 bg-gray-100 border border-gray-400 text-gray-700 rounded-md">
                {groundedSearchError}
            </div>
        )}
        {groundedSearchResult && (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <div className="p-4 bg-gray-50 rounded-md border">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Summary</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{groundedSearchResult.text}</p>
                </div>
                {groundedSearchResult.sources && groundedSearchResult.sources.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Sources</h3>
                        <ul className="list-disc list-inside space-y-2">
                            {groundedSearchResult.sources.map((source, index) => (
                                <li key={index} className="text-sm">
                                    <a
                                        href={source.web.uri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:underline break-all"
                                    >
                                        {source.web.title || source.web.uri}
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