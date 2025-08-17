export interface User {
    id: string;
    email: string;
    accessToken: string;
    name: string | null;
    photoURL: string | null;
    details: UserInfo | null;
}

export interface UserInfo {
    educationLevel: string;
    interests: string[];
    specificNeeds: string;
    birthDate: Date | null;
    createdAt: Date;
}