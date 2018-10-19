"use strict";

var windowWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth
);

var windowHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight
);

// bg video
function bgVideo() {
  var videoElement = document.getElementById('bg-video');

  var windowWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth
  );

  window.addEventListener("load", function (event) {
    if (windowWidth <= 768) {
      videoElement.setAttribute("muted", "muted");
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.preload = "auto";
      videoElement.play();

      videoElement.addEventListener('loadeddata', function() {
        videoElement.play();
      });
      videoElement.addEventListener('canplaythrough', function() {
        videoElement.play();
      });
      videoElement.addEventListener('canplay', function() {
        videoElement.play();
      });
    }
  });
}
bgVideo();

// 3D card
function card3D() {
  const btnOpen = document.querySelector(".intro__btn-autorization");
  const frontCard = document.querySelector(".about__front");
  const backCard = document.querySelector(".about__back");
  const btnOnIndex = document.querySelector(".about__link-on-intro");

  btnOpen.addEventListener("click", function (event) {
    frontCard.classList.toggle("about__front--rotate");
    backCard.classList.toggle("about__back--rotate");
    if (frontCard.classList.contains("about__front--rotate") && backCard.classList.contains("about__back--rotate")) {
      event.target.textContent = "На главную";
    } else {
      event.target.textContent = "Авторизоваться";
    }
  });

  btnOnIndex.addEventListener("click", function (event) {
    btnOpen.textContent = "Авторизоваться";
    frontCard.classList.remove("about__front--rotate");
    backCard.classList.remove("about__back--rotate");
  });
}
card3D();

// parallax mousemove
function parallaxMove() {
  const backgroundIntro = document.querySelector(".bg-intro");
  const parallaxItem = document.querySelector(".bg-intro__container");
  const parallaxImage = document.querySelector(".bg-intro__img");

  window.addEventListener("mousemove", function(event) {
    const centerX = (windowWidth / 2) - event.pageX;
    const centerY = (windowHeight / 2) - event.pageY;

    const positionX = centerX * 0.03;
    const positionY = centerY * 0.03;
    const bottomPosition = (windowHeight / 2) * 0.03;

    parallaxItem.style.bottom = -bottomPosition + "px";

    parallaxItem.style.transform = `translate(${positionX}px, ${positionY}px)`;
  });
}

if (windowWidth > 768) {
  parallaxMove();
}