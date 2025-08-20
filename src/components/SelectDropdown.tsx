import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Props {
    value: string;
    label: string;
    options: string[];
    placeholder: string;
    onChangeOption: (it: string) => void;
}

function SelectDropdown({ label, options, value, placeholder, onChangeOption }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full space-y-2 flex flex-col items-start text-left">
            <label className="text-base text-gray-800">
                {label}
            </label>

            <div className="w-full min-h-[48px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300
            flex flex-row items-center justify-between cursor-pointer
            text-left bg-white shadow-sm focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`${!value && `text-[#9899A1]`}`}>{value ? value : placeholder}</span>
                <ChevronDown size={20} className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {
                isOpen && (
                    <ul className="absolute top-[84px] z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer hover:bg-indigo-100 transition-colors duration-150 flex"
                                onClick={() => {
                                    onChangeOption(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )
            }


        </div >

    );
};

export default SelectDropdown;