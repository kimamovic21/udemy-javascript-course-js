// 220. Inheritance Between "Classes": ES6 Classes

'use strict';

class PersonClass {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }; 

    calcAge() {
        console.log(2023 - this.birthYear);
    };

    greet() {
        console.log(`Hey ${this.fullName} !!!`);
    };

    get age() {
        return 2023 - this.birthYear;
    };

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    };

    get fullName() {
        return this._fullName;
    };

    // Static method
    static hey() {
        console.log('Hey there 🖐');
    };
};


class StudentClass extends PersonClass {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        // super - constructor function of the parent class
        this.course = course;
    };

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
    };

    calcAge() {
        console.log(`I'm ${2023 - this.birthYear} years old, but as a student I feel more like ${2023 - this.birthYear + 10}.`);
    };
};

// const martha = new StudentClass('Martha Jones', 2000);
// console.log(martha);
const martha = new StudentClass('Martha Jones', 2000, 'Computer Science');
console.log(martha);  // StudentClass

martha.calcAge();
martha.introduce();

