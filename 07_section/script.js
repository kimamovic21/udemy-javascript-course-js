'use strict';

// ***************************************************************************************
// 70. PROJECT #1: Guess My Number!
// console.log(document.querySelector('.message').textContent);




// ***************************************************************************************
// 71. PROJECT #1: Guess My Number!




// ***************************************************************************************
// 72. Selecting and Manipulating Elements
// document.querySelector('.message').textContent = `Correct Number!`; 
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);





// ***************************************************************************************
// 73. Handling Click Events
// document.querySelector('.check').addEventListener('click', function () {
//         const guess = Number(document.querySelector('.guess').value);
//         console.log(guess, typeof guess);

//         if(!guess) {
//             document.querySelector('.message').textContent = 'No number!';
//         }
// });




// ***************************************************************************************
// 74. Implementing the Game Logic
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     if(!guess) {
//         document.querySelector('.message').textContent = `No number! `;
//     } else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = `Correct number !`;
//     } else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = `Too high! `;
//             score = score - 1;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = `You lost the game !!! `;
//             document.querySelector('.score').textContent = 0;
//         }
//     } else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = `Too low! `;
//             score = score - 1;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = `You lost the game !!! `;
//             document.querySelector('.score').textContent = 0;
//         }
//     };
// });





// ***************************************************************************************
// 75. Manipulating CSS Styles
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     // When there is no input
//     if (!guess) {
//         document.querySelector('.message').textContent = `No number! `;
    
//     // When player wins
//     } else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = `Correct number !`;
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';
        
//     // When guess is too high
//     } else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = `Too high! `;
//             score = score - 1;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = `You lost the game !!! `;
//             document.querySelector('.score').textContent = 0;
//         }

//     // When guess is too low
//     } else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = `Too low! `;
//             score = score - 1;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = `You lost the game !!! `;
//             document.querySelector('.score').textContent = 0;
//         }
//     };
// });

