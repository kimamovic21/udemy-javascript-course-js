// 199. Types of Events and Event Handlers

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);  // DOMRect
    console.log(e.target.getBoundingClientRect());  // DOMRect
    console.log('Current scroll (X/Y):', window.pageXOffset, pageYOffset);  // 0 416.25
    console.log('height viewport:', document.documentElement.clientHeight);  // 416
    console.log('width viewport:', document.documentElement.clientWidth);  // 975

    section1.scrollIntoView({ behavior: 'smooth' });
});


// Mouse enter event
const h1 = document.querySelector('h1');

// h1.onmouseenter = function(e) {
//     alert('onmouseenter: Great! You are reading the heading :D');
// };

const alertH1 = function(e) {
    alert('addEventListener: Great! You are reading the heading :D');
    // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

