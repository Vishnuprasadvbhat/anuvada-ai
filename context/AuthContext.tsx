// context/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { Session, User } from "@supabase/supabase-js";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  isSignedIn: boolean;
  isLoaded: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isSignedIn: false,
  isLoaded: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const init = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      setSession(data?.session ?? null);
      setIsLoaded(true);
    {
      if (data?.session) {
        setSession(data.session);
      } else {
        setSession(null);
    }
      if (error) {
        console.error("Error fetching session:", error);
      }
    }};

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const user = session?.user ?? null;

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isSignedIn: !!session,
        isLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
