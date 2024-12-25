// 133. Default Parameters

'use strict';

const bookings = [];

const createBooking = function(
    flightNumber, 
    numPassengers = 1, 
    price = 199 * numPassengers
) {

// ES 5 - Old way
// numPassengers = numPassengers || 1;
// price = price || 199;

    const booking = {
        flightNumber,
        numPassengers,
        price
    }
    console.log(booking); 
    bookings.push(booking);
};

createBooking('LH123'); // LH123, 1, 199
createBooking('LH124', 2, 800); // LH124, 2, 800
createBooking('LH125', 5); // LH125, 5, 995
createBooking('LH126', undefined ,1000); // LH126, 1, 1000
