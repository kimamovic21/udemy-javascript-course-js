// 6. Section intro


// 7. Hello World
// console.log('Hello World!');


// 8. A brief introduction to JS


// 9. Linking a JS file


// ******************************************************************************************************
// 10. Values and variables
// console.log('Kerim Imamovic');
// console.log(26);
// console.log('Total:', 1+2+3+4);


// // pohranjivane neke vrijednost u variablu
// let firstName = 'Kerim';
// console.log(firstName);
// let lastName = 'Imamovic';
// console.log(lastName);


// // camelCase
// // koristenje deskriptivnih varijabli
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';
// console.log('First job:', myFirstJob);
// console.log('Second job:', myCurrentJob);




// ******************************************************************************************************
// 11. Practice Assignments




// ******************************************************************************************************
// 12. Data Types
// Number, Strings, Boolean, Undefined, Null, Symbol, BigInt
// Komentari u javascript-u   //  ili  /* */

// console.log(true);
// console.log(false);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof(true));
// console.log(typeof(false));


// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 26);
// console.log(typeof 'Kerim');



// Redeklarisanje varijable
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// javascriptIsFun = 'Yes!';
// console.log(javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2022;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);




// ******************************************************************************************************
// 13. let, const and var
// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1996;
// console.log(birthYear);
// // birthYear = 1997;
// // console.log(birthYear);

// var myCurrentJob = 'Frontend Programmer';
// console.log(myCurrentJob);
// myCurrentJob = 'Backend Programmer';
// console.log(myCurrentJob);
// // ne trebamo koristiti var

// firstName = 'Kerim';
// lastName = 'Imamovic';
// console.log(firstName, lastName);




// ******************************************************************************************************
// 14. Basic operators
// Matematicke operacije u javascript-u
// 1. nacin
// const ageKerim = 2022 - 1996;
// const ageJames = 2022 - 1990;
// const ageRobert = 2022 - 1988;
// const ageJohn = 2022- 1985;
// console.log('Kerim:', ageKerim);
// console.log('James:', ageJames);
// console.log('Robert:', ageRobert);
// console.log('John:', ageJohn);


// 2. nacin
// const currentYear = 2022;
// const ageKerim = currentYear - 1996;
// const ageJames = currentYear - 1990;
// const ageRobert = currentYear - 1988;
// const ageJohn = currentYear - 1985;
// console.log('Kerim:', ageKerim);
// console.log('James:', ageJames);
// console.log('Robert:', ageRobert);
// console.log('John:', ageJohn);

// // Math operators
// console.log(ageKerim * 2);
// console.log(ageKerim / 2);
// console.log(ageKerim ** 3);


// const firstName = 'Kerim';
// const lastName = 'Imamovic';
// console.log(firstName + ' ' + lastName);


// // Assignment operators
// let myNumber = 10 + 5; 
// console.log(myNumber); // 15
// myNumber += 10; // myNumber + 10
// console.log(myNumber);
// myNumber++; // myNumber + 1
// myNumber++; // myNumber + 1
// console.log(myNumber); // 27
// myNumber--; // myNumber + 1
// console.log(myNumber); // 26


// // Comparison operators
// console.log(ageKerim > ageJames); //  >, <, >=, <=
// console.log(ageKerim >= 18);

// const isFullAge = ageKerim >= 18;
// console.log(isFullAge);

// console.log(currentYear - 1990 > currentYear - 2010);





// ******************************************************************************************************
// 15. Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const currentYear = 2022;
// const ageJonas = currentYear - 1991;
// const ageKerim = currentYear - 1996;
// console.log(ageJonas); // 31
// console.log(ageKerim); // 26

// const averageYears = (ageJonas + ageKerim) / 2;
// console.log(averageYears);





// ******************************************************************************************************
// 16. Coding Challange #1 (Body Mass Index)
// BMI = weight / height * height
// BMI = weight / height ** 2

// let weightMark = 78;
// let heightMark = 1.7;
// console.log(weightMark, heightMark);

// let weightJohn = 92;
// let heightJohn = 1.9;
// console.log(weightJohn, heightJohn);

// let bmiMark = weightMark / (heightMark * heightMark);
// console.log(bmiMark);

// let bmiJohn = weightJohn / (heightJohn * heightJohn);
// console.log(bmiJohn);

// let isMarksBmiHigher = bmiMark > bmiJohn;
// console.log(isMarksBmiHigher); // true

// let isJohnsBmiHigher = bmiJohn > bmiMark;
// console.log(isJohnsBmiHigher); // false





// ******************************************************************************************************
// 17. Strings and template literals

// // Old way
// const firstName = 'Kerim';
// const job = 'frontend dev';
// const birthYear = 1996;
// const currentYear = 2022;

// const kerim = "Old : I'm " + firstName + ', a ' +  (currentYear - birthYear) + ' years old. I work as a ' + job + '!';
// console.log(kerim);

// // ES6 new way
// const kerimNew = `New : I'm ${firstName}, a ${currentYear - birthYear} years old. I work as a ${job}!`;
// console.log(kerimNew);

// console.log(`Just a regular string...`);
// console.log(`My 
// name 
// is 
// Kerim.`
// );






// ******************************************************************************************************
// 18. Taking decisions: if/else statement
// const age = 18;
// console.log(age);

// if (age >= 18) {
//     console.log(`Kerim can start learning how to drive :)`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sorry Kerim. You can't start learning how to drive. Wait another ${yearsLeft} year!`);
// };

// const birthYear = 1996;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);






// ******************************************************************************************************
// 19. Coding Challange #2 (Improve BMI calculator)
// BMI = weight / height * height
// BMI = weight / height ** 2

// const weightMark = 78;
// const heightMark = 1.7;
// console.log(weightMark, heightMark);

// const weightJohn = 92;
// const heightJohn = 1.9;
// console.log(weightJohn, heightJohn);

// const BMIMark = weightMark / (heightMark * heightMark);
// console.log(BMIMark);

// const BMIJohn = weightJohn / (heightJohn * heightJohn);
// console.log(BMIJohn);

// const isMarksBmiHigher = BMIMark > BMIJohn;
// console.log(isMarksBmiHigher); // true

// const isJohnsBmiHigher = BMIJohn > BMIMark;
// console.log(isJohnsBmiHigher); // false

// // if else challange

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn}).`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark}).`);
// }





// ******************************************************************************************************
// 20. Type Conversion and Coercion

// // type conversion
// const inputYear = '1996';

// console.log(Number(inputYear), inputYear); // 1996 '1996'
// console.log(inputYear + 18); //199618
// console.log(Number(inputYear) + 18); // 2014

// console.log(Number('Kerim')); // NaN
// console.log(typeof NaN); // number

// console.log(String(26)); // '26'


// // type coercion
// console.log('I am ' + 26 + ' years old.');
// // broj je konvertovan u string automatski
// console.log('I am ' + '26' + ' years old.');
// console.log('I am ' + String(26) + ' years old.');

// // stringovi su konvertovani u brojeve
// console.log('26' - '10' - 6); // 10
// console.log('26' * '2'); // 52


// let n = '1' + 1; // '11'
// n = n - 1; // '11' - '1'; 
// console.log(n); // 10


// let randomNum = 1 + '2' - 3 - 4 + '5' - 6;
// console.log(randomNum); // 49





// ******************************************************************************************************
// 21. Truthy nad Falsy values
// 5 falsy values: 0, 'string', undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Kerim')); // true
// console.log(Boolean({})); // true
// console.log(Boolean('')); // false
// console.log(Boolean([])); // true

// const money = 0;
// if (money) {
//     console.log(`Don't spend it all!`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height;
// if (height) {
//     console.log(`YAY! Height is defined :)`);
// } else {
//     console.log(`Height is undefined :(`);
// }





// ******************************************************************************************************
// 22. Equality operators == vs ===

// const age = '18';
// if (age === 18) {
//     console.log(`You just became an adult! (strict)`);
// }

// if (age == 18) {
//     console.log(`You just became an adult! (loose)`);
// }

// const favoriteNumber = Number(prompt("What is your favorite number ?"));
// console.log(favoriteNumber);
// console.log(typeof favoriteNumber);

// if (favoriteNumber === 26) {
//     console.log('Cool! 26 is an amazing number :)');
// } else if (favoriteNumber === 7) {
//     console.log('7 is also a cool number');
// } else if (favoriteNumber === 7) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 26 or 7 or 9');
// };

// // uslov ako favoriteNumber nije jednak broju 26
// if (favoriteNumber !== 26) { 
//     console.log('Why not 26?');
// }





// ******************************************************************************************************
// 23. Boolean Logic
// Basic Boolean Logic: The And, Or, and Not Operators





// ******************************************************************************************************
// 24. Logical Operators


// (AND) && (true && true) 
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // true


// (AND) && (true && false) 
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense && hasGoodVision); // false


//  (OR) ||
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense || hasGoodVision); // true


// (!)
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(!hasDriversLicense); // false
// console.log(!hasGoodVision); // true

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Kerim is able to drive :)');
// } else {
//     console.log('Someone else should drive...');
// };

// const isTired = false; // C

// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);
// console.log(hasDriversLicense && hasGoodVision && !isTired);





// ******************************************************************************************************
// 25. Coding Challange #3


// Moj nacin

// const dolphinsSport1 = 100;
// const dolphinsSport2 = 100;
// const dolphinsSport3 = 100;
// const dolphinsSportsAveragePoints = ((dolphinsSport1 + dolphinsSport2 + dolphinsSport3) / 3).toFixed(2);
// console.log(dolphinsSportsAveragePoints);

// const koalasSport1 = 100;
// const koalasSport2 = 100;
// const koalasSport3 = 100;
// const koalasSportsAveragePoints = ((koalasSport1 + koalasSport2 + koalasSport3) / 3).toFixed(2);
// console.log(koalasSportsAveragePoints);

// if ( dolphinsSportsAveragePoints > koalasSportsAveragePoints && dolphinsSportsAveragePoints >= 100 ) {
//     console.log(`Dolphins team wins!!!`);
// } else if (koalasSportsAveragePoints > dolphinsSportsAveragePoints && koalasSportsAveragePoints >= 100 ) {
//     console.log(`Koalas team wins!!!`);
// } else if (dolphinsSportsAveragePoints === koalasSportsAveragePoints && dolphinsSportsAveragePoints >= 100 && koalasSportsAveragePoints >= 100) {
//         console.log(`It's tied`);
// } else {
//     console.log(`Min 100 points to win a trophy... `)
// } 

// 1. napisati slucaj kad delfini pobjede
// 2. napisati slucaj kad koale pobjede
// 3. napisati rezultat kad bude izjednaceno
// 4. napisati sta ce se desiti kad timovi budu imali manje od 100 bodova



// Prvi dio
// const scoreDolphins = ((96 + 108 + 89) / 3).toFixed(2);
// const scoreKoalas = ((88 + 91 + 110) / 3).toFixed(2);
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy !!!`);
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win the trophy !!!`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`It's tied !!!`);
// }




// BONUS 1
// const scoreDolphins = ((97 + 112 + 101) / 3).toFixed(2);
// const scoreKoalas = ((109 + 95 + 123) / 3).toFixed(2);
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins win the trophy !!!`);
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`Koalas win the trophy !!!`);
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 & scoreKoalas >= 100) {
//     console.log(`It's tied !!!`);
// } else {
//     console.log(`No one wins the trophy ! :(`);
// };

 



// ******************************************************************************************************
// 26. The Switch Statement

// const day = 'monday';

// switch(day) {
//     case 'monday':  
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'wednesday': 
//     case 'thursday':
//         console.log(`Write code examples`);
//         break;
//     case 'friday':
//         console.log(`Record videos`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend :D`);
//         break;
//     default: 
//         console.log(`Not a valid day!`);
// };



// if (day === 'monday') {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === 'tuesday') {
//     console.log(`Prepare theory videos`);
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log(`Write code examples`);
// } else if (day === 'friday') {
//     console.log(`Record videos`);
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoy the weekend :D`);
// } else {
//     console.log(`Not a valid day`)
// }





// ******************************************************************************************************
// 27. Statements and Expressions
 // Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments.





// ******************************************************************************************************
// 28. The Conditional (Ternary) Operator

// const age = 26;
// age >= 18 ? console.log(`You can drive 🚗 !`) : console.log(`You can't drive 🚫 !`);

// const drive = age >= 18 ? `ternary: car 🚗` : `ternary: can't 🚫`;
// console.log(drive);

// let drive2;
// if (age >= 18) {
//     drive2 = `car 🚗`;
// } else {
//     drive2 = `can't 🚫`;
// };

// console.log(`if-else:`, drive2);

// console.log(`Can I drive ? ${age >= 18 ? `Yes 🚗` : `Can't 🚫`}`);





// ******************************************************************************************************
// 29. Coding Challenge #4

// Moj nacin
// const bill = 400;
// let tip = 20/100 * 100;
// let totalBill = bill + tip;

// console.log(`$:`, bill);
// console.log(`$:`, tip);
// console.log(`$:`, totalBill);

// if (bill >= 50 && bill <= 300) {
//     let tip = 15/100 * 100;
//     let totalBill = bill + tip;
//     console.log(totalBill);
// } else if (bill <= 0){
//     console.log(`Your total bill is less than 0 !!!`);
// } else {    
//     let totalBill = bill + tip;
//     console.log(totalBill);
// }


// const bill = 300;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// const totalValue = bill + tip;

// console.log(`Bill: $`, bill);
// console.log(`Tip: $`, tip);
// console.log(`Boolean value:`, bill >= 50 && bill <= 300);
// console.log(`Total value: $`, totalValue);
// console.log(`The bill was $${bill}, the tip was $${tip} and the total value was $${totalValue}.`);





// ******************************************************************************************************
// 30. Javascript Releases : ES5, ES6+ and ESNext

