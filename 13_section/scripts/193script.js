// 193. DOM Traversing

'use strict';

const h1 = document.querySelector('h1');

// Going downwards: child 
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';


// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = ' var(--gradient-secondary)';

h1.closest('h1').style.background = ' var(--gradient-primary)';


// Going sideways: siblings
console.log(h1.previousElementSibling);  // null
console.log(h1.nextElementSibling);  // <h4>

console.log(h1.previousSibling);  // #text
console.log(h1.nextSibling);  // #text

console.log(h1.parentElement.children);  // HTMLCollection(4)
[...h1.parentElement.children].forEach(function(el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
});

