//Check out calculator_hints.js for hints if you're stuck

//Global Scope Definitions
let curr = 0; // our current total/result
let edit = 0; // number user wants to add, multiply, etc. to current total
const button = document.getElementById("five-button");
const result = document.querySelector(".result-screen"); // result screen on calculator
let currEdit = false; // True if user is still typing a number (more than 1 digit), False if result-screen is displaying curr

// button.addEventListener("click", add);

// function add(){
//     strNum = button.textContent;
//     intNum = parseInt(strNum);
//     updateTotal(5);
// }

// function updateTotal(toAdd){
//     curr += toAdd;
//     result.innerText = curr;
// }

function updateEdit(int){
    currEdit = true;
    if(edit == 0){
        edit = int;
    } else {
        strNum = edit.toString();
        strInt = int.toString();
        strNum = strNum.concat(strInt);

        edit = parseInt(strNum);
    }
    result.innerText = edit;
}

// Resets calculation, clearing result screen
function clearEdit(){
    curr = 0;
    edit = 0;
    currEdit = false;
    result.innerText = edit;
}

// It's like pressing backspace; it'll delete the last character typed. 
// If it's clicked when there's only one digit, it sets the current number to be 0.
function backInt(){
    if(edit == 0){
        edit = 0;
    } else if(edit < 10){
        edit = 0;
    } else {
        strNum = edit.toString();
        strNum = strNum.slice(0, -1);

        edit = parseInt(strNum);
    }
    result.innerText = edit;
}