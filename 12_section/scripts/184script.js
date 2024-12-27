// 184. Creating Dates

'use strict';

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-05-27T17:01:17.194Z',
      '2020-07-11T23:36:17.929Z',
      '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  };


// Create a date

const now = new Date();
console.log(now);

console.log(new Date('Feb 27 2023 15:59:00'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));  // Thu Jan 01 1970 
console.log(new Date(3 * 24 * 60 * 60 * 1000));  // Sun Jan 04 1970 


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
