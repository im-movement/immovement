import firebase_app from './config';
import {
  getFirestore,
  setDoc,
  updateDoc,
  getDocs,
  collection,
  doc,
  getDoc,
  orderBy,
  DocumentData,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { NewBlogPost, NewEvent } from './addData';
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

export const deletePost = async (p: BlogPost) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  const docRef = doc(db, 'blog', p.id);

  try {
    await updateDoc(docRef, { ...p, hidden: true });
    setLoading(false);
  } catch (e) {
    setError(e);
    setLoading(false);
  }

  return { loading, error };
};
