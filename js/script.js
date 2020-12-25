//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--close');
  $('.menu__list').slideToggle();
})

if (window.innerWidth < 1200) {
  $('.menu__catalog').click(function() {
    event.preventDefault();
    $('.menu__dropdown').slideToggle();
  });
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  });
}

if (window.innerWidth < 1022) {
  $('.header__call').click(function() {
    $('.header__contacts').slideToggle();
  });
}

if (window.innerWidth < 766) {
  $('.header__search-btn').click(function() {
    $('.header__drop').slideToggle();
  });
}
