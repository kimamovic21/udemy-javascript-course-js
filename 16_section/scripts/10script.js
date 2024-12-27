// 10. Throwing Errors Manually

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);  // Promise {<pending>}


const renderCountry = function(data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
};


const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
};


const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`Country not found (${errorMsg})!`);

        return response.json();
    });
};


const getCountryData = country => {
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found!`)
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];
            // const neighbour = '12345';
            console.log(neighbour);

            // if (!neighbour) return;
            if(!neighbour) throw new Error(`No neighbour found!`);

            // Country 2
            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, `Country not found!`);
        })
        
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.log(`${err} ⛔⛔⛔`);
            renderError(`Something went wrong ⛔⛔⛔ ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};


btn.addEventListener('click', function() {
    // getCountryData('portugal');
    getCountryData('australia');
});


// const getCountryData = country => {
//     // Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then( response => {
//             console.log(response);  // Response
//             // if there is no response
//             if(!response.ok)
//                 throw new Error(`Country not found (${response.status})!`);

//             return response.json()
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders?.[0];
//             // const neighbour = '12345';
//             if(!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

//         })
//         .then(response => {
//             if (!response.ok)
//                 throw new Error (`Neighbour country not found (${response.status})`);
//             return response.json()
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.log(`${err} ⛔⛔⛔`);
//             renderError(`Something went wrong ⛔⛔⛔ ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };


// btn.addEventListener('click', function() {
//     getCountryData('portugal');
// });
