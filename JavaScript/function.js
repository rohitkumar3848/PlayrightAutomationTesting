/*
===========================================================
JAVASCRIPT FUNCTIONS — COMPLETE REFERENCE (BASIC → ADVANCED)
===========================================================

This file covers:
✔ Function declaration & definition
✔ Function expression
✔ Calling functions
✔ Parameters & arguments
✔ Return values
✔ Default parameters
✔ Rest parameters
✔ Anonymous functions
✔ Arrow (lambda) functions
✔ Pure vs Impure functions
✔ Higher-order functions
✔ Callback functions
✔ Closures
✔ Currying
✔ Recursion
✔ IIFE (Immediately Invoked Function Expression)
✔ Generators
✔ Functional helpers (map, filter, reduce)
✔ this keyword in functions

-----------------------------------------------------------
WHAT IS A FUNCTION?
-----------------------------------------------------------
A function is a reusable block of code that performs
a specific task.

In JavaScript, functions are FIRST-CLASS objects:
- Stored in variables
- Passed as arguments
- Returned from other functions
===========================================================
*/


// ---------------------------------------------------------
// 1. FUNCTION DECLARATION
// ---------------------------------------------------------
function greet() {
    console.log("Hello, World!");
}

greet();


// ---------------------------------------------------------
// 2. FUNCTION WITH PARAMETERS & ARGUMENTS
// ---------------------------------------------------------
function greetUser(name) {
    console.log(`Hello, ${name}`);
}

greetUser("Alice");


// ---------------------------------------------------------
// 3. FUNCTION WITH RETURN VALUE
// ---------------------------------------------------------
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum);


// ---------------------------------------------------------
// 4. FUNCTION EXPRESSION
// ---------------------------------------------------------
/*
Function stored in a variable.
Not hoisted like function declaration.
*/
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 5));


// ---------------------------------------------------------
// 5. DEFAULT PARAMETERS
// ---------------------------------------------------------
function power(base, exponent = 2) {
    return base ** exponent;
}

console.log(power(5));
console.log(power(5, 3));


// ---------------------------------------------------------
// 6. REST PARAMETERS (...args)
// ---------------------------------------------------------
function addAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(addAll(1, 2, 3, 4));


// ---------------------------------------------------------
// 7. ANONYMOUS FUNCTION
// ---------------------------------------------------------
/*
Function without a name.
Usually used as arguments.
*/
setTimeout(function () {
    console.log("Anonymous function executed");
}, 500);


// ---------------------------------------------------------
// 8. ARROW FUNCTION (LAMBDA)
// ---------------------------------------------------------
/*
Shorter syntax
Does NOT have its own 'this'
*/
const square = x => x * x;
console.log(square(6));


// ---------------------------------------------------------
// 9. PURE FUNCTION
// ---------------------------------------------------------
