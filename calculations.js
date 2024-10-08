function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    // This multiplication function is broken
    return a * b; // Indication of failure
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

// Example usage
const num1 = 10;
const num2 = 5;

console.log("Addition:", add(num1, num2));        // Outputs: Addition: 15
console.log("Subtraction:", subtract(num1, num2)); // Outputs: Subtraction: 5
console.log("Multiplication:", multiply(num1, num2)); // Outputs: Multiplication: null
console.log("Division:", divide(num1, num2));       // Outputs: Division: 2
