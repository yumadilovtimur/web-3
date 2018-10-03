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