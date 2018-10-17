"use strict";

// bg video
function bgVideo() {
  var videoElement = document.getElementById('bg-video');

  var windowWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth
  );

  window.addEventListener("load", function (event) {
    if (windowWidth <= 768) {
      videoElement.setAttribute("controls", "controls");
      videoElement.setAttribute("muted", "muted");
      videoElement.controls = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.preload = "auto";
      videoElement.play();
      document.body.addEventListener("touchstart", function (event) {
        videoElement.play();
      });
      videoElement.addEventListener('loadeddata', function() {
        videoElement.play();
      });
      videoElement.addEventListener('canplaythrough', function() {
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

