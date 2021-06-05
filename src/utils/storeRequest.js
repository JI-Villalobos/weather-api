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
            console.log(data);
        }
    })
}

export {storeRequest, getStoredRequest} 