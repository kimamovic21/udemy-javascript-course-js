'use strict';

// 82. PROJECT #3: The Lamb Game

// // Selecting elements
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');

// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');





// *************************************************************************************
// 83. Rolling the Dice

// // Selecting elements
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current.-1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let currentScore = 0;

// // Rolling dice functionality
// btnRoll.addEventListener('click', function() {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1: if true, switch to next player
//     if (dice !== 1) {
//         // Add dice to current score
//         currentScore = currentScore + dice;
//         current0El.textContent = currentScore; // Change later
//     } 
//     // switch to next player
//     else {

//     }

// });





// *************************************************************************************
// 84. Switching the Active Player

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current.-1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;

// // Rolling dice functionality
// btnRoll.addEventListener('click', function() {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1: if true, switch to next player
//     if (dice !== 1) {
//         // Add dice to current score
//         currentScore = currentScore + dice;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     } 
//     else {
//         // switch to next player
//         document.getElementById(`current--${activePlayer}`).textContent = 0;
//         currentScore = 0;
//         activePlayer = activePlayer === 0 ? 1 : 0;
//         player0El.classList.toggle('player--active');
//         player1El.classList.toggle('player--active');
//     };
// });

