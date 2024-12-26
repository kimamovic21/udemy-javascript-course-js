// 150. forEach With Maps and Sets

'use strict';

// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
console.log(currencies);  // Map(3)

currencies.forEach(function(value, key, map) {
    console.log(`${key} : ${value}`);
});


console.log(`---------------------------------------`);

// Set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD', 'EUR']);
console.log(currenciesUnique); // Set(3) 

// currenciesUnique.forEach(function(value, key, map) {
//     console.log(`${value} : ${key}`);
// });

currenciesUnique.forEach(function(value, _, map) {
    console.log(`${value} : ${value}`);
});

/*
-Set doesn't have keys and it doesn't have indexes either
-So there is no value that would make sense for the key
-Unnecessary variable ( _ ) inside callback function
*/
