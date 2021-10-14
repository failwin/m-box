const mongoose = require('mongoose');

function _mongooseConector() {
    mongoose.connect('mongodb://localhost:27017/tasks', {useNewUrlParser: true, useUnifiedTopology: true}); //to use uniq simbols
}

module.exports = _mongooseConector;