const curr = document.querySelector(".curr");
const last = document.querySelector(".last");

// all of the necessary math functions
function sum() {
    last.textContent = Number(curr.textContent) + Number(last.textContent) + " +";

    curr.textContent = Number(curr.textContent) + Number(last.textContent);
}

function subtract() {
    curr.textContent = Number(curr.textContent) - Number(last.textContent);
}

function multiply() {
    curr.textContent = Number(curr.textContent) * Number(last.textContent);
}

function divide() {
    curr.textContent = Number(curr.textContent) / Number(last.textContent);
}

function power() {
    curr.textContent = Number(curr.textContent) ** Number(last.textContent);
}

function calculate() {
    if (last.textContent != "") {
        
    }
}

// other calculator buttons
function allClear() {
    curr.textContent = "0";
    last.textContent = "";
}

function del() {
    if (curr.textContent.length > 0)
        curr.textContent = curr.textContent.slice(0, -1);

    if (curr.textContent.length === 0)
        curr.textContent = "0";
}

function add(num) {
    while (curr.textContent[0] === "0")
        curr.textContent = curr.textContent.slice(1);
    curr.textContent += num;
}