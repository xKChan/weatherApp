const cityInput = document.getElementById("city");

const site = "http://api.weatherapi.com/v1";
const currentWeather = "/current.json";
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
      console.log(response.current.condition.text);
      console.log(response.location.name);
      console.log(response.current.temp_c);
    });
}

// function getCity() {
//   city = cityInput.value;
//   console.log(city);
// }

// cityInput.addEventListener("input", () => {
//   getCity();
// });
