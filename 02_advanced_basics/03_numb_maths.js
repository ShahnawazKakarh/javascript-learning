// Number

// variable data type is number but it will print as string
const score = 400
console.log(score)

// variable data type is specifically defined that we require Number()
const scoreTwo = new Number(100)
console.log(scoreTwo)

// If we define object of data type we get some methods to play with it

// now it will print only 100 like a string
console.log(scoreTwo.toString())

// to check the length of number by converting it into string
console.log(scoreTwo.toString().length)

// To use less precision value, we can use mostly it in forex, gst, tax etc websites
console.log(scoreTwo.toFixed(2))

const otherNumber = 23.8955
const otherSecondNumber = 123.8955

// it will precise the three value like we have 23.8955 it will give 23.9
console.log(otherNumber.toPrecision(3))

// it will precise the three value like we have 123.8955 it will give 124
console.log(otherSecondNumber.toPrecision(3))

// if we have a lot of number and we want to print it in local locale like Pakistan = PK
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-PK'))

// maximum, minimum value
const balance = new Number(100)
stringBalance = balance.toString()

console.log(stringBalance.MIN_VALUE)
console.log(stringBalance.MIN_SAFE_INTEGER)
console.log(stringBalance.MIN_VALUE)
console.log(stringBalance.MIN_SAFE_INTEGER)


/* ******************************************** MATHS Library *********************************************** */
console.log(Math)

// absolute value, whenever we have minus value we can change it to +, only for negative
console.log(Math.abs(-4))

// round off the value like 4.3 to 4
console.log(Math.round(4.3))

// To control wheather I choose top value or lower value then
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))

// square root
console.log(Math.sqrt(25))

// find the max and min value from multiple numbers or array
console.log(Math.min(1, 4, 7, 9, 11, 13))
console.log(Math.max(1, 4, 7, 9, 11, 13))

// Math.Random
// Math.random()
// Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// ➝ 0.6547 or 0.2391, etc.


console.log(Math.random())

// It will generate value less than 1
// +1 means value should me greater than 1, So now the final result is between 1 and just under 11 (10.999...)
// *10 means Scales the range: now it gives a number between 0 and just under 10 e.g., 0.1543 * 10 = 1.543
console.log((Math.random()*10)+1)
console.log(Math.random()*10+1)
console.log(Math.floor((Math.random()*10))+1)


const min = 10
const max = 20

console.log(Math.random())

// so the final formula is:
console.log(Math.floor(Math.random() * (max - min + 1)))

// we have to calculate minimum value so
// // always between 10 and 20 (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1) + min))

// we have to calculate maximum value so
// // always between 10 and 20 (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1) + max))
