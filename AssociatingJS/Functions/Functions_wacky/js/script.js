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



var liveEventPrice = liveEvents();

function liveEvents(wm23, fanAxxess, premierCondemed, raw, smackDown, houseShow, survivorSeries, royalRumbel, overTheLimit)
{
	var wm23 = 125 * 2;
	var fanAxxess = 50 *2;
	var	premierCondemed = 25 *2;
	var raw = 42 * 2 + 57 * 3 + 75 * 2 + 50 * 3;
	var smackDown = 25 * 4 + 49 * 2 + 25 * 3;
	var houseShow = 15 * 4 + 20 * 6 + 25 * 2
	var survivorSeries = 75 * 2;
	var royalRumbel = 95 * 2;
	var overTheLimit = 75 * 2;

	var liveEventPrice = (wm23 + fanAxxess + premierCondemed + raw + smackDown + houseShow + survivorSeries + royalRumbel + overTheLimit)
	return liveEventPrice;
}

liveEvents();
console.log(liveEventPrice);


var beltsAndEvents = (myBeltsPrice + liveEventPrice);
console.log("I have invested $" + beltsAndEvents + ".00 on wrestling belts and live events.");

console.log("I know I am a big fan. Wht about YOU?");





