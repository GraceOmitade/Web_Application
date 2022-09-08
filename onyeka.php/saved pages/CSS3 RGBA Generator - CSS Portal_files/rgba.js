function rgba() {

	demoDiv=document.getElementById("demo");
	codeDiv=document.getElementById("code");
			
			redV=document.getElementById("red-value").innerHTML;
			greenV=document.getElementById("green-value").innerHTML;
			blueV=document.getElementById("blue-value").innerHTML;
			opacityV=document.getElementById("opacity-value").innerHTML;
			
			rgbaV = "rgba(" + redV + ", " + greenV + ", " + blueV + ", " + opacityV + ")";
				
	
			demoDiv.style.backgroundColor=rgbaV;				

			if(codeDiv.innerText){
				codeDiv.innerText="background-color: " + rgbaV + "; \n" + "color: " + rgbaV + ";";
				}
			else {
				codeDiv.textContent="background-color: " + rgbaV + "; \n" + "color: " + rgbaV + ";";
				}

	}
window.onload=rgba;