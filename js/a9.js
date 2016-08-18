var list=[4, 8, 24, 76, 3, 50];
var sum=0;

function min()
{	
var min=Math.min(list[0],list[1],list[2],list[3],list[4],list[5]);
document.writeln("Minimum number is :"+min);
}
function max()
{	
	var max=Math.max(list[0],list[1],list[2],list[3],list[4],list[5]);
	document.writeln("Maxmum number is :"+max);
}
function total()
{	
	for(var i=0;i<list.length;i++)
		{
		sum=sum+list[i];
		}
	
	document.writeln("Total is :"+sum);
}
function avg()
{	
	for(var i=0;i<list.length;i++)
	{
	sum=sum+list[i];
	}
	document.writeln("Average is :"+sum/list.length);
}
