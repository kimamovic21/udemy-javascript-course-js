// 259. Building a Simple Promise

'use strict';

const lotteryPromise = new Promise(function(resolve, reject) {
    console.log(`Lottery draw is happening ✨`);
    setTimeout(function() {
        if(Math.random() >= 0.5) {
            resolve(`You WIN 💰`);
        }
        else {
            reject(new Error(`You lost your money ☹`));
        }
    }, 2000);
});

// console.log(lotteryPromise);
lotteryPromise.then(res => console.log(res))
              .catch(err => console.log(err));


// Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(1)
    .then(() => {
        console.log(`I waited for 1 seconds`);            
        return wait(1); 
    })
    .then(() => {
        console.log(`I waited for 2 seconds`);            
        return wait(1); 
    })
    .then(() => {
        console.log(`I waited for 3 seconds`);            
        return wait(1); 
    })
    .then(() => console.log(`I waited for 4 seconds`)); 

    
Promise
    .resolve(`abc`)
    .then(x => console.log(x));
Promise
    .reject(new Error(`Problem!`))
    .catch(y => console.log(y));
