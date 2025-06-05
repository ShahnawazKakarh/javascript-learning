/* KEY POINT */
// Comparison '>=', '<=', '>' , '<' and Equality operater '==' check both are different
// suppose, console.log(null >= 0) , here comparision has converted null into zero so zero >= zero is true
// while,  console.log(null > 0) , here it is false as it is not comparision so null cannot be greater than zero

console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);


console.log(null > 1)
console.log(null == 1)
console.log(null >= 1)

console.log(undefined == 1)
console.log(undefined > 1)
console.log(undefined < 1)


// Not comparing same data type
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


// Strict Check , '==='
// Strictly check not only the value even strictly check the values like their data types
console.log("2" === 2);
