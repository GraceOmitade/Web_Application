function updateDisplay() {

//Fonts//
//displayText = document.getElementById("text");
document.getElementById("cssDisplay").innerHTML = document.getElementById("text").value;
fontName = document.getElementById("font-name").value;
fontColor = document.getElementById("font-color").value;
fontSize = document.getElementById("font-size").innerHTML + "px";
textShadowH = document.getElementById("text-h-length").innerHTML + "px";
textShadowV = document.getElementById("text-v-length").innerHTML + "px";
textShadowB = document.getElementById("text-b-length").innerHTML + "px";
textShadowColor = document.getElementById("text-s-color").value;

//Box//
boxShadowH = document.getElementById("box-h-length").innerHTML + "px";
boxShadowV = document.getElementById("box-v-length").innerHTML + "px";
boxShadowB = document.getElementById("box-b-length").innerHTML + "px";
boxShadowColor = document.getElementById("box-s-color").value;
paddingTB = document.getElementById("paddingtb").innerHTML + "px";
paddingLR = document.getElementById("paddinglr").innerHTML + "px";

//Border//
borderRadius = document.getElementById("border-radius").innerHTML + "px";
borderWidth = document.getElementById("border-width").innerHTML + "px";
borderColor = document.getElementById("bc-color").value;
borderStyle = document.getElementById("border-style").value;

//Background//
backSolid = document.getElementById("back-color").value;
backSolidStart = document.getElementById("start-color").value;
backSolidEnd = document.getElementById("end-color").value;

//Background Hover//
backSolidHover = document.getElementById("back-color-hover").value;
backSolidStartHover = document.getElementById("start-color-hover").value;
backSolidEndHover = document.getElementById("end-color-hover").value;
fontColorHover = document.getElementById("font-color-hover").value;



this.css = '.testbutton {\n';
this.css += '  font-family: '+fontName+';\n';
if (document.getElementById("bold").checked) {
	this.css += '  font-weight: bold;\n';
}
this.css += '  color: '+fontColor+' !important;\n';
this.css += '  font-size: '+fontSize+';\n';
if (document.getElementById("text-h-length").innerHTML > "0" || document.getElementById("text-v-length").innerHTML > "0" || document.getElementById("text-b-length").innerHTML > "0") {
	this.css += '  text-shadow: '+textShadowH+' '+textShadowV+' '+textShadowB+' '+textShadowColor+';\n';
}
if (document.getElementById("box-h-length").innerHTML > "0" || document.getElementById("box-v-length").innerHTML > "0" || document.getElementById("box-b-length").innerHTML > "0") {
	this.css += '  box-shadow: '+boxShadowH+' '+boxShadowV+' '+boxShadowB+' '+boxShadowColor+';\n';
}
this.css += '  padding: '+paddingTB+' '+paddingLR+';\n';
if (document.getElementById("border-radius").innerHTML > "0") {
	this.css += '  -moz-border-radius: '+borderRadius+';\n';
	this.css += '  -webkit-border-radius: '+borderRadius+';\n';
	this.css += '  border-radius: '+borderRadius+';\n';
}
if (document.getElementById("border-width").innerHTML > "0") {
	this.css += '  border: '+borderWidth+' '+borderStyle+' '+borderColor+';\n';
}
if (document.getElementById("solid-back").checked==true) {
	this.css += '  background: '+backSolid+';\n';
}else{
	this.css += '  background: '+backSolid+';\n';
	this.css += '  background: linear-gradient(top,  '+backSolidStart+',  '+backSolidEnd+');\n';
	this.css += '  background: -ms-linear-gradient(top,  '+backSolidStart+',  '+backSolidEnd+');\n';
	this.css += '  background: -webkit-gradient(linear, left top, left bottom, from('+backSolidStart+'), to('+backSolidEnd+'));\n';
	this.css += '  background: -moz-linear-gradient(top,  '+backSolidStart+',  '+backSolidEnd+');\n';
}
this.css += '}\n';

this.css += '.testbutton:hover {\n';
this.css += '  color: '+fontColorHover+' !important;\n';
if (document.getElementById("solid-back-hover").checked==true) {
	this.css += '  background: '+backSolidHover+';\n';
}else{
	this.css += '  background: '+backSolidHover+';\n';
	this.css += '  background: linear-gradient(top,  '+backSolidStartHover+',  '+backSolidEndHover+');\n';
	this.css += '  background: -ms-linear-gradient(top,  '+backSolidStartHover+',  '+backSolidEndHover+');\n';
	this.css += '  background: -webkit-gradient(linear, left top, left bottom, from('+backSolidStartHover+'), to('+backSolidEndHover+'));\n';
	this.css += '  background: -moz-linear-gradient(top,  '+backSolidStartHover+',  '+backSolidEndHover+');\n';
}
this.css += '}\n';




codeDiv=document.getElementById("code");			
if(codeDiv.innerText){
	codeDiv.innerText=this.css
	//window.prettyPrint && prettyPrint();
}else{
	codeDiv.textContent=this.css
	//window.prettyPrint && prettyPrint();
}

$('style').remove();
$('head').append('<style type="text/css">' + this.css + '</style>');
return this.css;
	
}