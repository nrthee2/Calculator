//basic calculator operations, done as arrow functions for conciseness
let add = (a, b) => a+b;

let subtract = (a, b) => a-b;

let multiply = (a, b) => a*b;

let divide = (a, b) => {
    if (b === 0){
        return display.textContent = "Can't divide by zero";
    } 
    return a/b;
};

//top 2 buttons
const btnfirst = document.getElementById("first");
btnfirst.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

const btnsecond = document.getElementById("second");
btnsecond.addEventListener("click", () => {
    alert(":)");
});

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
const displaySecondary = document.querySelector(".displaysecondary");
display.textContent = 0;
let operator;
let prevValue = 0;
let currValue = 0;
let nextValue = 0;
let count = 0;
let countdecimal = 0;
let countdisplay = 0;
let displayHold;

//populate the display
const btnnumber = document.querySelectorAll("button.number");
btnnumber.forEach((button) => {
    button.addEventListener("click", () => {
        if (countdisplay === 0) {
            display.textContent = "";
            display.textContent = Number(display.textContent + button.textContent);
        } else if (countdisplay >= 1) {
            display.textContent = Number(display.textContent + button.textContent);
        }
        ++countdisplay;
    });
});

//operator click
const btnoperator = document.querySelectorAll("button.operator");
btnoperator.forEach((button) => {
    button.addEventListener("click", () => {
        countdisplay = 0;
        countdecimal = 0;
        if (count === 0) {
            prevValue = Number(display.textContent);
                displayHold = (displaySecondary.textContent = display.textContent + " " + button.textContent + " ");
            if (button.textContent === "+") {
                operator = add;
            } else if (button.textContent === "-") {
                operator = subtract;
            } else if (button.textContent === "x") {
                operator = multiply;
            } else if (button.textContent === "÷") {
                operator = divide;
            } 
        } else if (count >= 1) {
            nextValue = Number(display.textContent);
            currValue = operate(operator, prevValue, nextValue);
            prevValue = currValue;
            displaySecondary.textContent = displayHold + display.textContent + " " + button.textContent + " ";
            if (button.textContent === "+") {
                operator = add;
            } else if (button.textContent === "-") {
                operator = subtract;
            } else if (button.textContent === "x") {
                operator = multiply;
            } else if (button.textContent === "÷") {
                operator = divide;
            }
        }
        displayHold = displaySecondary.textContent;
        if (count === 0) {
            display.textContent = prevValue;
        } else {
            display.textContent = currValue;
        }
        ++count;
    });
});

//clear click
const btnclear = document.querySelector("#clear");
btnclear.addEventListener("click", () => {
    count = 0;
    countdecimal = 0;
    countdisplay = 0;
    prevValue = 0;
    nextValue = 0;
    currValue = 0;
    operator = "";
    displayHold = "";
    display.textContent = 0;
    displaySecondary.textContent = "";
});

//delete click
const btndelete = document.querySelector("#delete");
btndelete.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
});

//decimal click
const btndecimal = document.querySelector("#decimal");
btndecimal.addEventListener("click", () => {
    if (countdecimal === 0) {
        display.textContent = display.textContent + ".";
    }
    ++countdecimal;
});

//equals click
const btnequals = document.querySelector("#equals");
btnequals.addEventListener("click", () => {
    nextValue = Number(display.textContent);
    currValue = operate(operator, prevValue, nextValue);
    prevValue = currValue;
    display.textContent = currValue;
    displaySecondary.textContent = displayHold + nextValue + " =";
});

//keyboard support
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ["+", "-", "x", "/", "=", "Backspace", "Delete"];
let operatorKey;
document.addEventListener("keydown", (event) =>{
    let num = event.key;
    if (numbers.includes(Number(num))) {
        if (countdisplay === 0) {
            display.textContent = "";
            display.textContent = Number(display.textContent + num);
        } else if (countdisplay >= 1) {
            display.textContent = Number(display.textContent + num);
        }
        ++countdisplay;
    }
    if (operators.includes(num)) {
        if (num === "+") {
            operatorKey = "add";
            document.getElementById(`${operatorKey}`).click();
        } else if (num === "-") {
            operatorKey = "subtract";
            document.getElementById(`${operatorKey}`).click();
        } else if (num === "x") {
            operatorKey = "multiply";
            document.getElementById(`${operatorKey}`).click();
        } else if (num === "/") {
            operatorKey = "divide";
            document.getElementById(`${operatorKey}`).click();
        } else if (num === "=") {
            operatorKey = "equals";
            document.getElementById(`${operatorKey}`).click();
        } else if (num === "Backspace") {
            operatorKey = "delete";
            document.getElementById(`${operatorKey}`).click();
        } else if (num === "Delete") {
            operatorKey = "clear";
            document.getElementById(`${operatorKey}`).click();
        }
    };
});
