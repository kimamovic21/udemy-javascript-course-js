// 148. The new at Method

'use strict';

const arr = [23, 11, 64];
console.log(arr[0]);  // 23
console.log(arr.at(0));  // 23


// getting last array element
console.log(arr[arr.length - 1]);  // 64
//          arr[3 - 1] = arr[2]
console.log(arr.slice(-1));  // [64] - copy of an array only with the last element
console.log(arr.at(-1)); // 64
console.log(arr.at(-2)); // 11


// At method also works on strings
console.log('kerim'.at(0)); // k
console.log('kerim'.at(1)); // e
console.log('kerim'.at(2)); // r
console.log('kerim'.at(3)); // i
console.log('kerim'.at(-1)); // m
