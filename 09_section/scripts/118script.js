// 118. Looping Objects: Object Keys, Values and Entries

'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    },

    orderPasta(ing1, ing2, ing3) { // ingredients
        console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
    },

    orderPizza(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
        console.log(mainIngr);
        console.log(otherIngr);
    },
};

// for (const day of Object.keys(openingHours)) {
//     console.log(day);
// };


// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
    openStr += `${day}, `;
};
console.log(openStr);


// Property VALUES
const values = Object.values(openingHours);
console.log(values); // [{...}, {...}, {...}]


// Entire object
const entries = Object.entries(openingHours);
console.log(entries);  // (3) [Array(2), Array(2), Array(2)]


// for (const x of entries) {
//     console.log(x);
// };


// [key, value]
for (const [day, {open, close}] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}.`);
};
