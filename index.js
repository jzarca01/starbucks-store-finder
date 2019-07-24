const { getStores } = require('./lib/stores');

module.exports = (coordinates => {
    return getStores(coordinates);
});
