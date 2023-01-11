// 24. Logical Operators

// (AND) && (true && true) 

'use strict';

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // true


// (AND) && (true && false) 
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense && hasGoodVision); // false


//  (OR) ||
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense || hasGoodVision); // true


// (!)
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(!hasDriversLicense); // false
console.log(!hasGoodVision); // true

if(hasDriversLicense && hasGoodVision) {
    console.log('Kerim is able to drive :)' );
} else {
    console.log('Someone else should drive...');
};

const isTired = false; // C

console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense && hasGoodVision && !isTired);

