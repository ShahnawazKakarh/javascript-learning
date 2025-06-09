const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// push will save array in array or value in value
marvel_heros.push(dc_heros) 

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

// concat will create another a new array of all old and new elements
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// spread operater; it can help to save multiple values
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// to get another array in array in array in one array : we can use flat(depth), depth can be any value 1,2,3 or inifity
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// if we want to check it is array or not
console.log(Array.isArray("Shahnawaz"))

// if we want to convert a string or anythin in array
console.log(Array.from("Shahnawaz"))

// from will unable to convert it into array as it is a object which is key value pair so it gets confused
console.log(Array.from({name: "Shahnawaz"})) // interesting


// Array.of take all arrays, objects or whatever set of elements and create a new array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));