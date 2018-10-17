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
eval("\n\n// bg video\n\nfunction bgVideo() {\n  var videoElement = document.getElementById('bg-video');\n\n  var windowWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);\n\n  window.addEventListener(\"load\", function (event) {\n    if (windowWidth <= 768) {\n      videoElement.setAttribute(\"controls\", \"controls\");\n      videoElement.setAttribute(\"muted\", \"muted\");\n      videoElement.controls = true;\n      videoElement.loop = true;\n      videoElement.muted = true;\n      videoElement.preload = \"auto\";\n      videoElement.play();\n      document.body.addEventListener(\"touchstart\", function (event) {\n        videoElement.play();\n      });\n      videoElement.addEventListener('loadeddata', function () {\n        videoElement.play();\n      });\n      videoElement.addEventListener('canplaythrough', function () {\n        videoElement.play();\n      });\n    }\n  });\n}\n\nbgVideo();\n\n// 3D card\nfunction card3D() {\n  var btnOpen = document.querySelector(\".intro__btn-autorization\");\n  var frontCard = document.querySelector(\".about__front\");\n  var backCard = document.querySelector(\".about__back\");\n  var btnOnIndex = document.querySelector(\".about__link-on-intro\");\n\n  btnOpen.addEventListener(\"click\", function (event) {\n    frontCard.classList.toggle(\"about__front--rotate\");\n    backCard.classList.toggle(\"about__back--rotate\");\n    if (frontCard.classList.contains(\"about__front--rotate\") && backCard.classList.contains(\"about__back--rotate\")) {\n      event.target.textContent = \"На главную\";\n    } else {\n      event.target.textContent = \"Авторизоваться\";\n    }\n  });\n\n  btnOnIndex.addEventListener(\"click\", function (event) {\n    btnOpen.textContent = \"Авторизоваться\";\n    frontCard.classList.remove(\"about__front--rotate\");\n    backCard.classList.remove(\"about__back--rotate\");\n  });\n}\ncard3D();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbImJnVmlkZW8iLCJ2aWRlb0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93V2lkdGgiLCJNYXRoIiwibWF4IiwiYm9keSIsInNjcm9sbFdpZHRoIiwiZG9jdW1lbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldEF0dHJpYnV0ZSIsImNvbnRyb2xzIiwibG9vcCIsIm11dGVkIiwicHJlbG9hZCIsInBsYXkiLCJjYXJkM0QiLCJidG5PcGVuIiwicXVlcnlTZWxlY3RvciIsImZyb250Q2FyZCIsImJhY2tDYXJkIiwiYnRuT25JbmRleCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUNBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsTUFBSUMsZUFBZUMsU0FBU0MsY0FBVCxDQUF3QixVQUF4QixDQUFuQjs7QUFFQSxNQUFJQyxjQUFjQyxLQUFLQyxHQUFMLENBQ2hCSixTQUFTSyxJQUFULENBQWNDLFdBREUsRUFDV04sU0FBU08sZUFBVCxDQUF5QkQsV0FEcEMsRUFDaUROLFNBQVNLLElBQVQsQ0FBY0csV0FEL0QsRUFDNEVSLFNBQVNPLGVBQVQsQ0FBeUJDLFdBRHJHLEVBQ2tIUixTQUFTSyxJQUFULENBQWNJLFdBRGhJLEVBQzZJVCxTQUFTTyxlQUFULENBQXlCRSxXQUR0SyxDQUFsQjs7QUFJQUMsU0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBVUMsS0FBVixFQUFpQjtBQUMvQyxRQUFJVixlQUFlLEdBQW5CLEVBQXdCO0FBQ3RCSCxtQkFBYWMsWUFBYixDQUEwQixVQUExQixFQUFzQyxVQUF0QztBQUNBZCxtQkFBYWMsWUFBYixDQUEwQixPQUExQixFQUFtQyxPQUFuQztBQUNBZCxtQkFBYWUsUUFBYixHQUF3QixJQUF4QjtBQUNBZixtQkFBYWdCLElBQWIsR0FBb0IsSUFBcEI7QUFDQWhCLG1CQUFhaUIsS0FBYixHQUFxQixJQUFyQjtBQUNBakIsbUJBQWFrQixPQUFiLEdBQXVCLE1BQXZCO0FBQ0FsQixtQkFBYW1CLElBQWI7QUFDQWxCLGVBQVNLLElBQVQsQ0FBY00sZ0JBQWQsQ0FBK0IsWUFBL0IsRUFBNkMsVUFBVUMsS0FBVixFQUFpQjtBQUM1RGIscUJBQWFtQixJQUFiO0FBQ0QsT0FGRDtBQUdBbkIsbUJBQWFZLGdCQUFiLENBQThCLFlBQTlCLEVBQTRDLFlBQVc7QUFDckRaLHFCQUFhbUIsSUFBYjtBQUNELE9BRkQ7QUFHQW5CLG1CQUFhWSxnQkFBYixDQUE4QixnQkFBOUIsRUFBZ0QsWUFBVztBQUN6RFoscUJBQWFtQixJQUFiO0FBQ0QsT0FGRDtBQUlEO0FBQ0YsR0FwQkQ7QUFxQkQ7O0FBRURwQjs7QUFFQTtBQUNBLFNBQVNxQixNQUFULEdBQWtCO0FBQ2hCLE1BQU1DLFVBQVVwQixTQUFTcUIsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBaEI7QUFDQSxNQUFNQyxZQUFZdEIsU0FBU3FCLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQSxNQUFNRSxXQUFXdkIsU0FBU3FCLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBakI7QUFDQSxNQUFNRyxhQUFheEIsU0FBU3FCLGFBQVQsQ0FBdUIsdUJBQXZCLENBQW5COztBQUVBRCxVQUFRVCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ2pEVSxjQUFVRyxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixzQkFBM0I7QUFDQUgsYUFBU0UsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIscUJBQTFCO0FBQ0EsUUFBSUosVUFBVUcsU0FBVixDQUFvQkUsUUFBcEIsQ0FBNkIsc0JBQTdCLEtBQXdESixTQUFTRSxTQUFULENBQW1CRSxRQUFuQixDQUE0QixxQkFBNUIsQ0FBNUQsRUFBZ0g7QUFDOUdmLFlBQU1nQixNQUFOLENBQWFDLFdBQWIsR0FBMkIsWUFBM0I7QUFDRCxLQUZELE1BRU87QUFDTGpCLFlBQU1nQixNQUFOLENBQWFDLFdBQWIsR0FBMkIsZ0JBQTNCO0FBQ0Q7QUFDRixHQVJEOztBQVVBTCxhQUFXYixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BEUSxZQUFRUyxXQUFSLEdBQXNCLGdCQUF0QjtBQUNBUCxjQUFVRyxTQUFWLENBQW9CSyxNQUFwQixDQUEyQixzQkFBM0I7QUFDQVAsYUFBU0UsU0FBVCxDQUFtQkssTUFBbkIsQ0FBMEIscUJBQTFCO0FBQ0QsR0FKRDtBQUtEO0FBQ0RYIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIGJnIHZpZGVvXHJcbmZ1bmN0aW9uIGJnVmlkZW8oKSB7XHJcbiAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy12aWRlbycpO1xyXG5cclxuICB2YXIgd2luZG93V2lkdGggPSBNYXRoLm1heChcclxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCwgZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuICApO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAod2luZG93V2lkdGggPD0gNzY4KSB7XHJcbiAgICAgIHZpZGVvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcImNvbnRyb2xzXCIpO1xyXG4gICAgICB2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwibXV0ZWRcIiwgXCJtdXRlZFwiKTtcclxuICAgICAgdmlkZW9FbGVtZW50LmNvbnRyb2xzID0gdHJ1ZTtcclxuICAgICAgdmlkZW9FbGVtZW50Lmxvb3AgPSB0cnVlO1xyXG4gICAgICB2aWRlb0VsZW1lbnQubXV0ZWQgPSB0cnVlO1xyXG4gICAgICB2aWRlb0VsZW1lbnQucHJlbG9hZCA9IFwiYXV0b1wiO1xyXG4gICAgICB2aWRlb0VsZW1lbnQucGxheSgpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZpZGVvRWxlbWVudC5wbGF5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZpZGVvRWxlbWVudC5wbGF5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2aWRlb0VsZW1lbnQucGxheSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmJnVmlkZW8oKTtcclxuXHJcbi8vIDNEIGNhcmRcclxuZnVuY3Rpb24gY2FyZDNEKCkge1xyXG4gIGNvbnN0IGJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvX19idG4tYXV0b3JpemF0aW9uXCIpO1xyXG4gIGNvbnN0IGZyb250Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRfX2Zyb250XCIpO1xyXG4gIGNvbnN0IGJhY2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fYmFja1wiKTtcclxuICBjb25zdCBidG5PbkluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dF9fbGluay1vbi1pbnRyb1wiKTtcclxuXHJcbiAgYnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBmcm9udENhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImFib3V0X19mcm9udC0tcm90YXRlXCIpO1xyXG4gICAgYmFja0NhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImFib3V0X19iYWNrLS1yb3RhdGVcIik7XHJcbiAgICBpZiAoZnJvbnRDYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImFib3V0X19mcm9udC0tcm90YXRlXCIpICYmIGJhY2tDYXJkLmNsYXNzTGlzdC5jb250YWlucyhcImFib3V0X19iYWNrLS1yb3RhdGVcIikpIHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gXCLQndCwINCz0LvQsNCy0L3Rg9GOXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSBcItCQ0LLRgtC+0YDQuNC30L7QstCw0YLRjNGB0Y9cIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYnRuT25JbmRleC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBidG5PcGVuLnRleHRDb250ZW50ID0gXCLQkNCy0YLQvtGA0LjQt9C+0LLQsNGC0YzRgdGPXCI7XHJcbiAgICBmcm9udENhcmQuY2xhc3NMaXN0LnJlbW92ZShcImFib3V0X19mcm9udC0tcm90YXRlXCIpO1xyXG4gICAgYmFja0NhcmQuY2xhc3NMaXN0LnJlbW92ZShcImFib3V0X19iYWNrLS1yb3RhdGVcIik7XHJcbiAgfSk7XHJcbn1cclxuY2FyZDNEKCk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ })

/******/ });