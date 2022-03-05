//basic calculator operations, done as arrow functions for conciseness
let add = (a, b) => a+b;

let subtract = (a, b) => a-b;

let multiply = (a, b) => a*b;

let divide = (a, b) => {
    if (b === 0){
        return "Division by zero is undefined!"
    } 
    return a/b;
};

//operate, calling an operator and two numbers, returning one of the basic operations
let operate = (operator, a, b) => {
    if (operator === add){
        return add(a, b);
    } else if (operator === subtract){
        return subtract(a, b);
    } else if (operator === multiply){
        return multiply(a, b);
    } else if (operator === divide){
        return divide(a, b);
    }
};


//------------------------------------------------------------------------------------------------------------
const display = document.querySelector(".display");
let operator;
let prevValue = 0;
let currValue = 0;
let nextValue = 0;
let count = 0;

//populate the display
const btnnumber = document.querySelectorAll("button.number");
btnnumber.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = display.textContent + button.textContent;
    });
});

//operator click
const btnoperator = document.querySelectorAll("button.operator");
btnoperator.forEach((button) => {
    button.addEventListener("click", () => {

        if (count === 0) {
            prevValue = Number(display.textContent);
                        if (button.textContent === "+") {
                operator = add;
            } else if (button.textContent === "-") {
                operator = subtract;
            } else if (button.textContent === "x") {
                operator = multiply;
            } else if (button.textContent === "÷") {
                operator = divide;
            };
        } else {
            nextValue = Number(display.textContent);
        }
        ++count;

        display.textContent = "";
        console.log("prevvalue: " + prevValue);
        console.log("nextvalue: " + nextValue);
        console.log("currValue: " + currValue);
        console.log(operator);
    });
});


//declarations
/* let btnnumber = document.querySelectorAll("button.number");
let display = document.querySelector(".display");
let displaySecondary = document.querySelector(".displaysecondary");
let btnoperator = document.querySelectorAll("button.operator");
let displayPrevValue = 0; //first number
let displayNextValue = 0; //second number (after operator)
let displayCurrValue = 0; //current number (after equals)
let operator;

 //counter on operator clicks
let count = 0;

document.getElementById("add").onclick = function() {
    ++count;
};
document.getElementById("subtract").onclick = function() {
    ++count;
};
document.getElementById("multiply").onclick = function() {
    ++count;
};
document.getElementById("divide").onclick = function() {
    ++count;
};

//first number
btnnumber.forEach((button) => {
      button.addEventListener("click", () => {
           display.textContent = display.textContent + button.textContent;      
      });
 });

//operator button
btnoperator.forEach((button) => {
    button.addEventListener("click", () => {
        displayPrevValue = Number(display.textContent);
        operator = button.textContent;
        displaySecondary.textContent = display.textContent + " " + operator + " ";
        display.textContent = "";
    });
});

//clear button
let clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    displaySecondary.textContent = "";
    displayPrevValue = 0;
    displayNextValue = 0;
    displayCurrValue = 0;
});

//delete button
let deletebtn = document.querySelector("#delete");
deletebtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
});

//decimal button
let decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    display.textContent = display.textContent + ".";
});


//equals button
let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    displayNextValue = Number(display.textContent);
    
    if (operator === "÷") {
        displayCurrValue = operate(divide, displayPrevValue, displayNextValue);
        displaySecondary.textContent = displaySecondary.textContent + displayNextValue + " = ";
        display.textContent = displayCurrValue;
    } else if (operator === "x") {
        displayCurrValue = operate(multiply, displayPrevValue, displayNextValue);
        displaySecondary.textContent = displaySecondary.textContent + displayNextValue + " = ";
        display.textContent = displayCurrValue;
    } else if (operator === "+") {
        displayCurrValue = operate(add, displayPrevValue, displayNextValue);
        displaySecondary.textContent = displaySecondary.textContent + displayNextValue + " = ";
        display.textContent = displayCurrValue;
    } else if (operator === "-") {
        displayCurrValue = operate(subtract, displayPrevValue, displayNextValue);
        displaySecondary.textContent = displaySecondary.textContent + displayNextValue + " = ";
        display.textContent = displayCurrValue;
    }
}); 

 */