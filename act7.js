dayAndTime();

document.getElementById("button1").addEventListener('click',dayAndTime,false);

function dayAndTime(){
	
	var today = new Date();
	var day = today.getDay();
	var wordDay = "Broken switch"
	switch(day){
		case 0:
			wordDay = "Sunday";
			break;
		case 1:
			wordDay = "Monday";
			break;
		case 2:
			wordDay = "Tuesday";
			break;
		case 3:
			wordDay = "Wednesday";
			break;
		case 4:
			wordDay = "Thursday";
			break;
		case 5:
			wordDay = "Friday";
			break;
		case 6:
			wordDay = "Saturday";
			break;
		default:
			wordDay = "not a number from 0-6";
	}
		
	
	
	document.getElementById("day").innerHTML=wordDay;
	document.getElementById("time").innerHTML=today.toLocaleTimeString();
	
}