// 264. Returning Values from Async Functions

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
        if(!resGeo.ok) throw new Error(`Problem getting location data`);

        const dataGeo = await resGeo.json();
        // console.log(dataGeo);
    
        // Country data
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
        if(!res.ok) throw new Error(`Problem getting country`);
    
        const data = await res.json();
        // console.log(data);  // [{…}]
        renderCountry(data[0]);

        // Async function returns a promise
        return `You are in ${dataGeo.city}, ${dataGeo.country}.`;
    }
    catch(err) {
        console.log(`${err} ⛔`);
        // renderError(`Something went wrong ${err.message} ⛔`);
    };

    // Reject promise returned from async function
    throw err;
};  

console.log(`1: will get location`);
// const city = whereAmI();  
// console.log(city);  // Promise

// whereAmI()
//     .then(city => console.log(`2: ${city}`)) 
//     .catch(err => console.log(`2: ${err.message} ⛔`))
//     .finally(() => console.log('3: Finished getting location'));

// console.log('3: Finished getting location');


(async function() {
    try {
       const city = await whereAmI();
       console.log(`2: ${city}`);
    }
    catch (err) {
        console.log(`2:${err.message} ⛔`);
    }
    console.log(`3: Finished getting location`)
})();
