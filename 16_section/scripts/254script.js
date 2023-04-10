// 254. Handling Rejected Promises

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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
    // countriesContainer.style.opacity = 1;
};


const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};


const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);  // Promise {<pending>}

const getCountryData = country => {
    // Country 1
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(
            response => response.json(), 
            // err => alert(err)
        )
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders?.[0];

            if(!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

        })
        .then(
            response => response.json(),
            // err => alert(err)
        )
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
    getCountryData('portugal');
});


// getCountryData('kerim');  // Error
