// 22. Equality operators == vs ===

'use strict';

const age = '18';
if (age === 18) {
    console.log(`You just became an adult! (strict)`);
}

if (age == 18) {
    console.log(`You just became an adult! (loose)`);
}

const favoriteNumber = Number(prompt("What is your favorite number ?"));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if (favoriteNumber === 26) {
    console.log('Cool! 26 is an amazing number :)');
} else if (favoriteNumber === 7) {
    console.log('7 is also a cool number');
} else if (favoriteNumber === 7) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 26 or 7 or 9');
};

// uslov ako favoriteNumber nije jednak broju 26
if (favoriteNumber !== 26) { 
    console.log('Why not 26?');
}
