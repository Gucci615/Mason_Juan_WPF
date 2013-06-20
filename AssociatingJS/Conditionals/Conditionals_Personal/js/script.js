//Mason_Juan 06/19/13 Conditionals_Personal
//Time Spent Exercising

alert("My doctors want me to exercise 200 minutes and take in no more than 12000 calories per week to reduce my weight.");

// Prompt time spent on exercise per day.
var monTime = prompt("Enter the amount of time spent exercising Monday in minutes.", 10)
	tueTime = prompt("Enter the amount of time spent exercising Tuesday in minutes.", 10)
	wedTime = prompt("Enter the amount of time spent exercising Wednesday in minutes.", 10)
	thurTime = prompt("Enter the amount of time spent exercising Thursday in minutes.", 10)
	friTime = prompt("Enter the amount of time spent exercising Friday in minutes.", 10)
	satTime = prompt("Enter the amount of time spent exercising Saturday in minutes.", 10)
	sunTime = prompt("Enter the amount of time spent exercising Sunday in minutes.", 10)
	totalTime = (parseInt(monTime) + parseInt(tueTime) + parseInt(wedTime) + parseInt(thurTime) + parseInt(friTime) + parseInt(satTime) + parseInt(sunTime));
	
// Display total exercise time for the week.
console.log(totalTime);

//Prompt intake calories per day
var monCal = prompt("Enter the amount of calories ingested on Monday.", 2000)
	tueCal = prompt("Enter the amount of calories ingested on Tuesday.", 2000)
	wedCal = prompt("Enter the amount of calories ingested on Wedneday.", 2000)
	thurCal = prompt("Enter the amount of calories ingested onThursday.", 2000)
	friCal = prompt("Enter the amount of calories ingested on Friday.", 2000)
	satCal = prompt("Enter the amount of calories ingested on Saturday.", 2000)
	sunCal = prompt("Enter the amount of calories ingested on Sunday.", 2000)
	totalCal = (parseInt(monCal) + parseInt(tueCal) + parseInt(wedCal) + parseInt(thurCal) + parseInt(friCal) + parseInt(satCal) + parseInt(sunCal));

//Display calorie intake total for the week.	
console.log(totalCal);


//Compare total exercise time with goal.
if (totalTime > 200){console.log("You should be careful not to over do it!");
	}
else if (totalTime == 200){console.log("You are on the right track. Keep up the good work.");
	}
else {console.log("We have work to do! You need to increase your exercise time.");
	}

//Compare total intake calories with goal
if (totalCal <= 12000){console.log("Keep up the good work. You are on the right track with your calorie intake.");
	}
else{console.log("Stay focused! You need to cut your calorie intake.");
	}
	 
var totalWeek = (totalTime == 200 && totalCal <= 12000) ? "Grate job, you are on your way." : "We have some work to do.";










	











