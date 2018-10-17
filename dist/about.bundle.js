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
eval("\n\n__webpack_require__(/*! ./modules/example */ \"./src/assets/scripts/modules/example.js\");\n\nfunction yaMap() {\n  ymaps.ready(init);\n\n  var yandexMap = document.querySelector(\"#map\");\n\n  var placemarks = [{\n    latitude: 54.765343,\n    longitude: 56.052926,\n    hintContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3',\n    balloonContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3'\n  }];\n\n  function init() {\n    var map = new ymaps.Map(yandexMap, {\n      center: [54.765343, 56.052926],\n      zoom: 17,\n      controls: [\"zoomControl\"],\n      behaviors: [\"drag\"]\n    });\n\n    placemarks.forEach(function (obj) {\n      var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {\n        hintContent: obj.hintContent,\n        balloonContent: obj.balloonContent\n      }, {\n        iconLayout: 'default#image',\n        iconImageHref: './assets/images/map-marker.png',\n        iconImageSize: [44, 60],\n        iconImageOffset: [-22, -60]\n      });\n\n      map.geoObjects.add(placemark);\n    });\n  }\n}\n\nyaMap();\n\n// Раскрывающаяся навигация\nfunction hamburgerMenu() {\n\n  var hambMenuOpenBtn = document.querySelector(\".header__menu-btn\");\n  var hambMenuOpenBtnElement = document.querySelectorAll(\".header__menu-btn-element\");\n\n  var hambmenu = document.querySelector(\".hambmenu\");\n  var menuLink = document.querySelectorAll(\".hambmenu__link\");\n\n  var menuAside = document.querySelector(\".blog-content__menu\");\n\n  hambMenuOpenBtn.addEventListener(\"click\", function (event) {\n\n    if (hambMenuOpenBtn.classList.contains(\"header__menu-btn--close\")) {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var i = 0; i < hambMenuOpenBtnElement.length; i++) {\n        hambMenuOpenBtnElement[i].classList.remove(\"header__menu-btn-element--close\");\n      }\n      document.body.style.overflow = \"visible\";\n      hambmenu.style.opacity = 0;\n      hambmenu.style.transform = \"translateX(100%)\";\n    } else {\n      hambMenuOpenBtn.classList.add(\"header__menu-btn--close\");\n      for (var _i = 0; _i < hambMenuOpenBtnElement.length; _i++) {\n        hambMenuOpenBtnElement[_i].classList.add(\"header__menu-btn-element--close\");\n      }\n      document.body.style.overflow = \"hidden\";\n      hambmenu.style.opacity = 1;\n      hambmenu.style.transform = \"translateX(0)\";\n    }\n  });\n\n  for (var i = 0; i < menuLink.length; ++i) {\n    menuLink[i].addEventListener(\"click\", function () {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i2 = 0; _i2 < hambMenuOpenBtnElement.length; _i2++) {\n        hambMenuOpenBtnElement[_i2].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    });\n  }\n}\nhamburgerMenu();\n\n// Кнопка прокрутки вниз (стрелка вниз)\nfunction arrowDown() {\n  var arrowDownButton = document.querySelector(\".header__arrow-down-link\");\n  var header = document.querySelector(\".header-bg\");\n  arrowDownButton.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    header.nextElementSibling.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  });\n}\n\narrowDown();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJ5YU1hcCIsInltYXBzIiwicmVhZHkiLCJpbml0IiwieWFuZGV4TWFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxhY2VtYXJrcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaGludENvbnRlbnQiLCJiYWxsb29uQ29udGVudCIsIm1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsImJlaGF2aW9ycyIsImZvckVhY2giLCJvYmoiLCJwbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJpY29uTGF5b3V0IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiYWRkIiwiaGFtYnVyZ2VyTWVudSIsImhhbWJNZW51T3BlbkJ0biIsImhhbWJNZW51T3BlbkJ0bkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFtYm1lbnUiLCJtZW51TGluayIsIm1lbnVBc2lkZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiaSIsImxlbmd0aCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93Iiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImdldENvbXB1dGVkU3R5bGUiLCJzZXRUaW1lb3V0IiwiZGlzcGxheU5vbmUiLCJhcnJvd0Rvd24iLCJhcnJvd0Rvd25CdXR0b24iLCJoZWFkZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRFbGVtZW50U2libGluZyIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNmQyxRQUFNQyxLQUFOLENBQVlDLElBQVo7O0FBRUEsTUFBTUMsWUFBWUMsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixD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LENBQWIsRUFBZ0JBLElBQUlQLFNBQVNRLE1BQTdCLEVBQXFDLEVBQUVELENBQXZDLEVBQTBDO0FBQ3hDUCxhQUFTTyxDQUFULEVBQVlMLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQVk7QUFDaEROLHNCQUFnQlEsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLHlCQUFqQztBQUNBLFdBQUssSUFBSUMsTUFBSSxDQUFiLEVBQWdCQSxNQUFJVix1QkFBdUJXLE1BQTNDLEVBQW1ERCxLQUFuRCxFQUF3RDtBQUN0RFYsK0JBQXVCVSxHQUF2QixFQUEwQkgsU0FBMUIsQ0FBb0NFLE1BQXBDLENBQTJDLGlDQUEzQztBQUNEO0FBQ0RQLGVBQVNXLEtBQVQsQ0FBZUUsT0FBZixHQUF5QkUsaUJBQWlCZixRQUFqQixFQUEyQmEsT0FBM0IsR0FBcUMsQ0FBOUQ7QUFDQXhDLGVBQVNxQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFNBQS9CO0FBQ0FJLGlCQUFXQyxXQUFYLEVBQXdCLEdBQXhCO0FBQ0QsS0FSRDtBQVNEO0FBRUY7QUFDRHJCOztBQUVBO0FBQ0EsU0FBU3NCLFNBQVQsR0FBcUI7QUFDbkIsTUFBTUMsa0JBQWtCOUMsU0FBU0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBeEI7QUFDQSxNQUFNOEMsU0FBUy9DLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBNkMsa0JBQWdCaEIsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDeERBLFVBQU1pQixjQUFOO0FBQ0FELFdBQU9FLGtCQUFQLENBQTBCQyxjQUExQixDQUF5QztBQUN2Q0MsZ0JBQVUsUUFENkI7QUFFdkNDLGFBQU87QUFGZ0MsS0FBekM7QUFJRCxHQU5EO0FBT0Q7O0FBRURQIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFwiLi9tb2R1bGVzL2V4YW1wbGVcIjtcclxuXHJcbmZ1bmN0aW9uIHlhTWFwKCkge1xyXG4gIHltYXBzLnJlYWR5KGluaXQpO1xyXG4gIFxyXG4gIGNvbnN0IHlhbmRleE1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFwXCIpO1xyXG4gIFxyXG4gIGNvbnN0IHBsYWNlbWFya3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhdGl0dWRlOiA1NC43NjUzNDMsXHJcbiAgICAgIGxvbmdpdHVkZTogNTYuMDUyOTI2LFxyXG4gICAgICBoaW50Q29udGVudDogJ9GA0LXRgdC/LiDQkdCw0YjQutC+0YDRgtC+0YHRgtCw0L0sINCzLiDQo9GE0LAsINGD0LsuINCu0YDQuNGPINCT0LDQs9Cw0YDQuNC90LAsINC0LiAzJyxcclxuICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfRgNC10YHQvy4g0JHQsNGI0LrQvtGA0YLQvtGB0YLQsNC9LCDQsy4g0KPRhNCwLCDRg9C7LiDQrtGA0LjRjyDQk9Cw0LPQsNGA0LjQvdCwLCDQtC4gMydcclxuICAgIH1cclxuICBdXHJcbiAgXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIHZhciBtYXAgPSBuZXcgeW1hcHMuTWFwKHlhbmRleE1hcCwge1xyXG4gICAgICBjZW50ZXI6IFs1NC43NjUzNDMsIDU2LjA1MjkyNl0sXHJcbiAgICAgIHpvb206IDE3LFxyXG4gICAgICBjb250cm9sczogW1wiem9vbUNvbnRyb2xcIl0sXHJcbiAgICAgIGJlaGF2aW9yczogW1wiZHJhZ1wiXVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBwbGFjZW1hcmtzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgIHZhciBwbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFtvYmoubGF0aXR1ZGUsIG9iai5sb25naXR1ZGVdLCB7XHJcbiAgICAgICAgaGludENvbnRlbnQ6IG9iai5oaW50Q29udGVudCxcclxuICAgICAgICBiYWxsb29uQ29udGVudDogb2JqLmJhbGxvb25Db250ZW50XHJcbiAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgICAgICAgaWNvbkltYWdlSHJlZjogJy4vYXNzZXRzL2ltYWdlcy9tYXAtbWFya2VyLnBuZycsXHJcbiAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbNDQsIDYwXSxcclxuICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0yMiwgLTYwXVxyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIG1hcC5nZW9PYmplY3RzLmFkZChwbGFjZW1hcmspO1xyXG4gICAgfSk7ICBcclxuICB9XHJcbiAgfVxyXG5cclxuICB5YU1hcCgpO1xyXG5cclxuXHJcbi8vINCg0LDRgdC60YDRi9Cy0LDRjtGJ0LDRj9GB0Y8g0L3QsNCy0LjQs9Cw0YbQuNGPXHJcbmZ1bmN0aW9uIGhhbWJ1cmdlck1lbnUoKSB7XHJcblxyXG4gIGNvbnN0IGhhbWJNZW51T3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJ0blwiKTtcclxuICBjb25zdCBoYW1iTWVudU9wZW5CdG5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX21lbnUtYnRuLWVsZW1lbnRcIik7XHJcblxyXG4gIGNvbnN0IGhhbWJtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1ibWVudVwiKTtcclxuICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGFtYm1lbnVfX2xpbmtcIik7XHJcblxyXG4gIGNvbnN0IG1lbnVBc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZy1jb250ZW50X19tZW51XCIpXHJcblxyXG4gIGhhbWJNZW51T3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgaWYgKGhhbWJNZW51T3BlbkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKSkge1xyXG4gICAgICBoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYW1iTWVudU9wZW5CdG5FbGVtZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLWVsZW1lbnQtLWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgICAgaGFtYm1lbnUuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxMDAlKVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGhhbWJNZW51T3BlbkJ0bi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX19tZW51LWJ0bi0tY2xvc2VcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFtYk1lbnVPcGVuQnRuRWxlbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGhhbWJNZW51T3BlbkJ0bkVsZW1lbnRbaV0uY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fbWVudS1idG4tZWxlbWVudC0tY2xvc2VcIik7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICBoYW1ibWVudS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51TGluay5sZW5ndGg7ICsraSkge1xyXG4gICAgbWVudUxpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW1iTWVudU9wZW5CdG5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFtYk1lbnVPcGVuQnRuRWxlbWVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50LS1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBoYW1ibWVudS5zdHlsZS5vcGFjaXR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShoYW1ibWVudSkub3BhY2l0eSAtIDE7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgICAgc2V0VGltZW91dChkaXNwbGF5Tm9uZSwgNjAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuaGFtYnVyZ2VyTWVudSgpO1xyXG5cclxuLy8g0JrQvdC+0L/QutCwINC/0YDQvtC60YDRg9GC0LrQuCDQstC90LjQtyAo0YHRgtGA0LXQu9C60LAg0LLQvdC40LcpXHJcbmZ1bmN0aW9uIGFycm93RG93bigpIHtcclxuICBjb25zdCBhcnJvd0Rvd25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYXJyb3ctZG93bi1saW5rXCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWJnXCIpO1xyXG4gIGFycm93RG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgIGJsb2NrOiBcInN0YXJ0XCJcclxuICAgIH0pXHJcbiAgfSk7XHJcbn1cclxuXHJcbmFycm93RG93bigpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

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