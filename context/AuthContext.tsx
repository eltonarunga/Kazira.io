import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { User } from '../types';
import * as db from '../services/databaseService';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
  updateUser: (updatedUserData: Partial<User>) => Promise<User | null>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On initial load, check for an existing session.
  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      try {
        const sessionUser = await db.getSessionUser();
        setUser(sessionUser);
      } catch (error) {
        console.error("Failed to retrieve session", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<User | null> => {
    // In a real app, you might set a loading state here.
    const loggedInUser = await db.loginUser(email, password);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    // In a real app with JWTs, you'd store the token here.
    return loggedInUser;
  }, []);

  const logout = useCallback(async () => {
    await db.logoutUser();
    setUser(null);
  }, []);

  const updateUser = useCallback(async (updatedUserData: Partial<User>): Promise<User | null> => {
    if (!user) {
      console.error("Cannot update user: no user is currently logged in.");
      return null;
    }
    // The database service now infers the user from the session, so we don't pass the ID.
    // This prevents a user from maliciously trying to update another user's profile.
    const updatedUser = await db.updateUserProfile(updatedUserData);
    if (updatedUser) {
      setUser(updatedUser);
    }
    return updatedUser;
  }, [user]);

  // isLoading provides context for components that need to wait for auth state to be resolved.
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  
  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, isLoading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};