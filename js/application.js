$(document).ready(function() {
	"use strict";

/******************** NAVBAR ********************/
var animationProp = $('.navbar-nemo'); //Navbar wraper


/******************** NAVBAR APPEAR ON SCROLL ********************/
if( animationProp.hasClass('appear-onscroll') ) {
   $(document).scroll(function() {
      var scrollPos = $(this).scrollTop();

      if( scrollPos > 150 ) {
         animationProp.removeClass('appear-onscroll');
      } else {
         animationProp.addClass('appear-onscroll');
      }
   });
}

/******************** ONE PAGE NAVIGATION ********************/
$('.navbar-nav').onePageNav({
   currentClass: 'active',
   scrollOffset: 74
});


/******************** NAVBAR COLLAPSE ON CLICK ********************/
$('.navbar-nav').on('click', 'a', function(event) {
   /* Act on the event */
   $('.navbar-collapse').collapse('hide');
});


});