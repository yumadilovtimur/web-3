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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/works.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/works.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/works.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Раскрывающаяся навигация\n\nfunction hamburgerMenu() {\n\n  var hambMenuOpenBtn = document.querySelector(\".header__menu-btn\");\n  var hambMenuOpenBtnElement = document.querySelectorAll(\".header__menu-btn-element\");\n\n  var hambmenu = document.querySelector(\".hambmenu\");\n  var menuLink = document.querySelectorAll(\".hambmenu__link\");\n\n  function displayNone() {\n    hambmenu.style.display = \"none\";\n  }\n\n  hambMenuOpenBtn.addEventListener(\"click\", function (event) {\n    if (!event.target.classList.contains(\"header__menu-btn--close\")) {\n      hambMenuOpenBtn.classList.add(\"header__menu-btn--close\");\n      for (var i = 0; i < hambMenuOpenBtnElement.length; i++) {\n        hambMenuOpenBtnElement[i].classList.add(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.display = \"block\";\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity + 1;\n      document.body.style.overflow = \"hidden\";\n    } else {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i = 0; _i < hambMenuOpenBtnElement.length; _i++) {\n        hambMenuOpenBtnElement[_i].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    }\n  });\n\n  for (var i = 0; i < menuLink.length; ++i) {\n    menuLink[i].addEventListener(\"click\", function () {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i2 = 0; _i2 < hambMenuOpenBtnElement.length; _i2++) {\n        hambMenuOpenBtnElement[_i2].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    });\n  }\n}\nhamburgerMenu();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OGMzMSJdLCJuYW1lcyI6WyJoYW1idXJnZXJNZW51IiwiaGFtYk1lbnVPcGVuQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYk1lbnVPcGVuQnRuRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYW1ibWVudSIsIm1lbnVMaW5rIiwiZGlzcGxheU5vbmUiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImkiLCJsZW5ndGgiLCJvcGFjaXR5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUNBLFNBQVNBLGFBQVQsR0FBeUI7O0FBRXZCLE1BQU1DLGtCQUFrQkMsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBeEI7QUFDQSxNQUFNQyx5QkFBeUJGLFNBQVNHLGdCQUFULENBQTBCLDJCQUExQixDQUEvQjs7QUFFQSxNQUFNQyxXQUFXSixTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBQ0EsTUFBTUksV0FBV0wsU0FBU0csZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWpCOztBQUVBLFdBQVNHLFdBQVQsR0FBdUI7QUFDckJGLGFBQVNHLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUNEOztBQUVEVCxrQkFBZ0JVLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3pELFFBQUksQ0FBQ0EsTUFBTUMsTUFBTixDQUFhQyxTQUFiLENBQXVCQyxRQUF2QixDQUFnQyx5QkFBaEMsQ0FBTCxFQUFpRTtBQUMvRGQsc0JBQWdCYSxTQUFoQixDQUEwQkUsR0FBMUIsQ0FBOEIseUJBQTlCO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUliLHVCQUF1QmMsTUFBM0MsRUFBbURELEdBQW5ELEVBQXdEO0FBQ3REYiwrQkFBdUJhLENBQXZCLEVBQTBCSCxTQUExQixDQUFvQ0UsR0FBcEMsQ0FBd0MsaUNBQXhDO0FBQ0Q7QUFDRFYsZUFBU0csS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE9BQXpCO0FBQ0FKLGVBQVNHLEtBQVQsQ0FBZVUsT0FBZixHQUF5QkMsaUJBQWlCZCxRQUFqQixFQUEyQmEsT0FBM0IsR0FBcUMsQ0FBOUQ7QUFDQWpCLGVBQVNtQixJQUFULENBQWNaLEtBQWQsQ0FBb0JhLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0QsS0FSRCxNQVNLO0FBQ0hyQixzQkFBZ0JhLFNBQWhCLENBQTBCUyxNQUExQixDQUFpQyx5QkFBakM7QUFDQSxXQUFLLElBQUlOLEtBQUksQ0FBYixFQUFnQkEsS0FBSWIsdUJBQXVCYyxNQUEzQyxFQUFtREQsSUFBbkQsRUFBd0Q7QUFDdERiLCtCQUF1QmEsRUFBdkIsRUFBMEJILFNBQTFCLENBQW9DUyxNQUFwQyxDQUEyQyxpQ0FBM0M7QUFDRDtBQUNEakIsZUFBU0csS0FBVCxDQUFlVSxPQUFmLEdBQXlCQyxpQkFBaUJkLFFBQWpCLEVBQTJCYSxPQUEzQixHQUFxQyxDQUE5RDtBQUNBakIsZUFBU21CLElBQVQsQ0FBY1osS0FBZCxDQUFvQmEsUUFBcEIsR0FBK0IsU0FBL0I7QUFDQUUsaUJBQVdoQixXQUFYLEVBQXdCLEdBQXhCO0FBQ0Q7QUFDRixHQW5CRDs7QUFxQkEsT0FBSyxJQUFJUyxJQUFJLENBQWIsRUFBZ0JBLElBQUlWLFNBQVNXLE1BQTdCLEVBQXFDLEVBQUVELENBQXZDLEVBQTBDO0FBQ3hDVixhQUFTVSxDQUFULEVBQVlOLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQVk7QUFDaERWLHNCQUFnQmEsU0FBaEIsQ0FBMEJTLE1BQTFCLENBQWlDLHlCQUFqQztBQUNBLFdBQUssSUFBSU4sTUFBSSxDQUFiLEVBQWdCQSxNQUFJYix1QkFBdUJjLE1BQTNDLEVBQW1ERCxLQUFuRCxFQUF3RDtBQUN0RGIsK0JBQXVCYSxHQUF2QixFQUEwQkgsU0FBMUIsQ0FBb0NTLE1BQXBDLENBQTJDLGlDQUEzQztBQUNEO0FBQ0RqQixlQUFTRyxLQUFULENBQWVVLE9BQWYsR0FBeUJDLGlCQUFpQmQsUUFBakIsRUFBMkJhLE9BQTNCLEdBQXFDLENBQTlEO0FBQ0FqQixlQUFTbUIsSUFBVCxDQUFjWixLQUFkLENBQW9CYSxRQUFwQixHQUErQixTQUEvQjtBQUNBRSxpQkFBV2hCLFdBQVgsRUFBd0IsR0FBeEI7QUFDRCxLQVJEO0FBU0Q7QUFFRjtBQUNEUiIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy93b3Jrcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vINCg0LDRgdC60YDRi9Cy0LDRjtGJ0LDRj9GB0Y8g0L3QsNCy0LjQs9Cw0YbQuNGPXHJcbmZ1bmN0aW9uIGhhbWJ1cmdlck1lbnUoKSB7XHJcblxyXG4gIGNvbnN0IGhhbWJNZW51T3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LWJ0blwiKTtcclxuICBjb25zdCBoYW1iTWVudU9wZW5CdG5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX21lbnUtYnRuLWVsZW1lbnRcIik7XHJcblxyXG4gIGNvbnN0IGhhbWJtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1ibWVudVwiKTtcclxuICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGFtYm1lbnVfX2xpbmtcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlOb25lKCkge1xyXG4gICAgaGFtYm1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuXHJcbiAgaGFtYk1lbnVPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpKSB7XHJcbiAgICAgIGhhbWJNZW51T3BlbkJ0bi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX19tZW51LWJ0bi0tY2xvc2VcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFtYk1lbnVPcGVuQnRuRWxlbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGhhbWJNZW51T3BlbkJ0bkVsZW1lbnRbaV0uY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fbWVudS1idG4tZWxlbWVudC0tY2xvc2VcIik7XHJcbiAgICAgIH1cclxuICAgICAgaGFtYm1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgaGFtYm1lbnUuc3R5bGUub3BhY2l0eSA9IGdldENvbXB1dGVkU3R5bGUoaGFtYm1lbnUpLm9wYWNpdHkgKyAxO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYW1iTWVudU9wZW5CdG5FbGVtZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLWVsZW1lbnQtLWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLm9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGhhbWJtZW51KS5vcGFjaXR5IC0gMTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xyXG4gICAgICBzZXRUaW1lb3V0KGRpc3BsYXlOb25lLCA2MDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVMaW5rLmxlbmd0aDsgKytpKSB7XHJcbiAgICBtZW51TGlua1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYW1iTWVudU9wZW5CdG5FbGVtZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLWVsZW1lbnQtLWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLm9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGhhbWJtZW51KS5vcGFjaXR5IC0gMTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xyXG4gICAgICBzZXRUaW1lb3V0KGRpc3BsYXlOb25lLCA2MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5oYW1idXJnZXJNZW51KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/works.js\n");

/***/ })

/******/ });