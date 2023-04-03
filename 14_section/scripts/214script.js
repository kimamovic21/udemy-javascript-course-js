// 214. Setters and Getters

'use strict';

class PersonClass {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }; 

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
        if(name.includes(' ')) {
            this._fullName = name;
        }
        else {
            alert(`${name} is not a full name`);
        };
    };

    get fullName() {
        return this._fullName;
    };
};

const kerim = new PersonClass('Kerim Imamovic', 1996);
console.log(kerim.age); // 27

// const walter = new PersonClass('Walter White', 1965);
const walter = new PersonClass('Walter', 1965);
console.log(walter);  // PersonClass {birthYear: 1965}


const account = {
    owner: 'Kerim',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest)  // 300

account.latest = 50;
console.log(account.movements);  // (5) [200, 530, 120, 300, 50]


