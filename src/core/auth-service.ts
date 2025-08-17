import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { failure, success, type Result } from "./entities/result";
import firebaseApp from "./config/firebase_config";

import { getDocById, Schemas } from "./db-service";
import type { User, UserInfo } from "./entities/user";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

async function getUserDetailsById(userId: string): Promise<UserInfo | null> {
    const userDoc = await getDocById(Schemas.users, userId);
    if (!userDoc.exists()) return null
    return {
        interests: userDoc.data().interests,
        specificNeeds: userDoc.data().specificNeeds,
        birthDate: userDoc.data().birthDate.toDate(),
        createdAt: userDoc.data().createdAt.toDate(),
        educationLevel: userDoc.data().educationLevel,
    };
}

async function signInWithGoogle(): Promise<Result<User>> {
    try {
        const result = await signInWithPopup(auth, provider);
        const accessToken = await result.user.getIdToken();

        return success<User>({
            id: result.user.uid,
            accessToken: accessToken,
            email: result.user.email || "",
            name: result.user.displayName || null,
            photoURL: result.user.photoURL || null,
            details: await getUserDetailsById(result.user.uid),
        });
    } catch (error) {
        console.error("signInWithGoogle:", error);
        const message = error instanceof Error ? error.message : "Erro desconhecido ao fazer login com o Google";
        return failure(new Error(message));
    }
}

async function signOutUser(): Promise<void> {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("signOutUser:", error);
    }
}

export { signInWithGoogle, signOutUser, getUserDetailsById, auth }