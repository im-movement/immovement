import firebase_app from './config';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import { BlogPost, IEvent } from './getData';

const db = getFirestore(firebase_app);

export const editBlogPost = ({
  title,
  content,
  author,
  id,
  // publishDate,
  draft = false,
}: BlogPost) => {
  const postRef = doc(db, 'blog-posts', id);

  try {
    updateDoc(postRef, {
      title,
      content,
      author,
      id,
      // publishDate,
      draft,
    });
  } catch (e) {
    throw e;
  }
};

interface EditedEvent extends Omit<IEvent, 'featuredImage'> {}

export const editEvent = ({
  title,
  date,
  time,
  location,
  description,
  // featuredImage,
  capacity,
  price,
  id,
  draft = false,
}: EditedEvent) => {
  const eventRef = doc(db, 'events', id);

  try {
    updateDoc(eventRef, {
      title,
      date,
      time,
      location,
      description,
      // featuredImage,
      capacity,
      price,
      draft,
    });
  } catch (e) {
    throw e;
  }
};
