export interface User {
    id: string;
    email: string;
    accessToken: string;
    name: string | null;
    photoURL: string | null;
    details: UserInfo | null;
}

export interface UserInfo {
    id: string;
    userId: string;
    birthDate: string;
    educationLevel: string;
    specificNeeds: string;
    createdAt: string;
    interests: string[];
}