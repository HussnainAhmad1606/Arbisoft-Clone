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






$('#relationshipsSlide').slick({
  centerMode: true,
  centerPadding: '10px',
  autoplay:true,
  arrows: true,
  prevArrow:"<i class='slick-prev fa-solid fa-arrow-right'></i>",
  nextArrow:"<img class='a-right control-c next slick-next'>",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});