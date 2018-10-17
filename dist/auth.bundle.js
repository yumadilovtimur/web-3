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
eval("\n\n// bg video\n\nfunction bgVideo() {\n  var videoElement = document.getElementById('bg-video');\n\n  var windowWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);\n\n  window.addEventListener(\"load\", function (event) {\n    if (windowWidth <= 768) {\n      videoElement.setAttribute(\"controls\", \"controls\");\n      videoElement.setAttribute(\"muted\", \"muted\");\n      videoElement.controls = true;\n      videoElement.loop = true;\n      videoElement.muted = true;\n      videoElement.preload = \"auto\";\n      videoElement.play();\n    }\n  });\n}\n\nbgVideo();\n\n// 3D card\nfunction card3D() {\n  var btnOpen = document.querySelector(\".intro__btn-autorization\");\n  var frontCard = document.querySelector(\".about__front\");\n  var backCard = document.querySelector(\".about__back\");\n  var btnOnIndex = document.querySelector(\".about__link-on-intro\");\n\n  btnOpen.addEventListener(\"click\", function (event) {\n    frontCard.classList.toggle(\"about__front--rotate\");\n    backCard.classList.toggle(\"about__back--rotate\");\n    if (frontCard.classList.contains(\"about__front--rotate\") && backCard.classList.contains(\"about__back--rotate\")) {\n      event.target.textContent = \"На главную\";\n    } else {\n      event.target.textContent = \"Авторизоваться\";\n    }\n  });\n\n  btnOnIndex.addEventListener(\"click\", function (event) {\n    btnOpen.textContent = \"Авторизоваться\";\n    frontCard.classList.remove(\"about__front--rotate\");\n    backCard.classList.remove(\"about__back--rotate\");\n  });\n}\ncard3D();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImJnVmlkZW8iLCJ2aWRlb0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93V2lkdGgiLCJNYXRoIiwibWF4IiwiYm9keSIsInNjcm9sbFdpZHRoIiwiZG9jdW1lbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldEF0dHJpYnV0ZSIsImNvbnRyb2xzIiwibG9vcCIsIm11dGVkIiwicHJlbG9hZCIsInBsYXkiLCJjYXJkM0QiLCJidG5PcGVuIiwicXVlcnlTZWxlY3RvciIsImZyb250Q2FyZCIsImJhY2tDYXJkIiwiYnRuT25JbmRleCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUNBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsTUFBSUMsZUFBZUMsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFuQjs7QUFFQSxNQUFJQyxjQUFjQyxLQUFLQyxHQUFMLENBQ2hCSixTQUFTSyxJQUFULENBQWNDLFdBREUsRUFDV04sU0FBU08sZUFBVCxDQUF5QkQsV0FEcEMsRUFDaUROLFNBQVNLLElBQVQsQ0FBY0csV0FEL0QsRUFDNEVSLFNBQVNPLGVBQVQsQ0FBeUJDLFdBRHJHLEVBQ2tIUixTQUFTSyxJQUFULENBQWNJLFdBRGhJLEVBQzZJVCxTQUFTTyxlQUFULENBQXlCRSxXQUR0SyxDQUFsQjs7QUFJQUMsU0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBVUMsS0FBVixFQUFpQjtBQUMvQyxRQUFJVixlQUFlLEdBQW5CLEVBQXdCO0FBQ3RCSCxtQkFBYWMsWUFBYixDQUEwQixVQUExQixFQUFzQyxVQUF0QztBQUNBZCxtQkFBYWMsWUFBYixDQUEwQixPQUExQixFQUFtQyxPQUFuQztBQUNBZCxtQkFBYWUsUUFBYixHQUF3QixJQUF4QjtBQUNBZixtQkFBYWdCLElBQWIsR0FBb0IsSUFBcEI7QUFDQWhCLG1CQUFhaUIsS0FBYixHQUFxQixJQUFyQjtBQUNBakIsbUJBQWFrQixPQUFiLEdBQXVCLE1BQXZCO0FBQ0FsQixtQkFBYW1CLElBQWI7QUFDRDtBQUNGLEdBVkQ7QUFXRDs7QUFFRHBCOztBQUVBO0FBQ0EsU0FBU3FCLE1BQVQsR0FBa0I7QUFDaEIsTUFBTUMsVUFBVXBCLFNBQVNxQixhQUFULENBQXVCLDBCQUF2QixDQUFoQjtBQUNBLE1BQU1DLFlBQVl0QixTQUFTcUIsYUFBVCxDQUF1QixlQUF2QixDQUFsQjtBQUNBLE1BQU1FLFdBQVd2QixTQUFTcUIsYUFBVCxDQUF1QixjQUF2QixDQUFqQjtBQUNBLE1BQU1HLGFBQWF4QixTQUFTcUIsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBbkI7O0FBRUFELFVBQVFULGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVVDLEtBQVYsRUFBaUI7QUFDakRVLGNBQVVHLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLHNCQUEzQjtBQUNBSCxhQUFTRSxTQUFULENBQW1CQyxNQUFuQixDQUEwQixxQkFBMUI7QUFDQSxRQUFJSixVQUFVRyxTQUFWLENBQW9CRSxRQUFwQixDQUE2QixzQkFBN0IsS0FBd0RKLFNBQVNFLFNBQVQsQ0FBbUJFLFFBQW5CLENBQTRCLHFCQUE1QixDQUE1RCxFQUFnSDtBQUM5R2YsWUFBTWdCLE1BQU4sQ0FBYUMsV0FBYixHQUEyQixZQUEzQjtBQUNELEtBRkQsTUFFTztBQUNMakIsWUFBTWdCLE1BQU4sQ0FBYUMsV0FBYixHQUEyQixnQkFBM0I7QUFDRDtBQUNGLEdBUkQ7O0FBVUFMLGFBQVdiLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQVVDLEtBQVYsRUFBaUI7QUFDcERRLFlBQVFTLFdBQVIsR0FBc0IsZ0JBQXRCO0FBQ0FQLGNBQVVHLFNBQVYsQ0FBb0JLLE1BQXBCLENBQTJCLHNCQUEzQjtBQUNBUCxhQUFTRSxTQUFULENBQW1CSyxNQUFuQixDQUEwQixxQkFBMUI7QUFDRCxHQUpEO0FBS0Q7QUFDRFgiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gYmcgdmlkZW9cclxuZnVuY3Rpb24gYmdWaWRlbygpIHtcclxuICB2YXIgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnLXZpZGVvJyk7XHJcblxyXG4gIHZhciB3aW5kb3dXaWR0aCA9IE1hdGgubWF4KFxyXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLCBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICk7ICBcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKHdpbmRvd1dpZHRoIDw9IDc2OCkge1xyXG4gICAgICB2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJjb250cm9sc1wiKTtcclxuICAgICAgdmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcIm11dGVkXCIsIFwibXV0ZWRcIik7XHJcbiAgICAgIHZpZGVvRWxlbWVudC5jb250cm9scyA9IHRydWU7XHJcbiAgICAgIHZpZGVvRWxlbWVudC5sb29wID0gdHJ1ZTtcclxuICAgICAgdmlkZW9FbGVtZW50Lm11dGVkID0gdHJ1ZTtcclxuICAgICAgdmlkZW9FbGVtZW50LnByZWxvYWQgPSBcImF1dG9cIjtcclxuICAgICAgdmlkZW9FbGVtZW50LnBsYXkoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuYmdWaWRlbygpO1xyXG5cclxuLy8gM0QgY2FyZFxyXG5mdW5jdGlvbiBjYXJkM0QoKSB7XHJcbiAgY29uc3QgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9fX2J0bi1hdXRvcml6YXRpb25cIik7XHJcbiAgY29uc3QgZnJvbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fZnJvbnRcIik7XHJcbiAgY29uc3QgYmFja0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19iYWNrXCIpO1xyXG4gIGNvbnN0IGJ0bk9uSW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19saW5rLW9uLWludHJvXCIpO1xyXG5cclxuICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGZyb250Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWJvdXRfX2Zyb250LS1yb3RhdGVcIik7XHJcbiAgICBiYWNrQ2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWJvdXRfX2JhY2stLXJvdGF0ZVwiKTtcclxuICAgIGlmIChmcm9udENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWJvdXRfX2Zyb250LS1yb3RhdGVcIikgJiYgYmFja0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWJvdXRfX2JhY2stLXJvdGF0ZVwiKSkge1xyXG4gICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBcItCd0LAg0LPQu9Cw0LLQvdGD0Y5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9IFwi0JDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRj1wiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBidG5PbkluZGV4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGJ0bk9wZW4udGV4dENvbnRlbnQgPSBcItCQ0LLRgtC+0YDQuNC30L7QstCw0YLRjNGB0Y9cIjtcclxuICAgIGZyb250Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWJvdXRfX2Zyb250LS1yb3RhdGVcIik7XHJcbiAgICBiYWNrQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWJvdXRfX2JhY2stLXJvdGF0ZVwiKTtcclxuICB9KTtcclxufVxyXG5jYXJkM0QoKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });