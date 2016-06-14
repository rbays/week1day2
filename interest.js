var capital = 200.0;
var apr = 10.0;
var years = 0.5;

var interestDec = 1.0 + apr / 100;
var answer = capital * Math.pow(interestDec,years);
document.getElementById("result").innerHTML = answer;