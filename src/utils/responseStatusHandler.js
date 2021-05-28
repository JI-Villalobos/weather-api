import Swal from 'sweetalert2'

function responseStatusHandler(response){
    if(response == 404){
        Swal.fire({
            icon: 'error',
            title: 'Error 404 Not Found',
            text: `No data available for the city typed, make sure you type a valid city`
        })
    }
}

export default responseStatusHandler