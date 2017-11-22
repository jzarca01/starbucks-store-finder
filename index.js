'use strict'
const fetch = require('node-fetch');

module.exports = ({ lat, lon } = {} => {
    const apiUrl = `https://www.starbucks.fr/bff/locations?lat=${lat}&lng=${lon}`;

    const options = { 
        method: 'GET',
        headers: 
        { 
            'x-requested-with': 'XMLHttpRequest',
            accept: 'application/json' 
        }
    };

    return fetch(apiUrl, options)
    .then(res => res.text())
    .then(res => JSON.parse(res))
    .catch(err => console.log(err))
});
