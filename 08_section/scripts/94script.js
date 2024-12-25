// 94. Scope and The Scope Chain

'use strict';

// Lexical scoping: Scoping is controlled by placement of functions and blocks in the code

// Scope: Space or environment in which a certain variable is declared. There is global scope, function scope and block scope

// Scope of a variable: Region of our code where a certain variable can be accessed

// Scope chain vs. Call stack

const a = 'Kerim';
first();

function first() {
    const b = 'Hello!'; 
    second();

    function second() {
        const c = 'Hi!';
        third();
    };
};

function third() {
    const d = 'Hey!';
    console.log(d + c + b + a); // ReferenceError
};

// Scoping asks the question "Where do variables live" or "Where can we access a certain variable and where not ?"
