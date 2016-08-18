function age()
{	

	var x=document.getElementById("age").value;
	var d= new Date();
	var cy= d.getFullYear();
	var bd= cy-x;
	alert("Your Birth Date Year is :"+bd);
	document.write("Your Date Year is :"+bd);
}