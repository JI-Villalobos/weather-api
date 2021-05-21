import '@styles/main.css'
import '@utils/fetchData.js'
import fetchData from './utils/FetchData'

const button = document.querySelector("button[type='submit']")
var input = document.querySelector("input[type='text']")

button.addEventListener("click", () => {
    //console.log(input.value);
    fetchData(input.value)
})
