// 106. Rest Pattern and Parameters

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

    orderPizza: function(mainIngredient, ...otherIngredients) { 
        console.log(mainIngredient);
        console.log(otherIngredients);
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

// 1) Destructuring

// SPREAD - because on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST - because on left side of =         
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(others);
console.log(a, b, others);   

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
const { thu, fri, ...weekend} = restaurant.openingHours;
console.log(weekend);


// 2) Functions
const add = function(...numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    };
    console.log(sum);
};
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
add(...x); // 35

restaurant.orderPizza('mushrooms', 'onios', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
