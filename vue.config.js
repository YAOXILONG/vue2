const getEntries = require('./bin/entries').getEntries
const entries = getEntries()
module.exports = {
    pages: entries
}