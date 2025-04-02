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

/***/ "./src/classes/HorrorMovie.ts":
/*!************************************!*\
  !*** ./src/classes/HorrorMovie.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HorrorMovie: () => (/* binding */ HorrorMovie)\n/* harmony export */ });\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie */ \"./src/classes/Movie.ts\");\n\nclass HorrorMovie extends _Movie__WEBPACK_IMPORTED_MODULE_0__.Movie {\n    constructor(title, duration, hasOscar, director, hasJumpScares // Nueva propiedad específica de HorrorMovie que indica si tiene \"jump scares\"\n    ) {\n        super(title, duration, hasOscar, director);\n        this.hasJumpScares = hasJumpScares;\n    }\n    displayAlert() {\n        // Método específico de HorrorMovie que muestra una alerta en consola\n        console.log(\"¡Alerta! El horror es horrendo!\");\n    }\n    getInfo() {\n        // Sobrescribe el método getInfo() de Movie para devolver información diferente\n        return 'some movie info'; // Este método ahora devuelve un texto fijo en lugar de la información de la película\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/classes/HorrorMovie.ts?");

/***/ }),

/***/ "./src/classes/Movie.ts":
/*!******************************!*\
  !*** ./src/classes/Movie.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Movie: () => (/* binding */ Movie)\n/* harmony export */ });\nclass Movie {\n    constructor(title, duration, hasOscar, director) {\n        this.title = title;\n        this.duration = duration;\n        this.hasOscar = hasOscar;\n        this.director = director;\n    }\n    getInfo() {\n        return `El título del film es \"${this.title}\" y dura ${this.duration} minutos. ¿Tiene un Oscar? ${this.hasOscar ? \"Sí\" : \"No\"}`;\n    }\n    getDuration() {\n        return this.duration;\n    }\n    play() {\n        console.log(\"Playing...\");\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/classes/Movie.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_HorrorMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/HorrorMovie */ \"./src/classes/HorrorMovie.ts\");\n/* harmony import */ var _classes_Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Movie */ \"./src/classes/Movie.ts\");\n// HTML & Eventos\n\n\nconst director1 = {\n    name: \"Peter Jackson\",\n    age: 60,\n    data: \"He is Amazing\",\n};\nconst movie1 = new _classes_Movie__WEBPACK_IMPORTED_MODULE_1__.Movie(\"El Señor de los Anillos\", 300, true, director1);\nconst movie2 = new _classes_Movie__WEBPACK_IMPORTED_MODULE_1__.Movie(\"Harry Potter\", 120, true, director1);\nconst scream = new _classes_HorrorMovie__WEBPACK_IMPORTED_MODULE_0__.HorrorMovie(\"Scream\", 90, false, director1, true);\nconst movieArr = [movie1, movie2, scream];\nconst btn = document.querySelector(\".btn\");\nconst movieList = document.querySelector(\".movie-list\");\nconst addMovie = (movie) => {\n    const li = document.createElement(\"li\");\n    const h3 = document.createElement(\"h3\");\n    const h4 = document.createElement(\"h4\");\n    const p = document.createElement(\"p\");\n    h3.classList.add(\"title\");\n    h3.textContent = movie.title;\n    h4.classList.add(\"duration\");\n    h4.textContent = `${movie.getDuration()} min.`;\n    p.textContent = `Director: ${movie.director.name}`;\n    li.classList.add(\"movie-card\");\n    li.append(h3);\n    li.append(h4);\n    li.append(p);\n    movieList.append(li);\n};\nlet moviesShown = false;\nbtn.addEventListener(\"click\", () => {\n    if (moviesShown) {\n        movieList.innerHTML = \"\";\n        btn.textContent = \"Show Movies\";\n    }\n    else {\n        movieArr.forEach((movie) => addMovie(movie));\n        btn.textContent = \"Hide Movies\";\n    }\n    moviesShown = !moviesShown;\n});\n\n\n//# sourceURL=webpack://typescript/./src/main.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;