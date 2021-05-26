import fetchData from '@utils/fetchData.js'

const location = document.querySelector("input[type='text']")

const Template = async () => {

    const data = await fetchData(location.value)

    //-------card--section-1----------
    const addIcon = document.createElement('img')
    addIcon.src = "assets/images/add.svg"
    addIcon.className = "add-icon"

    const cityAndCountry = document.createElement('p')
    cityAndCountry.innerText = `${data.name} ${data.sys.country}`
    
    const delIcon = document.createElement('img')
    delIcon.src = "assets/images/delete.svg"
    delIcon.className = "delete-icon"

    const weatherImage = document.createElement('img')
    weatherImage.src = "assets/images/raini.png"
    weatherImage.className = "weather-image"

    const sectionOne = document.createElement('div')
    sectionOne.append(addIcon, cityAndCountry, delIcon, weatherImage)
    sectionOne.className = "card--section-1"

    //---------card--section-2------
    const descP = document.createElement('p')
    descP.innerText = `${data.weather[0].description}`
    descP.className = "description"

    const tempP = document.createElement('p')
    tempP.innerText = `${data.main.temp}°F`
    tempP.className = "temperature"

    const minP = document.createElement('p')
    minP.innerText = `Min ${data.main.temp_min}°F`
    minP.className = "min"

    const maxP = document.createElement('p')
    maxP.innerText = `Max ${data.main.temp_max}°F`
    maxP.className = "max"

    const windIcon = document.createElement('img')
    windIcon.src = "assets/images/windy.svg"
    const windP = document.createElement('p')
    windP.innerText = `${data.wind.speed}Km/H`
    const windSection = document.createElement('div')
    windSection.append(windIcon, windP)
    windSection.className =  "wind-speed"

    const humIcon = document.createElement('img')
    humIcon.src = "assets/images/humidity.svg"
    const humP = document.createElement('p')
    humP.innerText = `${data.main.humidity}%`
    const humiditySection = document.createElement('div')
    humiditySection.append(humIcon, humP)
    humiditySection.className = "humidity"

    const additionalData = document.createElement('div')
    additionalData.append(minP, maxP, windSection, humiditySection)
    additionalData.className = "additional-data"

    const sectionTwo = document.createElement('div')
    sectionTwo.append(descP, tempP, additionalData)
    sectionTwo.className = "card--section-2"

    const card = document.createElement('div')
    card.append(sectionOne, sectionTwo)
    card.className = "card"
    card.id = "card"
    return card

}

export default Template