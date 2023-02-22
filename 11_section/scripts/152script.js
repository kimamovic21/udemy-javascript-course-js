// 152. The filter Method

'use strict';

const movements = [200, 450, -400, 3020, -650, -130, 70, 1300];

const deposits = movements.filter(function(mov) {
    return mov > 0;
});
console.log(movements);
console.log(deposits);  // (5) [200, 450, 3020, 70, 1300]


const depositsFor = [];
for (const mov of movements) {
    // console.log(mov);
    if (mov > 0) {
        depositsFor.push(mov);
    }
};
console.log(depositsFor)  // (5) [200, 450, 3020, 70, 1300]


const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);  // (3) [-400, -650, -130]
