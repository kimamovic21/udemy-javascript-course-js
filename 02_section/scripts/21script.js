// 21. Truthy nad Falsy values

// 5 falsy values: 0, 'string', undefined, null, NaN

'use strict';

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Kerim')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false
console.log(Boolean([])); // true

const money = 0;
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`YAY! Height is defined :)` );
} else {
    console.log(`Height is undefined :(` );
}
