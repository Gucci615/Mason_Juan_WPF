//  Juan E. Mason 06/20/13
// Conditionals Industry
// Money to print & release the JAM Mix Tape CD

alert("Do we have enough money from investors to record, print and release the new JAM Mix Tape CD?");

var moneyJuan = prompt("How much money has Juan invested?",50)
	moneyMarlow = prompt("How much money has Marlow invested?",50)
	moneyJuanMom = prompt("How much money has Juan's Mom invested?",50)
	moneyJuanDad = prompt("How much money has Juan's Dad invested?",50)
	moneyMarlowMom = prompt("How much money has Marlow's Mom invested?",50)
	moneyOther = prompt("Any additional money invested?",0);
	
// Calc total of all money invested by investores	
var totalMoney = (parseInt(moneyJuan) + parseInt(moneyMarlow) + parseInt(moneyJuanMom) + parseInt(moneyJuanDad) + parseInt(moneyMarlowMom) + parseInt(moneyOther));
// Print total invested
console.log("The total amont invested is $" + totalMoney + ".");














