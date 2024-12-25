// 113. Logical Assignment Operators

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

const restaurant1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};

const restaurant2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// console.log(restaurant1); // 10
// console.log(restaurant2); // 10

// OR ||=
// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

// console.log(restaurant1); // 10
// console.log(restaurant2); // 10


// Nullish assignment operator (null or undefined)
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

console.log(restaurant1); // 0
console.log(restaurant2); // 10


// AND assignment operator
// restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';
// restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';

restaurant1.owner &&= '<ANONYMOUS>';
restaurant2.owner &&= '<ANONYMOUS>';

console.log(restaurant1); // Giovanni Rossi
console.log(restaurant2); // <ANONYMOUS>
