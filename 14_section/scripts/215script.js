// 215. Static Methods

'use strict';

const Person = function(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
}

Person.hey = function() {
    console.log('Hey there 🖐');
    console.log(this);  // f () {}
};

Person.hey();



class PersonClass {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }; 

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    };

    greet() {
        console.log(`Hey ${this.fullName} !!!`);
    };

    get age() {
        return 2023 - this.birthYear;
    };

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    };

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 🖐');
        console.log(this); 
    }
};

const kerim = new PersonClass('Kerim Imamovic', 1996);
console.log(kerim.age); // 27

PersonClass.hey();  // class PersonClass { }
