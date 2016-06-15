var capital = 0;
var apr = 0;
var years = 0;



var slider = document.getElementById("lengthMonth");
var lengthWords = document.getElementById("lengthWords");
var submitButton = document.getElementById("button1");

var resultsDiv = document.getElementById("result");


//update length on slider move
slider.addEventListener("input",lengthUpdate,false);

//submit button to update result
submitButton.addEventListener('click',submit,false);

//updates the length of the loan in the DOM
function lengthUpdate(){
	
	var totalMonths = slider.value;
	var years = Math.floor(totalMonths / 12);
	var months = totalMonths % 12;
	lengthWords.innerHTML = "Length: " + years + " years and " + months + " month(s)";
	window.years = totalMonths / 12; //updates term of loan in years
}

//submit all values to get repayment amount
function submit(){
	window.capital = document.getElementById("pounds").value;
	window.apr = document.getElementById("apr").value;
	if(capital === 0 || apr === 0 || years === 0){
		resultsDiv.innerHTML = "One or more missing or zero values.<br>please enter values above.<br> capital: " + capital + "<br>apr: " + apr + "<br>years: " + years;
	}
	else{
		calculateRepayment();
	}
}
//calculates the total repayment from the 3 values given
function calculateRepayment(){
	var interestDec = 1.0 + apr / 100;
	var answer = capital * Math.pow(interestDec,years);
	answer = Math.round(answer * 100) / 100;
	resultsDiv.innerHTML = "You will need to repay £" + answer;
}