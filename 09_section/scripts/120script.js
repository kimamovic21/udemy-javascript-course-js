// 120. Sets

'use strict';

// Sets - collections of unique values

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza' ]);
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

console.log(new Set('Kerim')); // Set(5) {'K', 'e', 'r', 'i', 'm'}

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);  // Set(4)
ordersSet.delete('Risotto')
console.log(ordersSet); // Set(3)
console.log(ordersSet[0]); // undefined

for (const order of ordersSet) {
    console.log(order);
};

// ordersSet.clear();
// console.log(ordersSet); // Set(0)


// Example 1
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique); // Set (3) {'Waiter', 'Chef', 'Manager'}


// Example 2
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // (3) ['Waiter', 'Chef', 'Manager']

console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

console.log(new Set('Kerim Imamovic').size); // 11
