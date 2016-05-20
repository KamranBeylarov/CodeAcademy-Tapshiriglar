/*

!true || !false         //true
(true && !false) && (false || !true)     //false
(4 > 5) || true    //true
document.write(("this" != "that") && ("zebra" > "aardvark"))  //false
((4 >= 6) || ("grass" != "green")) && !(((12 * 2) == 144) && true)
			//false      &&  //true===>  //false
*/



// myColor = ["Red", "Green", "White", "Black"];
// /*
// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// */

// for(i=0;i<myColor.length;i++){
// 	document.write(myColor[i]+",")
// }
// for(i=0;i<myColor.length-1;i++){
// 	document.write(myColor[i]+',');
// }
// document.write(myColor[myColor.length - 1]);

// for(i=0;i<myColor.length-1;i++){

// 	document.write(myColor[i]+'+');
// }
// document.write(myColor[myColor.length - 1]);




// var array = [1,2,3,4,5,6];

// function toplama(){
// 	var sum = 0;
// 	  for(i=0;i<array.length;i++){
//     	sum+=array[i];        
//     }
//     document.write(sum);
// }
// toplama();



// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };
// document.write(student.name+","+student.sclass+","+student.rollno)




// // Example x = 32243;
// // Expected Output : 34223	

// var num=["3","2","2","4","3"];
// var num1=[];
// for (var i = num.length; i >= 0; i--) {
// 	num1.push(num[i]);
// }
// console.log(num1.join(""));



// var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];

// Sample Output : -4,-3,1,2,3,5,6,7,8

// arr1.sort();
// document.write(arr1);  buna BAX!!



// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '


// var boyuk='the quick brown fox'
// console.log(boyuk.toUpperCase());


// var ilk=["the","quick","brown","fox"];
// for (var i =0;i<ilk.length; i++) {
// 	ilk[i][0] = ilk[i][0].toUpperCase();
// 	console.log(ilk[i]);
// };

// var a=" the quick brown fox";

// for (i =0;i<a.length; i++) {
// 	if(a[i-1]==" "){
// 		document.write(a[i].toUpperCase())
// 	}
// 	else
// 	{
// 		document.write(a[i])
// 	}
// }


