'use strict';

// 89. An High-Level Overview of JavaScript




// ************************************************************************************
// 90. The JavaScript Engine and Runtime




// ************************************************************************************
// 91. Execution Contexts and The Call Stack




// ************************************************************************************
// 92. Scope and The Scope Chain




// ************************************************************************************
// 93. Scoping in Practice

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;
    
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}.`
//         console.log('output:', output);

//         if (birthYear >= 1981 && birthYear <= 1996) { // block scope
//             var millenial = true;

//             // Creating new variable with same name as outer scope's variable
//             const firstName = 'John'; // John is defined in current scope

//             // Reassigning outer scope's variable
//             output = `New Output!!!`;
//             const str = `Oh, and you're a millenial, ${firstName}.`;
//             console.log('str:', str);

//             function addTwoValues(a,b) {
//                 return a + b;
//             };
//         };
        
//         // console.log(str); // str is not defined
//         console.log('millenial:', millenial); // true
//         // console.log(addTwoValues(2, 3)); // addTwoValues is not defined
//         console.log('output 2:', output);
//      };
//     printAge();

//     return age;
// };

// const firstName = 'Kerim';
// console.log('caclAge:', calcAge(1996));
// // console.log(age); // age is not defined
// // printAge(); // printAge is not defined




