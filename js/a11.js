function check()
{	
chk_a();
chk_e();
chk_i();
chk_o();
chk_u();
}




function chk_a() {
	var s="a";
	var str="Welcome to JSP page..";

	var count = 0;
	var index = 0;
	 
	while (index > -1)
	{
	    index = str.indexOf(s, index + 1);
	    if (index > -1)
	    	{
	            count++;
	      }
	
	 }

	document.write("\nOccurence of a:"+count);
}


function chk_e() {
	var s="e";
	var str="Welcome to JSP page..";

	var count = 0;
	var index = 0;
	 
	while (index > -1)
	{
	    index = str.indexOf(s, index + 1);
	    if (index > -1)
	    	{
	            count++;
	      }
	
	 }

	document.write("\nOccurence of e:"+count);
}


function chk_i() {
	var s="i";
	var str="Welcome to JSP page..";

	var count = 0;
	var index = 0;
	 
	while (index > -1)
	{
	    index = str.indexOf(s, index + 1);
	    if (index > -1)
	    	{
	            count++;
	      }
	
	 }

	document.write("\nOccurence of i:"+count);
}


function chk_o() {
	var s="o";
	var str="Welcome to JSP page..";

	var count = 0;
	var index = 0;
	 
	while (index > -1)
	{
	    index = str.indexOf(s, index + 1);
	    if (index > -1)
	    	{
	            count++;
	      }
	
	 }

	document.write("\nOccurence of o:"+count);
}


function chk_u() {
	var s="u";
	var str="Welcome to JSP page..";

	var count = 0;
	var index = 0;
	 
	while (index > -1)
	{
	    index = str.indexOf(s, index + 1);
	    if (index > -1)
	    	{
	            count++;
	      }
	
	 }

	document.write("\nOccurence of u:"+count);
}