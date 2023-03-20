// 265. Running Promises in Parallel

'use strict';

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`Country not found (${errorMsg})!`);
        return response.json();
    });
};


const get3Countries = async function(country1, country2, country3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${country1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${country2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${country3}`);

         // console.log([data1.capital, data2.capital, data3.capital]);

        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${country1}`),
            getJSON(`https://restcountries.com/v2/name/${country2}`),
            getJSON(`https://restcountries.com/v2/name/${country3}`),
        ]);

       console.log(data.map(d => d[0]));
       console.log(data.map(d => d[0].capital));
    }
    catch(err) {
        console.log(err);
    };
};
get3Countries('Portugal', 'Canada', 'Germany');
