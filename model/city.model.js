let mongoose = require('mongoose');
const {DEFAULT_CONN} = require('./../config/app.config');
const {ac} = require("./../constant")


let city = new mongoose.Schema({
    city_name: {type: String, required:true},
    updated_on: {type: Date, required: false},
    created_on: {type: Date, required: true},
    is_deleted: {type: Boolean, required: false, default: false}
})

module.exports = mongoose.model('City', city)
