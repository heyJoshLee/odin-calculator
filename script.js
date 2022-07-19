let input = "";
const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.number-button');
const equalsButton = document.querySelector('#equals-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const clearButton = document.querySelector('#clear-button');

function setUpEventListeners() {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            addToInput(button.getAttribute('data-value'));
            populateDisplay(input);
        })
    })

    equalsButton.addEventListener('click', () => {
        input = calculate(input);
        populateDisplay(input);
    })

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            addToInput(button.getAttribute('data-value'));
            populateDisplay(input);
        })
    })

    clearButton.addEventListener('click', () => {
        input = "";
        populateDisplay(input);
    })
}

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) { return 0; }
    return a / b;
}


function populateDisplay(text) {
    display.textContent = text;
}

function addToInput(newValue) {
    if (!isNaN(newValue)) {
        input += newValue
    } else {
        input += ' ';
        input += `${newValue} `;
    }
}

function returnAOperatorB(input) {
    return input.split(' ');
}

function determineOperation(textInputOfOperator) {
    switch (textInputOfOperator) {
        case '*':
            return multiply;
            break;
        case '/':
            return divide;
            break;
        case '-':
            return subtract;
            break;
        case '+':
            return add;
            break;
        default: 
            return textInputOfOperator
    }
}

function operate(operatorFunction, num1, num2) {
    return operatorFunction(num1, num2)
}

function calculate(userInput) {
    if (returnAOperatorB(userInput).length < 3) { 
        alert("Input error");
        return "";
    }
    const [firstNumber, operator, secondNumber] = returnAOperatorB(userInput);
    const operation = determineOperation(operator);
    if (!['-', '+', '*', '/'].includes(operator)) {
        alert('Not a valid operator!');
        return "";
    } else {
        return operate(operation, firstNumber, secondNumber).toFixed(5);
    }
}

setUpEventListeners();