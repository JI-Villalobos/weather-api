
const URL = process.env.URL
const KEY = process.env.API_KEY

const fetchData =  (city) => {
   const apiUrl = `${URL}${city}&appid=${KEY}`
   try {
       const response = fetch(apiUrl)
        .then(response => response.json())
        .then(responseJson => {
            const items = []
            responseJson.weather.forEach((item) => {
                console.log(item.main);
            })
        }) 
   }catch(error) {
       console.log('Fetch error', error);
   }
}

export default fetchData