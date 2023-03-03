// 154. Coding Challenge #2

'use strict';

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the 
average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/


// 1. map method
const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map((age) => {
        if (age <= 2) {
            return age * 2;
        }
        else {
            return 16 + age * 4;
        };
    });
    console.log(humanAges);

    // 2. filter method
    const adults = humanAges.filter((age) => {
        return age >= 18;
    });
    console.log(adults);

    // 3. average
    const average = adults.reduce((acc, age) => {
        return acc + age;
    }, 0) / adults.length;
    return average;
};

// 4. call the function
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1); // 44
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg2); // 47.33
