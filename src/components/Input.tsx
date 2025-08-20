interface Props {
    children: React.ReactNode;
}

function InputGroup({ children }: Props) {
    return (
        <div className="space-y-4 flex-1 w-full flex flex-col items-start">
            {children}
        </div>
    )
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    customField?: React.ReactNode;
}

function Input({
    label,
    type,
    customField,
    ...props
}: InputProps) {
    return (
        <div className="w-full space-y-2 flex flex-col items-start">
            <label className="text-base text-gray-800">
                {label}
            </label>
            {customField ? customField : (<input
                {...props}
                type={type}
                className="w-full min-h-[44px] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
            />)}

        </div>
    )
}

export { Input, InputGroup };