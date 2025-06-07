// Memory

// There are two types of Data Types:
// Primitive: (Stored by Value) The actual value is stored in the variable, and a copy is created when assigned to another variable.
// Non-primitive: (Stored by Reference) It is not stored by value, but by reference. This means they don’t hold actual data directly,
// instead, they hold a reference (pointer) to the memory location where the data is stored.

// There are two types of Memory
// Stack - Primitive - ORIGINAL VALUE COPY [String, Number, Boolearn, Null, undefined, Symbol, BigInt]
// Heap - Primitive - ORIGINAL VALUE REFERENCE [Objects, Array, Functions]

// Store by VALUE
let myYoutubeName = "ShahnawazKhan"
let anothername = myYoutubeName

anothername = "JS Youtube Channel"

console.log(myYoutubeName)
console.log(anothername)

// Stored by REFERENCE
let userOne = {
    email: "shahnawaz@google.com",
    age: 22,
    city: "Lahore"
}

// userTwo varibale is called in stack but we get reference value of it from heap of variable userOne
// I have created a memory_readme.md and added a diagram go and check it.
let userTwo = userOne

// Now if we change the email value in variable two as we know in heap reference value of both will change
userTwo.email = "khan@google.com"

console.log(userOne.email)
console.log(userTwo.email)