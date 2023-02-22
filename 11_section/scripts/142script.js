// 142. Simple Array Methods

'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method
// console.log(arr.slice(2));  // (3) ['c', 'd', 'e']
// console.log(arr.slice(2, 4));  //  (2) ['c', 'd']
// console.log(arr.slice(-1)); //  ['e']
// console.log(arr.slice(-2)); // (2) ['d', 'e']
// console.log(arr.slice(1, -2));  // (2) ['b', 'c']
// console.log(arr.slice());  // (5) ['a', 'b', 'c', 'd', 'e'] - shallow copy of the array 
// console.log([...arr]);  // (5) ['a', 'b', 'c', 'd', 'e']


// Splice method 
// Splice method mutates the original array

// console.log(arr.splice(2));  // (3) ['c', 'd', 'e']
// console.log(arr);  // (2) ['a', 'b']

// console.log(arr.splice(-1));  // ['e']
// console.log(arr);  // (4) ['a', 'b', 'c', 'd']

// console.log(arr.splice(1, 2));  // (2) ['b', 'c']
// console.log(arr); // (3) ['a', 'd', 'e']


// Reverse method
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());  // (5) ['f', 'g', 'h', 'i', 'j']
console.log(arr2);  // (5) ['f', 'g', 'h', 'i', 'j']


// Concat method
const letters = arr.concat(arr2);
console.log(letters);  // (10) 
console.log([...arr, ...arr2]);  // (10)


// Join method
console.log(letters.join(' + '));  // a - b - c - d - e - f - g - h - i - j
