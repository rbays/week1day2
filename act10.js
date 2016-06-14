var button = document.getElementById("button1");
button.addEventListener('click',makeGrid,false);

function makeGrid(){
	//get output div
	var outputDiv = document.getElementById("grid");
	//get width and height from user
	var width = parseInt(document.getElementById("X_input").value);
	var height = parseInt(document.getElementById("Y_input").value);
	
	//check positive integers
	if (width<1||height<1){
		outputDiv.innerHTML = "Please choose 2 positive integers";
	}
	else{
	var output = ""
	//create roof
	var roof = "__"
	for (i=0;i<width;i++){
	roof+="_";
	}
	output += roof +"<br>";
	//creat each line
	for(i=0;i<height;i++){
		var line = "|"
		//fill each line with x's
		for(j=0;j<width;j++){
			line += "x";
		}
		line +="|<br>";
		output+=line;
	}
	//create floor
	var floor = "‾‾"
	for (i=0;i<width;i++){
	floor+="‾";
	}	
	output+=floor;
	outputDiv.innerHTML = output;
	}
	
	
	
	
	
	
}