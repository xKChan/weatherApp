const cityInput = document.getElementById("city");
const cityName = document.getElementById("cityName");
const forecast = document.getElementById("forecast");
const tempNow = document.getElementById("tempNow");
const feels = document.getElementById("feels");
const lowNum = document.getElementById("lowsNum");
const highsNum = document.getElementById("highNum");
const humidityNum = document.getElementById("humidityNum");

const site = "http://api.weatherapi.com/v1";
const currentWeather = "/forecast.json";
const key = "e2cdef5400cf4cf5ab9234643230211";
let city = "calgary";

export function getWeather() {
  fetch(`${site}${currentWeather}?key=${key}&q=${city}`, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      forecast.textContent = response.current.condition.text;
      cityName.textContent = `${response.location.name}, ${response.location.country}`;
      tempNow.textContent = `${response.current.temp_c}°C`;
      feels.textContent = `Feels Like: ${response.current.feelslike_c}°C`;
      lowNum.textContent = `${response.forecast.forecastday[0].day.mintemp_c}°C`;
      highsNum.textContent = `${response.forecast.forecastday[0].day.maxtemp_c}°C`;
      humidityNum.textContent = `${response.current.humidity}%`;
    });
}
