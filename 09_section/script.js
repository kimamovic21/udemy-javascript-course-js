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
// console.log(x, y, z); // 2, 3, 4
// console.log(arr); // (3) [2, 3, 4]


// const [first, second] = restaurant.categories;
// console.log(first, second); // Italian Pizzeria

// const [first2, , second2] = restaurant.categories
// console.log(first2, second2); // Italian Vegetarian


// // 1st example
// // let [main, secondary] = restaurant.categories;
// // console.log(main, secondary); // Italian Pizzeria

// // Switching variables
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary); // Pizzeria Italian


// // 2nd example
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Pizzeria

// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Pizzeria Italian

// // Call a restaurant order method
// console.log(restaurant.order(2,0)); // 'Garlic Bread', 'Pizza'

// // Receive 2 return values from a function
// const [starter, mainCourse ] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Garlic Bread Pizza


// // Nested destructuring
// const nested = [1, 2, [3, 4]];

// // 1st example
// // const [i, ,j] = nested;
// // console.log(i, j); // 1 (2) [3,4]

// // 2nd example
// const [i, ,[j, k]] = nested;
// console.log(i, j, k); // 1 3 4


// Default values

// 1st example 
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // 8 9 undefined

// 2nd example
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1





// **************************************************************************************************************************
// 104. Desctructuring Objects

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     // orderDelivery: function(obj) {
//     //     console.log(obj);
//     // },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     openingHours: {
//       thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//       },
//     },
// };

// restaurant.order(2,1);

// restaurant.orderDelivery({
//     time: '22:30', 
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'Via del Sole, 1',
// });


// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);


// const {
//     name: restaurantName, 
//     openingHours: hours, 
//     categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);


// // Default values
// const { 
//     menu = [],
//     starterMenu: starters = [],
// } = restaurant;
// console.log(menu, starters);


// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//     a: 23, 
//     b: 7, 
//     c: 14,
// };
// ({a, b} = obj);
// console.log(a, b); // 23 7


// // Nested objects
// const {fri} = openingHours;
// console.log('fri:', fri);


// const {
//     fri: {open, close}
// } = openingHours;
// console.log(open, close); // 11 23
// console.log(`Open: ${open}am - Close: ${close}pm`);


// const {
//     fri: {open: o, close: c},
// } = openingHours;
// console.log('o, c:', o, c);





// **************************************************************************************************************************
// 105. The Spread Operator (...)

// const arr = [4,5,6];
// console.log(arr); // 4,5,6
// console.log(...arr); // 4,5,6

// const newArr = [1,2,3,arr[0], arr[1], arr[2]];
// console.log(newArr); // 1,2,3,4,5,6

// const spreadArr = [1,2,3,...arr];
// console.log(spreadArr); // 1,2,3,4,5,6

// console.log(...spreadArr); // 1,2,3,4,5,6



// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     orderPasta: function(ing1, ing2, ing3) { // ingredients
//         console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
//     },

//     openingHours: {
//       thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//       },
//     },
// };

// // const newMenu = [restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);


// // shallow copy of arrays and to merge two arrays together

// // copy array 
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);


// // Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Kerim';
// const letters = [...str, '', 'I.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Imamovic`); //  Error: Unexpected token '...'


// const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)];
// console.log(ingredients);


// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);


// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);





// **************************************************************************************************************************
// 106. Rest Pattern and Parameters

// Destructuring

// // SPREAT - because on right side of =
// const arr = [1,2, ...[3,4]];
// console.log(arr);

// // REST - because on left side of =
// const [a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others);


// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     orderPasta: function(ing1, ing2, ing3) { // ingredients
//         console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
//     },

//     orderPizza: function(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
//         console.log(mainIngr);
//         console.log(otherIngr);
//     },

//     openingHours: {
//       thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//       },
//     },
// };

// const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);


// // Objects
// const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);


// // Functions
// const add = function(...numbers) {
//     // console.log(numbers);
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// };
// add(2,3); // 5
// add(5,3,7,2); // 17
// add(8,2,5,3,2,1,4); // 25

// const x = [23, 5, 7];
// add(...x); // 35

// restaurant.orderPizza('mushrooms', 'onios', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');





// **************************************************************************************************************************
// 107. Short Cicuiting (&& and ||);

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     orderPasta: function(ing1, ing2, ing3) { // ingredients
//         console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
//     },

//     orderPizza: function(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
//         console.log(mainIngr);
//         console.log(otherIngr);
//     },

//     openingHours: {
//       thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//       },
//     },
// };

// console.log('------------ OR ---------------');
// // Use any data type, return any data type, short circuiting
// console.log(3 || 'Kerim'); // 3
// console.log('' || 'Kerim'); // Kerim
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 23

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); // 23


// console.log('------------- AND -------------');
// console.log(0 && 'Kerim'); // 0
// console.log(7 && 'Kerim'); // Kerim
// console.log('Hello' && 23 && null && 'Kerim'); // null

// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');





// **************************************************************************************************************************
// 108. The Nullish Coalescing Operator (??)

// Nullish: null and undefined (NOT 0 or '');

// restaurant.numGuests = 0;
// const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests3); // 10

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 0

