// 43. Dot vs Bracket Notation

'use strict';

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
