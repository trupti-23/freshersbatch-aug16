function calTable()
{
	var n=document.getElementById("num").value;
	for(var i=1;i<=10;i++)
		{
		res=i*n;
		document.writeln(res+"\n");
		}
}
function getConfirmation(){
    var retVal = confirm("Do you want to Enter another number ?");
    if( retVal == true ){
       document.write ("Continue!");
       return true;
    }
    else{
       document.write ("Exit!");
       return false;
    }
 }