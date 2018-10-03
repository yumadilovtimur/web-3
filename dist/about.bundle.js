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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\nfunction yaMap() {\n  ymaps.ready(init);\n\n  var yandexMap = document.querySelector(\"#map\");\n\n  var placemarks = [{\n    latitude: 54.765343,\n    longitude: 56.052926,\n    hintContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3',\n    balloonContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3'\n  }];\n\n  function init() {\n    var map = new ymaps.Map(yandexMap, {\n      center: [54.765343, 56.052926],\n      zoom: 17,\n      controls: [\"zoomControl\"],\n      behaviors: [\"drag\"]\n    });\n\n    placemarks.forEach(function (obj) {\n      var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {\n        hintContent: obj.hintContent,\n        balloonContent: obj.balloonContent\n      }, {\n        iconLayout: 'default#image',\n        iconImageHref: './assets/images/map-marker.png',\n        iconImageSize: [44, 60],\n        iconImageOffset: [-22, -60]\n      });\n\n      map.geoObjects.add(placemark);\n    });\n  }\n}\n\nyaMap();\n\n// Раскрывающаяся навигация\nfunction hamburgerMenu() {\n\n  var hambMenuOpenBtn = document.querySelector(\".header__menu-btn\");\n  var hambMenuOpenBtnElement = document.querySelectorAll(\".header__menu-btn-element\");\n\n  var hambmenu = document.querySelector(\".hambmenu\");\n  var menuLink = document.querySelectorAll(\".hambmenu__link\");\n\n  function displayNone() {\n    hambmenu.style.display = \"none\";\n  }\n\n  hambMenuOpenBtn.addEventListener(\"click\", function (event) {\n    if (!event.target.classList.contains(\"header__menu-btn--close\")) {\n      hambMenuOpenBtn.classList.add(\"header__menu-btn--close\");\n      for (var i = 0; i < hambMenuOpenBtnElement.length; i++) {\n        hambMenuOpenBtnElement[i].classList.add(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.display = \"block\";\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity + 1;\n      document.body.style.overflow = \"hidden\";\n    } else {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i = 0; _i < hambMenuOpenBtnElement.length; _i++) {\n        hambMenuOpenBtnElement[_i].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    }\n  });\n\n  for (var i = 0; i < menuLink.length; ++i) {\n    menuLink[i].addEventListener(\"click\", function () {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i2 = 0; _i2 < hambMenuOpenBtnElement.length; _i2++) {\n        hambMenuOpenBtnElement[_i2].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    });\n  }\n}\nhamburgerMenu();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJ5YU1hcCIsInltYXBzIiwicmVhZHkiLCJpbml0IiwieWFuZGV4TWFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2VtYXJrcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaGludENvbnRlbnQiLCJiYWxsb29uQ29udGVudCIsIm1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsImJlaGF2aW9ycyIsImZvckVhY2giLCJvYmoiLCJwbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiYWRkIiwiaGFtYnVyZ2VyTWVudSIsImhhbWJNZW51T3BlbkJ0biIsImhhbWJNZW51T3BlbkJ0bkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFtYm1lbnUiLCJtZW51TGluayIsImRpc3BsYXlOb25lIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpIiwibGVuZ3RoIiwib3BhY2l0eSIsImdldENvbXB1dGVkU3R5bGUiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2ZDLFFBQU1DLEtBQU4sQ0FBWUMsSUFBWjs7QUFFQSxNQUFNQyxZQUFZQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQWxCOztBQUVBLE1BQU1DLGFBQWEsQ0FDakI7QUFDRUMsY0FBVSxTQURaO0FBRUVDLGVBQVcsU0FGYjtBQUdFQyxpQkFBYSxxREFIZjtBQUlFQyxvQkFBZ0I7QUFKbEIsR0FEaUIsQ0FBbkI7O0FBU0EsV0FB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QixFQUFxQyxFQUFFRCxDQUF2QyxFQUEwQztBQUN4Q1QsYUFBU1MsQ0FBVCxFQUFZTCxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFZO0FBQ2hEUixzQkFBZ0JXLFNBQWhCLENBQTBCUSxNQUExQixDQUFpQyx5QkFBakM7QUFDQSxXQUFLLElBQUlOLE1BQUksQ0FBYixFQUFnQkEsTUFBSVosdUJBQXVCYSxNQUEzQyxFQUFtREQsS0FBbkQsRUFBd0Q7QUFDdERaLCtCQUF1QlksR0FBdkIsRUFBMEJGLFNBQTFCLENBQW9DUSxNQUFwQyxDQUEyQyxpQ0FBM0M7QUFDRDtBQUNEaEIsZUFBU0csS0FBVCxDQUFlUyxPQUFmLEdBQXlCQyxpQkFBaUJiLFFBQWpCLEVBQTJCWSxPQUEzQixHQUFxQyxDQUE5RDtBQUNBdkMsZUFBU3lDLElBQVQsQ0FBY1gsS0FBZCxDQUFvQlksUUFBcEIsR0FBK0IsU0FBL0I7QUFDQUUsaUJBQVdmLFdBQVgsRUFBd0IsR0FBeEI7QUFDRCxLQVJEO0FBU0Q7QUFFRjtBQUNETiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBcIi4vbW9kdWxlcy9leGFtcGxlXCI7XHJcblxyXG5mdW5jdGlvbiB5YU1hcCgpIHtcclxuICB5bWFwcy5yZWFkeShpbml0KTtcclxuICBcclxuICBjb25zdCB5YW5kZXhNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcFwiKTtcclxuICBcclxuICBjb25zdCBwbGFjZW1hcmtzID0gW1xyXG4gICAge1xyXG4gICAgICBsYXRpdHVkZTogNTQuNzY1MzQzLFxyXG4gICAgICBsb25naXR1ZGU6IDU2LjA1MjkyNixcclxuICAgICAgaGludENvbnRlbnQ6ICfRgNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9LCDQsy4g0KPRhNCwLCDRg9C7LiDQrtGA0LjRjyDQk9Cw0LPQsNGA0LjQvdCwLCDQtC4gMycsXHJcbiAgICAgIGJhbGxvb25Db250ZW50OiAn0YDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwg0LMuINCj0YTQsCwg0YPQuy4g0K7RgNC40Y8g0JPQsNCz0LDRgNC40L3QsCwg0LQuIDMnXHJcbiAgICB9XHJcbiAgXVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICB2YXIgbWFwID0gbmV3IHltYXBzLk1hcCh5YW5kZXhNYXAsIHtcclxuICAgICAgY2VudGVyOiBbNTQuNzY1MzQzLCA1Ni4wNTI5MjZdLFxyXG4gICAgICB6b29tOiAxNyxcclxuICAgICAgY29udHJvbHM6IFtcInpvb21Db250cm9sXCJdLFxyXG4gICAgICBiZWhhdmlvcnM6IFtcImRyYWdcIl1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgcGxhY2VtYXJrcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICB2YXIgcGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbb2JqLmxhdGl0dWRlLCBvYmoubG9uZ2l0dWRlXSwge1xyXG4gICAgICAgIGhpbnRDb250ZW50OiBvYmouaGludENvbnRlbnQsXHJcbiAgICAgICAgYmFsbG9vbkNvbnRlbnQ6IG9iai5iYWxsb29uQ29udGVudFxyXG4gICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcuL2Fzc2V0cy9pbWFnZXMvbWFwLW1hcmtlci5wbmcnLFxyXG4gICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ0LCA2MF0sXHJcbiAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjIsIC02MF1cclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBtYXAuZ2VvT2JqZWN0cy5hZGQocGxhY2VtYXJrKTtcclxuICAgIH0pOyAgXHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgeWFNYXAoKTtcclxuXHJcblxyXG4vLyDQoNCw0YHQutGA0YvQstCw0Y7RidCw0Y/RgdGPINC90LDQstC40LPQsNGG0LjRj1xyXG5mdW5jdGlvbiBoYW1idXJnZXJNZW51KCkge1xyXG5cclxuICBjb25zdCBoYW1iTWVudU9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1idG5cIik7XHJcbiAgY29uc3QgaGFtYk1lbnVPcGVuQnRuRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50XCIpO1xyXG5cclxuICBjb25zdCBoYW1ibWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYm1lbnVcIik7XHJcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhhbWJtZW51X19saW5rXCIpO1xyXG5cclxuICBmdW5jdGlvbiBkaXNwbGF5Tm9uZSgpIHtcclxuICAgIGhhbWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIGhhbWJNZW51T3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKSkge1xyXG4gICAgICBoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYW1iTWVudU9wZW5CdG5FbGVtZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX21lbnUtYnRuLWVsZW1lbnQtLWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLm9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGhhbWJtZW51KS5vcGFjaXR5ICsgMTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW1iTWVudU9wZW5CdG5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFtYk1lbnVPcGVuQnRuRWxlbWVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50LS1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBoYW1ibWVudS5zdHlsZS5vcGFjaXR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShoYW1ibWVudSkub3BhY2l0eSAtIDE7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgICAgc2V0VGltZW91dChkaXNwbGF5Tm9uZSwgNjAwKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51TGluay5sZW5ndGg7ICsraSkge1xyXG4gICAgbWVudUxpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW1iTWVudU9wZW5CdG5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFtYk1lbnVPcGVuQnRuRWxlbWVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50LS1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBoYW1ibWVudS5zdHlsZS5vcGFjaXR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShoYW1ibWVudSkub3BhY2l0eSAtIDE7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgICAgc2V0VGltZW91dChkaXNwbGF5Tm9uZSwgNjAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuaGFtYnVyZ2VyTWVudSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/example.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/modules/example.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2V4YW1wbGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/example.js\n");

/***/ })

/******/ });