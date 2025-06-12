
// this: refers the current context
// this is used within the current context or scope
const user = {
    username: "KhanShahnawaz",
    price: 999,

    // method for welcome message which is function
    // whoever comes inside this method gets welcome message
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// values changes according to .this (context)
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// {} object will printed 
console.log(this);

function chai(){
    let username = "Shahnawaz"
    console.log(this.username);
}

chai()

// this can be used in objects not inside the function/
// it will print undefined
const chai1 = function () {
    let username = "Shahnawazkhan"
    console.log(this.username);
}

const chai2 =  () => {
    let username = "Khan"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "shahkhan"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()