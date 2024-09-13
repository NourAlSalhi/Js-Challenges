//Write a function called calculator that takes in 2 numbers and an operator and returns the result of the calculation.

// The possible operators are: +, -, *, /

function calculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return 'Invalid operator';
    }
}
module.exports = { calculator };