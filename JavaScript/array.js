// ==========================
// 1️⃣ Creating Arrays
// ==========================

// Using literal
let fruits = ["apple", "banana", "mango"];
console.log(fruits); // ["apple", "banana", "mango"]

// Using Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

// Empty array
let emptyArr = [];
console.log(emptyArr); // []

// Array with fixed length
let arrLength5 = new Array(5);
console.log(arrLength5); // [ <5 empty items> ]

// Access elements
console.log(fruits[0]); // "apple"
console.log(fruits[fruits.length - 1]); // "mango"

// Modify element
fruits[1] = "orange"; // replace "banana"
console.log(fruits); // ["apple", "orange", "mango"]

// ==========================
// 2️⃣ Basic Array Properties
// ==========================
console.log(fruits.length); // number of elements

// Check if variable is array
console.log(Array.isArray(fruits)); // true

// ==========================
// 3️⃣ Adding / Removing Elements
// ==========================

// push() – add element at end
fruits.push("grape");
console.log(fruits); // ["apple", "orange", "mango", "grape"]

// pop() – remove element from end
let last = fruits.pop();
console.log(last);   // "grape"
console.log(fruits); // ["apple", "orange", "mango"]

// unshift() – add element at start
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "orange", "mango"]

// shift() – remove element from start
let first = fruits.shift();
console.log(first);  // "kiwi"
console.log(fruits); // ["apple", "orange", "mango"]

// splice() – add/remove elements anywhere
// syntax: array.splice(startIndex, deleteCount, item1, item2...)
fruits.splice(1, 1, "pear", "peach"); // remove 1 element at index 1 and add "pear" & "peach"
console.log(fruits); // ["apple", "pear", "peach", "mango"]

// slice() – get portion of array (does NOT change original)
let someFruits = fruits.slice(1, 3); // index 1 to 2
console.log(someFruits); // ["pear", "peach"]
console.log(fruits);     // original array unchanged

// ==========================
// 4️⃣ Iterating Arrays
// ==========================

fruits.forEach((item, index) => {
    console.log(index, item);
});

// map() – create new array by transforming each element
let upperFruits = fruits.map(item => item.toUpperCase());
console.log(upperFruits); // ["APPLE", "PEAR", "PEACH", "MANGO"]

// filter() – create new array with elements that pass condition
let filtered = fruits.filter(item => item.includes("e"));
console.log(filtered); // ["pear", "peach", "mango"]

// find() – returns first element matching condition
let firstWithE = fruits.find(item => item.includes("e"));
console.log(firstWithE); // "pear"

// findIndex() – returns index of first element matching condition
let indexFirstE = fruits.findIndex(item => item.includes("e"));
console.log(indexFirstE); // 1

// some() – returns true if at least one element satisfies condition
console.log(fruits.some(item => item.length > 5)); // true

// every() – returns true if all elements satisfy condition
console.log(fruits.every(item => item.length > 2)); // true

// reduce() – reduce array to single value
let totalLength = fruits.reduce((acc, item) => acc + item.length, 0);
console.log(totalLength); // sum of all string lengths

// ==========================
// 5️⃣ Searching / Checking
// ==========================

// includes() – check if array contains element
console.log(fruits.includes("mango")); // true

// indexOf() – index of first occurrence
console.log(fruits.indexOf("peach")); // 2

// lastIndexOf() – index of last occurrence
console.log([1,2,3,2,1].lastIndexOf(2)); // 3

// ==========================
// 6️⃣ Combining / Splitting
// ==========================

// concat() – merge arrays
let veggies = ["carrot", "potato"];
let food = fruits.concat(veggies);
console.log(food); // ["apple", "pear", "peach", "mango", "carrot", "potato"]

// join() – convert array to string
console.log(fruits.join(", ")); // "apple, pear, peach, mango"

// split() – string to array
let str = "one,two,three";
let arrFromStr = str.split(",");
console.log(arrFromStr); // ["one", "two", "three"]

// ==========================
// 7️⃣ Sorting / Reversing
// ==========================

let nums = [5, 2, 9, 1];
nums.sort(); 
console.log(nums); // [1, 2, 5, 9] -> works lexicographically by default

// For numbers correctly
nums.sort((a,b)=> a-b);
console.log(nums); // [1, 2, 5, 9]

// reverse()
nums.reverse();
console.log(nums); // [9, 5, 2, 1]

// ==========================
// 8️⃣ Other Useful Methods
// ==========================

// flat() – flatten nested arrays
let nested = [1, [2, [3, 4]], 5];
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]

// flatMap() – map and flatten
let arrFM = [1,2,3];
let result = arrFM.flatMap(x => [x, x*2]);
console.log(result); // [1, 2, 2, 4, 3, 6]

// reverse() – reverse array in place
let letters = ["a","b","c"];
letters.reverse();
console.log(letters); // ["c","b","a"]

// fill() – fill array with value
let filled = new Array(5).fill(0);
console.log(filled); // [0,0,0,0,0]

// copyWithin() – copy part of array to another position
let arrCW = [1,2,3,4,5];
arrCW.copyWithin(0,3); // copy elements from index 3 to start
console.log(arrCW); // [4,5,3,4,5]

// ==========================
// 9️⃣ Multidimensional Arrays
// ==========================

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[1][2]); // 6 (row 1, col 2)

