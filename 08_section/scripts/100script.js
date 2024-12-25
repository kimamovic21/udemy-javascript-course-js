// 100. Regular Functions vs. Arrow Functions

'use strict';

// Example 1

// var firstName = 'John';
// const kerim = {
//     firstName: 'Kerim',
//     year: 1996,
//     calcAge: function() {
//         console.log(2022 - this.year); 
//     },
//     greet: () => {
//         console.log(this); // Arrow function - Window object
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

const kerim = {
    firstName: 'Kerim',
    year: 1996,
    calcAge: function() {
        console.log(2022 - this.year); 

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996); // true
        };
        isMillenial();
    },

    // greet: () => {
    //     console.log(this); 
    //     console.log(`Hey ${this.firstName}`);
    // },

    greet: function() {
        console.log(this); 
        console.log(`Hey ${this.firstName}`);
    },
};
kerim.greet(); 
kerim.calcAge();


// arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2,3);
addExpr(2,4,5);


var addArrow = (a,b) => {
    console.log(arguments); // arguments is not defined
    return a + b;
};
addArrow(2,3,4);


// this comes from the parent scope
