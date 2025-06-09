// Exercise 2: Conditional Logic and Strings
// Write a JavaScript function called checkNumber that:
// Takes a number as input
// Returns:
// "Positive" if the number is greater than 0
// "Negative" if it's less than 0
// "Zero" if it's 0
// Bonus: If the input is not a number, return "Not a number"


function checkNumber(input) {
    // First check if the input is not a number
    if (typeof input !== 'number' || isNaN(input)) {
        return "Not a number";
    }
    
    // Then check the number cases
    if (input > 0) {
        return "Positive";
    } else if (input < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Test cases
console.log(checkNumber(5));     // "Positive"
console.log(checkNumber(-3));    // "Negative"
console.log(checkNumber(0));     // "Zero"
console.log(checkNumber("abc")); // "Not a number"
console.log(checkNumber('123')); // "Not a number"
console.log(checkNumber(NaN));   // "Not a number"
console.log(checkNumber(null));  // "Not a number"
