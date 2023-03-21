// 272. Exporting and Importing in ES6 Modules
// Importing module
console.log('Importing module');


// import './272shoppingCart.js';
// import { addToCart } from './272shoppingCart.js';
// import { totalPrice as price } from './272shoppingCart.js';
// import { quantity } from './272shoppingCart.js';


// console.log(`Importing module`);
// console.log(shippingCost);  // Error

// addToCart('breads', 5);
// // console.log(totalPrice);  // Error
// // console.log(totalQuantity);  // Error
// console.log(price);
// console.log(quantity);


// import * as ShoppingCart from './272shoppingCart.js';

// ShoppingCart.addToCart('breads', 5);  // 5 breads added to cart!
// console.log(ShoppingCart.totalPrice);


import add, {cart} from './272shoppingCart.js';
add('pizzas', 2);  // 2 pizzas added to cart!
add('breads', 3);  // 2 pizza added to cart!
add('apples', 4);  // 2 pizza added to cart!
console.log(cart);  // [{…}, {…}, {…}, {…}]
