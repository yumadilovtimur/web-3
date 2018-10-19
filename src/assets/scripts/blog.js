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



// Фиксация навигации по блогу
function fixedMenu() {
  const menuAside = document.querySelector(".blog-content__menu");
  const menuList = document.querySelector(".blog-content__menu-list");
  const menuLinks = document.querySelectorAll(".blog-content__link");
  const blogArticles = document.querySelectorAll(".blog-content__article");

  function setArticleActive() {
    function setActive(article) {
      for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.remove("blog-content__link--active");
      }

      for (let i = 0; i < menuLinks.length; i++) {
        if (menuLinks[i].getAttribute("href") == "#" + article.getAttribute("id")) {
          menuLinks[i].classList.add("blog-content__link--active");
        }
      }
    }

    if (window.pageYOffset < blogArticles[0].getBoundingClientRect().top + window.pageYOffset) {
      setActive(blogArticles[0]);
    } else if (window.pageYOffset + document.documentElement.scrollHeight === document.body.offsetHeight) {
      setActive(blogArticles[blogArticles.length - 1]);
    } else {
      for (let i = 0; i < blogArticles.length; ++i) {
        const elemTop = blogArticles[i].getBoundingClientRect().top + window.pageYOffset;
        if (window.pageYOffset > elemTop - 100) {
          setActive(blogArticles[i]);
        }
      }
    }
  }

  function setArticleChords() {
    const elemChords = menuAside.getBoundingClientRect().top + window.pageYOffset;

    if (window.pageYOffset >= elemChords - 30) {
      menuList.style.position = "fixed";
      menuList.style.top = "30px";
      menuList.style.width = getComputedStyle(menuAside).width;
    } else {
      menuList.style.position = "static";
      menuList.style.top = "";
      menuList.style.width = "auto";
    }
  }

  window.addEventListener("scroll", function () {
    setArticleChords();
    setArticleActive();
  });

  setArticleChords();
  setArticleActive();
}

// Выпадание навигации по блогу по свайпу и клику
function swipeMenu() {
  const swipeMenuButton = document.querySelector(".blog-content__btn-menu-open");
  const swipeMenu = document.querySelector(".blog-content__menu");
  const swipeMenuLink = document.querySelectorAll(".blog-content__link");
  let touchStartX = undefined;
  let touchEndX = undefined;

  swipeMenuButton.addEventListener("click", function (event) {
    swipeMenu.classList.toggle("blog-content__menu--open");
    if (getComputedStyle(document.body).overflow != "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });

  document.body.addEventListener("touchstart", function (event) {
    if (swipeMenu.classList.contains("blog-content__menu--open") || event.touches[0].pageX <= windowWidth / 4) {
      touchStartX = event.touches[0].pageX;
    } else {
      touchStartX = undefined;
    }
  });

  document.body.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].pageX;
    if (touchStartX + 75 <= touchEndX) {
      swipeMenu.classList.add("blog-content__menu--open");
      document.body.style.overflow = "hidden";
    } else if (touchStartX - 40 >= touchEndX) {
      swipeMenu.classList.remove("blog-content__menu--open");
      document.body.style.overflow = "visible";
    }
  });

  for (let i = 0; i < swipeMenuLink.length; i++) {
    swipeMenuLink[i].addEventListener("click", function (event) {
      swipeMenu.classList.remove("blog-content__menu--open");
      document.body.style.overflow = "visible";
    });
  }
}

var windowWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth
);

if (windowWidth > 768) {
  fixedMenu();
} else {
  swipeMenu();
}

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