import { useAuth } from "../contexts/AuthContext";
import { SignIn } from "../pages";

interface Props {
    children: React.ReactNode;
}

export function PrivateRoute({ children }: Props) {
    const { user } = useAuth();
    if (user) return children;
    return <SignIn />;
}