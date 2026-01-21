/*
===========================================================
JAVASCRIPT CONTROL STATEMENTS & LOOPS (COMPLETE GUIDE)
===========================================================

This file covers:
✔ if / else / else if
✔ switch
✔ ternary operator
✔ for loop
✔ while loop
✔ do...while loop
✔ for...of
✔ for...in
✔ break & continue
✔ nested loops
✔ labeled statements
✔ try...catch...finally
✔ short-circuit control
✔ loop control with functions

-----------------------------------------------------------
WHAT ARE CONTROL STATEMENTS?
-----------------------------------------------------------
Control statements control the flow of execution
based on conditions or repetition.
===========================================================
*/


// ---------------------------------------------------------
// 1. IF STATEMENT
// ---------------------------------------------------------
let age = 18;

if (age >= 18) {
    console.log("Adult");
}


// ---------------------------------------------------------
// 2. IF ELSE STATEMENT
// ---------------------------------------------------------
let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// ---------------------------------------------------------
// 3. ELSE IF LADDER
// ---------------------------------------------------------
let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ---------------------------------------------------------
// 4. NESTED IF
// ---------------------------------------------------------
let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login successful");
    }
}


// ---------------------------------------------------------
// 5. SWITCH STATEMENT
// ---------------------------------------------------------
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


// ---------------------------------------------------------
// 6. TERNARY OPERATOR
// ---------------------------------------------------------
let result = (age >= 18) ? "Eligible to vote" : "Not eligible";
console.log(result);


// ---------------------------------------------------------
// 7. FOR LOOP
// ---------------------------------------------------------
/*
Used when number of iterations is known
*/
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ---------------------------------------------------------
// 8. WHILE LOOP
// ---------------------------------------------------------
/*
Checks condition before execution
*/
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}


// ---------------------------------------------------------
// 9. DO...WHILE LOOP
// ---------------------------------------------------------
/*
Executes at least once
*/
let num = 1;

do {
    console.log(num);
    num++;
} while (num <= 5);


// ---------------------------------------------------------
// 10. NESTED LOOPS
// ---------------------------------------------------------
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}


// ---------------------------------------------------------
// 11. BREAK STATEMENT
// ---------------------------------------------------------
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}


// ---------------------------------------------------------
// 12. CONTINUE STATEMENT
// ---------------------------------------------------------
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}


// ---------------------------------------------------------
// 13. LABELED STATEMENT
// ---------------------------------------------------------
outerLoop:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break outerLoop;
        console.log(`i=${i}, j=${j}`);
    }
}


// ---------------------------------------------------------
// 14. FOR...OF LOOP
// ---------------------------------------------------------
/*
Iterates over values (arrays, strings)
*/
const arr = [10, 20, 30];

for (const value of arr) {
    console.log(value);
}


// ---------------------------------------------------------
// 15. FOR...IN LOOP
// ---------------------------------------------------------
/*
Iterates over keys (objects)
*/
const person = {
    name: "Alice",
    age: 25,
    city: "Paris"
};

for (const key in person) {
    console.log(key, person[key]);
}


// ---------------------------------------------------------
// 16. LOOP WITH FUNCTIONS
// ---------------------------------------------------------
function repeatTask(times, task) {
    for (let i = 0; i < times; i++) {
        task(i);
    }
}

repeatTask(3, i => console.log(`Task ${i}`));


// ---------------------------------------------------------
// 17. SHORT-CIRCUIT CONTROL
// ---------------------------------------------------------
/*
Logical operators control execution
*/
let isLoggedIn = true;

isLoggedIn && console.log("User logged in");

let username2 = "";
let displayName = username2 || "Guest";
console.log(displayName);


// ---------------------------------------------------------
// 18. TRY...CATCH...FINALLY
// ---------------------------------------------------------
/*
Error control flow
*/
try {
    let x = y + 1; // y is undefined
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("Execution completed");
}


// ---------------------------------------------------------
// 19. INFINITE LOOP (EXAMPLE - DO NOT RUN)
// ---------------------------------------------------------
/*
while (true) {
    console.log("Infinite loop");
}
*/


/*
===========================================================
END OF CONTROL STATEMENTS & LOOPS REFERENCE
===========================================================

TIP:
- Use for...of for arrays
- Use for...in for objects
- Prefer ternary for short conditions
*/
