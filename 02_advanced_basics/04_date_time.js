/* ******************************************** DATE() *********************************************** */


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

// YY-MM-DD
let myLatestDate = new Date("2025-06-08")

// 2025-06-08T00:00:00.000Z
console.log(myLatestDate)

// Sun Jun 08 2025
console.log(myLatestDate.toDateString())

// 6/8/2025, 12:00:00 AM
console.log(myLatestDate.toLocaleString())

// MM-DD-YY
let myLocalDate = new Date("06-08-2025")

// 6/8/2025, 12:00:00 AM
console.log(myLocalDate.toLocaleString())


/* ******************************************** TimeStamp() *********************************************** */


// timestamp
// Returns the current timestamp: number of milliseconds since Jan 1, 1970 e.g., 1748324120000
let myTimeStamp = Date.now()
console.log(myTimeStamp);   // Current time in milliseconds
console.log(myLocalDate.getTime());   // Time in milliseconds for June 8, 2025

// convert time from miliseconds to seconds
// It will give value in decimal like 1749329722.027
console.log(Date.now()/1000)

// to remove decimal like 1749329760
console.log(Math.floor(Date.now()/1000))

// if we want to know specific info from date
console.log(myDate.getDate())
console.log(myDate.getDay())

// customise the format of date of toLocaleString()
console.log(myDate.toLocaleString('default', {
    weekday: "long",
    
}))
