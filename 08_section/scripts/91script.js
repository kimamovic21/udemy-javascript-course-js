// 91. Execution Contexts and The Call Stack

'use strict';

// Execution context - environment in which a pice of JavaScript is executed. Stores all the necessary information for some code to be executed.

const name = 'Kerim';

const first = () => {
    let a = 1;
    const b = second();
    a = a + b;
    return a;
};
console.log('first():',first()); // 3

function second() {
    var c = 2;
    return c;
};
console.log('second():', second()); // 2

const x = first();
console.log('x:', x); // 3

// Cal. stact ensures that the order of execution never get lost
