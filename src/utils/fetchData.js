import responseStatusHandler from '@utils/responseStatusHandler'
import { storeRequest } from '@utils/storeRequest.js'

const URL = process.env.URL
const KEY = process.env.API_KEY

const fetchData = async (city) => {
   
    const apiUrl = `${URL}${city}&appid=${KEY}&units=metric`
    const response = await fetch(apiUrl)

    responseStatusHandler(response.status)
    const data = await response.json()
    storeRequest(data)    
    
    return data
}

export default fetchData