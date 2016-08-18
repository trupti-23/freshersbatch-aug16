function EmpList(id, ename, empsal ,deptno)
{

	
	this.id=id;
	this.ename=ename;
	this.empsal=empsal;
	this.deptno=deptno;
	this.sortId=function(empp)
	{
		document.writeln("Details :<br>");
		empp.sort(function(id1,id2){return id1.id-id2.id});
		
		document.write("<br>ID :"+empp[0].id+",Name: "+empp[0].ename+"Salary: "+empp[0].empsal+"Dept_No: "+empp[0].deptno);
		document.write("<br>ID :"+empp[1].id+",Name: "+empp[0].ename+"Salary: "+empp[0].empsal+"Dept_No: "+empp[0].deptno);
		document.write("<br>ID :"+empp[2].id+",Name: "+empp[0].ename+"Salary: "+empp[0].empsal+"Dept_No: "+empp[0].deptno);
		document.write("<br>ID :"+empp[3].id+",Name: "+empp[0].ename+"Salary: "+empp[0].empsal+"Dept_No: "+empp[0].deptno);
		
		
		
	}
	

}

function empsort() {
	
	var emp1=new EmpList(1,"s",2000,1);
	var emp2=new EmpList(8,"s",2000,1);
	var emp3=new EmpList(4,"s",2000,1);
	var emp4=new EmpList(3,"s",2000,1);
	
	var emp=[emp1,emp2,emp3,emp4];
	emp1.sortId(emp);
}
