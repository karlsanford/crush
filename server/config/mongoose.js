mongoose = require('mongoose');
config = require('./config.js')['development']

mongoose.promise = global.promise
module.exports = mongoose.connect(config.db);


