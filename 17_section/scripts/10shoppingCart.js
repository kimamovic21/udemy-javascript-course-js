// 11. Configuring Babel and Polyfilling
// Exporting module

console.log(`Exporting module`);

const shippingCost = 10;
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
