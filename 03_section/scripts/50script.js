// 50. Coding challenge #5

'use strict';

// Moj nacin

// const calcTip = function(bill) {
//     let result = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
//     return result;
// };
// console.log(`calcTip function: `, calcTip(300));

// const bills = [22, 295, 176, 440, 37, 186, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// console.log(`Bills:`, bills);
// console.log(`Tips:`, tips);
// console.log(`Totals:`, totals);

// for (let i = 0; i < bills.length; i++) {
//     // console.log(bills[i]);
//     const tip = calcTip(bills[i]);
//     console.log(tip);
//     tips.push(tip);
//     console.log(tips);
//     totals.push(tip + bills[i]);
//     console.log(totals);
// };

// console.log(`Bills:`, bills);
// console.log(`Tips:`, tips);
// console.log(`Totals:`, totals);




const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};
console.log(`calcTip function: `, calcTip(300));

const bills = [22, 295, 176, 440, 37, 186, 10, 1100, 86, 52];
const tips = [];
const totals = [];
console.log(`Bills:`, bills);
console.log(`Tips:`, tips);
console.log(`Totals:`, totals);

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
};

console.log(`Bills:`, bills);
console.log(`Tips:`, tips);
console.log(`Totals:`, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return (sum / arr.length).toFixed(2);
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(bills))
console.log(calcAverage(tips));
console.log(calcAverage(totals));
