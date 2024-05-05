// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Мобильная навигация
// import mobileNav from "./modules/mobile-nav.js";
// mobileNav();

const swiper = new Swiper(".swiper1", {
  effect: "fade",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const trigger = document.querySelectorAll(".accordeon__triger");

trigger.forEach((i) => {
  i.addEventListener("click", () => {
    i.parentNode.classList.toggle("accordeon__item--active");
    i.parentNode.classList.toggle("accordeon__item--remove");
  });
});
