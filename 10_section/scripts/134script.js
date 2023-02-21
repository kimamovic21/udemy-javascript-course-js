// 134. The bind Method

'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {},
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`);
        this.bookings.push( {flight: `${this.iataCode} ${flightNum}`, name })
    },
};
lufthansa.book(239, 'Kerim Imamovic');
lufthansa.book(635, 'Jonas Schmedtmann');
console.log(lufthansa);


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;
// console.log(book);

/* 
-book is now a regular function call, it's not a method anymore
-this keyword inside of it will now point to undefined 
*/

// book(23, 'John Smith'); // DOES NOT WORK !!!


// Call, apply and bind methods

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'John Doe');
console.log(swiss);


// Apply method
const flightData = [583, 'George Cooper']; // array data
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);



// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
// console.log(bookEW);
// console.log(bookLH);
// console.log(bookLX);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Kerim Imamovic');
bookEW23('Jonas Schmedtmann');


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane();

// button element becomes this keyword
// document.getElementById('buy').addEventListener('click', lufthansa.buyPlane); // NaN
document.getElementById('buy')
        .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));


const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(1000));
console.log(addVAT2(230));
