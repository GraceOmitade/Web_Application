﻿function updateFont() {

demoDiv=document.getElementById("demo");
fontName=document.getElementById("fontname").value;
fontSize=document.getElementById("size-value").innerHTML + "px";
fontColor=document.getElementById("font-color").value;
fontStyle=document.getElementById("fontstyle").value;
fontWeight=document.getElementById("fontweight").value;
fontVariant=document.getElementById("fontvariant").value;
textAlign=document.getElementById("textalign").value;
letterSpacing=document.getElementById("spacing-value").innerHTML + "px";
lineHeight=document.getElementById("height-value").innerHTML + "px";


this.css = '#demo {\n';
this.css += '  font-family: '+fontName+';\n';
this.css += '  font-size: '+fontSize+';\n';
this.css += '  color: '+fontColor+';\n';
this.css += '  font-style: '+fontStyle+';\n';
this.css += '  font-weight: '+fontWeight+';\n';
this.css += '  font-variant: '+fontVariant+';\n';
this.css += '  text-align: '+textAlign+';\n';
this.css += '  letter-spacing: '+letterSpacing+';\n';
this.css += '  line-height: '+lineHeight+';\n';
this.css += '}\n';

codeDiv=document.getElementById("css-view");			
if(codeDiv.innerText){
	codeDiv.innerText=this.css
}else{
	codeDiv.textContent=this.css
}

$('style').remove();
$('head').append('<style type="text/css">' + this.css + '</style>');
return this.css;

}
window.onload=updateFont;