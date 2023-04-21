import firebase_app from "./config";
import { getFirestore, getDocs, collection } from "firebase/firestore";
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