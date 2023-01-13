// 49. The While Loop

'use strict';

for (let rep = 1; rep <= 10; rep++) {
    console.log(`FOR : Lifting weight repetition ${rep} 🏋️.`)
}


let rep = 1;
while (rep <= 10){
    console.log(`WHILE: Lifting weight repetition ${rep} 🏋️.`);
    rep++;
};


let dice = Math.trunc((Math.random() * 6) + 1);
console.log(dice);
console.log (typeof dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc((Math.random() * 6) + 1);
    if (dice === 6) {
        console.log(`The loop is about to end...`);
    };
};
