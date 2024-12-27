// 16. Inheritance Between "Classes": Object.create

'use strict';

const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);  // {}


const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
console.log(jay);  // {}
jay.calcAge();  // 23
jay.introduce();  // My name is Jay and I study Computer Science.
