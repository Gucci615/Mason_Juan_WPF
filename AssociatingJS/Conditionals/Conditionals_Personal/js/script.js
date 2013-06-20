//Mason_Juan 06/19/13 Conditionals_Personal
//Time Spent Exercising

// Prompt time spent on exercise per day.
var monTime = prompt("Enter the amount of time spent exercising Monday in minutes.", 10)
	tueTime = prompt("Enter the amount of time spent exercising Tuesday in minutes.", 10)
	wedTime = prompt("Enter the amount of time spent exercising Wednesday in minutes.", 10)
	thurTime = prompt("Enter the amount of time spent exercising Thursday in minutes.", 10)
	friTime = prompt("Enter the amount of time spent exercising Friday in minutes.", 10)
	satTime = prompt("Enter the amount of time spent exercising Saturday in minutes.", 10)
	sunTime = prompt("Enter the amount of time spent exercising Sunday in minutes.", 10)
	totalTime = (parseInt(monTime) + parseInt(tueTime) + parseInt(wedTime) + parseInt(thurTime) + parseInt(friTime) + parseInt(satTime) + parseInt(sunTime));
	
// Display total exercise time for the week
console.log(totalTime);

	











