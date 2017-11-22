'use strict'

const cheerio = require('cheerio')
const request = require('request-promise-native')

module.exports = ({ lat, lon } = {}) => {
  const apiUrl = 'https://www.starbucks.fr/store-locator'

  return new Promise((resolve, reject) => {
    if (!lat || !lon) {
      return reject(new TypeError('Options are required'))
    }

    const api = `${apiUrl}?map=${lat},${lon}`

    request(api).then(res => {
      if (res) {
        const $ = cheerio.load(res)
        const json = JSON.parse($('#bootstrapData').text())
        const stores = json.storeLocator.locationState.locations

        resolve(stores)
      }

      reject(
        new TypeError(`Couldn't find any Starbucks store on this location`)
      )
    })
  })
}
