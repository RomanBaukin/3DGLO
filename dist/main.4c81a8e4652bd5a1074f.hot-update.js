/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/validator.js":
/*!**********************************!*\
  !*** ./src/modules/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\n\nvar validator = function validator() {\n  var inputsValid = document.querySelectorAll('input'),\n      buttons = document.querySelectorAll('button[type = submit]');\n  inputsValid.forEach(function (elem) {\n    elem.addEventListener('input', function () {\n      elem.style.cssText = 'border: none';\n\n      if (elem.name === 'user_name') {\n        elem.value = elem.value.replace(/[^\\W\\s]+|[!-@]/gi, '');\n      }\n\n      if (elem.matches('.mess')) {\n        elem.value = elem.value.replace(/[^\\W]+/gi, '');\n      } else if (elem.type === 'tel') {\n        elem.value = elem.value.replace(/^\\+?[78]([-()]*\\d){,10}$/, '');\n      }\n    });\n  });\n  buttons.forEach(function (button) {\n    button.addEventListener('click', function (e) {\n      var target = e.target,\n          form = target.closest('form'),\n          inputs = form.querySelectorAll('input'),\n          message = document.createElement('div');\n      inputs.forEach(function (elem) {\n        if (elem.value === '') {\n          button.disabled = true;\n          message.textContent = 'Заполните пустые поля';\n          message.style.cssText = 'color: red;';\n          elem.style.cssText = 'border: solid 2px red';\n        }\n\n        console.log(elem.matches('[type=tel]'));\n      });\n      form.appendChild(message);\n      setTimeout(function () {\n        message.remove();\n        button.disabled = false;\n      }, 3000);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);\n\n//# sourceURL=webpack://3dglo/./src/modules/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "959008b37ed1361b1b1c"
/******/ 	})();
/******/ 	
/******/ }
);