
/********************************************************************************
 * SECURITY WARNING: PROTOTYPE ONLY
 * In production, all AI calls must be handled via a secure Backend (Proxy).
 * Client-side API key usage is highly insecure.
 ********************************************************************************/
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { LearningPath, SkillLevel, Candidate, GroundingChunk } from '../types';
import { GEMINI_MODEL_TEXT, GEMINI_MODEL_PRO } from "../constants";
import { sanitizeInput } from "./securityService";

/**
 * Generates a personalized learning path using the Gemini API with Structured Outputs.
 */
export const generateLearningPath = async (
  interests: string,
  skillLevel: SkillLevel,
  useThinkingMode: boolean
): Promise<LearningPath | null> => {
  // SECURITY: Sanitizing input before prompt construction
  const cleanInterests = sanitizeInput(interests, 200);
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const modelName = useThinkingMode ? GEMINI_MODEL_PRO : GEMINI_MODEL_TEXT;

  const prompt = `As an AI skills coach, generate a 4-week learning plan for someone interested in "${cleanInterests}" and sustainability innovation, tailored to their skill level: ${skillLevel}. The plan should be structured weekly, with daily actionable tasks or learning resources.`;
  
  const config: any = {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        skillLevel: { type: Type.STRING },
        interests: { type: Type.STRING },
        weeklyPlan: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              week: { type: Type.INTEGER },
              summary: { type: Type.STRING },
              dailyTasks: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    day: { type: Type.STRING },
                    task: { type: Type.STRING },
                    resources: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
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
    
    const learningPathData = JSON.parse(response.text || "{}") as LearningPath;
    
    if (learningPathData && learningPathData.title && learningPathData.weeklyPlan) {
      return learningPathData;
    } else {
      throw new Error("AI response incomplete.");
    }
  } catch (error) {
    console.error("Error calling Gemini API for learning path:", error);
    throw error; 
  }
};

/**
 * Fetches a grounded answer using Google Search.
 */
export const getGroundedAnswer = async (
  query: string
): Promise<{ text: string; sources: GroundingChunk[] }> => {
  // SECURITY: Sanitizing search query
  const cleanQuery = sanitizeInput(query, 150);
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: `Provide a concise summary and explanation for the topic: "${cleanQuery}".`,
      config: {
        tools: [{googleSearch: {}}], 
      },
    });

    const text = response.text;
    const candidates = response.candidates as Candidate[] | undefined;
    let sources: GroundingChunk[] = [];

    if (candidates && candidates.length > 0 && candidates[0].groundingMetadata?.groundingChunks) {
      sources = candidates[0].groundingMetadata.groundingChunks;
    }
    
    return { text: text || "No response received.", sources };

  } catch (error) {
    console.error("Error calling Gemini API with grounding:", error);
    throw error;
  }
};

/**
 * Generates a professional bio for a user.
 */
export const generateBio = async (name: string): Promise<string> => {
  const cleanName = sanitizeInput(name, 50);
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Write a short, professional, and slightly witty bio (around 40-60 words) for a person named ${cleanName}. They are a forward-thinking professional interested in AI, technology, and future skills. Write it in the first person.`;

  try {
    const response = await ai.models.generateContent({
        model: GEMINI_MODEL_TEXT,
        contents: prompt
    });
    return response.text?.trim() || "A technology enthusiast exploring the future.";
  } catch (error) {
    console.error("Error generating bio:", error);
    throw error;
  }
};
