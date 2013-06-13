//Mason_Juan 06/13/15

    //Expressions Industry
//Video,Phone, Internet

var videoPrice = prompt("How mush do you pay for video per month?", 59.95);
var yourVideoPrice = parseFloat(videoPrice);
console.log(yourVideoPrice);

var phonePrice = prompt("How mush do you pay for phone per month?", 49.95);
var yourPhonePrice = parseFloat(phonePrice);
console.log(yourPhonePrice);

var internetPrice = prompt("How mush do you pay for internet per month?", 24.95);
var yourInternetPrice = parseFloat(internetPrice);
console.log(yourInternetPrice);

//Add video & phone price
console.log("You price for video and phone service is $" + (parseFloat(yourVideoPrice) + parseFloat(yourPhonePrice)));

//Add video & internet price
console.log("You price for video and phone service is $" + (parseFloat(yourVideoPrice) + parseFloat(yourInternetPrice)));

// Add all 3 service prices together to get a total
console.log("You price for all three services is $" + (parseFloat(yourVideoPrice) + parseFloat(yourPhonePrice) + parseFloat(yourInternetPrice)));



