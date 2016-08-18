function fact()
{
	var n1=document.getElementById("n1").value;
	var c;
	var facto=1;
	for (c = 1 ; c <= n1 ; c++ )
	{
           facto = facto*c;
     }
	document.writeln("Factorial is = "+facto);

	
	

}