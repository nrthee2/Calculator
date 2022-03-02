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