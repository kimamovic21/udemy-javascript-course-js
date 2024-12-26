// 166. The New findLast and findLastIndex Methods

'use strict';

const movements = [200, 450, -400, 3020, -650, -130, 70, 1300];

const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// 'Your latest large movement was X movements ago'

const latestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000);
console.log(latestLargeMovementIndex);

console.log(`Your latest large movement was ${movements.length - latestLargeMovementIndex - 1} movements ago.`);