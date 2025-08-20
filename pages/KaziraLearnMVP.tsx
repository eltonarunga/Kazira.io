
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { LearningPath, SkillLevel, WeeklyPlan, LearningTask } from '../types';
import Button from '../components/common/Button';
import { API_KEY_ERROR_MESSAGE, GEMINI_MODEL_TEXT } from '../constants';

const KaziraLearnMVP: React.FC = () => {
  const [interests, setInterests] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(SkillLevel.BEGINNER);
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(process.env.API_KEY || null);

  const parseGeminiResponse = (responseText: string): LearningPath | null => {
    let jsonStr = responseText.trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s; // Matches ```json ... ``` or ``` ... ```
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
  
    try {
      const parsedData = JSON.parse(jsonStr);
      // Basic validation of the parsed structure
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
      console.error(API_KEY_ERROR_MESSAGE);
      // In a real app, you might have a global handler or a more user-friendly way to manage API key issues.
      // For this example, we'll just show an error.
      // You could prompt the user or guide them if process.env.API_KEY is the *only* way to set it.
      // However, the instructions state "Assume this variable is pre-configured".
      // If it's missing, it's an environment setup issue.
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
          responseMimeType: "application/json", // Request JSON output
          temperature: 0.7, // Balance creativity and predictability
        },
      });

      const parsedPath = parseGeminiResponse(response.text);
      if (parsedPath) {
        setLearningPath(parsedPath);
      }
      // Firestore saving would happen here in a full-stack app
      // console.log("Learning path generated and would be saved to Firestore:", parsedPath);

    } catch (err) {
      console.error("Error generating learning path:", err);
      setError("Sorry, an error occurred while generating your learning path. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [interests, skillLevel, apiKey]);

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
                        <div className="mt-1">
                          <p className="text-xs text-gray-500 font-semibold">Resources:</p>
                          <ul className="list-disc list-inside ml-4">
                            {task.resources.map((resource, resIndex) => (
                              <li key={resIndex} className="text-xs text-gray-700 hover:underline">
                                {resource.startsWith('http') ? <a href={resource} target="_blank" rel="noopener noreferrer">{resource}</a> : resource}
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
    </div>
  );
};

export default KaziraLearnMVP;
