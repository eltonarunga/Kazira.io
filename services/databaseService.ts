
/********************************************************************************
 * SECURITY WARNING: MOCK DATABASE - PROTOTYPE ONLY
 ********************************************************************************/
import { User } from '../types';

const USERS_KEY = 'kazira_users_db';
const SESSION_KEY = 'kazira_session_user_id';
const WAITLIST_KEY = 'kazira_waitlist_db';
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
 */
export const loginUser = async (email: string, isExplorer: boolean = false): Promise<User | null> => {
  if (!isExplorer && !email) return simulate(null);

  const db = getUsersDB();
  const targetEmail = isExplorer ? 'explorer@kazira.io' : email.toLowerCase();
  
  let user = Object.values(db).find(u => u.email.toLowerCase() === targetEmail);

  if (!user) {
    const id = isExplorer ? 'explorer_id' : `user_${Date.now()}`;
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

  const newUserData = { 
    ...user,
    name: updatedData.name !== undefined ? updatedData.name : user.name,
    bio: updatedData.bio !== undefined ? updatedData.bio : user.bio,
  };
  db[userId] = newUserData;
  saveUsersDB(db);

  return simulate(newUserData);
};

export const addToWaitlist = async (email: string): Promise<{ success: boolean }> => {
  if (!email || !email.includes('@')) return simulate({ success: false });
  try {
    const waitlist = JSON.parse(localStorage.getItem(WAITLIST_KEY) || '[]');
    if (!waitlist.includes(email)) {
      waitlist.push(email);
      localStorage.setItem(WAITLIST_KEY, JSON.stringify(waitlist));
    }
    return simulate({ success: true });
  } catch (e) {
    return simulate({ success: false });
  }
};
