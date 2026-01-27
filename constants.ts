
import { NavItem } from './types';

export const API_KEY_ERROR_MESSAGE = "AI features are currently unavailable due to a configuration issue. Please contact support if you believe this is an error.";
// Updated model names to follow latest Gemini API guidelines
export const GEMINI_MODEL_TEXT = "gemini-3-flash-preview";
export const GEMINI_MODEL_PRO = "gemini-3-pro-preview";
export const GEMINI_MODEL_FLASH_LITE = "gemini-flash-lite-latest";


const JOB_SCANNER_URL = "https://opal.withgoogle.com/?flow=drive:/1g5EsPt18QZYsNAcaE1f9KgmCnWOQEvin&shared&mode=app";

export const NAV_ITEMS_LOGGED_OUT: NavItem[] = [
  { name: "Home", href: "/", isPageLink: true },
  { name: "Learn", href: "/learn", isPageLink: true },
  { name: "Automate", href: "/automate", isPageLink: true },
  { name: "Job Scanner", href: JOB_SCANNER_URL, isPageLink: false, isExternal: true },
  { name: "AI Exam", href: "/kenya-ai-exam", isPageLink: true },
  { name: "Professor", href: "/consult-professor", isPageLink: true },
  { name: "Login", href: "/login", isPageLink: true },
];

export const NAV_ITEMS_LOGGED_IN: NavItem[] = [
  { name: "Home", href: "/", isPageLink: true },
  { name: "Learn", href: "/learn", isPageLink: true },
  { name: "Automate", href: "/automate", isPageLink: true },
  { name: "Profile", href: "/profile", isPageLink: true },
  { name: "Job Scanner", href: JOB_SCANNER_URL, isPageLink: false, isExternal: true },
  { name: "AI Exam", href: "/kenya-ai-exam", isPageLink: true },
  { name: "Professor", href: "/consult-professor", isPageLink: true },
];

export const LANDING_PAGE_NAV_ITEMS: NavItem[] = [
  { name: "What is Kazira?", href: "#what-is-kazira" },
  { name: "Solutions", href: "#solutions" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Waitlist", href: "#waitlist" },
];

export const KAZIRA_PRIMARY_COLOR = "gray"; // Tailwind color name
export const KAZIRA_SECONDARY_COLOR = "gray"; // Tailwind color name
