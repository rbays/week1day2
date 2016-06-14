var button = document.getElementById("button1");
button.addEventListener('click',funtimes,false);

var myVariable = "global value!!!";

function funtimes(){
	var myVariable = "local value!!!";
	
	document.getElementById("globalvar").innerHTML=window.myVariable;
	document.getElementById("localvar").innerHTML=myVariable;
	
}