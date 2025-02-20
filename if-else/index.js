const inputText = document.getElementById("inputId");
const submitBtn = document.getElementById("btn");
const output = document.getElementById("output");

let age;

submitBtn.onclick = function(){
    
    age = inputText.value;
    age = Number(age);  

    if(age >= 18){
        output.textContent = "You are allowed to enter the site";
    }
    else if(age < 18){
        output.textContent = "You are NOT allowed to enter the site";
    }
    else{
        output.textContent = "Enter a valid number";
    }
}
