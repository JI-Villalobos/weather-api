import Swal from 'sweetalert2'

const showAdditionalData = (city, lat, lon, feelsLike, pressure) => {
    Swal.fire({
        title: `${city}: Additional data`,
        imageUrl: 'assets/images/add.svg',
        imageWidth: 29,
        imageHeight: 41,
        html: `
            <div class="data">
                <div class="data-lat adj">
                    <img src="assets/images/latitude.svg" alt="">
                    <p>Latitude: ${lat}</p>
                </div>
                <div class="data-lon adj">
                    <img src="assets/images/longitude.svg" alt="">
                    <p>Longitude: ${lon}</p>
                </div>
                <div class="data-feel adj">
                    <img src="assets/images/feels-like.svg" alt="">
                    <p>Feels Like: ${feelsLike}°C</p>
                </div>
                <div class="data-press adj">
                    <img src="assets/images/pressure.svg" alt="">
                    <p>Pressure: ${pressure}hPa</p>
                </div>
            </div>
        `
    })    
}

export default showAdditionalData 