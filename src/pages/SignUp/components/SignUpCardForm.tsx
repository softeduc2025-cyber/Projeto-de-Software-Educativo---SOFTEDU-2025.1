import React from 'react';

interface Props {
    children: React.ReactNode;
    handleSubmit: (e: React.FormEvent) => void;
}

function SignUpCard({ children, handleSubmit }: Props) {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-white'>

            <form onSubmit={handleSubmit} className="w-full max-w-[580px] max-h-[60%] h-full z-50 p-8 flex flex-col items-center text-center bg-white rounded-3xl shadow-2xl overflow-y-auto">
                {children}
            </form>
        </div>
    );
}


export default SignUpCard;
