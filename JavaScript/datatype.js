// String
let name = "Alice";
console.log(typeof name); // "string"

// Number
let age = 25;
console.log(typeof age); // "number"

// BigInt
let bigNumber = 12345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// Boolean
let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"

// Undefined
let data;
console.log(data); // undefined
console.log(typeof data); // "undefined"

// Null
let emptyValue = null;
console.log(emptyValue); // null
console.log(typeof emptyValue); // "object" (this is a JS quirk)

// Symbol
let sym = Symbol("id");
console.log(sym); // Symbol(id)
console.log(typeof sym); // "symbol"
