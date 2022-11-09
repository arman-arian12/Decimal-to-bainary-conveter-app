const result = document.getElementById("result");
const btn = document.getElementById("btn");  
 

function binary(e){
   e.preventDefault();
   const inputValue = document.getElementById("inputvalue").value;

 if(inputValue===""){
    alert("pleas enter a number")
 }else if(inputValue < 0 ){
    alert("pleas enter a positive number")
 }else{
    bainaryNumber = Number(inputValue).toString(2);
    result.innerText = bainaryNumber;
 }
};

btn.addEventListener("click",binary);