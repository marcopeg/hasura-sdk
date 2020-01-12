const api = require('./lib/api');
const disk = require('./lib/disk');
const migrations = require('./lib/migrations');
const query = require('./lib/query');

module.exports = {
    ...api,
    ...disk,
    ...migrations,
    ...query,
};