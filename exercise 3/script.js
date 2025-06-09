// Exercise 3: Function + Loop + Array
// Write a function analyzeArray that:
// Takes an array of numbers as input.
// Returns an object with the following properties:
// sum: Sum of all numbers
// average: Average of numbers
// max: Maximum value
// min: Minimum value
// length: Number of elements

const numbers = [1, 2, 3, 4, 5]

function analyzeArray(array) {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return {
        sum, // or sum: sum
        average: sum / array.length,
        max: Math.max(...array),
        min: Math.min(...array),
        length: array.length
    };
}


console.log(analyzeArray(numbers))