//your JS code here. If required.
let cnt=0;
let inc=document.getElementById("inc");
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
	cnt++;
	inc.innerText=cnt;
});