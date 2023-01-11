// 14. Basic operators

'use strict';

// Matematicke operacije u javascript-u
// 1. nacin
// const ageKerim = 2022 - 1996;
// const ageJames = 2022 - 1990;
// const ageRobert = 2022 - 1988;
// const ageJohn = 2022- 1985;
// console.log('Kerim:', ageKerim);
// console.log('James:', ageJames);
// console.log('Robert:', ageRobert);
// console.log('John:', ageJohn);


// 2. nacin
const currentYear = 2022;
const ageKerim = currentYear - 1996;
const ageJames = currentYear - 1990;
const ageRobert = currentYear - 1988;
const ageJohn = currentYear - 1985;
console.log('Kerim:', ageKerim);
console.log('James:', ageJames);
console.log('Robert:', ageRobert);
console.log('John:', ageJohn);


// Math operators
console.log(ageKerim * 2);
console.log(ageKerim / 2);
console.log(ageKerim ** 3);


const firstName = 'Kerim';
const lastName = 'Imamovic';
console.log(firstName + ' ' + lastName);


// Assignment operators
let myNumber = 10 + 5; 
console.log(myNumber); // 15
myNumber += 10; // myNumber + 10
console.log(myNumber);
myNumber++; // myNumber + 1
myNumber++; // myNumber + 1
console.log(myNumber); // 27
myNumber--; // myNumber + 1
console.log(myNumber); // 26


// Comparison operators
console.log(ageKerim > ageJames); //  >, <, >=, <=
console.log(ageKerim >= 18);

const isFullAge = ageKerim >= 18;
console.log(isFullAge);

console.log(currentYear - 1990 > currentYear - 2010);
