// 10. Configuring Babel and Polyfilling

console.log(`Importing module`);

import cloneDeep from 'lodash-es';
import add, {cart} from './10shoppingCart.js';

add('pizzas', 2);
add('breads', 5);
add('apples', 4);
console.log(cart);

const state = {
    cart: [
        {product: 'bread', quantity: 2},
        {product: 'pizza', quantity: 3},
    ],
    user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);  // {cart: Array(2), user: {…}}
console.log(stateDeepClone);  // LodashWrapper

if(module.hot) {
    module.hot.accept();
};


class Person {
    #greeting = 'Hey'
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`)
    }
}
const kerim = new Person('Kerim');
console.log(kerim);  // Person

console.log('Kerim' ?? null);  // Kerim

console.log(cart.find(element => element.quantity >= 2));  // {product: 'pizzas', quantity: 2}

Promise.resolve('TEST').then( x => console.log(x));  // TEST

// npm install core-js

// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';
import 'core-js/stable';


// npm install regenerator-runtime
// Polyfilling async functions
import 'regenerator-runtime/runtime';

