'use client';

// * React
import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

// * NextJS
import { useRouter, usePathname } from 'next/navigation';

// * Services
import * as AuthService from '@/shared/services/auth'

// * Models
import { RegisterData } from '@/shared/services/models/auth';
import { SystemUser } from '@/shared/models/system-user';

// * Data
import { publicRoutes } from '../data/public-routes';

interface AuthContextType {
  user: SystemUser | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  refreshToken: () => Promise<void>; // Nuevo método para refrescar el token
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const [user, setUser] = useState<SystemUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Solo corre "client-side" despues de que se monten los componentes
  useEffect(() => {
    // Solo se ejecuta cuando ya se pueda acceder a "localStorage"
    if (typeof window !== "undefined") {
      verify()
    } else {
      setIsLoading(false);
    }
  }, []);

  // Solo corre "client-side" despues de que se monten los componentes
  useEffect(() => {
    // if (isLoading) return;

    const handleActivity = () => {
      refreshToken();
    };

    window.addEventListener('click', handleActivity);
    window.addEventListener('keydown', handleActivity);

    return () => {
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
    // }, [isLoading]);
  }, []);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  const verify = async () => {
    try {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) return;

      const data = await AuthService.verify(storedToken);
      setUser(data.user);
    } catch (error) {
      console.error('Auth verify failed:', error);
      localStorage.removeItem('token');
      setUser(null);
      // router.push('/signin'); // No es necesario redirigir a "signin" ya que este metodo corre en el inicio de la app, cuando se muestra la Landing PAge
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const data = await AuthService.login(email, password);
      localStorage.setItem('token', data.token);
      setUser(data.user);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);

    try {
      const data = await AuthService.register(userData)

      localStorage.setItem('token', data.token);
      setUser(data.user);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push("/signin");
  };

  const refreshToken = async () => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const data = await AuthService.refreshToken(storedToken);

        localStorage.setItem('token', data.token);
        // setUser(data.user);
      } catch (error) {
        console.error('Error refreshing token:', error);

        localStorage.removeItem('token');
        setUser(null);

        const currentPath = pathnameRef.current;
        const isPublicRoute = publicRoutes.includes(currentPath);

        if (!isPublicRoute) router.push('/signin');
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading, refreshToken }}>
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