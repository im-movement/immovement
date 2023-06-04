import firebase_app from './config';
import {
  getFirestore,
  addDoc,
  serverTimestamp,
  collection,
} from 'firebase/firestore';

const db = getFirestore(firebase_app);

export interface NewBlogPost {
  title: string;
  content: string;
  author: string;
  hidden?: boolean;
}

export const addBlogPost = ({ title, content, author }: NewBlogPost) => {
  const blogPostColRef = collection(db, 'blog-posts');

  try {
    addDoc(blogPostColRef, {
      title,
      content,
      author,
      publishDate: serverTimestamp(),
    });
  } catch (e) {
    throw e;
  }
};

export interface NewEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  featuredImage: string;
  capacity: string;
  price: string;
  hidden?: boolean;
}

export const addEvent = ({
  title,
  date,
  time,
  location,
  description,
  featuredImage,
  capacity,
  price,
}: NewEvent) => {
  const classColRef = collection(db, 'events');

  try {
    addDoc(classColRef, {
      title,
      date,
      time,
      location,
      description,
      featuredImage,
      capacity,
      price,
    });
  } catch (e) {
    throw e;
  }
};
