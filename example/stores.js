const starbucks = require('./index');

const opts = { lat: '-23.585324', lng: '-46.286264,9z' };

await starbucks(opts)
// => [list, of, starbucks, stores, ...]