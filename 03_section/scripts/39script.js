// 39. Introduction to Arrays

'use strict';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(typeof friends);

const yearsArray = new Array(1991, 1984, 2008, 2028);
console.log(yearsArray);
console.log(typeof yearsArray);

console.log('First element in array:', friends[0]);
console.log('Second element in array:', friends[1]);
console.log('Third element in array:', friends[2]);

console.log(friends.length);
console.log(typeof length);
console.log(friends[friends.length - 1]);

friends[1] = 'John';
console.log(friends);

// friends = ['Bob', 'Robert'];
// console.log(friends); // error

const firstName = 'Kerim';
const lastName = 'Imamovic'
const kerim = [firstName, lastName, 2022 - 1996];
console.log(kerim);

const friendsKerim = [kerim, friends];
console.log(friendsKerim);


// Excercise
const calcAge = function (birthYear) {
    return 2022 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);
console.log(age1, age2, age3, age4, age5);

const ages = [age1, age2, age3, age4, age5];
console.log(ages);
