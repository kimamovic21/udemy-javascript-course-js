// 162. flat and flatMap

'use strict';

// flat - one level

const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr);  // (4) [Array(3), Array(3), 7, 8]
console.log(arr.flat());  // (8) [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1,2],3], [4,[5,6]], 7, 8];
console.log(arrDeep);  // (4) [Array(2), Array(2), 7, 8]
console.log(arrDeep.flat());  // (6) [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2));  // (8) [1, 2, 3, 4, 5, 6, 7, 8]


// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
const accounts = [account1, account2, account3, account4];


// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);  // (4) [Array(8), Array(8), Array(8), Array(5)]
// const allMovements = accountMovements.flat();
// console.log(allMovements);  // (29)

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);  // 17840


// flat
const overalBalanceFlat = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceFlat);  // 17840


// flatMap
const overalBalanceFlatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceFlatMap);  // 17840
