'use strict';
// 31. Section Intro




// *************************************************************************************************
// 32. Activating Strict mode
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = 'Audio';
// const private = 123;
// const if = 'Kerim';





// *************************************************************************************************
// 33. Functions
// 'use strict';

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
const kerim = {
    firstName : 'Kerim',
    lastName : 'Imamovic',
    age: 2022 - 1996,
    job: 'unemployed',
    friends: ['Michael', 'Peter', 'Steven'],
};
console.log(kerim);

// real property name
console.log(kerim.firstName, kerim.lastName, kerim.age, kerim.job, kerim.friends);

// computed property name
const nameKey = 'Name';
console.log(kerim[`first` + nameKey]);
console.log(kerim[`last` + nameKey]);

const interestedIn = prompt(`What do you want to know about Kerim ?`);
console.log(interestedIn);
console.log(kerim[interestedIn]);

if (kerim[interestedIn]) {
    console.log(kerim[interestedIn]);
} else {
    console.log(`Wrong requests!`);
};

kerim.location = 'Bosnia and Herzegovina';
kerim['instagram'] = 'k_imamovic';
console.log(kerim);


// Challenge - random dynamic sentence
const sentence = `${kerim.firstName} has ${kerim.friends.length} friends and he is currently speaking with ${kerim.friends[0]}.`;
console.log(sentence);
