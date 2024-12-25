// 111. Short Circuiting (&& and ||);

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

console.log('------------ OR ---------------');
// Use any data type, return any data type, short circuiting
console.log(3 || 'Kerim'); // 3
console.log('' || 'Kerim'); // Kerim
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 23

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 23


console.log('------------- AND -------------');
console.log(0 && 'Kerim'); // 0
console.log(7 && 'Kerim'); // Kerim
console.log('Hello' && 23 && null && 'Kerim'); // null

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
};

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
