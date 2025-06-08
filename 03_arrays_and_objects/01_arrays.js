// Arrays

// array
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]);

const myHeors = ["SuperMan", "SpiderMan"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1]);

// Array methods

// push array
myArr.push(6)
console.log(myArr)

// pop array
myArr2.pop(8)
console.log(myArr2)

// pop array
myHeors.pop(7)
console.log(myHeors)

// unshift
myArr.unshift(0)
console.log(myArr)

// shift
myArr.shift(0)
console.log(myArr)

// join
myArr.join()
console.log(myArr)


// // slice, splice

// printing my original array
console.log("A ", myArr);

// creating a constant and putting sliced value in it
// slice (1,3) mean it will include 1st and 2nd index but ignore third index
const myn1 = myArr.slice(1, 3)

// it will print value which will be sliced i.e., [ 1, 2 ]
console.log(myn1);

// now I am printing the same my old array B  [0, 1, 2, 3,4, 5, 6]
console.log("B ", myArr);

// now we are doing splice it will take 1st, 2nd and 3rd index
const myn2 = myArr.splice(1, 3)

// array value was [0,1,2,3,4,5,6] it will print [ 1, 2, 3 ] as they are 1st, 2nd and 3rd index
console.log(myn2);

// now if I print my old original array
// it has value C  [ 0, 4, 5, 6 ]
// because splice also remove those indexed value
console.log("C ", myArr);


/* ******************************************** ADVANCE EXAMPLE *********************************************** */


// More Advanced Example of Slice
const arry = [1, 2, 3, 4, 5];
const newArr = arry.slice(1, 4);

console.log(newArr); // [2, 3, 4]
console.log(arry);    // [1, 2, 3, 4, 5] → original unchanged


// More Advanced Example of Splice
const ary = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
const removed = ary.splice(1, 2);

console.log(removed); // [2, 3]
console.log(ary);     // [1, 4, 5] → original changed

// Insert elements at index 1
ary.splice(1, 0, 'a', 'b');
console.log(ary);     // [1, 'a', 'b', 4, 5]

