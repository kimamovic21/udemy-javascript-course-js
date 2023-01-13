'use strict';
// 31. Section Intro




// *************************************************************************************************
// 32. Activating Strict mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = 'Audio';
// const private = 123;
// const if = 'Kerim';





// *************************************************************************************************
// 33. Functions

// function logger() {
//     console.log(`My name is Kerim.`);
// };

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apple, oranges) {
//     // console.log(apple, oranges);
//     const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
//     return juice;
// }; 

// const appleJuice = fruitProcessor(2, 3);
// console.log(appleJuice);

// console.log(fruitProcessor(4, 5));

// const appleAndOrageJuice = fruitProcessor(6, 7);
// console.log(appleAndOrageJuice);

// function myName (name) {
//     console.log(`${name}`);
// }

// myName('Kerim');





// *************************************************************************************************
// 34. Function Declarations vs Expressions

// // Function declaration
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// };
// const age1 = calcAge1(1996);
// console.log(age1);


// // Function expressions
// const calcAge2 = function(birthYear) {
//     return 2022 - birthYear;
// };
// const age2 = calcAge2(1996);
// console.log(age2);


// function calcAge(currentYear, birthYear) {
//     const age = currentYear - birthYear;
//     return age;
// };
// console.log(calcAge(2022, 1996));





// *************************************************************************************************
// 35. Arrow Functions

// const calcAge = birthYear => 2022 - birthYear;
// const age = calcAge(1996);
// console.log(age);


// const yearsUntilRetirement = birthYear => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// };
// console.log(yearsUntilRetirement(1996));


// const yearsUntilRetirement = (currentYear, birthYear) => {
//     const currentAge = currentYear - birthYear;
//     const retirementAge = 65 - currentAge;
//     return retirementAge;
// };
// console.log(yearsUntilRetirement(2022, 1996));


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1996, 'Kerim'));
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));





// *************************************************************************************************
// 36. Functions Calling Other Functions

// function fruitProcessor(apples, oranges) {
//     const applePieces = (apples) * 2;
//     const orangePieces = (oranges) * 2;

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
//     return juice;
// };
// console.log(fruitProcessor(2,3));



// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`
//     return juice;
// };
// console.log(fruitProcessor(2,3));





// *************************************************************************************************
// 37. Reviewing Functions

// const calcAge = function(year) {
//     return 2022 - year;
// }
// console.log('CalcAge function result:', calcAge(1996));

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`)
//         return retirement;
//     } else {
//         console.warn(`${firstName} has already retired.`)
//         return retirement; // rezultat ce biti negativan broj
//     };
// };
// console.log(`Years until retirement function result: `, yearsUntilRetirement(1996, 'Kerim'));
// console.log(`Years until retirement function result: `, yearsUntilRetirement(1991, 'Jonas'));
// console.log(`Years until retirement function result: `, yearsUntilRetirement(1980, 'Bob'));
// console.log(`Years until retirement function result: `, yearsUntilRetirement(1955, 'Mike'));




// const calculatePersonAge = function(birthYear) {
//     const totalPersonYears = 2022 - birthYear;
//     return totalPersonYears;
// }
// console.log(calculatePersonAge(1996));

// const yearsUntilRetirement = function(personBirthYear, personName) {

//     const personAge = calculatePersonAge(personBirthYear);
//     const retirementAge = 65 - personAge;

//     const messageYearsToRetire = `${personName} retires in ${retirementAge} years.`;
//     const messagePersonHasRetired = `${personName} has already retired ${Math.abs(retirementAge)} years ago !`;

//     if (retirementAge > 0) {
//        return messageYearsToRetire;
//     } else {
//         return messagePersonHasRetired;
//     };
// };
// console.log(yearsUntilRetirement(1996, 'Kerim'));
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));
// console.log(yearsUntilRetirement(1955, 'Mike'));






// *************************************************************************************************
// 38. Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// console.log(scoreDolphins);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreKoalas);

// const checkWinner = function(avgDolhpins, avgKoalas) {
//     if (avgDolhpins >= 2 * avgKoalas) {
//         console.log(`Dolphins win the trophy (${avgDolhpins} vs. ${avgKoalas})!`);
//     } else if (avgKoalas >= 2 * avgDolhpins) {
//         console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolhpins})!`);
//     } else {
//         console.log(`No team wins !`);
//     };
// };
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(300, 100);
// checkWinner(100, 300);

// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// console.log(scoreDolphins);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);





// *************************************************************************************************
// 39. Introduction to Arrays

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(typeof friends);

// const yearsArray = new Array(1991, 1984, 2008, 2028);
// console.log(yearsArray);
// console.log(typeof yearsArray);

// console.log('First element in array:', friends[0]);
// console.log('Second element in array:', friends[1]);
// console.log('Third element in array:', friends[2]);

// console.log(friends.length);
// console.log(typeof length);
// console.log(friends[friends.length - 1]);

// friends[1] = 'John';
// console.log(friends);

// // friends = ['Bob', 'Robert'];
// // console.log(friends); // error

// const firstName = 'Kerim';
// const lastName = 'Imamovic'
// const kerim = [firstName, lastName, 2022 - 1996];
// console.log(kerim);

// const friendsKerim = [kerim, friends];
// console.log(friendsKerim);


// Excercise
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[4]);
// console.log(age1, age2, age3, age4, age5);

// const ages = [age1, age2, age3, age4, age5];
// console.log(ages);





// *************************************************************************************************
// 40. Basic Array Operations (Methods)

// // Add elements - push, unshift
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const newFriend = friends.push('Jay');
// console.log(newFriend); 
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// // Remove element - pop, shift
// const popped = friends.pop();
// console.log(popped);
// friends.pop();
// console.log(friends);
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// // Position - indexOf
// console.log('Michael:', friends.indexOf('Michael'));
// console.log('Steven:', friends.indexOf('Steven'));

// // Position - includes
// console.log('Michael:', friends.includes('Michael'));
// console.log('Steven:', friends.includes('Steven'));

// if (friends.includes('Peter')) {
//     console.log(`You have a friend called Peter`);
// } else {
//     console.log(`You don't hava a friend called Peter`);
// };





// *************************************************************************************************
// 41. Coding Challenge #2

// function calculateTip(bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
//     return tip;
// };
// console.log(calculateTip(100));
// console.log(calculateTip(125));
// console.log(calculateTip(555));
// console.log(calculateTip(44));

// const billsArray = [100, 125, 555, 44];
// console.log('Bills Array:', billsArray);
// const tipArray = [calculateTip(billsArray[0]), calculateTip(billsArray[1]), calculateTip(billsArray[2]), calculateTip(billsArray[3])];
// console.log('Tip Array:', tipArray);

// const totalArray1 = billsArray[0] + tipArray[0];
// const totalArray2 = billsArray[1] + tipArray[1];
// const totalArray3 = billsArray[2] + tipArray[2];
// const totalArray4 = billsArray[3] + tipArray[3];
// console.log(totalArray1, totalArray2, totalArray3, totalArray4);
// const totalArray = [totalArray1, totalArray2, totalArray3, totalArray4];



// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// };
// console.log(calcTip(300));

// const bills = [125, 555, 44];
// console.log(bills);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2]+ tips[2]];
// console.log(totals);





// *************************************************************************************************
// 42. Introduction to Objects

// const kerim = {
//     firstName : 'Kerim',
//     lastName : 'Imamovic',
//     age: 2022 - 1996,
//     job: 'unemployed',
//     friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(kerim);





// *************************************************************************************************
// 43. Dot vs Bracket Notation

// const kerim = {
//     firstName : 'Kerim',
//     lastName : 'Imamovic',
//     age: 2022 - 1996,
//     job: 'unemployed',
//     friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(kerim);

// // real property name
// console.log(kerim.firstName, kerim.lastName, kerim.age, kerim.job, kerim.friends);

// // computed property name
// const nameKey = 'Name';
// console.log(kerim[`first` + nameKey]);
// console.log(kerim[`last` + nameKey]);

// const interestedIn = prompt(`What do you want to know about Kerim ?`);
// console.log(interestedIn);
// console.log(kerim[interestedIn]);

// if (kerim[interestedIn]) {
//     console.log(kerim[interestedIn]);
// } else {
//     console.log(`Wrong requests!`);
// };

// kerim.location = 'Bosnia and Herzegovina';
// kerim['instagram'] = 'k_imamovic';
// console.log(kerim);


// // Challenge - random dynamic sentence
// const sentence = `${kerim.firstName} has ${kerim.friends.length} friends and he is currently speaking with ${kerim.friends[0]}.`;
// console.log(sentence);





// *************************************************************************************************
//  44. Object Methods

// const kerim = {
//     firstName : 'Kerim',
//     lastName : 'Imamovic',
//     birthYear: 1996,
//     job: 'frontend dev',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     // calcAge: function(birthYear) {
//     //     return 2022 - birthYear;
//     // }

//     // calcAge: function() {
//     //     console.log(this);
//     //     return 2022 - this.birthYear;
//     // }

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
// const kerim = {
//     firstName : 'Kerim',
//     lastName : 'Imamovic',
//     birthYear: 1996,
//     job: 'frontend dev',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     calcAge: function() {
//        this.age = 2022 - this.birthYear;
//        return this.age;
//     },

//     aboutYourself: function() {
//        let sentence = `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he ${this.hasDriversLicense ? `has` : `hasn't have`} driver's license.`;
//        return sentence;
//     },
// };

// console.log(kerim.aboutYourself());





// *************************************************************************************************
// 45. Coding Challenges #3

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



// const mark = {
//     fullName : 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
// };

// const john = {
//     fullName : 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (mark.bmi < john.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }





// *************************************************************************************************
// 46. Iteration: The for Loop

// for loops keeps running while condition is TRUE

// for (let rep = 1; rep <= 10; rep++) {
//     console.log('My name is Kerim Imamovic');
// };

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// };
    




// *************************************************************************************************
// 47. Looping Arrays, Breaking and Continuing

// const kerim = [
//     1,
//     'Kerim',
//     'Imamovic',
//     2022-1996,
//     'frontend dev',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// // console.log(kerim[0]);
// // console.log(kerim[1]);
// // ...
// // console.log(kerim[4]);

// const types = [];

// for (let i = 0; i < kerim.length; i++) {
//     // Reading from kerim array
//     console.log(kerim[i], typeof kerim[i]);

//     // Filling types array
//     // types[i] = typeof kerim[i];
//     // console.log(types);

//     types.push(typeof kerim[i]);
// };
// console.log(types)


// const years = [1991, 2007, 1970, 2002];
// console.log(years);
// const ages = [];
// console.log(ages);
// const result = years - ages;
// console.log('Result years + ages:', result);

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// };
// console.log(ages);


// // continue and break
// console.log(`------------ ONLY STRINGS -------------`);
// for (let i = 0; i < kerim.length; i++) {
//    if (typeof kerim[i] !== 'string') continue;
//   console.log(kerim[i], typeof kerim[i]);
// };

// console.log(`---------- BREAK WITH NUMBER -----------`);
// for (let i = 0; i < kerim.length; i++) {
//    if (typeof kerim[i] !== 'number') break;
//   console.log(kerim[i], typeof kerim[i]);
// };





// *************************************************************************************************
// 48. Looping Backwards and Loops in Loops

// const kerim = [
//     'Kerim',
//     'Imamovic',
//     2022 - 1996,
//     'frontend dev',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// for (let i = kerim.length - 1; i >=0; i-- ) {
//     console.log(i, kerim[i]);
// };

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Excercise ${exercise}: Lifting weight repetition ${rep} 🏋️.`);
//     };
// };


// const cars = ['Mercedes','BMW','Audi','Volvo','Volkswagen'];
// console.log(cars);

// for (let i =  0; i < cars.length; i++ ) {
//     console.log(cars[i]);
// };

// for (let race = 1; race < 4; race ++){
//     console.log(`---- The race number ${race} is starting.`);
//     for (let lap = 1; lap < 10; lap++) {
//         console.log(`Lap number ${lap}.`);
//     };
// };





// *************************************************************************************************
// 49. The While Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`FOR : Lifting weight repetition ${rep} 🏋️.`)
// }


// let rep = 1;
// while (rep <= 10){
//     console.log(`WHILE: Lifting weight repetition ${rep} 🏋️.`);
//     rep++;
// };


// let dice = Math.trunc((Math.random() * 6) + 1);
// console.log(dice);
// console.log (typeof dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc((Math.random() * 6) + 1);
//     if (dice === 6) {
//         console.log(`The loop is about to end...`);
//     };
// };





// *************************************************************************************************
// 50. Coding challenge #5

// Moj nacin
// const calcTip = function(bill) {
//     let result = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
//     return result;
// };
// console.log(`calcTip function: `, calcTip(300));

// const bills = [22, 295, 176, 440, 37, 186, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// console.log(`Bills:`, bills);
// console.log(`Tips:`, tips);
// console.log(`Totals:`, totals);

// for (let i = 0; i < bills.length; i++) {
//     // console.log(bills[i]);
//     const tip = calcTip(bills[i]);
//     console.log(tip);
//     tips.push(tip);
//     console.log(tips);
//     totals.push(tip + bills[i]);
//     console.log(totals);
// };

// console.log(`Bills:`, bills);
// console.log(`Tips:`, tips);
// console.log(`Totals:`, totals);




// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// };
// console.log(`calcTip function: `, calcTip(300));

// const bills = [22, 295, 176, 440, 37, 186, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// console.log(`Bills:`, bills);
// console.log(`Tips:`, tips);
// console.log(`Totals:`, totals);

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// };

// console.log(`Bills:`, bills);
// console.log(`Tips:`, tips);
// console.log(`Totals:`, totals);

// const calcAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     };
//     return (sum / arr.length).toFixed(2);
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(bills))
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));


