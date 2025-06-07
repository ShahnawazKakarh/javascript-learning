// Data ko memeory main kaise rakha jata aur access kia jata uaski 2 types hain as FOLLOWS:

//  Primitive also known as  - Call by Value

// kahen se kahen copy krty, enka original data, wo reference humen memory ka nhn dia jata,
// humen uaski copy di jati hai, aur ju bhe hum changes karty hain copy main karty hain


//  7 types : String, Number, Boolearn, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) - Call by Reference

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