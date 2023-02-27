// 175. Creating Dates

'use strict';


// Create a date

// const now = new Date();
// console.log(now);

// console.log(new Date('Feb 27 2023 15:59:00'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));  // Thu Jan 01 1970 
// console.log(new Date(3 * 24 * 60 * 60 * 1000));  // Sun Jan 04 1970 


// Working with dates
const future = new Date(2037, 10, 19, 15, 23, 10);
console.log(future);
console.log(future.getFullYear());  // 2037
console.log(future.getMonth());  // 10
console.log(future.getDay());  // 4
console.log(future.getHours());  // 15
console.log(future.getMinutes());  // 23
console.log(future.getSeconds());  // 10
console.log(future.toISOString());  // 2037-11-19T14:23:10.000Z
console.log(future.getTime());  // 2142253390000

console.log(new Date(2142253390000));  // Thu Nov 19 2037 15:23:10
console.log(Date.now());  // 1677510769729

future.setFullYear(2040);
console.log(future);
