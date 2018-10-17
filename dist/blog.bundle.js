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
eval("\n\n// Раскрывающаяся навигация\n\nfunction hamburgerMenu() {\n\n  var hambMenuOpenBtn = document.querySelector(\".header__menu-btn\");\n  var hambMenuOpenBtnElement = document.querySelectorAll(\".header__menu-btn-element\");\n\n  var hambmenu = document.querySelector(\".hambmenu\");\n  var menuLink = document.querySelectorAll(\".hambmenu__link\");\n\n  var menuAside = document.querySelector(\".blog-content__menu\");\n\n  hambMenuOpenBtn.addEventListener(\"click\", function (event) {\n\n    if (hambMenuOpenBtn.classList.contains(\"header__menu-btn--close\")) {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var i = 0; i < hambMenuOpenBtnElement.length; i++) {\n        hambMenuOpenBtnElement[i].classList.remove(\"header__menu-btn-element--close\");\n      }\n      document.body.style.overflow = \"visible\";\n      hambmenu.style.opacity = 0;\n      hambmenu.style.transform = \"translateX(100%)\";\n    } else {\n      hambMenuOpenBtn.classList.add(\"header__menu-btn--close\");\n      for (var _i = 0; _i < hambMenuOpenBtnElement.length; _i++) {\n        hambMenuOpenBtnElement[_i].classList.add(\"header__menu-btn-element--close\");\n      }\n      document.body.style.overflow = \"hidden\";\n      hambmenu.style.opacity = 1;\n      hambmenu.style.transform = \"translateX(0)\";\n    }\n  });\n\n  for (var i = 0; i < menuLink.length; ++i) {\n    menuLink[i].addEventListener(\"click\", function () {\n      hambMenuOpenBtn.classList.remove(\"header__menu-btn--close\");\n      for (var _i2 = 0; _i2 < hambMenuOpenBtnElement.length; _i2++) {\n        hambMenuOpenBtnElement[_i2].classList.remove(\"header__menu-btn-element--close\");\n      }\n      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;\n      document.body.style.overflow = \"visible\";\n      setTimeout(displayNone, 600);\n    });\n  }\n}\nhamburgerMenu();\n\n// Фиксация навигации по блогу\nfunction fixedMenu() {\n  var menuAside = document.querySelector(\".blog-content__menu\");\n  var menuList = document.querySelector(\".blog-content__menu-list\");\n  var menuLinks = document.querySelectorAll(\".blog-content__link\");\n  var blogArticles = document.querySelectorAll(\".blog-content__article\");\n\n  function setArticleActive() {\n    function setActive(article) {\n      for (var i = 0; i < menuLinks.length; i++) {\n        menuLinks[i].classList.remove(\"blog-content__link--active\");\n      }\n\n      for (var _i3 = 0; _i3 < menuLinks.length; _i3++) {\n        if (menuLinks[_i3].getAttribute(\"href\") == \"#\" + article.getAttribute(\"id\")) {\n          menuLinks[_i3].classList.add(\"blog-content__link--active\");\n        }\n      }\n    }\n\n    if (window.pageYOffset < blogArticles[0].getBoundingClientRect().top + window.pageYOffset) {\n      setActive(blogArticles[0]);\n    } else if (window.pageYOffset + document.documentElement.scrollHeight === document.body.offsetHeight) {\n      setActive(blogArticles[blogArticles.length - 1]);\n    } else {\n      for (var i = 0; i < blogArticles.length; ++i) {\n        var elemTop = blogArticles[i].getBoundingClientRect().top + window.pageYOffset;\n        if (window.pageYOffset > elemTop - 100) {\n          setActive(blogArticles[i]);\n        }\n      }\n    }\n  }\n\n  function setArticleChords() {\n    var elemChords = menuAside.getBoundingClientRect().top + window.pageYOffset;\n\n    if (window.pageYOffset >= elemChords - 30) {\n      menuList.style.position = \"fixed\";\n      menuList.style.top = \"30px\";\n      menuList.style.width = getComputedStyle(menuAside).width;\n    } else {\n      menuList.style.position = \"static\";\n      menuList.style.top = \"\";\n      menuList.style.width = \"auto\";\n    }\n  }\n\n  window.addEventListener(\"scroll\", function () {\n    setArticleChords();\n    setArticleActive();\n  });\n\n  setArticleChords();\n  setArticleActive();\n}\n\n// Выпадание навигации по блогу по свайпу и клику\nfunction swipeMenu() {\n  var swipeMenuButton = document.querySelector(\".blog-content__btn-menu-open\");\n  var swipeMenu = document.querySelector(\".blog-content__menu\");\n  var swipeMenuLink = document.querySelectorAll(\".blog-content__link\");\n  var touchStartX = undefined;\n  var touchEndX = undefined;\n\n  swipeMenuButton.addEventListener(\"click\", function (event) {\n    swipeMenu.classList.toggle(\"blog-content__menu--open\");\n    if (getComputedStyle(document.body).overflow != \"hidden\") {\n      document.body.style.overflow = \"hidden\";\n    } else {\n      document.body.style.overflow = \"visible\";\n    }\n  });\n\n  document.body.addEventListener(\"touchstart\", function (event) {\n    if (swipeMenu.classList.contains(\"blog-content__menu--open\") || event.touches[0].pageX <= windowWidth / 4) {\n      touchStartX = event.touches[0].pageX;\n    } else {\n      touchStartX = undefined;\n    }\n  });\n\n  document.body.addEventListener(\"touchend\", function (event) {\n    touchEndX = event.changedTouches[0].pageX;\n    if (touchStartX + 75 <= touchEndX) {\n      swipeMenu.classList.add(\"blog-content__menu--open\");\n      document.body.style.overflow = \"hidden\";\n    } else if (touchStartX - 40 >= touchEndX) {\n      swipeMenu.classList.remove(\"blog-content__menu--open\");\n      document.body.style.overflow = \"visible\";\n    }\n  });\n\n  for (var i = 0; i < swipeMenuLink.length; i++) {\n    swipeMenuLink[i].addEventListener(\"click\", function (event) {\n      swipeMenu.classList.remove(\"blog-content__menu--open\");\n      document.body.style.overflow = \"visible\";\n    });\n  }\n}\n\nvar windowWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);\n\nif (windowWidth > 768) {\n  fixedMenu();\n} else {\n  swipeMenu();\n}\n\n// Кнопка прокрутки вниз (стрелка вниз)\nfunction arrowDown() {\n  var arrowDownButton = document.querySelector(\".header__arrow-down-link\");\n  var header = document.querySelector(\".header-bg\");\n  arrowDownButton.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    header.nextElementSibling.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  });\n}\n\narrowDown();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImhhbWJ1cmdlck1lbnUiLCJoYW1iTWVudU9wZW5CdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW1iTWVudU9wZW5CdG5FbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImhhbWJtZW51IiwibWVudUxpbmsiLCJtZW51QXNpZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImkiLCJsZW5ndGgiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJhZGQiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0VGltZW91dCIsImRpc3BsYXlOb25lIiwiZml4ZWRNZW51IiwibWVudUxpc3QiLCJtZW51TGlua3MiLCJibG9nQXJ0aWNsZXMiLCJzZXRBcnRpY2xlQWN0aXZlIiwic2V0QWN0aXZlIiwiYXJ0aWNsZSIsImdldEF0dHJpYnV0ZSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxlbVRvcCIsInNldEFydGljbGVDaG9yZHMiLCJlbGVtQ2hvcmRzIiwicG9zaXRpb24iLCJ3aWR0aCIsInN3aXBlTWVudSIsInN3aXBlTWVudUJ1dHRvbiIsInN3aXBlTWVudUxpbmsiLCJ0b3VjaFN0YXJ0WCIsInVuZGVmaW5lZCIsInRvdWNoRW5kWCIsInRvZ2dsZSIsInRvdWNoZXMiLCJwYWdlWCIsIndpbmRvd1dpZHRoIiwiY2hhbmdlZFRvdWNoZXMiLCJNYXRoIiwibWF4Iiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwiYXJyb3dEb3duIiwiYXJyb3dEb3duQnV0dG9uIiwiaGVhZGVyIiwicHJldmVudERlZmF1bHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUNBLFNBQVNBLGFBQVQsR0FBeUI7O0FBRXZCLE1BQU1DLGtCQUFrQkMsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBeEI7QUFDQSxNQUFNQyx5QkFBeUJGLFNBQVNHLGdCQUFULENBQTBCLDJCQUExQixDQUEvQjs7QUFFQSxNQUFNQyxXQUFXSixTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWpCO0FBQ0EsTUFBTUksV0FBV0wsU0FBU0csZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWpCOztBQUVBLE1BQU1HLFlBQVlOLFNBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWxCOztBQUVBRixrQkFBZ0JRLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxVQUFVQyxLQUFWLEVBQWlCOztBQUV6RCxRQUFJVCxnQkFBZ0JVLFNBQWhCLENBQTBCQyxRQUExQixDQUFtQyx5QkFBbkMsQ0FBSixFQUFtRTtBQUNqRVgsc0JBQWdCVSxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMseUJBQWpDO0FBQ0EsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlWLHVCQUF1QlcsTUFBM0MsRUFBbURELEdBQW5ELEVBQXdEO0FBQ3REViwrQkFBdUJVLENBQXZCLEVBQTBCSCxTQUExQixDQUFvQ0UsTUFBcEMsQ0FBMkMsaUNBQTNDO0FBQ0Q7QUFDRFgsZUFBU2MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxRQUFwQixHQUErQixTQUEvQjtBQUNBWixlQUFTVyxLQUFULENBQWVFLE9BQWYsR0FBeUIsQ0FBekI7QUFDQWIsZUFBU1csS0FBVCxDQUFlRyxTQUFmLEdBQTJCLGtCQUEzQjtBQUNELEtBUkQsTUFTSztBQUNIbkIsc0JBQWdCVSxTQUFoQixDQUEwQlUsR0FBMUIsQ0FBOEIseUJBQTlCO0FBQ0EsV0FBSyxJQUFJUCxLQUFJLENBQWIsRUFBZ0JBLEtBQUlWLHVCQUF1QlcsTUFBM0MsRUFBbURELElBQW5ELEVBQXdEO0FBQ3REViwrQkFBdUJVLEVBQXZCLEVBQTBCSCxTQUExQixDQUFvQ1UsR0FBcEMsQ0FBd0MsaUNBQXhDO0FBQ0Q7QUFDRG5CLGVBQVNjLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsUUFBcEIsR0FBK0IsUUFBL0I7QUFDQVosZUFBU1csS0FBVCxDQUFlRSxPQUFmLEdBQXlCLENBQXpCO0FBQ0FiLGVBQVNXLEtBQVQsQ0FBZUcsU0FBZixHQUEyQixlQUEzQjtBQUNEO0FBQ0YsR0FwQkQ7O0FBc0JBLE9BQUssSUFBSU4sSUFBSSxDQUFiLEVBQWdCQSxJQUFJUCxTQUFTUSxNQUE3QixFQUFxQyxFQUFFRCxDQUF2QyxFQUEwQztBQUN4Q1AsYUFBU08sQ0FBVCxFQUFZTCxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFZO0FBQ2hEUixzQkFBZ0JVLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQyx5QkFBakM7QUFDQSxXQUFLLElBQUlDLE1BQUksQ0FBYixFQUFnQkEsTUFBSVYsdUJBQXVCVyxNQUEzQyxFQUFtREQsS0FBbkQsRUFBd0Q7QUFDdERWLCtCQUF1QlUsR0FBdkIsRUFBMEJILFNBQTFCLENBQW9DRSxNQUFwQyxDQUEyQyxpQ0FBM0M7QUFDRDtBQUNEUCxlQUFTVyxLQUFULENBQWVFLE9BQWYsR0FBeUJHLGlCQUFpQmhCLFFBQWpCLEVBQTJCYSxPQUEzQixHQUFxQyxDQUE5RDtBQUNBakIsZUFBU2MsSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxRQUFwQixHQUErQixTQUEvQjtBQUNBSyxpQkFBV0MsV0FBWCxFQUF3QixHQUF4QjtBQUNELEtBUkQ7QUFTRDtBQUVGO0FBQ0R4Qjs7QUFJQTtBQUNBLFNBQVN5QixTQUFULEdBQXFCO0FBQ25CLE1BQU1qQixZQUFZTixTQUFTQyxhQUFULENBQXVCLHFCQUF2QixDQUFsQjtBQUNBLE1BQU11QixXQUFXeEIsU0FBU0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBakI7QUFDQSxNQUFNd0IsWUFBWXpCLFNBQVNHLGdCQUFULENBQTBCLHFCQUExQixDQUFsQjtBQUNBLE1BQU11QixlQUFlMUIsU0FBU0csZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQXJCOztBQUVBLFdBQVN3QixnQkFBVCxHQUE0QjtBQUMxQixhQUFTQyxTQUFULENBQW1CQyxPQUFuQixFQUE0QjtBQUMxQixXQUFLLElBQUlqQixJQUFJLENBQWIsRUFBZ0JBLElBQUlhLFVBQVVaLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6Q2Esa0JBQVViLENBQVYsRUFBYUgsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsNEJBQTlCO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJQyxNQUFJLENBQWIsRUFBZ0JBLE1BQUlhLFVBQVVaLE1BQTlCLEVBQXNDRCxLQUF0QyxFQUEyQztBQUN6QyxZQUFJYSxVQUFVYixHQUFWLEVBQWFrQixZQUFiLENBQTBCLE1BQTFCLEtBQXFDLE1BQU1ELFFBQVFDLFlBQVIsQ0FBcUIsSUFBckIsQ0FBL0MsRUFBMkU7QUFDekVMLG9CQUFVYixHQUFWLEVBQWFILFNBQWIsQ0FBdUJVLEdBQXZCLENBQTJCLDRCQUEzQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxRQUFJWSxPQUFPQyxXQUFQLEdBQXFCTixhQUFhLENBQWIsRUFBZ0JPLHFCQUFoQixHQUF3Q0MsR0FBeEMsR0FBOENILE9BQU9DLFdBQTlFLEVBQTJGO0FBQ3pGSixnQkFBVUYsYUFBYSxDQUFiLENBQVY7QUFDRCxLQUZELE1BRU8sSUFBSUssT0FBT0MsV0FBUCxHQUFxQmhDLFNBQVNtQyxlQUFULENBQXlCQyxZQUE5QyxLQUErRHBDLFNBQVNjLElBQVQsQ0FBY3VCLFlBQWpGLEVBQStGO0FBQ3BHVCxnQkFBVUYsYUFBYUEsYUFBYWIsTUFBYixHQUFzQixDQUFuQyxDQUFWO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsV0FBSyxJQUFJRCxJQUFJLENBQWIsRUFBZ0JBLElBQUljLGFBQWFiLE1BQWpDLEVBQXlDLEVBQUVELENBQTNDLEVBQThDO0FBQzVDLFlBQU0wQixVQUFVWixhQUFhZCxDQUFiLEVBQWdCcUIscUJBQWhCLEdBQXdDQyxHQUF4QyxHQUE4Q0gsT0FBT0MsV0FBckU7QUFDQSxZQUFJRCxPQUFPQyxXQUFQLEdBQXFCTSxVQUFVLEdBQW5DLEVBQXdDO0FBQ3RDVixvQkFBVUYsYUFBYWQsQ0FBYixDQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsV0FBUzJCLGdCQUFULEdBQTRCO0FBQzFCLFFBQU1DLGFBQWFsQyxVQUFVMkIscUJBQVYsR0FBa0NDLEdBQWxDLEdBQXdDSCxPQUFPQyxXQUFsRTs7QUFFQSxRQUFJRCxPQUFPQyxXQUFQLElBQXNCUSxhQUFhLEVBQXZDLEVBQTJDO0FBQ3pDaEIsZUFBU1QsS0FBVCxDQUFlMEIsUUFBZixHQUEwQixPQUExQjtBQUNBakIsZUFBU1QsS0FBVCxDQUFlbUIsR0FBZixHQUFxQixNQUFyQjtBQUNBVixlQUFTVCxLQUFULENBQWUyQixLQUFmLEdBQXVCdEIsaUJBQWlCZCxTQUFqQixFQUE0Qm9DLEtBQW5EO0FBQ0QsS0FKRCxNQUlPO0FBQ0xsQixlQUFTVCxLQUFULENBQWUwQixRQUFmLEdBQTBCLFFBQTFCO0FBQ0FqQixlQUFTVCxLQUFULENBQWVtQixHQUFmLEdBQXFCLEVBQXJCO0FBQ0FWLGVBQVNULEtBQVQsQ0FBZTJCLEtBQWYsR0FBdUIsTUFBdkI7QUFDRDtBQUNGOztBQUVEWCxTQUFPeEIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBWTtBQUM1Q2dDO0FBQ0FaO0FBQ0QsR0FIRDs7QUFLQVk7QUFDQVo7QUFDRDs7QUFFRDtBQUNBLFNBQVNnQixTQUFULEdBQXFCO0FBQ25CLE1BQU1DLGtCQUFrQjVDLFNBQVNDLGFBQVQsQ0FBdUIsOEJBQXZCLENBQXhCO0FBQ0EsTUFBTTBDLFlBQVkzQyxTQUFTQyxhQUFULENBQXVCLHFCQUF2QixDQUFsQjtBQUNBLE1BQU00QyxnQkFBZ0I3QyxTQUFTRyxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBdEI7QUFDQSxNQUFJMkMsY0FBY0MsU0FBbEI7QUFDQSxNQUFJQyxZQUFZRCxTQUFoQjs7QUFFQUgsa0JBQWdCckMsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVVDLEtBQVYsRUFBaUI7QUFDekRtQyxjQUFVbEMsU0FBVixDQUFvQndDLE1BQXBCLENBQTJCLDBCQUEzQjtBQUNBLFFBQUk3QixpQkFBaUJwQixTQUFTYyxJQUExQixFQUFnQ0UsUUFBaEMsSUFBNEMsUUFBaEQsRUFBMEQ7QUFDeERoQixlQUFTYyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0QsS0FGRCxNQUVPO0FBQ0xoQixlQUFTYyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFNBQS9CO0FBQ0Q7QUFDRixHQVBEOztBQVNBaEIsV0FBU2MsSUFBVCxDQUFjUCxnQkFBZCxDQUErQixZQUEvQixFQUE2QyxVQUFVQyxLQUFWLEVBQWlCO0FBQzVELFFBQUltQyxVQUFVbEMsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsMEJBQTdCLEtBQTRERixNQUFNMEMsT0FBTixDQUFjLENBQWQsRUFBaUJDLEtBQWpCLElBQTBCQyxjQUFjLENBQXhHLEVBQTJHO0FBQ3pHTixvQkFBY3RDLE1BQU0wQyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsS0FBL0I7QUFDRCxLQUZELE1BRU87QUFDTEwsb0JBQWNDLFNBQWQ7QUFDRDtBQUNGLEdBTkQ7O0FBUUEvQyxXQUFTYyxJQUFULENBQWNQLGdCQUFkLENBQStCLFVBQS9CLEVBQTJDLFVBQVVDLEtBQVYsRUFBaUI7QUFDMUR3QyxnQkFBWXhDLE1BQU02QyxjQUFOLENBQXFCLENBQXJCLEVBQXdCRixLQUFwQztBQUNBLFFBQUlMLGNBQWMsRUFBZCxJQUFvQkUsU0FBeEIsRUFBbUM7QUFDakNMLGdCQUFVbEMsU0FBVixDQUFvQlUsR0FBcEIsQ0FBd0IsMEJBQXhCO0FBQ0FuQixlQUFTYyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0QsS0FIRCxNQUdPLElBQUk4QixjQUFjLEVBQWQsSUFBb0JFLFNBQXhCLEVBQW1DO0FBQ3hDTCxnQkFBVWxDLFNBQVYsQ0FBb0JFLE1BQXBCLENBQTJCLDBCQUEzQjtBQUNBWCxlQUFTYyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFNBQS9CO0FBQ0Q7QUFDRixHQVREOztBQVdBLE9BQUssSUFBSUosSUFBSSxDQUFiLEVBQWdCQSxJQUFJaUMsY0FBY2hDLE1BQWxDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3Q2lDLGtCQUFjakMsQ0FBZCxFQUFpQkwsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFVBQVVDLEtBQVYsRUFBaUI7QUFDMURtQyxnQkFBVWxDLFNBQVYsQ0FBb0JFLE1BQXBCLENBQTJCLDBCQUEzQjtBQUNBWCxlQUFTYyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFNBQS9CO0FBQ0QsS0FIRDtBQUlEO0FBQ0Y7O0FBRUQsSUFBSW9DLGNBQWNFLEtBQUtDLEdBQUwsQ0FDaEJ2RCxTQUFTYyxJQUFULENBQWMwQyxXQURFLEVBQ1d4RCxTQUFTbUMsZUFBVCxDQUF5QnFCLFdBRHBDLEVBQ2lEeEQsU0FBU2MsSUFBVCxDQUFjMkMsV0FEL0QsRUFDNEV6RCxTQUFTbUMsZUFBVCxDQUF5QnNCLFdBRHJHLEVBQ2tIekQsU0FBU2MsSUFBVCxDQUFjNEMsV0FEaEksRUFDNkkxRCxTQUFTbUMsZUFBVCxDQUF5QnVCLFdBRHRLLENBQWxCOztBQUlBLElBQUlOLGNBQWMsR0FBbEIsRUFBdUI7QUFDckI3QjtBQUNELENBRkQsTUFFTztBQUNMb0I7QUFDRDs7QUFFRDtBQUNBLFNBQVNnQixTQUFULEdBQXFCO0FBQ25CLE1BQU1DLGtCQUFrQjVELFNBQVNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXhCO0FBQ0EsTUFBTTRELFNBQVM3RCxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQTJELGtCQUFnQnJELGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxVQUFTQyxLQUFULEVBQWdCO0FBQ3hEQSxVQUFNc0QsY0FBTjtBQUNBRCxXQUFPRSxrQkFBUCxDQUEwQkMsY0FBMUIsQ0FBeUM7QUFDdkNDLGdCQUFVLFFBRDZCO0FBRXZDQyxhQUFPO0FBRmdDLEtBQXpDO0FBSUQsR0FORDtBQU9EOztBQUVEUCIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy9ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8g0KDQsNGB0LrRgNGL0LLQsNGO0YnQsNGP0YHRjyDQvdCw0LLQuNCz0LDRhtC40Y9cclxuZnVuY3Rpb24gaGFtYnVyZ2VyTWVudSgpIHtcclxuXHJcbiAgY29uc3QgaGFtYk1lbnVPcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtYnRuXCIpO1xyXG4gIGNvbnN0IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fbWVudS1idG4tZWxlbWVudFwiKTtcclxuXHJcbiAgY29uc3QgaGFtYm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJtZW51XCIpO1xyXG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oYW1ibWVudV9fbGlua1wiKTtcclxuXHJcbiAgY29uc3QgbWVudUFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLWNvbnRlbnRfX21lbnVcIilcclxuXHJcbiAgaGFtYk1lbnVPcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICBpZiAoaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpKSB7XHJcbiAgICAgIGhhbWJNZW51T3BlbkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyX19tZW51LWJ0bi0tY2xvc2VcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFtYk1lbnVPcGVuQnRuRWxlbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGhhbWJNZW51T3BlbkJ0bkVsZW1lbnRbaV0uY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fbWVudS1idG4tZWxlbWVudC0tY2xvc2VcIik7XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xyXG4gICAgICBoYW1ibWVudS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgaGFtYm1lbnUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDEwMCUpXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaGFtYk1lbnVPcGVuQnRuLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfX21lbnUtYnRuLS1jbG9zZVwiKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW1iTWVudU9wZW5CdG5FbGVtZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaGFtYk1lbnVPcGVuQnRuRWxlbWVudFtpXS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX19tZW51LWJ0bi1lbGVtZW50LS1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgaGFtYm1lbnUuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVMaW5rLmxlbmd0aDsgKytpKSB7XHJcbiAgICBtZW51TGlua1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBoYW1iTWVudU9wZW5CdG4uY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlcl9fbWVudS1idG4tLWNsb3NlXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhhbWJNZW51T3BlbkJ0bkVsZW1lbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoYW1iTWVudU9wZW5CdG5FbGVtZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJfX21lbnUtYnRuLWVsZW1lbnQtLWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbWJtZW51LnN0eWxlLm9wYWNpdHkgPSBnZXRDb21wdXRlZFN0eWxlKGhhbWJtZW51KS5vcGFjaXR5IC0gMTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xyXG4gICAgICBzZXRUaW1lb3V0KGRpc3BsYXlOb25lLCA2MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5oYW1idXJnZXJNZW51KCk7XHJcblxyXG5cclxuXHJcbi8vINCk0LjQutGB0LDRhtC40Y8g0L3QsNCy0LjQs9Cw0YbQuNC4INC/0L4g0LHQu9C+0LPRg1xyXG5mdW5jdGlvbiBmaXhlZE1lbnUoKSB7XHJcbiAgY29uc3QgbWVudUFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLWNvbnRlbnRfX21lbnVcIik7XHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctY29udGVudF9fbWVudS1saXN0XCIpO1xyXG4gIGNvbnN0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1jb250ZW50X19saW5rXCIpO1xyXG4gIGNvbnN0IGJsb2dBcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1jb250ZW50X19hcnRpY2xlXCIpO1xyXG5cclxuICBmdW5jdGlvbiBzZXRBcnRpY2xlQWN0aXZlKCkge1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlKGFydGljbGUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51TGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBtZW51TGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZShcImJsb2ctY29udGVudF9fbGluay0tYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChtZW51TGlua3NbaV0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA9PSBcIiNcIiArIGFydGljbGUuZ2V0QXR0cmlidXRlKFwiaWRcIikpIHtcclxuICAgICAgICAgIG1lbnVMaW5rc1tpXS5jbGFzc0xpc3QuYWRkKFwiYmxvZy1jb250ZW50X19saW5rLS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IGJsb2dBcnRpY2xlc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQpIHtcclxuICAgICAgc2V0QWN0aXZlKGJsb2dBcnRpY2xlc1swXSk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgPT09IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KSB7XHJcbiAgICAgIHNldEFjdGl2ZShibG9nQXJ0aWNsZXNbYmxvZ0FydGljbGVzLmxlbmd0aCAtIDFdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvZ0FydGljbGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbVRvcCA9IGJsb2dBcnRpY2xlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IGVsZW1Ub3AgLSAxMDApIHtcclxuICAgICAgICAgIHNldEFjdGl2ZShibG9nQXJ0aWNsZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0QXJ0aWNsZUNob3JkcygpIHtcclxuICAgIGNvbnN0IGVsZW1DaG9yZHMgPSBtZW51QXNpZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gZWxlbUNob3JkcyAtIDMwKSB7XHJcbiAgICAgIG1lbnVMaXN0LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICBtZW51TGlzdC5zdHlsZS50b3AgPSBcIjMwcHhcIjtcclxuICAgICAgbWVudUxpc3Quc3R5bGUud2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKG1lbnVBc2lkZSkud2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZW51TGlzdC5zdHlsZS5wb3NpdGlvbiA9IFwic3RhdGljXCI7XHJcbiAgICAgIG1lbnVMaXN0LnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICAgIG1lbnVMaXN0LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRBcnRpY2xlQ2hvcmRzKCk7XHJcbiAgICBzZXRBcnRpY2xlQWN0aXZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIHNldEFydGljbGVDaG9yZHMoKTtcclxuICBzZXRBcnRpY2xlQWN0aXZlKCk7XHJcbn1cclxuXHJcbi8vINCS0YvQv9Cw0LTQsNC90LjQtSDQvdCw0LLQuNCz0LDRhtC40Lgg0L/QviDQsdC70L7Qs9GDINC/0L4g0YHQstCw0LnQv9GDINC4INC60LvQuNC60YNcclxuZnVuY3Rpb24gc3dpcGVNZW51KCkge1xyXG4gIGNvbnN0IHN3aXBlTWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZy1jb250ZW50X19idG4tbWVudS1vcGVuXCIpO1xyXG4gIGNvbnN0IHN3aXBlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZy1jb250ZW50X19tZW51XCIpO1xyXG4gIGNvbnN0IHN3aXBlTWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctY29udGVudF9fbGlua1wiKTtcclxuICBsZXQgdG91Y2hTdGFydFggPSB1bmRlZmluZWQ7XHJcbiAgbGV0IHRvdWNoRW5kWCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgc3dpcGVNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHN3aXBlTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYmxvZy1jb250ZW50X19tZW51LS1vcGVuXCIpO1xyXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkub3ZlcmZsb3cgIT0gXCJoaWRkZW5cIikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChzd2lwZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZy1jb250ZW50X19tZW51LS1vcGVuXCIpIHx8IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggPD0gd2luZG93V2lkdGggLyA0KSB7XHJcbiAgICAgIHRvdWNoU3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvdWNoU3RhcnRYID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHRvdWNoRW5kWCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgaWYgKHRvdWNoU3RhcnRYICsgNzUgPD0gdG91Y2hFbmRYKSB7XHJcbiAgICAgIHN3aXBlTWVudS5jbGFzc0xpc3QuYWRkKFwiYmxvZy1jb250ZW50X19tZW51LS1vcGVuXCIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgIH0gZWxzZSBpZiAodG91Y2hTdGFydFggLSA0MCA+PSB0b3VjaEVuZFgpIHtcclxuICAgICAgc3dpcGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nLWNvbnRlbnRfX21lbnUtLW9wZW5cIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZU1lbnVMaW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzd2lwZU1lbnVMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgc3dpcGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nLWNvbnRlbnRfX21lbnUtLW9wZW5cIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxudmFyIHdpbmRvd1dpZHRoID0gTWF0aC5tYXgoXHJcbiAgZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoLCBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxyXG4pO1xyXG5cclxuaWYgKHdpbmRvd1dpZHRoID4gNzY4KSB7XHJcbiAgZml4ZWRNZW51KCk7XHJcbn0gZWxzZSB7XHJcbiAgc3dpcGVNZW51KCk7XHJcbn1cclxuXHJcbi8vINCa0L3QvtC/0LrQsCDQv9GA0L7QutGA0YPRgtC60Lgg0LLQvdC40LcgKNGB0YLRgNC10LvQutCwINCy0L3QuNC3KVxyXG5mdW5jdGlvbiBhcnJvd0Rvd24oKSB7XHJcbiAgY29uc3QgYXJyb3dEb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2Fycm93LWRvd24tbGlua1wiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1iZ1wiKTtcclxuICBhcnJvd0Rvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaGVhZGVyLm5leHRFbGVtZW50U2libGluZy5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICBibG9jazogXCJzdGFydFwiXHJcbiAgICB9KVxyXG4gIH0pO1xyXG59XHJcblxyXG5hcnJvd0Rvd24oKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ })

/******/ });