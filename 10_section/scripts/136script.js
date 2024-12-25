// 136. Functions Accepting Callback Functions

'use strict';

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}; 


// Higher order function
const transformer = function(str, myFunction) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${myFunction(str)}`);
    console.log(`Transformed by: ${myFunction.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);


// Javascript uses callbacks all the time
const high5 = function() {
    console.log('🖐');
}
document.body.addEventListener('click', high5);


['Jonas', 'Martha', 'Adam'].forEach(high5);
