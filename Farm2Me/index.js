// Magic. Do not alter.
//UI/UX Functionality only. add new file for server / backend interaction 


$('svg.navbar__icons--search').on('click', function() {
  alert('hey')
  $(this).hasClass('fa-search') ? $(this).removeClass('fa-search').addClass('fas-times') : $(this).removeClass('fas-times').addClass('fa-search');
  
})

// Left Slidebar controls
$( '.mobile-nav__toggle' ).on( 'click', function ( event ) {
  event.stopPropagation();
  //alert('a Click! ' + $('#mobile-nav-container').css('width'));
  $('#everythng-other-than-mobile-header').toggle()
  $('#mobile-nav-container').css('width') == '0px' ? $('#mobile-nav-container').css('width', '100%') : $('#mobile-nav-container').css('width', '0px')
} );


$('.mobile-nav__category__name').on('click', function() {
  $(this).children('svg').hasClass('fa-chevron-down') ? $(this).children('svg').removeClass('fa-chevron-down').addClass('fa-chevron-up') : $(this).children('svg').removeClass('fa-chevron-up').addClass('fa-chevron-down') 
})



//Category slider
$('#categories').slick({
  infinite: true,
  slidesToShow: 15,
  slidesToScroll: 4,
  arrows: true,
  nextArrow: $('.categories-slider-container .slider-controls__next'),
  prevArrow: $('.categories-slider-container .slider-controls__prev'),
  responsive: [
    {
      breakpoint: 1340,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 3,
        infinite: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,

      }
    }]
});

// Replaces with spaces the braces in cases where braces in places cause stasis 
  // $str = str_replace(array("\{","\}")," ",$str);


$('#subcategories').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: true,
  nextArrow: $('.subcategories-slider-container .slider-controls__next i'),
  prevArrow: $('.subcategories-slider-container .slider-controls__prev i'),
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,

      }
    }]
});

$('#main-slider').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: $('.main-slider-container .slider-controls__next'),
  prevArrow: $('.main-slider-container .slider-controls__prev')

});




$(".right").on("click", function() {
  var cart_amount = parseInt($('#cart-amount').text());

  var product_count = parseInt(
    $(this)
    .parent()
    .siblings(".product-tile__tinter")
    .children(".product-tile__incrementer")
    .children(".product-count")
    .text()
  );
  $(this)
    .parent()
    .siblings(".product-tile__tinter")
    .children(".product-tile__incrementer")
    .children(".product-count")
    .text(product_count + 1);
  $('#cart-amount').text(cart_amount+1);

  if (!$(this).hasClass("right-increment-btn-active")) {
    $(this)
      .parent()
      .siblings(".product-tile__tinter")
      .css({
      opacity: "1",
      "background-color": "rgba(0,0,0, 0.4)"
    });

    $(this)
      .parent(".incrementer-btn-container")
      .css({
      width: "100%"
    });
    $(this).addClass("right-increment-btn-active");
    $(this)
      .siblings(".left")
      .css({
      width: "50%",
      display: "inline"
    });
  }
});

$(".left").on("click", function() {
  var cart_amount = parseInt($('#cart-amount').text());
  var product_count = parseInt(
    $(this)
    .parent()
    .siblings(".product-tile__tinter")
    .children(".product-tile__incrementer")
    .children(".product-count")
    .text()
  );
  $(this)
    .parent()
    .siblings(".product-tile__tinter")
    .children(".product-tile__incrementer")
    .children(".product-count")
    .text(product_count - 1);
  $('#cart-amount').text(cart_amount-1);
  if (
    $(this)
    .parent()
    .siblings(".product-tile__tinter")
    .children(".product-tile__incrementer")
    .children(".product-count")
    .text() == "0"
  ) {
    $(this)
      .parent()
      .siblings(".product-tile__tinter")
      .css({
      opacity: "0",
      "background-color": "rgba(0,0,0, 0)"
    });

    $(this).css({
      width: "0",
      display: "none"
    });
    $(this)
      .siblings(".right")
      .removeClass("right-increment-btn-active");
    $(this)
      .parent(".incrementer-btn-container")
      .css({
      width: "50%"
    });
  }
});

$("#footer .section h5").click(function() {
  $('html, body').animate({
    scrollTop: $(this).offset().top
}, 1000);
 
});

$('#jump-top').on('click', function() {
   $('html, body').animate({
        scrollTop: 0
    }, 500);
})
//Exception up = new Exception("Something is really wrong.");
//throw up;  ha ha



/* 
Change eperience cookie function
*/

function changeExp() {
  var current_location = document.URL;
  /*var last_visited_url = document.cookie.split(';').filter(function(item) {
    return item.indexOf('last_visited_url=') >= 0
})*/

  document.cookie = 'last_visited_url=' + current_location;
  console.log('after:', document.cookie);
  //window.location.replace('https://freecodecamp.org')

}

$('.change-exp').on('click', function() {
  console.log($(this).attr('data-exp'), document.cookie)
  changeExp();

})




// 
// Dear maintainer:
// 
// Once you are done trying to 'optimize' this routine,
// and have realized what a terrible mistake that was,
// please increment the following counter as a warning
// to the next guy:
// 
// total_hours_wasted_here = 42
// 
//acknowledgements: https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered