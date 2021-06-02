import '@styles/main.css'
import Template from '@templates/Template.js'
import errorHandler from '@utils/errorHandler.js'

const button = document.querySelector("button[type='submit']")
const main = document.getElementById("api")
const location = document.getElementById("input")
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
    const card = document.getElementById("card")

    if(event.target.classList.contains("delete-icon")){
        main.removeChild(card)
    }else if(event.target.classList.contains("add-icon")){
        //TO DO: Get data from the seleted card
    }
})

