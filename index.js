const fetch = require('node-fetch');

module.exports = (coordinates => {
    return getStores(coordinates);
});

function getStores({lat, lng}) {
    const apiUrl = `https://www.starbucks.fr/bff/locations?lat=${lat}&lng=${lng}`;
    
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
    .then(res => res.stores)
    .catch(err => [])
}
