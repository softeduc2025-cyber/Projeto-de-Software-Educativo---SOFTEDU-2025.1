import { collection, doc, getDoc, getFirestore, setDoc, type DocumentData } from "firebase/firestore";
import firebaseApp from "./config/firebase_config";

const db = getFirestore(firebaseApp);

export const Schemas = { users: "users", guide: "guide" };
type AllSchemas = typeof Schemas[keyof typeof Schemas];

async function getDocById(schema: AllSchemas, id: string) {
    const docRef = doc(collection(db, schema), id);
    if (!docRef) return null
    return await getDoc(docRef);
}

async function saveDataById<T extends DocumentData>(schema: AllSchemas, docId: string, data: T) {
    const docRef = doc(collection(db, schema), docId);
    await setDoc(docRef, data);
}

export { db, getDocById, saveDataById }
