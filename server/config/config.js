var path = require('path')
var rootPath = path.normalize( __dirname + '/../../')

module.exports = {
    development: {
        db: 'mongodb://localhost:27017/crush',
        port: process.env.port || 3333,
        rootPath: rootPath
    },
    production: {
        db: 'mongodb://localhost:27017/crush',
        port: process.env.port || 3333,
        rootPath: rootPath
    }
}