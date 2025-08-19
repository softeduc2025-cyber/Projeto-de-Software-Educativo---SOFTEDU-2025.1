import type { CSSProperties } from "react";
import toast from "react-hot-toast";

interface Props extends CSSProperties {
    message: string;
}

function showErrorMessage({ message, fontWeight }: Props) {
    toast.error(message, {
        duration: 3000,
        position: 'top-right',
        style: {
            color: '#fff',
            backgroundColor: '#f87171',
            fontWeight: fontWeight || 'bold',
        },
    })
}


function showSuccessMessage(message: string) {
    toast.success(message, {
        duration: 3000,
        position: 'top-right',
        style: {
            backgroundColor: '#34d399',
            color: '#fff',
            fontWeight: 'bold',
        },
    })
}

export { showErrorMessage, showSuccessMessage };