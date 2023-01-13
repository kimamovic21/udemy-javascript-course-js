// 35. Arrow Functions

'use strict';

const calcAge = birthYear => 2022 - birthYear;
const age = calcAge(1996);
console.log(age);


// const yearsUntilRetirement = birthYear => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// };
// console.log(yearsUntilRetirement(1996));


// const yearsUntilRetirement = (currentYear, birthYear) => {
//     const currentAge = currentYear - birthYear;
//     const retirementAge = 65 - currentAge;
//     return retirementAge;
// };
// console.log(yearsUntilRetirement(2022, 1996));


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1996, 'Kerim'));
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
