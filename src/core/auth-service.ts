import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import firebaseApp from "./config/firebase_config";
import { failure, success, type Result } from "./entities/result";
import type { User } from "./entities/user";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

async function signInWithGoogle(): Promise<Result<User>> {
    try {
        const result = await signInWithPopup(auth, provider);
        const accessToken = await result.user.getIdToken();

        return success<User>({
            details: null,
            id: result.user.uid,
            accessToken: accessToken,
            email: result.user.email || "",
            name: result.user.displayName || null,
            photoURL: result.user.photoURL || null,
        });
    } catch (error) {
        console.error("signInWithGoogle:", error);
        const message = error instanceof Error ? error.message : "Erro desconhecido ao fazer login com o Google";
        return failure(new Error(message));
    }
}

async function signOutUser(): Promise<Result<void>> {
    try {
        await signOut(auth);
        return { success: true, data: undefined };
    } catch (error) {
        console.error("signOutUser:", error);
        const message = error instanceof Error ? error.message : "Erro desconhecido";
        return failure(new Error(message));
    }
}


export { signInWithGoogle, signOutUser }