// 144. Looping Arrays: forEach

'use strict';

// deposits and withdrawals
const movements = [200, 450, -400, 3020, -650, -130, 70, 1300];

// Example 1
// for (const movement of movements) {
//     // console.log(movement);
//     if (movement > 0) {
//         console.log(`You deposited ${movement}`);
//     }
//     else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// };


// Example 2
// for (const [i, movement] of movements.entries()) {
//     console.log(i + 1, movement);
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     }
//     else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// };



/* 
forEach method

-forEach method requires callback function
-forEach is a higher order function
-forEach method is looping over the array and in each iteration it will execute this callback function
-forEach method in each iteration will pass in the current element of the array as an argument  
*/

// forEach - Example 1

// movements.forEach(function(movement) {
//     if (movement > 0) {
//         console.log(`You deposited ${movement}`);  
//     }
//     else {                
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// });

// 0: function(200)
// 1: function(450)
// 2: function(400)
// 3: function(-400)
// ...
// 7: function (1300)


// forEach - Example 2
// mov - movement
// i - index
// arr - array
movements.forEach(function(mov, i, arr) {
    console.log(i + 1, mov);
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    }
    else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    };
});
