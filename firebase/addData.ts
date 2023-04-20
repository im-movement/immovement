import firebase_app from "./config";
import { getFirestore, doc, setDoc, addDoc, serverTimestamp, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const addData = async (collection: any, id: any, data: any) => {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data,
    //  {
    //   merge: true,
    // }
    );
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export interface NewBlogPost {
  title: string;
  content: string;
  author: string;
}

export const addBlogPost = ({title, content, author}: NewBlogPost) => {
    const blogPostColRef = collection(db, 'blog-posts')
    return addDoc(blogPostColRef, {
      title,
      content,
      author,
      publishDate: serverTimestamp(),
  });
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
}

export const addEvent = ({title, date, time, location, description, featuredImage, capacity, price}: NewEvent) => {
    const classColRef = collection(db, 'events')
    return addDoc(classColRef, {title, date, time, location, description, featuredImage, capacity, price});
};