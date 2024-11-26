//Check out calculator_hints.js for hints if you're stuck

//Global Scope Definitions
let curr = 0; // our current total/result
let edit = 0; // number user wants to add, multiply, etc. to current total
const result = document.querySelector(".result-screen"); // result screen on calculator
let currEdit = false; // True if user is still typing a number (more than 1 digit), False if result-screen is displaying curr
let currFunc = "";

// Edge cases/functions I assumed we don't have to account for (judging from spec):

// When user clicks a number after an equals operation (they should just use the clear button)
// When user backspaces after an equals operation (they should again use the clear button, and input the number they want)

// Traditional iOS calculator will keep performing the same operation with the same input if operation button is clicked continuously 
//      (if we must use the equals button to perform the operation then this is not possible)

function add(){
    currFunc = "add";
    currEdit = true;
}

function mul(){
    currFunc = "mul"
    currEdit = true;
}

function div(){
    currFunc = "div"
    currEdit = true;
}

function sub(){
    currFunc = "sub"
    currEdit = true;
}

function equalSign(){
    switch (currFunc){
        case "add":
            curr += edit
            break;
        case "sub":
            curr -= edit;
            break;
        case "div":
            curr = curr / edit;
            break;
        case "mul":
            curr = curr * edit;
            break;
        default:
            console.log("no operation!?");
    }
    edit = 0;
    result.innerText = curr;
    currFunc = "";
}

function updateEdit(int){
    if (currEdit === false){
        if(curr == 0){
            curr = int;
        } else {
            strNum = curr.toString();
            strInt = int.toString();
            strNum = strNum.concat(strInt);
    
            curr = parseInt(strNum);
        }
        result.innerText = curr;
    } else {
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
}

// Resets calculation, clearing result screen
function clearEdit(){
    curr = 0;
    edit = 0;
    currEdit = false;
    currFunc = "";
    result.innerText = 0;
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