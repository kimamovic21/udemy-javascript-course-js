// 47. Looping Arrays, Breaking and Continuing

'use strict';

const kerim = [
    1,
    'Kerim',
    'Imamovic',
    2022-1996,
    'frontend dev',
    ['Michael', 'Peter', 'Steven'],
    true,
];

// console.log(kerim[0]);
// console.log(kerim[1]);
// ...
// console.log(kerim[4]);

const types = [];

for (let i = 0; i < kerim.length; i++) {
    // Reading from kerim array
    console.log(kerim[i], typeof kerim[i]);

    // Filling types array
    // types[i] = typeof kerim[i];
    // console.log(types);

    types.push(typeof kerim[i]);
};
console.log(types)


const years = [1991, 2007, 1970, 2002];
console.log(years);
const ages = [];
console.log(ages);
const result = years - ages;
console.log('Result years + ages:', result);

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
};
console.log(ages);


// continue and break
console.log(`------------ ONLY STRINGS -------------`);
for (let i = 0; i < kerim.length; i++) {
   if (typeof kerim[i] !== 'string') continue;
  console.log(kerim[i], typeof kerim[i]);
};

console.log(`---------- BREAK WITH NUMBER -----------`);
for (let i = 0; i < kerim.length; i++) {
   if (typeof kerim[i] !== 'number') break;
  console.log(kerim[i], typeof kerim[i]);
};
