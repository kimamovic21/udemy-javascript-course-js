// 34. Function Declarations vs Expressions

'use strict';

// Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
};
const age1 = calcAge1(1996);
console.log(age1);


// Function expressions
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
};
const age2 = calcAge2(1996);
console.log(age2);


function calcAge(currentYear, birthYear) {
    const age = currentYear - birthYear;
    return age;
};
console.log(calcAge(2022, 1996));
