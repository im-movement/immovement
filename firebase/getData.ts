import firebase_app from "./config";
import { getFirestore, getDocs, collection, doc, getDoc } from "firebase/firestore";
import { NewEvent } from "./addData";

const db = getFirestore(firebase_app);

export const getEvents = async () => {
    const docs = await getDocs(collection(db, "events"))
    const res: NewEvent[] = new Array();

    docs.forEach(doc => {
        res.push({
            id: doc.id, 
            ...doc.data()
        })
    })

    return res
}

export const getBlogPosts = async () => {
  const docs = await getDocs(collection(db, "blog-posts"))
  const res: NewEvent[] = new Array();

    docs.forEach(doc => {
        res.push({
            id: doc.id, 
            ...doc.data()
        })
    })

    return res
}

export const getBlogPost = async (id: string) => {
  const docRef = doc(db, "blog-posts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // TODO: log error
    console.log("No such document!");
  }
}