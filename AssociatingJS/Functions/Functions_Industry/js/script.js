//Functions_Industry
//Juan Mason 6/27/13

//How much Cat-5 Network Cable needed to Run 8 CCTV Cameras.



var cad5 = function(cam1, cam2, cam3, cam4, cam5, cam6, cam7, cam8, dvr)
{
	var allCad5 = (cam1 + cam2 + cam3 + cam4 + cam5 + cam6 + cam7 + cam8 + dvr);
	return allCad5;
}

var allCad5 = cad5(20,35,54,72,30,28,44,80,5);

console.log("It will requier " + allCad5 + " feet of Cad-5 network cable to run the 8 CCTV Cameras and DVR.");

var cableOnHand = prompt("How many feet of Cad-5 do you have on hand?", 200);
console.log("You stated you have " + cableOnHand + " feet of cable on hand.")

if (cableOnHand > allCad5)
{ 
	console.log("That is " + (cableOnHand - allCad5) + " feet over what is needed.");
	console.log("You have more than enough Cad-5 cable for this installation job.")
}
else if(cableOnHand = allCad5)
{
console.log("Cool! You have just enough Cad-5 cable for this installation job.")
}

else {
	console.log("That is " + (allCad5 - cableOnHand) + " feet short of what is needed.");
	console.log("Sorry, you dont have enough cable for this installation.");
}



