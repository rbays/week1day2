myFunction();


function myFunction(){
	var longnumbers = "1";
	
	for(var i=2;i<=50;i++){
		longnumbers+=", "+i;
	}
	document.getElementById("numbers").innerHTML=longnumbers;
}