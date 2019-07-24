const axios = require('axios');

const getStores = async ({lat, lng}) => {
    try {
        const sb = await axios({
            method: 'GET',
            url: `https://www.starbucks.fr/bff/locations?lat=${lat}&lng=${lng}`,
            headers: {
                    'x-requested-with': 'XMLHttpRequest',
                    accept: 'application/json' 
                }
            });
        
        const { stores } = sb.data;
        return stores;
    }
    catch(err) {
        return [];
    })
}

module.exports = getStores;
