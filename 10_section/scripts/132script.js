// 132. Functions Returning Functions

'use strict';

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');
// greet('Hello')('Jonas');


// Challenge - Arrow function
const greetArrow = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    };
};

greetArrow('Hello')('Jonas');
