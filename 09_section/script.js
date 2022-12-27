'use strict';

// 103. Desctructuring Arrays

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y ,z] = arr; // array destructuring
// console.log(x, y, z);
// console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [first2, , second2] = restaurant.categories
// console.log(first2, second2);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [ main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse ] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [1, 2, [3, 4]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, , [j,k]] = nested;
// console.log(i, j, k); 


// // Default values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r); // 8 9 undefined

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1





// *************************************************************************************
// 104. Desctructuring Objects

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

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

restaurant.orderDelivery({
    time: '22:30', 
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 1',
});

const {name, openingHours, categories} = restaurant;
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
({a, b} = obj);
console.log(a, b);

// Nested objects
const {fri} = openingHours;
console.log('fri:', fri);

const {
    fri: {open, close}
} = openingHours;
console.log('Open, close:', open, close);

const {
    fri: {open: o, close: c},
} = openingHours;
console.log('o, c:', o, c);


