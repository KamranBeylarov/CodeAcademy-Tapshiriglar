// var reqem=prompt("siliyimmi?")
// var cavab=(reqem*reqem)/2


// alert("girdiyiniz ededin kv;"+ cavab)

// // conseole.log()	




// var cavab=prompt("write")
// if(cavab>=18){
// 	alert("qaqa gire bilersen");
// } 	
	
// else{
// 	alert("duz deil");
// }
	


// var reqem=prompt("yaz ulan")
// if(0<reqem&&reqem<=35){
// 	console.log("Kafi")
// }
// if(36<reqem&&reqem<=85){
// 	console.log("yaxshi")
// }
// if(86<reqem&&reqem<=100){
// 	console.log("qaqam zoooor")
// }
// if(reqem<0||reqem>100){
// 	console.log("qaqa duz yolda deilsen")
// }	


var gun=prompt("gun sayi")
	
if(gun<31){
	var gg=prompt("gunlukgelir");
	var ayliqgelir=gun*gg;
	if(ayliqgelir<1000){
		var maas=(ayliqgelir)-(ayliqgelir*0.25);
		alert(maas);
	}
	else{
		var maas=(ayliqgelir)-(ayliqgelir*0.20);
		alert(maas);
	}
}
else{
	alert("false")
}	
// var gelir=prompt("poz:D")	
// if(gun>31){
// 	alert("false")
// }
// else{
// 	alert("Next")
// }