var exp = "";
function getData(data){
	exp = exp + data;
	document.getElementById("inputData").value = exp;
}
//Get input from every button press
function inputValidation(){
	//validate expression using javaScript eval()
	var expression = document.getElementById("inputData").value
	//Use try{} catch{} to handle exceptions
	try{
	document.getElementById("result").value = eval(expression);
	} catch(e){
		document.getElementById("result").value ="";
	 	document.getElementById("result").value ="";
	}
}
//clear Data from inputs
function clearAll(){
	exp ="";
	document.getElementById("inputData").value ="";
	document.getElementById("result").value = "";

}

