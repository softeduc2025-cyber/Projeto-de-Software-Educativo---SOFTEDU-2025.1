import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface Props {
    children: React.ReactNode;
}

export function PrivateRoute({ children }: Props) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/sign-in" />;
}