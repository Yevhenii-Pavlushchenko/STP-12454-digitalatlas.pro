import Swiper from 'swiper';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('[data-slider]', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  initialSlide: 0,

  breakpoints: {
    1440: {
      enabled: false,
    },
  },
});
