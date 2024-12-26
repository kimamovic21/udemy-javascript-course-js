// 173. Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// const reversedMov = movements.slice().reverse();
const reversedMov = movements.toReversed();
console.log('Reversed Movements: ', reversedMov);
console.log('Movements: ', movements);

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log('New Movements: ', newMovements);
console.log('Movements: ', movements);