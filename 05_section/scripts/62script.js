// 62. Coding Challenge #1

'use strict';

// Moj nacin
const temps = [17, 21, 23];
// const days = [1, 2, 3];
console.log(temps);
// console.log(days);

const printForecastKerim = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`There will be ${array[i]}C in ${i + 1} days`); 
    };
    // for (let i = 0; i < days.length; i++) {
    //     console.log(`in ${days[i]} days`);
    // };
    // console.log(`Console.log():`, `${temps[0]}C in ${days[0]} day.`);
    // console.log(`Console.log():`,`${temps[1]}C in ${days[1]} days.`);
    // console.log(`Console.log():`,`${temps[2]}C in ${days[2]} days.`);
};
printForecastKerim(temps);



// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days ? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform arrays into string
// - Transform each element to string with C(celsius)
// - Strings need to contain day (index + 1);
// - Add ... between elements 
// - Log string to console


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += ` ${arr[i]}C in ${[i + 1]} days ... `;
    }
    console.log('...', str);
};
printForecast(data1);
