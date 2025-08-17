
// This file is largely illustrative as the Gemini logic is integrated into KaziraLearnMVP.tsx for this example.
// In a larger application, you would centralize Gemini API interactions here.
// For now, KaziraLearnMVP.tsx contains the primary Gemini API call.
// The instructions mention `process.env.API_KEY` must be used. This is handled in KaziraLearnMVP.tsx.

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { LearningPath, SkillLevel, Candidate, GroundingChunk } from '../types'; // Assuming types.ts exists
import { GEMINI_MODEL_TEXT, API_KEY_ERROR_MESSAGE } from "../constants";

// This is an example function. The actual implementation is in KaziraLearnMVP.tsx for this project.
// It's kept here to demonstrate how a service file could be structured.

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

export const generateLearningPathWithGemini = async (
  interests: string,
  skillLevel: SkillLevel,
  apiKey: string | null
): Promise<LearningPath | null> => {
  if (!apiKey) {
    console.error(API_KEY_ERROR_MESSAGE);
    throw new Error(API_KEY_ERROR_MESSAGE);
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `As an AI skills coach, generate a 4-week learning plan for someone interested in "${interests}" and sustainability innovation, tailored to their skill level: ${skillLevel}. The plan should be structured weekly, with daily actionable tasks or learning resources. Output the plan as a single, valid JSON object with keys: "title" (string), "skillLevel" (string, e.g., "beginner"), "interests" (string, reflecting the input), and "weeklyPlan" (array of objects). Each object in "weeklyPlan" should represent a week and have keys: "week" (number), "summary" (string), and "dailyTasks" (array of objects). Each "dailyTasks" object should have keys: "day" (string, e.g., "Monday"), "task" (string), and optionally "resources" (array of strings, for URLs or book titles). Ensure the entire output is strictly a single JSON object, without any surrounding text or markdown.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });
    
    const learningPathData = parseJsonFromText<LearningPath>(response.text);
    
    if (learningPathData && learningPathData.title && learningPathData.weeklyPlan) {
      return learningPathData;
    } else {
      console.error("Parsed data does not conform to LearningPath structure:", learningPathData);
      throw new Error("AI response format is invalid.");
    }

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error; // Re-throw for the component to handle
  }
};


export const getGroundedAnswer = async (
  query: string,
  apiKey: string | null
): Promise<{ text: string; sources: GroundingChunk[] }> => {
  if (!apiKey) {
    console.error(API_KEY_ERROR_MESSAGE);
    throw new Error(API_KEY_ERROR_MESSAGE);
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT, // Ensure this model supports grounding if needed, or adjust. Gemini Flash is good.
      contents: query,
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

// Note: The actual Gemini API calls for this project are primarily within KaziraLearnMVP.tsx.
// This file serves as a structural example for service organization.
