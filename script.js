$(document).ready(function () {
    $(window).scroll(function () {
      // Sticky navbar on scroll script
      if ($(this).scrollTop() > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // Scroll-up button show/hide script
      if ($(this).scrollTop() > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // Slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 }, "slow");
      // Removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // Smooth scroll on Menu Items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // Toggle Navbar
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // Typing Text Animation
    var typed = new Typed(".typing", {
        strings: [
          "Java Programmer",
          "FrontEnd Developer",
          "Software Developer",
          "Fullstack Developer"
        ],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
      });
    
      var typed = new Typed(".typing-2", {
        strings: [
          "Java Programmer",
          "FrontEnd Developer",
          "Software Developer",
          "Fullstack Developer"
          
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
  
    // Owl Carousel
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  