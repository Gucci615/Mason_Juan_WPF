//Mason_Juan_Dog_Age 06/10/13
// Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.
//     Givens:
//Sparky’s age.
//     Result Varable:
//Sparky’s age in dog years.
//    Result to Print:
//“Sparky is X human years old which is X in dog years.

var dogYear
var dogAge = prompt("Enter the dogs age in human years",8);
dogYear = dogAge * 7;
alert("Sparky is " + dogAge + " human years old which is " + dogYear + " in dog years");