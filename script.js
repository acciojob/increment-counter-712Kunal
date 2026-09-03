//your JS code here. If required.
let cnt=0;
let inc=document.getElementById("counter");
let btn=document.getElementById("incrementBtn");

btn.addEventListener("click",()=>{
	cnt++;
	inc.innerText=cnt;
});