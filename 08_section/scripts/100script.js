// 100. Primitives vs. Objects in Practice

'use strict';

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log('lastName:', lastName);
console.log('oldLastName:', oldLastName);
console.log('------------------------------------');

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
// console.log('jessica:', jessica);

const marriedJessica = jessica;
// console.log('marriedJessica', marriedJessica);

marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica); // 'Davis'
console.log('After marriage:', marriedJessica); // 'Davis'
console.log('------------------------------------');

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};
console.log('jessica2:', jessica2);

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('jessicaCopy', jessicaCopy);

console.log('Before marriage:', jessica2); // 'Williams'
console.log('After marriage:', jessicaCopy); // 'Davis'
console.log('------------------------------------');

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2); 
console.log('After marriage:', jessicaCopy);
