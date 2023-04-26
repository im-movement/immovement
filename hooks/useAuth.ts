import firebase from 'firebase/app';
import 'firebase/auth';
import { useState, useEffect } from 'react';

// TODO: fix type error
// @ts-ignore
type AuthUser = firebase.User | null;

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: fix type error
    // @ts-ignore
    const unsubscribe = firebase.auth().onAuthStateChanged((user: AuthUser) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, loading };
};
