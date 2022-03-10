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

//top 2 buttons
const btnfirst = document.getElementById("first");
btnfirst.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

btnfirst.addEventListener("mouseover", () => {
    btnfirst.style.backgroundColor = "black";
    btnfirst.style.color = "orange";
    btnfirst.style.transform = "scale(1.2)";
    btnfirst.style.boxShadow = "0 0 1rem orange";
    btnfirst.addEventListener("mouseout", () => {
        btnfirst.style.backgroundColor = "orange";
        btnfirst.style.color = "black";
        btnfirst.style.transform = "scale(1)";
        btnfirst.style.boxShadow = "0 0 0";
    });
});

//clicks
const btnsecond = document.getElementById("second");
const header = document.querySelector(".header");
const div = document.createElement("div");
const div2 = document.createElement("div");
const img = document.createElement("img");
let goodday;
let gooddaycounter = 0;
btnsecond.addEventListener("click", () => {
    if (gooddaycounter === 0) {
        alert("😊 Remélem is. Ennek örömére három aprócska részlet. 😊");
        ++gooddaycounter;
    }
    let rand = Math.floor(Math.random() * 10);
    if (goodday === "done3") {
        rand = 4;
    } else if (goodday === "done37") {
        rand = 8;
    } else if (goodday === "done7") {
        rand = 3;
    }
    div.setAttribute("style", "white-space: pre;");
    div.style.marginTop = "10px";
    div.style.marginBottom = "10px";
    if (rand <= 3) { 
        div.textContent = "- De tudja-e, miért akarta titokban tartani? \r\n - Ördögadta! Hát azért, hogy ki ne tudódjék - szólt Porthos";
        img.src = "https://www.dumaspere.com/images/graphisme/homepage/potrait4.jpg";
        img.style.height = "100px";
        img.style.width = "100px";
        goodday = "done3";
    } else if (rand > 3 && rand <= 7) {
        div.textContent = "- Ó, el vagyok árulva, mindent tudnak. \r\n - Mindig mindent tudnak - mondta Porthos, aki semmit sem tudott."
        img.src = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Alexandre_Dumas_6.jpg";
        img.style.height = "100px";
        img.style.width = "100px";
        goodday = "done37";
    } else if (rand > 7) {
        div.textContent = "- Tyű, de furcsa história - mondta Porthos, a fejét lassan felemelte, s elképedve nézett a barátaira. - Lehetséges, hogy hirtelen értek angolul? Minden szavukat megértettem. \r\n - Igen, mert spanyolul beszélünk, barátom - mondta Athos a szokásos hidegvérűséggel. \r\n - Mennykő belé - káromkodott Porthos. - Micsoda bosszúság, már azt hittem, egy nyelvvel többet tudok."
        img.src = "https://www.dumaspere.com/images/galeries/caricatures/tonneau_danaides.jpg"
        img.style.height = "100px";
        img.style.width = "100px";
        goodday = "done7";
    }
    header.appendChild(div);
    header.appendChild(img);
});

//hover effects
btnsecond.addEventListener("mouseover", () => {
    btnsecond.style.backgroundColor = "black";
    btnsecond.style.color = "orange";
    btnsecond.style.transform = "scale(1.2)";
    btnsecond.style.boxShadow = "0 0 1rem orange";
    btnsecond.addEventListener("mouseout", () => {
        btnsecond.style.backgroundColor = "orange";
        btnsecond.style.color = "black";
        btnsecond.style.transform = "scale(1)";
        btnsecond.style.boxShadow = "0 0 0";
    });
});


//------------------------------------------------------------------------------------------------------------


//declarations
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
    countdisplay = 0;
    countdecimal = 0;
    nextValue = Number(display.textContent);
    currValue = operate(operator, prevValue, nextValue);
    prevValue = currValue;
    display.textContent = currValue;
    displaySecondary.textContent = displayHold + nextValue + " =";
});


//------------------------------------------------------------------------------------------------------------


//button transition for hover effects
btnnumber.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "yellow";
        button.style.color = "black";
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 0 1rem red";
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "black";
            button.style.color = "orange";
            button.style.transform = "scale(1)";
            button.style.boxShadow = "0 0 0"; 
        });
    });
});


//operator transition for hover
btnoperator.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "black";
        button.style.color = "orange";
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 0 1rem orange";
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "orange";
            button.style.color = "black";
            button.style.transform = "scale(1)";
            button.style.boxShadow = "0 0 0";
        });
    });
});

//clear, delete, decimal, equals hover
btnclear.addEventListener("mouseover", () => {
    btnclear.style.backgroundColor = "yellow";
    btnclear.style.color = "black";
    btnclear.style.transform = "scale(1.1)";
    btnclear.style.boxShadow = "0 0 1rem red";
    btnclear.addEventListener("mouseout", () => {
        btnclear.style.backgroundColor = "black";
        btnclear.style.color = "red";
        btnclear.style.transform = "scale(1)";
        btnclear.style.boxShadow = "0 0 0";
    });
});

btndelete.addEventListener("mouseover", () => {
    btndelete.style.backgroundColor = "yellow";
    btndelete.style.color = "black";
    btndelete.style.transform = "scale(1.1)";
    btndelete.style.boxShadow = "0 0 1rem red";
    btndelete.addEventListener("mouseout", () => {
        btndelete.style.backgroundColor = "black";
        btndelete.style.color = "red";
        btndelete.style.transform = "scale(1)";
        btndelete.style.boxShadow = "0 0 0";
    });
});

btndecimal.addEventListener("mouseover", () => {
    btndecimal.style.backgroundColor = "yellow";
    btndecimal.style.color = "black";
    btndecimal.style.transform = "scale(1.1)";
    btndecimal.style.boxShadow = "0 0 1rem red";
    btndecimal.addEventListener("mouseout", () => {
        btndecimal.style.backgroundColor = "black";
        btndecimal.style.color = "red";
        btndecimal.style.transform = "scale(1)";
        btndecimal.style.boxShadow = "0 0 0";
    });
});

btnequals.addEventListener("mouseover", () => {
    btnequals.style.backgroundColor = "black";
    btnequals.style.color = "orange";
    btnequals.style.transform = "scale(1.1)";
    btnequals.style.boxShadow = "0 0 1rem orange";
    btnequals.addEventListener("mouseout", () => {
        btnequals.style.backgroundColor = "orange";
        btnequals.style.color = "black";
        btnequals.style.transform = "scale(1)";
        btnequals.style.boxShadow = "0 0 0";
    });
});

//------------------------------------------------------------------------------------------------------------


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
