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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Character {\n  constructor(options) {\n    this.x = options.x;\n    this.y = options.y;\n    this.img = \"../images/girl.png\";\n    this.ctx = options.ctx;\n  }\n\n  drawImage() {\n    // image(this.img, this.x, this.y, 40, 20);\n    const img = new Image();\n    img.src = this.img;\n    img.onload = () => {\n      ctx.drawImage(img, this.x, this.y, 60, 40);\n    };\n  }\n\n  //   move() {\n  //     this.vel = this.game.bounceBack(this.pos, this.vel);\n  //     this.pos[0] += this.vel[0];\n  //     this.pos[1] += this.vel[1];\n  //   }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\n\n//# sourceURL=webpack:///./src/character.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./src/text.js\");\nconsole.log(\"Webpack is working!\");\n\n\n\nwindow.Character = _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nwindow.addEventListener(\"DOMContentLoaded\", event => {\n  const width = document.documentElement.clientWidth;\n  const height = document.documentElement.clientHeight;\n  const canvasWidth = width / 2;\n  const str = String(canvasWidth) + \"px\";\n  console.log(str);\n  const body = document.getElementById(\"body\");\n  const canvas = document.getElementById(\"story-canvas\");\n  const textArea = document.getElementById(\"text-area\");\n  let page = 0\n  textArea.innerHTML = Object(_text__WEBPACK_IMPORTED_MODULE_1__[\"allText\"])()[page].text;\n  body.style.backgroundColor = `rgb(227, 254, 255)`;\n  canvas.style.width = str;\n  canvas.style.height = \"100vh\";\n  const ctx = canvas.getContext(\"2d\");\n  window.ctx = ctx;\n  const girl = new _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ x: 0, y: 100, ctx });\n  girl.drawImage();\n  // this paints the sky\n  ctx.fillStyle = `rgb(227, 254, 255)`;\n  ctx.fillRect(0, 0, width, height);\n  //this paints the ground\n  ctx.beginPath();\n  ctx.rect(0, 140, width, 10);\n  ctx.fillStyle = `rgb(130, 79, 43)`;\n  ctx.fill();\n  //this is the array that holds the grass image\n  const grassXs = [];\n  for (let i = 0; i < 4; i++) {\n    grassXs.push(i * 100);\n  }\n  console.log(grassXs);\n   console.log(\"anyhting\");\n   document.onkeydown = event => {\n     switch (event.keyCode) {\n       case 37:\n           if (page === 0){\n            textArea.innerHTML = Object(_text__WEBPACK_IMPORTED_MODULE_1__[\"allText\"])()[0].text;\n           }\n           else if (page >= 0) {\n               page--\n             textArea.innerHTML = Object(_text__WEBPACK_IMPORTED_MODULE_1__[\"allText\"])()[page].text;\n           }\n         break;\n       case 39:\n           if (page === 2){\n            textArea.innerHTML = Object(_text__WEBPACK_IMPORTED_MODULE_1__[\"allText\"])()[2].text;\n           }\n           else if (page <= 2){\n               page++\n            textArea.innerHTML = Object(_text__WEBPACK_IMPORTED_MODULE_1__[\"allText\"])()[page].text;}\n         break;\n     }\n   };\n//   const drawGrass = () => {\n//     girl.drawImage();\n//     // ctx.fillStyle = `rgb(227, 254, 255)`;\n//     // ctx.fillRect(0, 0, width, height);\n//     // this paints the ground\n//     // ctx.beginPath();\n//     // ctx.rect(0, 140, width, 10);\n//     // ctx.fillStyle = `rgb(130, 79, 43)`;\n//     // ctx.fill();\n//     for (let i = 0; i < grassXs.length; i++) {\n//       const img = new Image();\n//       img.src = \"../images/grass.png\";\n//       img.onload = () => {\n//         ctx.drawImage(img, grassXs[i], 130, 100, 20);\n//       };\n//       grassXs[i] -= 1;\n//       if (grassXs[i] <= -100) {\n//         grassXs[i] = 300;\n//       }\n//     }\n//     ctx.clearRect(0, 0, width, height);\n   \n\n//   };\n  //   const loopGrass = () => setInterval(() => drawGrass(), 100)\n  //   loopGrass()\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/*! exports provided: allText, changePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allText\", function() { return allText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changePage\", function() { return changePage; });\nconst allText = () => {\n  const pages = {\n    0: {\n      text: \"TITLE TITLE TITLE\",\n      page: 0\n    },\n    1: {\n      text: \"The sun did not shine. It was too wet to play. So we sat in the\",\n      page: 1\n    },\n    2: {\n      text:\n        \"Too wet to go out And too cold to play ball. So we sat in the house.\",\n      page: 2\n    }\n  };\n  return pages;\n};\n\nconst changePage = (pageNum) => {\n     pageNum += 1\n};\n\n\n//# sourceURL=webpack:///./src/text.js?");

/***/ })

/******/ });