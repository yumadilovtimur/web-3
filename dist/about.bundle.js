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
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\nfunction yaMap() {\n  ymaps.ready(init);\n\n  var yandexMap = document.querySelector(\"#map\");\n\n  var placemarks = [{\n    latitude: 54.765343,\n    longitude: 56.052926,\n    hintContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3',\n    balloonContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3'\n  }];\n\n  function init() {\n    var map = new ymaps.Map(yandexMap, {\n      center: [54.765343, 56.052926],\n      zoom: 17,\n      controls: [\"zoomControl\"],\n      behaviors: [\"drag\"]\n    });\n\n    placemarks.forEach(function (obj) {\n      var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {\n        hintContent: obj.hintContent,\n        balloonContent: obj.balloonContent\n      }, {\n        iconLayout: 'default#image',\n        iconImageHref: '/assets/images/map-marker.png',\n        iconImageSize: [44, 60],\n        iconImageOffset: [-22, -60]\n      });\n\n      map.geoObjects.add(placemark);\n    });\n  }\n}\n\nyaMap();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJ5YU1hcCIsInltYXBzIiwicmVhZHkiLCJpbml0IiwieWFuZGV4TWFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2VtYXJrcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaGludENvbnRlbnQiLCJiYWxsb29uQ29udGVudCIsIm1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsImJlaGF2aW9ycyIsImZvckVhY2giLCJvYmoiLCJwbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZkMsUUFBTUMsS0FBTixDQUFZQyxJQUFaOztBQUVBLE1BQU1DLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEI7O0FBRUEsTUFBTUMsYUFBYSxDQUNqQjtBQUNFQyxjQUFVLFNBRFo7QUFFRUMsZUFBVyxTQUZiO0FBR0VDLGlCQUFhLHFEQUhmO0FBSUVDLG9CQUFnQjtBQUpsQixHQURpQixDQUFuQjs7QUFTQSxXQUFTUixJQUFULEdBQWdCO0FBQ2QsUUFBSVMsTUFBTSxJQUFJWCxNQUFNWSxHQUFWLENBQWNULFNBQWQsRUFBeUI7QUFDakNVLGNBQVEsQ0FBQyxTQUFELEVBQVksU0FBWixDQUR5QjtBQUVqQ0MsWUFBTSxFQUYyQjtBQUdqQ0MsZ0JBQVUsQ0FBQyxhQUFELENBSHVCO0FBSWpDQyxpQkFBVyxDQUFDLE1BQUQ7QUFKc0IsS0FBekIsQ0FBVjs7QUFPQVYsZUFBV1csT0FBWCxDQUFtQixVQUFTQyxHQUFULEVBQWM7QUFDL0IsVUFBSUMsWUFBWSxJQUFJbkIsTUFBTW9CLFNBQVYsQ0FBb0IsQ0FBQ0YsSUFBSVgsUUFBTCxFQUFlVyxJQUFJVixTQUFuQixDQUFwQixFQUFtRDtBQUNqRUMscUJBQWFTLElBQUlULFdBRGdEO0FBRWpFQyx3QkFBZ0JRLElBQUlSO0FBRjZDLE9BQW5ELEVBSWQ7QUFDRVcsb0JBQVksZUFEZDtBQUVFQyx1QkFBZSwrQkFGakI7QUFHRUMsdUJBQWUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUhqQjtBQUlFQyx5QkFBaUIsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVA7QUFKbkIsT0FKYyxDQUFoQjs7QUFXRWIsVUFBSWMsVUFBSixDQUFlQyxHQUFmLENBQW1CUCxTQUFuQjtBQUNILEtBYkQ7QUFjRDtBQUNBOztBQUVEcEIiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvZXhhbXBsZVwiO1xyXG5cclxuZnVuY3Rpb24geWFNYXAoKSB7XHJcbiAgeW1hcHMucmVhZHkoaW5pdCk7XHJcbiAgXHJcbiAgY29uc3QgeWFuZGV4TWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXBcIik7XHJcbiAgXHJcbiAgY29uc3QgcGxhY2VtYXJrcyA9IFtcclxuICAgIHtcclxuICAgICAgbGF0aXR1ZGU6IDU0Ljc2NTM0MyxcclxuICAgICAgbG9uZ2l0dWRlOiA1Ni4wNTI5MjYsXHJcbiAgICAgIGhpbnRDb250ZW50OiAn0YDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwg0LMuINCj0YTQsCwg0YPQuy4g0K7RgNC40Y8g0JPQsNCz0LDRgNC40L3QsCwg0LQuIDMnLFxyXG4gICAgICBiYWxsb29uQ29udGVudDogJ9GA0LXRgdC/LiDQkdCw0YjQutC+0YDRgtC+0YHRgtCw0L0sINCzLiDQo9GE0LAsINGD0LsuINCu0YDQuNGPINCT0LDQs9Cw0YDQuNC90LAsINC0LiAzJ1xyXG4gICAgfVxyXG4gIF1cclxuICBcclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG1hcCA9IG5ldyB5bWFwcy5NYXAoeWFuZGV4TWFwLCB7XHJcbiAgICAgIGNlbnRlcjogWzU0Ljc2NTM0MywgNTYuMDUyOTI2XSxcclxuICAgICAgem9vbTogMTcsXHJcbiAgICAgIGNvbnRyb2xzOiBbXCJ6b29tQ29udHJvbFwiXSxcclxuICAgICAgYmVoYXZpb3JzOiBbXCJkcmFnXCJdXHJcbiAgICB9KTtcclxuICBcclxuICAgIHBsYWNlbWFya3MuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcclxuICAgICAgdmFyIHBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoW29iai5sYXRpdHVkZSwgb2JqLmxvbmdpdHVkZV0sIHtcclxuICAgICAgICBoaW50Q29udGVudDogb2JqLmhpbnRDb250ZW50LFxyXG4gICAgICAgIGJhbGxvb25Db250ZW50OiBvYmouYmFsbG9vbkNvbnRlbnRcclxuICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnL2Fzc2V0cy9pbWFnZXMvbWFwLW1hcmtlci5wbmcnLFxyXG4gICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ0LCA2MF0sXHJcbiAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjIsIC02MF1cclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBtYXAuZ2VvT2JqZWN0cy5hZGQocGxhY2VtYXJrKTtcclxuICAgIH0pOyAgXHJcbiAgfVxyXG4gIH1cclxuICBcclxuICB5YU1hcCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

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