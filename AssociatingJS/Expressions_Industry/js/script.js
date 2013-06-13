//Mason_Juan 06/13/15

    //Expressions Industry
//Video,Phone, Internet

var videoPrice = prompt("How mush do you pay for video per month?", 59.99);
var yourVideoPrice = videoPrice;
console.log(yourVideoPrice);

var phonePrice = prompt("How mush do you pay for phone per month?", 49.99);
var yourPhonePrice = phonePrice;
console.log(yourPhonePrice);

var internetPrice = prompt("How mush do you pay for internet per month?", 24.99);
var yourInternetPrice = internetPrice;
console.log(yourInternetPrice);

var total = (parseFloat(yourVideoPrice) + parseFloat(yourPhonePrice) + parseFloat(yourInternetPrice));
console.log(total);

var starterTP = 99.00;
var prefTP = 109.99;
var prefHDTP = 119.99;
var prefPlusHDTP = 139.99;
var premierTP = 159.99;


//Add video & phone price
console.log("You price for video and phone service is $" + (parseFloat(yourVideoPrice) + parseFloat(yourPhonePrice)));

//Add video & internet price
console.log("You price for video and phone service is $" + (parseFloat(yourVideoPrice) + parseFloat(yourInternetPrice)));

//Add internet & phone price
console.log("You price for video and phone service is $" + (parseFloat(yourInternetPrice) + parseFloat(yourPhonePrice)));

// Add all 3 service prices together to get a total
console.log("You currently pay $" + (parseFloat(yourVideoPrice) + parseFloat(yourPhonePrice) + parseFloat(yourInternetPrice)) + " for all three servces.");

//Diff between your price for all three and starterTP
console.log("The diffrence between your price of $" + parseFloat(total) + " and the Digital Starter TriPlay for $" +  parseFloat(starterTP) + " is $" + (parseFloat(total) - parseFloat(starterTP)));

//Diff between your price for all three and prefTP
console.log("The diffrence between your price of $" + parseFloat(total) + " and the Digital Preferred TriPlay for $" +  parseFloat(prefTP) + " is $" + (parseFloat(total) - parseFloat(prefTP)));

//Diff between your price for all three and prefHDTP
console.log("The diffrence between your price of $" + parseFloat(total) + " and the Digital Preferred HD TriPlay for $" +  parseFloat(prefHDTP) + " is $" + (parseFloat(total) - parseFloat(prefHDTP)));

//Diff between your price for all three and prefPlusHDTP
console.log("The diffrence between your price of $" + parseFloat(total) + " and the Digital Preferred HD Plus TriPlay for $" +  parseFloat(prefPlusHDTP) + " is $" + (parseFloat(total) - parseFloat(prefPlusHDTP)));

//Diff between your price for all three and premierTP
console.log("The diffrence between your price of $" + parseFloat(total) + " and the Digital Premier TriPlay for $" +  parseFloat(premierTP) + " is $" + (parseFloat(total) - parseFloat(premierTP)));

