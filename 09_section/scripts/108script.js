// 108. Destructuring Objects

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

    // orderDelivery: function(obj) {
    //     console.log(obj);
    // },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
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

restaurant.order(2,1);

restaurant.orderDelivery({
    time: '22:30', 
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 1',
    starterIndex: 2,
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);


const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);


// Default values
const { 
    menu = [],
    starterMenu: starters = [],
} = restaurant;
console.log(menu, starters);


// Mutating variables
let a = 111;
let b = 999;
const obj = {
    a: 23, 
    b: 7, 
    c: 14,
};
// {a, b} = obj; // unexpected token '='
({a, b} = obj);
console.log(a, b); // 23 7


// Nested objects
const {fri} = openingHours;
console.log('fri:', fri);


const {
    fri: {open, close}
} = openingHours;
console.log(open, close); // 11 23
console.log(`Open: ${open}am - Close: ${close}pm`);


const {
    fri: {open: o, close: c},
} = openingHours;
console.log(o, c); // 11 23
