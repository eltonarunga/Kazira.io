import { NavItem } from './types';

export const JOTFORM_UPDATES_URL = "https://form.jotform.com/260052273727050";
export const JOB_SCANNER_URL = "https://opal.withgoogle.com/?flow=drive:/1g5EsPt18QZYsNAcaE1f9KgmCnWOQEvin&shared&mode=app";
export const KAZIRA_LEARN_URL = "https://opal.google/app/1RS_gONM_N73fAQy3u_mtelYIjJHNtfN8";
export const KAARB_URL = "https://kaarb.vercel.app/";

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/", isPageLink: true },
  { name: "Learn", href: KAZIRA_LEARN_URL, isPageLink: false, isExternal: true },
  { name: "Automate", href: "/automate", isPageLink: true },
  { name: "Job Scanner", href: JOB_SCANNER_URL, isPageLink: false, isExternal: true },
  { name: "K-AARB Benchmark", href: KAARB_URL, isPageLink: false, isExternal: true },
];

// Kept for backward compatibility with components importing either name
export const NAV_ITEMS_LOGGED_OUT = NAV_ITEMS;
export const NAV_ITEMS_LOGGED_IN = NAV_ITEMS;
export const LANDING_PAGE_NAV_ITEMS: NavItem[] = [];

export const KAZIRA_PRIMARY_COLOR = "gray";
export const KAZIRA_SECONDARY_COLOR = "gray";
