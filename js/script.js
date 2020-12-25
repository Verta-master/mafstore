//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--close');
  $('.menu__list').slideToggle();
})

if (window.innerWidth < 1200) {
  $('.menu__open').click(function() {
    $('.menu__dropdown').slideToggle();
  });
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  });
}
