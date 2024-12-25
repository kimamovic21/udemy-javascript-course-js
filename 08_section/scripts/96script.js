// 96. Variable Environment: Hoisting and the TDZ (Temporal dead zone)

'use strict';

const myName = 'Kerim';

if (myName === 'Kerim') {
    console.log(`Kerim is a ${job}.`);
    const age = 2022 - 1996;
    const job = 'Frontend dev';
    console.log(age);
};
