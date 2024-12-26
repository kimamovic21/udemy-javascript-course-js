// 155. The map method

'use strict';

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3020, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function(mov) {
//     return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) {
    movementsUSDfor.push(mov * eurToUsd);
};
console.log(movementsUSDfor);


// Example 1
// const movementsDescriptions = movements.map((mov, i, arr) => {
//     if (mov > 0) {
//         return `Movement ${i + 1}: You deposited ${mov}`;
//     }
//     else {
//        return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//     };
// });
// console.log(movementsDescriptions);


// Example 2
const movementsDescriptions = movements.map((mov, i) => 
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);
