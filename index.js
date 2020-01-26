const path = require('path')

module.exports = () => require.main.require(path.resolve(__dirname, './package.json'))
