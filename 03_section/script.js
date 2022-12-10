// 31. Section Intro




// *************************************************************************************************
// 32. Activating Strict mode
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = 'Audio';
// const private = 123;
// const if = 'Kerim';





// *************************************************************************************************
// 33. Functions
// 'use strict';

// function logger() {
//     console.log(`My name is Kerim.`);
// };

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apple, oranges) {
//     // console.log(apple, oranges);
//     const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
//     return juice;
// }; 

// const appleJuice = fruitProcessor(2, 3);
// console.log(appleJuice);

// console.log(fruitProcessor(4, 5));

// const appleAndOrageJuice = fruitProcessor(6, 7);
// console.log(appleAndOrageJuice);

// function myName (name) {
//     console.log(`${name}`);
// }

// myName('Kerim');





// *************************************************************************************************
// 34. Function Declarations vs Expressions

// // Function declaration
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// };
// const age1 = calcAge1(1996);
// console.log(age1);


// // Function expressions
// const calcAge2 = function(birthYear) {
//     return 2022 - birthYear;
// };
// const age2 = calcAge2(1996);
// console.log(age2);


// function calcAge(currentYear, birthYear) {
//     const age = currentYear - birthYear;
//     return age;
// };
// console.log(calcAge(2022, 1996));





// *************************************************************************************************
// 35. Arrow Functions

// const calcAge = birthYear => 2022 - birthYear;
// const age = calcAge(1996);
// console.log(age);


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


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1996, 'Kerim'));
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));





// *************************************************************************************************
// 36. Functions Calling Other Functions

// function fruitProcessor(apples, oranges) {
//     const applePieces = (apples) * 2;
//     const orangePieces = (oranges) * 2;

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
//     return juice;
// };
// console.log(fruitProcessor(2,3));



// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
//     return juice;
// };
// console.log(fruitProcessor(2,3));





// *************************************************************************************************
// 37. Reviewing Functions
// const calcAge = function(year) {
//     return 2022 - year;
// }
// console.log(calcAge(1996));

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired.`)
//         return -1;
//     };
// };
// console.log(yearsUntilRetirement(1996, 'Kerim'));
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));
// console.log(yearsUntilRetirement(1955, 'Mike'));


// const calculatePersonAge = function(birthYear) {
//     const totalPersonYears = 2022 - birthYear;
//     return totalPersonYears;
// }
// console.log(calculatePersonAge(1996));

// const yearsUntilRetirement = function(birthYear, personName) {

//     const personAge = calculatePersonAge(birthYear);
//     const retirementAge = 65 - personAge;

//     const messageYearsToRetire = `${personName} retires in ${retirementAge} years.`;
//     const messagePersonHasRetired = `${personName} has already retired ${Math.abs(retirementAge)} years ago !`;

//     if (retirementAge > 0) {
//        return messageYearsToRetire;
//     } else {
//         return messagePersonHasRetired;
//     };
// };
// console.log(yearsUntilRetirement(1996, 'Kerim'));
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));
// console.log(yearsUntilRetirement(1955, 'Mike'));






// *************************************************************************************************
// 38. Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

// // Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// console.log(scoreDolphins);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreKoalas);

// const checkWinner = function(avgDolhpins, avgKoalas) {
//     if (avgDolhpins >= 2 * avgKoalas) {
//         console.log(`Dolphins win the trophy (${avgDolhpins} vs. ${avgKoalas})!`);
//     } else if (avgKoalas >= 2 * avgDolhpins) {
//         console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolhpins})!`);
//     } else {
//         console.log(`No team wins !`);
//     };
// };
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(300, 100);
// checkWinner(100, 300);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// console.log(scoreDolphins);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


