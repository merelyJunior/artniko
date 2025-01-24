$(document).ready(function () {
  // Header show on scroll--------------------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $(".header-adaptive").addClass("h-v");
    } else {
      $(".header-adaptive").removeClass("h-v");
    }
  });
  // Block scroll--------------------------------------
  $('.navigation a[href^="#"]').click(function () {
    var scroll_el = $(this).attr("href");
    if ($(scroll_el).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 500);
      $("body").removeClass("lock");
    }
    return false;
  });
  $('.navigation-adaptive a[href^="#"]').click(function () {
    var scroll_el = $(this).attr("href");
    if ($(scroll_el).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 500);
      $("body").removeClass("lock");
    }
    $(".burger").removeClass("slide");
    $(".navigation-adaptive").slideToggle(300, function () {});
    return false;
  });
  // Burger menu--------------------------------------

  $(".burger").on("click", function () {
    $(".navigation-adaptive, .slide").slideToggle(300, function () {
      if ($(this).css("display") === "none") {
        $(".navigation-adaptive,.slide").addClass("selected");
        $("body").removeClass("lock");
        $(this).removeAttr("style");
      }
    });
  });
  $(".burger--closed").on("click", function () {
    $(".menu").slideToggle(500, function () {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });
  $(".burger").click(function (event) {
    $(".burger").toggleClass("slide");
    $("body").addClass("lock");
  });
  // Slider owl--------------------------------------
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    center: true,
    nav: true,
    navText: ["<img src='./img/Button1.png'>", "<img src='./img/Button2.png'>"],
    responsive: {
      0: {
        nav: false,
      },
      900: {
        nav: true,
      },
    },
  });
  //Popup gallery--------------------------------------
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  });
  //Price hide--------------------------------------
  // $("#price-body").readmore({
  //   maxHeight: 480,
  //   moreLink: '<a href="#">Посмотреть все услуги</a>',
  //   lessLink: '<a href="#">Скрыть</a>',
  // });
});

let menu = $(".burger");
let categories = $(".navigation-adaptive");
let close = $(".burger,.slide");
let bodyLock = $("body");
$(document).mouseup(function (e) {
  if (
    !menu.is(e.target) &&
    menu.has(e.target).length === 0 &&
    !categories.is(e.target) &&
    categories.has(e.target).length === 0
  ) {
    close.removeClass("slide");
    bodyLock.removeClass("lock");
    categories.removeAttr("style");
  }
});

