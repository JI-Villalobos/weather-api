import showAdditionalData from '@templates/showAdditionalData.js'

const requests = []


function storeRequest(request){

   let i = 0 

   if(requests.length > 0){
       requests.forEach(data => {
           if(data.id == request.id){
                i += 1
           }
       })
   }

   if(i === 0){
        requests.push(request)
   }
}


function getStoredRequest(id){
    requests.forEach(data => {
        if(data.id == id){
            showAdditionalData(data.name, data.coord.lat, data.coord.lon, data.main.feels_like, data.main.pressure)
        }
    })
}

export {storeRequest, getStoredRequest} 