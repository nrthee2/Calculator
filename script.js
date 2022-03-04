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


//display function
let btnnumber = document.querySelectorAll("button.number"); //selects all buttons with the class number
let display = document.querySelector(".display");
let btnoperator = document.querySelectorAll("button.operator");
let displayPrevValue = 0;
let displayNextValue = 0;
let operator;


//first value
btnnumber.forEach((button) => {
      button.addEventListener("click", () => {
           display.textContent = display.textContent + button.textContent;      
      });
 });

//operator
btnoperator.forEach((button) => {
    button.addEventListener("click", () => {
        displayPrevValue = parseInt(display.textContent, 10);
        operator = button.textContent;
        display.textContent = "";
        alert(displayPrevValue);
    });
});

//second value


//equals
let equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
   /*  if (operator === "/") {
        alert("/");
    } else if (operator === "x") {
        alert("x");
    } else if (operator === "+") {
        alert("+");
    } */
    displayNextValue = parseInt(display.textContent, 10);
    alert(displayNextValue + displayPrevValue);
}); 