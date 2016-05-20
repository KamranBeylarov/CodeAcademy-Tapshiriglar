


st1=["Qulu","Memmedli",20,false,"Gun"];
st2=["Kamran","Beylerov",23,true,"Gun"];
st3=["Valeh","Esedli",23,false,"seher"];
st4=["hsasab","dnjsa",45,true,"shere"]
students=[st1,st2,st3,st4];

document.write("<table>")
	for(i=0;i<4;i++){
		document.write("<tr>")
		for(b=0;b<5;b++){
		document.write("<td>"+students[i][b]+"</td>")
		}


		document.write("<tr>")
	}





document.write("</table>")