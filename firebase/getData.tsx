import firebase_app from './config';
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  orderBy,
  DocumentData,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { NewBlogPost, NewEvent } from './addData';

const db = getFirestore(firebase_app);

// Blog posts:

export interface BlogPost extends NewBlogPost {
  id: string;
}

export const getBlogPost = async (id: string) => {
  const docRef = doc(db, 'blog-posts', id);
  const docSnap = await getDoc(docRef);

  // TODO: reformat this w try/catch

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // TODO: log error
    console.log('No such document!');
  }
};

export const useGetBlogPosts = () => {
  const [posts, setPost] = useState<BlogPost[]>();
  const [loading, setLoading] = useState(true);
  // @ts-ignore
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: DocumentData[] = new Array();
        const docs = await getDocs(
          collection(db, 'blog-posts'),
          // @ts-ignore
          orderBy('dateCreated'),
        );

        docs.forEach(doc => {
          res.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        // @ts-ignore
        setPost(res);
        setLoading(false);
      } catch (e) {
        // TODO: logging
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { posts, loading, error };
};

// Events:

export interface IEvent extends NewEvent {
  id: string;
}

export const getEvent = async (id: string) => {
  const docRef = doc(db, 'events', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // TODO: log error
    console.log('No such document!');
  }
};

export const useGetEvents = () => {
  const [events, setEvents] = useState<IEvent[]>();
  const [loading, setLoading] = useState(true);
  // @ts-ignore
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: DocumentData[] = new Array();
        // @ts-ignore
        const docs = await getDocs(collection(db, 'events'), orderBy('date'));

        docs.forEach(doc => {
          res.push({
            // TODO: fix type error
            // @ts-ignore
            id: doc.id,
            ...doc.data(),
          });
        });
        // @ts-ignore
        setEvents(res);
        setLoading(false);
      } catch (e) {
        // TODO: logging
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { events, loading, error };
};
