// 15. Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

'use strict';

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const currentYear = 2022;
const ageJonas = currentYear - 1991;
const ageKerim = currentYear - 1996;
console.log(ageJonas); // 31
console.log(ageKerim); // 26

const averageYears = (ageJonas + ageKerim) / 2;
console.log(averageYears);
