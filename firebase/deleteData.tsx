import firebase_app from './config';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { BlogPost, IEvent } from './getData';

const db = getFirestore(firebase_app);

export const useDeleteEvent = (e: IEvent) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const deleteEvent = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'events', e.id);
      await updateDoc(docRef, { ...e, hidden: true });
      setLoading(false);
      // location.reload();
    } catch (e) {
      setError(true);
      setLoading(false);
      throw e;
    }
  };

  return { loading, error, deleteEvent };
};

export const useDeletePost = (p: BlogPost) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const deletePost = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'blog-posts', p.id);
      await updateDoc(docRef, { ...p, hidden: true });
      setLoading(false);
      // location.reload();
    } catch (e) {
      setError(true);
      setLoading(false);
      throw e;
    }
  };

  return { loading, error, deletePost };
};
