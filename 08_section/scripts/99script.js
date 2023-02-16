// 99. Primitives vs. Objects (Primitive vs. Reference Types)

'use strict';

let age = 26;
let oldAge = age;
age = 27;

console.log('age:', age);
console.log('oldAge:', oldAge);

const me = {
    name: 'Kerim',
    age: 26,
};
console.log('me 1:', me);

const friend = me;
console.log('friend 1:', friend);

friend.age = 30;
console.log('me 2:', me);
console.log('friend 2:', friend);
