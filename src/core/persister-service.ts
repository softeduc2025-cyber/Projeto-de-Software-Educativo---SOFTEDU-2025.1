import type { User } from "./entities/user";

export const USER_KEY = "app_user";

function saveUserSession(user: User) {
    try {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch (error) {
        console.error(error);
    }
}

function getUserSession(): User | null {
    const storedUser = localStorage.getItem(USER_KEY);
    if (!storedUser) return null;

    try {
        const user: User = JSON.parse(storedUser);

        const details = {
            interests: user.details?.interests || [],
            birthDate: user.details?.birthDate || null,
            specificNeeds: user.details?.specificNeeds || "",
            createdAt: user.details?.createdAt || new Date(),
            educationLevel: user.details?.educationLevel || "",
        };

        return {
            id: user.id,
            name: user.name,
            details: details,
            email: user.email,
            photoURL: user.photoURL,
            accessToken: user.accessToken,
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

function removeUserSession() {
    try {
        localStorage.removeItem(USER_KEY);
    } catch (error) {
        console.error(error);
    }
}

export { saveUserSession, getUserSession, removeUserSession };