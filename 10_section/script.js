'use strict';

// 128. Default Parameters

// const bookings = [];

// const createBooking = function(flightNumber, numPassengers = 1, price = 199 * numPassengers) {

//     // ES 5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNumber,
//         numPassengers,
//         price
//     }
//     console.log(booking); 
//     bookings.push(booking);
// }

// createBooking('LH123'); // LH123, 1, 199
// createBooking('LH124', 2, 800); // LH124, 2, 800
// createBooking('LH125', 5); // LH125, 5, 995
// createBooking('LH126', undefined ,1000); // LH126, 1, 1000





// *************************************************************************************
// 129. How Passing Arguments Works: Value vs. Reference

// const flight = 'LH234';
// const kerim = {
//     name: 'Kerim Imamovic',
//     passport: 123456789
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 123456789) {
//         alert('Checked in!')
//     }
//     else {
//         alert('Wrong passport!');
//     }
// };

// checkIn(flight, kerim);
// // console.log(flight);
// // console.log(kerim);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = kerim;

// const newPassport = function (person) {
//     person.passenger = Math.trunc(Math.random() * 10000000)
// }
// newPassport(kerim);
// checkIn(flight, kerim);





// *************************************************************************************
// 130. First-Class and Higher-Order Functions





// *************************************************************************************
// 131. Functions Accepting Callback Functions

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function() {
//     console.log('🖐');
// }
// document.body.addEventListener('click', high5);


// ['Jonas', 'Martha', 'Adam'].forEach(high5);
