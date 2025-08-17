import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';

import { removeUserSession, saveUserSession } from '../core/persister-service';
import { auth, getUserDetailsById, signOutUser } from '../core/auth-service';

import type { User } from '../core/entities/user';
import { AppRoutes } from '../utils/routes';
import { onAuthStateChanged } from 'firebase/auth';

interface AuthContextType {
    user: User | null;
    logout: () => void;
    isAuthenticated: boolean;
    saveSession: (user: User) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (data) => {
            if (data) {
                const accessToken = await data.getIdToken();

                const newUser = {
                    id: data.uid,
                    accessToken: accessToken,
                    email: data.email || "",
                    name: data.displayName || null,
                    photoURL: data.photoURL || null,
                    details: await getUserDetailsById(data.uid),
                }

                saveSession(newUser, false);
            } else {
                logout()
            }
        });

        return () => unsubscribe();
    }, []);

    async function saveSession(user: User, toSignIn: boolean = true) {
        setUser(user);
        saveUserSession(user)
        setIsAuthenticated(true);

        if (toSignIn) navigate(AppRoutes.signIn);
    }

    async function logout() {
        await signOutUser();

        setUser(null);
        setIsAuthenticated(false);
        removeUserSession();
        navigate(AppRoutes.signIn);
    }

    return (
        <AuthContext.Provider value={{ logout, isAuthenticated, saveSession, user }}>
            {children}
        </AuthContext.Provider>
    );
};
