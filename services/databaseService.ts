
import { User } from '../types';

// In a real serverless backend, these would be database collections (e.g., in Firestore or DynamoDB).
// For this mock, we use localStorage to simulate persistence.
const USERS_KEY = 'kazira_users_db';
const SESSION_KEY = 'kazira_session_user_id';
const WAITLIST_KEY = 'kazira_waitlist_db';
const MOCK_LATENCY = 500; // ms to simulate network delay

// --- Private Helper Functions ---

/**
 * Simulates network latency for async operations.
 * @param data The data to return after the delay.
 */
const simulate = <T>(data: T): Promise<T> => {
  return new Promise(resolve => setTimeout(() => resolve(data), MOCK_LATENCY));
};

/**
 * Retrieves the mock user database from localStorage.
 */
const getUsersDB = (): Record<string, User> => {
  try {
    const db = localStorage.getItem(USERS_KEY);
    return db ? JSON.parse(db) : {};
  } catch (e) {
    console.error("Failed to parse users DB from localStorage", e);
    return {};
  }
};

/**
 * Saves the mock user database to localStorage.
 * @param db The user database object.
 */
const saveUsersDB = (db: Record<string, User>): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(db));
};

// --- Public API ---

/**
 * Simulates user login. If the user doesn't exist, it creates a new account.
 * In a real app, this would validate credentials against a backend.
 * @param email User's email.
 * @param password User's password (ignored in this mock, but required for the interface).
 * @returns The user object if successful, otherwise null.
 */
export const loginUser = async (email: string, password?: string): Promise<User | null> => {
  // Password is not validated in this mock, but its presence is checked.
  if (!email || !password) return simulate(null);

  const db = getUsersDB();
  let user = Object.values(db).find(u => u.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    // User not found, simulate registration
    const id = `user_${Date.now()}`;
    const name = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    user = { id, name, email, bio: '' };
    db[id] = user;
    saveUsersDB(db);
  }

  // Set the current session
  localStorage.setItem(SESSION_KEY, user.id);
  
  // In a real app, you would return a JWT or session token.
  return simulate(user);
};

/**
 * Simulates user logout by clearing the session.
 */
export const logoutUser = async (): Promise<void> => {
  localStorage.removeItem(SESSION_KEY);
  return simulate(undefined);
};

/**
 * Retrieves the currently logged-in user based on the session.
 * @returns The user object if a session exists, otherwise null.
 */
export const getSessionUser = async (): Promise<User | null> => {
  const userId = localStorage.getItem(SESSION_KEY);
  if (!userId) return simulate(null);

  const db = getUsersDB();
  const user = db[userId] || null;
  
  // If user was deleted from DB but session still exists, clear session.
  if (!user) {
    localStorage.removeItem(SESSION_KEY);
  }

  return simulate(user);
};

/**
 * Simulates updating a user's profile information.
 * @param userId The ID of the user to update.
 * @param updatedData Partial user data to update.
 * @returns The updated user object, or null if user not found.
 */
export const updateUserProfile = async (userId: string, updatedData: Partial<User>): Promise<User | null> => {
  const db = getUsersDB();
  const user = db[userId];

  if (!user) {
    return simulate(null);
  }

  // Allow updating name and bio.
  const newUserData = { 
    ...user,
    name: updatedData.name !== undefined ? updatedData.name : user.name,
    bio: updatedData.bio !== undefined ? updatedData.bio : user.bio,
  };
  db[userId] = newUserData;
  saveUsersDB(db);

  return simulate(newUserData);
};

/**
 * Simulates adding an email to a waitlist.
 * @param email The email to add.
 * @returns A success status.
 */
export const addToWaitlist = async (email: string): Promise<{ success: boolean }> => {
  if (!email || !email.includes('@')) {
    return simulate({ success: false });
  }

  try {
    const waitlist = JSON.parse(localStorage.getItem(WAITLIST_KEY) || '[]');
    if (!waitlist.includes(email)) {
      waitlist.push(email);
      localStorage.setItem(WAITLIST_KEY, JSON.stringify(waitlist));
    }
    return simulate({ success: true });
  } catch (e) {
    console.error("Failed to update waitlist in localStorage", e);
    return simulate({ success: false });
  }
};
