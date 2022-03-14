import { } from 'country.js';
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&lang=es&units=metric?&appid=0fbc13789fdd8925a4f93451d224ecbc`

            console.log(COUNTRY__KEY)
            // fetch(URL)
            //     .then((response) => response.json())
            //     .then((responseData) => {
            //         let country = Array.from(responseData.sys.country)
            //         country.forEach((country) => {
            //             console.log(country)
            //         })
            //         // if (country === 'GB') {
            //         //     console.log(country)
            //         // } else {
            //         //     console.log('Error: Country not found')
            //         // }
            //     })
            //     .catch((error) => {
            //         console.error(error)
            //     })
        })
    }
})

