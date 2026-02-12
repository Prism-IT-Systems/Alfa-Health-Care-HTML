jQuery(document).ready(function () {
  jQuery('.testimonials-slider').slick({
    slidesToShow: 3,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nav:true,
    speed: 300,
    appendArrows: jQuery('.slider-arrows'),

   responsive: [
    {
      breakpoint: 1280,   // Tablet
      settings: {
        slidesToShow: 2,
        arrows: false,
        autoplay: true
      }
    },
    {
      breakpoint: 1024,   // Tablet
      settings: {
        slidesToShow: 2,
        arrows: false,
        autoplay: true
      }
    },
    {
      breakpoint: 768,    // Mobile
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true
      }
    }
  ]
  });
});


