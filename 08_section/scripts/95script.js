// 95. Hoisting and TDZ in Practice

'use strict';

// Variables
console.log(me);
console.log(job);
console.log(year);

var me = 'Kerim';
let job = 'frontend';
const year = 1996;



// Functions

console.log('addDecl:', addDecl(2,3));
console.log('addExpr:', addExpr(2,3));
console.log('addArrow:',addArrow(2,3));

function addDecl(a,b) {
    return a + b;
};

const addExpr = function(a,b) { // var addExpr
    return a + b;
};

const addArrow = (a,b) => a + b; // var addArrow



// Example

if (!numProducts) {
    deleteShoppingCart();
};

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
};



var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true;
console.log(y === window.y); // false;
console.log(z === window.z); // false;
