// 13. Inheritance between "Classes"

'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear);
};
 

const Student = function(firstName, birthYear, course) {
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // Person(firstName, birthYear);
    Person.call(this, firstName, birthYear);
    this.course = course;
};


// Linkings prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
console.log(mike);  // Student
mike.introduce();  // My name is Mike and I study Computer Science.
mike.calcAge();  // 23

console.log(mike.__proto__);  // Person {introduce: ƒ}
console.log(mike.__proto__.__proto__);  // {calcAge: ƒ, constructor: ƒ}

console.log(mike instanceof Student);  // true
console.log(mike instanceof Person)  // true
console.log(mike instanceof Object)  // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);  // f Student

