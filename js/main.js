!function() {
/*	$max-mobile: 767px;
$min-tablet: 768px;
$max-tablet: 1024px;
$min-desktop: 1025px;*/
	function isMobile() {
		console.log('window width: ' + $(window).width());
		return $(window).width() < 1024;
	}



	var counter = $("#counter"),
	nowDate = new Date(),
	targetDate = new Date("May, 05, 2015"),
	nav = $('.nav'),
	navHeight = isMobile() ? 0 : nav.height(),
	openNavButton = $('#open-mobile-nav'),
	closeNavButton = $('#close-mobile-nav');

	smoothScroll.init({
	    speed: 500, // Integer. How fast to complete the scroll in milliseconds
	    easing: 'easeInOutCubic', // Easing pattern to use
	    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
	    offset: navHeight, // Integer. How far to offset the scrolling anchor location in pixels
	    callbackBefore: function ( toggle, anchor ) {
	    	console.log('callbackBefore');
	    	console.log(toggle);
	    	console.log(anchor);
	    }, // Function to run before scrolling
	    callbackAfter: function ( toggle, anchor ) {
	    	console.log('callbackAfter');
	    	console.log(toggle);
	    	console.log(anchor);
	    } // Function to run after scrolling
	});

	openNavButton.on('click', function(e) {
		nav.addClass('opened');
	});

	closeNavButton.on('click', function(e) {
		nav.removeClass('opened');
	});
}();
