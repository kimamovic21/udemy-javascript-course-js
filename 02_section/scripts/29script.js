// 29. Coding Challenge #4

'use strict';

// Moj nacin
// const bill = 400;
// let tip = 20/100 * 100;
// let totalBill = bill + tip;

// console.log(`$:`, bill);
// console.log(`$:`, tip);
// console.log(`$:`, totalBill);

// if (bill >= 50 && bill <= 300) {
//     let tip = 15/100 * 100;
//     let totalBill = bill + tip;
//     console.log(totalBill);
// } else if (bill <= 0){
//     console.log(`Your total bill is less than 0 !!!`);
// } else {    
//     let totalBill = bill + tip;
//     console.log(totalBill);
// }


const bill = 300;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
const totalValue = bill + tip;

console.log(`Bill: $`, bill);
console.log(`Tip: $`, tip);
console.log(`Boolean value:`, bill >= 50 && bill <= 300);
console.log(`Total value: $`, totalValue);
console.log(`The bill was $${bill}, the tip was $${tip} and the total value was $${totalValue}.`);
