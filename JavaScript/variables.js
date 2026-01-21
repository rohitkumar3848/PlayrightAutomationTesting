// ==========================
// 1️⃣ Declaring Variables
// ==========================

const { isArray } = require("util");

// 'var' - function-scoped, can be redeclared and updated
var name = "Alice";       // declare a variable 'name' with value "Alice"
console.log(name);        // prints: Alice

name = "Bob";             // update the variable
console.log(name);        // prints: Bob

var name = "Charlie";     // redeclaration is allowed with 'var'
console.log(name);        // prints: Charlie

// 'let' - block-scoped, can be updated but not redeclared in the same scope
let age = 25;             
console.log(age);         // prints: 25

age = 26;                 // update is allowed
console.log(age);         // prints: 26

// let age = 30;          // ❌ redeclaring 'let' in same scope will throw error

// 'const' - block-scoped, cannot be updated or redeclared
const country = "USA";    
console.log(country);     // prints: USA

// country = "Canada";    // ❌ update not allowed
// const country = "India";// ❌ redeclaration not allowed


// ==========================
// 2️⃣ Variable Types
// ==========================

// String
let city = "New York";    
console.log(city);        // prints: New York

// Number
let score = 100;           
console.log(score);       // prints: 100

// Boolean
let isLoggedIn = true;     
console.log(isLoggedIn);  // prints: true

// Array
let fruits = ["apple", "banana", "mango"];
console.log(fruits);      // prints: ["apple", "banana", "mango"]

// Object
let user = {
    username: "alice123",
    password: "pass123"
};
console.log(user);        // prints: { username: 'alice123', password: 'pass123' }

// Undefined
let data;                 
console.log(data);        // prints: undefined

// Null
let emptyValue = null;    
console.log(emptyValue);  // prints: null


// ==========================
// 3️⃣ Variables in Functions (Scope)
// ==========================

function greetUser(username) {
    console.log("Hello, " + username + "!");
}

greetUser("Alice");       // prints: Hello, Alice!

// Variables declared inside a function are **local** to the function
function demo() {
    let localVar = "I exist only inside this function";
    console.log(localVar);
}
demo();

// console.log(localVar); // ❌ Error: localVar is not defined outside the function


// ==========================
// 4️⃣ Variables in Loops
// ==========================

for (let i = 0; i < 3; i++) {
    console.log("Loop iteration:", i);
    // 'i' is only accessible inside this loop because we used 'let'
}

// Using 'var' instead of 'let'
for (var j = 0; j < 3; j++) {
    console.log("Var loop:", j);
}
// console.log(j); // ✅ j is accessible outside the loop because 'var' is function-scoped


// ==========================
// 5️⃣ Constants and Immutable Data
// ==========================

// const prevents re-assignment of the variable
const PI = 3.14159;

// But objects and arrays declared with const can still have their content changed
const colors = ["red", "green"];
colors.push("blue");  // ✅ allowed
console.log(colors);  // prints: ["red", "green", "blue"]

const person = { name: "Alice" };
person.name = "Bob";  // ✅ allowed
console.log(person);  // prints: { name: "Bob" }

// Reassignment is NOT allowed
// person = { name: "Charlie" }; // ❌ Error


// ==========================
// 6️⃣ Best Practices for Variables
// ==========================

// 1. Use 'const' by default for values that don’t change
// 2. Use 'let' for values that will change
// 3. Avoid 'var' unless you need old-style scoping
// 4. Give meaningful variable names (username, score, maxLimit)
// 5. Group related variables in objects or arrays
// 6. JavaScript is case-sensitive: 'username' !== 'Username'

// Example: grouping variables in an object
const userInfo = {
    username: "alice123",
    password: "pass123",
    age: 25
};

console.log(userInfo.username); // prints: alice123

console.log("check type of object userInfo--",typeof(userInfo));

console.log(Array,isArray(userInfo));// false




for(let i=0; i<10; i++){
        setTimeout(()=>{
            console.log("check i", i)
        }, 1000); // 0 to 9
}

for(var i=0; i<10; i++){
    setTimeout(()=>{
        console.log("check i", i)
    }, 1000); // only 10 for every iteration
}
for(var j = 0; j < 10; j++){
    (function(curI){
        setTimeout(()=>{
            console.log("check i", curI)
        }, 1000); 
    })(j);  // ✅ invoke immediately with j
    // If we want to use like as let so we have to use closure concept using this for evry iterations it remebered the blocked value so it print from 0 to 9 
}



