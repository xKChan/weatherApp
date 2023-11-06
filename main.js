/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getGif: () => (/* binding */ getGif),\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _imgs_magnify_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/magnify.svg */ \"./src/imgs/magnify.svg\");\n\n\nconst site = \"http://api.weatherapi.com/v1\";\nconst currentWeather = \"/forecast.json\";\nconst key = \"e2cdef5400cf4cf5ab9234643230211\";\nlet city = \"calgary\";\nlet searchGif = \"\";\n\nconst search = document.getElementById(\"search\");\nconst searchInput = document.getElementById(\"city\");\n\nfunction searchCity() {\n  const getCityName = document.getElementById(\"city\").value;\n  city = getCityName;\n  console.log(city);\n  getWeather();\n}\n\nconst cityName = document.getElementById(\"cityName\");\nconst forecast = document.getElementById(\"forecast\");\nconst tempNow = document.getElementById(\"tempNow\");\nconst feels = document.getElementById(\"feels\");\nconst lowNum = document.getElementById(\"lowsNum\");\nconst highsNum = document.getElementById(\"highNum\");\nconst humidityNum = document.getElementById(\"humidityNum\");\nconst searchIconLoad = document.querySelector(\"#search\");\n\nconst myIcon = new Image();\nmyIcon.src = _imgs_magnify_svg__WEBPACK_IMPORTED_MODULE_0__;\nsearchIconLoad.appendChild(myIcon);\n\nfunction getWeather() {\n  fetch(`${site}${currentWeather}?key=${key}&q=${city}`, {\n    mode: \"cors\",\n  })\n    .then(function (response) {\n      return response.json();\n    })\n    .then(function (response) {\n      forecast.textContent = response.current.condition.text;\n      searchGif = response.current.condition.text;\n      console.log(searchGif);\n      cityName.textContent = `${response.location.name}, ${response.location.country}`;\n      tempNow.textContent = `${response.current.temp_c}°C`;\n      feels.textContent = `Feels Like: ${response.current.feelslike_c}°C`;\n      lowNum.textContent = `${response.forecast.forecastday[0].day.mintemp_c}°C`;\n      highsNum.textContent = `${response.forecast.forecastday[0].day.maxtemp_c}°C`;\n      humidityNum.textContent = `${response.current.humidity}%`;\n    })\n    .catch(function (error) {\n      console.log(error);\n    });\n}\n\ngetCity();\n\n//\n// GIF\n//\n\nconst img = document.querySelector(\".gifImg\");\n\nconst siteGif = \"https://api.giphy.com/v1/gifs/translate\";\nconst keyGif = \"po6a3izbSGoJYYi71qWUx73gpMJN6K8n\";\nconst apiGif = \"api_key=\";\n\nconsole.log(searchGif);\nconsole.log(`${siteGif}?${apiGif}${keyGif}&s=${searchGif}`);\n\nfunction getGif() {\n  fetch(`${siteGif}?${apiGif}${keyGif}&s=${searchGif}`, {\n    mode: \"cors\",\n  })\n    .then(function (resolve) {\n      return resolve.json();\n    })\n    .then(function (resolve) {\n      img.src = resolve.data.images.original.url;\n    });\n}\n\nsetTimeout(() => {\n  getGif();\n}, 500);\n\nfunction getCity() {\n  search.addEventListener(\"click\", () => {\n    searchCity();\n    setTimeout(() => {\n      getGif();\n    }, 500);\n  });\n  searchInput.addEventListener(\"keypress\", (e) => {\n    if (e.key === \"Enter\") {\n      searchCity();\n      setTimeout(() => {\n        getGif();\n      }, 0);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n(0,_app__WEBPACK_IMPORTED_MODULE_0__.getWeather)();\n// getGif();\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/imgs/magnify.svg":
/*!******************************!*\
  !*** ./src/imgs/magnify.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54ff7732bb1a5ff166c6.svg\";\n\n//# sourceURL=webpack://weatherapp/./src/imgs/magnify.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;