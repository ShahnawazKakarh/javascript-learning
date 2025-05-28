const accountId = 123
let accountEmail = "shahnawaz@google.com"
var accountPassword = "shahnawaz"
accountCity = "Lahore"
let accountState;

accountEmail = "hr@google.com"
accountPassword = "123"
accountCity = "Faisalabad"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountState])

/*
Summary

Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

*/