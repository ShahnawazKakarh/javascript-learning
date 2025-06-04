// const { StrictMode } = require("react")

// let name = "Shahnawaz"
// let age = "22"
// let isLoggedIn = true

/* Some OPERATIONS in JS */
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2); // reminder/modulus

// Adding two strings
str = "Hello Shahnawaz"
str2 = "ShahKhan"
str3 = str + str2
console.log(str3)


// Adding numbers in strings
// toprimitive input conversion into preferred types - ECMA guidelines
console.log("1" + 2) // 12
console.log(1 + "2") // 12

// if a string is used it will just concatenate
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32
console.log(1 + 2 + 2) // 5

console.log(true) // true
console.log(+true) // 1
console.log(+"") // 0


// Another Example
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1)
console.log(num2)
console.log(num3)


// prefix and postfix value in js
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"