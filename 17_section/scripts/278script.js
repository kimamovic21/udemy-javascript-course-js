// 278. Bundling With Parcel and NPM Scripts

// npx parcel index.html
// npm i parcel --save-dev
// npm run start
// npm run build
// npm install parcel -g
// npm uninstall parcel
// npm run start index.html

console.log(`Importing module`);

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
import add, {cart} from './278shoppingCart.js';

add('pizzas', 2);
add('breads', 5);
add('apples', 4);
console.log(cart);  // (3) [{…}, {…}, {…}]

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

// Code that parcel understands
if(module.hot) {
    module.hot.accept();
};


