// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value
// they hold at runtime and can change throughout the program as we assign different values to them.

// TOPIC: DATA TYPES
// English: Data in memory can be stored and accessed in two ways:
// Urdu/Hindi: Data ko memeory main kaise rakha jata aur access kia jata uaski 2 types hain as FOLLOWS:

// By Value (Primitive Data Types)
// The actual value is stored in the variable, and a copy is created when assigned to another variable.
// Primitive values don’t track history — they’re just copied at the time of assignment.

//  Primitive also known as  - Call by Value
// Primitive data types are the basic, built-in types in JavaScript that store actual values directly in the variable.
// They are immutable (cannot be changed) and are copied by value, not by reference.

// English: Primitive data types are types that store a single value directly, and when assigned to another variable,
// a copy of the value is made, not the original reference

// Urdu/Hindi: data jab hum kahen se kahen copy krty, enka original data, wo reference humen memory ka nhn dia jata,
// humen uaski copy di jati hai, aur ju bhe hum changes karty hain copy main karty hain


//  7 types : String, Number, Boolearn, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)

console.log(typeof(id))
console.log(typeof(anotherId))

// Reason
// 1- Symbols are always unique.
// 2- Even if two symbols have the same description, value or data type, they are not equal.
console.log(id === anotherId);


// const bigNumber = 3456543576654356754n


// Reference (Non primitive) - Call by Reference
// Non-primitive data types are those which are not stored by value, but by reference.
// This means they don’t hold actual data directly, instead, they hold a reference (pointer) to the memory location where the data is stored.

// English: Non-primitive data types are those where the actual value is not stored directly in the variable, but a reference to the value in memory is stored.
// Urdu/Hindi: Yeh sari wo values hain jinka reference humen memory main directly allocate kia ja sakta hai

// By Reference (Non-Primitive Data Types)
// The variable stores a reference (or address) pointing to the actual data in memory.
// When assigned to another variable, both variables point to the same data.

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Key Points:
// Stored by reference, not by value
// When you assign a non-primitive value to another variable, both point to the same object in memory
// Changes made from one variable affect the other

// Example
let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Sara";

console.log(obj1.name); // Output: "Sara"
