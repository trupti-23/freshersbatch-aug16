var list=["4", "8", "24", "76", "3", "50"];


function asc()
{
	var list1=new Array;
	list1=list.sort(function(a,b)
			{return a - b;})
	document.write(list1);		

}
function des()
{
	var list1=new Array;
	list1=list.sort(function(a,b)
			{return b-a;})
	document.write(list1);


}