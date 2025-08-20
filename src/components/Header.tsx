import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/userAuth";
import { AppRoutes } from "../utils/routes";

function Header() {
    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const handleButtonClick = () => {
        user ? logout() : navigate(AppRoutes.signIn);
    };

    return (
        <header className="w-full bg-white shadow top-0 z-50 p-4 absolute">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <img
                    alt="Logo"
                    className="h-12 w-12"
                    src="src/assets/logo.png"
                />

                <div className="flex items-center space-x-4">
                    {user && user.photoURL && (
                        <img
                            src={user.photoURL}
                            alt={user.name || "User Avatar"}
                            className="h-10 w-10 rounded-full"
                        />
                    )}

                    <button className="px-4 py-2 bg-zinc-60  text-neutral-900 rounded-lg hover:bg-yellow-600 hover:text-white transition cursor-pointer"
                        onClick={handleButtonClick}
                    >
                        {user ? "Sair" : "Entrar"}
                    </button>

                </div>
            </div>
        </header>
    );
}

export default Header;
