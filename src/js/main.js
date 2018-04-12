$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      singleItem: true,
      items: 1,
      dots: true,
      animateOut: 'fadeOut',
      lazyLoad: true
  });
});

$('.burguer').click(function(){
  $(document.body).addClass('has-overlay');
  $('.header__nav-opened').addClass('is-open');
})

$('.button-close').click(function(){
  $(document.body).removeClass('has-overlay');
  $('.header__nav-opened').removeClass('is-open');
})
