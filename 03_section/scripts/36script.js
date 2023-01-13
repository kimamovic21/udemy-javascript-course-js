// 36. Functions Calling Other Functions

'use strict';

function fruitProcessor(apples, oranges) {
    const applePieces = (apples) * 2;
    const orangePieces = (oranges) * 2;

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
    return juice;
};
console.log(fruitProcessor(2,3));



function cutFruitPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
    return juice;
};
console.log(fruitProcessor(2,3));
