// 16. Coding Challange #1 (Body Mass Index)

// BMI = weight / height * height
// BMI = weight / height ** 2

'use strict';

let weightMark = 78;
let heightMark = 1.7;
console.log(weightMark, heightMark);

let weightJohn = 92;
let heightJohn = 1.9;
console.log(weightJohn, heightJohn);

let bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiMark);

let bmiJohn = weightJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

let isMarksBmiHigher = bmiMark > bmiJohn;
console.log(isMarksBmiHigher); // true

let isJohnsBmiHigher = bmiJohn > bmiMark;
console.log(isJohnsBmiHigher); // false
