import '@styles/main.css'
import Template from '@templates/Template.js'
import errorHandler from '@utils/errorHandler.js'


const button = document.querySelector("button[type='submit']")
const main = document.getElementById("api")
const location = document.querySelector("input[type='text']")
const ERROR = "empty-field"


button.addEventListener("click", async () => {
    if(location.value == null || location.value == ""){
       errorHandler(ERROR)
    }else{
        const node = await Template()
        main.append(node)
    }
})

main.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete-icon")){
        const childToDelete = document.getElementById("card")
        main.removeChild(childToDelete)
    }
})

