// 141. Immediately Invoked Functions Expressions (IIFE)

'use strict';

const runOnce = function() {
    console.log('This will never run again! 1');
}
runOnce();

// IIFE 
// We transformed statement into an expression
(function() {
    console.log('This will never run again! 2');
    const isPrivate = 23;
}) ();

// console.log(isPrivate);
(() => console.log('This will never run again! 3')) ();

{
    // const isPrivate2 = 23;
    var notPrivate = 46;
}
// console.log(isPrivate2);
console.log(notPrivate);
