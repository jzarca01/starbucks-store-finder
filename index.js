'use strict'

const cheerio = require('cheerio')
const request = require('request-promise-native')

module.exports = ({ lat, lon } = {}) => {
    return new Promise((resolve, reject) => {
      
        if (!lat || !lon) {
        return reject(new TypeError('Options are required'))
        }
        
        const options = { 
          method: 'GET',
          url: 'https://www.starbucks.fr/bff/locations',
          qs: { lat: lat, lng: lon },
          headers: 
          { 
              'x-requested-with': 'XMLHttpRequest',
              accept: 'application/json' 
          }
        };

        request(options).then(res => {
        if (res) {
            resolve(JSON.parse(stores));
        }
        reject(
            new TypeError(`Couldn't find any Starbucks store on this location`)
        )
        })
        .catch(err => console.log);
    });
}
