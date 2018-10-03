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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Раскрывающаяся навигация\n\nfunction hamburgerMenu() {\n\n  var hambMenuOpenBtn = document.querySelector(\".header__menu-btn\");\n  var hambMenuOpenBtnElement = document.querySelectorAll(\".header__menu-btn-element\");\n\n  var hambmenu = document.querySelector(\".hambmenu\");\n  var menuLink = document.querySelectorAll(\".hambmenu__link\");\n\n  function displayNone() {\n    hambmenu.style.display = \"none\";\n  }\n\n  hambMenuOpenBtn.addEventListener(\"click\", function (event) {\n    if (!event.target.classList.contains(\"header__menu-btn--close\")) {\n      hambMenuOpenBtn.classList.add(\"header__menu-btn--close\");\n      for (var i = 0; i < hambMenuOpenBtnElement.length; i++) {\n        hambMenuOpenBtnElement[i].classList.add(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.display = \"block\";\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity + 1;\n      document.body.style.overflow = \"hidden\";\n    } else {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i = 0; _i < hambMenuOpenBtnElement.length; _i++) {\n        hambMenuOpenBtnElement[_i].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    }\n  });\n\n  for (var i = 0; i < menuLink.length; ++i) {\n    menuLink[i].addEventListener(\"click\", function () {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i2 = 0; _i2 < hambMenuOpenBtnElement.length; _i2++) {\n        hambMenuOpenBtnElement[_i2].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    });\n  }\n}\nhamburgerMenu();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImhhbWJ1cmdlck1lbnUiLCJoYW1iTWVudU9wZW5CdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW1iTWVudU9wZW5CdG5FbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImhhbWJtZW51IiwibWVudUxpbmsiLCJkaXNwbGF5Tm9uZSIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwiaSIsImxlbmd0aCIsIm9wYWNpdHkiLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7O0FBQ0EsU0FBU0EsYUFBVCxHQUF5Qjs7QUFFdkIsTUFBTUMsa0JBQWtCQyxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUF4QjtBQUNBLE1BQU1DLHlCQUF5QkYsU0FBU0csZ0JBQVQsQ0FBMEIsMkJBQTFCLENBQS9COztBQUVBLE1BQU1DLFdBQVdKLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBakI7QUFDQSxNQUFNSSxXQUFXTCxTQUFTRyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBakI7O0FBRUEsV0FBU0csV0FBVCxHQUF1QjtBQUNyQkYsYUFBU0csS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0Q7O0FBRURULGtCQUFnQlUsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVVDLEtBQVYsRUFBaUI7QUFDekQsUUFBSSxDQUFDQSxNQUFNQyxNQUFOLENBQWFDLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWdDLHlCQUFoQyxDQUFMLEVBQWlFO0FBQy9EZCxzQkFBZ0JhLFNBQWhCLENBQTBCRSxHQUExQixDQUE4Qix5QkFBOUI7QUFDQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSWIsdUJBQXVCYyxNQUEzQyxFQUFtREQsR0FBbkQsRUFBd0Q7QUFDdERiLCtCQUF1QmEsQ0FBdkIsRUFBMEJILFNBQTFCLENBQW9DRSxHQUFwQyxDQUF3QyxpQ0FBeEM7QUFDRDtBQUNEVixlQUFTRyxLQUFULENBQWVDLE9BQWYsR0FBeUIsT0FBekI7QUFDQUosZUFBU0csS0FBVCxDQUFlVSxPQUFmLEdBQXlCQyxpQkFBaUJkLFFBQWpCLEVBQTJCYSxPQUEzQixHQUFxQyxDQUE5RDtBQUNBakIsZUFBU21CLElBQVQsQ0FBY1osS0FBZCxDQUFvQmEsUUFBcEIsR0FBK0IsUUFBL0I7QUFDRCxLQVJELE1BU0s7QUFDSHJCLHNCQUFnQmEsU0FBaEIsQ0FBMEJTLE1BQTFCLENBQWlDLHlCQUFqQztBQUNBLFdBQUssSUFBSU4sS0FBSSxDQUFiLEVBQWdCQSxLQUFJYix1QkFBdUJjLE1BQTNDLEVBQW1ERCxJQUFuRCxFQUF3RDtBQUN0RGIsK0JBQXVCYSxFQUF2QixFQUEwQkgsU0FBMUIsQ0FBb0NTLE1BQXBDLENBQTJDLGlDQUEzQztBQUNEO0FBQ0RqQixlQUFTRyxLQUFULENBQWVVLE9BQWYsR0FBeUJDLGlCQUFpQmQsUUFBakIsRUFBMkJhLE9BQTNCLEdBQXFDLENBQTlEO0FBQ0FqQixlQUFTbUIsSUFBVCxDQUFjWixLQUFkLENBQW9CYSxRQUFwQixHQUErQixTQUEvQjtBQUNBRSxpQkFBV2hCLFdBQVgsRUFBd0IsR0FBeEI7QUFDRDtBQUNGLEdBbkJEOztBQXFCQSxPQUFLLElBQUlTLElBQUksQ0FBYixFQUFnQkEsSUFBSVYsU0FBU1csTUFBN0IsRUFBcUMsRUFBRUQsQ0FBdkMsRUFBMEM7QUFDeENWLGFBQVNVLENBQVQsRUFBWU4sZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBWTtBQUNoRFYsc0JBQWdCYSxTQUFoQixDQUEwQlMsTUFBMUIsQ0FBaUMseUJBQWpDO0FBQ0EsV0FBSyxJQUFJTixNQUFJLENBQWIsRUFBZ0JBLE1BQUliLHVCQUF1QmMsTUFBM0MsRUFBbURELEtBQW5ELEVBQXdEO0FBQ3REYiwrQkFBdUJhLEdBQXZCLEVBQTBCSCxTQUExQixDQUFvQ1MsTUFBcEMsQ0FBMkMsaUNBQTNDO0FBQ0Q7QUFDRGpCLGVBQVNHLEtBQVQsQ0FBZVUsT0FBZixHQUF5QkMsaUJBQWlCZCxRQUFqQixFQUEyQmEsT0FBM0IsR0FBcUMsQ0FBOUQ7QUFDQWpCLGVBQVNtQixJQUFULENBQWNaLEtBQWQsQ0FBb0JhLFFBQXBCLEdBQStCLFNBQS9CO0FBQ0FFLGlCQUFXaEIsV0FBWCxFQUF3QixHQUF4QjtBQUNELEtBUkQ7QUFTRDtBQUVGO0FBQ0RSIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLyDQoNCw0YHQutGA0YvQstCw0Y7RidCw0Y/RgdGPINC90LDQstC40LPQsNGG0LjRj1xyXG5mdW5jdGlvbiBoYW1idXJnZXJNZW51KCkge1xyXG5cclxuICBjb25zdCBoYW1iTWVudU9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1idG5cIik7XHJcbiAgY29uc3QgaGFtYk1lbnVPcGVuQnRuRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50XCIpO1xyXG5cclxuICBjb25zdCBoYW1ibWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYm1lbnVcIik7XHJcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhhbWJtZW51X19saW5rXCIpO1xyXG5cclxuICBmdW5jdGlvbiBkaXNwbGF5Tm9uZSgpIHtcclxuICAgIGhhbWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIGhhbWJNZW51T3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKSkge1xyXG4gICAgICBoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYW1iTWVudU9wZW5CdG5FbGVtZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX21lbnUtYnRuLWVsZW1lbnQtLWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLm9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGhhbWJtZW51KS5vcGFjaXR5ICsgMTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW1iTWVudU9wZW5CdG5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFtYk1lbnVPcGVuQnRuRWxlbWVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50LS1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBoYW1ibWVudS5zdHlsZS5vcGFjaXR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShoYW1ibWVudSkub3BhY2l0eSAtIDE7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgICAgc2V0VGltZW91dChkaXNwbGF5Tm9uZSwgNjAwKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51TGluay5sZW5ndGg7ICsraSkge1xyXG4gICAgbWVudUxpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW1iTWVudU9wZW5CdG5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFtYk1lbnVPcGVuQnRuRWxlbWVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50LS1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBoYW1ibWVudS5zdHlsZS5vcGFjaXR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShoYW1ibWVudSkub3BhY2l0eSAtIDE7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgICAgc2V0VGltZW91dChkaXNwbGF5Tm9uZSwgNjAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuaGFtYnVyZ2VyTWVudSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ })

/******/ });