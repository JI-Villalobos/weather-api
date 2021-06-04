import responseStatusHandler from '@utils/responseStatusHandler'

const URL = process.env.URL
const KEY = process.env.API_KEY

const fetchData = async (city) => {
   
    const apiUrl = `${URL}${city}&appid=${KEY}&units=metric`
    const response = await fetch(apiUrl)

    responseStatusHandler(response.status)
    const data = await response.json()
            
    return data
}

export default fetchData