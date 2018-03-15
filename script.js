$(document).ready(function() {
  $('body').addClass('js');
  var $nav = $('nav'),
      $hamburger = $('#hamburger'),
      $overlay = $('#overlay'),
      $item = $('.menu-item');


$hamburger.click(function() {
  $hamburger.toggleClass('active');
  $nav.toggleClass('active');
  $overlay.toggleClass('open');
  $item.toggleClass('toggle');
  return false;
});


});



$('.menu li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

//
// $('.menu-item  .toggle').on('click', function(){
//     $(this).removeClass('toggle');
//     // $('#overlay').removeClass('open');
//     // $('#hamburger').removeClass('active');
    // $('nav').removeClass('active');

$(document).ready(function() {
  $(this).removeClass();
  var $nav = $('nav'),
      $hamburger = $('#hamburger'),
      $overlay = $('#overlay'),
      $item = $('.menu-item');


$item.click(function() {
  $hamburger.removeClass('active');
  $nav.removeClass('active');
  $overlay.removeClass('open');
  $item.removeClass('toggle');
  return false;
});


});












//Google Map
function initMap() {
  var uluru = {lat: 38.956457, lng: -77.083952};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

//Smooth Scroll jquery
$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});




$(window).scroll(function() {
  var $header = $('#header');

    if ($(this).scrollTop() > 100) {

      $header.addClass('header-scrolled');

    }else{

       $header.removeClass('header-scrolled');

    }
    return false;
});
