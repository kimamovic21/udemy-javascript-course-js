//  44. Object Methods

'use strict';

// const kerim = {
//     firstName : 'Kerim',
//     lastName : 'Imamovic',
//     birthYear: 1996,
//     job: 'frontend dev',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

//     calcAge: function() {
//        this.age = 2022 - this.birthYear;
//        return this.age;
//     }
// };

// console.log(kerim);
// console.log(kerim.calcAge());
// console.log(kerim.calcAge(1996));
// console.log(kerim.calcAge(kerim.birthYear));



// Challenge
// Kerim is a 26 year old frontend dev and he has no drivers license.

const kerim = {
    firstName : 'Kerim',
    lastName : 'Imamovic',
    birthYear: 1996,
    job: 'frontend dev',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function() {
       this.age = 2022 - this.birthYear;
       return this.age;
    },

    aboutYourself: function() {
       let sentence = `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he ${this.hasDriversLicense ? `has` : `hasn't have`} driver's license.`;
       return sentence;
    },
};

console.log(kerim.aboutYourself());
