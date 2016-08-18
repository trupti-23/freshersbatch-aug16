function div() {
	var n1= document.getElementById("n1").value;
	var n2= document.getElementById("n2").value;
	if(n2==0)
		{
		alert("Division Failed..! Second number is Zero");
		}
	else {
		var res=n1/n2;
		alert("Division : "+res);
	}
}