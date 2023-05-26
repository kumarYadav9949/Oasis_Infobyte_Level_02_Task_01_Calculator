let calculationDisplay = document.getElementById('calculation');
let resultDisplay = document.getElementById('result');
let expression = '';

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function appendNumber(number) {
  expression += number;
  updateDisplay();
}

function appendOperator(operator) {
  expression += operator;
  updateDisplay();
}

function deleteLastCharacter() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function appendParenthesis(parenthesis) {
  expression += parenthesis;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    expression = '';
    updateDisplay();
  }
}

function updateDisplay() {
  calculationDisplay.value = expression;
  
  try {
    const result = eval(expression);
    resultDisplay.value = result.toString();
  } catch (error) {
    resultDisplay.value = '';
  }
}
