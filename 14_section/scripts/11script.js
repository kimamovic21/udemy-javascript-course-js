// 11. Object.create

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

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();  // 21

console.log(steven.__proto__);  // {calcAge: ƒ}
console.log(steven.__proto__ === PersonProto);  // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();  // 44
console.log(sarah);
