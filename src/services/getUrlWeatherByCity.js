import { url_base_weather, api_key } from './../components/constantes/api_url'
//import { api_weather } from './../constantes/api_url.js'

const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api_key}`;  
};

export default getUrlWeatherByCity;