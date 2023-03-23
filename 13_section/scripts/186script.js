// 186. Selecting, Creating and Deleting Elements

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
console.log(document.documentElement);  // <html></html>
console.log(document.head);   // <head></head>
console.log(document.body);   // <body></body>

const header = document.querySelector('.header');
console.log(header);  // <header></header>

const allSections = document.querySelectorAll('.section');
console.log(allSections);  // NodeList(4)

const section1 = document.getElementById('section--1');
console.log(section1);   // <section></section>

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);  // HTMLCollection(9)

const allButtons2 = document.getElementsByClassName('btn');
console.log(allButtons2);  // HTMLCollection(5) 


// Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');

// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `
        We use cookies for improved functionality and analytics. 
        <button class="btn btn--close-cookie">Got it</button>
`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);


// Delete elements
document.querySelector('.btn--close-cookie')
        .addEventListener('click', function() {
        message.remove();
        // message.parentElement.removeChild(message);
});
