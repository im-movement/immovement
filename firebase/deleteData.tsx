import firebase_app from './config';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BlogPost, IEvent } from './getData';

const db = getFirestore(firebase_app);

export const useDeleteEvent = (e: IEvent) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const deleteData = async () => {
      try {
        const docRef = doc(db, 'events', e.id);
        await updateDoc(docRef, { ...e, hidden: true });
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    deleteData();
  }, []);

  return { loading, error };
};

interface DeletePostInterface {
  loading: boolean;
  error: any;
  deletePost: () => void;
}

export const useDeletePost = async (p: BlogPost) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  // useEffect(() => {
  const deletePost = async () => {
    try {
      const docRef = doc(db, 'blog', p.id);
      await updateDoc(docRef, { ...p, hidden: true });
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  // deleteData();
  // }, []);

  return { loading, error, deletePost };
};
