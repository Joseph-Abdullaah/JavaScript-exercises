// Exercise: Book Price Calculator
// Task: Write a function `calculateTotal` that:  
// 1. Takes an array of book objects (`{ title: string, price: number, isOnSale: boolean }`).  
// 2. Returns the total price with these rules:  
//    - If `isOnSale` is `true`, apply a 20% discount.  
//    - Round the total to 2 decimal places.  

// Example:  
//  
// const books = [  
//   { title: "JS 101", price: 10, isOnSale: true },  
//   { title: "Python Basics", price: 15, isOnSale: false }  
// ];  


const books = [
  { title: "JavaScript: The Good Parts", price: 25.99, isOnSale: true },
  { title: "Eloquent JavaScript", price: 29.95, isOnSale: false },
  { title: "You Don't Know JS", price: 19.99, isOnSale: true },
  { title: "Python Crash Course", price: 22.50, isOnSale: false },
  { title: "Clean Code", price: 34.99, isOnSale: true }
];

function calculateTotal(bks){
    let total = 0   
    bks.forEach(book => {
        discountPrice = (book.price - (book.isOnSale ? (20/100) : 0/100) * book.price)
        total += discountPrice
    });
    return total.toFixed(2) // toFixed make the number to string 
};

console.log(calculateTotal(books));  // 117.23
console.log(typeof calculateTotal(books)); // string 