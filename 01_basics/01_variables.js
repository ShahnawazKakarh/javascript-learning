const accountId = 123

let accountEmail = "shahnawaz@google.com"
var accountPassword = "shahnawaz"
accountCity = "Lahore"

// accountId = 2 // TypeError: Assignment to constant variable. accountId is already declared with CONST which can't be changed.


let accountState;

accountEmail = "hr@google.com"
accountPassword = "123"
accountCity = "Faisalabad"

// console.log(accountId)

// use square brackets and using table we can input all variable altogether besides calling seperately.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Summary

Variables and Data Types
const = can't be re-assigned a value and can't be declared again. (so, it is a block scope)
let = can be re-assigned a value but can't be declared again. (so, it is a block scope)
var = it can be re-assigned a value and it can also be declared again. (It has a Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

*/