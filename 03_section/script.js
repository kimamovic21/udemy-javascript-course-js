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

