
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Session, User, AuthError } from '@supabase/supabase-js';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | { message: string } | null }>;
  signUp: (email: string, password: string, metaData: Record<string, unknown>) => Promise<{ error: AuthError | { message: string } | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    } else {
      // Mock mode
      const storedUser = localStorage.getItem('mock_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setSession({ user: JSON.parse(storedUser) } as Session);
      }
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    if (supabase) {
      return await supabase.auth.signInWithPassword({ email, password });
    } else {
      // Mock login
      if (email && password) {
         const mockUser = { id: 'mock-id', email, user_metadata: {} } as User;
         setUser(mockUser);
         setSession({ user: mockUser } as Session);
         localStorage.setItem('mock_user', JSON.stringify(mockUser));
         return { error: null };
      }
      return { error: { message: "Invalid credentials" } };
    }
  };

  const signUp = async (email: string, password: string, metaData: Record<string, unknown>) => {
    if (supabase) {
      return await supabase.auth.signUp({
        email,
        password,
        options: { data: metaData }
      });
    } else {
      // Mock signup
      const mockUser = { id: 'mock-id', email, user_metadata: metaData } as User;
      setUser(mockUser);
      setSession({ user: mockUser } as Session);
      localStorage.setItem('mock_user', JSON.stringify(mockUser));
      return { error: null };
    }
  };

  const signOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    } else {
      setUser(null);
      setSession(null);
      localStorage.removeItem('mock_user');
    }
  };

  return (
    <AuthContext.Provider value={{ session, user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
