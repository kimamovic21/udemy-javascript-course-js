// 111. Looping Arrays: The for-of Loop

'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
    },

    orderPasta: function(ing1, ing2, ing3) { // ingredients
        console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
    },

    orderPizza: function(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
        console.log(mainIngr);
        console.log(otherIngr);
    },

    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) {
    console.log(item);
};

for (const item of menu.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
};

console.log(menu.entries()); // Array Iterator {}
console.log([...menu.entries()]); // (7);

for (const [i, el] of menu.entries()) {
    // console.log(i, el);
    console.log(`${i + 1}: ${el}`);
};
