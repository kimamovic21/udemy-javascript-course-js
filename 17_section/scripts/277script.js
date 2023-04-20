// 277. Introduction to NPM

// NPM commands
// npm -v  8.12.1 (14.04.2023.)
// npm init
// npm install leaflet
// npm install lodash-es
// npm i

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

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

console.log(stateClone);  // {loggedIn: false}
console.log(stateDeepClone);  // {loggedIn: true}
