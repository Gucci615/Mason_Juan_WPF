//Mason_Juan 06/13/13
//Start 1851
//End

//Expressions Wacky
//What type of wrestler are you?

alert("Take this quiz to ID the wrestler in you!"); 
var  weightArray = new Array();
weightArray[0] = "149 lbs or less"
weightArray[1] = "150 to 199 lbs";
weightArray[2] = "200 to 349 lbs";
weightArray[3] = "350 + lbs";

//Your Weight
var weight = prompt("If your weight is equal or less than 149 lbs enter 0. Enter 1 if your weight no mre than 199 and no less than 150 lbs. Enter 2 if your weight no mre than 349 and no less than 200 lbs. Enter 3 if your weight 350 lbs or more", 1);

console.log("Your curent weight is " + weightArray[weight] + ".");

var  styleArray = new Array();
styleArray[0] = "Light Weight"
styleArray[1] = "High Flyer";
styleArray[2] = "Wrestling Technician & Power House";
styleArray[3] = "Super Heavy Weight";


//Pick a wrestling style

var style = prompt("Select your wrestling style: 0 for Light Weight, 1 for High Flyer, 2 for Wrestling Technician & Power House, or 3 for Super Heavy Weight", 1);

console.log("You have a " +styleArray[style] + " wrestling style.");

//Wrestlers
var wrestlersName = parseInt(weight) + parseInt(style)
console.log(wrestlersName)

var  nameArray = new Array();
nameArray[0] = "Hornswoggle, Dink the Clown, and El Torito";
nameArray[1] = "Rey Mysterio Jr, Evan Bourne, and Brian Kendrick";
nameArray[2] = "Bret Hart, Chris Benoit, The Undertaker, and Kurt Angle";
nameArray[3] = "Andre The Giant, Big Show, Mark Henry, and King Kong Bundy";





