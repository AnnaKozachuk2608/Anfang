"use strict"
function UpdateField(n) {
  document.getElementById("privet").setAttribute("value", n);
}

let left =""
let right = ""
let next = ""

function NumPressed(n){
if (n==="+"){
  if (left === "") {
    console.log("false")
  }
  else {
    next = "+";
  }
}
else if (n==="-") {
  if (left === "") {
    console.log("false")
  }
  else {
    next = "-";
  }
}

else if (n==="=") {
  if(left !== "" && right !== "" && next !== "")
  {
   if (next === "+")
   { 
     let itog = Number(left) + Number(right);
     UpdateField(itog);
   }
   if (next === "-")
   { 
     let itog = Number(left) - Number(right);
     UpdateField(itog);
   }
  }
  else { 
    console.log ("false");

  }
}

else if (n==="C") {

 left = ""
 right = ""
 next = ""



}
else { 
  if (next==="") {
    left = left + n;
  }
  else {
    right = right + n;
  
  }

}
if (n!=="=") {
 UpdateField(left + " " + next + " " + right)
}
}





/*function rechner(){
document.getElementById("privet").setAttribute("value", "string");
document.getElementById("privet").style.color="blue";
console.log("hddf");
}
window.onload=rechner;*/
