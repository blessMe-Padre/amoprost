const initAboutSlider = () => {
  const sliderAbout = document.querySelector('.about__wrapper');

  if (sliderAbout) {
    let breakpoint = window.matchMedia('(min-width:1200px)');
    let swiper;

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {

        if (swiper !== undefined) {
          swiper.destroy(true, true);
        } return;

      } else if (breakpoint.matches === false) {
        // eslint-disable-next-line consistent-return
        return aboutSliderInit();
      }
    };

    const aboutSliderInit = function () {
      swiper = new Swiper(sliderAbout, {
        loop: true,
        spaceBetween: 10,
        init: true,
        slidesPerView: 1,
        breakpoints: {
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
        },

      });
    };

    breakpoint.addEventListener('change', breakpointChecker);
    breakpointChecker();
  }
};

export { initAboutSlider }
