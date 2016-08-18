function bankAccount(acname, acno, acbal)
{

	
	this.acname=acname;
	this.acno=acno;
	this.acbal=acbal;

}

function withdraw() {
	var acname=document.getElementById("acname").value;
	var acno=document.getElementById("acno").value;
	var acbal=document.getElementById("acbal").value;
	var amt=document.getElementById("amt").value;
	var user1= new bankAccount(acname, acno, acbal);
	
	user1.acbal=user1.acbal-amt;
	document.getElementById("acbal").value=user1.acbal;
}

function deposite() {
	var acname=document.getElementById("acname").value;
	var acno=document.getElementById("acno").value;
	var acbal=document.getElementById("acbal").value;
	var amt=document.getElementById("amt").value;
	var user1= new bankAccount(acname, acno, acbal);
	
	
	user1.acbal=parseInt(user1.acbal)+parseInt(amt);
	document.getElementById("acbal").value=user1.acbal;
}