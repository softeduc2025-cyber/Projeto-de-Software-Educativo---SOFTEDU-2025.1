import { useState } from 'react';

import { signInWithGoogle } from '../../core/auth-service';
import { isError } from '../../core/entities/result';

import { useAuth } from '../../contexts/AuthContext';
import { showErrorMessage } from '../utils';


import TermAndPolicies from './components/TermAndPolicts';
import SignInBgImagem from './components/SignInBgImagem';
import SignInButton from './components/SignInButton';
import SignInCard from './components/SignInCard';

function SignIn() {
    const { saveSession } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    async function handlerSignIn() {
        setIsLoading(true);

        const result = await signInWithGoogle();
        if (isError(result)) return showErrorMessage();
        setIsLoading(false)

        saveSession(result.data);
    }

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="min-h-screen w-[60%] bg-zinc-50 flex flex-col items-center justify-center max-lg:min-w-full max-lg:p-6 max-lg:max-w-md">
                <img src="src/assets/logo.png" className='w-68 h-68 object-contain' />

                <SignInCard onSignUp={() => { }}>
                    <SignInButton isLoading={isLoading} onClick={handlerSignIn} />
                    <TermAndPolicies />
                </SignInCard>

            </div>

            <SignInBgImagem />

        </div>
    );
};

export default SignIn;
