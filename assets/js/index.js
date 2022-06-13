const navbarArr = {
  mainNav: ["MAJOR APPLIANCES", "SMALL APPLIANCES", "SPECIAL PROJECTS"],
  nav1: ["Ovens", "Wine coolers", "Blast chillers", "Sinks", "Microwave ovens", "Taps", "Coffee machines", "Dishwashers", "Hobs", "Washing machines", "Cookers", "Cookers", "Hoods", "Tumble dryers", "Refrigerators", "Accessories", "Freezers "],

  nav3: ["Divina cucina", "Sicily is my love", "Refrigerator of Art", "SMEG500", "Mickey Mouse fridge", "Independent FAB", "Smeg & Coca-Cola"],
  nav2: ["Toasters", "Kettles", "Citrus juicers", "Milk frothers", "Stand mixers", "Blenders", "Hand blenders"],
};

$(document).ready(function () {
  // multi level navbar
  $('.product-nav-container').append(`
    <div class="nav-progress">product</div>
    <ul class="nav-list flex-space-between">
        <li class="nav-item nav-item-one product-nav-item-main">
            <div class="main-nav-one product_">
                <div class="main-nav-one-link"><a>PRODUCTS</a></div>
                <ul class="navbar-nav products-nav nav-second" role="list">
                    <li class="nav-item nav-item-second product-nav-item"><div class="main-nav-two-link"><a class="nav-link nav-second" href="https://www.smeg.com/large-appliances">Major appliances </a></div><div class="navbar-three"><ul id="navbar-three-target" role="list">${ navbarArr.nav1.map(a=>{return `<li class="nav-item nav-third"><a class="">${a}</a></li>`}).join('')} </ul></div></li>
                    <li class="nav-item nav-item-second aesthetic-nav-item"><div class="main-nav-two-link"><a class="nav-link nav-second" href="https://www.smeg.com/small-appliances">Small appliances </a></div><div class="navbar-three"><ul id="navbar-three-target2" role="list">${ navbarArr.nav2.map(a=>{return `<li class="nav-item nav-third"><a class="">${a}</a></li>`}).join('')} </ul></div></li>
                    <li class="nav-item nav-item-second inspiration-nav-item"><div class="main-nav-two-link"><a class="nav-link nav-second" href="https://www.smeg.com/special-project">Special projects </a></div><div class="navbar-three"><ul id="navbar-three-target3" role="list">${ navbarArr.nav3.map(a=>{return `<li class="nav-item nav-third"><a class="">${a}</a></li>`}).join('')} </ul></div></li>
                </ul>
            </div>
        </li>
        <li class="nav-item nav-item-one aesthetic-nav-item-main"><div class="main-nav-one aesthetic_"><div class="main-nav-one-link"><a>AESTHETIC LINES</a></div></div><div class="nav-level"></div></li>
        <li class="nav-item nav-item-one inspiration-nav-item-main"><div class="main-nav-one inspiration_"><div class="main-nav-one-link"><a>INSPIRATION</a></div></div><div class="nav-level"></div></li>
    </ul>
    `);
  // mobile menu event
  const menuBtn = $('.menu-btn');
  let menuOpen = false;
  var mainMenu = false;
  menuBtn.on('click', function (e) {
    if (!menuOpen) {
      $('.product-nav-container').addClass('open');
      menuOpen = true;
    } else {
      $('.product-nav-container').removeClass('open final-nav');
      $('.navbar-nav.nav-second').removeClass("last-nav-open");
      $('.nav-progress').removeClass('active-nav')
      menuBtn.removeClass('open');
      menuOpen = false;
    }
  })

  /* Swiper Slider for Products */
  var slider = new Swiper('.kettles-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    // allowTouchMove: true,
    loop: false,
    loopedSlides: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      activeIndexChange: function () {
        colorChange();
      }
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      768: {
        allowTouchMove: true,
      }
    },
  });

  var thumbs = new Swiper('.kettles-thumbs', {
    spaceBetween: 16,
    centeredSlides: true,
    slideToClickedSlide: true,
    allowTouchMove: false,
    observer: true,
    observeParents: true,
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;

  jQuery('body').on('click', '.kettles-thumbs .swiper-slide', function () {
    colorChange();
  });
  jQuery('body').on('click', '.hero-section .swiper-pagination-bullet', function () {
    colorChange();
  });

  function colorChange() {
    setTimeout(function () {
      var color = jQuery('.kettles-slider .swiper-slide.swiper-slide-active img').attr('data-color');
      var colorVal = jQuery('.kettles-slider .swiper-slide.swiper-slide-active img').attr('data-color-val');
      var url = "https://www.smeg.com/products/KLF03" + colorVal + "EU";
      var heroSection = jQuery('.hero-section');
      heroSection.removeClass('blue red pink beige');
      heroSection.addClass(color);
      jQuery('.btn-dark').attr('href', url);
    }, 100)
  }

  jQuery('body').on('click', '.music-btn a', function () {
    jQuery('body').addClass('modal-loaded');
  });

  jQuery('body').on('click', '.close', function () {
    jQuery('body').removeClass('modal-loaded');
  });


  // desktop nav
  $(".main-nav-one.product ").on('click', function () {
    if (!mainMenu) {
      $('.product-nav-container').addClass("open");
    } else {
      $('.product-nav-container').removeClass("open");
      $('.navbar-nav.nav-second').removeClass("last-nav-open");
      $('.nav-progress').removeClass('active-nav');
    }
  });

  $('.navbar-nav.nav-second.products-nav > .nav-item.nav-item-second').on('click', function (e) {
    $(this).siblings().find('.navbar-three').removeClass('show-nav-three');
    if (!$(this).hasClass('open')) {
      $(this).find('.navbar-three').addClass('show-nav-three');
    } else {
      $(this).find('.navbar-three').removeClass('show-nav-three');
    }
    $(this).siblings().removeClass('show-nav-three');
    $(this).toggleClass('open');
  });

  $('.nav-item.nav-item-one').on('click', function (e) {
    let activeText = $(this).find('.main-nav-one-link').text();
    $('.nav-progress').addClass('active-nav').text(activeText);
    $(this).find('.navbar-nav.nav-second').addClass("last-nav-open");
    $('.product-nav-container').addClass("final-nav");
  })
  // mouse over
  $(".main-nav-one.product").on('mouseover', function () {
    setTimeout(() => {
      $('.product-nav-container').addClass('open');
    }, 200);
  });
  $(".product-nav-container").on('mouseover', function () {
    $('.product-nav-container').addClass('open');
  });
  $(".product-nav-container").on('mouseout', function () {
    $('.product-nav-container').removeClass('open');
  });
  // mouse out
  $(".main-nav-one.product").on('mouseout', function (e) {
    if (!$('.product-nav-container').hasClass('open')) {
      $(".product-nav-container").on('mouseout', function () {
        $('.product-nav-container').removeClass('open');
      });
    }
  });
});