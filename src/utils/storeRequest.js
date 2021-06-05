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


function getStoredRequest(){
    console.log(requests);
}

export {storeRequest, getStoredRequest} 