// 209. Prototypes

'use strict';

const Person = function(firstName, birthYear) {
    console.log(this);  // Person {}
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const kerim = new Person('Kerim', 1996);
console.log(kerim);  // Person {firstName: 'Kerim', birthYear: 1996}

const jonas = new Person('Jonas', 1991);
const john = new Person('John', 1990);
console.log(jonas);
console.log(john);

console.log(kerim instanceof Person);  // true

// Prototypes
console.log(Person.prototype);  // {constructor: ƒ}

Person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear);
};

kerim.calcAge();  // 27
jonas.calcAge();  // 32

console.log(kerim.__proto__);  // {calcAge: ƒ, constructor: ƒ}
console.log(kerim.__proto__ === Person.prototype);  // true
console.log(Person.prototype.isPrototypeOf(kerim));  // true
console.log(Person.prototype.isPrototypeOf(Person));  // false
// console.log(Person.prototype.isPrototypeOf(mike));  // ERROR

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';

console.log(kerim);  // Person -> [[Prototype]]: Object -> species: "Homo Sapiens";
console.log(kerim.species);   // Homo Sapiens
console.log(jonas.species);   // Homo Sapiens
console.log(kerim.hasOwnProperty('firstName'));  // true
console.log(kerim.hasOwnProperty('species'));  // false
