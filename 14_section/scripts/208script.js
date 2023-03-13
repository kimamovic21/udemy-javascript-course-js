// 208. Constructor Functions and the new Operator

'use strict';

const Person = function(firstName, birthYear) {
    console.log(this);  // Person {}
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this - never create a method inside of a constructor function
    // this.calcAge = function() {
    //     console.log(2023 - this.birthYear);
    // }
};

// calling the function with the new operator
// new - keyword
const kerim = new Person('Kerim', 1996);
console.log(kerim);  // Person {firstName: 'Kerim', birthYear: 1996}

// 1. New {} is created
// 2. Function is called, this keyword is an empty object - this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jonas = new Person('Jonas', 1991);
const john = new Person('John', 1990);
const jay = 'Jay';
console.log(jonas);
console.log(john);

console.log(jonas instanceof Person);  // true
console.log(jay instanceof Person);  // false
