// 18. Error Handling With try...catch

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////

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


const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};


const whereAmI = async function() {
    try {
        // Geolocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;
    
        // Reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

        if(!resGeo.ok) {
            throw new Error(`Problem getting location data`);
        };

        const dataGeo = await resGeo.json();
        console.log(dataGeo);
    
        // Country data
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);

        if(!res.ok) {
            throw new Error(`Problem getting country`);
        };
    
        const data = await res.json();
        console.log(data);  // [{…}]
        renderCountry(data[0]);
    }

    catch(err) {
        console.error(`${err} ⛔`);
        // renderError(`Something went wrong ${err.message} ⛔`);
    };
};  

whereAmI();  
console.log('First');


// try {
//     let y = 1;
//     const x = 2;
//     y = 3;
// }
// catch(err) {
//     console.log(err);
// };

