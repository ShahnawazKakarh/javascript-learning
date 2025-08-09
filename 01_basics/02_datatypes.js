// "use Strict"; // treat all JS code as new version

alert (3 + 3) // it is being used in browser but here we are using nodejs

// Data Types

// Number 
// BigInt => mainly used in trading apps
// String => ""
// Boolean => true/false
// null => standalone value / type, "" is not null its string, you have to define null to identify null
// undefined => variable assign kia hai but uasko value nhn assign ki
// Symbol => to find uniqueness
// Object => 

console.log(typeof "Kakarh") // => String
console.log(typeof undefined) // = > undefined={}
console.log(typeof null) // => Object


// TYPE OF DATA TYPE VALUES WHILE CHANGING THEM
//  "33" => 33
//  "33abc" => NaN
//  true => 1; false => 0

score = 33
second_score = "44"
third_score = "444abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(second_score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log(typeof second_score); // type of is string 
console.log(typeof Number(second_score)); // this data type with Capital Number will convert it into number

console.log(typeof third_score);

