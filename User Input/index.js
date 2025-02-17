/*
// Easy way vie window.prompt
let username;

username= window.prompt("What is your name?");
console.log(username);

*/

// More advanced way via HTMLtext input

let username;
document.getElementById("button1").onclick = function(){
    username = document.getElementById("input1").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}


