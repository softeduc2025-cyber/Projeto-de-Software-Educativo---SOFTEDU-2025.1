import LoadingSpinner from "../../../components/Loading";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    onIgnore: () => void;
}
function SignUpCardButtons({ onIgnore, isLoading = false, ...props }: Props) {
    return (
        <div className="flex justify-between items-center space-x-4 w-full pt-8">
            <button
                type="button"
                datatype="data-type-ignore"
                disabled={isLoading}
                onClick={isLoading ? undefined : onIgnore}
                className="w-full bg-white text-neutral-700 font-semibold hover:bg-gray-50 py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-300 transform hover:scale-105 cursor-pointer"
            >
                Pular
            </button>

            <button
                {...props}
                disabled={isLoading}
                className="w-full bg-zinc-60  text-neutral-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 cursor-pointer"
            >
                {isLoading ? (<LoadingSpinner />) : "Criar Conta"}
            </button>

        </div>
    );
}


export default SignUpCardButtons;
