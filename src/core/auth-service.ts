import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { failure, success, type Result } from "./entities/result";
import firebaseApp from "./config/firebase_config";

import { getDocById, Schemas, saveDataById } from "./db-service";
import type { User, UserInfo } from "./entities/user";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

async function getUserDetailsById(userId: string): Promise<UserInfo | null> {
    const userDoc = await getDocById(Schemas.users, userId);
    if (userDoc && userDoc.exists()) {
        return {
            interests: userDoc.data().interests,
            specificNeeds: userDoc.data().specificNeeds,
            birthDate: new Date(userDoc.data().birthDate),
            createdAt: new Date(userDoc.data().createdAt),
            educationLevel: userDoc.data().educationLevel,
        };
    }

    return null;
}

async function signInWithGoogle(): Promise<Result<User>> {
    try {
        const result = await signInWithPopup(auth, provider);
        const accessToken = await result.user.getIdToken();

        return success({
            id: result.user.uid,
            accessToken: accessToken,
            email: result.user.email || "",
            name: result.user.displayName || null,
            photoURL: result.user.photoURL || null,
            details: await getUserDetailsById(result.user.uid),
        });
    } catch (error) {
        console.error("signInWithGoogle:", error);
        const message = error instanceof Error ? error.message : "Erro desconhecido ao fazer login com o Google.";
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

async function registerUserInfo(user: User | null, info: UserInfo): Promise<Result<boolean>> {
    try {
        if (!user) return failure(new Error("Usuário não autenticado"));
        await saveDataById(Schemas.users, user.id, { ...info, email: user.email });

        return success(true);
    } catch (error) {
        console.error("registerUserInfo:", error);
        return failure(new Error("Erro ao registrar informações do usuário"));
    }
}

async function ignoreUserInfo(user: User | null): Promise<Result<boolean>> {
    try {
        if (!user) return failure(new Error("Usuário não autenticado"));
        await saveDataById(Schemas.users, user.id, { email: user.email });
        return success(true);
    } catch (error) {
        console.error("registerUserInfo:", error);
        return failure(new Error("Erro ao registrar informações do usuário"));
    }
}

async function userAlreadyExists(userId: string, email: string): Promise<boolean> {
    try {
        const userDoc = await getDocById(Schemas.users, userId);
        if (userDoc && userDoc.exists()) return userDoc.data().email === email;
        return false;
    } catch (error) {
        console.error("userAlreadyExists:", error);
        return false;
    }
}

export { signInWithGoogle, signOutUser, getUserDetailsById, auth, registerUserInfo, userAlreadyExists, ignoreUserInfo }