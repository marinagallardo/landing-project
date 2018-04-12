$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      singleItem: true,
      items: 1,
      animateIn: 'fadeIn',
      dots: true,
      animateOut: 'fadeOut',
      autoplay: true,
      loop: true,
      lazyLoad: true
  });
});
