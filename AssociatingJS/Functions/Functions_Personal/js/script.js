//Functions_Personal
//Juan Mason 6/25/13
//Gas for Trip


//Calculate the amount of gas needed toi take a trip. Also how much it wil cost with todays average price per gallon.


function gasForTrip ()
{
	miles = prompt("Enter the number of miles needed to drive for this trip.", 200);
	milesPerGl = prompt("Enter the number of MPGs you vehicle can travel.", 18);
	gasPrice = prompt("Enter the average gas price per gallon.", 3.45);
	galPerTank = prompt("Enter the maximum gallons of gas for your gas tank.", 20);

	console.log(miles);
	console.log(milesPerGl);
	totalGas = (miles / milesPerGl);
	console.log(totalGas);
	milesPerTank = (milesPerGl * galPerTank);
	console.log("You can travel " + milesPerTank + " miles per full tank of gas.");
	priceFullTank = (gasPrice * galPerTank);
	console.log("It will cost you $" + priceFullTank + " to completely fill your gas tank.");
	tanksPerTrip = (miles / milesPerTank);
	console.log(tanksPerTrip);


}
//Run Function
gasForTrip();;	

