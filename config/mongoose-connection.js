const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose")
const config = require("config")

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { dbgr('Connection Succeed'); })
    .catch((err) => { dbgr(err); });

module.exports = mongoose.connection;