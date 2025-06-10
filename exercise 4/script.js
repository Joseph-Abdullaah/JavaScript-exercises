// Exercise 4: Array Manipulation & Object Transformation**  
// Write a function `transformUsers` that:  
// 1. Takes an **array of user objects** as input, where each user has:

// const users = [
//   { id: 1, name: "Alice", age: 25, isActive: true },
//   { id: 2, name: "Bob", age: 30, isActive: false },
//   { id: 3, name: "Charlie", age: 28, isActive: true }
// ];
//    
//    
// 2. Returns a **new object** with:  
//    - Keys as user `id`s  
//    - Values as objects containing **only `name` and `isActive`**  
//    - Bonus: Convert `isActive` to "Yes"/"No" strings instead of booleans  

// Expected Output:
// {
//   1: { name: "Alice", isActive: "Yes" },
//   2: { name: "Bob", isActive: "No" },
//   3: { name: "Charlie", isActive: "Yes" }
// }




const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 30, isActive: false },
  { id: 3, name: "Charlie", age: 28, isActive: true }
];

function transformUsers(users){
    const result = {};
    users.forEach((user) =>{
        const {id, name, isActive} = user;
        result[id] = {
            name, 
            isActive: isActive ? "Yes" : "No"
        }
        
    })
    return result
    
}

console.log(transformUsers(users))
