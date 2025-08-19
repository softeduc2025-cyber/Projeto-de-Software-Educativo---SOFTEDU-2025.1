import { useState } from 'react';

import { signInWithGoogle, userAlreadyExists } from '../../core/auth-service';
import { isSuccess } from '../../core/entities/result';

import { useAuth } from '../../contexts/AuthContext';
import { showErrorMessage } from '../utils';


import TermAndPolicies from '../../components/TermAndPolicts';
import SignInBgImagem from './components/SignInBgImagem';
import SignInButton from './components/SignInButton';
import SignInCard from './components/SignInCard';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../utils/routes';
import type { User } from '../../core/entities/user';

function SignIn() {
    const navigate = useNavigate();
    const { saveSession } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    async function signInWithSSO(): Promise<User | undefined> {
        setIsLoading(true);

        const result = await signInWithGoogle();
        if (isSuccess(result)) return result.data

        showErrorMessage({ message: result.error.message })
        return Promise.reject(null);
    }

    const handlerSignIn = async () => {
        const user = await signInWithSSO();
        if (!user) return;

        const alreadyExists = await userAlreadyExists(user.id, user.email)
        if (!alreadyExists) {
            showErrorMessage({ message: "Usuário não cadastrado, por favor, complete seu cadastro." })
            return setIsLoading(false)
        }

        setIsLoading(false);
        saveSession(user);

        navigate(AppRoutes.home);
    };


    const handlerSignUp = async () => {
        const user = await signInWithSSO();
        if (!user) return;

        const alreadyExists = await userAlreadyExists(user.id, user.email)
        if (alreadyExists) {
            showErrorMessage({ message: "Usuário já cadastrado, tente com outra conta." })
            return setIsLoading(false)
        }

        saveSession(user);
        setIsLoading(false);

        navigate(AppRoutes.signUp);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="min-h-screen w-[60%] bg-zinc-50 flex flex-col items-center justify-center max-lg:min-w-full max-lg:p-6 max-lg:max-w-md">
                <img src="src/assets/logo.png" className='w-68 h-68 object-contain' />

                <SignInCard onSignUp={handlerSignUp}>
                    <SignInButton isLoading={isLoading} onClick={handlerSignIn} />
                    <TermAndPolicies />
                </SignInCard>

            </div>

            <SignInBgImagem />

        </div>
    );
};

export default SignIn;
