'use strict';

import "./modules/example";

function yaMap() {
  ymaps.ready(init);
  
  const yandexMap = document.querySelector("#map");
  
  const placemarks = [
    {
      latitude: 54.765343,
      longitude: 56.052926,
      hintContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3',
      balloonContent: 'респ. Башкортостан, г. Уфа, ул. Юрия Гагарина, д. 3'
    }
  ]
  
  function init() {
    var map = new ymaps.Map(yandexMap, {
      center: [54.765343, 56.052926],
      zoom: 17,
      controls: ["zoomControl"],
      behaviors: ["drag"]
    });
  
    placemarks.forEach(function(obj) {
      var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
        hintContent: obj.hintContent,
        balloonContent: obj.balloonContent
      },
        {
          iconLayout: 'default#image',
          iconImageHref: './assets/images/map-marker.png',
          iconImageSize: [44, 60],
          iconImageOffset: [-22, -60]
        });
  
        map.geoObjects.add(placemark);
    });  
  }
  }

  yaMap();


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

// scroll-parallax
function scrollParallax() {
  const headerAvatar = document.querySelector(".header__avatar");
  const headerTitle = document.querySelector(".header__title");
  const headerText = document.querySelector(".header__text");

  window.addEventListener("scroll", function(event) {
    headerAvatar.style.transform = "translate3d(0, " + 
    -(window.pageYOffset * 0.2) + "px, 0)";
    headerTitle.style.transform = "translate3d(0, " + 
    -(window.pageYOffset * 0.15) + "px, 0)";
    headerText.style.transform = "translate3d(0, " + 
    -(window.pageYOffset * 0.1) + "px, 0)";
  });
}
scrollParallax();