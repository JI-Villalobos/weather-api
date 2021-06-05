import '@styles/main.css'
import Template from '@templates/Template.js'
import errorHandler from '@utils/errorHandler.js'
import { getStoredRequest } from '@utils/storeRequest.js'

const button = document.querySelector("button[type='submit']")
const main = document.getElementById("api")
const location = document.getElementById("input")
const ERROR = "empty-field"

button.addEventListener("click", async (evt) => {
    evt.preventDefault()
    if(location.value == null || location.value == ""){
       errorHandler(ERROR)
    }else{
        const node = await Template(location.value)
        main.append(node)
    }

    location.value = ""
})

main.addEventListener("click", (event) => {  
    if(event.target.classList.contains("delete-icon")){
        let id = event.target.parentElement.parentElement.id
        const idCard = document.getElementById(id)
        main.removeChild(idCard)
    }else if(event.target.classList.contains("add-icon")){
        //TO DO: Get data from the seleted card
        let id = event.target.parentElement.parentElement.id
        getStoredRequest(id)
    }
})

