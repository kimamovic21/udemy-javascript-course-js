// 103. Desctructuring Arrays

'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }, 
};
console.log(restaurant);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a); // 2
console.log(b); // 3
console.log(c); // 4

const [x, y ,z] = arr; // array destructuring
console.log(x, y, z); // 2, 3, 4
console.log(arr); // (3) [2, 3, 4] // we are not destroying original array


const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

const [first2, , second2] = restaurant.categories
console.log(first2, second2); // Italian Vegetarian
console.log('-------------------------');

// // 1st example
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Pizzeria

// // Switching variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Pizzeria Italian
// console.log('-------------------------');


// 2nd example
let [main, secondary] = restaurant.categories;
console.log(main, secondary); // Italian Pizzeria

[main, secondary] = [secondary, main];
console.log(main, secondary); // Pizzeria Italian
console.log('-------------------------');

// Call a restaurant order method
console.log(restaurant.order(2,0)); // 'Garlic Bread', 'Pizza'

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza
console.log('-------------------------');


// Nested destructuring
const nested = [1, 2, [3, 4]];
console.log(nested);

// 1st example
const [d, ,e] = nested;
console.log(d, e); // 1 (2) [3,4]

// 2nd example
const [f, ,[g, h]] = nested;
console.log(f, g, h); // 1 3 4


// Default values
// 1st example
const [i, j, k] = [8, 9];
console.log(i, j, k); // 8 9 undefined

// 2nd example
const [l = 1, m = 1, n = 1] = [8, 9];
console.log(l, m, n); // 8 9 1
