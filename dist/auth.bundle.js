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
eval("\n\nvar windowWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);\n\nvar windowHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);\n\n// bg video\nfunction bgVideo() {\n  var videoElement = document.getElementById('bg-video');\n\n  var windowWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);\n\n  window.addEventListener(\"load\", function (event) {\n    if (windowWidth <= 768) {\n      videoElement.setAttribute(\"muted\", \"muted\");\n      videoElement.loop = true;\n      videoElement.muted = true;\n      videoElement.preload = \"auto\";\n      videoElement.play();\n\n      videoElement.addEventListener('loadeddata', function () {\n        videoElement.play();\n      });\n      videoElement.addEventListener('canplaythrough', function () {\n        videoElement.play();\n      });\n      videoElement.addEventListener('canplay', function () {\n        videoElement.play();\n      });\n    }\n  });\n}\nbgVideo();\n\n// 3D card\nfunction card3D() {\n  var btnOpen = document.querySelector(\".intro__btn-autorization\");\n  var frontCard = document.querySelector(\".about__front\");\n  var backCard = document.querySelector(\".about__back\");\n  var btnOnIndex = document.querySelector(\".about__link-on-intro\");\n\n  btnOpen.addEventListener(\"click\", function (event) {\n    frontCard.classList.toggle(\"about__front--rotate\");\n    backCard.classList.toggle(\"about__back--rotate\");\n    if (frontCard.classList.contains(\"about__front--rotate\") && backCard.classList.contains(\"about__back--rotate\")) {\n      event.target.textContent = \"На главную\";\n    } else {\n      event.target.textContent = \"Авторизоваться\";\n    }\n  });\n\n  btnOnIndex.addEventListener(\"click\", function (event) {\n    btnOpen.textContent = \"Авторизоваться\";\n    frontCard.classList.remove(\"about__front--rotate\");\n    backCard.classList.remove(\"about__back--rotate\");\n  });\n}\ncard3D();\n\n// parallax mousemove\nfunction parallaxMove() {\n  var backgroundIntro = document.querySelector(\".bg-intro\");\n  var parallaxItem = document.querySelector(\".bg-intro__container\");\n  var parallaxImage = document.querySelector(\".bg-intro__img\");\n\n  window.addEventListener(\"mousemove\", function (event) {\n    var centerX = windowWidth / 2 - event.pageX;\n    var centerY = windowHeight / 2 - event.pageY;\n\n    var positionX = centerX * 0.03;\n    var positionY = centerY * 0.03;\n    var bottomPosition = windowHeight / 2 * 0.03;\n\n    parallaxItem.style.bottom = -bottomPosition + \"px\";\n\n    parallaxItem.style.transform = \"translate(\" + positionX + \"px, \" + positionY + \"px)\";\n  });\n}\n\nif (windowWidth > 768) {\n  parallaxMove();\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbIndpbmRvd1dpZHRoIiwiTWF0aCIsIm1heCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFdpZHRoIiwiZG9jdW1lbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsIndpbmRvd0hlaWdodCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsImJnVmlkZW8iLCJ2aWRlb0VsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldEF0dHJpYnV0ZSIsImxvb3AiLCJtdXRlZCIsInByZWxvYWQiLCJwbGF5IiwiY2FyZDNEIiwiYnRuT3BlbiIsInF1ZXJ5U2VsZWN0b3IiLCJmcm9udENhcmQiLCJiYWNrQ2FyZCIsImJ0bk9uSW5kZXgiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInRhcmdldCIsInRleHRDb250ZW50IiwicmVtb3ZlIiwicGFyYWxsYXhNb3ZlIiwiYmFja2dyb3VuZEludHJvIiwicGFyYWxsYXhJdGVtIiwicGFyYWxsYXhJbWFnZSIsImNlbnRlclgiLCJwYWdlWCIsImNlbnRlclkiLCJwYWdlWSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsImJvdHRvbVBvc2l0aW9uIiwic3R5bGUiLCJib3R0b20iLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUlBLGNBQWNDLEtBQUtDLEdBQUwsQ0FDaEJDLFNBQVNDLElBQVQsQ0FBY0MsV0FERSxFQUNXRixTQUFTRyxlQUFULENBQXlCRCxXQURwQyxFQUNpREYsU0FBU0MsSUFBVCxDQUFjRyxXQUQvRCxFQUM0RUosU0FBU0csZUFBVCxDQUF5QkMsV0FEckcsRUFDa0hKLFNBQVNDLElBQVQsQ0FBY0ksV0FEaEksRUFDNklMLFNBQVNHLGVBQVQsQ0FBeUJFLFdB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QixNQUFNQyxrQkFBa0JsQyxTQUFTdUIsYUFBVCxDQUF1QixXQUF2QixDQUF4QjtBQUNBLE1BQU1ZLGVBQWVuQyxTQUFTdUIsYUFBVCxDQUF1QixzQkFBdkIsQ0FBckI7QUFDQSxNQUFNYSxnQkFBZ0JwQyxTQUFTdUIsYUFBVCxDQUF1QixnQkFBdkIsQ0FBdEI7O0FBRUFWLFNBQU9DLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbkQsUUFBTXNCLFVBQVd4QyxjQUFjLENBQWYsR0FBb0JrQixNQUFNdUIsS0FBMUM7QUFDQSxRQUFNQyxVQUFXakMsZUFBZSxDQUFoQixHQUFxQlMsTUFBTXlCLEtBQTNDOztBQUVBLFFBQU1DLFlBQVlKLFVBQVUsSUFBNUI7QUFDQSxRQUFNSyxZQUFZSCxVQUFVLElBQTVCO0FBQ0EsUUFBTUksaUJBQWtCckMsZUFBZSxDQUFoQixHQUFxQixJQUE1Qzs7QUFFQTZCLGlCQUFhUyxLQUFiLENBQW1CQyxNQUFuQixHQUE0QixDQUFDRixjQUFELEdBQWtCLElBQTlDOztBQUVBUixpQkFBYVMsS0FBYixDQUFtQkUsU0FBbkIsa0JBQTRDTCxTQUE1QyxZQUE0REMsU0FBNUQ7QUFDRCxHQVhEO0FBWUQ7O0FBRUQsSUFBSTdDLGNBQWMsR0FBbEIsRUFBdUI7QUFDckJvQztBQUNEIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciB3aW5kb3dXaWR0aCA9IE1hdGgubWF4KFxyXG4gIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCwgZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuKTtcclxuXHJcbnZhciB3aW5kb3dIZWlnaHQgPSBNYXRoLm1heChcclxuICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbik7XHJcblxyXG4vLyBiZyB2aWRlb1xyXG5mdW5jdGlvbiBiZ1ZpZGVvKCkge1xyXG4gIHZhciB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctdmlkZW8nKTtcclxuXHJcbiAgdmFyIHdpbmRvd1dpZHRoID0gTWF0aC5tYXgoXHJcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXHJcbiAgKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKHdpbmRvd1dpZHRoIDw9IDc2OCkge1xyXG4gICAgICB2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwibXV0ZWRcIiwgXCJtdXRlZFwiKTtcclxuICAgICAgdmlkZW9FbGVtZW50Lmxvb3AgPSB0cnVlO1xyXG4gICAgICB2aWRlb0VsZW1lbnQubXV0ZWQgPSB0cnVlO1xyXG4gICAgICB2aWRlb0VsZW1lbnQucHJlbG9hZCA9IFwiYXV0b1wiO1xyXG4gICAgICB2aWRlb0VsZW1lbnQucGxheSgpO1xyXG5cclxuICAgICAgdmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZGRhdGEnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2aWRlb0VsZW1lbnQucGxheSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgdmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmlkZW9FbGVtZW50LnBsYXkoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmlkZW9FbGVtZW50LnBsYXkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuYmdWaWRlbygpO1xyXG5cclxuLy8gM0QgY2FyZFxyXG5mdW5jdGlvbiBjYXJkM0QoKSB7XHJcbiAgY29uc3QgYnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm9fX2J0bi1hdXRvcml6YXRpb25cIik7XHJcbiAgY29uc3QgZnJvbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fZnJvbnRcIik7XHJcbiAgY29uc3QgYmFja0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19iYWNrXCIpO1xyXG4gIGNvbnN0IGJ0bk9uSW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0X19saW5rLW9uLWludHJvXCIpO1xyXG5cclxuICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGZyb250Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWJvdXRfX2Zyb250LS1yb3RhdGVcIik7XHJcbiAgICBiYWNrQ2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWJvdXRfX2JhY2stLXJvdGF0ZVwiKTtcclxuICAgIGlmIChmcm9udENhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWJvdXRfX2Zyb250LS1yb3RhdGVcIikgJiYgYmFja0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWJvdXRfX2JhY2stLXJvdGF0ZVwiKSkge1xyXG4gICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBcItCd0LAg0LPQu9Cw0LLQvdGD0Y5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9IFwi0JDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRj1wiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBidG5PbkluZGV4LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGJ0bk9wZW4udGV4dENvbnRlbnQgPSBcItCQ0LLRgtC+0YDQuNC30L7QstCw0YLRjNGB0Y9cIjtcclxuICAgIGZyb250Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWJvdXRfX2Zyb250LS1yb3RhdGVcIik7XHJcbiAgICBiYWNrQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWJvdXRfX2JhY2stLXJvdGF0ZVwiKTtcclxuICB9KTtcclxufVxyXG5jYXJkM0QoKTtcclxuXHJcbi8vIHBhcmFsbGF4IG1vdXNlbW92ZVxyXG5mdW5jdGlvbiBwYXJhbGxheE1vdmUoKSB7XHJcbiAgY29uc3QgYmFja2dyb3VuZEludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1pbnRyb1wiKTtcclxuICBjb25zdCBwYXJhbGxheEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLWludHJvX19jb250YWluZXJcIik7XHJcbiAgY29uc3QgcGFyYWxsYXhJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctaW50cm9fX2ltZ1wiKTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGNlbnRlclggPSAod2luZG93V2lkdGggLyAyKSAtIGV2ZW50LnBhZ2VYO1xyXG4gICAgY29uc3QgY2VudGVyWSA9ICh3aW5kb3dIZWlnaHQgLyAyKSAtIGV2ZW50LnBhZ2VZO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uWCA9IGNlbnRlclggKiAwLjAzO1xyXG4gICAgY29uc3QgcG9zaXRpb25ZID0gY2VudGVyWSAqIDAuMDM7XHJcbiAgICBjb25zdCBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3dIZWlnaHQgLyAyKSAqIDAuMDM7XHJcblxyXG4gICAgcGFyYWxsYXhJdGVtLnN0eWxlLmJvdHRvbSA9IC1ib3R0b21Qb3NpdGlvbiArIFwicHhcIjtcclxuXHJcbiAgICBwYXJhbGxheEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYDtcclxuICB9KTtcclxufVxyXG5cclxuaWYgKHdpbmRvd1dpZHRoID4gNzY4KSB7XHJcbiAgcGFyYWxsYXhNb3ZlKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });