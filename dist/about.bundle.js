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
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\nfunction yaMap() {\n  ymaps.ready(init);\n\n  var yandexMap = document.querySelector(\"#map\");\n\n  var placemarks = [{\n    latitude: 54.765343,\n    longitude: 56.052926,\n    hintContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3',\n    balloonContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3'\n  }];\n\n  function init() {\n    var map = new ymaps.Map(yandexMap, {\n      center: [54.765343, 56.052926],\n      zoom: 17,\n      controls: [\"zoomControl\"],\n      behaviors: [\"drag\"]\n    });\n\n    placemarks.forEach(function (obj) {\n      var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {\n        hintContent: obj.hintContent,\n        balloonContent: obj.balloonContent\n      }, {\n        iconLayout: 'default#image',\n        iconImageHref: './assets/images/map-marker.png',\n        iconImageSize: [44, 60],\n        iconImageOffset: [-22, -60]\n      });\n\n      map.geoObjects.add(placemark);\n    });\n  }\n}\n\nyaMap();\n\n// Раскрывающаяся навигация\nfunction hamburgerMenu() {\n\n  var hambMenuOpenBtn = document.querySelector(\".header__menu-btn\");\n  var hambMenuOpenBtnElement = document.querySelectorAll(\".header__menu-btn-element\");\n\n  var hambmenu = document.querySelector(\".hambmenu\");\n  var menuLink = document.querySelectorAll(\".hambmenu__link\");\n\n  var menuAside = document.querySelector(\".blog-content__menu\");\n\n  hambMenuOpenBtn.addEventListener(\"click\", function (event) {\n\n    if (hambMenuOpenBtn.classList.contains(\"header__menu-btn--close\")) {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var i = 0; i < hambMenuOpenBtnElement.length; i++) {\n        hambMenuOpenBtnElement[i].classList.remove(\"header__menu-btn-element--close\");\n      }\n      document.body.style.overflow = \"visible\";\n      hambmenu.style.opacity = 0;\n      hambmenu.style.transform = \"translateX(100%)\";\n    } else {\n      hambMenuOpenBtn.classList.add(\"header__menu-btn--close\");\n      for (var _i = 0; _i < hambMenuOpenBtnElement.length; _i++) {\n        hambMenuOpenBtnElement[_i].classList.add(\"header__menu-btn-element--close\");\n      }\n      document.body.style.overflow = \"hidden\";\n      hambmenu.style.opacity = 1;\n      hambmenu.style.transform = \"translateX(0)\";\n    }\n  });\n\n  for (var i = 0; i < menuLink.length; ++i) {\n    menuLink[i].addEventListener(\"click\", function () {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i2 = 0; _i2 < hambMenuOpenBtnElement.length; _i2++) {\n        hambMenuOpenBtnElement[_i2].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    });\n  }\n}\nhamburgerMenu();\n\n// Кнопка прокрутки вниз (стрелка вниз)\nfunction arrowDown() {\n  var arrowDownButton = document.querySelector(\".header__arrow-down-link\");\n  var header = document.querySelector(\".header-bg\");\n  arrowDownButton.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    header.nextElementSibling.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  });\n}\n\narrowDown();\n\n// scroll-parallax\nfunction scrollParallax() {\n  var headerAvatar = document.querySelector(\".header__avatar\");\n  var headerTitle = document.querySelector(\".header__title\");\n  var headerText = document.querySelector(\".header__text\");\n\n  window.addEventListener(\"scroll\", function (event) {\n    headerAvatar.style.transform = \"translate3d(0, \" + -(window.pageYOffset * 0.2) + \"px, 0)\";\n    headerTitle.style.transform = \"translate3d(0, \" + -(window.pageYOffset * 0.15) + \"px, 0)\";\n    headerText.style.transform = \"translate3d(0, \" + -(window.pageYOffset * 0.1) + \"px, 0)\";\n  });\n}\nscrollParallax();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJ5YU1hcCIsInltYXBzIiwicmVhZHkiLCJpbml0IiwieWFuZGV4TWFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2VtYXJrcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaGludENvbnRlbnQiLCJiYWxsb29uQ29udGVudCIsIm1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsImJlaGF2aW9ycyIsImZvckVhY2giLCJvYmoiLCJwbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiYWRkIiwiaGFtYnVyZ2VyTWVudSIsImhhbWJNZW51T3BlbkJ0biIsImhhbWJNZW51T3BlbkJ0bkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFtYm1lbnUiLCJtZW51TGluayIsIm1lbnVBc2lkZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiaSIsImxlbmd0aCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93Iiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRUaW1lb3V0IiwiZGlzcGxheU5vbmUiLCJhcnJvd0Rvd24iLCJhcnJvd0Rvd25CdXR0b24iLCJoZWFkZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRFbGVtZW50U2libGluZyIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInNjcm9sbFBhcmFsbGF4IiwiaGVhZGVyQXZhdGFyIiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJUZXh0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZkMsUUFBTUMsS0FBTixDQUFZQyxJQUFaOztBQUVBLE1BQU1DLFlBQVlDLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbEI7O0FBRUEsTUFBTUMsYUFBYSxDQUNqQjtBQUNFQyxjQUFVLFNBRFo7QUFFRUMsZUFBVyxTQUZiO0FBR0VDLGlCQUFhLHFEQUhmO0FBSUVDLG9CQUFnQjtBQUpsQixHQURpQixDQUFuQjs7QUFTQSxXQUFTUixJQUFULEdBQWdCO0FBQ2QsUUFBSVMsTUFBTSxJQUFJWCxNQUFNWSxHQUFWLENBQWNULFNBQWQsRUFBeUI7QUFDakNVLGNBQVEsQ0FBQyxTQUFELEVBQVksU0FBWixDQUR5QjtBQUVqQ0MsWUFBTSxFQUYyQjtBQUdqQ0MsZ0JBQVUsQ0FBQyxhQUFELENBSHVCO0FBSWpDQyxpQkFBVyxDQUFDLE1BQUQ7QUFKc0IsS0FBekIsQ0FBVjs7QUFPQVYsZUFBV1csT0FBWCxDQUFtQixVQUFTQyxHQUFULEVBQWM7QUFDL0IsVUFBSUMsWUFBWSxJQUFJbkIsTUFBTW9CLFNBQVYsQ0FBb0IsQ0FBQ0YsSUFBSVgsUUFBTCxFQUFlVyxJQUFJVixTQUFuQixDQUFwQixFQUFtRDtBQUNqRUMscUJBQWFTLElBQUlULFdBRGdEO0FBRWpFQyx3QkFBZ0JRLElBQUlSO0FBRjZDLE9BQW5ELEVBSWQ7QUFDRVcsb0JBQVksZUFEZDtBQUVFQyx1QkFBZSxnQ0FGakI7QUFHRUMsdUJBQWUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUhqQjtBQUlFQyx5QkFBaUIsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVA7QUFKbkIsT0FKYyxDQUFoQjs7QUFXRWIsVUFBSWMsVUFBSixDQUFlQyxHQUFmLENBQW1CUCxTQUFuQjtBQUNILEtBYkQ7QUFjRDtBQUNBOztBQUVEcEI7O0FBR0Y7QUFDQSxTQUFTNEIsYUFBVCxHQUF5Qjs7QUFFdkIsTUFBTUMsa0JBQWtCeEIsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBeEI7QUFDQSxNQUFNd0IseUJBQXlCekIsU0FBUzBCLGdCQUFULENBQTBCLDJCQUExQixDQUEvQjs7QUFFQSxNQUFNQyxXQUFXM0IsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUNBLE1BQU0yQixXQUFXNUIsU0FBUzBCLGdCQUFULENBQTBCLGlCQUExQixDQUFqQjs7QUFFQSxNQUFNRyxZQUFZN0IsU0FBU0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBbEI7O0FBRUF1QixrQkFBZ0JNLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxVQUFVQyxLQUFWLEVBQWlCOztBQUV6RCxRQUFJUCxnQkFBZ0JRLFNBQWhCLENBQTBCQyxRQUExQixDQUFtQyx5QkFBbkMsQ0FBSixFQUFtRTtBQUNqRVQsc0JBQWdCUSxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMseUJBQWpDO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlWLHVCQUF1QlcsTUFBM0MsRUFBbURELEdBQW5ELEVBQXdEO0FBQ3REViwrQkFBdUJVLENBQXZCLEVBQTBCSCxTQUExQixDQUFvQ0UsTUFBcEMsQ0FBMkMsaUNBQTNDO0FBQ0Q7QUFDRGxDLGVBQVNxQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFNBQS9CO0FBQ0FaLGVBQVNXLEtBQVQsQ0FBZUUsT0FBZixHQUF5QixDQUF6QjtBQUNBYixlQUFTVyxLQUFULENBQWVHLFNBQWYsR0FBMkIsa0JBQTNCO0FBQ0QsS0FSRCxNQVNLO0FBQ0hqQixzQkFBZ0JRLFNBQWhCLENBQTBCVixHQUExQixDQUE4Qix5QkFBOUI7QUFDQSxXQUFLLElBQUlhLEtBQUksQ0FBYixFQUFnQkEsS0FBSVYsdUJBQXVCVyxNQUEzQyxFQUFtREQsSUFBbkQsRUFBd0Q7QUFDdERWLCtCQUF1QlUsRUFBdkIsRUFBMEJILFNBQTFCLENBQW9DVixHQUFwQyxDQUF3QyxpQ0FBeEM7QUFDRDtBQUNEdEIsZUFBU3FDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFDQVosZUFBU1csS0FBVCxDQUFlRSxPQUFmLEdBQXlCLENBQXpCO0FBQ0FiLGVBQVNXLEtBQVQsQ0FBZUcsU0FBZixHQUEyQixlQUEzQjtBQUNEO0FBQ0YsR0FwQkQ7O0FBc0JBLE9BQUssSUFBSU4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJUCxTQUFTUSxNQUE3QixFQUFxQyxFQUFFRCxDQUF2QyxFQUEwQztBQUN4Q1AsYUFBU08sQ0FBVCxFQUFZTCxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFZO0FBQ2hETixzQkFBZ0JRLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQyx5QkFBakM7QUFDQSxXQUFLLElBQUlDLE1BQUksQ0FBYixFQUFnQkEsTUFBSVYsdUJBQXVCVyxNQUEzQyxFQUFtREQsS0FBbkQsRUFBd0Q7QUFDdERWLCtCQUF1QlUsR0FBdkIsRUFBMEJILFNBQTFCLENBQW9DRSxNQUFwQyxDQUEyQyxpQ0FBM0M7QUFDRDtBQUNEUCxlQUFTVyxLQUFULENBQWVFLE9BQWYsR0FBeUJFLGlCQUFpQmYsUUFBakIsRUFBMkJhLE9BQTNCLEdBQXFDLENBQTlEO0FBQ0F4QyxlQUFTcUMsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxRQUFwQixHQUErQixTQUEvQjtBQUNBSSxpQkFBV0MsV0FBWCxFQUF3QixHQUF4QjtBQUNELEtBUkQ7QUFTRDtBQUVGO0FBQ0RyQjs7QUFFQTtBQUNBLFNBQVNzQixTQUFULEdBQXFCO0FBQ25CLE1BQU1DLGtCQUFrQjlDLFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXhCO0FBQ0EsTUFBTThDLFNBQVMvQyxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQTZDLGtCQUFnQmhCLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxVQUFTQyxLQUFULEVBQWdCO0FBQ3hEQSxVQUFNaUIsY0FBTjtBQUNBRCxXQUFPRSxrQkFBUCxDQUEwQkMsY0FBMUIsQ0FBeUM7QUFDdkNDLGdCQUFVLFFBRDZCO0FBRXZDQyxhQUFPO0FBRmdDLEtBQXpDO0FBSUQsR0FORDtBQU9EOztBQUVEUDs7QUFFQTtBQUNBLFNBQVNRLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUMsZUFBZXRELFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsTUFBTXNELGNBQWN2RCxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFwQjtBQUNBLE1BQU11RCxhQUFheEQsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFuQjs7QUFFQXdELFNBQU8zQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFTQyxLQUFULEVBQWdCO0FBQ2hEdUIsaUJBQWFoQixLQUFiLENBQW1CRyxTQUFuQixHQUErQixvQkFDL0IsRUFBRWdCLE9BQU9DLFdBQVAsR0FBcUIsR0FBdkIsQ0FEK0IsR0FDRCxRQUQ5QjtBQUVBSCxnQkFBWWpCLEtBQVosQ0FBa0JHLFNBQWxCLEdBQThCLG9CQUM5QixFQUFFZ0IsT0FBT0MsV0FBUCxHQUFxQixJQUF2QixDQUQ4QixHQUNDLFFBRC9CO0FBRUFGLGVBQVdsQixLQUFYLENBQWlCRyxTQUFqQixHQUE2QixvQkFDN0IsRUFBRWdCLE9BQU9DLFdBQVAsR0FBcUIsR0FBdkIsQ0FENkIsR0FDQyxRQUQ5QjtBQUVELEdBUEQ7QUFRRDtBQUNETCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBcIi4vbW9kdWxlcy9leGFtcGxlXCI7XHJcblxyXG5mdW5jdGlvbiB5YU1hcCgpIHtcclxuICB5bWFwcy5yZWFkeShpbml0KTtcclxuICBcclxuICBjb25zdCB5YW5kZXhNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcFwiKTtcclxuICBcclxuICBjb25zdCBwbGFjZW1hcmtzID0gW1xyXG4gICAge1xyXG4gICAgICBsYXRpdHVkZTogNTQuNzY1MzQzLFxyXG4gICAgICBsb25naXR1ZGU6IDU2LjA1MjkyNixcclxuICAgICAgaGludENvbnRlbnQ6ICfRgNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9LCDQsy4g0KPRhNCwLCDRg9C7LiDQrtGA0LjRjyDQk9Cw0LPQsNGA0LjQvdCwLCDQtC4gMycsXHJcbiAgICAgIGJhbGxvb25Db250ZW50OiAn0YDQtdGB0L8uINCR0LDRiNC60L7RgNGC0L7RgdGC0LDQvSwg0LMuINCj0YTQsCwg0YPQuy4g0K7RgNC40Y8g0JPQsNCz0LDRgNC40L3QsCwg0LQuIDMnXHJcbiAgICB9XHJcbiAgXVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICB2YXIgbWFwID0gbmV3IHltYXBzLk1hcCh5YW5kZXhNYXAsIHtcclxuICAgICAgY2VudGVyOiBbNTQuNzY1MzQzLCA1Ni4wNTI5MjZdLFxyXG4gICAgICB6b29tOiAxNyxcclxuICAgICAgY29udHJvbHM6IFtcInpvb21Db250cm9sXCJdLFxyXG4gICAgICBiZWhhdmlvcnM6IFtcImRyYWdcIl1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgcGxhY2VtYXJrcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICB2YXIgcGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbb2JqLmxhdGl0dWRlLCBvYmoubG9uZ2l0dWRlXSwge1xyXG4gICAgICAgIGhpbnRDb250ZW50OiBvYmouaGludENvbnRlbnQsXHJcbiAgICAgICAgYmFsbG9vbkNvbnRlbnQ6IG9iai5iYWxsb29uQ29udGVudFxyXG4gICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcuL2Fzc2V0cy9pbWFnZXMvbWFwLW1hcmtlci5wbmcnLFxyXG4gICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ0LCA2MF0sXHJcbiAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjIsIC02MF1cclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBtYXAuZ2VvT2JqZWN0cy5hZGQocGxhY2VtYXJrKTtcclxuICAgIH0pOyAgXHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgeWFNYXAoKTtcclxuXHJcblxyXG4vLyDQoNCw0YHQutGA0YvQstCw0Y7RidCw0Y/RgdGPINC90LDQstC40LPQsNGG0LjRj1xyXG5mdW5jdGlvbiBoYW1idXJnZXJNZW51KCkge1xyXG5cclxuICBjb25zdCBoYW1iTWVudU9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1idG5cIik7XHJcbiAgY29uc3QgaGFtYk1lbnVPcGVuQnRuRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50XCIpO1xyXG5cclxuICBjb25zdCBoYW1ibWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYm1lbnVcIik7XHJcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhhbWJtZW51X19saW5rXCIpO1xyXG5cclxuICBjb25zdCBtZW51QXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctY29udGVudF9fbWVudVwiKVxyXG5cclxuICBoYW1iTWVudU9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIGlmIChoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVhZGVyX19tZW51LWJ0bi0tY2xvc2VcIikpIHtcclxuICAgICAgaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW1iTWVudU9wZW5CdG5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFtYk1lbnVPcGVuQnRuRWxlbWVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50LS1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICBoYW1ibWVudS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTAwJSlcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYW1iTWVudU9wZW5CdG5FbGVtZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX21lbnUtYnRuLWVsZW1lbnQtLWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICBoYW1ibWVudS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgaGFtYm1lbnUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDApXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUxpbmsubGVuZ3RoOyArK2kpIHtcclxuICAgIG1lbnVMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGhhbWJNZW51T3BlbkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi0tY2xvc2VcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFtYk1lbnVPcGVuQnRuRWxlbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGhhbWJNZW51T3BlbkJ0bkVsZW1lbnRbaV0uY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fbWVudS1idG4tZWxlbWVudC0tY2xvc2VcIik7XHJcbiAgICAgIH1cclxuICAgICAgaGFtYm1lbnUuc3R5bGUub3BhY2l0eSA9IGdldENvbXB1dGVkU3R5bGUoaGFtYm1lbnUpLm9wYWNpdHkgLSAxO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoZGlzcGxheU5vbmUsIDYwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbmhhbWJ1cmdlck1lbnUoKTtcclxuXHJcbi8vINCa0L3QvtC/0LrQsCDQv9GA0L7QutGA0YPRgtC60Lgg0LLQvdC40LcgKNGB0YLRgNC10LvQutCwINCy0L3QuNC3KVxyXG5mdW5jdGlvbiBhcnJvd0Rvd24oKSB7XHJcbiAgY29uc3QgYXJyb3dEb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2Fycm93LWRvd24tbGlua1wiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1iZ1wiKTtcclxuICBhcnJvd0Rvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaGVhZGVyLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICBibG9jazogXCJzdGFydFwiXHJcbiAgICB9KVxyXG4gIH0pO1xyXG59XHJcblxyXG5hcnJvd0Rvd24oKTtcclxuXHJcbi8vIHNjcm9sbC1wYXJhbGxheFxyXG5mdW5jdGlvbiBzY3JvbGxQYXJhbGxheCgpIHtcclxuICBjb25zdCBoZWFkZXJBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXZhdGFyXCIpO1xyXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX3RpdGxlXCIpO1xyXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fdGV4dFwiKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGhlYWRlckF2YXRhci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKDAsIFwiICsgXHJcbiAgICAtKHdpbmRvdy5wYWdlWU9mZnNldCAqIDAuMikgKyBcInB4LCAwKVwiO1xyXG4gICAgaGVhZGVyVGl0bGUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZCgwLCBcIiArIFxyXG4gICAgLSh3aW5kb3cucGFnZVlPZmZzZXQgKiAwLjE1KSArIFwicHgsIDApXCI7XHJcbiAgICBoZWFkZXJUZXh0LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoMCwgXCIgKyBcclxuICAgIC0od2luZG93LnBhZ2VZT2Zmc2V0ICogMC4xKSArIFwicHgsIDApXCI7XHJcbiAgfSk7XHJcbn1cclxuc2Nyb2xsUGFyYWxsYXgoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

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