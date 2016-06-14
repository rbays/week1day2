var button = document.getElementById("button1");
button.addEventListener('click',addemup,false);


function addemup(){
	
	var str1 = document.getElementById("input1").value;
	var str2 = document.getElementById("input2").value;
	var str3 = document.getElementById("input3").value;
	
	var int1 = parseInt(str1);
	var int2 = parseInt(str2);
	var int3 = parseInt(str3);
	
	var total = int1+int2+int3;
	
	document.getElementById("total").innerHTML = total;

	
	
}


