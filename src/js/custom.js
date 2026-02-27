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


$(document).ready(function () {

  // Open first by default
  $(".accordion-item:first")
    .addClass("active")
    .find(".accordion-content")
    .slideDown(300);
  $(".accordion-item:first .accordion-icon").text("−");

  $(".accordion-btn").click(function () {
    var item = $(this).closest(".accordion-item");

    if (item.hasClass("active")) {
      item.removeClass("active");
      item.find(".accordion-content").slideUp(300);
      item.find(".accordion-icon").text("+");
    } else {
      $(".accordion-item").removeClass("active");
      $(".accordion-content").slideUp(300);
      $(".accordion-icon").text("+");

      item.addClass("active");
      item.find(".accordion-content").slideDown(300);
      item.find(".accordion-icon").text("−");
    }
  });

});