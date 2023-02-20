// 122. Working With Strings - Part 2

'use script';

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in passenger name
const passenger = 'kErim'; 
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


// function 
function fixCapitalization(name) {
    const passenger = name.toLowerCase();
    const passengerCorrect = passenger[0].toUpperCase() + passenger.slice(1);
    return passengerCorrect;
};
console.log(fixCapitalization('jOnas'));


// Comparing email
const email = 'hello@kerim.io';
console.log(email);
const loginEmail = '   Hello@Kerim.Io \n';
console.log(loginEmail);

const lowerEmail = loginEmail.toLowerCase();
console.log(lowerEmail);
const trimmedEmail = lowerEmail.trim(); // removes empty space
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail); // true


// replacing
const priceGB = '288,97£';
console.log(priceGB);
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);


const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement);
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));


// Reg Exp
console.log(announcement.replace(/door/g, 'gate'));


// Booleans
const plane = 'Airbus 320neo';
const anotherPlane = 'Airbus 320';

console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true
console.log(plane.startsWith('Aib')); // false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
} 
else {
    console.log('Not a family member...');
}

if (anotherPlane.startsWith('Airbus') && anotherPlane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
}
else {
    console.log('Not a family member...');
}


// Practice exercise
const checkBaggage = function(items) {
    // const baggage = items;
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log(`You are NOT allowed on board! ⛔`);
    } 
    else {
        console.log(`Welcome aboard 😃`);
    };
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a Gun for protection');
