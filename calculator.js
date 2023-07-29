const curr = document.querySelector(".curr");
const last = document.querySelector(".last");
let firstOperand = "";
let secondOperand = "";

const numberButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");

let shouldReset = false;
let currOperator = null;

clearButton.addEventListener("click", () => allClear());
deleteButton.addEventListener("click", () => del());
decimal.addEventListener("click", () => addPoint());
equals.addEventListener("click", () => evaluate());

numberButtons.forEach((button) => button.addEventListener("click", () => 
    add(button.textContent)));

operatorButtons.forEach((button) => button.addEventListener("click", () =>
    canOperate(button.textContent)));

window.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9)
        add(e.key);

    if (e.key === ".")
        addPoint();

    if (e.key === "=" || e.key === "Enter")
        evaluate();

    if (e.key === "Backspace")
        del();

    if (e.key === "Escape")
        allClear();

    if (e.key === "+" || e.key === "-"  || e.key === "^")
        canOperate(e.key);

    if (e.key === "x" || e.key === "*" || e.key === "X")
        canOperate("x");

    if (e.key === "/")
        canOperate("÷");
});

function allClear() {
    curr.textContent = "0";
    last.textContent = "";
    firstOperand = "";
    secondOperand = "";
    currOperator = null;
}

function del() {
    if (curr.textContent.length > 0)
        curr.textContent = curr.textContent.slice(0, -1);

    if (curr.textContent.length === 0)
        curr.textContent = "0";
}

function resetCurr() {
    curr.textContent = "";
    shouldReset = false;
}

function add(num) {
    if (shouldReset === true)
        resetCurr();

    while (curr.textContent[0] === "0")
        curr.textContent = curr.textContent.slice(1);
    curr.textContent += num;
}

function addPoint() {
    if (shouldReset)
        allClear();

    if (curr.textContent.includes('.')) 
        return;

    curr.textContent += '.'
    num = curr.textContent;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function canOperate(operator) {
    if (currOperator !== null)
        evaluate();

    currOperator = operator;
    firstOperand = curr.textContent;
    last.textContent = `${firstOperand} ${currOperator}`;
    shouldReset = true;
}

function evaluate() {
    if (currOperator === null || shouldReset)
        return;

    if (currOperator === "÷" && curr.textContent === "0") {
        alert("You can't divide by 0!")
        return;
    }
    
    secondOperand = curr.textContent;
    last.textContent = `${firstOperand} ${currOperator} ${secondOperand} =`;
    curr.textContent = roundResult(operate(firstOperand, secondOperand, currOperator));
    currOperator = null;
}

function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return sum(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            if (b === 0)
                return null;
            return divide(a, b);
        case "^":
            return power(a, b);
        default:
            return null;
    }
}

function sum(a, b) {
    return a + b;
}
  
function subtract(a, b) {
    return a - b;
}
  
function multiply(a, b) {
    return a * b;
}
  
function divide(a, b) {
    return a / b;
}

function power(a, b) {
    return a ** b;
}