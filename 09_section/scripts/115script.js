// 115. Coding Challenge #2

'use strict';

/*
Let's continue  with our football betting app!

1. Loop over the game.score array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich : 1.33
    Odd of draw: 3.25
    Odd of victory Borrusia Dortmund: 6.5
Get the team names directly from the game object, don't hardcore them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this: 
    {
        Gnabry: 1,
        Hummels: 1,
        Lewandowski: 2
    }
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnabry',
        'Lewandowski'
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze'
    ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// console.log(game);


// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [goal, player] of game.scored.entries()) {
    console.log(`Goal ${goal + 1}: ${player}`);
};


// 2. Use a loop to calculate the average odd and log it to the console ( We already studied how to calculate averages, you can go check if you don't remember )

const odds = Object.values(game.odds);
let average = 0;
// for (const odd of Object.values(game.odds)) {
//     console.log(odd);
// }
for (const odd of odds) {
    average = average + odd;
};
average = average / odds.length;
console.log(average);
console.log(Number(average.toFixed(1)));


// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//     Odd of victory Bayern Munich : 1.33
//     Odd of draw: 3.25
//     Odd of victory Borrusia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcore them (except for "draw"). 
// HINT: Note how the odds and the game objects have the same property names

// for (const team of Object.entries(game.odds)) {
//     console.log(team);
// };

for (const [team, odd] of Object.entries(game.odds)) {
    // console.log(team, odd);
    const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
};
