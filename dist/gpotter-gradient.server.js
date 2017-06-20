module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = getColorFromGradient;
function getColorFromGradient(gradient, step) {

  if (gradient[step]) return gradient[step];

  const R = {};
  const G = {};
  const B = {};

  const keys = Object.keys(gradient);

  const closestStart = Math.max(...keys.filter(v => v < step));
  const closestEnd = Math.min(...keys.filter(v => v > step));

  const percent = 100 * (step - closestStart) / (closestEnd - closestStart) / 100;

  R.start = parseInt(gradient[closestStart].replace('#', '').substring(0, 2), 16);
  G.start = parseInt(gradient[closestStart].replace('#', '').substring(2, 4), 16);
  B.start = parseInt(gradient[closestStart].replace('#', '').substring(4, 6), 16);

  R.end = parseInt(gradient[closestEnd].replace('#', '').substring(0, 2), 16);
  G.end = parseInt(gradient[closestEnd].replace('#', '').substring(2, 4), 16);
  B.end = parseInt(gradient[closestEnd].replace('#', '').substring(4, 6), 16);

  // formula get from this https://stackoverflow.com/a/27536
  R.final = Math.round(R.end * percent + R.start * (1 - percent)).toString(16);
  G.final = Math.round(G.end * percent + G.start * (1 - percent)).toString(16);
  B.final = Math.round(B.end * percent + B.start * (1 - percent)).toString(16);

  R.final = R.final.length === 1 ? `0${R.final}` : R.final;
  G.final = G.final.length === 1 ? `0${G.final}` : G.final;
  B.final = B.final.length === 1 ? `0${B.final}` : B.final;

  return `#${R.final}${G.final}${B.final}`;
}

/***/ })
/******/ ]);