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
  arrowDownButton.addEventListener("click", function (event) {
    event.preventDefault();
    header.nextElementSibling.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  });
}

arrowDown();

// works-slider
function worksSlider() {
  const leftButton = document.querySelector(".works__btn-left");
  const rightButton = document.querySelector(".works__btn-right");
  const sliderContainer = document.querySelector(".works__slider-container");
  const scroller = document.querySelector(".works__slider-scroller");
  const sliderItems = document.querySelectorAll(".works__slider-item-container");
  const buttonsPagination = document.querySelectorAll(".works__btn-pagintaion");
  const swipeEventContainer = document.querySelector(".works");

  let touchStartX = undefined;
  let touchEndX = undefined;

  let containerWidth = sliderContainer.clientWidth;

  function paginationAnimation() {
    scroller.addEventListener("transitionend", function (event) {
      for (let i = 0; i < buttonsPagination.length; i++) {
        buttonsPagination[i].classList.remove("works__btn-pagintaion--active");
        if (i + 1 == -parseInt(getComputedStyle(scroller).left) / containerWidth + 1) {
          buttonsPagination[i].classList.add("works__btn-pagintaion--active");
        }
      }
    });
  }

    rightButton.addEventListener("click", function pressRightButton(event) {
      if (parseInt(getComputedStyle(scroller).left) != -(sliderItems.length * containerWidth - containerWidth)) {
        scroller.style.left = parseInt(getComputedStyle(scroller).left) - containerWidth + "px";
      } else if (parseInt(getComputedStyle(scroller).left) < -(sliderItems.length * containerWidth - containerWidth)) {
        scroller.style.left = 0;
      }
      else {
        scroller.style.left = 0;
      }
      paginationAnimation();
    });

    leftButton.addEventListener("click", function pressLeftButton(event) {
      if (parseInt(getComputedStyle(scroller).left) != 0) {
        scroller.style.left = parseInt(getComputedStyle(scroller).left) + containerWidth + "px";
      } else if (parseInt(getComputedStyle(scroller).left) > 0) {
        scroller.style.left = -(sliderItems.length * containerWidth - containerWidth) + "px";
      } else {
        scroller.style.left = -(sliderItems.length * containerWidth - containerWidth) + "px";
      }
      paginationAnimation();
    });

    swipeEventContainer.addEventListener("touchstart", function swipeStart(event) {
      touchStartX = event.touches[0].pageX;
    });

    swipeEventContainer.addEventListener("touchend", function swipeEnd(event) {
      touchEndX = event.changedTouches[0].pageX;
      if (touchStartX + 50 <= touchEndX) {
        if (parseInt(getComputedStyle(scroller).left) != 0) {
          scroller.style.left = parseInt(getComputedStyle(scroller).left) + containerWidth + "px";
        } else {
          scroller.style.left = -(sliderItems.length * containerWidth - containerWidth) + "px";
        }
        paginationAnimation();
      } else if (touchStartX - 50 >= touchEndX) {
        if (parseInt(getComputedStyle(scroller).left) != -(sliderItems.length * containerWidth - containerWidth)) {
          scroller.style.left = parseInt(getComputedStyle(scroller).left) - containerWidth + "px";
        } else {
          scroller.style.left = 0;
        }
        paginationAnimation();
      }
    });

  for (let i = 0; i < buttonsPagination.length; i++) {
    buttonsPagination[i].addEventListener("click", function (event) {
      for (let i = 0; i < buttonsPagination.length; i++) {
        buttonsPagination[i].classList.remove("works__btn-pagintaion--active");
      }
      buttonsPagination[i].classList.add("works__btn-pagintaion--active");
      scroller.style.left = (i + 1) * (-containerWidth) + containerWidth + "px";
    });
  }
}

worksSlider();

// scroll-parallax
function scrollParallax() {
  const headerAvatar = document.querySelector(".header__avatar");
  const headerTitle = document.querySelector(".header__title");
  const headerText = document.querySelector(".header__text");

  window.addEventListener("scroll", function (event) {
    headerAvatar.style.transform = "translate3d(0, " +
      -(window.pageYOffset * 0.2) + "px, 0)";
    headerTitle.style.transform = "translate3d(0, " +
      -(window.pageYOffset * 0.15) + "px, 0)";
    headerText.style.transform = "translate3d(0, " +
      -(window.pageYOffset * 0.1) + "px, 0)";
  });
}
scrollParallax();