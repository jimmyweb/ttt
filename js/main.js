!function() {
	var counter = $("#counter"),
	nowDate = new Date(),
	targetDate = new Date("May, 05, 2015");

	/*var UNITS = countdown.MONTHS | countdown.DAYS | countdown.HOURS;

	setInterval(function(){
	    counter.html(countdown(nowDate,targetDate, UNITS).toString());
	  }, 1000);
*/
	counter.FlipClock(targetDate.getTime() - nowDate.getTime(), {
		autostart: true,
		clockFace: "DailyCounter",
		countdown: true
	});

	console.log(targetDate.toString());
	console.log(nowDate.toString());
	console.log(targetDate.getTime() - nowDate.getTime());
	console.log(targetDate.getDay(), nowDate.getDay());

	/*clock.setTime(targetDate.getTime() - nowDate.getTime());
	clock.start();
	console.log(targetDate.getTime());*/
}();
