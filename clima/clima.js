const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=64b5c2053690cb700bbf3d3c1495d617`);

    return resp.data.main.temp;

}

module.exports = {
  getClima
}
