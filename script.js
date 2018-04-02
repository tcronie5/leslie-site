//
//
// $(document).ready(function() {
//   $('body').addClass('js');
//   var $nav = $('nav'),
//       $hamburger = $('#hamburger'),
//       $overlay = $('#overlay'),
//       $menuItem = $('nav a');
//
//
//
//
//
//
//       if ($(window).width() < 800) {
//
// $hamburger.click(function() {
//   $overlay.show();
//   $overlay.toggleClass('open');
//   $hamburger.toggleClass('active');
//   $nav.toggleClass('active');
//   $menuItem.toggleClass('active-menu-item');
// //   return false;
// });
//
//   $menuItem.click(function() {
//     $overlay.hide();
//     $overlay.toggleClass('open');
//     $hamburger.toggleClass('active');
//     $nav.toggleClass('active');
//
//   })
// });
// }
//
// else{
//   return false;
// }
// });



$(document).ready(function() {
  var $nav = $('nav'),
      $hamburger = $('#hamburger'),
      $overlay = $('#overlay'),
      $menuItem = $('nav a');

  if ($(window).width() < 800) {
    $hamburger.click(function() {
      $overlay.show();
      $overlay.toggleClass('open');
      $hamburger.toggleClass('active');
      $nav.toggleClass('active');
      $menuItem.toggleClass('active-menu-item');
    });

    var $activeOverlay = $('#overlay.open');

      $menuItem.click(function() {
        $activeOverlay.hide();
        $overlay.removeClass('open');
        $hamburger.removeClass('active');
        $nav.removeClass('active');
      });

  }
 else {
    return false;
 }
});

// $(document).ready(function() {
//   var $nav = $('nav'),
//       $hamburger = $('#hamburger'),
//       $overlay = $('#overlay'),
//       $menuItem = $('nav a'),
//       $activeMenuItem = $('active-menu-item');
//
//
// $activeMenuItem.click(function() {
//   $hamburger.removeClass('active');
//   $nav.removeClass('active');
//   // $overlay.removeClass('open');
//   $overlay.hide();
//   $activeMenuItem.removeClass('active-menu-item');
//   return false;
// });


// });

// $activeMenu.click(function(){
//   $hamburger.toggleClass('active');
//   $nav.toggleClass('active');
//   $overlay.toggleClass('open');
//   $menuItem.toggleClass('toggle');
// })



$('.menu li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});








//Google Map
function initMap() {
  var uluru = {lat: 38.956457, lng: -77.083952};
  var image = {
    url: 'icons/blue-marker.png'
  };


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    }
]
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map,
  icon: image,
  scaledSize: new google.maps.Size(50, 50)


});

  // var marker = new google.maps.Marker({
  //   position: uluru,
  //   map: map
  // });



}

// Smooth Scroll jquery
$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 900);
      return false;
    }
  }
});
});








$(window).scroll(function() {
  var $contactInfo = $('.contact-info');

    if ($(this).scrollTop() > 2300) {

      $contactInfo.addClass('contact-scrolled');

    }else{

       $contactInfo.removeClass('contact-scrolled');
    }
    return false;
});


// $(window).scroll(function() {
//   var header = $(document).scrollTop();
//   var headerHeight = $("header").outerHeight();
//
//   if (header > headerHeight) {
//     $("header").addClass("fixed");
//   } else {
//     $("header").removeClass("fixed");
//   }
//   if ($(this).scrollTop() > 800){
//     $("header").addClass("in-view");
//   } else {
//     $("header").removeClass("in-view");
//   }
// });
