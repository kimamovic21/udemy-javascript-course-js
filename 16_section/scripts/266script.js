// 266. Other Promise Combinators: race, allSettled and any

'use strict';

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`Country not found (${errorMsg})!`);
        return response.json();
    });
};


(async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/egypt`),
        getJSON(`https://restcountries.com/v2/name/mexico`),
    ]);
    console.log(res[0]);
})();


const timeout = function(sec) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long!`));
        }, sec * 1000)
    });
};


Promise.race([
        getJSON(`https://restcountries.com/v2/name/bosnia`),
        timeout(1)
])
    .then(res => console.log(res[0]))
    .catch(err => console.log(err));


// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
])
    .then(res => console.log(res))  // [{…}, {…}, {…}]
    .catch(err => console.log(err));


// Promise.all
Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
])
    .then(res => console.log(res))
    .catch(err => console.log(err));


// Promise.any (ES2021)
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
])
    .then(res => console.log(res))
    .catch(err => console.log(err));
