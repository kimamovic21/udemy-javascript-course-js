// 97. The This Keyword in Practice

'use strict';

console.log(this);

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


const f = kerim.calcAge;
f();

// this keyword always points to the object that is calling the method
