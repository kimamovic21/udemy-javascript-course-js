// 25. Coding Challange #3

'use strict';

// Moj nacin

// const dolphinsSport1 = 100;
// const dolphinsSport2 = 100;
// const dolphinsSport3 = 100;
// const dolphinsSportsAveragePoints = ((dolphinsSport1 + dolphinsSport2 + dolphinsSport3) / 3).toFixed(2);
// console.log(dolphinsSportsAveragePoints);

// const koalasSport1 = 100;
// const koalasSport2 = 100;
// const koalasSport3 = 100;
// const koalasSportsAveragePoints = ((koalasSport1 + koalasSport2 + koalasSport3) / 3).toFixed(2);
// console.log(koalasSportsAveragePoints);

// if ( dolphinsSportsAveragePoints > koalasSportsAveragePoints && dolphinsSportsAveragePoints >= 100 ) {
//     console.log(`Dolphins team wins!!!`);
// } else if (koalasSportsAveragePoints > dolphinsSportsAveragePoints && koalasSportsAveragePoints >= 100 ) {
//     console.log(`Koalas team wins!!!`);
// } else if (dolphinsSportsAveragePoints === koalasSportsAveragePoints && dolphinsSportsAveragePoints >= 100 && koalasSportsAveragePoints >= 100) {
//         console.log(`It's tied`);
// } else {
//     console.log(`Min 100 points to win a trophy... `)
// } 

// 1. napisati slucaj kad delfini pobjede
// 2. napisati slucaj kad koale pobjede
// 3. napisati rezultat kad bude izjednaceno
// 4. napisati sta ce se desiti kad timovi budu imali manje od 100 bodova



// Prvi dio
// const scoreDolphins = ((96 + 108 + 89) / 3).toFixed(2);
// const scoreKoalas = ((88 + 91 + 110) / 3).toFixed(2);
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win the trophy !!!`);
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win the trophy !!!`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`It's tied !!!`);
// }




// BONUS 1
const scoreDolphins = ((97 + 112 + 101) / 3).toFixed(2);
const scoreKoalas = ((109 + 95 + 123) / 3).toFixed(2);
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win the trophy !!!`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`Koalas win the trophy !!!`);
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 & scoreKoalas >= 100) {
    console.log(`It's tied !!!`);
} else {
    console.log(`No one wins the trophy ! :(`);
};
