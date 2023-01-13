// 37. Reviewing Functions

'use strict';

const calcAge = function(year) {
    return 2022 - year;
}
console.log('CalcAge function result:', calcAge(1996));


// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`)
//         return retirement;
//     } else {
//         console.warn(`${firstName} has already retired.`)
//         return retirement; // rezultat ce biti negativan broj
//     };
// };
// console.log(`Years until retirement function result: `, yearsUntilRetirement(1996, 'Kerim'));
// console.log(`Years until retirement function result: `, yearsUntilRetirement(1991, 'Jonas'));
// console.log(`Years until retirement function result: `, yearsUntilRetirement(1980, 'Bob'));
// console.log(`Years until retirement function result: `, yearsUntilRetirement(1955, 'Mike'));




const calculatePersonAge = function(birthYear) {
    const totalPersonYears = 2022 - birthYear;
    return totalPersonYears;
}
console.log(calculatePersonAge(1996));

const yearsUntilRetirement = function(personBirthYear, personName) {

    const personAge = calculatePersonAge(personBirthYear);
    const retirementAge = 65 - personAge;

    const messageYearsToRetire = `${personName} retires in ${retirementAge} years.`;
    const messagePersonHasRetired = `${personName} has already retired ${Math.abs(retirementAge)} years ago !`;

    if (retirementAge > 0) {
       return messageYearsToRetire;
    } else {
        return messagePersonHasRetired;
    };
};
console.log(yearsUntilRetirement(1996, 'Kerim'));
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
console.log(yearsUntilRetirement(1955, 'Mike'));
