// Juan E. Mason 06/20/13
// Conditionals Wacky
//What type of gamer are you?

alert("What type of gamer are you?");

// Game system arra
var gameArray = new Array ("PS 3",  "Xbox 360", "Computer", "Cell Phone, Other");
	
//What game system used	
var systemName = prompt("What system to you play games on the most? \n PS 3 \n Xbox 360 \n Computer\n Cell Phone \n Other...", (gameArray[3]));

//Type of games played most

var gameType = prompt("Select the number for the type of games you like the mosr\n 0 Shooter \n 1 Fighting \n 2 Sports \n 3 Strategy", 3);
var gameTypeArray = new Array ("Shooter" , "Fighting" , "Sports" , "Strategy");
	gameTypeArray[0] = ("Call of Duty, Sniper, and Battlefield");
	gameTypeArray[1] = ("Injustice, WWE, UFC, and Tekken");
	gameTypeArray[2] = ("Madden, NBA 2K, FIFA Soccer, NHL, and MLB");
	gameTypeArray[3] = ("XCOM, R.U.S.E., Command & Conquer, and Greed Corp");
console.log("Based on your selection, you may like such game titles as:" + gameTypeArray[gameType] + ".");
	




