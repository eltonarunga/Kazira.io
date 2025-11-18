/********************************************************************************
 * SECURITY WARNING: PROTOTYPE ONLY
 *
 * This service communicates directly with the Google Gemini API from the client-side.
 * This is done for demonstration purposes in a sandboxed environment.
 *
 * In a production application, you MUST NOT expose your API key in the frontend.
 * Doing so would allow anyone to steal your key and use it at your expense.
 *
 * All API calls should be proxied through a secure backend server that holds the
 * API key and manages requests.
 ********************************************************************************/
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { LearningPath, SkillLevel, Candidate, GroundingChunk } from '../types';
import { GEMINI_MODEL_TEXT, GEMINI_MODEL_PRO } from "../constants";

/**
 * Parses the Gemini API response text to extract JSON content.
 * Handles potential markdown code fences.
 * @param responseText The raw text from Gemini API.
 * @returns Parsed JSON object or null if parsing fails.
 */
const parseJsonFromText = <T,>(responseText: string): T | null => {
  let jsonStr = responseText.trim();
  const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
  const match = jsonStr.match(fenceRegex);
  if (match && match[2]) {
    jsonStr = match[2].trim();
  }

  try {
    return JSON.parse(jsonStr) as T;
  } catch (e) {
    console.error("Failed to parse JSON from response:", e, "Raw text:", jsonStr);
    return null;
  }
};

/**
 * Generates a personalized learning path using the Gemini API.
 * @param interests The user's interests.
 * @param skillLevel The user's skill level.
 * @param apiKey The Google Gemini API key.
 * @param useThinkingMode Whether to use the advanced model with a higher thinking budget.
 * @returns A LearningPath object or null if an error occurs.
 */
export const generateLearningPath = async (
  interests: string,
  skillLevel: SkillLevel,
  apiKey: string,
  useThinkingMode: boolean
): Promise<LearningPath | null> => {
  const ai = new GoogleGenAI({ apiKey });

  const modelName = useThinkingMode ? GEMINI_MODEL_PRO : GEMINI_MODEL_TEXT;

  const prompt = `As an AI skills coach, generate a 4-week learning plan for someone interested in "${interests}" and sustainability innovation, tailored to their skill level: ${skillLevel}. The plan should be structured weekly, with daily actionable tasks or learning resources. Output the plan as a single, valid JSON object with keys: "title" (string), "skillLevel" (string, e.g., "beginner"), "interests" (string, reflecting the input), and "weeklyPlan" (array of objects). Each object in "weeklyPlan" should represent a week and have keys: "week" (number), "summary" (string), and "dailyTasks" (array of objects). Each "dailyTasks" object should have keys: "day" (string, e.g., "Monday"), "task" (string), and optionally "resources" (array of strings, for URLs or book titles). Ensure the entire output is strictly a single JSON object, without any surrounding text or markdown.`;
  
  const config: any = {
    responseMimeType: "application/json",
    temperature: 0.7,
  };

  if (useThinkingMode) {
    config.thinkingConfig = { thinkingBudget: 32768 };
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: config,
    });
    
    const learningPathData = parseJsonFromText<LearningPath>(response.text);
    
    if (learningPathData && learningPathData.title && learningPathData.weeklyPlan) {
      return learningPathData;
    } else {
      console.error("Parsed data does not conform to LearningPath structure:", learningPathData);
      throw new Error("AI response format is invalid.");
    }
  } catch (error) {
    console.error("Error calling Gemini API for learning path:", error);
    throw error; // Re-throw for the component to handle
  }
};


/**
 * Fetches a grounded answer from the Gemini API using Google Search.
 * @param query The query to search for.
 * @param apiKey The Google Gemini API key.
 * @returns An object containing the AI's text response and a list of sources.
 */
export const getGroundedAnswer = async (
  query: string,
  apiKey: string
): Promise<{ text: string; sources: GroundingChunk[] }> => {
  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: `Provide a concise summary and explanation for the topic: "${query}".`,
      config: {
        tools: [{googleSearch: {}}], // Enable Google Search grounding
      },
    });

    const text = response.text;
    const candidates = response.candidates as Candidate[] | undefined;
    let sources: GroundingChunk[] = [];

    if (candidates && candidates.length > 0 && candidates[0].groundingMetadata?.groundingChunks) {
      sources = candidates[0].groundingMetadata.groundingChunks;
    }
    
    return { text, sources };

  } catch (error) {
    console.error("Error calling Gemini API with grounding:", error);
    throw error;
  }
};


/**
 * Generates a professional bio for a user.
 * @param name The user's name.
 * @param apiKey The Google Gemini API key.
 * @returns A string containing the generated bio.
 */
export const generateBio = async (name: string, apiKey: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey });
  const prompt = `Write a short, professional, and slightly witty bio (around 40-60 words) for a person named ${name}. They are a forward-thinking professional interested in AI, technology, and future skills. Write it in the first person.`;

  try {
    const response = await ai.models.generateContent({
        model: GEMINI_MODEL_TEXT, // Use flash for speed
        contents: prompt
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating bio:", error);
    throw error;
  }
};