
/********************************************************************************
 * SECURITY WARNING: MOCK DATABASE - PROTOTYPE ONLY
 * This layer simulates a backend. In production, these checks must occur 
 * on a secure server (Node.js/Python/Go).
 ********************************************************************************/
import { User } from '../types';
import { generateSecureId, isValidEmail } from './securityService';

const USERS_KEY = 'kazira_users_db';
const SESSION_KEY = 'kazira_session_user_id';
const MOCK_LATENCY = 300; 

const simulate = <T>(data: T): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), MOCK_LATENCY));
};

const getUsersDB = (): Record<string, User> => {
  try {
    const db = localStorage.getItem(USERS_KEY);
    return db ? JSON.parse(db) : {};
  } catch (e) {
    return {};
  }
};

const saveUsersDB = (db: Record<string, User>): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(db));
};

/**
 * Handles login via email or as an anonymous explorer.
 * Guest email logins are deprecated in favor of Explorer access and Update collection.
 */
export const loginUser = async (email: string, isExplorer: boolean = false): Promise<User | null> => {
  const db = getUsersDB();
  
  // For prototype purposes, explorer is the primary entry point.
  // We keep the architecture for typed users for future integration.
  const targetEmail = isExplorer ? 'explorer@kazira.io' : email.toLowerCase();
  
  // Basic validation if email is provided
  if (!isExplorer && !isValidEmail(targetEmail)) {
     return simulate(null);
  }

  let user = Object.values(db).find(u => u.email.toLowerCase() === targetEmail);

  if (!user) {
    const id = isExplorer ? 'explorer_id' : generateSecureId();
    const name = isExplorer ? 'Explorer' : targetEmail.split('@')[0].replace(/[^a-zA-Z0-9]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    user = { 
      id, 
      name, 
      email: targetEmail, 
      bio: isExplorer ? 'I am exploring Kazira.io features anonymously.' : '' 
    };
    db[id] = user;
    saveUsersDB(db);
  }

  localStorage.setItem(SESSION_KEY, user.id);
  return simulate(user);
};

export const logoutUser = async (): Promise<void> => {
  localStorage.removeItem(SESSION_KEY);
  return simulate(undefined);
};

export const getSessionUser = async (): Promise<User | null> => {
  const userId = localStorage.getItem(SESSION_KEY);
  if (!userId) return simulate(null);

  const db = getUsersDB();
  const user = db[userId] || null;
  
  if (!user) {
    localStorage.removeItem(SESSION_KEY);
  }

  return simulate(user);
};

export const updateUserProfile = async (updatedData: Partial<User>): Promise<User | null> => {
  const userId = localStorage.getItem(SESSION_KEY);
  if (!userId) return simulate(null);

  const db = getUsersDB();
  const user = db[userId];

  if (!user) {
    localStorage.removeItem(SESSION_KEY);
    return simulate(null);
  }

  // SECURITY: Strictly allow only specific fields to be updated
  const newUserData = { 
    ...user,
    name: updatedData.name ? updatedData.name.slice(0, 100) : user.name,
    bio: updatedData.bio !== undefined ? updatedData.bio.slice(0, 500) : user.bio,
  };
  db[userId] = newUserData;
  saveUsersDB(db);

  return simulate(newUserData);
};
