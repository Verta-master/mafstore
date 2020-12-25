var breakpoint = window.matchMedia('(min-width: 1200px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.catalog__slider', {
    navigation: {
      nextEl: '.catalog__next',
      prevEl: '.catalog__prev',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      766: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
