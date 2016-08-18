function validate() {
	var value=document.getElementById("name").value;
	var count=0;
	for (var i=0; i<value.length; i++) {
       if (((value.charAt(i) >= 'A' && value.charAt(i) <= 'Z')) || ((value.charAt(i) >= 'a' && value.charAt(i) <= 'z'))) {
          count=count+1;
       }
    }
	document.write(count);
}