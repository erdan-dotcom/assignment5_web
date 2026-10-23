let hoverBox = document.getElementById('hover-box');
hoverBox.addEventListener('mouseover', function() {
    hoverBox.style.backgroundColor = "lightgreen";
});
hoverBox.addEventListener('mouseout', function() {
    hoverBox.style.backgroundColor = "lightblue";
});

let liveInput = document.getElementById('live-input');
let liveOutput = document.getElementById('live-output');
liveInput.addEventListener('keyup', function() {
    liveOutput.innerText = liveInput.value;
});

document.getElementById('calc-btn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('calc-num1').value);
    let num2 = parseFloat(document.getElementById('calc-num2').value);
    let op = document.getElementById('calc-op').value;
    let resultElement = document.getElementById('calc-result');
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Error: Input numbers";
        return;
    }

    if (op === "+") result = num1 + num2;
    else if (op === "-") result = num1 - num2;
    else if (op === "*") result = num1 * num2;
    else if (op === "/") {
        if (num2 === 0) {
            resultElement.innerText = "Error: Division by zero";
            return;
        }
        result = num1 / num2;
    }
    resultElement.innerText = result;
});