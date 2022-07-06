const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2.7,
    spaceBetween:0,
    breakpoints: {

      320: {
        slidesPerView: 1.5,
        spaceBetween:100,
      }
    }
  });