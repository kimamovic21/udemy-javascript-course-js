// 250. Welcome to Callback Hell

'use strict';

//  API - https://restcountries.com/v2/

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
    countriesContainer.style.opacity = 1;
};


const getCountryDataAndNeighbor = function(country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    
    request.addEventListener('load', function() {
        console.log(this.responseText);  // JSON
        const [data] = JSON.parse(this.responseText);
        console.log(data);  // {}

        // Render country 1
        renderCountry(data);

        // Get neighbor country
        // const [neighbor] = data.borders;
        const neighbour = data.borders?.[0];

        if(!neighbour) return;

         // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function() {
            // console.log(this.responseText);
            const data2 = JSON.parse(this.responseText);
            console.log(data2);  // {}

            renderCountry(data2, 'neighbour');
        });
    });
};

// getCountryDataAndNeighbor('bosnia');
getCountryDataAndNeighbor('portugal');


setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000)
