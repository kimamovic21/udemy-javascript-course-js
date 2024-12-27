// 197. Styles, Attributes and Classes

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


// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(header);
// console.log(allSections);  // NodeList(4)

const section1 = document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
// console.log(section1);
// console.log(allButtons);  // HTMLCollection(9)

const allButtons2 = document.getElementsByClassName('btn');
// console.log(allButtons2);  // HTMLCollection(5) 


// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `
        We use cookies for improved functionality and analytics. 
        <button class="btn btn--close-cookie">Got it</button>
`;
header.append(message);


// Delete elements
document
    .querySelector('.btn--close-cookie')
    .addEventListener('click', function() {
    message.parentElement.removeChild(message);
});


// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '90%';

console.log(message.style.color);  // empty
console.log(message.style.backgroundColor);  // rgb(55, 56, 61)
console.log(message.style.height);  // empty

// console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);  // rgb(187, 187, 187)
console.log(getComputedStyle(message).height);  // 47.5px

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');


// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';


// Non-standard
console.log(logo.designer);  // undefined
console.log(logo.getAttribute('designer'));  // Jonas
logo.setAttribute('company', 'Bankist');

console.log(logo.src);  // http://127.0.0.1:5500/13_section/img/logo.png
console.log(logo.getAttribute('src'));  // img/logo.png

const twitterLink = document.querySelector('.twitter-link');
console.log(twitterLink.href);  // https://twitter.com/jonasschmedtman
console.log(twitterLink.getAttribute('href'));  // https://twitter.com/jonasschmedtman

const navLinkBtn = document.querySelector('.nav__link--btn');
console.log(navLinkBtn.href);  // http://127.0.0.1:5500/13_section/index.html#
console.log(navLinkBtn.getAttribute('href'));  // #


// Data attributes
console.log(logo.dataset.versionNumber);  // 3.0


// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use this
// logo.className = 'kerim';
