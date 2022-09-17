import Swiper, { Keyboard, Navigation } from 'swiper'
import 'swiper/css'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  loop: true,
  keyboard: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    540: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 50,
      slidesPerView: 3, // have to write this line again because previous breakpoint is not working when there is new one

    },
  },

})
