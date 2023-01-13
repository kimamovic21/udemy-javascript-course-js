// 33. Functions

'use strict';

function logger() {
    console.log(`My name is Kerim.`);
};

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apple, oranges) {
    // console.log(apple, oranges);
    const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
    return juice;
}; 

const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);

console.log(fruitProcessor(4, 5));

const appleAndOrageJuice = fruitProcessor(6, 7);
console.log(appleAndOrageJuice);

function myName (name) {
    console.log(`${name}`);
}

myName('Kerim');
