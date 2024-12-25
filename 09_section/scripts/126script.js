// 126. Working With Strings - Part 1

'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log(plane[3]); // 0
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portugal


const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const seatPlace = seat.slice(-1); // Extract part of a string from a right side
    if (seatPlace === 'B' || seatPlace === 'E') {
        console.log(`You got the middle seat...`);
    } 
    else {
        console.log(`You got lucky :D`);
    }
};
checkMiddleSeat('11B'); // You got the middle seat...
checkMiddleSeat('23C'); // You got lucky :D
checkMiddleSeat('3E'); // You got the middle seat...


console.log(new String('kerim')); // String {'kerim'}
console.log(typeof new String('kerim')); // object

console.log(typeof new String('kerim').slice(1)); // string
