const starbucks = require('../');

const opts = { lat: 48.8726311, lng: 2.3113353 };

async function init() {
    try {
        const stores = await starbucks(opts);
        console.log(stores);
    }
    catch(err) {
        console.log(err)
    }
}

init();
