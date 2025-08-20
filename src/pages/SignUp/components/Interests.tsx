import { Check } from 'lucide-react';
import { defaultInterests, type PersonalInterest } from '../../../core/entities/personal-interest';

interface InterestButtonProps {
    onClick: () => void;
    isSelected: boolean;
    children: React.ReactNode;
}

function InterestButton({ isSelected, children, onClick }: InterestButtonProps) {
    return (
        <button
            type="button"
            data-selected={isSelected}
            className="px-4 py-2 rounded-full border-[0.8px] border-[#E0E1F0] text-sm font-medium transition-colors duration-200 ease-in-out cursor-pointer text-gray-700 hover:bg-gray-100 shadow-md 
            data-[selected=true]:bg-indigo-600 data-[selected=true]:text-white data-[selected=true]:shadow-lg
            flex items-center gap-2"
            onClick={onClick}
        >
            {children}
            {isSelected && (<Check className="w-4 h-4 text-white" />)}

        </button>
    );
}

export interface InterestsProps {
    onChange: (interest: PersonalInterest) => void;
    onSelected: (interest: PersonalInterest) => boolean;
}

function Interests({ onChange, onSelected }: InterestsProps) {
    return (
        <div className="w-full flex flex-col items-start pb-4">
            <label className="text-base text-gray-800 mb-2 font-bold">
                Interesses pessoais
            </label>

            <div className="flex flex-wrap gap-2 ">
                {defaultInterests.map(it => (
                    <InterestButton
                        key={it.id}
                        isSelected={onSelected(it)}
                        onClick={() => onChange(it)}
                    >
                        {it.name}
                    </InterestButton>
                ))}
            </div>
        </div >
    );
}

export default Interests;
