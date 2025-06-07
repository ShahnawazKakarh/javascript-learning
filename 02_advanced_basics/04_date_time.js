// Dates

let myDate = new Date()

// data type of date is object
console.log(typeof myDate)

// 2025-06-07T19:36:26.762Z
console.log(myDate)

// Sat Jun 07 2025 19:45:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString())

// Sat Jun 07 2025
console.log(myDate.toDateString())

// 07/06/2025, 7:45:41 pm
console.log(myDate.toLocaleString('en-PK'))

// 7:45:41 PM
console.log(myDate.toLocaleTimeString())

// Months start in JS from 0 index
let myNewDate = new Date(2025, 5, 8)
console.log(myNewDate)
console.log(myNewDate.toDateString())