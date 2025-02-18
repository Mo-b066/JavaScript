/*
const max = 100;
const min = 50;

//let x = Math.floor(Math.random() * 6) + 1;
let x = Math.floor(Math.random() * (max - min)) + min; 

console.log(x);

*/

let count = 0;
const random = document.getElementById("button");
const label = document.getElementById("label");
random.onclick = function(){
    count = Math.floor(Math.random() * 100);
    label.textContent= count;
}