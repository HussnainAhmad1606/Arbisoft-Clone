console.log("Slider Running");

// Slider at header
$('.slide').slick({
    infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});





// Testimonials section
$('.testimonials').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: 1000,
  dots: true,
  useCSS: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});