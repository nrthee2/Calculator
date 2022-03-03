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

//display function
const btnnumber = document.querySelectorAll("button.number"); //selects all buttons with the class number
let display = document.querySelector(".display");
let displayPrevValue = 0;
let displayNextValue = 0;

btnnumber.forEach((button) => {                               //loops through the nodelist and adds eventlisteners for each button
    button.addEventListener("click", () => {
        display.textContent = display.textContent + button.textContent;
        displayPrevValue = parseInt(display.textContent, 10);
    });
});

const test = document.querySelector("#equals");
test.addEventListener("click", () => {
    alert(displayPrevValue);
});
