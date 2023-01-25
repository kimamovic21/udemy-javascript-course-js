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





// *************************************************************************************
// 132. Functions Returning Functions

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// greet('Hello')('Jonas');


// Arrow function
// const greetArrow = (greeting) => {
//     return (name) => {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greetArrow('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// greetArrow('Hello')('Jonas');


// Arrow function 2
// const greetArr2 = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greetArr2('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// greetArr2('Hello')('Jonas');





// *************************************************************************************
// 133. The call and apply Methods

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() {}
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
//     },
// };
// lufthansa.book(239, 'Kerim');
// lufthansa.book(635, 'Jonas');
// console.log(lufthansa);


// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;
// // console.log(book);
// // book(23, 'John'); // DOES NOT WORK !!!

// // Call method
// book.call(eurowings, 23, 'John');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mike');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 583, 'James');
// console.log(swiss);


// // Apply method
// const flightData = [583, 'Richard']; // array data
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);





// *************************************************************************************
// 134. The bind Method

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name})
//     },
// };
// lufthansa.book(239, 'Kerim');
// lufthansa.book(635, 'Jonas');
// console.log(lufthansa);


// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book;
// // console.log(book);


// // Call method
// book.call(eurowings, 23, 'John');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mike');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 583, 'James');
// console.log(swiss);


// // Apply method
// const flightData = [583, 'Richard']; // array data
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);


// // Bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Kerim');
// bookEW23('Michael');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };
// // lufthansa.buyPlane();

// // document.getElementById('buy').addEventListener('click', lufthansa.buyPlane); // NaN
// document.getElementById('buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));


// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     };
// };
// const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(1000));
// console.log(addVAT2(230));





// *************************************************************************************
// 135. Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
 This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
   Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'),
 which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
 This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. 
Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         // Get answer  
//         const answer = Number(
//             prompt(
//                 `${this.question} \n ${this.options.join('\n')} \n (Write option number)`
//                     )
//             );
//             console.log(answer);

//         // Register answer
//         typeof answer === 'number' && answer <this.answers.length && this.answers[answer]++;
//         // console.log(this.answers);
//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type = 'array') {
//         if(type === 'array') {
//             console.log(this.answers)
//         } 
//         else if (type = 'string') {
//             // Poll results are 13, 2, 4, 1
//             console.log(`Polls results are ${this.answers.join(', ')}`);
//         }
//     }
// };

// // poll.registerNewAnswer();

// document.getElementById('poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5,2,3]}, 'string');
// poll.displayResults.call({answers: [1,5,3,9,6,1]});





// *************************************************************************************
// 137. Immediately Invoked Functions Expressions (IIFE)

// const runOnce = function() {
//     console.log('This will never run again! 1');
// }
// runOnce();

// // IIFE
// (function() {
//     console.log('This will never run again! 2');
//     // const isPrivate = 23;
// }) ();

// // console.log(isPrivate);
// (() => console.log('This will never run again! 3')) ();

// {
//     // const isPrivate2 = 23;
//     var notPrivate = 46;
// }
// // console.log(isPrivate2);
// console.log(notPrivate);





// *************************************************************************************
// 138. Closures

// const secureBooking = function() {
//     let passengerCount = 0;

//     return function() {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);





// *************************************************************************************
// 138. More Closures examples

// Example 1
// let f;

// const g = function() {
//     const a = 20;
//     f = function() {
//         console.log(a * 2);
//     };
// };

// const h = function() {
//     const b = 100;
//     f = function() {
//         console.log(b * 2);
//     };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);


// setTimeout(function() {
//     console.log('Timer');
// }, 2000);


// Example 2
// n - number of Passengers
// const boardPassengers = function(n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function() {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// }

// const perGroup = 1000;
// boardPassengers(180, 2);





// *************************************************************************************
// 139. Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue,
each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. 
Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
*/

// (function() {
//     const header = document.querySelector('h1');
//     header.style.color = 'red';

//     document.querySelector('body').addEventListener('click', function() {
//         header.style.color = 'blue';
//     });
// }) ();
