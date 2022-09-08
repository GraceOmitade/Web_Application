/*  
CSS3 Menu Generator
Version: 1.0.0
Author: CSS Portal
Author URL: http://www.cssportal.com/
Copyright (c)2012 CSSPortal.com all rights reserved
*/

function updatemenu() {

demoContainerDiv = document.getElementById("demo-container");
demoBackgroundColor = document.getElementById("cont-color").value;
mbHeight = document.getElementById("mb-height").innerHTML + "px";
//MENU BAR COLORS AND BORDERS	
borderWidth = document.getElementById("border-width").innerHTML + "px";
borderColor = document.getElementById("bc-color").value;
borderStyle = document.getElementById("border-style").value;
//MENU BAR CORNERS
allRadius = document.getElementById("radius-value").innerHTML + "px";
//MENU BAR BACKGROUND
backgroundColor = document.getElementById("back-color").value;
gradientStart = document.getElementById("start-color").value;
gradientEnd = document.getElementById("end-color").value;
//MENU BAR BOX SHADOWS	
shadowHOffset = document.getElementById("h-length-value").innerHTML + "px";
shadowVOffset = document.getElementById("v-length-value").innerHTML + "px";
shadowBlur = document.getElementById("b-length-value").innerHTML + "px";
shadowColor = document.getElementById("s-color").value;
//MENU BAR MARGINS PADDING
Margintop = document.getElementById("margin-top").innerHTML + "px";
Marginright = document.getElementById("margin-right").innerHTML + "px";
Marginbottom = document.getElementById("margin-bottom").innerHTML + "px";
Marginleft = document.getElementById("margin-left").innerHTML + "px";
Paddingtop = document.getElementById("padding-top").innerHTML + "px";
Paddingright = document.getElementById("padding-right").innerHTML + "px";
Paddingbottom = document.getElementById("padding-bottom").innerHTML + "px";
Paddingleft = document.getElementById("padding-left").innerHTML + "px";
//TOP MENU CORNERS
topBRadius = document.getElementById("radius-top").innerHTML + "px";
//TOP MENU FONTS
fontColortop = document.getElementById("font-color-top").value;
fontSizetop = document.getElementById("font-size-top").innerHTML + "px";
fontWeighttop = document.getElementById("font-weight-top").value;
fontStyletop = document.getElementById("font-style-top").value;
fontNametop = document.getElementById("font-name-top").value;
//TOP MENU SHADOWS
fontHtop = document.getElementById("h-length-top").innerHTML + "px";
fontVtop = document.getElementById("v-length-top").innerHTML + "px";
fontBtop = document.getElementById("b-length-top").innerHTML + "px";
fontShadowtop = document.getElementById("shadow-color-top").value;
//TOP MENU MARGINS PADDING
topMargintop = document.getElementById("top-margin-top").innerHTML + "px";
topMarginright = document.getElementById("top-margin-right").innerHTML + "px";
topMarginbottom = document.getElementById("top-margin-bottom").innerHTML + "px";
topMarginleft = document.getElementById("top-margin-left").innerHTML + "px";
topPaddingtop = document.getElementById("top-padding-top").innerHTML + "px";
topPaddingright = document.getElementById("top-padding-right").innerHTML + "px";
topPaddingbottom = document.getElementById("top-padding-bottom").innerHTML + "px";
topPaddingleft = document.getElementById("top-padding-left").innerHTML + "px";
//SUB MENU BORDERS	
borderWidthsub = document.getElementById("border-width-sub").innerHTML + "px";
borderColorsub = document.getElementById("bc-color-sub").value;
borderStylesub = document.getElementById("border-style-sub").value;
submenuWidth = document.getElementById("width-sub").innerHTML + "px";
//SUB BAR CORNERS
allRadiussub = document.getElementById("radius-sub").innerHTML + "px";
//SUB MENU BACKGROUND
backgroundColorsub = document.getElementById("back-color-sub").value;
gradientStartsub = document.getElementById("start-color-sub").value;
gradientEndsub = document.getElementById("end-color-sub").value;
//SUB MENU SHADOWS BOX
hShadowsub = document.getElementById("h-shadow-sub").innerHTML + "px";
vShadowsub = document.getElementById("v-shadow-sub").innerHTML + "px";
bShadowsub = document.getElementById("b-shadow-sub").innerHTML + "px";
colorShadowsub = document.getElementById("s-color-sub").value;
//SUB MENU FONTS
fontColorsub = document.getElementById("font-color-sub").value;
fontSizesub = document.getElementById("font-size-sub").innerHTML + "px";
fontWeightsub = document.getElementById("font-weight-sub").value;
fontStylesub = document.getElementById("font-style-sub").value;
fontNamesub = document.getElementById("font-name-sub").value;
//SUB MENU SHADOWS
fontHsub = document.getElementById("h-length-sub").innerHTML + "px";
fontVsub = document.getElementById("v-length-sub").innerHTML + "px";
fontBsub = document.getElementById("b-length-sub").innerHTML + "px";
fontShadowsub = document.getElementById("shadow-color-sub").value;
//HOVER MENU SUB MENU
textColorhover = document.getElementById("text-color-hover").value;
backgroundColorhover = document.getElementById("back-color-hover").value;
gradientStarthover = document.getElementById("start-color-hover").value;
gradientEndhover = document.getElementById("end-color-hover").value;
fontHhover = document.getElementById("h-shadow-hover").innerHTML + "px";
fontVhover = document.getElementById("v-shadow-hover").innerHTML + "px";
fontBhover = document.getElementById("b-shadow-hover").innerHTML + "px";
fontShadowhover = document.getElementById("s-color-hover").value;
//HOVER MENU TOP MENU
textColorhovertop = document.getElementById("text-color-hover-top").value;
backgroundColorhovertop = document.getElementById("back-color-hover-top").value;
gradientStarthovertop = document.getElementById("start-color-hover-top").value;
gradientEndhovertop = document.getElementById("end-color-hover-top").value;
fontHhovertop = document.getElementById("h-shadow-hover-top").innerHTML + "px";
fontVhovertop = document.getElementById("v-shadow-hover-top").innerHTML + "px";
fontBhovertop = document.getElementById("b-shadow-hover-top").innerHTML + "px";
fontShadowhovertop = document.getElementById("s-color-hover-top").value;
//TOP HOVER BAR CORNERS
Paddingtophover = document.getElementById("padding-top-hover").innerHTML + "px";
Paddingrighthover = document.getElementById("padding-right-hover").innerHTML + "px";
Paddingbottomhover = document.getElementById("padding-bottom-hover").innerHTML + "px";
Paddinglefthover = document.getElementById("padding-left-hover").innerHTML + "px";
//SUB MENU PADDING
subPaddingtop = document.getElementById("sub-padding-top").innerHTML + "px";
subPaddingright = document.getElementById("sub-padding-right").innerHTML + "px";
subPaddingbottom = document.getElementById("sub-padding-bottom").innerHTML + "px";
subPaddingleft = document.getElementById("sub-padding-left").innerHTML + "px";
//STYLE CHANGE
demoContainerDiv.style.backgroundColor=demoBackgroundColor;
//DROP-DOWN
dropDownAdd = document.getElementById("top-padding-top").innerHTML;
dropDownAddHover = document.getElementById("padding-top-hover").innerHTML;
dropDownMinusHover = document.getElementById("padding-bottom-hover").innerHTML;
defaultDrop = "18";
newTop = +defaultDrop + +dropDownAdd + +dropDownAddHover + +dropDownMinusHover;

this.css = '#menu-bar {\n';
this.css += '  width: 95%;\n';
this.css += '  margin: '+Margintop+' '+Marginright+' '+Marginbottom+' '+Marginleft+';\n';
this.css += '  padding: '+Paddingtop+' '+Paddingright+' '+Paddingbottom+' '+Paddingleft+';\n';
this.css += '  height: '+mbHeight+';\n';
this.css += '  line-height: 100%;\n';
this.css += '  border-radius: '+allRadius+';\n';
this.css += '  -webkit-border-radius: '+allRadius+';\n';
this.css += '  -moz-border-radius: '+allRadius+';\n';
this.css += '  box-shadow: '+shadowHOffset+' '+shadowVOffset+' '+shadowBlur+' '+shadowColor+';\n';
this.css += '  -webkit-box-shadow: '+shadowHOffset+' '+shadowVOffset+' '+shadowBlur+' '+shadowColor+';\n';
this.css += '  -moz-box-shadow: '+shadowHOffset+' '+shadowVOffset+' '+shadowBlur+' '+shadowColor+';\n';
if (document.getElementById("solid-back").checked==true) {
	this.css += '  background: '+backgroundColor+';\n';
}else{
	this.css += '  background: '+backgroundColor+';\n';
	this.css += '  background: linear-gradient(top,  '+gradientStart+',  '+gradientEnd+');\n';
	this.css += '  background: -ms-linear-gradient(top,  '+gradientStart+',  '+gradientEnd+');\n';
	this.css += '  background: -webkit-gradient(linear, left top, left bottom, from('+gradientStart+'), to('+gradientEnd+'));\n';
	this.css += '  background: -moz-linear-gradient(top,  '+gradientStart+',  '+gradientEnd+');\n';
}
this.css += '  border: '+borderStyle+' '+borderWidth+' '+borderColor+';\n';
this.css += '  position:relative;\n';
this.css += '  z-index:999;\n';
this.css += '}\n';
this.css += '#menu-bar li {\n';
this.css += '  margin: '+topMargintop+' '+topMarginright+' '+topMarginbottom+' '+topMarginleft+';\n';
this.css += '  padding: '+topPaddingtop+' '+topPaddingright+' '+topPaddingbottom+' '+topPaddingleft+';\n';
this.css += '  float: left;\n';
this.css += '  position: relative;\n';
this.css += '  list-style: none;\n';
this.css += '}\n';
// main level link
this.css += '#menu-bar a {\n';
this.css += '  font-weight: '+fontWeighttop+';\n';
this.css += '  font-family: '+fontNametop+';\n';
this.css += '  font-style: '+fontStyletop+';\n';
this.css += '  font-size: '+fontSizetop+';\n';
this.css += '  color: '+fontColortop+';\n';
this.css += '  text-decoration: none;\n';
this.css += '  display: block;\n';
this.css += '  padding: '+Paddingtophover+' '+Paddingrighthover+' '+Paddingbottomhover+' '+Paddinglefthover+';\n';
this.css += '  margin: 0;\n';
this.css += '  margin-bottom: '+topMarginbottom+';\n';
this.css += '  border-radius: '+topBRadius+';\n';
this.css += '  -webkit-border-radius: '+topBRadius+';\n';
this.css += '  -moz-border-radius: '+topBRadius+';\n';
this.css += '  text-shadow: '+fontHtop+' '+fontVtop+' '+fontBtop+' '+fontShadowtop+';\n';
this.css += '}\n';

this.css += '#menu-bar li ul li a {\n';
this.css += '  margin: 0;\n';
this.css += '}\n';

// main level link hover
this.css += '#menu-bar .active a, #menu-bar li:hover > a {\n';
if (document.getElementById("solid-back-hover-top").checked==true) {
	this.css += '  background: '+backgroundColorhovertop+';\n';
}else{
	this.css += '  background: '+backgroundColorhovertop+';\n';
	this.css += '  background: linear-gradient(top,  '+gradientStarthovertop+',  '+gradientEndhovertop+');\n';
	this.css += '  background: -ms-linear-gradient(top,  '+gradientStarthovertop+',  '+gradientEndhovertop+');\n';
	this.css += '  background: -webkit-gradient(linear, left top, left bottom, from('+gradientStarthovertop+'), to('+gradientEndhovertop+'));\n';
	this.css += '  background: -moz-linear-gradient(top,  '+gradientStarthovertop+',  '+gradientEndhovertop+');\n';
}
this.css += '  color: '+textColorhovertop+';\n';
this.css += '  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n';
this.css += '  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n';
this.css += '  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);\n';
this.css += '  text-shadow: '+fontHhovertop+' '+fontVhovertop+' '+fontBhovertop+' '+fontShadowhovertop+';\n';
this.css += '}\n';
// sub levels link hover
this.css += '#menu-bar ul li:hover a, #menu-bar li:hover li a {\n';
this.css += '  background: none;\n';
this.css += '  border: none;\n';
this.css += '  color: #666;\n';
this.css += '  -box-shadow: none;\n';
this.css += '  -webkit-box-shadow: none;\n';
this.css += '  -moz-box-shadow: none;\n';
this.css += '}\n';
this.css += '#menu-bar ul a:hover {\n';
if (document.getElementById("solid-back-hover").checked==true) {
	this.css += '  background: '+backgroundColorhover+' !important;\n';
}else{
	this.css += '  background: '+backgroundColorhover+' !important;\n';
	this.css += '  background: linear-gradient(top,  '+gradientStarthover+',  '+gradientEndhover+') !important;\n';
	this.css += '  background: -ms-linear-gradient(top,  '+gradientStarthover+',  '+gradientEndhover+') !important;\n';
	this.css += '  background: -webkit-gradient(linear, left top, left bottom, from('+gradientStarthover+'), to('+gradientEndhover+')) !important;\n';
	this.css += '  background: -moz-linear-gradient(top,  '+gradientStarthover+',  '+gradientEndhover+') !important;\n';
}
this.css += '  color: '+textColorhover+' !important;\n';
this.css += '  border-radius: 0;\n'
this.css += '  -webkit-border-radius: 0;\n';
this.css += '  -moz-border-radius: 0;\n';
this.css += '  text-shadow: '+fontHhover+' '+fontVhover+' '+fontBhover+' '+fontShadowhover+';\n';
this.css += '}\n';
// level 2 list
this.css += '#menu-bar li:hover > ul {\n';
this.css += '  display: block;\n';
this.css += '}\n';
this.css += '#menu-bar ul {\n';
if (document.getElementById("solid-back-sub").checked==true) {
	this.css += '  background: '+backgroundColorsub+';\n';
}else{
	this.css += '  background: '+backgroundColorsub+';\n';
	this.css += '  background: linear-gradient(top,  '+gradientStartsub+',  '+gradientEndsub+');\n';
	this.css += '  background: -ms-linear-gradient(top,  '+gradientStartsub+',  '+gradientEndsub+');\n';
	this.css += '  background: -webkit-gradient(linear, left top, left bottom, from('+gradientStartsub+'), to('+gradientEndsub+'));\n';
	this.css += '  background: -moz-linear-gradient(top,  '+gradientStartsub+',  '+gradientEndsub+');\n';
}
this.css += '  display: none;\n';
this.css += '  margin: 0;\n';
this.css += '  padding: 0;\n';
this.css += '  width: '+submenuWidth+';\n';
this.css += '  position: absolute;\n';
this.css += '  top: '+newTop+'px;\n';
this.css += '  left: 0;\n';
this.css += '  border: '+borderStylesub+' '+borderWidthsub+' '+borderColorsub+';\n';
this.css += '  border-radius: '+allRadiussub+';\n';
this.css += '  -webkit-border-radius: '+allRadiussub+';\n';
this.css += '  -moz-border-radius: '+allRadiussub+';\n';
this.css += '  -webkit-box-shadow: '+hShadowsub+' '+vShadowsub+' '+bShadowsub+' '+colorShadowsub+';\n';
this.css += '  -moz-box-shadow: '+hShadowsub+' '+vShadowsub+' '+bShadowsub+' '+colorShadowsub+';\n';
this.css += '  box-shadow: '+hShadowsub+' '+vShadowsub+' '+bShadowsub+' '+colorShadowsub+';\n';
this.css += '}\n';
// dropdown
this.css += '#menu-bar ul li {\n';
this.css += '  float: none;\n';
this.css += '  margin: 0;\n';
this.css += '  padding: 0;\n';
this.css += '}\n';
this.css += '#menu-bar ul a {\n';
this.css += '  padding:'+subPaddingtop+' '+subPaddingright+' '+subPaddingbottom+' '+subPaddingleft+';\n';
this.css += '  color:'+fontColorsub+' !important;\n';
this.css += '  font-size:'+fontSizesub+';\n';
this.css += '  font-style:'+fontStylesub+';\n';
this.css += '  font-family:'+fontNamesub+';\n';
this.css += '  font-weight: '+fontWeightsub+';\n';
this.css += '  text-shadow: '+fontHsub+' '+fontVsub+' '+fontBsub+' '+fontShadowsub+';\n';
this.css += '}\n';
// rounded corners for first and last child
this.css += '#menu-bar ul li:first-child > a {\n';
this.css += '  border-top-left-radius: '+allRadiussub+';\n';
this.css += '  -webkit-border-top-left-radius: '+allRadiussub+';\n';
this.css += '  -moz-border-radius-topleft: '+allRadiussub+';\n';
this.css += '  border-top-right-radius: '+allRadiussub+';\n';
this.css += '  -webkit-border-top-right-radius: '+allRadiussub+';\n';
this.css += '  -moz-border-radius-topright: '+allRadiussub+';\n';
this.css += '}\n';
this.css += '#menu-bar ul li:last-child > a {\n';
this.css += '  border-bottom-left-radius: '+allRadiussub+';\n';
this.css += '  -webkit-border-bottom-left-radius: '+allRadiussub+';\n';
this.css += '  -moz-border-radius-bottomleft: '+allRadiussub+';\n';
this.css += '  border-bottom-right-radius: '+allRadiussub+';\n';
this.css += '  -webkit-border-bottom-right-radius: '+allRadiussub+';\n';
this.css += '  -moz-border-radius-bottomright: '+allRadiussub+';\n';
this.css += '}\n';
// clearfix
this.css += '#menu-bar:after {\n';
this.css += '  content: ".";\n';
this.css += '  display: block;\n';
this.css += '  clear: both;\n';
this.css += '  visibility: hidden;\n';
this.css += '  line-height: 0;\n';
this.css += '  height: 0;\n';
this.css += '}\n';
this.css += '#menu-bar {\n';
this.css += '  display: inline-block;\n';
this.css += '}\n';
this.css += '  html[xmlns] #menu-bar {\n';
this.css += '  display: block;\n';
this.css += '}\n';
this.css += '* html #menu-bar {\n';
this.css += '  height: 1%;\n';
this.css += '}';

codeDiv=document.getElementById("newcode");			
if(codeDiv.innerText){
	codeDiv.innerText=this.css
}else{
	codeDiv.textContent=this.css
}

$('style').remove();
$('head').append('<style type="text/css">' + this.css + '</style>');
return this.css;	

}