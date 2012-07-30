/* Author: jchine

*/
// remap jQuery to $
(function($){})(window.jQuery);

$ = jQuery.noConflict();

/** @function checkWidth
	@description shows the menu when window size is mobile size (480px) 
*/
$.checkWith = function () {
	// Get the height of the div and set it in a variable called mabileNavHeight to access later	
	var mobileNavHeight = $('#mobile').height() + 'px'; //  !important
	var $site = $('#site');
	var $window = $(window);
	
	// Check to see if the browser width is less than 480px wide
	if ($window.width() < 481) {
		$site.css({
			// Change the CSS top value of #site to whatever mobileNavHeight outputs					  
			'top' : mobileNavHeight,
		});
		// Scroll the window the height of mobileNavHeight [animation set at 0 to hide the navigation immediately]
		$('html, body').animate({
			scrollTop: $site.offset().top
		}, 0, function () {
			window.location.hash = '#site';
		});
	}

	// Check to see if the browser width is more than 480px wide
	else if ($window.width() > 480) {
		$site.css({
			// Make sure the top value of #site is 0 so we don't see the space for the mobile nav
			top: 0 + 'px'
		});
		// Scroll to the absolute top of the page
		$window.scrollTop(0); //no need for $.animate, on desktop browser it works just fine
	}
};

/* trigger when page is ready */
$(document).ready(function (){

	// your functions go here
	/** @section Pull Down for Navigation in Mobile Screen
	*/
	$.checkWith();	
	/* @end section */
	
});


/* optional triggers

$(window).load(function() {

});
*/
$(window).resize(function() {
	/** @section Pull Down for Navigation in Mobile Screen
	*/
	$.checkWith();	
	/* @end section */
});