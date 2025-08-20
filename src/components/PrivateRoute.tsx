import { Navigate } from "react-router-dom";
import { AppRoutes } from "../utils/routes";

import { useAuth } from "../hooks/userAuth";

interface Props {
    children: React.ReactNode;
}

function PrivateRoute({ children }: Props) {
    const { user } = useAuth();
    return user ? <>{children}</> : <Navigate to={AppRoutes.signIn} />;
}

export { PrivateRoute }