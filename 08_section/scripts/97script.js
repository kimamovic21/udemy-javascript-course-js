// 97. The This Keyword in Practice

'use strict';

console.log(this); // Window object

function calcAgeDecl (birthYear) {
    console.log(2022 - birthYear);
    console.log(this); // undefined
};
calcAgeDecl(1996);


const calcAgeExpr = function(birthYear) {
    console.log(2022 - birthYear);
    console.log(this); // undefined
};
calcAgeExpr(1996);


const calcAgeArrow = (birthYear) => {
    console.log(2022 - birthYear);
    console.log(this); // Window
};
calcAgeArrow(1996);


const kerim = {
    year: 1996,
    calcAge: function() {
        console.log(this);
        console.log(2022 - this.year);
    },
};
kerim.calcAge();


const john = {
    year: 1990,
}
john.calcAge = kerim.calcAge;
john.calcAge();


// f function is just a regular function call
// it is not attached to any object
// there is no owner of this function anymore

const f = kerim.calcAge;
console.log(f);
// f();

// this keyword always points to the object that is calling the method
