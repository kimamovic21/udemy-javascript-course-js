// 274. The Module Pattern

const ShoppingCart = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
        // cart.push(product, quantity);
        cart.push({product, quantity});
        console.log(cart);  // [{...}]
        console.log(`${quantity} ${product} added to cart. Shipping cost is ${shippingCost}.`
        );
    };

    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier.`);
    };

    return {
        addToCart,
        orderStock,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

// addToCart('apples', 4);  // Error
// orderStock('bread', 3);  // Error
ShoppingCart.addToCart('apples', 4);
ShoppingCart.addToCart('pizzas', 2);
ShoppingCart.orderStock('bread', 3);
console.log(ShoppingCart);  // {}
console.log(ShoppingCart.cart);  // (2) [{…}, {…}]
console.log(ShoppingCart.shippingCost);  // undefined
console.log(ShoppingCart.totalPrice);  // 237
console.log(ShoppingCart.totalQuantity);  // 23

