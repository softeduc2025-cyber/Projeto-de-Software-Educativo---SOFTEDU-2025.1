import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
    logout: () => void;
    isAuthenticated: boolean;
    signIn: () => Promise<void>;
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
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        () => localStorage.getItem('isAuthenticated') === 'true'
    );

    async function signIn() {
        alert('Chama a função de login');
    }

    async function logout() {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        alert('Chama a função de logout');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
