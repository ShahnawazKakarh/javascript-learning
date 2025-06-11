var c = 300
let a = 200
const b = 400

// global scope
// let a = 300

// if (true) {} << this is block scope curly braces is a block, it can be accessed within its block
// 
if (true) {
    // block scope
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

console.log(a);
console.log(b);
console.log(c);

for (let i = 0; i < Array.length; i++){
    const element = Array[i]
}
console.log(1)


function one(){
    const username = "Shahnawaz"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// function hoisting: like where we can put the function
// like in this example it is function but kind of expression as function is hold in addTwo so in such case
// it will not return addTwo() if written before function

addTwo(5)

const addTwo = function(num){
    return num + 2
}