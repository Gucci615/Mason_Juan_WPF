//Functions_Personal
//Juan Mason 6/25/13
//Gas for Trip


//Calculate the amount of gas needed toi take a trip. Also how much it wil cost with todays average price per gallon.


function gasForTrip ()
{
	miles = prompt("Enter the number of miles needed to drive for this trip.", 200);
	milesPerGl = prompt("Enter the number of MPGs you vehicle can travel.", 18);
	gasPrice = prompt("Enter the average gas price per gallon.", 3.45);
	console.log(miles);
	console.log(milesPerGl);
	totalGas = (miles / milesPerGl);
	console.log(totalGas);
}
//Run Function
gasForTrip();;	

