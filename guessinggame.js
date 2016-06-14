var maxSpan = document.getElementById("max");
var maxNum = 1;
var correctAnswer = 0;
var result = document.getElementById("result");
var guesses = 0;
var guess = 0;

//show initial vale of slider on page
updateMax();
//start game by getting random number
document.getElementById("start").addEventListener('click', start, false);
//submit a guess
document.getElementById("button1").addEventListener('click', guessSubmit, false);

//used to generate random integer
function randInt(a,b) {
	var myRange = b-a;
	var randFloat = Math.random();
	var rangeFloat = randFloat * myRange;
	return Math.floor(rangeFloat)+a;
}

//updates maximum mumber from slider
function updateMax(){
	maxSpan.innerHTML = slider.value;
	window.maxNum=maxSpan.innerHTML;
}

//set random number and reset guess count
function start(){
	guesses = 0;
	window.correctAnswer = randInt(1,maxNum);
}

function guessSubmit(){
	guesses+=1; //increment gueses by 1
	guess = parseInt(document.getElementById("guess").value);
	if (guess === correctAnswer){
		result.innerHTML= "Well done, you got the answer in " + guesses + " guess(es)!"
	}
	else if(guess > correctAnswer){
		result.innerHTML = "too high!!!";
	}
	else{
		result.innerHTML = "too low :(";
	}
}


