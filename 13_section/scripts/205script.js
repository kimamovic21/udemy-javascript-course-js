// 205. Passing Arguments to Event Handlers

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');


///////////////////////////////////////
// Modal window

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


///////////////////////////////////////
// Button scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll X:', window.pageXOffset);
  console.log('Current scroll Y:', window.pageYOffset);
  console.log('height:', document.documentElement.clientHeight);
  console.log('width:', document.documentElement.clientWidth);

  section1.scrollIntoView({ behavior: 'smooth' });
});


///////////////////////////////////////
// Page navigation

// 1. Add event listener co common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault();

    // Matching strategy
    if(e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    };
});


///////////////////////////////////////
// Tabbed component
tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);

    // Guard clause
    if(!clicked) return;

    // Remove active classes
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    tabsContent.forEach(content => content.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});


///////////////////////////////////////
// Menu fade animation
const handleHover = function(e) {
    // console.log(this);
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        // console.log(link);
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        // console.log(siblings);
        const logo = link.closest('.nav').querySelector('img');
        // console.log(logo);

        siblings.forEach(el => {
            if (el !== link) {
              // el.style.opacity = 0.5;
              el.style.opacity = this;
            }
        });
        // el.style.opacity = 0.5;
        logo.style.opacity = this;
    };
};

// Passing "argument" into handler

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// nav.addEventListener('mouseover', handleHover(e, 0.5));  // does not work
// nav.addEventListener('mouseout', handleHover(e, 1));  // does not work


// nav.addEventListener('mouseover', function(e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function(e) {
//   handleHover(e, 1);
// });
