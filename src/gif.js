const img = document.querySelector("img");

const site = "https://api.giphy.com/v1/gifs/translate";
const key = "po6a3izbSGoJYYi71qWUx73gpMJN6K8n";
const api = "api_key=";
let search = "cloudy";

export function getGif() {
  fetch(`${site}?${api}${key}&s=${search}`, {
    mode: "cors",
  })
    .then(function (resolve) {
      return resolve.json();
    })
    .then(function (resolve) {
      img.src = resolve.data.images.original.url;
    });
}
