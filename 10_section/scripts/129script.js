// 129. How Passing Arguments Works: Value vs. Reference

'use strict';

const flight = 'LH234';
const kerim = {
    name: 'Kerim Imamovic',
    passport: 123456789,
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 123456789) {
        console.log('Checked in!')
    }
    else {
        console.log('Wrong passport!');
    }
};

checkIn(flight, kerim);
console.log(flight);
console.log(kerim);


// Is the same as doing...

const flightNum = flight;
const passenger = kerim;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000)
}
newPassport(kerim);
checkIn(flight, kerim);
