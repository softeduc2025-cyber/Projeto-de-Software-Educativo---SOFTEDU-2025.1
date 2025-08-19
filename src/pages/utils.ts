import type { CSSProperties } from "react";
import toast from "react-hot-toast";

interface Props extends CSSProperties {
    message: string;
    duration?: number;
}

function showErrorMessage({ message, fontWeight, duration }: Props) {
    toast.error(message, {
        duration: duration || 3000,
        position: 'top-right',
        style: {
            color: '#fff',
            backgroundColor: '#f87171',
            fontWeight: fontWeight || 'bold',
        },
    })
}


function showSuccessMessage({ message, fontWeight = 'normal' }: Props) {
    toast.success(message, {
        duration: 3000,
        position: 'top-right',
        style: {
            backgroundColor: '#34d399',
            color: '#fff',
            fontWeight: fontWeight || 'bold',
        },
    })
}

export { showErrorMessage, showSuccessMessage };