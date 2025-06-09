// Exercise 2: Conditional Logic and Strings
// Write a JavaScript function called checkNumber that:
// Takes a number as input
// Returns:
// "Positive" if the number is greater than 0
// "Negative" if it's less than 0
// "Zero" if it's 0
// Bonus: If the input is not a number, return "Not a number"


function checkNum(){
    let num = prompt("Enter a number")
    // console.log(typeof num)

    if (num > 0){
        console.log(`${num} is positive`)
    }
    else if (num < 0){
        console.log(`${num} is negative`)
    }
    else if (num == 0){
        console.log(`${num} is Zero`)
    }else{
        console.log(`${num} is not a number`)
    }
}

checkNum()
