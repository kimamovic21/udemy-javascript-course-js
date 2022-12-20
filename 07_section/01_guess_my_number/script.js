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





// ***************************************************************************************
// 76. Coding Challenge #1

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.check').addEventListener('click', function () {
//     console.log(`Button: check!`);
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     // When there is no input
//     if (!guess) {
//         document.querySelector('.message').textContent = `No number! `;
//     } 

//     // When player wins
//     else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = `Correct number !`;
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';
//     }

//     // When guess is too high
//     else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = `Too high! `;
//             score = score - 1;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = `You lost the game !!! `;
//             document.querySelector('.score').textContent = 0;
//         }
//     } 

//     // When guess is too low
//     else if (guess < secretNumber) {
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

// document.querySelector('.again').addEventListener('click', function() {   // Elementu sa klasom .again dodajemo addEventListener
//     console.log(`Button: again!`);                                        // provjeravamo u konzoli da li radi dugme
//     score = 20;                                                           // resetujemo rezultat na 20
//     secretNumber = Math.trunc(Math.random() * 20) + 1;                    // generisemo tajni broj
//     document.querySelector('.message').textContent = `Start guessing...`; // Elementu sa klasom .message dodjeljujemo poruku
//     document.querySelector('.score').textContent = score;                 // Elementu dodjeljujemo vrijednost
//     document.querySelector('.number').textContent = `?`;                  // Elementu sa klasom .number dodjeljujemo vrijednost               
//     document.querySelector('.guess').value = '';                          // Elementu sa klasom .guess dodjeljujemo vrijednost
//     document.querySelector('body').style.backgroundColor = '#222';        // Eelementu body mijenjamo pozadinu 
//     document.querySelector('.number').style.width = '15rem';              // Elementu sa klasom .number mijenjamo sirinu 
// });





// ***************************************************************************************
// 77. Implementing highscores

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//     console.log(`Button: check!`);
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     // When there is no input
//     if (!guess) {
//         document.querySelector('.message').textContent = `No number! `;
//     } 

//     // When player wins
//     else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = `Correct number !`;
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         if (score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }
//     }

//     // When guess is too high
//     else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = `Too high! `;
//             score = score - 1;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = `You lost the game !!! `;
//             document.querySelector('.score').textContent = 0;
//             document.querySelector('body').style.backgroundColor = 'red';
//             document.querySelector('.number').textContent = secretNumber;
//         }
//     } 

//     // When guess is too low
//     else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = `Too low! `;
//             score = score - 1;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = `You lost the game !!! `;
//             document.querySelector('.score').textContent = 0;
//             document.querySelector('body').style.backgroundColor = 'red';
//             document.querySelector('.number').textContent = secretNumber;
//         }
//     };
// });

// document.querySelector('.again').addEventListener('click', function() {   
//     console.log(`Button: again!`);                                  
//     score = 20; 
//     secretNumber = Math.trunc(Math.random() * 20) + 1;                                        
//     document.querySelector('.message').textContent = `Start guessing...`;
//     document.querySelector('.score').textContent = score;    
//     document.querySelector('.number').textContent = `?`;                      
//     document.querySelector('.guess').value = '';                          
//     document.querySelector('body').style.backgroundColor = '#222'
//     document.querySelector('.number').style.width = '15rem';             
// });





// ***************************************************************************************
// 78. Refactoring Our Code: The DRY Principle

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function(message) {
//     document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//     console.log(`Button: check!`);
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     // When there is no input
//     if (!guess) {
//        displayMessage(`No Number !`);
//     } 

//     // When player wins
//     else if (guess === secretNumber) {
//         displayMessage(`Correct Number!`);
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         if (score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }
//     }

//     // When guess is wrong
//     else if (guess !== secretNumber) {
//         if (score > 1) {
//             displayMessage(guess > secretNumber ? `Too high! ` : `Too low !`);
//             score = score - 1;
//             document.querySelector('.score').textContent = score;
//         } 
//         else {
//             displayMessage(`You lost the game!!!`);
//             document.querySelector('.score').textContent = 0;
//             document.querySelector('body').style.backgroundColor = 'red';
//             document.querySelector('.number').textContent = secretNumber;
//         }
//     }
// });

// document.querySelector('.again').addEventListener('click', function() {   
//     console.log(`Button: again!`);                                  
//     score = 20; 
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     displayMessage(`Start guessing...`);
//     document.querySelector('.score').textContent = score;    
//     document.querySelector('.number').textContent = `?`;
//     document.querySelector('.guess').value = '';
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';             
// });





// ***************************************************************************************
// Final version 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let checkBtn = document.querySelector('.check');
let numberEl = document.querySelector('.number');
let body = document.querySelector('body');
let highscoreEl = document.querySelector('.highscore');
let scoreEl = document.querySelector('.score');
let againBtn = document.querySelector('.again');
let guessEl = document.querySelector('.guess');

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', function () {
    console.log(`Button: check!`);
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
       displayMessage(`No Number !`);
    } 

    // When player wins
    else if (guess === secretNumber) {
        displayMessage(`Correct Number!`);
        numberEl.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';
        numberEl.style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore;
        };
    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `Too high! ` : `Too low !`);
            score = score - 1;
            scoreEl.textContent = score;
        } 
        else {
            displayMessage(`You lost the game!!!`);
            scoreEl.textContent = 0;
            body.style.backgroundColor = 'red';
            numberEl.textContent = secretNumber;
        }
    }
});

againBtn.addEventListener('click', function() {   
    console.log(`Button: again!`);                                  
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage(`Start guessing...`);
    scoreEl.textContent = score;    
    numberEl.textContent = `?`;
    guessEl.value = '';
    body.style.backgroundColor = '#222';
    numberEl.style.width = '15rem';             
});

