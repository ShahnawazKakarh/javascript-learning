// String interpolation in JavaScript

const name = "Shahnawaz"
const repoCount = 50

// Old way
console.log(name + repoCount + "Any String or Any Value");

// New way using String interpolation in JavaScript
console.log(`My name is ${name} and my repo count is ${repoCount}`);


// Another way to call a string, with it we get some methods which can help us further
const gameName = new String("ShahnawazKhan")

console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('S'))

// substring in js
const newString = gameName.substring(0, 4)
console.log(newString)

// slice in js
const anotherNewString = gameName.slice(-8, 4)
console.log(anotherNewString)

// trim method
const newStringone = "   Shahnawaz   "
console.log(newStringone)
console.log(newStringone.trim())

// replace method
const url = "https://shahnawaz.com/shahnawaz%20khan"
console.log(url.replace('%20', '-'))

//  ask if string is present or not
console.log(url.includes('shahnawaz'))
console.log(url.includes('Beautiful'))

// 
const myName = new String("Shahnawaz-Khan-Boy")
// split(seperator, limit)
console.log(myName.split('-'))
