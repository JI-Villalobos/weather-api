import Swal from 'sweetalert2'

function responseStatusHandler(status, city){
    if(status = 404){
        Swal.fire({
            icon: 'error',
            title: 'Error 404 Not Found',
            text: `No data available for ${city}. Are you sure it exists?`
        })
    }
}

export default responseStatusHandler