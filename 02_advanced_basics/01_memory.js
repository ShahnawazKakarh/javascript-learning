// Memory

// There are two types of Data Types:
// Primitive: (Stored by Value) The actual value is stored in the variable, and a copy is created when assigned to another variable.
// Non-primitive: (Stored by Reference) It is not stored by value, but by reference. This means they don’t hold actual data directly,
// instead, they hold a reference (pointer) to the memory location where the data is stored.

// There are two types of Memory
// Stack - Primitive - COPY
// Heap - Primitive - REFERENCE [Objects, Array, Functions]

// Store by VALUE
let myYoutubeName = "ShahnawazKhan"
let anothername = myYoutubeName

anothername = "JS Youtube Channel"

console.log(myYoutubeName)
console.log(anothername)

// Stored by REFERENCE
let user = {
    email: "shahnawaz@google.com",
    age: 22,
    city: "Lahore"
}

