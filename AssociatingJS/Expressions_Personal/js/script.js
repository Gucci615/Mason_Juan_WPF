//Mason_Juan 06/13/13
//Start Time 1534

//Expressions Personal
//How Much Do We Spend On Pizza Yearly

//Price of per pizza pie
var pizzaPrice = prompt("How much for each pizza?", 5.00);
console.log(pizzaPrice);

//# ordered
var pizzaNumber = prompt("How many pizzas ordered per week?",2)
console.log(pizzaNumber);
alert("You spend a average of $" + pizzaPrice * pizzaNumber + " per week before adding in dilevery and tip.");

//Average # of weeks pizza is ordered
var weeksOrdered = prompt("What is the average number of weeks pizza is ordered?", 20);
console.log(weeksOrdered);

//Delivery $
var delivery = prompt("What do you pay for delivery?", 2.50);
console.log(delivery);

//Average # of deliveries
var deliveryNumber = prompt("What is the average number of times you use delivery?", 10);
console.log(deliveryNumber);

//Delivery tip
var tip = prompt("How much do you tip the delivery driver?", 1.75);
console.log(tip);

//Yearly pizza total
var yearlyPizza = pizzaPrice * pizzaNumber * weeksOrdered
console.log("The total amount spent on pizza equals $" + yearlyPizza + " per year.");

//Yearly delivery total
var yearlyDelivery = delivery * deliveryNumber
console.log("The total amount spent on delivery equals $" + yearlyDelivery + " per year.");

//Yearly Tip total
var yearlyTip = tip *  deliveryNumber
console.log("The total amount spent on tips equal $" + yearlyTip + " per year.");

//Yearly Grand Total
var grandTotal = (parseFloat(yearlyTip) + parseFloat(yearlyDelivery) + parseFloat(yearlyPizza));
alert("You spend a woopingg $" + grandTotal + " per year on pizza. WOW!");
