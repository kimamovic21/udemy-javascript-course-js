// 40. Basic Array Operations (Methods)

'use strict';

// Add elements - push, unshift
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const newFriend = friends.push('Jay');
console.log(newFriend); 
console.log(friends);

friends.unshift('John');
console.log(friends);

// Remove element - pop, shift
const popped = friends.pop();
console.log(popped);
friends.pop();
console.log(friends);
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

// Position - indexOf
console.log('Michael:', friends.indexOf('Michael'));
console.log('Steven:', friends.indexOf('Steven'));

// Position - includes
console.log('Michael:', friends.includes('Michael'));
console.log('Steven:', friends.includes('Steven'));

if (friends.includes('Peter')) {
    console.log(`You have a friend called Peter`);
} else {
    console.log(`You don't hava a friend called Peter`);
};
