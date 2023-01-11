// 28. The Conditional (Ternary) Operator

'use strict';

const age = 26;
age >= 18 ? console.log(`You can drive 🚗 !`) : console.log(`You can't drive 🚫 !`);

const drive = age >= 18 ? `ternary: car 🚗` : `ternary: can't 🚫`;
console.log(drive);

let drive2;
if (age >= 18) {
    drive2 = `car 🚗`;
} else {
    drive2 = `can't 🚫`;
};

console.log(`if-else:`, drive2);

console.log(`Can I drive ? ${age >= 18 ? `Yes 🚗` : `Can't 🚫`}`);
