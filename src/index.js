import '@styles/main.css'
import Template from '@templates/Template.js'

const button = document.querySelector("button[type='submit']")
const main = document.getElementById("api")

button.addEventListener("click", async () => {
    const node = await Template()
    main.append(node)
})

main.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete-icon")){
        const childToDelete = document.getElementById("card")
        main.removeChild(childToDelete)
    }
})

