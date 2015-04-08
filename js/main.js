!function() {
	var counter = $("#counter"),
	nowDate = new Date(),
	targetDate = new Date("May, 05, 2015");

	/*var UNITS = countdown.MONTHS | countdown.DAYS | countdown.HOURS;

	setInterval(function(){
	    counter.html(countdown(nowDate,targetDate, UNITS).toString());
	  }, 1000);
*/
	/*counter.FlipClock(targetDate.getTime() - nowDate.getTime(), {
		autostart: true,
		clockFace: "DailyCounter",
		countdown: true
	});

	console.log(targetDate.toString());
	console.log(nowDate.toString());
	console.log(targetDate.getTime() - nowDate.getTime());
	console.log(targetDate.getDay(), nowDate.getDay());*/

	var navHeight = $('.nav').height();

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

	/*clock.setTime(targetDate.getTime() - nowDate.getTime());
	clock.start();
	console.log(targetDate.getTime());*/
}();
