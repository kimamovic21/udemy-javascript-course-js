// 98. The This Keyword

/* 
The special variable that is created for every execution context (every function)
Takes the value of (points to) the "owner" of the function in which the this keyword is used
This is NOT static. It depends on how the function is called, and its value is only assigned 
when the function is actually called 

Method -> this = <Object that is calling the method>
Simple function call -> this = undefined
Arrow functions -> this <this of surrounding function(lexical this)>
*/

'use strict';

const kerim = {
    name: 'Kerim',
    year: 1996,
    calcAge: function() {
        console.log('kerim.year:', kerim.year); // 1996
        console.log('this.year:', this.year); // 1996
        console.log(kerim.year === this.year); // true
        return 2022 - this.year;
    },
};
console.log(kerim.calcAge()); // 26
