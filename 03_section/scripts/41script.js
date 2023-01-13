// 41. Coding Challenge #2

'use strict';

function calculateTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
};
console.log(calculateTip(100));
console.log(calculateTip(125));
console.log(calculateTip(555));
console.log(calculateTip(44));

const billsArray = [100, 125, 555, 44];
console.log('Bills Array:', billsArray);
const tipArray = [calculateTip(billsArray[0]), calculateTip(billsArray[1]), calculateTip(billsArray[2]), calculateTip(billsArray[3])];
console.log('Tip Array:', tipArray);

const totalArray1 = billsArray[0] + tipArray[0];
const totalArray2 = billsArray[1] + tipArray[1];
const totalArray3 = billsArray[2] + tipArray[2];
const totalArray4 = billsArray[3] + tipArray[3];
console.log(totalArray1, totalArray2, totalArray3, totalArray4);
const totalArray = [totalArray1, totalArray2, totalArray3, totalArray4];



const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};
console.log(calcTip(300));

const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2]+ tips[2]];
console.log(totals);
