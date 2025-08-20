import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import { signOutUser } from '../core/auth-service';
import type { User } from '../core/entities/user';

import {
    getUserSession,
    saveUserSession,
    removeUserSession,
} from '../core/persister-service';

interface AuthContextType {
    user: User | null;
    logout: () => void;
    saveSession: (user: User) => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(() => {
        return getUserSession();
    });

    useEffect(() => {
        const salvedUser = getUserSession();
        if (salvedUser) setUser(salvedUser);
    }, []);

    function saveSession(user: User) {
        setUser(user);
        saveUserSession(user)
    }

    async function logout() {
        await signOutUser();

        setUser(null);
        removeUserSession();
    }

    return <AuthContext.Provider value={{ user, logout, saveSession }}>
        {children}
    </AuthContext.Provider>;
}

export default AuthProvider