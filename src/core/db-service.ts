import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "./config/firebase_config";

const db = getFirestore(firebaseApp);

export const Schemas = { users: "users", guide: "guide" };
type AllSchemas = typeof Schemas[keyof typeof Schemas];

async function getDocById(schema: AllSchemas, id: string) {
    const docRef = doc(collection(db, schema), id);
    return await getDoc(docRef);
}

export { db, getDocById }
