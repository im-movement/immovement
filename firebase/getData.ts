import firebase_app from "./config";
import { getFirestore, getDocs, collection, doc, getDoc, orderBy, DocumentData } from "firebase/firestore";
import { NewBlogPost, NewEvent } from "./addData";

const db = getFirestore(firebase_app);

export const getEvents = async () => {
    const res: NewEvent[] = new Array();
    try {
      // @ts-ignore
      const docs = await getDocs(collection(db, "events"), orderBy('date'))
  
      docs.forEach(doc => {
          res.push({
              // TODO: fix type error
              // @ts-ignore
              id: doc.id, 
              ...doc.data()
          })
      })

    } catch (e) {
      // TODO: logging
      console.error(e)
    }

    return res
}
export interface BlogPost {
  title: string;
  content: string;
  author: string;
  id: string;
}

export const getBlogPosts = async () => {
  const res: DocumentData[] = new Array();
  try {
    // @ts-ignore
    const docs = await getDocs(collection(db, "blog-posts"), orderBy('dateCreated'))
  
      docs.forEach(doc => {
        res.push({
          id: doc.id, 
          ...doc.data()
        })
      })
  } catch (e) {
    // TODO: logging
    console.error(e)
  }

    return {res}
}

export const getBlogPost = async (id: string) => {
  const docRef = doc(db, "blog-posts", id);
  const docSnap = await getDoc(docRef);

  // TODO: reformat this w try/catch

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // TODO: log error
    console.log("No such document!");
  }
}

export const getEvent = async (id: string) => {
  const docRef = doc(db, "events", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // TODO: log error
    console.log("No such document!");
  }
}