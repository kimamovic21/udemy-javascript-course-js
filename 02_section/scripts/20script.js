// 20. Type Conversion and Coercion

'use strict';

// type conversion
const inputYear = '1996';

console.log(Number(inputYear), inputYear); // 1996 '1996'
console.log(inputYear + 18); //199618
console.log(Number(inputYear) + 18); // 2014

console.log(Number('Kerim')); // NaN
console.log(typeof NaN); // number

console.log(String(26)); // '26'


// type coercion
console.log('I am ' + 26 + ' years old.');
// broj je konvertovan u string automatski
console.log('I am ' + '26' + ' years old.');
console.log('I am ' + String(26) + ' years old.');

// stringovi su konvertovani u brojeve
console.log('26' - '10' - 6); // 10
console.log('26' * '2'); // 52


let n = '1' + 1; // '11'
n = n - 1; // '11' - '1'; 
console.log(n); // 10


let randomNum = 1 + '2' - 3 - 4 + '5' - 6;
// console.log(randomNum); // 49