import React, { createContext, useContext, useState } from 'react';
import type { User, AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'user',
    };
    setUser(mockUser);
  };

  const signup = async (email: string, password: string, name: string, age?: number, gender?: string) => {
    // Simulate API call
    const mockUser: User = {
      id: crypto.randomUUID(),
      email,
      name,
      age,
      gender,
      role: 'user',
    };
    setUser(mockUser);
  };

  const updateUser = async (userData: Partial<User>) => {
    // Simulate API call
    setUser(prev => prev ? { ...prev, ...userData } : null);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};