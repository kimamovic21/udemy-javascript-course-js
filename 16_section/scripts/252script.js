// 252. Consuming Promises

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data) {
    const html = `
        <article class="country">
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
    countriesContainer.style.opacity = 1;
};


const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);  // Promise {<pending>}


// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function(response) {
//             console.log(response);  // Response
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);  // [{...}]
//             renderCountry(data[0]);
//         });
// };


const getCountryData = country => {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};

getCountryData('portugal');