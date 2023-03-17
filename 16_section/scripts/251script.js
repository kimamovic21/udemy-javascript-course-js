// 251. Promises and the Fetch API

'use strict';

//  API - https://restcountries.com/v2/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);  // Promise {<pending>}
