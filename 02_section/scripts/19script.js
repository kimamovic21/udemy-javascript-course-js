// 19. Coding Challange #2 (Improve BMI calculator)

// BMI = weight / height * height
// BMI = weight / height ** 2

'use strict';

const weightMark = 78;
const heightMark = 1.7;
console.log(weightMark, heightMark);

const weightJohn = 92;
const heightJohn = 1.9;
console.log(weightJohn, heightJohn);

const BMIMark = weightMark / (heightMark * heightMark);
console.log(BMIMark);

const BMIJohn = weightJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const isMarksBmiHigher = BMIMark > BMIJohn;
console.log(isMarksBmiHigher); // true

const isJohnsBmiHigher = BMIJohn > BMIMark;
console.log(isJohnsBmiHigher); // false

// if else challange

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn}).`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark}).`);
}
