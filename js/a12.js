function check1()
{	

	var name=document.getElementById("name").value;
	var length = name.length;
	var reverse="";
    for ( var i = length - 1; i >= 0; i-- )
    	{
       reverse = reverse + name.charAt(i);
    	}
    if (name == reverse)
    	{
    	document.write("String is a palindrome");
    	}
    else
     	document.write("String is not a palindrome");
}

