// 17. Strings and template literals

'use strict';

// Old way
const firstName = 'Kerim';
const job = 'frontend dev';
const birthYear = 1996;
const currentYear = 2022;

const kerim = "Old : I'm " + firstName + ', a ' +  (currentYear - birthYear) + ' years old. I work as a ' + job + '!';
console.log(kerim);

// ES6 new way
const kerimNew = `New : I'm ${firstName}, a ${currentYear - birthYear} years old. I work as a ${job}!`;
console.log(kerimNew);

console.log(`Just a regular string...`);
console.log(`My 
name 
is 
Kerim.`
);
