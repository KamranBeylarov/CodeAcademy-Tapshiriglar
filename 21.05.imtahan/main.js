function myFunc() {
	var a=document.getElementsByClassName("textbox1")[0].value;
	document.getElementsByClassName("text1")[0].innerHTML = a;
}	
function myLink(){
	var b=document.getElementsByClassName("textbox2")[0].src;
	document.getElementsByClassName("image")[0].src=b;
}