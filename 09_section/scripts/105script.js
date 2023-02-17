// 105. The Spread Operator (...)

'use strict';

const arr = [4, 5, 6];
console.log(arr); // 4,5,6
console.log(...arr); // 4,5,6

const newArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(newArr); // 1,2,3,4,5,6

const spreadArr = [1, 2, 3, ...arr];
console.log(spreadArr); // 1,2,3,4,5,6

console.log(...spreadArr); // 1,2,3,4,5,6



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

// const newMenu = [restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); 


// shallow copy of arrays and to merge two arrays together

// copy array 
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Kerim';
const letters = [...str, ' ', 'I.'];
console.log('letters:', letters); // (7) ['K', 'e', 'r', 'i', 'm', ' ', 'I.']
console.log('str:', ...str); // K e r i m
// console.log(`${...str} Imamovic`); //  Error: Unexpected token '...'


// const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)];
// console.log(ingredients);

// Old way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// NEW ES6 way
// restaurant.orderPasta(...ingredients);


// Objects
const newRestaurant = { 
    foundedIn: 1998, 
    ...restaurant, 
    founder: 'Guiseppe'
};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
