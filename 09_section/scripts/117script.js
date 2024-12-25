// 117. Optional Chaining (?.)

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

// console.log(restaurant.openingHours.mon.open); // Error

if (restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
};

if (restaurant.openingHours.fri) {
    console.log(restaurant.openingHours.fri.open); // 11
};

if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
};



// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    // console.log(day);
    // const open = restaurant.openingHours.day?.open ?? 'closed'; // does not work !!!
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
};



// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exists'); // (2) ['Focaccia', 'Pasta]

console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exists'); // Method does not exists



// Arrays
const users = [
    {
        name: 'Kerim',
        email: 'hello@kerim.io',
    },
];

// const users = [];
console.log(users[0]?.name ?? 'User array empty');


// Without optional chaining
// if (users.length > 0) {
//     console.log(users[0].name); 
// } else {
//     console.log('User array empty');
// };
