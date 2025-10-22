
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LearningPath, SkillLevel, WeeklyPlan, LearningTask, GroundingChunk } from '../types';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { getGroundedAnswer, generateLearningPath as generateLearningPathFromService } from '../services/geminiService';
import { API_KEY_ERROR_MESSAGE } from '../constants';

const KaziraLearnMVP: React.FC = () => {
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
      // Button is disabled, but this is a safeguard. The banner already shows the main error.
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
      let friendlyError = "Oops! Something went wrong. Please check your internet connection and try again.";
      if (err instanceof Error) {
          const errorMessage = err.message.toLowerCase();
          if (errorMessage.includes('api key')) {
              friendlyError = "We're having trouble connecting to the AI service due to a configuration issue. Please try again later or contact support if the problem persists.";
          } else if (errorMessage.includes('429') || errorMessage.includes('quota')) {
              friendlyError = "It looks like the AI service is very popular right now! We've hit our request limit. Please try again in a little while.";
          } else if (errorMessage.includes('500') || errorMessage.includes('503')) {
              friendlyError = "The AI service is temporarily unavailable. We're on it! Please try again in a few moments.";
          } else if (errorMessage.includes("ai response format is invalid")) {
              friendlyError = "The AI gave a response we couldn't quite understand. Could you try rephrasing your interests? Being more specific often helps!";
          }
      }
      setError(friendlyError);
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
        let friendlyError = "Sorry, we couldn't search for resources at this time. Please check your internet connection and try again.";
        if (err instanceof Error) {
            const errorMessage = err.message.toLowerCase();
            if (errorMessage.includes('api key')) {
                friendlyError = "We're having trouble connecting to the AI search service due to a configuration issue. Please try again later.";
            } else if (errorMessage.includes('429') || errorMessage.includes('quota')) {
                friendlyError = "The AI search service is very busy right now. Please try again in a little while.";
            } else if (errorMessage.includes('500') || errorMessage.includes('503')) {
                friendlyError = "The AI search service is temporarily unavailable. Please try again in a few moments.";
            }
        }
        setGroundedSearchError(friendlyError);
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
        <h1 className={`text-4xl font-bold text-gray-800 mb-3`}>Personalized Learning Path Generator</h1>
        <p className="text-lg text-gray-600">Enter your interests and skill level, and let our AI craft a unique learning journey for you!</p>
      </motion.div>

      {!apiKey && (
        <div className="mb-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-md text-center shadow" role="alert">
          <p className="font-bold">AI Features Disabled</p>
          <p className="text-sm">{API_KEY_ERROR_MESSAGE}</p>
        </div>
      )}

      <motion.form 
        onSubmit={handleSubmit} 
        className="max-w-xl mx-auto bg-white p-8 shadow-xl rounded-lg"
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

        <div className="mb-8 flex items-center justify-center space-x-3 bg-gray-50 p-3 rounded-md">
          <input
            type="checkbox"
            id="thinkingMode"
            checked={useThinkingMode}
            onChange={(e) => setUseThinkingMode(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
            disabled={isLoading || !apiKey}
          />
          <div>
            <label htmlFor="thinkingMode" className="block text-sm font-medium text-gray-800">
              Enable Advanced "Thinking Mode"
            </label>
            <p className="text-xs text-gray-500">Uses a more powerful model for complex topics. May take longer.</p>
          </div>
        </div>

        <Button type="submit" isLoading={isLoading} disabled={isLoading || !interests.trim() || !apiKey} className="w-full">
          {isLoading ? 'Generating Your Path...' : 'Generate Learning Path'}
        </Button>
      </motion.form>

      <AnimatePresence>
        {error && (
          <motion.div 
            className="mt-8 max-w-xl mx-auto p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center"
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
            className="mt-12 max-w-3xl mx-auto bg-white p-8 shadow-2xl rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className={`text-3xl font-bold text-gray-800 mb-2 text-center`}>{learningPath.title}</h2>
            <p className="text-center text-gray-600 mb-1"><strong>Skill Level:</strong> <span className="capitalize">{learningPath.skillLevel}</span></p>
            <p className="text-center text-gray-600 mb-6"><strong>Focus:</strong> {learningPath.interests}</p>
            
            {learningPath.weeklyPlan.map((week: WeeklyPlan) => (
              <motion.div 
                key={week.week} 
                className="mb-8 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: week.week * 0.1 }}
              >
                <h3 className={`text-xl font-semibold text-gray-800 mb-3`}>Week {week.week}: {week.summary}</h3>
                <ul className="space-y-3">
                  {week.dailyTasks.map((task: LearningTask, taskIndex: number) => (
                    <li key={taskIndex} className="p-3 bg-gray-50 rounded-md border border-gray-100">
                      <p className="font-medium text-gray-800">{task.day}: <span className="font-normal text-gray-700">{task.task}</span></p>
                      {task.resources && task.resources.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 font-semibold">Resources:</p>
                          <ul className="space-y-2 mt-1">
                            {task.resources.map((resource, resIndex) => (
                              <li key={resIndex} className="text-sm text-gray-700 flex justify-between items-center p-2 bg-white rounded-md border">
                                {resource.startsWith('http') ? (
                                    <a href={resource} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all flex items-center min-w-0">
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
              </motion.div>
            ))}
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
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                {groundedSearchError}
            </div>
        )}
        {groundedSearchResult && (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <div className="p-4 bg-gray-50 rounded-md border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Summary</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{groundedSearchResult.text}</p>
                </div>
                {groundedSearchResult.sources && groundedSearchResult.sources.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sources</h3>
                        <ul className="list-disc list-inside space-y-2">
                            {groundedSearchResult.sources.map((source, index) => (
                                <li key={index} className="text-sm">
                                    <a
                                        href={source.web.uri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline break-all"
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
