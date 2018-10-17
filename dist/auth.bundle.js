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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// bg video\n\nvar videoElement = document.getElementById('bg-video');\n\nvar windowWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);\n\nif (windowWidth <= 768) {\n  videoElement.setAttribute(\"controls\", \"controls\");\n  videoElement.play();\n  videoElement.addEventListener(\"canplaythrough\", function (event) {});\n}\n\n// 3D card\nfunction card3D() {\n  var btnOpen = document.querySelector(\".intro__btn-autorization\");\n  var frontCard = document.querySelector(\".about__front\");\n  var backCard = document.querySelector(\".about__back\");\n  var btnOnIndex = document.querySelector(\".about__link-on-intro\");\n\n  btnOpen.addEventListener(\"click\", function (event) {\n    frontCard.classList.toggle(\"about__front--rotate\");\n    backCard.classList.toggle(\"about__back--rotate\");\n    if (frontCard.classList.contains(\"about__front--rotate\") && backCard.classList.contains(\"about__back--rotate\")) {\n      event.target.textContent = \"На главную\";\n    } else {\n      event.target.textContent = \"Авторизоваться\";\n    }\n  });\n\n  btnOnIndex.addEventListener(\"click\", function (event) {\n    btnOpen.textContent = \"Авторизоваться\";\n    frontCard.classList.remove(\"about__front--rotate\");\n    backCard.classList.remove(\"about__back--rotate\");\n  });\n}\ncard3D();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbInZpZGVvRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3dXaWR0aCIsIk1hdGgiLCJtYXgiLCJib2R5Iiwic2Nyb2xsV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0QXR0cmlidXRlIiwicGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNhcmQzRCIsImJ0bk9wZW4iLCJxdWVyeVNlbGVjdG9yIiwiZnJvbnRDYXJkIiwiYmFja0NhcmQiLCJidG5PbkluZGV4IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7O0FBQ0EsSUFBSUEsZUFBZUMsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFuQjs7QUFFQSxJQUFJQyxjQUFjQyxLQUFLQyxHQUFMLENBQ2hCSixTQUFTSyxJQUFULENBQWNDLFdBREUsRUFDV04sU0FBU08sZUFBVCxDQUF5QkQsV0FEcEMsRUFDaUROLFNBQVNLLElBQVQsQ0FBY0csV0FEL0QsRUFDNEVSLFNBQVNPLGVBQVQsQ0FBeUJDLFdBRHJHLEVBQ2tIUixTQUFTSyxJQUFULENBQWNJLFdBRGhJLEVBQzZJVCxTQUFTTyxlQUFULENBQXlCRSxXQUR0SyxDQUFsQjs7QUFJQSxJQUFJUCxlQUFlLEdBQW5CLEVBQXdCO0FBQ3RCSCxlQUFhVyxZQUFiLENBQTBCLFVBQTFCLEVBQXNDLFVBQXRDO0FBQ0FYLGVBQWFZLElBQWI7QUFDQVosZUFBYWEsZ0JBQWIsQ0FBOEIsZ0JBQTlCLEVBQWdELFVBQVNDLEtBQVQsRUFBZ0IsQ0FFL0QsQ0FGRDtBQUdEOztBQUdEO0FBQ0EsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixNQUFNQyxVQUFVZixTQUFTZ0IsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBaEI7QUFDQSxNQUFNQyxZQUFZakIsU0FBU2dCLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQSxNQUFNRSxXQUFXbEIsU0FBU2dCLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQSxNQUFNRyxhQUFhbkIsU0FBU2dCLGFBQVQsQ0FBdUIsdUJBQXZCLENBQW5COztBQUVBRCxVQUFRSCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxLQUFULEVBQWdCO0FBQ2hESSxjQUFVRyxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixzQkFBM0I7QUFDQUgsYUFBU0UsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIscUJBQTFCO0FBQ0EsUUFBSUosVUFBVUcsU0FBVixDQUFvQkUsUUFBcEIsQ0FBNkIsc0JBQTdCLEtBQXdESixTQUFTRSxTQUFULENBQW1CRSxRQUFuQixDQUE0QixxQkFBNUIsQ0FBNUQsRUFBZ0g7QUFDOUdULFlBQU1VLE1BQU4sQ0FBYUMsV0FBYixHQUEyQixZQUEzQjtBQUNELEtBRkQsTUFFTztBQUNMWCxZQUFNVSxNQUFOLENBQWFDLFdBQWIsR0FBMkIsZ0JBQTNCO0FBQ0Q7QUFDRixHQVJEOztBQVVBTCxhQUFXUCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFTQyxLQUFULEVBQWdCO0FBQ25ERSxZQUFRUyxXQUFSLEdBQXNCLGdCQUF0QjtBQUNBUCxjQUFVRyxTQUFWLENBQW9CSyxNQUFwQixDQUEyQixzQkFBM0I7QUFDQVAsYUFBU0UsU0FBVCxDQUFtQkssTUFBbkIsQ0FBMEIscUJBQTFCO0FBQ0QsR0FKRDtBQUtEO0FBQ0RYIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIGJnIHZpZGVvXHJcbnZhciB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctdmlkZW8nKTtcclxuXHJcbnZhciB3aW5kb3dXaWR0aCA9IE1hdGgubWF4KFxyXG4gIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCwgZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuKTtcclxuXHJcbmlmICh3aW5kb3dXaWR0aCA8PSA3NjgpIHtcclxuICB2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJjb250cm9sc1wiKTtcclxuICB2aWRlb0VsZW1lbnQucGxheSgpO1xyXG4gIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheXRocm91Z2hcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyAzRCBjYXJkXHJcbmZ1bmN0aW9uIGNhcmQzRCgpIHtcclxuICBjb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb19fYnRuLWF1dG9yaXphdGlvblwiKTtcclxuICBjb25zdCBmcm9udENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19mcm9udFwiKTtcclxuICBjb25zdCBiYWNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRfX2JhY2tcIik7XHJcbiAgY29uc3QgYnRuT25JbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRfX2xpbmstb24taW50cm9cIik7XHJcblxyXG4gIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBmcm9udENhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImFib3V0X19mcm9udC0tcm90YXRlXCIpO1xyXG4gICAgYmFja0NhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImFib3V0X19iYWNrLS1yb3RhdGVcIik7XHJcbiAgICBpZiAoZnJvbnRDYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImFib3V0X19mcm9udC0tcm90YXRlXCIpICYmIGJhY2tDYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImFib3V0X19iYWNrLS1yb3RhdGVcIikpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gXCLQndCwINCz0LvQsNCy0L3Rg9GOXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBcItCQ0LLRgtC+0YDQuNC30L7QstCw0YLRjNGB0Y9cIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYnRuT25JbmRleC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGJ0bk9wZW4udGV4dENvbnRlbnQgPSBcItCQ0LLRgtC+0YDQuNC30L7QstCw0YLRjNGB0Y9cIjtcclxuICAgIGZyb250Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWJvdXRfX2Zyb250LS1yb3RhdGVcIik7XHJcbiAgICBiYWNrQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWJvdXRfX2JhY2stLXJvdGF0ZVwiKTtcclxuICB9KTtcclxufVxyXG5jYXJkM0QoKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });