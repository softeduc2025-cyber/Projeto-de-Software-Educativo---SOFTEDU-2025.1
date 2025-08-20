import React from 'react';

interface Props {
    onSignUp: () => void;
    children: React.ReactNode;
}

function SignInCard({ onSignUp, children }: Props) {
    const childrenArray = React.Children.toArray(children);

    const signInButton = childrenArray[0];
    const termAndPolicies = childrenArray[1];

    return (
        <div className="w-full max-w-[440px] md:w-1/2 p-6 md:p-12 flex flex-col items-center text-center bg-white rounded-3xl shadow-2xl overflow-hidden">

            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">BEM VINDO!</h2>
                <p className="text-lg text-gray-600">Aprenda no seu ritmo e avance mais!</p>
            </div>

            {signInButton}

            <div className="mt-6 text-center" onClick={onSignUp}>
                <p className="text-gray-600 text-sm">Não tem conta? <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">Cadastre-se</a></p>
            </div>

            {termAndPolicies}
        </div>
    );
}

export default SignInCard;
