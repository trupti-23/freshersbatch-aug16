var attempt=3;
function check()
{
	var id=document.getElementById("id").value;
	var pw=document.getElementById("pw").value;
	if(id=="t" && pw=="t")
		{
		document.write("Login Successful..!");
		}
	else
		{
		attempt--;
		if(attempt==0)
			{
			document.write("Fail...");
			}
		}
}