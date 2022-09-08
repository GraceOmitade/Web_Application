function shadowme() {

	
	demoDiv=document.getElementById("demo");
	codeDiv=document.getElementById("code");
	textColor=document.getElementById("t-color").value;
	backgroundColor=document.getElementById("b-color").value;	
	
	var theShadow="";
	var shadowHOffset="";
	var shadowVOffset="";
	var shadowBlur="";
	var shadowColor="";
	
				
			shadowHOffset=document.getElementById("h-length-value").innerHTML;
			shadowVOffset=document.getElementById("v-length-value").innerHTML;
			shadowBlur=document.getElementById("b-length-value").innerHTML;
			shadowColor=document.getElementById("s-color").value;
			
			if (theShadow==""){
				theShadow= shadowHOffset + " " + shadowVOffset + " " + shadowBlur + " " + shadowColor;
			}
			
			else {
				theShadow= theShadow + ", " + shadowHOffset + " " + shadowVOffset + " " + shadowBlur + " " + shadowColor
			}
	
	
	
	if (demoDiv) {
			demoDiv.style.backgroundColor=backgroundColor;		
			demoDiv.style.color=textColor;
			demoDiv.style.textShadow=theShadow;
			if(codeDiv.innerText){
				codeDiv.innerText="text-shadow: " + theShadow + ";";
				}
			else {
				codeDiv.textContent="text-shadow: " + theShadow + ";";
				
				}
			}
	}


window.onload=shadowme;