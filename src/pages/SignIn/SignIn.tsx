import { Navigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import GoogleIcon from '../../assets/google.svg';


function SignIn() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) return <Navigate to='/' replace />;

    async function handlerSignIn() {
        console.log('Google login clicked');
        alert('Google login clicked');
    }

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="min-h-screen w-[60%] bg-zinc-50 flex flex-col items-center justify-center max-lg:min-w-full max-lg:p-6 max-lg:max-w-md">
                <img src="src/assets/logo.png" className='w-68 h-68 object-contain' />

                <div className="w-full max-w-[440px] md:w-1/2 p-6 md:p-12 flex flex-col items-center text-center bg-white rounded-3xl shadow-2xl overflow-hidden">

                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">BEM VINDO!</h2>
                        <p className="text-lg text-gray-600">Aprenda no seu ritmo e avance mais!</p>
                    </div>

                    <button className="cursor-pointer bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-2xl border border-gray-300 shadow-sm transition-all duration-300 flex items-center justify-center space-x-3 w-full max-w-sm hover:shadow-md" onClick={handlerSignIn}>
                        <img src={GoogleIcon} alt="Google Icon" className="w-6 h-6" />
                        <span className="text-base">Entrar com Google</span>
                    </button>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-sm">Não tem conta? <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">Cadastre-se</a></p>
                    </div>

                    <div className="mt-auto pt-8 text-center text-xs text-gray-400 max-w-sm">
                        <p>Ao continuar, você autoriza o uso dos seus dados pessoais de acordo com os nossos <a href="#" className="text-gray-500 underline hover:text-gray-600 transition-colors duration-300">Termos de uso</a> e <a href="#" className="text-gray-500 underline hover:text-gray-600 transition-colors duration-300">Política de privacidade</a></p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen w-[40%] bg-white flex items-center justify-center max-lg:hidden">
                <img src="src/assets/bg-sigin.png" className='w-full h-full object-cover' alt="logo" />
            </div>
        </div>
    );
};

export default SignIn;
