// 13. The Event Loop in Practice

'use strict';

// console.log('Test start');  // 1
// setTimeout(() => console.log('0 sec timer'), 0);  // 4

// Promise.resolve('Resolved promise 1')  // 3
//        .then(response => console.log(response));
// console.log('Test end');  // 2


console.log('Test start');  // 1
setTimeout(() => console.log('0 sec timer'), 0);  // 5

Promise.resolve('Resolved promise 1')  // 3
       .then(response => console.log(response));
Promise.resolve('Resolved promise 2')  // 4
       .then(response => {
            for(let i = 0; i < 1000000000; i++) {}
            console.log(response);
       });
console.log('Test end');  // 2
