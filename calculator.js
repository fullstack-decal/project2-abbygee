//Check out calculator_hints.js for hints if you're stuck
//It's like pressing backspace; it'll delete the last character typed. 
// If it's clicked when there's only one digit, it sets the current number to be 0.

//Global Scope Definitions
let curr = 0; 
const button = document.getElementById("five-button");
const result = document.querySelector(".result-screen"); // result screen on calculator

button.addEventListener("click", add);

function add(){
    strNum = button.textContent;
    intNum = parseInt(strNum);
    updateTotal(5);
}

function updateTotal(toAdd){
    curr += toAdd;
    result.innerText = curr;
}