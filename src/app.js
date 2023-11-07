import "./style.css";

const site = "https://api.weatherapi.com/v1";
const currentWeather = "/forecast.json";
const key = "e2cdef5400cf4cf5ab9234643230211";
let city = "calgary";
let searchGif = "";

const search = document.getElementById("search");
const searchInput = document.getElementById("city");

const cityName = document.getElementById("cityName");
const forecast = document.getElementById("forecast");
const tempNow = document.getElementById("tempNow");
const feels = document.getElementById("feels");
const lowNum = document.getElementById("lowsNum");
const highsNum = document.getElementById("highNum");
const humidityNum = document.getElementById("humidityNum");

export function getWeather() {
  fetch(`${site}${currentWeather}?key=${key}&q=${city}`, {
    mode: "cors",
  })
    .then((response) => response.json())
    .then((response) => {
      forecast.textContent = response.current.condition.text;
      searchGif = response.current.condition.text;
      console.log(searchGif);
      cityName.textContent = `${response.location.name}, ${response.location.country}`;
      tempNow.textContent = `${response.current.temp_c}°C`;
      feels.textContent = `Feels Like: ${response.current.feelslike_c}°C`;
      lowNum.textContent = `${response.forecast.forecastday[0].day.mintemp_c}°C`;
      highsNum.textContent = `${response.forecast.forecastday[0].day.maxtemp_c}°C`;
      humidityNum.textContent = `${response.current.humidity}%`;
    })
    .catch((error) => {
      console.log(error);
    });
}

function searchCity() {
  const getCityName = document.getElementById("city").value;
  city = getCityName;
  getWeather();
}

//
// GIF
//

const img = document.querySelector(".gifImg");

const siteGif = "https://api.giphy.com/v1/gifs/translate";
const keyGif = "po6a3izbSGoJYYi71qWUx73gpMJN6K8n";
const apiGif = "api_key=";

console.log(searchGif);
console.log(`${siteGif}?${apiGif}${keyGif}&s=${searchGif}`);

export function getGif() {
  fetch(`${siteGif}?${apiGif}${keyGif}&s=${searchGif}`, {
    mode: "cors",
  })
    .then((resolve) => resolve.json())
    .then((resolve) => {
      img.src = resolve.data.images.original.url;
    });
}

setTimeout(() => {
  getGif();
}, 500);

function getCity() {
  search.addEventListener("click", () => {
    searchCity();
    setTimeout(() => {
      getGif();
    }, 500);
  });
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchCity();
      setTimeout(() => {
        getGif();
      }, 0);
    }
  });
}

getCity();
