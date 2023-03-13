// 213. ES6 Classes

'use strict';

// class expression
// const PersonClass = class {
// 
// };

// class declaration
class PersonClass {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }; 

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    };

    greet() {
        console.log(`Hey ${this.firstName} !!!`);
    };
};

const kerim = new PersonClass('Kerim', 1996);
console.log(kerim);  // PersonClass {}
kerim.calcAge();  // 27

console.log(kerim.__proto__ === PersonClass.prototype);  // true

// PersonClass.prototype.greet = function() {
//     console.log(`Hey ${this.firstName} !!!`);
// };
kerim.greet();  // Hey Kerim !!!

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
