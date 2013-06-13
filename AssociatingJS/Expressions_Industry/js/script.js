//Mason_Juan 06/13/15

    //Expressions Industry
//Video,Phone, Internet

var videoPrice = prompt("How mush do you pay for video per month?", 59.99);
var yourVideoPrice = parseFloat(videoPrice);
console.log(yourVideoPrice);

var phonePrice = prompt("How mush do you pay for phone per month?", 49.99);
var yourPhonePrice = parseFloat(phonePrice);
console.log(yourPhonePrice);

var internetPrice = prompt("How mush do you pay for internet per month?", 24.99);
var yourInternetPrice = parseFloat(internetPrice);
console.log(yourInternetPrice);

var starterTP = 99.00;
var prefTP = 109.99;
var prefHDTP = 119.99;
var prefPlusHDTP = 139.99;
var primerTP = 159.99;


//Add video & phone price
console.log("You price for video and phone service is $" + (parseFloat(yourVideoPrice) + parseFloat(yourPhonePrice)));

//Add video & internet price
console.log("You price for video and phone service is $" + (parseFloat(yourVideoPrice) + parseFloat(yourInternetPrice)));

//Add internet & phone price
console.log("You price for video and phone service is $" + (parseFloat(yourInternetPrice) + parseFloat(yourPhonePrice)));

// Add all 3 service prices together to get a total
console.log("You price for all three services is $" + (parseFloat(yourVideoPrice) + parseFloat(yourPhonePrice) + parseFloat(yourInternetPrice)));



