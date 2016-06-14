//using a do while loop to output numbers 1-10

myFunction();

function myFunction(){
	var i = 1;
	var output = "";
	do{
		output += i+"<br>";
		i++;
	}
	while(i<=10);
	document.getElementById("numbers").innerHTML = output;
}
