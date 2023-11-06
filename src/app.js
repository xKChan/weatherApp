const cityInput = document.getElementById("city");
const cityName = document.getElementById("cityName");
const forecast = document.getElementById("forecast");
const tempNow = document.getElementById("tempNow");
const feels = document.getElementById("feels");
const low = document.getElementById("lows");
const highs = document.getElementById("highs");
const humidity = document.getElementById("humidity");

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
      console.log(response);
      forecast.textContent = response.current.condition.text;
      cityName.textContent = `${response.location.name}, ${response.location.country}`;
      tempNow.textContent = response.current.temp_c;
      feels.textContent = `Feels Like: ${response.current.feelslike_c}`;
      low.textContent = `Low: ${response.forecast.forecastday[0].day.mintemp_c}`;
      highs.textContent = `High: ${response.forecast.forecastday[0].day.maxtemp_c}`;
      humidity.textContent = `Humidity: ${response.current.humidity}`;
    });
}
