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

// restaurant.numGuests = 0;
// const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests3); // 10

// // Nullish: null and undefined (NOT 0 or '');
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 0





// **************************************************************************************************************************
// 109. Logical Assignment Operators

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

// const restaurant1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// };

// const restaurant2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // restaurant1.numGuests = restaurant1.numGuests || 10;
// // restaurant2.numGuests = restaurant2.numGuests || 10;
// // restaurant1.numGuests ||= 10;
// // restaurant2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined)
// restaurant1.numGuests ??= 10;
// restaurant2.numGuests ??= 10;

// // AND assignment operator
// // restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';
// // restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';

// restaurant1.owner &&= '<ANONYMOUS>';
// restaurant2.owner &&= '<ANONYMOUS>';

// console.log(restaurant1);
// console.log(restaurant2);





// **************************************************************************************************************************
// 110. Coding Challenge #1

/*
We're building a football betting app 

Suppose we get data from a web service about a certain game(below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team(variables players1 and players2)
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers) with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team1) used 3 substitute players. So create a new array ('player1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw', and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using and if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borussia Dortmund',
//     players: [
//     [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnabry',
//         'Lewandowski'
//     ],
//     [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze'
//     ]
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };
// // console.log(game);

// // 1. destructuring arrays
// const [players1, players2] = game.players;
// console.log('players1: ', players1); // (11)
// console.log('players2: ', players2); // (11)

// // 2. destructuring arrays
// const [gk, ...fieldPlayers] = players1; 
// console.log('gk: ', gk); // Neuer
// console.log('fieldPlayers: ', fieldPlayers); // (10)

// // 3. spread
// const allPlayers = [...players1, ...players2];
// console.log('allPlayers: ', allPlayers); // (22)

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log('players1Final:',players1Final); // (14)

// // 5. 
// const {
//     odds: {team1, x: draw, team2},
// } = game;
// // console.log(odds)
// console.log('team1:', team1);
// console.log('draw:', draw);
// console.log('team2:', team2);

// // 6.
// const printGoals = function(...players) {
//     console.log('players: ',players);
//     console.log(`${players.length} goals were scored.`);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win.');
// team1 > team2 && console.log('Team 2 is more likely to win.');





// **************************************************************************************************************************
// 111. Looping Arrays: The for-of Loop

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

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const item of menu) console.log(item);


// for (const item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`);
// };

// console.log(menu.entries()); // Array Iterator {}
// console.log([...menu.entries()]); // (7);

// for (const [i, el] of menu.entries()) {
//     // console.log(i, el);
//     console.log(`${i + 1}: ${el}`);
// };





// **************************************************************************************************************************
// 112. Enhanced Object Literals

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
// };
// console.log(openingHours);

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     // ES6 enhanced object literals
//     openingHours,

//     order(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     orderPasta(ing1, ing2, ing3) { // ingredients
//         console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
//     },

//     orderPizza(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
//         console.log(mainIngr);
//         console.log(otherIngr);
//     },
// };

// console.log(restaurant);





// **************************************************************************************************************************
// 113. Optional Chaining (?.)

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
// };

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     // ES6 enhanced object literals
//     openingHours,

//     order(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     orderPasta(ing1, ing2, ing3) { // ingredients
//         console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
//     },

//     orderPizza(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
//         console.log(mainIngr);
//         console.log(otherIngr);
//     },
// };

// // if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open); // Error


// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open); // undefined
// console.log(restaurant.openingHours?.mon?.open); // undefined

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// };

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exists'); // (2) ['Focaccia', 'Pasta]

// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exists'); // Method does not exists

// // Arrays
// const users = [
//     {
//         name: 'Kerim',
//         email: 'hello@kerim.io',
//     },
// ];

// // const users = [];
// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name); else console.log('User array empty');





// **************************************************************************************************************************
// 114. Looping Objects: Object Keys, Values and Entries

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
// };

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     // ES6 enhanced object literals
//     openingHours,

//     order(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     orderPasta(ing1, ing2, ing3) { // ingredients
//         console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
//     },

//     orderPizza(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
//         console.log(mainIngr);
//         console.log(otherIngr);
//     },
// };

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties); // ['thu', 'fri', 'sat']

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//     openStr += `${day}, `;
// };
// console.log(openStr);


// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values); // [{...}, {...}, {...}]


// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);  // (3)

// // [key, value]
// for (const [day, {open, close}] of entries) {
//     console.log(`On ${day} we open at ${open} and close at ${close}.`);
// };





// **************************************************************************************************************************
// 115. Coding Challenge #2

/*
Let's continue  with our football betting app!

1. Loop over the game.score array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of vicory Bayern Munich : 1.33
    Odd of draw: 3.25
    Odd of victory Borrusia Dortmund: 6.5
Get the team names directly from the game object, don't hardcore them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this: 
    {
        Gnabry: 1,
        Hummels: 1,
        Lewandowski: 2
    }
*/

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borussia Dortmund',
//     players: [
//     [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnabry',
//         'Lewandowski'
//     ],
//     [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze'
//     ]
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };
// // console.log(game);


// // 1.  
// for (const [i, player] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${player}`);
// };

// // 2. 
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//     average +=odd;
// };
// average /= odds.length;
// console.log(average);

// // 3. 
// for (const [team, odd] of Object.entries(game.odds)) {
//     // console.log(team, odd);
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} ${odd}`);
// };





// **************************************************************************************************************************
// 116. Sets

// Sets - collections of unique values

// const ordersSet = new Set([
//     'Pasta', 
//     'Pizza', 
//     'Pizza', 
//     'Risotto', 
//     'Pasta', 
//     'Pizza',
// ]);
// console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

// console.log(new Set('Kerim')); // Set(5) {'K', 'e', 'r', 'i', 'm'}

// console.log(ordersSet.size); // 3
// console.log(ordersSet.has('Pizza')); // true
// console.log(ordersSet.has('Bread')); // false
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);  // Set(4)
// ordersSet.delete('Risotto')
// console.log(ordersSet); // Set(3)
// console.log(ordersSet[0]); // undefined

// for (const order of ordersSet) {
//     console.log(order);
// };

// ordersSet.clear();
// console.log(ordersSet); // Set(0)


// // Example 1
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique); // Set (3) {'Waiter', 'Chef', 'Manager'}


// // Example 2
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique); // (3) ['Waiter', 'Chef', 'Manager']

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3

// console.log(new Set('Kerim Imamovic').size); // 11





// **************************************************************************************************************************
// 117. Maps

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
// };

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     // ES6 enhanced object literals
//     openingHours,

//     order(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     orderPasta(ing1, ing2, ing3) { // ingredients
//         console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
//     },

//     orderPizza(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
//         console.log(mainIngr);
//         console.log(otherIngr);
//     },
// };


// const rest = new Map();
// console.log(rest); // Map(0) {size: 0}

// console.log(rest.set('name', 'Classico Italiano')) ;
// console.log(rest.set(1, 'Firenze, Italy')) ;
// console.log(rest.set(2, 'Lisbon, Portugal')) ;

// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, `We are open :D`)
//     .set(false, `We are closed :(` )

// console.log(rest.get('name')); // Classico Italiano
// console.log(rest.get(true)); // We are open :D
// console.log(rest.get(1)); // Firenze, Italy

// const time = 21;
// console.log( rest.get(time > rest.get('open') && time < rest.get('close')) ); // We are open :D

// console.log(rest.has('categories')); // true
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];

// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest); // Map(9)
// console.log(rest.size); // 9

// console.log(rest.get(arr)); // Test





// **************************************************************************************************************************
// 118. Maps: Iteration

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
// };

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     // ES6 enhanced object literals
//     openingHours,

//     order(starterIndex, mainIndex) {
//         console.log(this.starterMenu[starterIndex], this.mainMenu[mainIndex]); 
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
//     },

//     orderPasta(ing1, ing2, ing3) { // ingredients
//         console.log(`Here is your delicios pasta with ${ing1}, ${ing2}, ${ing3}.`);
//     },

//     orderPizza(mainIngr, ...otherIngr) { // mainIngredients, otherIngredients
//         console.log(mainIngr);
//         console.log(otherIngr);
//     },
// };

// const question = new Map( [
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'JavaScript'],
//     ['correct', 3],
//     [true, 'Correct'],
//     [false, 'Try Again'], 
// ]);

// console.log(question); // Map (7)
// console.log(typeof question); // object

// // Convert object to map
// console.log(Object.entries(openingHours)); // (3) [Array(2), Array(2), Array(2)]
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap); // Map (3)


// // Quiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//     if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// };

// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]); // (7)
// console.log([...question.entries()]); // (7)
// console.log([...question.keys()]);  // (7) keys
// console.log([...question.values()]); // (7) values





// **************************************************************************************************************************
// 119. Summary: Which Data Structure to Use ?





// **************************************************************************************************************************
// 120. Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An evenet happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: 
    [FIRST HALF] 17: GOAL
*/

// const gameEvents = new Map([
//     [17, 'Goal'],
//     [36, 'Substitution'],
//     [47, 'Goal'],
//     [61, 'Substitution'],
//     [64, 'Yellow card'],
//     [69, 'Red card'],
//     [70, 'Substitution'],
//     [72, 'Substitution'],
//     [76, 'Goal'],
//     [80, 'Goal'],
//     [92, 'Yellow card'],
// ]);
 
// // 1.
// // console.log(gameEvents.values()); // MapIterator 
// // const events = new Set(gameEvents.values());
// // console.log(events); // Set (4)

// const events = [...new Set(gameEvents.values())]
// console.log(events); // (4)

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// // console.log(`An event happened, on average every ${90 / gameEvents.size} minutes.`);

// const time = [...gameEvents.keys()].pop();
// console.log(time); // 92
// console.log(`An event happened, on average every ${time / gameEvents.size} minutes.`);

// // 4. 
// for (const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${min}: ${event}`);
// };





// **************************************************************************************************************************
// 121. Working With Strings - Part 1

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); // A
// console.log(plane[1]); // 3
// console.log(plane[2]); // 2
// console.log(plane[3]); // 0
// console.log('B737'[0]); // B

// console.log(airline.length); // 16
// console.log('B737'.length); // 4

// console.log(airline.indexOf('r')); // 6
// console.log(airline.lastIndexOf('r')); // 10
// console.log(airline.indexOf('Portugal')); // 8
// console.log(airline.indexOf('portugal')); // -1

// console.log(airline.slice(4)); // Air Portugal
// console.log(airline.slice(4, 7)); // Air

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1)); // AP Air Portugal

// const checkMiddleSeat = function(seat) {
//     // B and E are middle seats
//     const seatPlace = seat.slice(-1); // Extract part of a string from a right side
//     if (seatPlace === 'B' || seatPlace === 'E') {
//         console.log(`You got the middle seat...`);
//     } 
//     else {
//         console.log(`You got lucky :D`);
//     }
// };
// checkMiddleSeat('11B'); // You got the middle seat...
// checkMiddleSeat('23C'); // You got lucky :D
// checkMiddleSeat('3E'); // You got the middle seat...

// console.log(new String('kerim')); // String {'kerim'}
// console.log(typeof new String('kerim')); // object

// console.log(typeof new String('kerim').slice(1)); // string





// **************************************************************************************************************************
// 122. Working With Strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase()); // tap air portugal
// console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// // Fix capitalization in name
// const passenger = 'kErim'; 
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);


// // function 
// function fixCapitalization(name) {
//     const passenger = name.toLowerCase();
//     const passengerCorrect = passenger[0].toUpperCase() + passenger.slice(1);
//     return passengerCorrect;
// };
// console.log(fixCapitalization('jOnas'));


// // Check email
// const email = 'hello@kerim.io';
// console.log(email);
// const loginEmail = '   Hello@Kerim.Io \n';
// console.log(loginEmail);

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail); // true

// // replacing
// const priceGB = '288,97£';
// console.log(priceGB);
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
// console.log(announcement);
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// // Reg Exp
// console.log(announcement.replace(/door/g, 'gate'));


// // Booleans
// const plane = 'Airbus 320neo';
// const anotherPlane = 'Airbus 320';

// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Air')); // true
// console.log(plane.startsWith('Aib')); // false

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of the NEW Airbus family');
// } 
// else {
//     console.log('Not a family member...');
// }

// if (anotherPlane.startsWith('Airbus') && anotherPlane.endsWith('neo')) {
//     console.log('Part of the NEW Airbus family');
// }
// else {
//     console.log('Not a family member...');
// }


// // Practice exercise
// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase();
//     // const baggage = items;
//     if ( baggage.includes('knife') || baggage.includes('gun') ) {
//         console.log(`You are NOT allowed on board! ⛔`);
//     } 
//     else {
//         console.log(`Welcome aboard 😃`);
//     };
// };

// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');





// **************************************************************************************************************************
// 123. Working With Strings - Part 3

// console.log('a+very+nice+string'.split('+')); // (4)
// console.log('Kerim Imamovic'.split(' '));  //(2)

// const [firstName, lastName] = 'Kerim Imamovic'.split(' ');
// console.log(firstName);
// console.log(lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);


// // 1. nacin 

// const capitalizeName = function(name) {
//     const names = name.split(' ');
//     // console.log(names);
//     const namesUpper = [];

//     for (const personName of names) {
//         // console.log(personName);
//         namesUpper.push( personName[0].toUpperCase() + personName.slice(1) );
//         // console.log(namesUpper);
//     };
//     // console.log(namesUpper);
//     console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('kerim imamovic');


// // 2. nacin 

// const capitalizeName = function(name) {
//     const names = name.split(' ');
//     const namesUpper = [];

//     for (const firstLetter of names) {
//         namesUpper.push( 
//             firstLetter.replace(firstLetter[0], firstLetter[0].toUpperCase())
//         );
//     };
//     console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('kerim imamovic');


// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('Kerim'.padStart(25, '-').padEnd(30, '-'));


// const maskCreditCard = function(number) {
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(1122334455667788));
// console.log(maskCreditCard('8877665544332211'));


// // Repeat
// const message = 'Bad weather... All Departues Delayed...';
// console.log(message.repeat(5));

// const planesInLine = function(numberOfPlanes) {
//     console.log(`There are ${numberOfPlanes} planes in line ${'✈️'.repeat(numberOfPlanes)}.`);
// }; 
// planesInLine(5);
// planesInLine(10);
// planesInLine(20);





// **************************************************************************************************************************
// 124. Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✔️
firstName           ✔️✔️
someVariable        ✔️✔️✔️
calculateAge        ✔️✔️✔️✔️
delayedDeparture    ✔️✔️✔️✔️✔️

HINT 1: Remember which character defines a new line in the textarea
HINT 2: The solution only need to work fo a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✔️. Tackle That only after you have the variable name conversion working
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. The pause and continue!

Afterwards, test with your own test data!
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function() {
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');
//     console.log(rows);

//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row.toLowerCase().trim().split('_');
//         // console.log(row, first, second);
//         const output = `${first}${second.replace(
//             second[0], 
//             second[0].toUpperCase()
//         )}`;
//         console.log(`${output.padEnd(20)} ${'✔️'.repeat(i + 1)}`);        
//     };
// });





// **************************************************************************************************************************
// 125. String Methods Practice

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

// const getCode = str => str.slice(0, 3).toUpperCase();

// for(const flight of flights.split('+')) {
//     // console.log(flight.split(';'));
//     const [type, from, to, time] = flight.split(';');
//     const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`
//                     .padStart(50);
//     console.log(output);
// };


