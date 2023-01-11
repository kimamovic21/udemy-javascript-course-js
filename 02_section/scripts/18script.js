// 18. Taking decisions: if/else statement

'use strict';

const age = 18;
console.log(age);

if (age >= 18) {
    console.log(`Kerim can start learning how to drive :)`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sorry Kerim. You can't start learning how to drive. Wait another ${yearsLeft} year!`);
};

const birthYear = 1996;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
