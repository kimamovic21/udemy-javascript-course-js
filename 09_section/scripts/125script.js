// 125. Coding Challenge #3

'use strict';

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: 
    [FIRST HALF] 17: GOAL
*/

const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow card'],
]);
 
// 1. Create an array 'events' of the different game events that happened (no duplicates)
console.log(gameEvents.values()); // MapIterator 
// const events = new Set(gameEvents.values());
// console.log(events); // Set (4)

const events = [...new Set(gameEvents.values())]
console.log(events); // (4)


// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);


// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(`An event happened, on average every ${90 / gameEvents.size} minutes.`);

const time = [...gameEvents.keys()].pop();
console.log(time); // 92
console.log(`An event happened, on average every ${time / gameEvents.size} minutes.`);


// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: GOAL
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`${half} HALF ${min}: ${event}`);
};
