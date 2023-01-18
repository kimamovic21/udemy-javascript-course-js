// 59. Using Google, StackOverflow and MDN

'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15 ,14, 9, 5];

const calcTempAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        // ako vrijednost iteracije nije broj, iteracije ce se nastaviti izvrsavati, npr. ako imamo u nizu 'error' vrijednost

        // analizirati kod bez rijeci continue
        if (typeof curTemp !== 'number') continue;
        
        // ako je trenutno vrijednost niza temps na poziciji [i] veca od trenutne maksimalne vrijednosti niza onda ce maksimalna vrijednost postati temps[i]
        if (curTemp > max) {
            max = curTemp;
        };
        if (curTemp < min) {
            min = curTemp;
        };
    };
    console.log(max);
    console.log(min);
    return max - min;
};
const amplitude = calcTempAmplitude([3, 7, 4, 1, 8]);
console.log(amplitude);
// max = 3
// max = 7
// max = 4
// max = 1
// max = 8
const amplitudeOurArray = calcTempAmplitude(temperatures);
console.log(amplitudeOurArray);


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

console.log(`------------ Concat method ------------`);

const calcTempAmplitudeNew = function(temps1, temps2){
    // javascript concat method 
    const temps = temps1.concat(temps2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue
        if (curTemp > max) {
            max = curTemp;
        };
        if (curTemp < min) {
            min = curTemp;
        };
    };
    console.log(max);
    console.log(min);
    return max - min;
};

const amplitudeOurArrayNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
