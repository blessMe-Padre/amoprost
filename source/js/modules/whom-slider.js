function initWhomSlider() {
  const sliderWhom = document.querySelector('.whom__slider');

  if (sliderWhom) {
    let breakpoint = window.matchMedia('(min-width:48.25em)');
    let swiper;

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {

        if (swiper !== undefined) {
          swiper.destroy(true, true);
        } return;

      } else if (breakpoint.matches === false) {
        // eslint-disable-next-line consistent-return
        return whomSliderInit();
      }
    };


    const whomSliderInit = function () {
      swiper = new Swiper(sliderWhom, {
        loop: true,
        spaceBetween: 20,
        init: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        },
      });
    };

    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
}

export { initWhomSlider };
