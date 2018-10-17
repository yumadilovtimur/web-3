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
eval("\n\n// Раскрывающаяся навигация\n\nfunction hamburgerMenu() {\n\n  var hambMenuOpenBtn = document.querySelector(\".header__menu-btn\");\n  var hambMenuOpenBtnElement = document.querySelectorAll(\".header__menu-btn-element\");\n\n  var hambmenu = document.querySelector(\".hambmenu\");\n  var menuLink = document.querySelectorAll(\".hambmenu__link\");\n\n  var menuAside = document.querySelector(\".blog-content__menu\");\n\n  hambMenuOpenBtn.addEventListener(\"click\", function (event) {\n\n    if (hambMenuOpenBtn.classList.contains(\"header__menu-btn--close\")) {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var i = 0; i < hambMenuOpenBtnElement.length; i++) {\n        hambMenuOpenBtnElement[i].classList.remove(\"header__menu-btn-element--close\");\n      }\n      document.body.style.overflow = \"visible\";\n      hambmenu.style.opacity = 0;\n      hambmenu.style.transform = \"translateX(100%)\";\n    } else {\n      hambMenuOpenBtn.classList.add(\"header__menu-btn--close\");\n      for (var _i = 0; _i < hambMenuOpenBtnElement.length; _i++) {\n        hambMenuOpenBtnElement[_i].classList.add(\"header__menu-btn-element--close\");\n      }\n      document.body.style.overflow = \"hidden\";\n      hambmenu.style.opacity = 1;\n      hambmenu.style.transform = \"translateX(0)\";\n    }\n  });\n\n  for (var i = 0; i < menuLink.length; ++i) {\n    menuLink[i].addEventListener(\"click\", function () {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i2 = 0; _i2 < hambMenuOpenBtnElement.length; _i2++) {\n        hambMenuOpenBtnElement[_i2].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    });\n  }\n}\nhamburgerMenu();\n\n// Кнопка прокрутки вниз (стрелка вниз)\nfunction arrowDown() {\n  var arrowDownButton = document.querySelector(\".header__arrow-down-link\");\n  var header = document.querySelector(\".header-bg\");\n  arrowDownButton.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    header.nextElementSibling.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  });\n}\n\narrowDown();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OGMzMSJdLCJuYW1lcyI6WyJoYW1idXJnZXJNZW51IiwiaGFtYk1lbnVPcGVuQnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYk1lbnVPcGVuQnRuRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYW1ibWVudSIsIm1lbnVMaW5rIiwibWVudUFzaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpIiwibGVuZ3RoIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiYWRkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNldFRpbWVvdXQiLCJkaXNwbGF5Tm9uZSIsImFycm93RG93biIsImFycm93RG93bkJ1dHRvbiIsImhlYWRlciIsInByZXZlbnREZWZhdWx0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjs7QUFDQSxTQUFTQSxhQUFULEdBQXlCOztBQUV2QixNQUFNQyxrQkFBa0JDLFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXhCO0FBQ0EsTUFBTUMseUJBQXlCRixTQUFTRyxnQkFBVCxDQUEwQiwyQkFBMUIsQ0FBL0I7O0FBRUEsTUFBTUMsV0FBV0osU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUFqQjtBQUNBLE1BQU1JLFdBQVdMLFNBQVNHLGdCQUFULENBQTBCLGlCQUExQixDQUFqQjs7QUFFQSxNQUFNRyxZQUFZTixTQUFTQyxhQUFULENBQXVCLHFCQUF2QixDQUFsQjs7QUFFQUYsa0JBQWdCUSxnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBVUMsS0FBVixFQUFpQjs7QUFFekQsUUFBSVQsZ0JBQWdCVSxTQUFoQixDQUEwQkMsUUFBMUIsQ0FBbUMseUJBQW5DLENBQUosRUFBbUU7QUFDakVYLHNCQUFnQlUsU0FBaEIsQ0FBMEJFLE1BQTFCLENBQWlDLHlCQUFqQztBQUNBLFdBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVix1QkFBdUJXLE1BQTNDLEVBQW1ERCxHQUFuRCxFQUF3RDtBQUN0RFYsK0JBQXVCVSxDQUF2QixFQUEwQkgsU0FBMUIsQ0FBb0NFLE1BQXBDLENBQTJDLGlDQUEzQztBQUNEO0FBQ0RYLGVBQVNjLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsU0FBL0I7QUFDQVosZUFBU1csS0FBVCxDQUFlRSxPQUFmLEdBQXlCLENBQXpCO0FBQ0FiLGVBQVNXLEtBQVQsQ0FBZUcsU0FBZixHQUEyQixrQkFBM0I7QUFDRCxLQVJELE1BU0s7QUFDSG5CLHNCQUFnQlUsU0FBaEIsQ0FBMEJVLEdBQTFCLENBQThCLHlCQUE5QjtBQUNBLFdBQUssSUFBSVAsS0FBSSxDQUFiLEVBQWdCQSxLQUFJVix1QkFBdUJXLE1BQTNDLEVBQW1ERCxJQUFuRCxFQUF3RDtBQUN0RFYsK0JBQXVCVSxFQUF2QixFQUEwQkgsU0FBMUIsQ0FBb0NVLEdBQXBDLENBQXdDLGlDQUF4QztBQUNEO0FBQ0RuQixlQUFTYyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0FaLGVBQVNXLEtBQVQsQ0FBZUUsT0FBZixHQUF5QixDQUF6QjtBQUNBYixlQUFTVyxLQUFULENBQWVHLFNBQWYsR0FBMkIsZUFBM0I7QUFDRDtBQUNGLEdBcEJEOztBQXNCQSxPQUFLLElBQUlOLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsU0FBU1EsTUFBN0IsRUFBcUMsRUFBRUQsQ0FBdkMsRUFBMEM7QUFDeENQLGFBQVNPLENBQVQsRUFBWUwsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBWTtBQUNoRFIsc0JBQWdCVSxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMseUJBQWpDO0FBQ0EsV0FBSyxJQUFJQyxNQUFJLENBQWIsRUFBZ0JBLE1BQUlWLHVCQUF1QlcsTUFBM0MsRUFBbURELEtBQW5ELEVBQXdEO0FBQ3REViwrQkFBdUJVLEdBQXZCLEVBQTBCSCxTQUExQixDQUFvQ0UsTUFBcEMsQ0FBMkMsaUNBQTNDO0FBQ0Q7QUFDRFAsZUFBU1csS0FBVCxDQUFlRSxPQUFmLEdBQXlCRyxpQkFBaUJoQixRQUFqQixFQUEyQmEsT0FBM0IsR0FBcUMsQ0FBOUQ7QUFDQWpCLGVBQVNjLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsU0FBL0I7QUFDQUssaUJBQVdDLFdBQVgsRUFBd0IsR0FBeEI7QUFDRCxLQVJEO0FBU0Q7QUFFRjtBQUNEeEI7O0FBRUE7QUFDQSxTQUFTeUIsU0FBVCxHQUFxQjtBQUNuQixNQUFNQyxrQkFBa0J4QixTQUFTQyxhQUFULENBQXVCLDBCQUF2QixDQUF4QjtBQUNBLE1BQU13QixTQUFTekIsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFmO0FBQ0F1QixrQkFBZ0JqQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBU0MsS0FBVCxFQUFnQjtBQUN4REEsVUFBTWtCLGNBQU47QUFDQUQsV0FBT0Usa0JBQVAsQ0FBMEJDLGNBQTFCLENBQXlDO0FBQ3ZDQyxnQkFBVSxRQUQ2QjtBQUV2Q0MsYUFBTztBQUZnQyxLQUF6QztBQUlELEdBTkQ7QUFPRDs7QUFFRFAiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vLyDQoNCw0YHQutGA0YvQstCw0Y7RidCw0Y/RgdGPINC90LDQstC40LPQsNGG0LjRj1xyXG5mdW5jdGlvbiBoYW1idXJnZXJNZW51KCkge1xyXG5cclxuICBjb25zdCBoYW1iTWVudU9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1idG5cIik7XHJcbiAgY29uc3QgaGFtYk1lbnVPcGVuQnRuRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50XCIpO1xyXG5cclxuICBjb25zdCBoYW1ibWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYm1lbnVcIik7XHJcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhhbWJtZW51X19saW5rXCIpO1xyXG5cclxuICBjb25zdCBtZW51QXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctY29udGVudF9fbWVudVwiKVxyXG5cclxuICBoYW1iTWVudU9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIGlmIChoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVhZGVyX19tZW51LWJ0bi0tY2xvc2VcIikpIHtcclxuICAgICAgaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW1iTWVudU9wZW5CdG5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFtYk1lbnVPcGVuQnRuRWxlbWVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50LS1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICBoYW1ibWVudS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTAwJSlcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LmFkZChcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYW1iTWVudU9wZW5CdG5FbGVtZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX21lbnUtYnRuLWVsZW1lbnQtLWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICBoYW1ibWVudS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgaGFtYm1lbnUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDApXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUxpbmsubGVuZ3RoOyArK2kpIHtcclxuICAgIG1lbnVMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGhhbWJNZW51T3BlbkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi0tY2xvc2VcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFtYk1lbnVPcGVuQnRuRWxlbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGhhbWJNZW51T3BlbkJ0bkVsZW1lbnRbaV0uY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fbWVudS1idG4tZWxlbWVudC0tY2xvc2VcIik7XHJcbiAgICAgIH1cclxuICAgICAgaGFtYm1lbnUuc3R5bGUub3BhY2l0eSA9IGdldENvbXB1dGVkU3R5bGUoaGFtYm1lbnUpLm9wYWNpdHkgLSAxO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoZGlzcGxheU5vbmUsIDYwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbmhhbWJ1cmdlck1lbnUoKTtcclxuXHJcbi8vINCa0L3QvtC/0LrQsCDQv9GA0L7QutGA0YPRgtC60Lgg0LLQvdC40LcgKNGB0YLRgNC10LvQutCwINCy0L3QuNC3KVxyXG5mdW5jdGlvbiBhcnJvd0Rvd24oKSB7XHJcbiAgY29uc3QgYXJyb3dEb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2Fycm93LWRvd24tbGlua1wiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1iZ1wiKTtcclxuICBhcnJvd0Rvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaGVhZGVyLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICBibG9jazogXCJzdGFydFwiXHJcbiAgICB9KVxyXG4gIH0pO1xyXG59XHJcblxyXG5hcnJvd0Rvd24oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/works.js\n");

/***/ })

/******/ });