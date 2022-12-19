'use strict';

// **********************************************************************************************
// 79. PROJECT #2: Modal Window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++) {
//     console.log(btnsOpenModal[i].textContent);
// };





// **********************************************************************************************
// 80. Working with Classes

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// console.log(btnCloseModal);
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// 1. nacin

// for (let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener ('click', function() {
//         console.log(`Button clicked!`);
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     });
// };

// btnCloseModal.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });


// 2. nacin

// const openModal = function() {
//     console.log(`Open modal`);
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// const closeModal = function() {
//     console.log(`Close modal`);
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener ('click', openModal);
// };

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);





// **********************************************************************************************
// 81. Handling an "Esc" Keypress Event

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// console.log(btnCloseModal);
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// const openModal = function() {
//     console.log(`Open modal`);
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// const closeModal = function() {
//     console.log(`Close modal`);
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener ('click', openModal);
// };

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function(e) {
//     // console.log(`A key wass pressed`);
//     // console.log(e);
//     console.log(e.key);

//     if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         // console.log('Esc was pressed.');
//        closeModal();
//     }
// });

