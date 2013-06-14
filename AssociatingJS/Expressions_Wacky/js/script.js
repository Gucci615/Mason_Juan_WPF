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
myArray[4] = "Light Weight"
myArray[5] = "High Flyer";
myArray[6] = "Wrestling Technician & Power House";
myArray[7] = "Super Heavy Weight";


//Your Weight
var weight = prompt("If your weight is equal or less than 149 lbs enter 0. Enter 1 if your weight no mre than 199 and no less than 150 lbs. Enter 2 if your weight no mre than 349 and no less than 200 lbs. Enter 3 if your weight 350 lbs or more", 1);

console.log("Your curent weight is " + weightArray[weight] + ".");

//Pick a wrestling style

var style = prompt("Select your wrestling style: 4 for Light Weight, 5 for High Flyer, 6 for Wrestling Technician & Power House, or 7 for Super Heavy Weight", 4);

console.log("You have a " + myArray[style] + " wrestling style.");

//Wrestlers
var wrestlersName = parseInt(weight) + parseInt(style)
console.log(wrestlersName)

var  myArray2 = new Array2();
nameArray[0] = "Hornswoggle, Dink the Clown, and El Torito";
nameArray[1] = "Rey Mysterio Jr, Evan Bourne, and Brian Kendrick";
nameArray[2] = "Bret Hart, Chris Benoit, The Undertaker, and Kurt Angle";
nameArray[3] = "Andre The Giant, Big Show, Mark Henry, and King Kong Bundy";





