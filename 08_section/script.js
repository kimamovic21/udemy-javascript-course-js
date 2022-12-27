'use strict';

// 89. An High-Level Overview of JavaScript

// Javascript is a high-level, object-oriented, multi-paradigm programming language




// ************************************************************************************
// 90. The JavaScript Engine and Runtime

// JS Engie is a program that executes javascript code

// Example: V8 Engine
// https://www.youtube.com/watch?v=hWhMKalEicY
// Javascript engine contains Call Stack and Heap
// Call Stack - place where our code is executed
// Heap - unstructured memory pool which stores all the objects that our application needs


// Compilation vs. Interpretation

// Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
// Interpretation: Interpreter runs through the source code an executes it line by line
// Just-in-time (JIT) compilation: Entire code is converted into machine code at once, then executed immediately


// Modern Just-in-time compilation of javascript


// Javascript Runtime





// ************************************************************************************
// 91. Execution Contexts and The Call Stack

// Execution context - environment in which a pice of JavaScript is executed. Stores all the necessary information for some code to be executed.

// const name = 'Kerim';

// const first = () => {
//     let a = 1;
//     const b = second();
//     a = a + b;
//     return a;
// };
// console.log('first():',first());

// function second() {
//     var c = 2;
//     return c;
// };
// console.log('second():', second());

// const x = first();
// console.log('x:', x);

// Cal. stact ensures that the order of execution never get lost





// ************************************************************************************
// 92. Scope and The Scope Chain

// Lexical scoping: Scoping is controlled by placement of functions and blocks in the code

// Scope: Space or environment in which a certain variable is declared. There is global scope, function scope and block scope

// Scope of a variable: Region of our code where a certain variable can be accessed

// Scope chain vs. Call stack

// const a = 'Kerim';
// first();

// function first() {
//     const b = 'Hello!';
//     second();

//     function second() {
//         const c = 'Hi!';
//         third();
//     };
// };

// function third() {
//     const d = 'Hey!';
//     console.log(d + c + b + a); // ReferenceError
// };

// Scoping asks the question "Where do variables live" or "Where can we access a certain variable and where not ?"





// ************************************************************************************
// 93. Scoping in Practice

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;
    
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}.`
//         console.log('output:', output);

//         if (birthYear >= 1981 && birthYear <= 1996) { // block scope
//             var millenial = true;

//             // Creating new variable with same name as outer scope's variable
//             const firstName = 'John'; // John is defined in current scope

//             // Reassigning outer scope's variable
//             output = `New Output!!!`;
//             const str = `Oh, and you're a millenial, ${firstName}.`;
//             console.log('str:', str);

//             function addTwoValues(a,b) {
//                 return a + b;
//             };
//         };
        
//         // console.log(str); // str is not defined
//         console.log('millenial:', millenial); // true
//         // console.log(addTwoValues(2, 3)); // addTwoValues is not defined
//         console.log('output 2:', output);
//      };
//     printAge();

//     return age;
// };

// const firstName = 'Kerim';
// console.log('caclAge:', calcAge(1996));
// // console.log(age); // age is not defined
// // printAge(); // printAge is not defined





// ************************************************************************************
// 94. Variable Environment: Hoisting and the TDZ

// const myName = 'Kerim';

// if (myName === 'Kerim') {
//     console.log(`Kerim is a ${job}.`);
//     const age = 2022 - 1996;
//     const job = 'Frontend dev';
//     console.log(age);
// };





// ************************************************************************************
// 95. Hoisting and TDZ in Practice

// // Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Kerim';
// let job = 'frontend';
// const year = 1996;



// // Functions

// console.log('addDecl:', addDecl(2,3));
// console.log('addExpr:', addExpr(2,3));
// console.log('addArrow:',addArrow(2,3));

// function addDecl(a,b) {
//     return a + b;
// };

// const addExpr = function(a,b) { // var addExpr
//     return a + b;
// };

// const addArrow = (a,b) => a + b; // var addArrow



// // Example

// if (!numProducts) {
//     deleteShoppingCart();
// };

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// };



// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); // true;
// console.log(y === window.y); // false;
// console.log(z === window.z); // false;





// ************************************************************************************
// 96. The This Keyword

// const kerim = {
//     name: 'Kerim',
//     year: 1996,
//     calcAge: function() {
//         console.log('kerim.year:', kerim.year); // 1996
//         console.log('this.year:', this.year); // 1996
//         console.log(kerim.year === this.year); // true
//         return 2022 - this.year;
//     },
// };
// console.log(kerim.calcAge()); // 26





// ************************************************************************************
// 97. The This Keyword in Practice

// console.log(this);

// function calcAgeDecl (birthYear) {
//     console.log(2022 - birthYear);
//     console.log(this); // undefined
// };
// calcAgeDecl(1996);


// const calcAgeExpr = function(birthYear) {
//     console.log(2022 - birthYear);
//     console.log(this); // undefined
// };
// calcAgeExpr(1996);


// const calcAgeArrow = (birthYear) => {
//     console.log(2022 - birthYear);
//     console.log(this); // Window
// };
// calcAgeArrow(1996);


// const kerim = {
//     year: 1996,
//     calcAge: function() {
//         console.log(this);
//         console.log(2022 - this.year);
//     },
// };
// kerim.calcAge();


// const john = {
//     year: 1990,
// }
// john.calcAge = kerim.calcAge;
// john.calcAge();


// const f = kerim.calcAge;
// f();

// this keyword always points to the object that is calling the method





// ************************************************************************************
// 98. The This Keyword in Practice

// Example 1
// var firstName = 'John';
// const kerim = {
//     firstName: 'Kerim',
//     year: 1996,
//     calcAge: function() {
//         console.log(2022 - this.year); 
//     },
//     greet: () => {
//         console.log(this); // Window
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// kerim.calcAge();  // 26
// kerim.greet();  // Hey undefined
// console.log(this.firstName); // undefined

// Never use arrow function as a method



// Example 2
// const kerim = {
//     firstName: 'Kerim',
//     year: 1996,
//     calcAge: function() {
//         console.log(2022 - this.year); 

//         const self = this; // self or that
//         const isMillenial = function() {
//             // console.log(this); // undefined
//             // console.log(this.year >= 1981 && this.year <= 1996);
//             console.log(self);
//             console.log(self.year >= 1981 && self.year <= 1996);
//         };

//         isMillenial();
//     },
//     greet: () => {
//         console.log(this); 
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// kerim.greet(); 
// kerim.calcAge();



// Example 3
// const kerim = {
//     firstName: 'Kerim',
//     year: 1996,
//     calcAge: function() {
//         console.log(2022 - this.year); 

//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996); // true
//         };
//         isMillenial();
//     },

//     greet: () => {
//         console.log(this); 
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// kerim.greet(); 
// kerim.calcAge();


// // arguments keyword
// const addExpr = function(a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2,3);
// addExpr(2,4,5);


// var addArrow = (a,b) => {
//     console.log(arguments); // arguments is not defined
//     return a + b;
// };
// addArrow(2,3,4);


// this comes from the parent scope





// ************************************************************************************
// 99. Primitives vs. Objects (Primitive vs. Reference Types)

// let age = 26;
// let oldAge = age;
// age = 27;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Kerim',
//     age: 26,
// };
// console.log('me 1:', me);

// const friend = me;
// console.log('friend 1:', friend);

// friend.age = 30;
// console.log('me 2:', me);
// console.log('friend 2:', friend);





// ************************************************************************************
// 100. Primitives vs. Objects in Practice

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log('lastName:', lastName);
// console.log('oldLastName:', oldLastName);
// console.log('------------------------------------');

// // Reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };
// // console.log('jessica:', jessica);

// const marriedJessica = jessica;
// // console.log('marriedJessica', marriedJessica);

// marriedJessica.lastName = 'Davis';

// console.log('Before marriage:', jessica); // 'Davis'
// console.log('After marriage:', marriedJessica); // 'Davis'
// console.log('------------------------------------');

// // Copying objects
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob'],
// };
// console.log('jessica2:', jessica2);

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// console.log('jessicaCopy', jessicaCopy);

// console.log('Before marriage:', jessica2); // 'Williams'
// console.log('After marriage:', jessicaCopy); // 'Davis'
// console.log('------------------------------------');

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log('Before marriage:', jessica2); 
// console.log('After marriage:', jessicaCopy);

