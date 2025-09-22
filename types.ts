
export interface LearningTask {
  day: string;
  task: string;
  resources?: string[];
}

export interface WeeklyPlan {
  week: number;
  summary: string;
  dailyTasks: LearningTask[];
}

export interface LearningPath {
  title: string;
  skillLevel: SkillLevel;
  interests: string;
  weeklyPlan: WeeklyPlan[];
}

export enum SkillLevel {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  EXPERT = "expert",
}

export interface NavItem {
  name: string;
  href: string;
  isPageLink?: boolean; // To distinguish between page links and section scroll links
  isExternal?: boolean;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}
export interface GroundingChunk {
  web: GroundingChunkWeb;
}
export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
}
export interface Candidate {
  groundingMetadata?: GroundingMetadata;
}
export interface GeminiResponse {
  text: string;
  candidates?: Candidate[];
}

export interface User {
  id: string;
  name: string;
  email: string;
}
