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



let tabcontent = document.getElementsByClassName("tablinks");

tabcontent[0].click();
console.log(tabcontent)


function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");

  tabcontent[0].click();
  console.log(tabcontent)
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}








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