'use strict';

// Раскрывающаяся навигация
function hamburgerMenu() {

  const hambMenuOpenBtn = document.querySelector(".header__menu-btn");
  const hambMenuOpenBtnElement = document.querySelectorAll(".header__menu-btn-element");

  const hambmenu = document.querySelector(".hambmenu");
  const menuLink = document.querySelectorAll(".hambmenu__link");

  function displayNone() {
    hambmenu.style.display = "none";
  }

  hambMenuOpenBtn.addEventListener("click", function (event) {
    if (!event.target.classList.contains("header__menu-btn--close")) {
      hambMenuOpenBtn.classList.add("header__menu-btn--close");
      for (let i = 0; i < hambMenuOpenBtnElement.length; i++) {
        hambMenuOpenBtnElement[i].classList.add("header__menu-btn-element--close");
      }
      hambmenu.style.display = "block";
      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity + 1;
      document.body.style.overflow = "hidden";
    }
    else {
      hambMenuOpenBtn.classList.remove("header__menu-btn--close");
      for (let i = 0; i < hambMenuOpenBtnElement.length; i++) {
        hambMenuOpenBtnElement[i].classList.remove("header__menu-btn-element--close");
      }
      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;
      document.body.style.overflow = "visible";
      setTimeout(displayNone, 600);
    }
  });

  for (let i = 0; i < menuLink.length; ++i) {
    menuLink[i].addEventListener("click", function () {
      hambMenuOpenBtn.classList.remove("header__menu-btn--close");
      for (let i = 0; i < hambMenuOpenBtnElement.length; i++) {
        hambMenuOpenBtnElement[i].classList.remove("header__menu-btn-element--close");
      }
      hambmenu.style.opacity = getComputedStyle(hambmenu).opacity - 1;
      document.body.style.overflow = "visible";
      setTimeout(displayNone, 600);
    });
  }

}
hamburgerMenu();