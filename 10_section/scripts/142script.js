// 142. Closures

'use strict';

const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);


/* 
A closure is the closed-over variable environment of the execution context in which a function was created,
even after that execution context is gone.

A closure gives a function access to all variables of its parent function, even after that parend function has returned. 
The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.

A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables 
that were present in the environment where the function was created.
*/
