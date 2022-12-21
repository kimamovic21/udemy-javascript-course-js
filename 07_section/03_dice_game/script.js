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
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let currentScore = 0; // we will be updating this variable

// // Rolling dice functionality
// btnRoll.addEventListener('click', function() {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     console.log('Dice:', dice);

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1: if true, switch to next player
//     if (dice !== 1) { // if dice variable is not equal to 1
//         // Add dice to current score
//         currentScore = currentScore + dice;
//         console.log('Current score:', currentScore);
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
// const current1El = document.getElementById('current--1');

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
//     console.log('Dice:', dice);

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1: if true, switch to next player
//     if (dice !== 1) {
//         // Add dice to current score
//         currentScore = currentScore + dice;
//         console.log('Current score:', currentScore);
//         // current0El.textContent = currentScore;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     } 
//     else {
//         // switch to next player
//         document.getElementById(`current--${activePlayer}`).textContent = 0;
//         currentScore = 0;
//         activePlayer = activePlayer === 0 ? 1 : 0; 
//         // if the active player is 0, then we want the new active player to be 1, else should be 0

//         player0El.classList.toggle('player--active');
//         player1El.classList.toggle('player--active');
//     };
// });





// *************************************************************************************
// 85. Holding Current Score

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// // Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// console.log(scores);

// let currentScore = 0;
// let activePlayer = 0;
// let playing = true; // state variable

// // Function switchPlayer()
// const switchPlayer = function() {
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0; 
//     // if the active player is 0, then we want the new active player to be 1, else should be 0
//     player0El.classList.toggle('player--active');
//     player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function() {
//     if (playing) {  // playing === true
//         // 1. Generating a random dice roll
//         const dice = Math.trunc(Math.random() * 6) + 1;
//         console.log('Dice:', dice);
    
//         // 2. Display dice
//         diceEl.classList.remove('hidden');
//         diceEl.src = `dice-${dice}.png`;
    
//         // 3. Check for rolled 1: if true, switch to next player
//         if (dice !== 1) {
//             // Add dice to current score
//             currentScore = currentScore + dice;
//             console.log('Current score:', currentScore);
//             // current0El.textContent = currentScore;
//             document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//         } 
//         else {
//             // switch to next player
//            switchPlayer();
//         };
//     }
// });

// btnHold.addEventListener('click', function() {
//     if (playing) {
//         // 1. Add current score to active player's score
//         scores[activePlayer] += currentScore;
//         console.log('Scores active player:', scores[activePlayer]);
//         // scores[0] = scores[0] + currentScore;
//         document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
//         // 2. Check if player's score is >= 100
//         if(scores[activePlayer] >= 30) {
//             // Finish Game
//             playing = false;
//             diceEl.classList.add('hidden');

//             document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//             document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
//         }
//         else {
//             // Switch to the next player
//             switchPlayer();
//         }
//     }
// });

 



// *************************************************************************************
// 86. Resetting the Game

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true; // state variable

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current0El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

// Function switchPlayer()
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; 
    // if the active player is 0, then we want the new active player to be 1, else should be 0
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if (playing) {  // playing === true (state)
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log('Dice:', dice);
    
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore = currentScore + dice;
            console.log('Current score:', currentScore);
            // current0El.textContent = currentScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } 
        else {
            // switch to next player
           switchPlayer();
        };
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        console.log('Scores active player:', scores[activePlayer]);
        // scores[0] = scores[0] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        // 2. Check if player's score is >= 100
        if(scores[activePlayer] >= 100) {
            // Finish Game
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            
        }
        else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);
