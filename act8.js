//using a while loop to output numbers 1-10

myFunction();

function myFunction(){
	var i = 1;
	var output = "";
	while(i<=10){
		output += i+"<br>";
		i++;
	}
	document.getElementById("numbers").innerHTML = output;
}
