import React, { useState, useEffect, useContext, createContext } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

export interface IAuth {
  user: User;
}

export const AuthContext = createContext<Partial<IAuth>>({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading</div> : children}
    </AuthContext.Provider>
  );
};
