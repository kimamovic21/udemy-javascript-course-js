// 114. Coding Challenge #1

'use strict';

/*
We're building a football betting app 

Suppose we get data from a web service about a certain game(below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team(variables players1 and players2)
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers) with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team1) used 3 substitute players. So create a new array ('player1Final') containing all the original team1 
players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw', and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, 
along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using and if/else 
statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
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


// 1. destructuring arrays
const [players1, players2] = game.players;
console.log('players1: ', players1); // (11)
console.log('players2: ', players2); // (11)


// 2. destructuring arrays
const [gk, ...fieldPlayers] = players1; 
console.log('gk: ', gk); // Neuer
console.log('fieldPlayers: ', fieldPlayers); // (10)

const [gk2, ...fieldPlayers2] = players2; 
console.log('gk: ', gk2); // Burki
console.log('fieldPlayers: ', fieldPlayers2); // (10)


// 3. spread
const allPlayers = [...players1, ...players2];
console.log('allPlayers: ', allPlayers); // (22)


// 4. 11 players + 3 players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('players1Final:',players1Final); // (14)


// 5. 
const {
    odds: {team1, x: draw, team2},
} = game;
// console.log(odds)
console.log('team1:', team1);
console.log('draw:', draw);
console.log('team2:', team2);


// 6.
const printGoals = function(...players) {
    console.log('players: ', players);
    console.log(`${players.length} goals were scored.`);
};
// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);


// 7.
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');
