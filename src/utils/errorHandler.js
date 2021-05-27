import Swal from 'sweetalert2'

function errorHandler(error){
    if(error == "empty-field"){
        Swal.fire({
            icon: 'error',
            title: 'Empty Fields',
            text: 'You need type a valid city'
        })
    }
}

export default errorHandler