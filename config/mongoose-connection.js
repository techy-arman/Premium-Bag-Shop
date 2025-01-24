const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/27017/bagshop').then(()=>{console.log('Connection Succeed')}).catch((err)=>{console.log(err)});

module.exports = mongoose.connection;