const mongoose = require('mongoose');

const owenerSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String,
})

module.exports = mongoose.model('owner',owenerSchema)