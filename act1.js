var button = document.getElementById("button1");
button.addEventListener('click',alerted,false);

function alerted(){
	var text = document.getElementById("input1").value;
	window.alert("Alert!!!!\n"+text);
}