import toast from "react-hot-toast";

function showErrorMessage(message: string = "Infelizmente, não foi possível fazer o login.") {
    toast.error(message, {
        duration: 3000,
        position: 'top-right',
        style: {
            backgroundColor: '#f87171',
            color: '#fff',
            fontWeight: 'bold',
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