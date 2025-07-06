// singleton
// when we create object via constructor it is singleton, apne trha ka aik hei hai, while in literal it have multiple instances


// creating object using constructor
Object.create

// In this file I have practiced the object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Shahnawaz",
    "full name": "Shahnawaz Khan",
    [mySym]: "mykey1",
    age: 18,
    location: "Lahore",
    email: "shahnawaz@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])  // Shahnawaz Khan
console.log(JsUser["mySym"])  // undefined
console.log(JsUser[mySym])  // symbol(mykey1)

JsUser.email = "khan@chatgpt.com"

// if Object.freeze() is applied anywhere for any object or value it will not change it will be freezed
// Object.freeze(JsUser)
// if we have input email and we then freeze it, even on changing the email it will not allow to change
// JsUser.email = "khan@microsoft.com"
console.log(JsUser); // email: 'khan@chatgpt.com',

// undefined was printed. It is because function "greeting" does not return anything (no return keyword).
// In JavaScript, if a function doesn't explicitly return a value, it returns undefined by default.
// function can be used as a variable in JS
JsUser.greeting = function(){
    console.log("Hello JS user");
}

// string interpolation javascript is used here ` `
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// Hello JS user
// undefined
console.log(JsUser.greeting());

// Hello JS user, Shahnawaz
// undefined
console.log(JsUser.greetingTwo());

// to remove undefined here is it an example:
JsUser.greeting = function(){
    return "Hello JS user";
}

// now it is just printing Hello JS user
console.log(JsUser.greeting()); 