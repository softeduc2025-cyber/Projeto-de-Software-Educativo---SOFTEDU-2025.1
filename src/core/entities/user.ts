export interface User {
    id: string;
    email: string;
    accessToken: string;
    name: string | null;
    photoURL: string | null;
    details: UserInfo | null;
}

export interface UserInfo {
    createdAt: Date;
    interests: string[];
    specificNeeds: string;
    educationLevel: string;
    birthDate: Date | null | undefined;
}