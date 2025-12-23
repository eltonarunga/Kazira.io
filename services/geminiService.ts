
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
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { LearningPath, SkillLevel, Candidate, GroundingChunk, ExamFeedback } from '../types';
import { GEMINI_MODEL_TEXT, GEMINI_MODEL_PRO } from "../constants";

/**
 * Generates a personalized learning path using the Gemini API with Structured Outputs.
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

  const prompt = `As an AI skills coach, generate a 4-week learning plan for someone interested in "${interests}" and sustainability innovation, tailored to their skill level: ${skillLevel}. The plan should be structured weekly, with daily actionable tasks or learning resources.`;
  
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
    // Only Gemini 2.5 and 3 series support thinkingConfig. 
    // Setting maximum budget for pro model as per guidelines.
    config.thinkingConfig = { thinkingBudget: 32768 };
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: config,
    });
    
    // Using .text property directly as per latest SDK guidelines
    const learningPathData = JSON.parse(response.text || "{}") as LearningPath;
    
    if (learningPathData && learningPathData.title && learningPathData.weeklyPlan) {
      return learningPathData;
    } else {
      console.error("Data missing required fields:", learningPathData);
      throw new Error("AI response incomplete.");
    }
  } catch (error) {
    console.error("Error calling Gemini API for learning path:", error);
    throw error; 
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

    // Extracting text output via property
    const text = response.text;
    const candidates = response.candidates as Candidate[] | undefined;
    let sources: GroundingChunk[] = [];

    // Extract URLs from groundingChunks as required by grounding rules
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
        model: GEMINI_MODEL_TEXT,
        contents: prompt
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating bio:", error);
    throw error;
  }
};

/**
 * Grades a user's answer to the Kenya AI Exam.
 * @param question The exam question title and content.
 * @param userAnswer The user's submitted answer.
 * @param apiKey The Google Gemini API key.
 */
export const gradeExamAnswer = async (
  question: { title: string; content: string },
  userAnswer: string,
  apiKey: string
): Promise<ExamFeedback | null> => {
  const ai = new GoogleGenAI({ apiKey });

  const prompt = `You are a strict but fair professor grading "Kenya's Final AI Exam". 
  The Question was: "${question.title}": "${question.content}".
  The Student Answered: "${userAnswer}".

  Grade this answer on a scale of 0-100. 
  The criteria are: 
  1. Does it address the specific Kenyan context (Utu, Harambee, local economics)? 
  2. Does it handle the paradox (Math vs Philosophy)? 
  3. Is it creative?

  Return JSON with:
  - score (number)
  - feedback (string, concise critique)
  - perspectiveAnalysis (string, which philosopher/school of thought does this answer resemble?)`;

  const config: any = {
    responseMimeType: "application/json",
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        score: { type: Type.NUMBER },
        feedback: { type: Type.STRING },
        perspectiveAnalysis: { type: Type.STRING },
      }
    }
  };

  try {
    const response = await ai.models.generateContent({
      // Use the Pro model for complex reasoning and evaluation tasks
      model: GEMINI_MODEL_PRO,
      contents: prompt,
      config: config
    });
    
    return JSON.parse(response.text || "{}") as ExamFeedback;
  } catch (error) {
    console.error("Error grading exam:", error);
    return null;
  }
};
