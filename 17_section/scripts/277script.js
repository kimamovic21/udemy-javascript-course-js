// 277. Introduction to NPM

// NPM commands
// npm -v  8.12.1 (21.03.2023.)
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
console.log(stateClone);
console.log(stateDeepClone);
