import responseStatusHandler from '@utils/responseStatusHandler'


const URL = process.env.URL
const KEY = process.env.API_KEY

const fetchData = async (city) => {
   const apiUrl = `${URL}${city}&appid=${KEY}`
   try {
       const response = await fetch(apiUrl)
       const data = await response.json()   
       responseStatusHandler(response.status, city)
           return data
        } catch(error) {
       console.log(error);
   }
}

export default fetchData