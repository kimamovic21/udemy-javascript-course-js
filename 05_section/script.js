'use strict';

// ********************************************************************************************
// 55. Setting up Prettier and VS Code




// ********************************************************************************************
// 56. Installing Node.js and Setting Up a Dev Enviroment




// ********************************************************************************************
// 57. Learning How to Code




// ********************************************************************************************
// 58. How to Think Like a Developer: Become a Problem Solver





// ********************************************************************************************
// 59. Using Google, StackOverflow and MDN

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15 ,14, 9, 5];

// const calcTempAmplitude = function(temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         // ako vrijednost iteracije nije broj, iteracije ce se nastaviti izvrsavati, npr. ako imamo u nizu 'error' vrijednost

//         // analizirati kod bez rijeci continue
//         if (typeof curTemp !== 'number') continue
        
//         // ako je trenutno vrijednost niza temps na poziciji [i] veca od trenutne maksimalne vrijednosti niza onda ce maksimalna vrijednost postati temps[i]
//         if (curTemp > max) {
//             max = curTemp;
//         };
//         if (curTemp < min) {
//             min = curTemp;
//         };
//     };
//     console.log(max);
//     console.log(min);
//     return max - min;
// };
// const amplitude = calcTempAmplitude([3, 7, 4, 1, 8]);
// console.log(amplitude);
// // max = 3
// // max = 7
// // max = 4
// // max = 1
// // max = 8
// const amplitudeOurArray = calcTempAmplitude(temperatures);
// console.log(amplitudeOurArray);


/* 
1) Understanding the problem
-What is temp amplitude? Answer: difference between highest and lowest temp
-How to compute max and min temperatures? 
-What's a sensor error? And what to do?

 2) Breaking up into sub-problems
-How to ignore errors?
-Find max value in temp array
-Find min value in temp array
-Subtract min from max and return it
*/


// https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript


/* 
PROBLEM 2:
Function should now receive 2 arrays of temps

1) Understanding the problem
-With 2 arrays, should we implement functionality twice? NO! Just merge two arrays.

2) Breaking up into sub-problems
-Merge 2 arrays
*/



// https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items

// console.log(`------------ Concat method ------------`);

// const calcTempAmplitudeNew = function(temps1, temps2){
//     // javascript concat method 
//     const temps = temps1.concat(temps2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue
//         if (curTemp > max) {
//             max = curTemp;
//         };
//         if (curTemp < min) {
//             min = curTemp;
//         };
//     };
//     console.log(max);
//     console.log(min);
//     return max - min;
// };

// const amplitudeOurArrayNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);





// ********************************************************************************************
// 60. Debugging (Fixing Errors)





// ********************************************************************************************
// 61. Debugging with the Console and Breakpoints

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         units: 'celsius',
//         // C FIX
//         // value: Number(prompt('Degrees celsius:')),
//         value: 10,
//     };

//     // B) FIND
//     console.log(measurement);
//     console.table(measurement);
//     console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// };
// // A) IDENTIFY THE BUG
// console.log(measureKelvin());


// Google chome -> Sources -> Google chrome debugger


// const calcTempAmplitudeBug = function(temps1, temps2){
    
//     const temps = temps1.concat(temps2);
//     console.log(temps);

//     let max = 0;
//     let min = 0;

//     debugger;
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue
//         if (curTemp > max) {
//             max = curTemp;
//         };
//         if (curTemp < min) {
//             min = curTemp;
//         };
//     };
//     console.log(max);
//     console.log(min);
//     return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) Identify
// console.log(amplitudeBug);





// ********************************************************************************************
// 62. Coding Challenge #1

// Moj nacin
// const temps = [17, 21, 23];
// // const days = [1, 2, 3];
// console.log(temps);
// // console.log(days);

// const printForecast = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`There will be ${array[i]}C in ${i + 1} days`); 
//     };
//     // for (let i = 0; i < days.length; i++) {
//     //     console.log(`in ${days[i]} days`);
//     // };
//     // console.log(`Console.log():`, `${temps[0]}C in ${days[0]} day.`);
//     // console.log(`Console.log():`,`${temps[1]}C in ${days[1]} days.`);
//     // console.log(`Console.log():`,`${temps[2]}C in ${days[2]} days.`);
// };
// printForecast(temps);



// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days ? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform arrays into string
// - Transform each element to string with C(celsius)
// - Strings need to contain day (index + 1);
// - Add ... between elements 
// - Log string to console


// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function(arr) {
//     let str = '';
//     for(let i = 0; i < arr.length; i++) {
//         str += ` ${arr[i]}C in ${[i + 1]} days ... `;
//     }
//     console.log('...', str);
// };
// printForecast(data1);

