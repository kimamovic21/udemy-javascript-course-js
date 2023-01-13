// 45. Coding Challenges #3

'use strict';

// BMI object calculator

// moj nacin

// const mark = {
//     name: 'Mark',
//     weigth: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.weigth / (this.height) ** 2;
//         return this.bmi.toFixed(2);
//     },
// };

// const john = {
//     name: 'John',
//     weigth: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.weigth / (this.height) ** 2;
//         return this.bmi.toFixed(2);
//     },
// };

// function compareBMI() {
//     if (mark.bmi > john.bmi) {
//         console.log(`Mark's BMI is higher`)
//     } else if (mark.bmi < john.bmi) {
//         console.log(`John's BMI is higher`);
//     } else {
//         console.warn(`Something is wrong!!!`);
//     }
// };

// console.log(`Mark:`, mark.calcBMI());
// console.log(`John:`, john.calcBMI());
// console.log(compareBMI());



const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName : 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
