// 272. Exporting and Importing in ES6 Modules
// Exporting module

console.log(`Exporting module`);

const shippingCost = 10;
// const cart = [];
export const cart = [];


// export keyword
export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart!`);
};
 
const totalPrice = 237;
const totalQuantity = 23;

// export { totalPrice, totalQuantity };
export { totalPrice, totalQuantity as quantity };


export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart!`);
};
