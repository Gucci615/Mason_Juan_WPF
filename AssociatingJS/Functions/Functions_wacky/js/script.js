//Functions_Wacky
//Juan Mason 6/27/13
// How much have I invested in y WWE / WWF /WCW / ECW Wrestling Belts

console.log("Who's the bigger wrestling fan? You or ME!");

//Define var to have a place for it to return to from within the function.
var myBeltsPrice = belts();

function belts(wcwWorld, wweWorld, wwfHeavy, wwfIC, wwfLight, ecdHeavy, wweSpUS, wweUS, wweTag, wwfHardCore, wwfSkul )
{
var wcwWorld = 299;
var wweWorld = 349 *2;
var wwfHeavy = 150;
var wwfIC = 179;
var wwfLight = 150;
var ecdHeavy = 299;
var wweSpUS = 279;
var wweUS = 189;
var wweTag = 297 + 315;
var wwfHardCore = 150;
var wwfSkul = 189 + 115;

var myBeltsPrice = (wcwWorld + wweWorld + wwfHeavy + wwfIC + wwfLight + ecdHeavy + wweSpUS + wweUS + wweTag + wwfHardCore + wwfSkul);
return myBeltsPrice;
}

//Call function
belts();
console.log(myBeltsPrice);

