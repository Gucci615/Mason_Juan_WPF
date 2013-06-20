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

var cdNumber = prompt("Enter the muber is CDs times 100.",1)
	cdCoverNumber = prompt("Enter the muber is CD Covers.",(cdNumber * 100))
	cdJewelCase = prompt("The total muber of CD Jewel Cases are:",(cdNumber * 100))
	cdrPackPrice = prompt("Enter the price of a 100 pack CD-R.",15)
	cdJewleCasePrice = prompt("Enter the price of a 100 jewele case pack.", 15)
	cdDup = prompt("Enter the price of CD duplication per 100 CDs.",5)
	














