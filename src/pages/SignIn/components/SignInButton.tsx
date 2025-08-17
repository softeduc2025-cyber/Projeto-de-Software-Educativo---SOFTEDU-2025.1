import GoogleIcon from '../../../assets/google.svg';
import LoadingSpinner from '../../../components/Loading';

interface Props {
    isLoading: boolean;
    onClick: () => void;
}

function SignInButton({ onClick, isLoading }: Props) {
    return <button className="max-h-12 cursor-pointer bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-2xl border border-gray-300 shadow-sm transition-all duration-300 flex items-center justify-center space-x-3 w-full max-w-sm hover:shadow-md hover:brightness-95" onClick={onClick} disabled={isLoading}>

        {isLoading ? (
            <LoadingSpinner />
        ) : (<>
            <img src={GoogleIcon} alt="Google Icon" className="w-6 h-6" />
            <span className="text-base">Entrar com Google</span>
        </>)}

    </button>
}

export default SignInButton;