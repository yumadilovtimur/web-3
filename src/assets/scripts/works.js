'use strict';

// Раскрывающаяся навигация
function hamburgerMenu() {

  const hambMenuOpenBtn = document.querySelector(".header__menu-btn");
  const hambMenuOpenBtnElement = document.querySelectorAll(".header__menu-btn-element");

  const hambmenu = document.querySelector(".hambmenu");
  const menuLink = document.querySelectorAll(".hambmenu__link");

  const menuAside = document.querySelector(".blog-content__menu")

  hambMenuOpenBtn.addEventListener("click", function (event) {

    if (hambMenuOpenBtn.classList.contains("header__menu-btn--close")) {
      hambMenuOpenBtn.classList.remove("header__menu-btn--close");
      for (let i = 0; i < hambMenuOpenBtnElement.length; i++) {
        hambMenuOpenBtnElement[i].classList.remove("header__menu-btn-element--close");
      }
      document.body.style.overflow = "visible";
      hambmenu.style.opacity = 0;
      hambmenu.style.transform = "translateX(100%)";
    }
    else {
      hambMenuOpenBtn.classList.add("header__menu-btn--close");
      for (let i = 0; i < hambMenuOpenBtnElement.length; i++) {
        hambMenuOpenBtnElement[i].classList.add("header__menu-btn-element--close");
      }
      document.body.style.overflow = "hidden";
      hambmenu.style.opacity = 1;
      hambmenu.style.transform = "translateX(0)";
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

// Кнопка прокрутки вниз (стрелка вниз)
function arrowDown() {
  const arrowDownButton = document.querySelector(".header__arrow-down-link");
  const header = document.querySelector(".header-bg");
  arrowDownButton.addEventListener("click", function(event) {
    event.preventDefault();
    header.nextElementSibling.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  });
}

arrowDown();