/*================================================
                    SERVICES
===================================================*/
$(function () {
    //Animate on scroll, wow.js
    new WOW().init();
});

/*================================================
                    TEAM
===================================================*/
$(function(){
	$("#team-members").owlCarousel({
		items:3,
		autoplay: true,
		smartSpeed: 700,
		loop: true
	});
});



/*================================================
                    GALLERY
===================================================*/
$(document).ready(function() {
	$('#gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});





/*================================================
                    CLIENTS
===================================================*/
$(function (){
	$("#clients-list").owlCarousel({
		items:3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},

			480 : {
				items: 3
			},

			768: {
				items: 5
			},

			992: {
				items: 6
			}

		}
	});
});

/*================================================
                    TESTIMONIALS
===================================================*/
$(function (){
	$("#customers-testimonials").owlCarousel({
		items:1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});



/*================================================
                    STATS
===================================================*/
/*
$(function(){
	$(".counter").counterUp({
		delay:10,
		time:1000
	});
});
*/


/*=====================================*/
// Close mobile menu on click
$(function (){
	$(".navbar-collapse ul li a").on("click touch", function(){
		$(".navbar-toggle").click();
	});
});