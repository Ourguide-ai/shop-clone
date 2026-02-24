"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { User, Address } from "@/lib/types";
import { apiPost, apiGet, apiPut, apiDelete, setToken, clearToken, hasToken } from "@/lib/api";

type PublicUser = Omit<User, "password">;

interface AuthContextType {
  user: PublicUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  signUp: (name: string, email: string, dob: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
  updateProfile: (data: { name?: string; email?: string; dob?: string; address?: Address }) => Promise<{ success: boolean; error?: string }>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  deleteAccount: (password: string) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Hydrate user from token on mount
  useEffect(() => {
    async function hydrate() {
      if (!hasToken()) {
        setLoading(false);
        return;
      }
      try {
        const data = await apiGet<{ user: PublicUser }>("/api/auth/me");
        setUser(data.user);
      } catch {
        clearToken();
      } finally {
        setLoading(false);
      }
    }
    hydrate();
  }, []);

  const signUp = useCallback(
    async (name: string, email: string, dob: string, password: string): Promise<{ success: boolean; error?: string }> => {
      try {
        const data = await apiPost<{ user: PublicUser; token: string }>("/api/auth/signup", {
          name,
          email,
          dob,
          password,
        });
        setToken(data.token);
        setUser(data.user);
        return { success: true };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Sign up failed";
        return { success: false, error: message };
      }
    },
    []
  );

  const signIn = useCallback(
    async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
      try {
        const data = await apiPost<{ user: PublicUser; token: string }>("/api/auth/signin", {
          email,
          password,
        });
        setToken(data.token);
        setUser(data.user);
        return { success: true };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Sign in failed";
        return { success: false, error: message };
      }
    },
    []
  );

  const signOut = useCallback(() => {
    clearToken();
    setUser(null);
  }, []);

  const updateProfile = useCallback(
    async (data: { name?: string; email?: string; dob?: string; address?: Address }): Promise<{ success: boolean; error?: string }> => {
      try {
        const result = await apiPut<{ user: PublicUser }>("/api/auth/profile", data);
        setUser(result.user);
        return { success: true };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Update failed";
        return { success: false, error: message };
      }
    },
    []
  );

  const changePassword = useCallback(
    async (currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
      try {
        await apiPut<{ success: boolean }>("/api/auth/password", {
          currentPassword,
          newPassword,
        });
        return { success: true };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Password change failed";
        return { success: false, error: message };
      }
    },
    []
  );

  const deleteAccount = useCallback(
    async (password: string): Promise<{ success: boolean; error?: string }> => {
      try {
        await apiDelete<{ success: boolean }>("/api/auth/account", { password });
        clearToken();
        setUser(null);
        return { success: true };
      } catch (err) {
        const message = err instanceof Error ? err.message : "Delete failed";
        return { success: false, error: message };
      }
    },
    []
  );

  const isAuthenticated = user !== null;

  const value = useMemo(
    () => ({ user, isAuthenticated, loading, signUp, signIn, signOut, updateProfile, changePassword, deleteAccount }),
    [user, isAuthenticated, loading, signUp, signIn, signOut, updateProfile, changePassword, deleteAccount]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
