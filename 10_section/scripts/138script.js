// 138. More Closures examples

'use strict';

// Example 1
let f;

const g = function() {
    const a = 20;
    f = function() {
        console.log(a * 2);
    };
};

const h = function() {
    const b = 100;
    f = function() {
        console.log(b * 2);
    };
};

g();
f(); // 40
console.dir(f); // ƒ f()


// Re-assigning f function
h();
f(); // 200
console.dir(f); // ƒ f()



// setTimeout(function() {
//     console.log('Timer');
// }, 2000);



// Example 2
// n - number of Passengers
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

// closure has a priority over scope chain
const perGroup = 1000;
boardPassengers(180, 2);

console.dir(boardPassengers); 
