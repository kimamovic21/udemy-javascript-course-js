// 48. Looping Backwards and Loops in Loops

'use strict';

const kerim = [
    'Kerim',
    'Imamovic',
    2022 - 1996,
    'frontend dev',
    ['Michael', 'Peter', 'Steven'],
    true,
];

for (let i = kerim.length - 1; i >=0; i-- ) {
    console.log(i, kerim[i]);
};

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${exercise}: Lifting weight repetition ${rep} 🏋️.`);
    };
};


const cars = ['Mercedes','BMW','Audi','Volvo','Volkswagen'];
console.log(cars);

for (let i =  0; i < cars.length; i++ ) {
    console.log(cars[i]);
};

for (let race = 1; race < 4; race ++){
    console.log(`---- The race number ${race} is starting.`);
    for (let lap = 1; lap < 10; lap++) {
        console.log(`Lap number ${lap}.`);
    };
};
