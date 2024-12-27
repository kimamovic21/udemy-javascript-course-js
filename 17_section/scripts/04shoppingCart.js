// 04. Top-Level await (ES2022)
// Exporting module

console.log(`Exporting module`);

// Blocking code
// console.log(`Start fetching users`);
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log(`Finish fetching users`);

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

export { totalPrice, totalQuantity as quantity };

export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart!`);
};
