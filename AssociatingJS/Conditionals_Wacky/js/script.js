// Conditionals Wacky
//Find the seconday color for you and your mate

//Select your color
var whatsYourColor = prompt("Select your favorit primary color form the list: \n Red \n Blue \n Yellow","Red");

//Store your color
var yourColor = whatsYourColor;
alert(yourColor);

//Select your mates color
var whatsMatesColor = prompt("Select your favorit primary color form the list: \n Red \n Blue \n Yellow","Red");

//Store your mates color
var matesColor = whatsMatesColor;
alert(matesColor);

var secondColor =(yourColor + matesColor);
alert(secondColor);

if(yourColor === matesColor){
	console.log("You and your mate's colors are a match:", yourColor);
}