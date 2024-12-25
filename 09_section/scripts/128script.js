// 128. Working With Strings - Part 3

'use script';

console.log('a+very+nice+string'.split('+')); // (4)
console.log('Kerim Imamovic'.split(' '));  // (2)

const [firstName, lastName] = 'Kerim Imamovic'.split(' ');
console.log(firstName); // Kerim
console.log(lastName); // Imamovic

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Kerim IMAMOVIC


// 1. nacin 

// const capitalizeName = function(name) {
//     const names = name.split(' ');
//     console.log(names);
//     const namesUpper = [];

//     for (const personName of names) {
//         console.log(personName);
//         namesUpper.push( personName[0].toUpperCase() + personName.slice(1) );
//     };
//     console.log(namesUpper);
//     console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('kerim imamovic');


// 2. nacin 

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const firstLetter of names) {
        namesUpper.push( firstLetter.replace(firstLetter[0], firstLetter[0].toUpperCase() ) );
    };
    console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('kerim imamovic');


// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Kerim'.padStart(25, '-').padEnd(30, '-'));


// Function maskCreditCard
const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    // return last;
    return last.padStart(str.length, '*');
};
console.log(maskCreditCard(1122334455667788));
console.log(maskCreditCard('8877665544332211'));


// Repeat
const repeatMessage = 'Bad weather... All Departues Delayed... ';
console.log(repeatMessage.repeat(5));


const planesInLine = function(numberOfPlanes) {
    console.log(`There are ${numberOfPlanes} planes in line ${'✈️'.repeat(numberOfPlanes)}.`);
}; 
planesInLine(5);
planesInLine(10);
planesInLine(20);
