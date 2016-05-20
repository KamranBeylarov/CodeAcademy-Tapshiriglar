var telebeler=function(ad, soyad,yas){
	this.ad=ad,
	this.soyad=soyad,
	this.yas=yas
}
var bdu = function (ad,spes){
	this.ad=ad,
	this.spes=spes
}

var qafqaz = function(ad,spes){	
	this.ad=ad,
	this.spes=spes
}

var codeacademy = function(ad){
	this.ad=ad
}

bdu.prototype=new codeacademy()
qafqaz.prototype=new codeacademy()
var telebe = new bdu (["Konul","Feride","Etibar"]);
var telebe = new qafqaz (["Qulu","Rufet","Kamran"]);


console.log(telebe)