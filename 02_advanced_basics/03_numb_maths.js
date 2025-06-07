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