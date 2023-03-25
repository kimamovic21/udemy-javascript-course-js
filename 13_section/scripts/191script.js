// 191. Event Propagation in Practice

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
    console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
    console.log('height/width viewport', 
        document.documentElement.clientHeight, 
        document.documentElement.clientWidth
    );

    section1.scrollIntoView({ behavior: 'smooth' });
});


// Mouse enter event
const h1 = document.querySelector('h1');

const alertH1 = function(e) {
    alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);


const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));


document
    .querySelector('.nav__link')
    .addEventListener('click', function(e) {
    // console.log('LINK');
    // in event handler, this keyword points always to the element on which that event handler is attached
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    // e.target - where the click happens
    // e.currentTarget - element on which element is attached
    console.log(e.currentTarget === this);

    // Stop propagation
    // This is not a good idea in practice
    // e.stopPropagation();
});


document
    .querySelector('.nav__links')
    .addEventListener('click', function(e) {
    // console.log('LINK');
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);  
});


document
    .querySelector('.nav')
    .addEventListener('click', function(e) {
    // console.log('LINK');
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget); 
}, false);

// false is default
