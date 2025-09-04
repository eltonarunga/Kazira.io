
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { LearningPath, SkillLevel, WeeklyPlan, LearningTask, GroundingChunk } from '../types';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { getGroundedAnswer } from '../services/geminiService';
import { API_KEY_ERROR_MESSAGE, GEMINI_MODEL_TEXT } from '../constants';

const KaziraLearnMVP: React.FC = () => {
  const [interests, setInterests] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(SkillLevel.BEGINNER);
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey] = useState<string | null>(process.env.API_KEY || null);

  const [isResourceModalOpen, setIsResourceModalOpen] = useState<boolean>(false);
  const [groundedSearchQuery, setGroundedSearchQuery] = useState<string>('');
  const [isGroundedSearchLoading, setIsGroundedSearchLoading] = useState<boolean>(false);
  const [groundedSearchResult, setGroundedSearchResult] = useState<{ text: string; sources: GroundingChunk[] } | null>(null);
  const [groundedSearchError, setGroundedSearchError] = useState<string | null>(null);


  const parseGeminiResponse = (responseText: string): LearningPath | null => {
    let jsonStr = responseText.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
  
    try {
      const parsedData = JSON.parse(jsonStr);
      if (parsedData && parsedData.title && parsedData.weeklyPlan && Array.isArray(parsedData.weeklyPlan)) {
        return parsedData as LearningPath;
      }
      console.error("Parsed JSON does not match LearningPath structure:", parsedData);
      setError("Received an unexpected format from AI. Please try again.");
      return null;
    } catch (e) {
      console.error("Failed to parse JSON response:", e, "Raw response:", jsonStr);
      setError("Failed to understand AI's response. It might not be valid JSON.");
      return null;
    }
  };

  const generateLearningPath = useCallback(async () => {
    if (!interests.trim()) {
      setError("Please enter your interests.");
      return;
    }
    if (!apiKey) {
      setError(API_KEY_ERROR_MESSAGE);
      return;
    }

    setIsLoading(true);
    setError(null);
    setLearningPath(null);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `As an AI skills coach, generate a 4-week learning plan for someone interested in "${interests}" and sustainability innovation, tailored to their skill level: ${skillLevel}. The plan should be structured weekly, with daily actionable tasks or learning resources. Output the plan as a single, valid JSON object with keys: "title" (string), "skillLevel" (string, e.g., "beginner"), "interests" (string, reflecting the input), and "weeklyPlan" (array of objects). Each object in "weeklyPlan" should represent a week and have keys: "week" (number), "summary" (string), and "dailyTasks" (array of objects). Each "dailyTasks" object should have keys: "day" (string, e.g., "Monday"), "task" (string), and optionally "resources" (array of strings, for URLs or book titles). Ensure the entire output is strictly a single JSON object, without any surrounding text or markdown.`;
      
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL_TEXT,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const parsedPath = parseGeminiResponse(response.text);
      if (parsedPath) {
        setLearningPath(parsedPath);
      }
    } catch (err) {
      console.error("Error generating learning path:", err);
      setError("Sorry, an error occurred while generating your learning path. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [interests, skillLevel, apiKey]);
  
  const handleGroundedSearch = useCallback(async (query: string) => {
    if (!apiKey) {
        setGroundedSearchError(API_KEY_ERROR_MESSAGE);
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
        setGroundedSearchError("Sorry, an error occurred while searching for resources. Please try again.");
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
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
          {API_KEY_ERROR_MESSAGE} Please set up your API key to use this feature.
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

        <div className="mb-8">
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
                                    disabled={isGroundedSearchLoading}
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
