let mongoose = require('mongoose');
const {DEFAULT_CONN} = require('./../config/app.config');
const {ac} = require("./../constant")


let country = new mongoose.Schema({
    country_name: {type: String, required:true},
    city_ids: [{type: mongoose.Schema.Types.ObjectId, ref: 'City'}],
    updated_on: {type: Date, required: false},
    created_on: {type: Date, required: true},
    is_deleted: {type: Boolean, required: false, default: false}
})

module.exports = mongoose.model('Country', country)
