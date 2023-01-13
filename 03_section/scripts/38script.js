// 38. Coding Challenge #1

'use strict';

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);

const checkWinner = function(avgDolhpins, avgKoalas) {
    if (avgDolhpins >= 2 * avgKoalas) {
        console.log(`Dolphins win the trophy (${avgDolhpins} vs. ${avgKoalas})!`);
    } else if (avgKoalas >= 2 * avgDolhpins) {
        console.log(`Koalas win the trophy (${avgKoalas} vs. ${avgDolhpins})!`);
    } else {
        console.log(`No team wins !`);
    };
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(300, 100);
checkWinner(100, 300);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
console.log(scoreDolphins);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
