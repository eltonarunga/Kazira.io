
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { User } from '../types';
import * as db from '../services/databaseService';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  login: (email: string, isExplorer?: boolean) => Promise<User | null>;
  logout: () => Promise<void>;
  updateUser: (updatedUserData: Partial<User>) => Promise<User | null>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      try {
        const sessionUser = await db.getSessionUser();
        setUser(sessionUser);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, []);

  const login = useCallback(async (email: string, isExplorer: boolean = false): Promise<User | null> => {
    const loggedInUser = await db.loginUser(email, isExplorer);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
    return loggedInUser;
  }, []);

  const logout = useCallback(async () => {
    await db.logoutUser();
    setUser(null);
  }, []);

  const updateUser = useCallback(async (updatedUserData: Partial<User>): Promise<User | null> => {
    if (!user) return null;
    const updatedUser = await db.updateUserProfile(updatedUserData);
    if (updatedUser) {
      setUser(updatedUser);
    }
    return updatedUser;
  }, [user]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }
  
  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, isLoading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
