const axios = require('axios');

exports.fetchWeatherReport = async () => {

    try {

        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lon=-0.3560687&appid=fb7229717ee9d5725780322b8cb4ed4b&lat=5.5415813");

        return response.data;

    }

    catch(e) {

    }

}