// 138. The call and apply Methods

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

